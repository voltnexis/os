// VoltNexis OS Hub - Comprehensive OS Database
class OSHub {
  constructor() {
    this.osFiles = [
      // Linux - Debian-Based
      {
        id: 'debian',
        name: 'Debian',
        description: 'The universal operating system - stable, secure, and completely free.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/debian.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.6,
        downloads: '8.2M',
        lastUpdated: '2024-11-30',
        screenshots: [
          'https://upload.wikimedia.org/wikipedia/commons/f/f8/Screenshot_of_Debian_12_%28Bookworm%29_GNOME_43.9%E2%80%94English.png',
          'https://b1490832.smushcdn.com/1490832/wp-content/uploads/2022/02/Xfce-desktop.png',
          'https://b1490832.smushcdn.com/1490832/wp-content/uploads/2022/02/Cinnamon-themes.png',
          'https://media.geeksforgeeks.org/wp-content/uploads/20220124180816/dolphin.jpg'
        ],
        types: {
          'NetInstall': {
            editions: {
              'Minimal': {
                architectures: {
                  'amd64': { 'ISO': { file: 'debian-12.8.0-amd64-netinst.iso', size: '650 MB', url: 'assets/os/debian-12.8.0-amd64-netinst.iso' } },
                  'arm64': { 'ISO': { file: 'debian-12.8.0-arm64-netinst.iso', size: '620 MB', url: 'assets/os/debian-12.8.0-arm64-netinst.iso' } },
                  'i386': { 'ISO': { file: 'debian-12.8.0-i386-netinst.iso', size: '640 MB', url: 'assets/os/debian-12.8.0-i386-netinst.iso' } }
                }
              }
            }
          },
          'Live': {
            editions: {
              'GNOME': {
                architectures: {
                  'amd64': { 'ISO': { file: 'debian-live-12.8.0-amd64-gnome.iso', size: '3.1 GB', url: 'assets/os/debian-live-12.8.0-amd64-gnome.iso' } },
                  'i386': { 'ISO': { file: 'debian-live-12.8.0-i386-gnome.iso', size: '3.0 GB', url: 'assets/os/debian-live-12.8.0-i386-gnome.iso' } }
                }
              }
            }
          },
          'Installer DVD': {
            editions: {
              'Complete': {
                architectures: {
                  'amd64': { 'ISO': { file: 'debian-12.8.0-amd64-DVD-1.iso', size: '3.7 GB', url: 'assets/os/debian-12.8.0-amd64-DVD-1.iso' } },
                  'arm64': { 'ISO': { file: 'debian-12.8.0-arm64-DVD-1.iso', size: '3.6 GB', url: 'assets/os/debian-12.8.0-arm64-DVD-1.iso' } },
                  'i386': { 'ISO': { file: 'debian-12.8.0-i386-DVD-1.iso', size: '3.5 GB', url: 'assets/os/debian-12.8.0-i386-DVD-1.iso' } }
                }
              }
            }
          }
        }
      },
      {
        id: 'ubuntu',
        name: 'Ubuntu',
        description: 'User-friendly Linux distribution perfect for beginners and professionals.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/ubuntu.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.7,
        downloads: '12.3M',
        lastUpdated: '2024-12-20',
        screenshots: [
          'https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_720/https%3A%2F%2Flh6.googleusercontent.com%2FhudiV1JElIOeNNSTcnVRLCQ-Ekr_COZepxM_UBWmBZyDUeP3wzE9cGUyB8zZMNPiyQQXkmEmOssKNvs1VMvx58N5ayB6e8-eaiU0wHrr76_QdiD7M-vvbtce2LYJ6LsyS9YUGs2T',
          'https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/2/2022/04/Ubuntu-full-menu-screenshot.png',
          'https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/2/2022/04/Ubuntu-Location-Services-menu.png',
          'https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/2/2022/04/Ubuntu-Controls-menu..png'
        ],
        types: {
          'Desktop': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'ubuntu-24.04.2-desktop-amd64.iso', size: '4.6 GB', url: 'assets/os/ubuntu-24.04.2-desktop-amd64.iso' } },
                  'arm64': { 'ISO': { file: 'ubuntu-24.04.2-desktop-arm64.iso', size: '4.4 GB', url: 'assets/os/ubuntu-24.04.2-desktop-arm64.iso' } }
                }
              }
            }
          },
          'Server': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'ubuntu-24.04.2-server-amd64.iso', size: '2.1 GB', url: 'assets/os/ubuntu-24.04.2-server-amd64.iso' } },
                  'arm64': { 'ISO': { file: 'ubuntu-24.04.2-server-arm64.iso', size: '2.0 GB', url: 'assets/os/ubuntu-24.04.2-server-arm64.iso' } }
                }
              }
            }
          },
          'Flavours': {
            editions: {
              'Kubuntu': { architectures: { 'amd64': { 'ISO': { file: 'kubuntu-24.04.2-desktop-amd64.iso', size: '4.2 GB', url: 'assets/os/kubuntu-24.04.2-desktop-amd64.iso' } } } },
              'Xubuntu': { architectures: { 'amd64': { 'ISO': { file: 'xubuntu-24.04.2-desktop-amd64.iso', size: '3.8 GB', url: 'assets/os/xubuntu-24.04.2-desktop-amd64.iso' } } } },
              'Lubuntu': { architectures: { 'amd64': { 'ISO': { file: 'lubuntu-24.04.2-desktop-amd64.iso', size: '3.2 GB', url: 'assets/os/lubuntu-24.04.2-desktop-amd64.iso' } } } },
              'Ubuntu Budgie': { architectures: { 'amd64': { 'ISO': { file: 'ubuntu-budgie-24.04.2-desktop-amd64.iso', size: '4.0 GB', url: 'assets/os/ubuntu-budgie-24.04.2-desktop-amd64.iso' } } } },
              'Ubuntu Studio': { architectures: { 'amd64': { 'ISO': { file: 'ubuntustudio-24.04.2-dvd-amd64.iso', size: '5.2 GB', url: 'assets/os/ubuntustudio-24.04.2-dvd-amd64.iso' } } } },
              'Ubuntu MATE': { architectures: { 'amd64': { 'ISO': { file: 'ubuntu-mate-24.04.2-desktop-amd64.iso', size: '4.1 GB', url: 'assets/os/ubuntu-mate-24.04.2-desktop-amd64.iso' } } } },
              'Ubuntu Kylin': { architectures: { 'amd64': { 'ISO': { file: 'ubuntukylin-24.04.2-desktop-amd64.iso', size: '4.3 GB', url: 'assets/os/ubuntukylin-24.04.2-desktop-amd64.iso' } } } }
            }
          },
          'Cloud': {
            editions: {
              'Cloud Images': { architectures: { 'amd64': { 'QCOW2': { file: 'ubuntu-24.04-server-cloudimg-amd64.img', size: '700 MB', url: 'assets/os/ubuntu-24.04-server-cloudimg-amd64.img' } } } },
              'WSL': { architectures: { 'x64': { 'AppX': { file: 'ubuntu-24.04-wsl.appx', size: '450 MB', url: 'assets/os/ubuntu-24.04-wsl.appx' } } } }
            }
          }
        }
      },
      {
        id: 'linux-mint',
        name: 'Linux Mint',
        description: 'Elegant, easy to use, up to date and comfortable desktop operating system.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/mint.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.8,
        downloads: '5.4M',
        lastUpdated: '2024-12-15',
        screenshots: [
          'https://voltnexis.github.io/data/os/scnshots/1.jpg',
          'https://voltnexis.github.io/data/os/scrnshots/2.jpg'
        ],
        types: {
          'Cinnamon': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'linuxmint-22.1-cinnamon-64bit.iso', size: '3.1 GB', url: 'assets/os/linuxmint-22.1-cinnamon-64bit.iso' } }
                }
              }
            }
          },
          'MATE': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'linuxmint-22.1-mate-64bit.iso', size: '2.9 GB', url: 'assets/os/linuxmint-22.1-mate-64bit.iso' } }
                }
              }
            }
          },
          'XFCE': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'linuxmint-22.1-xfce-64bit.iso', size: '2.7 GB', url: 'assets/os/linuxmint-22.1-xfce-64bit.iso' } }
                }
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
        icon: 'https://voltnexis.github.io/data/os/icons/parrot.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.7,
        downloads: '3.5M',
        lastUpdated: '2025-01-07',
        screenshots: [
          'https://voltnexis.github.io/data/os/scrnshots/1.jpg',
          'https://voltnexis.github.io/data/os/scrnshots/2.jpg',
          'https://voltnexis.github.io/data/os/scrnshots/3.jpg'
        ],
        types: {
          'Live': {
            editions: {
              'Security': { architectures: { 'amd64': { 'ISO': { file: 'Parrot-security-6.4_amd64.iso', size: '5.4 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-security-6.4_amd64.iso' } } } },
              'Home': { architectures: { 'amd64': { 'ISO': { file: 'Parrot-home-6.4_amd64.iso', size: '2.5 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-home-6.4_amd64.iso' } } } },
              'HTB': { architectures: { 'amd64': { 'ISO': { file: 'Parrot-htb-6.4_amd64.iso', size: '4.8 GB', url: 'https://deb.parrot.sh/parrot/iso/6.4/Parrot-htb-6.4_amd64.iso' } } } }
            }
          },
          'Virtual': {
            editions: {
              'Security': {
                architectures: {
                  'amd64': {
                    'OVA': { file: 'Parrot-security-6.4_amd64.ova', size: '3.8 GB', url: 'assets/os/Parrot-security-6.4_amd64.ova' },
                    'QCOW2': { file: 'Parrot-security-6.4_amd64.qcow2', size: '3.5 GB', url: 'assets/os/Parrot-security-6.4_amd64.qcow2' },
                    'VDI': { file: 'Parrot-security-6.4_amd64.vdi', size: '3.6 GB', url: 'assets/os/Parrot-security-6.4_amd64.vdi' },
                    'VMDK': { file: 'Parrot-security-6.4_amd64.vmdk', size: '3.7 GB', url: 'assets/os/Parrot-security-6.4_amd64.vmdk' }
                  }
                }
              }
            }
          },
          'IoT': {
            editions: {
              'Security': { architectures: { 'RaspberryPi': { 'IMG': { file: 'Parrot-security-6.4_rpi.img.xz', size: '1.8 GB', url: 'assets/os/Parrot-security-6.4_rpi.img.xz' } } } },
              'Home': { architectures: { 'RaspberryPi': { 'IMG': { file: 'Parrot-home-6.4_rpi.img.xz', size: '1.1 GB', url: 'assets/os/Parrot-home-6.4_rpi.img.xz' } } } },
              'Core': { architectures: { 'RaspberryPi': { 'IMG': { file: 'Parrot-core-6.4_rpi.img.xz', size: '800 MB', url: 'assets/os/Parrot-core-6.4_rpi.img.xz' } } } }
            }
          }
        }
      },
      {
        id: 'kali-linux',
        name: 'Kali Linux',
        description: 'Advanced penetration testing and security auditing distribution.',
        category: 'security',
        icon: 'https://voltnexis.github.io/data/os/icons/kali.webp',
        iconColor: '#557C94',
        verified: true,
        rating: 4.8,
        downloads: '5.7M',
        lastUpdated: '2025-01-10',
        screenshots: [
          'https://voltnexis.github.io/data/os/screenshots/kali-1.jpg',
          'https://voltnexis.github.io/data/os/screenshots/kali-2.jpg',
          'https://voltnexis.github.io/data/os/screenshots/kali-3.jpg',
          'https://voltnexis.github.io/data/os/screenshots/kali-4.jpg'
        ],
        types: {
          'Installer': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 
                    'ISO': { file: 'kali-linux-2025.3-installer-amd64.iso', size: '4.2 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-amd64.iso' },
                    'Weekly': { file: 'kali-linux-2025-W39-installer-amd64.iso', size: '4.2 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-installer-amd64.iso' }
                  },
                  'arm64': { 
                    'ISO': { file: 'kali-linux-2025.3-installer-arm64.iso', size: '3.8 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-arm64.iso' },
                    'Weekly': { file: 'kali-linux-2025-W39-installer-arm64.iso', size: '3.8 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-installer-arm64.iso' }
                  }
                }
              },
              'Netinstall': {
                architectures: {
                  'amd64': { 'ISO': { file: 'kali-linux-2025.3-installer-netinst-amd64.iso', size: '600 MB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-netinst-amd64.iso' } },
                  'arm64': { 'ISO': { file: 'kali-linux-2025.3-installer-netinst-arm64.iso', size: '550 MB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-netinst-arm64.iso' } }
                }
              },
              'Purple': {
                architectures: {
                  'amd64': { 
                    'ISO': { file: 'kali-linux-2025.3-installer-purple-amd64.iso', size: '4.5 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-installer-purple-amd64.iso' },
                    'Weekly': { file: 'kali-linux-2025-W39-installer-purple-amd64.iso', size: '4.5 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-installer-purple-amd64.iso' }
                  }
                }
              }
            }
          },
          'Virtual': {
            editions: {
              'VMware': { 
                architectures: { 
                  'amd64': { 
                    '7Z': { file: 'kali-linux-2025.3-vmware-amd64.7z', size: '3.2 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-vmware-amd64.7z' },
                    'Weekly': { file: 'kali-linux-2025-W39-vmware-amd64.7z', size: '3.2 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-vmware-amd64.7z' }
                  } 
                } 
              },
              'VirtualBox': { 
                architectures: { 
                  'amd64': { 
                    '7Z': { file: 'kali-linux-2025.3-virtualbox-amd64.7z', size: '3.1 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-virtualbox-amd64.7z' },
                    'Weekly': { file: 'kali-linux-2025-W39-virtualbox-amd64.7z', size: '3.1 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-virtualbox-amd64.7z' }
                  } 
                } 
              },
              'Hyper-V': { 
                architectures: { 
                  'amd64': { 
                    '7Z': { file: 'kali-linux-2025.3-hyperv-amd64.7z', size: '3.0 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-hyperv-amd64.7z' },
                    'Weekly': { file: 'kali-linux-2025-W39-hyperv-amd64.7z', size: '3.0 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-hyperv-amd64.7z' }
                  } 
                } 
              },
              'QEMU': { 
                architectures: { 
                  'amd64': { 
                    '7Z': { file: 'kali-linux-2025.3-qemu-amd64.7z', size: '2.9 GB', url: 'https://cdimage.kali.org/kali-2025.3/kali-linux-2025.3-qemu-amd64.7z' },
                    'Weekly': { file: 'kali-linux-2025-W39-qemu-amd64.7z', size: '2.9 GB', url: 'https://cdimage.kali.org/kali-weekly/kali-linux-2025-W39-qemu-amd64.7z' }
                  } 
                } 
              }
            }
          },
          'ARM': {
            editions: {
              'Raspberry Pi': {
                architectures: {
                  'armhf': { 'IMG': { file: 'kali-linux-2025.3-raspberry-pi-armhf.img.xz', size: '1.2 GB', url: 'https://kali.download/arm-images/kali-2025.3/kali-linux-2025.3-raspberry-pi-armhf.img.xz' } },
                  'arm64': { 'IMG': { file: 'kali-linux-2025.3-raspberry-pi-arm64.img.xz', size: '1.4 GB', url: 'https://kali.download/arm-images/kali-2025.3/kali-linux-2025.3-raspberry-pi-arm64.img.xz' } }
                }
              }
            }
          }
        }
      },
      {
        id: 'tails',
        name: 'Tails',
        description: 'The Amnesic Incognito Live System - Privacy and anonymity for everyone.',
        category: 'security',
        icon: 'https://voltnexis.github.io/data/os/icons/tails.webp',
        iconColor: '#56347C',
        verified: true,
        rating: 4.5,
        downloads: '2.1M',
        lastUpdated: '2024-12-10',
        types: {
          'Live': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'tails-amd64-6.10.iso', size: '1.4 GB', url: 'assets/os/tails-amd64-6.10.iso' } }
                }
              }
            }
          }
        }
      },
      // Linux - RedHat-Based
      {
        id: 'fedora',
        name: 'Fedora',
        description: 'Cutting-edge Linux distribution with latest features and technologies.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/fedora.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.5,
        downloads: '6.8M',
        lastUpdated: '2024-12-15',
        types: {
          'Workstation': {
            editions: {
              'GNOME': {
                architectures: {
                  'amd64': { 'ISO': { file: 'Fedora-Workstation-Live-x86_64-41.iso', size: '2.1 GB', url: 'assets/os/Fedora-Workstation-Live-x86_64-41.iso' } },
                  'arm64': { 'ISO': { file: 'Fedora-Workstation-Live-aarch64-41.iso', size: '2.0 GB', url: 'assets/os/Fedora-Workstation-Live-aarch64-41.iso' } }
                }
              }
            }
          },
          'Server': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'Fedora-Server-dvd-x86_64-41.iso', size: '2.4 GB', url: 'assets/os/Fedora-Server-dvd-x86_64-41.iso' } },
                  'arm64': { 'ISO': { file: 'Fedora-Server-dvd-aarch64-41.iso', size: '2.3 GB', url: 'assets/os/Fedora-Server-dvd-aarch64-41.iso' } }
                }
              }
            }
          },
          'Silverblue': {
            editions: {
              'Immutable Desktop': {
                architectures: {
                  'amd64': { 'ISO': { file: 'Fedora-Silverblue-ostree-x86_64-41.iso', size: '2.2 GB', url: 'assets/os/Fedora-Silverblue-ostree-x86_64-41.iso' } }
                }
              }
            }
          },
          'Spins': {
            editions: {
              'KDE': { architectures: { 'amd64': { 'ISO': { file: 'Fedora-KDE-Live-x86_64-41.iso', size: '2.2 GB', url: 'assets/os/Fedora-KDE-Live-x86_64-41.iso' } } } },
              'XFCE': { architectures: { 'amd64': { 'ISO': { file: 'Fedora-Xfce-Live-x86_64-41.iso', size: '1.8 GB', url: 'assets/os/Fedora-Xfce-Live-x86_64-41.iso' } } } },
              'LXQt': { architectures: { 'amd64': { 'ISO': { file: 'Fedora-LXQt-Live-x86_64-41.iso', size: '1.7 GB', url: 'assets/os/Fedora-LXQt-Live-x86_64-41.iso' } } } },
              'Cinnamon': { architectures: { 'amd64': { 'ISO': { file: 'Fedora-Cinnamon-Live-x86_64-41.iso', size: '2.0 GB', url: 'assets/os/Fedora-Cinnamon-Live-x86_64-41.iso' } } } }
            }
          }
        }
      },
      // Linux - Arch-Based
      {
        id: 'manjaro',
        name: 'Manjaro',
        description: 'User-friendly Arch Linux derivative with easy installation.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/manjaro.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.4,
        downloads: '4.2M',
        lastUpdated: '2024-12-10',
        types: {
          'Desktop': {
            editions: {
              'KDE': {
                architectures: {
                  'amd64': { 'ISO': { file: 'manjaro-kde-24.2.0-241210-linux612.iso', size: '3.8 GB', url: 'assets/os/manjaro-kde-24.2.0-241210-linux612.iso' } },
                  'arm64': { 'ISO': { file: 'manjaro-kde-24.2.0-241210-linux612-aarch64.iso', size: '3.6 GB', url: 'assets/os/manjaro-kde-24.2.0-241210-linux612-aarch64.iso' } }
                }
              },
              'GNOME': {
                architectures: {
                  'amd64': { 'ISO': { file: 'manjaro-gnome-24.2.0-241210-linux612.iso', size: '3.5 GB', url: 'assets/os/manjaro-gnome-24.2.0-241210-linux612.iso' } },
                  'arm64': { 'ISO': { file: 'manjaro-gnome-24.2.0-241210-linux612-aarch64.iso', size: '3.3 GB', url: 'assets/os/manjaro-gnome-24.2.0-241210-linux612-aarch64.iso' } }
                }
              },
              'XFCE': {
                architectures: {
                  'amd64': { 'ISO': { file: 'manjaro-xfce-24.2.0-241210-linux612.iso', size: '3.2 GB', url: 'assets/os/manjaro-xfce-24.2.0-241210-linux612.iso' } },
                  'arm64': { 'ISO': { file: 'manjaro-xfce-24.2.0-241210-linux612-aarch64.iso', size: '3.0 GB', url: 'assets/os/manjaro-xfce-24.2.0-241210-linux612-aarch64.iso' } }
                }
              }
            }
          }
        }
      },
      // Windows
      {
        id: 'windows-11',
        name: 'Windows 11',
        description: 'Latest Windows 11 with enhanced security, performance, and AI features.',
        category: 'windows',
        icon: 'https://voltnexis.github.io/data/os/icons/windows.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.3,
        downloads: '25.8M',
        lastUpdated: '2024-11-15',
        screenshots: [
          'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22660842/windows11.jpg',
          'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22660400/windows11_4.png',
          'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22660401/windows11_2.png',
          'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22660422/windows11_3.jpeg'
        ],
        types: {
          'Consumer': {
            editions: {
              'Home/Pro': {
                architectures: {
                  'amd64': { 'ISO': { file: 'Win11_24H2_English_x64v2.iso', size: '5.6 GB', url: 'assets/os/Win11_24H2_English_x64v2.iso' } },
                  'arm64': { 'ISO': { file: 'Win11_24H2_English_ARM64.iso', size: '5.2 GB', url: 'assets/os/Win11_24H2_English_ARM64.iso' } }
                }
              }
            }
          },
          'Insider Preview': {
            editions: {
              'Dev Channel': {
                architectures: {
                  'amd64': { 'ISO': { file: 'Win11_InsiderPreview_Client_x64_en-us_26120.iso', size: '6.2 GB', url: 'assets/os/Win11_InsiderPreview_Client_x64_en-us_26120.iso' } },
                  'arm64': { 'ISO': { file: 'Win11_InsiderPreview_Client_ARM64_en-us_26120.iso', size: '5.8 GB', url: 'assets/os/Win11_InsiderPreview_Client_ARM64_en-us_26120.iso' } }
                }
              }
            }
          }
        }
      },
      // Android
      {
        id: 'lineageos',
        name: 'LineageOS',
        description: 'Privacy-focused Android ROM with enhanced performance.',
        category: 'android',
        icon: 'https://voltnexis.github.io/data/os/icons/android.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.6,
        downloads: '2.8M',
        lastUpdated: '2024-12-01',
        types: {
          'Official Builds': {
            editions: {
              'LineageOS 21': {
                architectures: {
                  'arm64': {
                    'Samsung Galaxy S21': { file: 'lineage-21.0-20241201-NIGHTLY-o1s.zip', size: '1.2 GB', url: 'assets/os/lineage-21.0-20241201-NIGHTLY-o1s.zip' },
                    'OnePlus 9': { file: 'lineage-21.0-20241201-NIGHTLY-lemonade.zip', size: '1.1 GB', url: 'assets/os/lineage-21.0-20241201-NIGHTLY-lemonade.zip' },
                    'Pixel 6': { file: 'lineage-21.0-20241201-NIGHTLY-oriole.zip', size: '1.3 GB', url: 'assets/os/lineage-21.0-20241201-NIGHTLY-oriole.zip' }
                  }
                }
              }
            }
          }
        }
      },
      {
        id: 'grapheneos',
        name: 'GrapheneOS',
        description: 'Privacy and security focused mobile OS with Android app compatibility.',
        category: 'android',
        icon: 'https://voltnexis.github.io/data/os/icons/graphene.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.7,
        downloads: '890K',
        lastUpdated: '2024-12-20',
        types: {
          'Stable': {
            editions: {
              'Production': {
                architectures: {
                  'arm64': {
                    'Pixel 8 Pro': { file: 'husky-factory-2024122000.zip', size: '1.8 GB', url: 'assets/os/husky-factory-2024122000.zip' },
                    'Pixel 8': { file: 'shiba-factory-2024122000.zip', size: '1.7 GB', url: 'assets/os/shiba-factory-2024122000.zip' },
                    'Pixel 7 Pro': { file: 'cheetah-factory-2024122000.zip', size: '1.6 GB', url: 'assets/os/cheetah-factory-2024122000.zip' }
                  }
                }
              }
            }
          }
        }
      },
      // Linux - Uncommon Distros
      {
        id: 'slackware',
        name: 'Slackware',
        description: 'The oldest surviving Linux distribution, known for simplicity and stability.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/slackware.webp',
        iconColor: '#000080',
        verified: true,
        rating: 4.2,
        downloads: '400K',
        lastUpdated: '2024-07-15',
        types: {
          'Full': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'slackware64-15.0-install-dvd.iso', size: '4.7 GB', url: 'assets/os/slackware64-15.0-install-dvd.iso' } }
                }
              }
            }
          }
        }
      },
      {
        id: 'gentoo',
        name: 'Gentoo',
        description: 'Source-based Linux distribution designed for power users and developers.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/gentoo.webp',
        iconColor: '#54487A',
        verified: true,
        rating: 4.1,
        downloads: '300K',
        lastUpdated: '2024-12-01',
        types: {
          'Minimal': {
            editions: {
              'Install CD': {
                architectures: {
                  'amd64': { 'ISO': { file: 'install-amd64-minimal-20241201T170203Z.iso', size: '450 MB', url: 'assets/os/install-amd64-minimal-20241201T170203Z.iso' } },
                  'arm64': { 'ISO': { file: 'install-arm64-minimal-20241201T170203Z.iso', size: '420 MB', url: 'assets/os/install-arm64-minimal-20241201T170203Z.iso' } },
                  'PPC': { 'ISO': { file: 'install-ppc64-minimal-20241201T170203Z.iso', size: '400 MB', url: 'assets/os/install-ppc64-minimal-20241201T170203Z.iso' } }
                }
              }
            }
          }
        }
      },
      {
        id: 'blackarch',
        name: 'BlackArch',
        description: 'Arch Linux-based penetration testing distribution with 2800+ tools.',
        category: 'security',
        icon: 'https://voltnexis.github.io/data/os/icons/black_arch.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.3,
        downloads: '600K',
        lastUpdated: '2024-12-01',
        types: {
          'Live': {
            editions: {
              'Full': {
                architectures: {
                  'amd64': { 'ISO': { file: 'blackarch-linux-full-2024.12.01-x86_64.iso', size: '15.2 GB', url: 'assets/os/blackarch-linux-full-2024.12.01-x86_64.iso' } }
                }
              }
            }
          }
        }
      },
      {
        id: 'lakka',
        name: 'Lakka',
        description: 'RetroArch-based gaming distribution for retro gaming enthusiasts.',
        category: 'gaming',
        icon: 'https://voltnexis.github.io/data/os/icons/lakka.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.5,
        downloads: '800K',
        lastUpdated: '2024-11-15',
        types: {
          'Gaming': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'IMG': { file: 'Lakka-Generic.x86_64-5.0.img.gz', size: '350 MB', url: 'assets/os/Lakka-Generic.x86_64-5.0.img.gz' } },
                  'arm64': { 'IMG': { file: 'Lakka-RPi4.arm-5.0.img.gz', size: '320 MB', url: 'assets/os/Lakka-RPi4.arm-5.0.img.gz' } },
                  'RPi': { 'IMG': { file: 'Lakka-RPi2.arm-5.0.img.gz', size: '300 MB', url: 'assets/os/Lakka-RPi2.arm-5.0.img.gz' } }
                }
              }
            }
          }
        }
      },
      // Additional Linux Distros
      {
        id: 'alpine',
        name: 'Alpine Linux',
        description: 'Security-oriented, lightweight Linux distribution based on musl libc.',
        category: 'lightweight',
        icon: 'https://voltnexis.github.io/data/os/icons/alpine.webp',
        iconColor: '#0D597F',
        verified: true,
        rating: 4.4,
        downloads: '2.1M',
        lastUpdated: '2024-11-07',
        types: {
          'Standard': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'ISO': { file: 'alpine-standard-3.20.3-x86_64.iso', size: '176 MB', url: 'assets/os/alpine-standard-3.20.3-x86_64.iso' } },
                  'arm64': { 'ISO': { file: 'alpine-standard-3.20.3-aarch64.iso', size: '168 MB', url: 'assets/os/alpine-standard-3.20.3-aarch64.iso' } },
                  'x86': { 'ISO': { file: 'alpine-standard-3.20.3-x86.iso', size: '158 MB', url: 'assets/os/alpine-standard-3.20.3-x86.iso' } }
                }
              }
            }
          }
        }
      },
      {
        id: 'nixos',
        name: 'NixOS',
        description: 'Declarative Linux distribution with reproducible builds.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/nix.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.5,
        downloads: '680K',
        lastUpdated: '2024-11-28',
        types: {
          'Stable': {
            editions: {
              'GNOME': {
                architectures: {
                  'amd64': { 'ISO': { file: 'nixos-gnome-24.05-x86_64-linux.iso', size: '3.2 GB', url: 'assets/os/nixos-gnome-24.05-x86_64-linux.iso' } },
                  'arm64': { 'ISO': { file: 'nixos-gnome-24.05-aarch64-linux.iso', size: '3.0 GB', url: 'assets/os/nixos-gnome-24.05-aarch64-linux.iso' } }
                }
              }
            }
          }
        }
      },
      {
        id: 'void',
        name: 'Void Linux',
        description: 'Independent Linux distribution with runit init system.',
        category: 'linux',
        icon: 'https://voltnexis.github.io/data/os/icons/void.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.3,
        downloads: '290K',
        lastUpdated: '2024-02-14',
        types: {
          'Live': {
            editions: {
              'XFCE': {
                architectures: {
                  'amd64': { 'ISO': { file: 'void-live-x86_64-20240314-xfce.iso', size: '1.4 GB', url: 'assets/os/void-live-x86_64-20240314-xfce.iso' } },
                  'arm64': { 'IMG': { file: 'void-rpi-aarch64-20240314.img.xz', size: '380 MB', url: 'assets/os/void-rpi-aarch64-20240314.img.xz' } }
                }
              }
            }
          }
        }
      },
      // BSD Systems
      {
        id: 'dragonfly',
        name: 'DragonFly BSD',
        description: 'BSD operating system with advanced clustering features.',
        category: 'bsd',
        icon: 'https://voltnexis.github.io/data/os/icons/dragon_fly.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.0,
        downloads: '45K',
        lastUpdated: '2024-06-03',
        types: {
          'Release': {
            editions: {
              'Standard': {
                architectures: {
                  'amd64': { 'IMG': { file: 'dfly-x86_64-6.4.0_REL.img.bz2', size: '1.8 GB', url: 'assets/os/dfly-x86_64-6.4.0_REL.img.bz2' } }
                }
              }
            }
          }
        }
      },
      {
        id: 'ghostbsd',
        name: 'GhostBSD',
        description: 'Desktop-focused FreeBSD distribution with MATE desktop.',
        category: 'bsd',
        icon: 'https://voltnexis.github.io/data/os/icons/ghostbsd.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.2,
        downloads: '120K',
        lastUpdated: '2024-10-31',
        types: {
          'Desktop': {
            editions: {
              'MATE': {
                architectures: {
                  'amd64': { 'ISO': { file: 'GhostBSD-24.10.1.iso', size: '3.2 GB', url: 'assets/os/GhostBSD-24.10.1.iso' } }
                }
              }
            }
          }
        }
      },
      // DOS & Legacy
      {
        id: 'freedos',
        name: 'FreeDOS',
        description: 'Free DOS-compatible operating system for legacy applications.',
        category: 'legacy',
        icon: 'https://voltnexis.github.io/data/os/icons/freedos.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.0,
        downloads: '890K',
        lastUpdated: '2022-02-20',
        types: {
          'Full': {
            editions: {
              'Full Distribution': {
                architectures: {
                  'i386': { 'ISO': { file: 'FD13FULL.iso', size: '720 MB', url: 'assets/os/FD13FULL.iso' } }
                }
              }
            }
          }
        }
      },
      // Gaming Systems
      {
        id: 'steamos',
        name: 'SteamOS',
        description: 'Valve\'s gaming-focused Linux distribution.',
        category: 'gaming',
        icon: 'https://voltnexis.github.io/data/os/icons/steam.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.3,
        downloads: '1.8M',
        lastUpdated: '2024-11-21',
        types: {
          'Desktop': {
            editions: {
              'Holo': {
                architectures: {
                  'amd64': { 'IMG': { file: 'steamdeck-recovery-4.img.bz2', size: '5.5 GB', url: 'assets/os/steamdeck-recovery-4.img.bz2' } }
                }
              }
            }
          }
        }
      },
      // Mobile Systems
      {
        id: 'postmarket',
        name: 'postmarketOS',
        description: 'Real Linux distribution for phones based on Alpine Linux.',
        category: 'mobile',
        icon: 'https://voltnexis.github.io/data/os/icons/postmarket.webp',
        iconColor: '#FFFFFF',
        verified: true,
        rating: 4.2,
        downloads: '180K',
        lastUpdated: '2024-12-15',
        types: {
          'Stable': {
            editions: {
              'Phosh': {
                architectures: {
                  'arm64': {
                    'PinePhone': { file: 'postmarketOS-v24.06-phosh-pinephone.img.xz', size: '1.8 GB', url: 'assets/os/postmarketOS-v24.06-phosh-pinephone.img.xz' }
                  }
                }
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

    const iconContent = os.icon.startsWith('http') || os.icon.startsWith('assets/') ? 
      `<img src="${os.icon}" alt="${os.name}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` +
      `<div style="display: none; width: 32px; height: 32px; background: ${os.iconColor}; border-radius: 4px; align-items: center; justify-content: center; color: white; font-size: 16px; font-weight: bold;">${os.name.charAt(0)}</div>` :
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
