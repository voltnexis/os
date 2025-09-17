// VoltNexis OS Hub - Minimal Cards JavaScript
class OSHub {
  constructor() {
    this.osFiles = [
      {
        id: 'android-x86',
        name: 'Android x86_64 9.0 r2',
        file: 'android-x86_64-9.0-r2.iso',
        fileUrl: 'assets/os/android-x86_64-9.0-r2.iso',
        typeOptions: [
          { value: 'live', label: 'Live Boot', description: 'Run without installation' },
          { value: 'installer', label: 'Installer', description: 'Full installation package' }
        ],
        defaultType: 'live',
        size: '922 MB',
        description: 'Android OS optimized for x86_64 PCs with full Google Play support and hardware acceleration.',
        category: 'android',
        icon: 'assets/icons/android.png',
        iconColor: '#3DDC84',
        verified: true,
        rating: 4.5,
        downloads: '2.1M',
        lastUpdated: '2023-12-15'
      },
      {
        id: 'kali-linux',
        name: 'Kali Linux 2025.2',
        file: 'kali-linux-2025.2-virtualbox-amd64.7z',
        fileUrl: 'assets/os/kali-linux-2025.2-virtualbox-amd64.7z',
        typeOptions: [
          { value: 'virtualbox', label: 'VirtualBox Image', description: 'Pre-configured VM image' },
          { value: 'live-iso', label: 'Live ISO', description: 'Bootable ISO image' }
        ],
        defaultType: 'virtualbox',
        size: '3.1 GB',
        description: 'Advanced penetration testing and security auditing distribution with 600+ tools.',
        category: 'security',
        icon: 'assets/icons/kali.png',
        iconColor: '#557C94',
        verified: true,
        rating: 4.8,
        downloads: '5.7M',
        lastUpdated: '2025-01-10'
      },
      {
        id: 'lineage-gprimelte',
        name: 'LineageOS 18.1 (gprimelte)',
        file: 'lineage-18.1-20210426-UNOFFICIAL-gprimelte-V4stable.zip',
        fileUrl: 'assets/os/lineage-18.1-20210426-UNOFFICIAL-gprimelte-V4stable.zip',
        typeOptions: [
          { value: 'recovery', label: 'Recovery ZIP', description: 'Flash via custom recovery' }
        ],
        defaultType: 'recovery',
        size: '650 MB',
        description: 'Privacy-focused Android ROM for Samsung Galaxy Grand Prime with enhanced performance.',
        category: 'android',
        icon: 'assets/icons/lineage.png',
        iconColor: '#167C80',
        verified: true,
        rating: 4.2,
        downloads: '89K',
        lastUpdated: '2021-04-26'
      },
      {
        id: 'lineage-whyred',
        name: 'LineageOS 18.1 (whyred)',
        file: 'lineage-18.1-20240331-UNOFFICIAL-whyred (1).img',
        fileUrl: 'assets/os/lineage-18.1-20240331-UNOFFICIAL-whyred (1).img',
        typeOptions: [
          { value: 'img', label: 'IMG File', description: 'Direct flash image' }
        ],
        defaultType: 'img',
        size: '1.2 GB',
        description: 'Custom Android ROM for Xiaomi Redmi Note 5 Pro with latest security patches.',
        category: 'android',
        icon: 'assets/icons/lineage.png',
        iconColor: '#167C80',
        verified: true,
        rating: 4.6,
        downloads: '156K',
        lastUpdated: '2024-03-31'
      },
      {
        id: 'ubuntu-desktop',
        name: 'Ubuntu 24.04.2 Desktop',
        file: 'ubuntu-24.04.2-desktop-amd64.iso',
        fileUrl: 'assets/os/ubuntu-24.04.2-desktop-amd64.iso',
        typeOptions: [
          { value: 'desktop', label: 'Desktop ISO', description: 'Full desktop environment' },
          { value: 'live-usb', label: 'Live USB', description: 'Portable USB version' }
        ],
        defaultType: 'desktop',
        size: '4.6 GB',
        description: 'User-friendly Linux distribution perfect for beginners and professionals with LTS support.',
        category: 'linux',
        icon: 'assets/icons/ubuntu.png',
        iconColor: '#E95420',
        verified: true,
        rating: 4.7,
        downloads: '12.3M',
        lastUpdated: '2024-12-20'
      },
      {
        id: 'windows-11',
        name: 'Windows 11 23H2',
        file: 'Win11_23H2_EnglishInternational_x64v2.iso',
        fileUrl: 'assets/os/Win11_23H2_EnglishInternational_x64v2.iso',
        typeOptions: null,
        size: '5.8 GB',
        description: 'Latest Windows 11 official ISO with enhanced security, performance, and AI features.',
        category: 'windows',
        icon: 'assets/icons/windows.png',
        iconColor: '#0078D4',
        verified: true,
        rating: 4.3,
        downloads: '25.8M',
        lastUpdated: '2024-11-15'
      }
    ];

    this.filteredFiles = [...this.osFiles];
    this.currentFilter = 'all';
    this.selectedTypes = new Map();
    
    this.init();
  }

  init() {
    this.renderOSList();
    this.setupEventListeners();
    this.addAnimations();
  }

  createOSCard(os) {
    const card = document.createElement('div');
    card.className = 'os-card';
    card.setAttribute('data-category', os.category);
    card.setAttribute('data-id', os.id);

    const iconContent = os.icon.startsWith('assets/') ? 
      `<img src="${os.icon}" alt="${os.name}" style="width: 32px; height: 32px; object-fit: contain;">` : 
      `<i class="${os.icon}"></i>`;

    card.innerHTML = `
      <div class="os-header">
        <div class="os-icon" style="background: linear-gradient(135deg, ${os.iconColor}, ${this.adjustColor(os.iconColor, -20)})">
          ${iconContent}
        </div>
        <div class="os-title">${os.name}</div>
      </div>

      <div class="os-description">${os.description}</div>

      <div class="os-stats">
        <div class="stat-item">
          <i class="fas fa-hdd"></i>
          <span class="stat-value">${os.size}</span>
        </div>
        <div class="stat-item">
          <i class="fas fa-download"></i>
          <span class="stat-value">${os.downloads}</span>
        </div>
        <div class="stat-item">
          <i class="fas fa-calendar-alt"></i>
          <span class="stat-value">${this.formatDate(os.lastUpdated)}</span>
        </div>
        ${os.verified ? '<div class="stat-item"><i class="fas fa-shield-check"></i><span class="stat-value">Verified</span></div>' : ''}
      </div>
    `;

    // Add click handler to navigate to detail page
    card.addEventListener('click', () => {
      this.navigateToDetail(os.id);
    });

    return card;
  }

  navigateToDetail(osId) {
    // Store OS data in localStorage for the detail page
    const os = this.osFiles.find(o => o.id === osId);
    if (os) {
      localStorage.setItem('selectedOS', JSON.stringify(os));
      window.location.href = 'os_detail.html';
    }
  }



  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
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

  renderOSList() {
    const osList = document.getElementById('osList');
    osList.innerHTML = '';
    
    this.filteredFiles.forEach(os => {
      osList.appendChild(this.createOSCard(os));
    });
    
    document.getElementById('totalOS').textContent = this.filteredFiles.length;
  }

  filterOS(category) {
    this.currentFilter = category;
    if (category === 'all') {
      this.filteredFiles = [...this.osFiles];
    } else {
      this.filteredFiles = this.osFiles.filter(os => os.category === category);
    }
    this.renderOSList();
    
    document.querySelectorAll('.filter-tag').forEach(tag => {
      tag.classList.toggle('active', tag.dataset.filter === category);
    });
  }

  searchOS(query) {
    const searchTerm = query.toLowerCase();
    if (this.currentFilter === 'all') {
      this.filteredFiles = this.osFiles.filter(os => 
        os.name.toLowerCase().includes(searchTerm) ||
        os.description.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredFiles = this.osFiles.filter(os => 
        os.category === this.currentFilter &&
        (os.name.toLowerCase().includes(searchTerm) ||
         os.description.toLowerCase().includes(searchTerm))
      );
    }
    this.renderOSList();
  }



  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('notification-exit');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  setupEventListeners() {
    // Filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        this.filterOS(tag.dataset.filter);
      });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.searchOS(e.target.value);
    });


  }

  addAnimations() {
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
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .os-card {
        animation: fadeIn 0.5s ease forwards;
      }

    `;
    document.head.appendChild(style);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new OSHub();
});