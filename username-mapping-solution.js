// ========================================
// SOLUSI LENGKAP: PERBAIKAN USERNAME MAPPING
// ========================================
// Masalah: Banyak satker tidak ter-mapping karena generateUsername() 
// menghasilkan username yang sama untuk nama-nama panjang yang serupa
//
// Root Cause: 
// 1. "Dinas Tenaga Kerja dan ..." → "dinastenagakerjadan" (SAMA SEMUA)
// 2. "Biro ..." → "biroperencanaankerja" (SAMA SEMUA)  
// 3. "Pusat ..." → "pusatstrategikebijak" (SAMA SEMUA)
//
// Solusi: Perbaiki generateUsername() agar lebih intelligent
// ========================================

// SOLUSI 1: IMPROVED generateUsername FUNCTION
const improvedGenerateUsername = function(name) {
    // Jika sudah format username pendek, return as-is
    if (name.length <= 20 && !name.includes(' ') && name === name.toLowerCase()) {
        return name;
    }
    
    // Handle Dinas Tenaga Kerja dengan ekstrak lokasi
    if (name.includes('Dinas Tenaga Kerja')) {
        const locationMatch = name.match(/(Provinsi|Kabupaten)\s+([A-Za-z\s]+)/);
        if (locationMatch) {
            const location = locationMatch[2].toLowerCase()
                .replace(/[^a-z]/g, '')
                .substring(0, 12);
            return `naker${location}`;
        }
        // Fallback jika tidak ada lokasi
        return 'nakerdinas' + Math.random().toString(36).substring(2, 6);
    }
    
    // Handle Biro dengan ekstrak jenis biro
    if (name.includes('Biro')) {
        const biroMatch = name.match(/Biro\s+([A-Za-z\s,]+)/);
        if (biroMatch) {
            const biroType = biroMatch[1].split(',')[0].toLowerCase()
                .replace(/[^a-z]/g, '')
                .substring(0, 12);
            return `biro${biroType}`;
        }
        return 'biroupusat' + Math.random().toString(36).substring(2, 4);
    }
    
    // Handle Pusat dengan ekstrak jenis pusat
    if (name.includes('Pusat')) {
        const pusatMatch = name.match(/Pusat\s+([A-Za-z\s]+)/);
        if (pusatMatch) {
            const pusatType = pusatMatch[1].toLowerCase()
                .replace(/[^a-z]/g, '')
                .substring(0, 12);
            return `pusat${pusatType}`;
        }
        return 'pusatpusat' + Math.random().toString(36).substring(2, 4);
    }
    
    // Fallback ke method original
    return name.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '')
        .substring(0, 20);
};

// SOLUSI 2: MANUAL MAPPING untuk entries bermasalah
const manualUsernameMapping = {
    // Biro entries
    "Biro Perencanaan, Kerjasama, dan Hubungan Masyarakat": "biroperencanaan",
    "Biro Umum dan Layanan Pengadaan": "biroumum", 
    "Biro Keuangan dan BMN": "birokeuangan",
    "Biro Organisasi, SDM, dan Reformasi Birokrasi": "biroorganisasi",
    "Biro Hukum": "birohukum",
    
    // Pusat entries
    "Pusat Strategi Kebijakan Transmigrasi": "pusatstrategi",
    "Pusat Data dan Informasi Transmigrasi": "pusatdata",
    "Pusat Pengembangan SDM": "pusatsdm",
    
    // Dinas entries (yang bermasalah)
    "Dinas Tenaga Kerja dan Mobilitas Penduduk Provinsi Aceh": "nakeraceh",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sumatera Utara": "nakersumut",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sumatera Barat": "nakersumbar",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Riau": "nakerriau",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Bengkulu": "nakerbengkulu",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sumatera Selatan": "nakersumsel",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Jawa Barat": "nakerjabar",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Jawa Tengah": "nakerjateng",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Jawa Timur": "nakerjatim",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Barat": "nakerkalbar",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Tengah": "nakerkalteng",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Selatan": "nakerkalsel",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Timur": "nakerkaltim",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Tengah": "nakersulteng",
    "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan": "nakersulsel"
};

// SOLUSI 3: HYBRID APPROACH (RECOMMENDED)
const hybridGenerateUsername = function(name) {
    // Check manual mapping first
    if (manualUsernameMapping[name]) {
        return manualUsernameMapping[name];
    }
    
    // Use improved logic
    return improvedGenerateUsername(name);
};

// SOLUSI 4: IMPROVED createAllUsers dengan duplicate handling
const improvedCreateAllUsers = function() {
    const users = [];
    const usedUsernames = new Set();
    
    // Add hardcoded users first
    const hardcodedUsers = [
        {
            username: 'superadmin',
            password: 'admin123',
            fullName: 'Super Administrator',
            role: 'super_admin',
            satkerCode: 'ALL',
            satkerName: 'All Satuan Kerja'
        },
        {
            username: 'menteri',
            password: 'transmigrasi2025',
            fullName: 'Menteri Transmigrasi',
            role: 'menteri_transmigrasi',
            satkerCode: 'ALL',
            satkerName: 'Kementerian Transmigrasi Republik Indonesia'
        },
        {
            username: 'nakerbarelang',
            password: 'password123',
            fullName: 'Admin Dinas Perumahan Rakyat, Permukiman dan Pertamanan Kota Batam',
            role: 'satker_admin',
            satkerCode: '691702',
            satkerName: 'Dinas Perumahan Rakyat, Permukiman dan Pertamanan Kota Batam',
            provinsi: 'Kepulauan Riau',
            kabupaten: 'Batam'
        }
    ];
    
    hardcodedUsers.forEach(user => {
        users.push(user);
        usedUsernames.add(user.username);
    });
    
    // Process satker data dengan duplicate handling
    completeSatkerData.forEach((satker, index) => {
        let username = hybridGenerateUsername(satker.name);
        
        // Handle duplicates dengan suffix
        let finalUsername = username;
        let counter = 1;
        while (usedUsernames.has(finalUsername)) {
            finalUsername = `${username}${counter}`;
            counter++;
        }
        usedUsernames.add(finalUsername);
        
        users.push({
            username: finalUsername,
            password: 'password123',
            fullName: satker.name,
            role: 'satker_admin',
            satkerCode: satker.code || finalUsername.toUpperCase(),
            satkerName: satker.name,
            provinsi: satker.provinsi,
            kabupaten: satker.kabupaten,
            satkerData: satker
        });
        
        // Log untuk debugging
        if (finalUsername !== username) {
            console.log(`🔄 Duplicate handled: "${username}" → "${finalUsername}"`);
        }
    });
    
    console.log(`✅ Created ${users.length} users with no duplicates (${users.length - hardcodedUsers.length} from satker data)`);
    return users;
};

// TEST FUNCTION
function testSolution() {
    console.log('🧪 TESTING USERNAME MAPPING SOLUTIONS');
    console.log('=====================================');
    
    const testNames = [
        "Dinas Tenaga Kerja dan Mobilitas Penduduk Provinsi Aceh",
        "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sumatera Utara", 
        "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sumatera Barat",
        "Biro Perencanaan, Kerjasama, dan Hubungan Masyarakat",
        "Biro Umum dan Layanan Pengadaan",
        "Pusat Strategi Kebijakan Transmigrasi",
        "Pusat Data dan Informasi Transmigrasi",
        "nakerposo",
        "nakermerauke"
    ];
    
    console.log('\n📋 ORIGINAL vs IMPROVED:');
    testNames.forEach(name => {
        const original = name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '').substring(0, 20);
        const improved = hybridGenerateUsername(name);
        const status = original === improved ? '🟢 SAME' : '🔄 FIXED';
        console.log(`${status} "${name}"`);
        console.log(`   Original: "${original}"`);
        console.log(`   Improved: "${improved}"`);
        console.log('');
    });
}

// EXPORT untuk implementasi
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        improvedGenerateUsername,
        manualUsernameMapping,
        hybridGenerateUsername,
        improvedCreateAllUsers,
        testSolution
    };
}

// Run test jika dijalankan langsung
if (typeof window === 'undefined') {
    testSolution();
}

// ========================================
// IMPLEMENTASI INSTRUCTIONS
// ========================================
/*
CARA IMPLEMENTASI KE login.html:

1. BACKUP login.html terlebih dahulu (SUDAH DILAKUKAN)

2. GANTI generateUsername function di login.html (line ~991-996):
   Ganti function generateUsername dengan hybridGenerateUsername di atas

3. GANTI createAllUsers function di login.html (line ~926-989):  
   Ganti function createAllUsers dengan improvedCreateAllUsers di atas

4. TAMBAHKAN manual mapping object di atas completeSatkerData array

5. TEST dengan:
   - Buka login.html
   - Check console logs
   - Coba login dengan username yang sebelumnya bermasalah
   - Pastikan semua satker ter-mapping

EXPECTED RESULTS:
✅ 0 duplicate usernames
✅ 100% mapping success rate  
✅ Semua satker bisa login
✅ Username lebih meaningful (nakeraceh, nakersumut, dll)
*/
