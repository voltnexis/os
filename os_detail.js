// OS Detail Page JavaScript
class OSDetail {
  constructor() {
    this.osData = null;
    this.selectedType = null;
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
      this.selectedType = this.osData.defaultType || (this.osData.typeOptions && this.osData.typeOptions[0]?.value);
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

    // Render hero section
    const heroSection = document.getElementById('osHero');
    heroSection.innerHTML = `
      <div class="hero-header">
        <div class="hero-icon" style="background: linear-gradient(135deg, ${os.iconColor}, ${this.adjustColor(os.iconColor, -20)})">
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
          <div class="stat-value">${os.size}</div>
          <div class="stat-label">File Size</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${os.downloads}</div>
          <div class="stat-label">Downloads</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${os.rating}</div>
          <div class="stat-label">Rating</div>
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

    // Render type selector
    this.renderTypeSelector();

    // Render info sidebar
    this.renderInfoSidebar();
  }

  renderTypeSelector() {
    const typeSelector = document.getElementById('typeSelector');
    
    if (!this.osData.typeOptions || this.osData.typeOptions.length === 0) {
      typeSelector.innerHTML = '<p style="color: #64748b; text-align: center;">No download options available for this OS.</p>';
      return;
    }

    typeSelector.innerHTML = `
      <div class="type-options">
        ${this.osData.typeOptions.map(option => `
          <div class="type-option ${option.value === this.selectedType ? 'active' : ''}" 
               data-type="${option.value}">
            <div class="type-option-header">
              <div class="type-option-label">${option.label}</div>
              <div class="type-option-size">${this.osData.size}</div>
            </div>
            <div class="type-option-desc">${option.description}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderInfoSidebar() {
    const infoList = document.getElementById('infoList');
    const os = this.osData;
    
    infoList.innerHTML = `
      <li class="info-item">
        <span class="info-label">Category</span>
        <span class="info-value">${os.category.charAt(0).toUpperCase() + os.category.slice(1)}</span>
      </li>
      <li class="info-item">
        <span class="info-label">File Size</span>
        <span class="info-value">${os.size}</span>
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
      <li class="info-item">
        <span class="info-label">File Name</span>
        <span class="info-value" style="font-size: 0.8rem; word-break: break-all;">${os.file}</span>
      </li>
    `;
  }

  setupEventListeners() {
    // Type option selection
    document.addEventListener('click', (e) => {
      if (e.target.closest('.type-option')) {
        const option = e.target.closest('.type-option');
        const type = option.dataset.type;
        
        // Update selected type
        this.selectedType = type;
        
        // Update UI
        document.querySelectorAll('.type-option').forEach(opt => {
          opt.classList.remove('active');
        });
        option.classList.add('active');
      }
    });

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', () => {
      this.handleDownload();
    });
  }

  handleDownload() {
    const os = this.osData;
    const selectedTypeData = this.selectedType ? 
      os.typeOptions.find(t => t.value === this.selectedType) : null;
    
    const url = os.fileUrl || `assets/os/${encodeURIComponent(os.file)}`;
    const message = `Downloading ${os.name}${selectedTypeData ? ` (${selectedTypeData.label})` : ''}...`;
    
    this.showNotification(message, 'success');
    window.open(url, '_blank');
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