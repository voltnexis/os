// OS Detail Page JavaScript
class OSDetail {
  constructor() {
    this.osData = null;
    this.selectedType = null;
    this.selectedSubtype = null;
    this.init();
  }

  init() {
    this.loadOSData();
    if (this.osData) {
      this.renderOSDetail();
      this.setupEventListeners();
    } else {
      this.redirectToHome();
    }
  }

  loadOSData() {
    const storedData = localStorage.getItem('selectedOS');
    if (storedData) {
      this.osData = JSON.parse(storedData);
      if (this.osData.types && Object.keys(this.osData.types).length > 0) {
        this.selectedType = Object.keys(this.osData.types)[0];
        const firstSubtype = Object.keys(this.osData.types[this.selectedType].subtypes)[0];
        this.selectedSubtype = firstSubtype;
      }
    }
  }

  redirectToHome() {
    window.location.href = 'index.html';
  }

  generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="far fa-star"></i>';
    }

    return stars;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  adjustColor(color, amount) {
    const usePound = color[0] === '#';
    const col = usePound ? color.slice(1) : color;
    const num = parseInt(col, 16);
    let r = (num >> 16) + amount;
    let g = (num >> 8 & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    r = r > 255 ? 255 : r < 0 ? 0 : r;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    b = b > 255 ? 255 : b < 0 ? 0 : b;
    return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
  }

  renderOSDetail() {
    const os = this.osData;
    
    // Update page title
    document.title = `${os.name} - VoltNexis OS Hub`;

    const iconContent = os.icon.startsWith('assets/') ? 
      `<img src="${os.icon}" alt="${os.name}" style="width: 48px; height: 48px; object-fit: contain;">` : 
      `<i class="${os.icon}"></i>`;

    // Calculate stats
    const totalTypes = os.types ? Object.keys(os.types).length : 0;
    const totalSubtypes = os.types ? 
      Object.values(os.types).reduce((acc, type) => acc + Object.keys(type.subtypes).length, 0) : 0;

    // Render hero section
    const heroSection = document.getElementById('osHero');
    heroSection.innerHTML = `
      <div class="hero-header">
        <div class="hero-icon" style="background: ${os.iconColor}">
          ${iconContent}
        </div>
        <div class="hero-info">
          <h1 class="hero-title">${os.name}</h1>
          <div class="hero-rating">
            <div class="rating-stars">
              ${this.generateStars(os.rating)}
            </div>
            <span class="rating-text">${os.rating} out of 5</span>
          </div>
        </div>
      </div>
      
      <div class="hero-stats">
        <div class="stat-card">
          <div class="stat-value">${totalTypes}</div>
          <div class="stat-label">Types</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalSubtypes}</div>
          <div class="stat-label">Subtypes</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${os.downloads}</div>
          <div class="stat-label">Downloads</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${os.verified ? 'Yes' : 'No'}</div>
          <div class="stat-label">Verified</div>
        </div>
      </div>
      
      <div class="hero-description">
        ${os.description}
      </div>
    `;

    // Render download section
    this.renderDownloadSection();

    // Render info sidebar
    this.renderInfoSidebar();
  }

  renderDownloadSection() {
    const downloadSection = document.getElementById('downloadSection');
    
    if (!this.osData.types || Object.keys(this.osData.types).length === 0) {
      downloadSection.innerHTML = '<p style="color: #64748b; text-align: center;">No download options available for this OS.</p>';
      return;
    }

    downloadSection.innerHTML = `
      <div class="version-selector">
        <div class="selector-label">Select Type:</div>
        <div class="selector-grid">
          ${Object.keys(this.osData.types).map(type => `
            <div class="selector-option ${type === this.selectedType ? 'active' : ''}" 
                 data-type="${type}">
              <div class="option-label">${type}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="version-selector">
        <div class="selector-label">Select Subtype:</div>
        <div class="selector-grid" id="subtypeGrid">
          ${this.renderSubtypeOptions()}
        </div>
      </div>
      
      <div class="download-options" id="downloadOptions">
        ${this.renderDownloadOptions()}
      </div>
    `;
  }

  renderSubtypeOptions() {
    const currentType = this.osData.types[this.selectedType];
    if (!currentType) return '';
    
    return Object.keys(currentType.subtypes).map(subtype => `
      <div class="selector-option ${subtype === this.selectedSubtype ? 'active' : ''}" 
           data-subtype="${subtype}">
        <div class="option-label">${subtype}</div>
        <div class="option-detail">${Object.keys(currentType.subtypes[subtype]).length} arch</div>
      </div>
    `).join('');
  }

  renderDownloadOptions() {
    const currentType = this.osData.types[this.selectedType];
    if (!currentType || !currentType.subtypes[this.selectedSubtype]) return '';
    
    const architectures = currentType.subtypes[this.selectedSubtype];
    return Object.entries(architectures).map(([arch, data]) => `
      <div class="download-item">
        <div class="download-info">
          <div class="download-name">${this.selectedType} - ${this.selectedSubtype} (${arch})</div>
          <div class="download-size">${data.size}</div>
        </div>
        <button class="download-btn" onclick="window.open('${data.url}', '_blank')">
          <i class="fas fa-download"></i>
          Download
        </button>
      </div>
    `).join('');
  }

  renderInfoSidebar() {
    const infoList = document.getElementById('infoList');
    const os = this.osData;
    
    const totalTypes = os.types ? Object.keys(os.types).length : 0;
    const totalSubtypes = os.types ? 
      Object.values(os.types).reduce((acc, type) => acc + Object.keys(type.subtypes).length, 0) : 0;
    
    infoList.innerHTML = `
      <li class="info-item">
        <span class="info-label">Category</span>
        <span class="info-value">${os.category.charAt(0).toUpperCase() + os.category.slice(1)}</span>
      </li>
      <li class="info-item">
        <span class="info-label">Total Types</span>
        <span class="info-value">${totalTypes}</span>
      </li>
      <li class="info-item">
        <span class="info-label">Subtypes</span>
        <span class="info-value">${totalSubtypes}</span>
      </li>
      <li class="info-item">
        <span class="info-label">Downloads</span>
        <span class="info-value">${os.downloads}</span>
      </li>
      <li class="info-item">
        <span class="info-label">Last Updated</span>
        <span class="info-value">${this.formatDate(os.lastUpdated)}</span>
      </li>
      <li class="info-item">
        <span class="info-label">Rating</span>
        <span class="info-value">${os.rating}/5.0</span>
      </li>
      <li class="info-item">
        <span class="info-label">Verification</span>
        <span class="info-value">
          ${os.verified ? '<span class="verified-badge"><i class="fas fa-shield-check"></i> Verified</span>' : 'Not Verified'}
        </span>
      </li>
    `;
  }

  setupEventListeners() {
    // Type and subtype selection
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-type]')) {
        const option = e.target.closest('[data-type]');
        const type = option.dataset.type;
        
        this.selectedType = type;
        
        // Reset subtype to first available
        const typeData = this.osData.types[type];
        if (typeData) {
          this.selectedSubtype = Object.keys(typeData.subtypes)[0];
        }
        
        // Re-render download section
        this.renderDownloadSection();
      }
      
      if (e.target.closest('[data-subtype]')) {
        const option = e.target.closest('[data-subtype]');
        const subtype = option.dataset.subtype;
        
        this.selectedSubtype = subtype;
        
        // Update subtype selection UI
        document.querySelectorAll('[data-subtype]').forEach(opt => {
          opt.classList.remove('active');
        });
        option.classList.add('active');
        
        // Update download options
        document.getElementById('downloadOptions').innerHTML = this.renderDownloadOptions();
      }
    });
  }



  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10B981' : '#667eea'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.75rem;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      z-index: 1000;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Global functions for sharing
function shareOS() {
  const osData = JSON.parse(localStorage.getItem('selectedOS'));
  if (!osData) return;

  if (navigator.share) {
    navigator.share({
      title: `${osData.name} - VoltNexis OS Hub`,
      text: osData.description,
      url: window.location.href
    });
  } else {
    copyLink();
  }
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #10B981;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.75rem;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      z-index: 1000;
      font-weight: 500;
      animation: slideIn 0.3s ease;
    `;
    notification.textContent = 'Link copied to clipboard!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new OSDetail();
});