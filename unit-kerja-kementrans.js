// ===================================================================
// STRUKTUR UNIT KERJA KEMENTERIAN TRANSMIGRASI REPUBLIK INDONESIA
// Eselon 1 dan Eselon 2 - Tahun 2024
// ===================================================================

const UNIT_KERJA_KEMENTRANS = {
    "Sekretariat Jenderal": {
        kode: "SETJEN",
        eselon: 1,
        unit_eselon2: [
            {
                nama: "Biro Perencanaan, Kerja Sama, dan Hubungan Masyarakat",
                kode: "SETJEN_PKKHM",
                singkatan: "Biro Perencanaan, Kerja Sama, dan Hubungan Masyarakat"
            },
            {
                nama: "Biro Keuangan dan Barang Milik Negara",
                kode: "SETJEN_KBMN", 
                singkatan: "Biro Keuangan dan Barang Milik Negara"
            },
            {
                nama: "Biro Organisasi, Sumber Daya Manusia, dan Reformasi Birokrasi",
                kode: "SETJEN_OSDRB",
                singkatan: "Biro Organisasi, Sumber Daya Manusia, dan Reformasi Birokrasi"
            },
            {
                nama: "Biro Hukum",
                kode: "SETJEN_HUKUM",
                singkatan: "Biro Hukum"
            },
            {
                nama: "Biro Umum dan Layanan Pengadaan",
                kode: "SETJEN_ULP",
                singkatan: "Biro Umum dan Layanan Pengadaan"
            },
            {
                nama: "Pusat Strategi Kebijakan Transmigrasi",
                kode: "SETJEN_PUSKAT",
                singkatan: "Pusat Strategi Kebijakan Transmigrasi"
            },
            {
                nama: "Pusat Data dan Informasi Transmigrasi",
                kode: "SETJEN_PUSDATIN",
                singkatan: "Pusat Data dan Informasi Transmigrasi"
            },
            {
                nama: "Pusat Pengembangan Sumber Daya Manusia",
                kode: "SETJEN_PUSBANGSDM",
                singkatan: "Pusat Pengembangan Sumber Daya Manusia"
            }
        ]
    },

    "Inspektorat Jenderal": {
        kode: "ITJEN",
        eselon: 1,
        unit_eselon2: [
            {
                nama: "Sekretariat Inspektorat Jenderal",
                kode: "ITJEN_SETITJEN",
                singkatan: "Sekretariat Inspektorat Jenderal"
            },
            {
                nama: "Inspektorat Wilayah I",
                kode: "ITJEN_IRWIL1",
                singkatan: "Inspektorat Wilayah I"
            },
            {
                nama: "Inspektorat Wilayah II", 
                kode: "ITJEN_IRWIL2",
                singkatan: "Inspektorat Wilayah II"
            }
        ]
    },

    "Ditjen PPKT": {
        kode: "DITJEN_PPKT",
        eselon: 1,
        unit_eselon2: [
            {
                nama: "Sekretariat Direktorat Jenderal",
                kode: "PPKT_SETDITJEN",
                singkatan: "Sekretariat Direktorat Jenderal"
            },
            {
                nama: "Direktorat Perencanaan Perwujudan Kawasan Transmigrasi",
                kode: "PPKT_RENKAWAS",
                singkatan: "Direktorat Perencanaan Perwujudan Kawasan Transmigrasi"
            },
            {
                nama: "Direktorat Pembangunan Kawasan Transmigrasi",
                kode: "PPKT_BANKAWAS",
                singkatan: "Direktorat Pembangunan Kawasan Transmigrasi"
            },
            {
                nama: "Direktorat Fasilitasi Penataan Persebaran Penduduk di Kawasan Transmigrasi",
                kode: "PPKT_FASILITASI",
                singkatan: "Direktorat Fasilitasi Penataan Persebaran Penduduk di Kawasan Transmigrasi"
            },
            {
                nama: "Direktorat Pengembangan Satuan Permukiman dan Pusat Satuan Kawasan Pengembangan",
                kode: "PPKT_SATPEM",
                singkatan: "Direktorat Pengembangan Satuan Permukiman dan Pusat Satuan Kawasan Pengembangan"
            },
            {
                nama: "Direktorat Pengembangan Kawasan Transmigrasi",
                kode: "PPKT_PENGKAWAS",
                singkatan: "Direktorat Pengembangan Kawasan Transmigrasi"
            }
        ]
    },

    "Ditjen PEMT": {
        kode: "DITJEN_PEMT",
        eselon: 1,
        unit_eselon2: [
            {
                nama: "Sekretariat Direktorat Jenderal",
                kode: "PEMT_SETDITJEN",
                singkatan: "Sekretariat Direktorat Jenderal"
            },
            {
                nama: "Direktorat Perencanaan Teknis Pengembangan Ekonomi dan Pemberdayaan Masyarakat Transmigrasi",
                kode: "PEMT_RENTEK",
                singkatan: "Direktorat Perencanaan Teknis Pengembangan Ekonomi dan Pemberdayaan Masyarakat Transmigrasi"
            },
            {
                nama: "Direktorat Pengembangan Kelembagaan Ekonomi Transmigrasi",
                kode: "PEMT_KELEMBAGAAN",
                singkatan: "Direktorat Pengembangan Kelembagaan Ekonomi Transmigrasi"
            },
            {
                nama: "Direktorat Pengembangan Produk Unggulan Transmigrasi",
                kode: "PEMT_PRODUK",
                singkatan: "Direktorat Pengembangan Produk Unggulan Transmigrasi"
            },
            {
                nama: "Direktorat Promosi dan Pemasaran Produk Unggulan Transmigrasi",
                kode: "PEMT_PROMOSI",
                singkatan: "Direktorat Promosi dan Pemasaran Produk Unggulan Transmigrasi"
            },
            {
                nama: "Direktorat Pemberdayaan Masyarakat Transmigrasi",
                kode: "PEMT_PMT",
                singkatan: "Direktorat Pemberdayaan Masyarakat Transmigrasi"
            }
        ]
    }
};

// ===================================================================
// HELPER FUNCTIONS UNTUK UNIT KERJA
// ===================================================================

// Get all Eselon 1 units
function getAllEselon1() {
    return Object.keys(UNIT_KERJA_KEMENTRANS).map(nama => ({
        nama: nama,
        kode: UNIT_KERJA_KEMENTRANS[nama].kode,
        eselon: 1
    }));
}

// Get Eselon 2 units by Eselon 1
function getEselon2ByEselon1(eselon1Name) {
    const unit = UNIT_KERJA_KEMENTRANS[eselon1Name];
    return unit ? unit.unit_eselon2 : [];
}

// Get unit by code
function getUnitByCode(kode) {
    for (const [eselon1Name, eselon1Data] of Object.entries(UNIT_KERJA_KEMENTRANS)) {
        // Check if it's Eselon 1 code
        if (eselon1Data.kode === kode) {
            return {
                nama: eselon1Name,
                kode: kode,
                eselon: 1,
                parent: null
            };
        }
        
        // Check Eselon 2 units
        for (const eselon2 of eselon1Data.unit_eselon2) {
            if (eselon2.kode === kode) {
                return {
                    nama: eselon2.nama,
                    kode: eselon2.kode,
                    singkatan: eselon2.singkatan,
                    eselon: 2,
                    parent: {
                        nama: eselon1Name,
                        kode: eselon1Data.kode
                    }
                };
            }
        }
    }
    return null;
}

// Search unit by name (fuzzy search)
function searchUnitByName(searchTerm) {
    const results = [];
    const term = searchTerm.toLowerCase();
    
    for (const [eselon1Name, eselon1Data] of Object.entries(UNIT_KERJA_KEMENTRANS)) {
        // Search in Eselon 1
        if (eselon1Name.toLowerCase().includes(term)) {
            results.push({
                nama: eselon1Name,
                kode: eselon1Data.kode,
                eselon: 1,
                parent: null
            });
        }
        
        // Search in Eselon 2
        eselon1Data.unit_eselon2.forEach(eselon2 => {
            if (eselon2.nama.toLowerCase().includes(term) || 
                eselon2.singkatan.toLowerCase().includes(term)) {
                results.push({
                    nama: eselon2.nama,
                    kode: eselon2.kode,
                    singkatan: eselon2.singkatan,
                    eselon: 2,
                    parent: {
                        nama: eselon1Name,
                        kode: eselon1Data.kode
                    }
                });
            }
        });
    }
    
    return results;
}

// Get organizational hierarchy
function getOrganizationalHierarchy() {
    return Object.entries(UNIT_KERJA_KEMENTRANS).map(([nama, data]) => ({
        eselon1: {
            nama: nama,
            kode: data.kode,
            eselon: 1
        },
        eselon2_units: data.unit_eselon2,
        total_eselon2: data.unit_eselon2.length
    }));
}

// Statistics helper
function getUnitStatistics() {
    const hierarchy = getOrganizationalHierarchy();
    
    return {
        total_eselon1: hierarchy.length,
        total_eselon2: hierarchy.reduce((sum, unit) => sum + unit.total_eselon2, 0),
        breakdown: hierarchy.map(unit => ({
            eselon1: unit.eselon1.nama,
            kode: unit.eselon1.kode,
            jumlah_eselon2: unit.total_eselon2
        }))
    };
}

// Populate dropdown with unit kerja
function populateUnitKerjaDropdown(selectElementId, eselon = 'all') {
    const selectElement = document.getElementById(selectElementId);
    if (!selectElement) {
        console.error(`Element with ID '${selectElementId}' not found`);
        return;
    }
    
    // Clear existing options
    selectElement.innerHTML = '<option value="">-- Pilih Unit Kerja --</option>';
    
    if (eselon === 'all' || eselon === 1) {
        // Add Eselon 1 units
        const optgroup1 = document.createElement('optgroup');
        optgroup1.label = 'ESELON 1';
        
        Object.entries(UNIT_KERJA_KEMENTRANS).forEach(([nama, data]) => {
            const option = document.createElement('option');
            option.value = data.kode;
            option.textContent = nama;
            option.dataset.eselon = '1';
            optgroup1.appendChild(option);
        });
        
        selectElement.appendChild(optgroup1);
    }
    
    if (eselon === 'all' || eselon === 2) {
        // Add Eselon 2 units grouped by Eselon 1
        Object.entries(UNIT_KERJA_KEMENTRANS).forEach(([eselon1Name, eselon1Data]) => {
            const optgroup2 = document.createElement('optgroup');
            optgroup2.label = `ESELON 2 - ${eselon1Name}`;
            
            eselon1Data.unit_eselon2.forEach(eselon2 => {
                const option = document.createElement('option');
                option.value = eselon2.kode;
                option.textContent = eselon2.singkatan;
                option.dataset.eselon = '2';
                option.dataset.parent = eselon1Data.kode;
                optgroup2.appendChild(option);
            });
            
            selectElement.appendChild(optgroup2);
        });
    }
    
    console.log(`✅ Populated unit kerja dropdown: ${selectElement.options.length - 1} units`);
}

// Populate dropdown khusus untuk PIC Program (hanya Eselon 2)
function populatePICProgramDropdown(selectElementId) {
    const selectElement = document.getElementById(selectElementId);
    if (!selectElement) {
        console.error(`Element with ID '${selectElementId}' not found`);
        return;
    }
    
    // Clear existing options
    selectElement.innerHTML = '<option value="">-- Pilih PIC Program --</option>';
    
    // Add only Eselon 2 units grouped by Eselon 1
    Object.entries(UNIT_KERJA_KEMENTRANS).forEach(([eselon1Name, eselon1Data]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = eselon1Name;
        
        eselon1Data.unit_eselon2.forEach(eselon2 => {
            const option = document.createElement('option');
            option.value = eselon2.kode;
            option.textContent = eselon2.singkatan;
            option.dataset.fullName = eselon2.nama;
            option.dataset.parent = eselon1Data.kode;
            option.dataset.parentName = eselon1Name;
            optgroup.appendChild(option);
        });
        
        selectElement.appendChild(optgroup);
    });
    
    console.log(`✅ Populated PIC Program dropdown: ${selectElement.options.length - 1} units (Eselon 2 only)`);
}

// Get PIC Program info by code
function getPICProgramInfo(picCode) {
    for (const [eselon1Name, eselon1Data] of Object.entries(UNIT_KERJA_KEMENTRANS)) {
        for (const eselon2 of eselon1Data.unit_eselon2) {
            if (eselon2.kode === picCode) {
                return {
                    kode: eselon2.kode,
                    singkatan: eselon2.singkatan,
                    nama: eselon2.nama,
                    parent: {
                        nama: eselon1Name,
                        kode: eselon1Data.kode
                    }
                };
            }
        }
    }
    return null;
}

// ===================================================================
// CONSOLE HELPERS FOR DEBUGGING
// ===================================================================

// Debug function to show all units
function showAllUnits() {
    console.log('��️ ========== UNIT KERJA KEMENTERIAN TRANSMIGRASI ==========');
    console.log('');
    
    Object.entries(UNIT_KERJA_KEMENTRANS).forEach(([eselon1Name, eselon1Data]) => {
        console.log(`📋 ${eselon1Name} (${eselon1Data.kode})`);
        eselon1Data.unit_eselon2.forEach((eselon2, index) => {
            console.log(`   ${index + 1}. ${eselon2.singkatan} (${eselon2.kode})`);
        });
        console.log('');
    });
    
    const stats = getUnitStatistics();
    console.log(`📊 STATISTIK:`);
    console.log(`   • Total Eselon 1: ${stats.total_eselon1} unit`);
    console.log(`   • Total Eselon 2: ${stats.total_eselon2} unit`);
    console.log('');
}

// Test search function
function testSearchUnit(searchTerm) {
    console.log(`�� Search results for: "${searchTerm}"`);
    const results = searchUnitByName(searchTerm);
    
    if (results.length === 0) {
        console.log('   No results found');
        return;
    }
    
    results.forEach((result, index) => {
        if (result.eselon === 1) {
            console.log(`   ${index + 1}. [ESELON 1] ${result.nama} (${result.kode})`);
        } else {
            console.log(`   ${index + 1}. [ESELON 2] ${result.singkatan}`);
            console.log(`      Parent: ${result.parent.nama} (${result.parent.kode})`);
        }
    });
}

// ===================================================================
// EXPORT FOR GLOBAL ACCESS
// ===================================================================

// Make functions globally available
window.UnitKerjaKementrans = {
    data: UNIT_KERJA_KEMENTRANS,
    getAllEselon1,
    getEselon2ByEselon1,
    getUnitByCode,
    searchUnitByName,
    getOrganizationalHierarchy,
    populateUnitKerjaDropdown,
    populatePICProgramDropdown,
    getPICProgramInfo,
    getUnitStatistics,
    
    // Debug helpers
    showAllUnits,
    testSearchUnit
};

// Auto-initialize when loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏛️ Unit Kerja Kementerian Transmigrasi data loaded');
    console.log('📊 Available:', getUnitStatistics());
    console.log('🔧 Access via: window.UnitKerjaKementrans');
    console.log('📖 Debug: UnitKerjaKementrans.showAllUnits()');
});

// Console ready message
console.log('🏛️ Unit Kerja Kementrans data loaded successfully!');
const quickStats = getUnitStatistics();
console.log(`📊 ${quickStats.total_eselon1} Eselon 1 units, ${quickStats.total_eselon2} Eselon 2 units`);
