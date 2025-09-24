// VoltNexis OS Hub - Minimal Cards JavaScript
class OSHub {
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
            editions: {
              'Security': {
                architectures: {
                  'amd64': {
                    'ISO': { file: 'Parrot-security-6.4_amd64.iso', size: '5.4 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-security-6.4_amd64.iso' },
                    'Torrent': { file: 'Parrot-security-6.4_amd64.iso.torrent', size: '12 KB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-security-6.4_amd64.iso.torrent' },
                    'Hashes': { file: 'Parrot-security-6.4_amd64.iso.hashes', size: '1 KB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-security-6.4_amd64.iso.hashes' }
                  }
                }
              },
              'Home': {
                architectures: {
                  'amd64': {
                    'ISO': { file: 'Parrot-home-6.4_amd64.iso', size: '2.5 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-home-6.4_amd64.iso' },
                    'Torrent': { file: 'Parrot-home-6.4_amd64.iso.torrent', size: '8 KB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-home-6.4_amd64.iso.torrent' },
                    'Hashes': { file: 'Parrot-home-6.4_amd64.iso.hashes', size: '1 KB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-home-6.4_amd64.iso.hashes' }
                  }
                }
              },
              'HTB': {
                architectures: {
                  'amd64': {
                    'ISO': { file: 'Parrot-htb-6.4_amd64.iso', size: '4.8 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-htb-6.4_amd64.iso' },
                    'Torrent': { file: 'Parrot-htb-6.4_amd64.iso.torrent', size: '10 KB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-htb-6.4_amd64.iso.torrent' },
                    'Hashes': { file: 'Parrot-htb-6.4_amd64.iso.hashes', size: '1 KB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-htb-6.4_amd64.iso.hashes' }
                  }
                }
              }
            }
          },
          'Virtual': {
            editions: {
              'Security': {
                architectures: {
                  'amd64': {
                    'VirtualBox(OVA)': { file: 'Parrot-security-6.4_amd64.ova', size: '3.8 GB', url: 'assets/os/Parrot-security-6.4_amd64.ova' },
                    'VirtualBox(Torrent)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VMWare(OVA)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VMWare(Torrent)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'Hashes': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' }

                  },
                  'arm64': {
                    'VirtualBox(OVA)': { file: 'Parrot-security-6.4_amd64.ova', size: '3.8 GB', url: 'assets/os/Parrot-security-6.4_amd64.ova' },
                    'VirtualBox(Torrent)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VMWare(OVA)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VMWare(Torrent)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'Hashes': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' }
                  }
                }
              },
              'Home': {
                architectures: {
                  'amd64': {
                    'UTM (apple silicon)(utm.zip)': { file: 'Parrot-security-6.4_amd64.ova', size: '3.8 GB', url: 'assets/os/Parrot-security-6.4_amd64.ova' },
                    'UTM (apple silicon)(Torrent)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VMWare(utm.zip)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VMWare(Torrent)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'Hashes': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' }

                  },
                  'arm64': {
                    'VirtualBox(OVA)': { file: 'Parrot-security-6.4_amd64.ova', size: '3.8 GB', url: 'assets/os/Parrot-security-6.4_amd64.ova' },
                    'VirtualBox(Torrent)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VMWare(OVA)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VMWare(Torrent)': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'Hashes': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' }
                  }
                }
              }
            }
          },
          'IoT': {
            editions: {
              'Security': {
                architectures: {
                  'RaspberryPi': {
                    'IMG': { file: 'Parrot-security-6.4_rpi.img.xz', size: '1.8 GB', url: 'assets/os/Parrot-security-6.4_rpi.img.xz' },
                    'Hashes': { file: 'Parrot-security-6.4_rpi.img.xz.hashes', size: '1 KB', url: 'assets/os/Parrot-security-6.4_rpi.img.xz.hashes' }
                  }
                }
              },
              'Home': {
                architectures: {
                  'RaspberryPi': {
                    'IMG': { file: 'Parrot-home-6.4_rpi.img.xz', size: '1.1 GB', url: 'assets/os/Parrot-home-6.4_rpi.img.xz' },
                    'Hashes': { file: 'Parrot-home-6.4_rpi.img.xz.hashes', size: '1 KB', url: 'assets/os/Parrot-home-6.4_rpi.img.xz.hashes' }
                  }
                }
              },
              'Core': {
                architectures: {
                  'RaspberryPi': {
                    'IMG': { file: 'Parrot-core-6.4_rpi.img.xz', size: '800 MB', url: 'assets/os/Parrot-core-6.4_rpi.img.xz' },
                    'Hashes': { file: 'Parrot-core-6.4_rpi.img.xz.hashes', size: '1 KB', url: 'assets/os/Parrot-core-6.4_rpi.img.xz.hashes' }
                  }
                }
              }
            }
          },
          'Other': {
            editions: {
              'WSL': {
                architectures: {
                  'x64': {
                    'WSL': { file: 'parrot-core-6.4.wsl', size: '1.2 GB', url: 'assets/os/parrot-core-6.4.wsl' }
                  }
                }
              },
              'UTM': {
                architectures: {
                  'arm64': {
                    'UTM': { file: 'Parrot-home-6.4_arm64.utm.zip', size: '2.1 GB', url: 'assets/os/Parrot-home-6.4_arm64.utm.zip' }
                  }
                }
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

    // Get total counts for 4-level hierarchy
    const totalTypes = os.types ? Object.keys(os.types).length : 0;
    let totalVariants = 0;
    
    if (os.types) {
      Object.values(os.types).forEach(type => {
        const editions = type.editions || type.subtypes;
        if (editions) {
          Object.values(editions).forEach(edition => {
            const architectures = edition.architectures || edition;
            if (edition.architectures) {
              Object.values(architectures).forEach(arch => {
                totalVariants += this.hasDevices(arch) ? Object.keys(arch).length : 1;
              });
            } else {
              totalVariants += this.hasSubsubtypes(architectures) ? Object.keys(architectures).length : 1;
            }
          });
        }
      });
    }

    card.innerHTML = `
      <div class="os-header">
        <div class="os-icon" style="background: ${os.iconColor}">
          ${iconContent}
        </div>
        <div class="os-title">${os.name}</div>
      </div>

      <div class="os-description">${os.description}</div>

      <div class="os-stats">
        <div class="stat-item-small">
          <i class="fas fa-layer-group"></i>
          <span>${totalTypes} types</span>
        </div>
        <div class="stat-item-small">
          <i class="fas fa-download"></i>
          <span>${os.downloads}</span>
        </div>
        <div class="stat-item-small">
          <i class="fas fa-code-branch"></i>
          <span>${totalVariants} variants</span>
        </div>
        ${os.verified ? '<div class="stat-item-small"><i class="fas fa-shield-check"></i><span>Verified</span></div>' : ''}
      </div>
    `;

    card.addEventListener('click', () => {
      this.navigateToDetail(os.id);
    });

    return card;
  }

  navigateToDetail(osId) {
    const os = this.osFiles.find(o => o.id === osId);
    if (os) {
      localStorage.setItem('selectedOS', JSON.stringify(os));
      window.location.href = 'os_detail.html';
    }
  }
  
  hasSubsubtypes(subtypeData) {
    if (!subtypeData || typeof subtypeData !== 'object') return false;
    
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
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === category);
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

  setupEventListeners() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterOS(btn.dataset.filter);
      });
    });
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.searchOS(e.target.value);
    });
  }

  addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
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

document.addEventListener('DOMContentLoaded', () => {
  new OSHub();
});