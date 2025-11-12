// OS Detail Page JavaScript
class OSDetail {
  constructor() {
    this.osData = null;
    this.selectedType = null;
    this.selectedEdition = null;
    this.selectedArchitecture = null;
    this.selectedDevice = null;
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
        const typeData = this.osData.types[this.selectedType];
        
        if (typeData.editions) {
          this.selectedEdition = Object.keys(typeData.editions)[0];
          const editionData = typeData.editions[this.selectedEdition];
          
          if (editionData.architectures) {
            this.selectedArchitecture = Object.keys(editionData.architectures)[0];
            const archData = editionData.architectures[this.selectedArchitecture];
            
            if (this.hasDevices(archData)) {
              this.selectedDevice = Object.keys(archData)[0];
            }
          }
        } else if (typeData.subtypes) {
          // Fallback to old structure
          this.selectedEdition = Object.keys(typeData.subtypes)[0];
          const subtypeData = typeData.subtypes[this.selectedEdition];
          if (this.hasSubsubtypes(subtypeData)) {
            this.selectedArchitecture = Object.keys(subtypeData)[0];
          }
        }
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

    const iconContent = os.icon.startsWith('http') || os.icon.startsWith('assets/') ? 
      `<img src="${os.icon}" alt="${os.name}" style="width: 48px; height: 48px; object-fit: contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` +
      `<div style="display: none; width: 48px; height: 48px; background: ${os.iconColor}; border-radius: 8px; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">${os.name.charAt(0)}</div>` :
      `<i class="${os.icon}"></i>`;

    // Calculate stats
    const totalTypes = os.types ? Object.keys(os.types).length : 0;
    let totalEditions = 0;
    let totalArchitectures = 0;
    let totalDevices = 0;
    
    if (os.types) {
      Object.values(os.types).forEach(type => {
        const editions = type.editions || type.subtypes;
        if (editions) {
          totalEditions += Object.keys(editions).length;
          Object.values(editions).forEach(edition => {
            const architectures = edition.architectures || edition;
            if (edition.architectures) {
              totalArchitectures += Object.keys(architectures).length;
              Object.values(architectures).forEach(arch => {
                if (this.hasDevices(arch)) {
                  totalDevices += Object.keys(arch).length;
                }
              });
            } else if (this.hasSubsubtypes(architectures)) {
              totalArchitectures += Object.keys(architectures).length;
            }
          });
        }
      });
    }

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
          <div class="stat-value">${totalEditions}</div>
          <div class="stat-label">Editions</div>
        </div>
        ${totalArchitectures > 0 ? `
        <div class="stat-card">
          <div class="stat-value">${totalArchitectures}</div>
          <div class="stat-label">Architectures</div>
        </div>` : ''}
        ${totalDevices > 0 ? `
        <div class="stat-card">
          <div class="stat-value">${totalDevices}</div>
          <div class="stat-label">Devices</div>
        </div>` : ''}
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
    
    // Render screenshots
    this.renderScreenshots();
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
      
      ${this.renderEditionSelector()}
      ${this.renderArchitectureSelector()}
      ${this.renderDeviceSelector()}
      
      <div class="download-options" id="downloadOptions">
        ${this.renderDownloadOptions()}
      </div>
    `;
  }

  renderEditionSelector() {
    const currentType = this.osData.types[this.selectedType];
    if (!currentType) return '';
    
    const editions = currentType.editions || currentType.subtypes;
    if (!editions) return '';
    
    return `
      <div class="version-selector">
        <div class="selector-label">Select Edition:</div>
        <div class="selector-grid" id="editionGrid">
          ${Object.keys(editions).map(edition => {
            const editionData = editions[edition];
            const count = editionData.architectures ? 
              Object.keys(editionData.architectures).length : 
              Object.keys(editionData).length;
            
            return `
              <div class="selector-option ${edition === this.selectedEdition ? 'active' : ''}" 
                   data-edition="${edition}">
                <div class="option-label">${edition}</div>
                <div class="option-detail">${count} options</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
  
  renderArchitectureSelector() {
    const currentType = this.osData.types[this.selectedType];
    if (!currentType || !this.selectedEdition) return '';
    
    const editions = currentType.editions || currentType.subtypes;
    const editionData = editions[this.selectedEdition];
    if (!editionData) return '';
    
    const architectures = editionData.architectures || editionData;
    if (!architectures || this.getStructureDepth(currentType) < 3) return '';
    
    return `
      <div class="version-selector">
        <div class="selector-label">Select Architecture:</div>
        <div class="selector-grid" id="architectureGrid">
          ${Object.keys(architectures).map(arch => {
            const archData = architectures[arch];
            const count = this.hasDevices(archData) ? 
              Object.keys(archData).length : 1;
            
            return `
              <div class="selector-option ${arch === this.selectedArchitecture ? 'active' : ''}" 
                   data-architecture="${arch}">
                <div class="option-label">${arch}</div>
                <div class="option-detail">${count} ${this.hasDevices(archData) ? 'devices' : 'option'}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
  
  renderDeviceSelector() {
    const currentType = this.osData.types[this.selectedType];
    if (!currentType || !this.selectedEdition || !this.selectedArchitecture) return '';
    
    const editions = currentType.editions || currentType.subtypes;
    const editionData = editions[this.selectedEdition];
    const architectures = editionData.architectures || editionData;
    const archData = architectures[this.selectedArchitecture];
    
    if (!this.hasDevices(archData)) return '';
    
    return `
      <div class="version-selector">
        <div class="selector-label">Select Device:</div>
        <div class="selector-grid" id="deviceGrid">
          ${Object.keys(archData).map(device => `
            <div class="selector-option ${device === this.selectedDevice ? 'active' : ''}" 
                 data-device="${device}">
              <div class="option-label">${device}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderDownloadOptions() {
    const currentType = this.osData.types[this.selectedType];
    if (!currentType || !this.selectedEdition) return '';
    
    const editions = currentType.editions || currentType.subtypes;
    const editionData = editions[this.selectedEdition];
    if (!editionData) return '';
    
    const depth = this.getStructureDepth(currentType);
    let downloadData, namePrefix;
    
    if (depth === 4) {
      if (!this.selectedArchitecture || !this.selectedDevice) return '';
      const architectures = editionData.architectures;
      const archData = architectures[this.selectedArchitecture];
      downloadData = archData[this.selectedDevice];
      namePrefix = `${this.selectedType} - ${this.selectedEdition} - ${this.selectedArchitecture} - ${this.selectedDevice}`;
    } else if (depth === 3) {
      if (!this.selectedArchitecture) return '';
      const architectures = editionData.architectures || editionData;
      downloadData = architectures[this.selectedArchitecture];
      namePrefix = `${this.selectedType} - ${this.selectedEdition} - ${this.selectedArchitecture}`;
    } else {
      downloadData = editionData;
      namePrefix = `${this.selectedType} - ${this.selectedEdition}`;
    }
    
    if (!downloadData) return '';
    
    // If downloadData has file/size/url properties, it's a single download
    if (downloadData.file) {
      return `
        <div class="download-item">
          <div class="download-info">
            <div class="download-name">${namePrefix}</div>
            <div class="download-size">${downloadData.size}</div>
          </div>
          <button class="download-btn" onclick="window.open('${downloadData.url}', '_blank')">
            <i class="fas fa-download"></i>
            Download
          </button>
        </div>
      `;
    }
    
    // Multiple downloads
    return Object.entries(downloadData).map(([key, data]) => `
      <div class="download-item">
        <div class="download-info">
          <div class="download-name">${namePrefix} (${key})</div>
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
    let totalEditions = 0;
    let totalArchitectures = 0;
    let totalDevices = 0;
    
    if (os.types) {
      Object.values(os.types).forEach(type => {
        const editions = type.editions || type.subtypes;
        if (editions) {
          totalEditions += Object.keys(editions).length;
          Object.values(editions).forEach(edition => {
            const architectures = edition.architectures || edition;
            if (edition.architectures) {
              totalArchitectures += Object.keys(architectures).length;
              Object.values(architectures).forEach(arch => {
                if (this.hasDevices(arch)) {
                  totalDevices += Object.keys(arch).length;
                }
              });
            } else if (this.hasSubsubtypes(architectures)) {
              totalArchitectures += Object.keys(architectures).length;
            }
          });
        }
      });
    }
    
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
        <span class="info-label">Editions</span>
        <span class="info-value">${totalEditions}</span>
      </li>
      ${totalArchitectures > 0 ? `
      <li class="info-item">
        <span class="info-label">Architectures</span>
        <span class="info-value">${totalArchitectures}</span>
      </li>` : ''}
      ${totalDevices > 0 ? `
      <li class="info-item">
        <span class="info-label">Devices</span>
        <span class="info-value">${totalDevices}</span>
      </li>` : ''}
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
        
        // Reset selections to first available
        const typeData = this.osData.types[type];
        if (typeData) {
          const editions = typeData.editions || typeData.subtypes;
          this.selectedEdition = Object.keys(editions)[0];
          
          const editionData = editions[this.selectedEdition];
          if (editionData.architectures) {
            this.selectedArchitecture = Object.keys(editionData.architectures)[0];
            const archData = editionData.architectures[this.selectedArchitecture];
            this.selectedDevice = this.hasDevices(archData) ? Object.keys(archData)[0] : null;
          } else if (this.hasSubsubtypes(editionData)) {
            this.selectedArchitecture = Object.keys(editionData)[0];
            this.selectedDevice = null;
          } else {
            this.selectedArchitecture = null;
            this.selectedDevice = null;
          }
        }
        
        // Re-render download section
        this.renderDownloadSection();
      }
      
      if (e.target.closest('[data-edition]')) {
        const option = e.target.closest('[data-edition]');
        const edition = option.dataset.edition;
        
        this.selectedEdition = edition;
        
        // Reset dependent selections
        const currentType = this.osData.types[this.selectedType];
        const editions = currentType.editions || currentType.subtypes;
        const editionData = editions[edition];
        
        if (editionData.architectures) {
          this.selectedArchitecture = Object.keys(editionData.architectures)[0];
          const archData = editionData.architectures[this.selectedArchitecture];
          this.selectedDevice = this.hasDevices(archData) ? Object.keys(archData)[0] : null;
        } else if (this.hasSubsubtypes(editionData)) {
          this.selectedArchitecture = Object.keys(editionData)[0];
          this.selectedDevice = null;
        } else {
          this.selectedArchitecture = null;
          this.selectedDevice = null;
        }
        
        // Update UI
        document.querySelectorAll('[data-edition]').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        this.renderDownloadSection();
      }
      
      if (e.target.closest('[data-architecture]')) {
        const option = e.target.closest('[data-architecture]');
        const architecture = option.dataset.architecture;
        
        this.selectedArchitecture = architecture;
        
        // Reset device selection
        const currentType = this.osData.types[this.selectedType];
        const editions = currentType.editions || currentType.subtypes;
        const editionData = editions[this.selectedEdition];
        const architectures = editionData.architectures || editionData;
        const archData = architectures[architecture];
        
        this.selectedDevice = this.hasDevices(archData) ? Object.keys(archData)[0] : null;
        
        // Update UI
        document.querySelectorAll('[data-architecture]').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Re-render device selector and download options
        const deviceSelector = document.getElementById('deviceGrid');
        if (deviceSelector) {
          deviceSelector.parentElement.outerHTML = this.renderDeviceSelector();
        }
        document.getElementById('downloadOptions').innerHTML = this.renderDownloadOptions();
      }
      
      if (e.target.closest('[data-device]')) {
        const option = e.target.closest('[data-device]');
        const device = option.dataset.device;
        
        this.selectedDevice = device;
        
        // Update UI
        document.querySelectorAll('[data-device]').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Update download options
        document.getElementById('downloadOptions').innerHTML = this.renderDownloadOptions();
      }
    });
  }
  
  hasSubsubtypes(subtypeData) {
    if (!subtypeData || typeof subtypeData !== 'object') return false;
    
    // Check if any value is an object with nested structure
    return Object.values(subtypeData).some(value => 
      typeof value === 'object' && 
      value !== null && 
      !value.hasOwnProperty('file') && 
      !value.hasOwnProperty('size') && 
      !value.hasOwnProperty('url')
    );
  }
  
  hasDevices(archData) {
    if (!archData || typeof archData !== 'object') return false;
    
    return Object.values(archData).some(value => 
      typeof value === 'object' && 
      value !== null && 
      !value.hasOwnProperty('file') && 
      !value.hasOwnProperty('size') && 
      !value.hasOwnProperty('url')
    );
  }
  
  getStructureDepth(typeData) {
    if (typeData.editions) {
      const edition = typeData.editions[Object.keys(typeData.editions)[0]];
      if (edition.architectures) {
        const arch = edition.architectures[Object.keys(edition.architectures)[0]];
        return this.hasDevices(arch) ? 4 : 3;
      }
      return 2;
    } else if (typeData.subtypes) {
      const subtype = typeData.subtypes[Object.keys(typeData.subtypes)[0]];
      return this.hasSubsubtypes(subtype) ? 3 : 2;
    }
    return 1;
  }
  
  renderScreenshots() {
    const screenshotsContainer = document.getElementById('screenshotsContainer');
    const os = this.osData;
    
    if (!os.screenshots || os.screenshots.length === 0) {
      screenshotsContainer.innerHTML = `
        <div class="screenshot">
          <i class="fas fa-image"></i>
        </div>
        <div class="screenshot">
          <i class="fas fa-image"></i>
        </div>
        <div class="screenshot">
          <i class="fas fa-image"></i>
        </div>
        <div class="screenshot">
          <i class="fas fa-image"></i>
        </div>
      `;
      return;
    }
    
    screenshotsContainer.innerHTML = os.screenshots.map(screenshot => `
      <div class="screenshot" onclick="openScreenshot('${screenshot}')">
        <img src="${screenshot}" alt="${os.name} screenshot" 
             style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
             onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\"fas fa-image\"></i>';">
      </div>
    `).join('');
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

// Global functions for sharing and screenshots
function openScreenshot(url) {
  window.open(url, '_blank');
}

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