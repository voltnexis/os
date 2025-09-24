// VoltNexis OS Hub - Modern Layout JavaScript
class OSHubModern {
  constructor() {
    this.osFiles = [
      {
        id: 'android-x86',
        name: 'Android x86',
        description: 'Android OS optimized for x86 PCs with full Google Play support and hardware acceleration.',
        category: 'android',
        icon: 'assets/icons/android.png',
        iconColor: '#3DDC84',
        verified: true,
        rating: 4.5,
        downloads: '2.1M',
        lastUpdated: '2023-12-15',
        types: {
          'Live': {
            subtypes: {
              'Standard': {
                '32bit': { file: 'android-x86-9.0-r2-live.iso', size: '845 MB', url: 'assets/os/android-x86-9.0-r2-live.iso' },
                '64bit': { file: 'android-x86_64-9.0-r2-live.iso', size: '922 MB', url: 'assets/os/android-x86_64-9.0-r2-live.iso' }
              },
              'Minimal': {
                '64bit': { file: 'android-x86_64-9.0-r2-live-minimal.iso', size: '680 MB', url: 'assets/os/android-x86_64-9.0-r2-live-minimal.iso' }
              }
            }
          },
          'Installer': {
            subtypes: {
              'Full': {
                '32bit': { file: 'android-x86-9.0-r2-installer.iso', size: '980 MB', url: 'assets/os/android-x86-9.0-r2-installer.iso' },
                '64bit': { file: 'android-x86_64-9.0-r2-installer.iso', size: '1.1 GB', url: 'assets/os/android-x86_64-9.0-r2-installer.iso' }
              }
            }
          }
        }
      },
      {
        id: 'parrot-os',
        name: 'Parrot OS',
        description: 'Debian-based Linux distribution focused on security, privacy, and development.',
        category: 'security',
        icon: 'assets/icons/parrot.png',
        iconColor: '#1E90FF',
        verified: true,
        rating: 4.7,
        downloads: '3.5M',
        lastUpdated: '2025-07-07',
        types: {
          'Live': {
            subtypes: {
              'Home Edition': {
                '64bit': { file: 'parrot-home-6.4-amd64.iso', size: '2.5 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-home-6.4_amd64.iso' }
              },
              'Security Edition': {
                '64bit': { file: 'parrot-security-6.4-amd64.iso', size: '5.4 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-security-6.4_amd64.iso' }
              },
              'HTB': {
                '64bit': { file: 'parrot-security-6.4-amd64.iso', size: '4.8 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-htb-6.4_amd64.iso' }
              }
            }
          },
          'Virtual Machine': {
            subtypes: {
              'VirtualBox': {
                '64bit': { file: 'parrot-virtual-6.4-amd64.ova', size: '3.8 GB', url: 'assets/os/parrot-virtual-6.4-amd64.ova' }
              },
              'VMware': {
                '64bit': { file: 'parrot-vmware-6.4-amd64.vmdk', size: '3.6 GB', url: 'assets/os/parrot-vmware-6.4-amd64.vmdk' }
              }
            }
          }
        }
      },
      {
        id: 'ubuntu-desktop',
        name: 'Ubuntu Desktop',
        description: 'User-friendly Linux distribution perfect for beginners and professionals with LTS support.',
        category: 'linux',
        icon: 'assets/icons/ubuntu.png',
        iconColor: '#E95420',
        verified: true,
        rating: 4.7,
        downloads: '12.3M',
        lastUpdated: '2024-12-20',
        types: {
          'Desktop': {
            subtypes: {
              'Standard': {
                '64bit': { file: 'ubuntu-24.04.2-desktop-amd64.iso', size: '4.6 GB', url: 'assets/os/ubuntu-24.04.2-desktop-amd64.iso' }
              },
              'Minimal': {
                '64bit': { file: 'ubuntu-24.04.2-minimal-amd64.iso', size: '3.2 GB', url: 'assets/os/ubuntu-24.04.2-minimal-amd64.iso' }
              }
            }
          },
          'Server': {
            subtypes: {
              'Standard': {
                '64bit': { file: 'ubuntu-24.04.2-server-amd64.iso', size: '2.1 GB', url: 'assets/os/ubuntu-24.04.2-server-amd64.iso' }
              },
              'Live Server': {
                '64bit': { file: 'ubuntu-24.04.2-live-server-amd64.iso', size: '2.3 GB', url: 'assets/os/ubuntu-24.04.2-live-server-amd64.iso' }
              }
            }
          }
        }
      },
      {
        id: 'windows-11',
        name: 'Windows 11',
        description: 'Latest Windows 11 official ISO with enhanced security, performance, and AI features.',
        category: 'windows',
        icon: 'assets/icons/windows.png',
        iconColor: '#0078D4',
        verified: true,
        rating: 4.3,
        downloads: '25.8M',
        lastUpdated: '2024-11-15',
        types: {
          'Consumer': {
            subtypes: {
              'Home': {
                '64bit': { file: 'Win11_23H2_Home_x64.iso', size: '5.6 GB', url: 'assets/os/Win11_23H2_Home_x64.iso' }
              },
              'Pro': {
                '64bit': { file: 'Win11_23H2_Pro_x64.iso', size: '5.8 GB', url: 'assets/os/Win11_23H2_Pro_x64.iso' }
              }
            }
          },
          'Business': {
            subtypes: {
              'Enterprise': {
                '64bit': { file: 'Win11_23H2_Enterprise_x64.iso', size: '6.1 GB', url: 'assets/os/Win11_23H2_Enterprise_x64.iso' }
              },
              'Education': {
                '64bit': { file: 'Win11_23H2_Education_x64.iso', size: '5.9 GB', url: 'assets/os/Win11_23H2_Education_x64.iso' }
              }
            }
          }
        }
      }
    ];

    this.filteredFiles = [...this.osFiles];
    this.currentFilter = 'all';
    
    this.init();
  }

  init() {
    this.renderOSGrid();
    this.setupEventListeners();
    this.updateStats();
  }

  createOSCard(os) {
    const card = document.createElement('div');
    card.className = 'os-card';
    card.setAttribute('data-category', os.category);
    card.setAttribute('data-id', os.id);

    const iconContent = os.icon.startsWith('assets/') ? 
      `<img src="${os.icon}" alt="${os.name}" style="width: 40px; height: 40px; object-fit: contain;">` : 
      `<i class="${os.icon}"></i>`;

    // Calculate stats
    const totalTypes = os.types ? Object.keys(os.types).length : 0;
    const totalSubtypes = os.types ? 
      Object.values(os.types).reduce((acc, type) => acc + Object.keys(type.subtypes).length, 0) : 0;
    const totalArchs = os.types ? 
      Object.values(os.types).reduce((acc, type) => 
        acc + Object.values(type.subtypes).reduce((subAcc, subtype) => 
          subAcc + Object.keys(subtype).length, 0), 0) : 0;

    card.innerHTML = `
      <div class="os-header">
        <div class="os-icon" style="background: ${os.iconColor}">
          ${iconContent}
        </div>
        <div>
          <div class="os-title">${os.name}</div>
          <div class="os-category">${os.category}</div>
        </div>
      </div>

      <div class="os-description">${os.description}</div>

      <div class="os-stats">
        <div class="stat-item">
          <span class="stat-value">${totalTypes}</span>
          <span class="stat-label">Types</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${totalSubtypes}</span>
          <span class="stat-label">Variants</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${os.downloads}</span>
          <span class="stat-label">Downloads</span>
        </div>
      </div>

      <div class="os-actions">
        <button class="btn-primary" onclick="osHub.navigateToDetail('${os.id}')">
          <i class="fas fa-download"></i>
          View Downloads
        </button>
        <button class="btn-secondary" onclick="osHub.showQuickInfo('${os.id}')">
          <i class="fas fa-info"></i>
        </button>
      </div>
    `;

    return card;
  }

  renderOSGrid() {
    const grid = document.getElementById('osGrid');
    grid.innerHTML = '';
    
    this.filteredFiles.forEach(os => {
      grid.appendChild(this.createOSCard(os));
    });
  }

  filterOS(category) {
    this.currentFilter = category;
    if (category === 'all') {
      this.filteredFiles = [...this.osFiles];
    } else {
      this.filteredFiles = this.osFiles.filter(os => os.category === category);
    }
    this.renderOSGrid();
    this.updateStats();
    
    // Update active filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === category);
    });
  }

  searchOS(query) {
    const searchTerm = query.toLowerCase();
    if (this.currentFilter === 'all') {
      this.filteredFiles = this.osFiles.filter(os => 
        os.name.toLowerCase().includes(searchTerm) ||
        os.description.toLowerCase().includes(searchTerm) ||
        os.category.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredFiles = this.osFiles.filter(os => 
        os.category === this.currentFilter &&
        (os.name.toLowerCase().includes(searchTerm) ||
         os.description.toLowerCase().includes(searchTerm))
      );
    }
    this.renderOSGrid();
    this.updateStats();
  }

  updateStats() {
    document.getElementById('totalOS').textContent = this.filteredFiles.length;
  }

  navigateToDetail(osId) {
    const os = this.osFiles.find(o => o.id === osId);
    if (os) {
      localStorage.setItem('selectedOS', JSON.stringify(os));
      window.location.href = 'os_detail.html';
    }
  }

  showQuickInfo(osId) {
    const os = this.osFiles.find(o => o.id === osId);
    if (!os) return;

    const totalTypes = os.types ? Object.keys(os.types).length : 0;
    const totalSubtypes = os.types ? 
      Object.values(os.types).reduce((acc, type) => acc + Object.keys(type.subtypes).length, 0) : 0;

    alert(`${os.name}\n\nCategory: ${os.category.charAt(0).toUpperCase() + os.category.slice(1)}\nTypes: ${totalTypes}\nVariants: ${totalSubtypes}\nDownloads: ${os.downloads}\nRating: ${os.rating}/5.0\nVerified: ${os.verified ? 'Yes' : 'No'}\n\n${os.description}`);
  }

  setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterOS(btn.dataset.filter);
      });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.searchOS(e.target.value);
    });
  }
}

// Initialize
const osHub = new OSHubModern();