// ===================================================================
// SIMPLE AUTH SYSTEM - COMPLETE FIREBASE MAPPING
// ===================================================================

window.SimpleAuth = {
    getCurrentUser: function() {
        try {
            const userData = localStorage.getItem('satker_current_user');
            if (userData) {
                const user = JSON.parse(userData);
                if (user && user.username) {
                    return user;
                }
            }
            return null;
        } catch (error) {
            console.warn('Error getting user:', error);
            return null;
        }
    },

    login: function(username, password) {
        try {
            const users = this.getUsers();
            console.log(`🔍 Login attempt: username="${username}", password="${password}"`);
            console.log(`👥 Total users available: ${users.length}`);
            
            // Debug: Show all usernames
            const usernames = users.map(u => u.username);
            console.log('📋 Available usernames:', usernames);
            
            // Find exact match
            const user = users.find(u => u.username === username && u.password === password);
            
            // Debug: Check username match
            const usernameMatch = users.find(u => u.username === username);
            if (usernameMatch) {
                console.log(`✅ Username "${username}" found`);
                console.log(`🔑 Expected password: "${usernameMatch.password}"`);
                console.log(`🔑 Provided password: "${password}"`);
                console.log(`🔐 Password match: ${usernameMatch.password === password}`);
            } else {
                console.log(`❌ Username "${username}" NOT found`);
            }
           
            if (user) {
                localStorage.setItem('satker_current_user', JSON.stringify(user));
                console.log('✅ Login successful');
                return { success: true, user: user };
            } else {
                console.log('❌ Login failed');
                return { success: false, error: 'Username atau password salah' };
            }
        } catch (error) {
            console.error('🚨 Login error:', error);
            return { success: false, error: 'System error' };
        }
    },

    logout: function() {
        try {
            localStorage.removeItem('satker_current_user');
            localStorage.removeItem('satker_progress_data');
            sessionStorage.clear();
            return true;
        } catch (error) {
            return false;
        }
    },

    getUsers: function() {
        try {
            let users = [];
            const stored = localStorage.getItem('satker_users_db');
           
            if (stored) {
                users = JSON.parse(stored);
                console.log('📦 Loading users from cache...');
            }
           
            if (users.length === 0) {
                console.log('🔧 Creating users from completeSatkerData...');
                users = this.createAllUsers();
                localStorage.setItem('satker_users_db', JSON.stringify(users));
                console.log('💾 Users cached successfully');
            }

            // nakerbarelang is now hardcoded in createAllUsers(), no fallback needed
           
            return users;
        } catch (error) {
            console.error('Error loading users:', error);
            return this.createAllUsers();
        }
    },

    // Function to clear cache and regenerate users
    refreshUsers: function() {
        console.log('🔄 Clearing user cache and regenerating...');
        localStorage.removeItem('satker_users_db');
        const users = this.createAllUsers();
        localStorage.setItem('satker_users_db', JSON.stringify(users));
        console.log('✅ Users refreshed successfully');
        return users;
    },

    // Debug function to check nakerbarelang specifically
    debugNakerbarelang: function() {
        console.log('=== DEBUG NAKERBARELANG ===');
        const users = this.getUsers();
        console.log('Total users:', users.length);
        
        const nakerbarelang = users.find(u => u.username === 'nakerbarelang');
        console.log('Nakerbarelang found:', !!nakerbarelang);
        
        if (nakerbarelang) {
            console.log('Nakerbarelang data:', nakerbarelang);
            console.log('Username type:', typeof nakerbarelang.username);
            console.log('Password type:', typeof nakerbarelang.password);
            console.log('Username value:', JSON.stringify(nakerbarelang.username));
            console.log('Password value:', JSON.stringify(nakerbarelang.password));
        }
        
        // Test exact match
        const exactMatch = users.find(u => u.username === 'nakerbarelang' && u.password === 'password123');
        console.log('Exact match found:', !!exactMatch);
        
        // Show all users with 'naker' in username
        const nakerUsers = users.filter(u => u.username.includes('naker'));
        console.log('Naker users:', nakerUsers.map(u => u.username));
        
        return nakerbarelang;
    },

    createAllUsers: function() {
        const users = [];
       
        // Add super admin
        users.push({
            username: 'superadmin',
            password: 'admin123',
            fullName: 'Super Administrator',
            role: 'super_admin',
            satkerCode: 'ALL',
            satkerName: 'All Satuan Kerja'
        });

        // Add menteri user
        users.push({
            username: 'menteri',
            password: 'transmigrasi2025',
            fullName: 'Menteri Transmigrasi',
            role: 'menteri_transmigrasi',
            satkerCode: 'ALL',
            satkerName: 'Kementerian Transmigrasi Republik Indonesia',
            provinsi: 'DKI Jakarta',
            kabupaten: 'Jakarta Pusat',
            type: 'pusat',
            category: 'menteri',
            codeVerified: true
        });

        // Add hardcoded nakerbarelang user (always works)
        users.push({
            id: 'hardcoded_nakerbarelang',
            username: 'nakerbarelang',
            password: 'password123',
            fullName: 'Admin Dinas Perumahan, Kawasan Permukiman, dan Pertamanan Kota Batam',
            role: 'satker_admin',
            satkerCode: '699506',
            satkerName: 'Dinas Perumahan, Kawasan Permukiman, dan Pertamanan Kota Batam',
            provinsi: 'Kepulauan Riau',
            kabupaten: 'Batam',
            type: 'kabupaten',
            category: 'dinas',
            codeVerified: true
        });

       
        // Create users from satker data - ALL SATKER APPROACH
        if (typeof completeSatkerData !== 'undefined' && completeSatkerData.length > 0) {
            completeSatkerData.forEach((satker, index) => {
                const username = this.generateUsername(satker.name);
               
                // Skip if username already exists (avoid duplicate with manual entries)
                if (users.find(u => u.username === username)) {
                    console.log(`⚠️ Skipping duplicate username: ${username}`);
                    return;
                }
               
                // Generate code if not exist
                let satkerCode = satker.code;
                if (!satkerCode) {
                    satkerCode = this.generateSatkerCode(satker);
                }
               
                users.push({
                    id: `user_${index + 1}`,
                    username: username,
                    password: 'password123',
                    fullName: `Admin ${satker.name}`,
                    role: 'satker_admin',
                    satkerCode: satkerCode,
                    satkerName: satker.name,
                    provinsi: satker.provinsi,
                    kabupaten: satker.kabupaten,
                    type: satker.type,
                    category: satker.category,
                    codeVerified: !!satker.code  // Mark if original code exists
                });
            });
            console.log(`✅ Created ${users.length - 1} satker users + 1 super admin`);
            console.log(`📊 Total satker data processed: ${completeSatkerData.length}`);
        }
       
        return users;
    },

    generateUsername: function(satkerName) {
        // Replicate OLD system logic exactly
        return satkerName
            .toLowerCase()
            .replace(/dinas|biro|pusat|direktorat|balai|inspektorat/g, '')
            .replace(/tenaga kerja dan transmigrasi|transmigrasi dan tenaga kerja/g, 'naker')
            .replace(/kementerian|provinsi|kabupaten|kota/g, '')
            .replace(/[^a-z0-9]/g, '')
            .substring(0, 15) || 'user';
    },

    generateSatkerCode: function(satker) {
        // COMPLETE FIREBASE MAPPING - UPDATED
        const name = satker.name.toLowerCase();
        const firebaseMapping = {
            // DIREKTORAT
            'direktorat pemberdayaan masyarakat transmigrasi': '694652',
            'direktorat pengembangan produk unggulan transmigrasi': '694652',
            'direktorat promosi dan pemasaran produk unggulan transmigrasi': '694652',
            'sekretaris direktorat jenderal pengembangan ekonomi dan pemberdayaan masyarkat transmigrasi': '694652',
            'direktorat jenderal pembangunan dan pengembangan kawasan transmigrasi': '694590',
           
            // BATAM
            'dinas perumahan, kawasan permukiman, dan pertamanan kota batam': '699506',
           
            // ACEH
            'dinas tenaga kerja dan mobilitas penduduk aceh': '694544',
            'dinas transmigrasi dan tenaga kerja kabupaten aceh barat': '691643',
            'dinas transmigrasi dan tenaga kerja kabupaten aceh selatan': '694556',
            'dinas penanaman modal transmigrasi dan tenaga kerja kabupaten aceh utara': '691641',
            'dinas transmigrasi dan tenaga kerja kabupaten bener meriah ': '691701',
            'dinas transmigrasi dan tenaga kerja kabupaten bener meriah': '691642',
            'dinas tenaga kerja dan transmigrasi kabupaten simeulue': '694589',
            'dinas tenaga kerja dan transmigrasi kota subulussalam': '691640',
           
            // BANGKA BELITUNG
            'dinas tenaga kerja provinsi bangka belitung': '694635',
            'dinas tenaga kerja dan transmigrasi kabupaten bangka selatan': '694664',
           
            // BANTEN
            'dinas tenaga kerja dan transmigrasi provinsi banten': '694582',
           
            // BENGKULU
            'dinas ketenagakerjaan dan transmigrasi provinsi bengkulu': '694579',
            'dinas transmigrasi dan ketenagakerjaan kabupaten bengkulu selatan': '694596',
            'dinas ketenagakerjaan dan transmigrasi kabupaten bengkulu utara': '694662',
           
            // DKI JAKARTA
            'dinas tenaga kerja transmigrasi dan energi provinsi dki jakarta': '694644',
           
            // GORONTALO
            'dinas transmigrasi dan tenaga kerja kabupaten boalemo': '691663',
            'dinas tenaga kerja dan transmigrasi provinsi gorontalo': '694583',
            'dinas tenaga kerja dan transmigrasi kabupaten gorontalo': '694584',
            'dinas transmigrasi dan tenaga kerja kabupaten gorontalo utara': '694595',
           
            // JAMBI
            'dinas tenaga kerja dan transmigrasi provinsi jambi': '691649',
            'dinas tenaga kerja dan transmigrasi kabupaten tanjung jabung timur': '691650',
           
            // JAWA
            'dinas tenaga kerja dan transmigrasi provinsi jawa barat': '694552',
            'dinas tenaga kerja dan transmigrasi provinsi jawa tengah': '694553',
            'dinas tenaga kerja transmigrasi dan kependudukan provinsi jawa timur': '694555',
           
            // KALIMANTAN BARAT
            'dinas tenaga kerja dan transmigrasi provinsi kalimantan barat': '694562',
            'dinas tenaga kerja dan transmigrasi kabupaten kayong utara': '691657',
            'dinas transmigrasi dan tenaga kerja kabupaten kubu raya': '691656',
            'dinas tenaga kerja dan transmigrasi kabupaten sambas': '691655',
            'dinas tenaga kerja dan transmigrasi kabupaten sintang': '694597',
           
            // KALIMANTAN SELATAN
            'dinas tenaga kerja dan transmigrasi kabupaten barito kuala': '694565',
            'dinas tenaga kerja dan transmigrasi provinsi kalimantan selatan': '691661',
            'dinas tenaga kerja dan transmigrasi kabupaten tanah bumbu': '694654',
           
            // KALIMANTAN TENGAH
            'dinas tenaga kerja dan transmigrasi provinsi kalimantan tengah': '694564',
            'dinas transmigrasi kabupaten kapuas': '694563',
            'dinas transmigrasi dan tenaga kerja kabupaten kapuas': '691695',
            'dinas tenaga kerja dan transmigrasi kabupaten kotawaringin barat': '691658',
            'dinas tenaga kerja dan transmigrasi kabupaten lamandau': '694546',
            'dinas tenaga kerja dan transmigrasi kabupaten sukamara': '694601',
           
            // KALIMANTAN TIMUR
            'dinas tenaga kerja dan transmigrasi provinsi kalimantan timur': '691659',
            'dinas transmigrasi dan tenaga kerja kabupaten kutai timur': '691696',
            'dinas tenaga kerja dan transmigrasi kabupaten paser': '694566',
           
            // KALIMANTAN UTARA
            'dinas tenaga kerja dan transmigrasi provinsi kalimantan utara': '694591',
            'dinas transmigrasi dan tenaga kerja kabupaten bulungan': '694592',
           
            // KEPULAUAN RIAU
            'dinas tenaga kerja dan transmigrasi provinsi kepulauan riau': '691647',
            'dinas tenaga kerja dan trasmigrasi provinsi kepulauan riau': '691647',
           
            // LAMPUNG
            'dinas pemberdayaan masyarakat desa dan transmigrasi provinsi lampung': '694561',
            'dinas tenaga kerja dan transmigrasi kabupaten mesuji': '691654',
            'dinas tenaga kerja dan transmigrasi kabupaten mesuji\n': '691694',
           
            // MALUKU
            'dinas tenaga kerja dan transmigrasi provinsi maluku': '691681',
            'dinas transmigrasi dan tenaga kerja kabupaten maluku tengah': '691682',
           
            // MALUKU UTARA
            'dinas tenaga kerja dan transmigrasi kabupaten halmahera selatan': '691685',
            'dinas ketenagakerjaan dan transmigrasi kabupaten halmahera tengah': '694631',
            'dinas transmigrasi dan tenaga kerja kabupaten halmahera timur': '694632',
            'dinas tenaga kerja dan transmigrasi kabupaten halmahera utara': '691684',
            'dinas tenaga kerja dan transmigrasi kabupaten kepulauan sula': '694658',
            'dinas tenaga kerja dan transmigrasi provinsi maluku utara ': '691692',
            'dinas tenaga kerja dan transmigrasi provinsi maluku utara': '694580',
            'dinas tenaga kerja dan transmigrasi kabupaten pulau morotai': '691683',
            'dinas tenaga kerja dan transmigrasi kabupaten kota tidore kepulauan': '694581',
           
            // NTB
            'dinas tenaga kerja dan transmigrasi kabupaten bima': '694622',
            'dinas tenaga kerja dan transmigrasi kabupaten lombok timur': '691669',
            'dinas tenaga kerja dan transmigrasi provinsi nusa tenggara barat': '694621',
           
            // NTT
            'dinas transmigrasi dan tenaga kerja kabupaten sumba barat': '694575',
            'dinas transmigrasi dan tenaga kerja kabupaten sumba timur ': '691700',
            'dinas transmigrasi dan tenaga kerja kabupaten sumba timur': '694577',
            'dinas tenaga kerja dan transmigrasi kabupaten alor': '691672',
            'dinas koperasi, tenaga kerja dan transmigrasi kabupaten belu': '694625',
            'dinas transmigrasi dan tenaga kerja kabupaten ende': '691671',
            'dinas tenaga kerja kabupaten flores timur': '691677',
            'dinas tenaga kerja dan transmigrasi kabupaten kupang': '691679',
            'dinas ketenagakerjaan dan transmigrasi kabupaten malaka': '694548',
            'dinas tenaga kerja, transmigrasi, koperasi, dan ukm kabupaten manggarai barat': '691670',
            'dinas transmigrasi dan tenaga kerja kabupaten nagekeo': '694649',
            'dinas transmigrasi dan tenaga kerja kabupaten ngada': '691676',
            'dinas ketenagakerjaan dan transmigrasi provinsi nusa tenggara timur': '694576',
            'dinas transmigrasi dan tenaga kerja kabupaten rote ndao': '691680',
            'dinas transmigrasi, koperasi, ukm dan tenaga kerja kabupaten sabu raijua': '691675',
            'dinas tenaga kerja dan transmigrasi kabupaten sumba barat daya': '691673',
            'dinas ketenagakerjaan dan transmigrasi kabupaten timor tengah selatan': '691678',
            'dinas tenaga kerja dan transmigrasi kabupaten timor tengah utara': '691674',
           
            // PAPUA
            'dinas tenaga kerja dan transmigrasi kabupaten jayapura': '691690',
            'dinas perindustrian, tenaga kerja dan transmigrasi kabupaten keerom ': '691698',
            'dinas perindustrian, tenaga kerja dan transmigrasi kabupaten keerom': '694628',
            'dinas tenaga kerja, koperasi, usaha kecil dan menengah provinsi papua': '691689',
            'dinas perindustrian, perdagangan, koperasi, ukm dan tenaga kerja provinsi papua': '691689',
           
            // PAPUA BARAT
            'dinas transmigrasi dan tenaga kerja kabupaten fakfak': '694586',
            'dinas tenaga kerja dan transmigrasi kabupaten manokwari': '691687',
            'dinas ketenagakerjaan dan transmigrasi kabupaten manokwari selatan': '691688',
            'dinas transmigrasi dan tenaga kerja provinsi papua barat': '694585',
            'dinas transmigrasi dan tenaga kerja kabupaten teluk wondama': '694587',
            'dinas tenaga kerja, transmigrasi, energi, dan sumber daya mineral provinsi papua barat daya': '691686',
            'dinas tenaga kerja dan transmigrasi kabupaten sorong': '694656',
            'dinas tenaga kerja dan transmigrasi kabupaten merauke': '694578',
            'dinas tenaga kerja, transmigrasi, energi, dan sumber daya mineral provinsi papua selatan': '694663',
           
            // RIAU
            'dinas tenaga kerja dan transmigrasi kabupaten bengkalis': '691646',
            'dinas tenaga kerja dan transmigrasi provinsi riau': '691645',
           
            // SULAWESI BARAT
            'dinas tenaga kerja dan transmigrasi kabupaten majene': '694549',
            'dinas transmigrasi dan tenaga kerja kabupaten mamasa': '694599',
            'dinas transmigrasi dan tenaga kerja kabupaten mamuju': '691664',
            'dinas transmigrasi dan tenaga kerja kabupaten mamuju tengah': '694551',
            'dinas tenaga kerja, perindustrian, dan transmigrasi kabupaten pasangkayu': '694550',
            'dinas transmigrasi, tenaga kerja, dan esdm kabupaten polewali mandar': '694598',
            'dinas transmigrasi daerah provinsi sulawesi barat': '694588',
            'dinas tenaga kerja dan transmigrasi provinsi sulawesi barat': '694588',
           
            // SULAWESI SELATAN
            'dinas koperasi, ukm, tenaga kerja dan transmigrasi kabupaten enrekang': '691667',
            'dinas transmigrasi dan tenaga kerja kabupaten luwu timur': '694572',
            'dinas transmigrasi dan tenaga kerja kabupaten luwu utara': '694616',
            'dinas koperasi, ukm, tenaga kerja dan transmigrasi kabupaten sidenreng rappang': '694594',
            'dinas tenaga kerja dan transmigrasi provinsi sulawesi selatan': '694570',
            'dinas tenaga kerja dan transmigrasi kabupaten toraja utara': '694618',
            'dinas ketenagakerjaan dan transmigrasi kabupaten wajo': '694571',
            'dinas sosial, tenaga kerja dan transmigrasi kabupaten wajo': '694571',
           
            // SULAWESI TENGAH
            'dinas tenaga kerja dan transmigrasi kabupaten buol': '694661',
            'dinas tenaga kerja dan transmigrasi daerah kabupaten morowali': '691666',
            'dinas tenaga kerja dan transmigrasi daerah kabupaten morowali utara': '691665',
            'dinas tenaga kerja dan transmigrasi kabupaten poso': '694568',
            'dinas ketenagakerjaan dan transmigrasi kabupaten sigi': '694569',
            'dinas tenaga kerja dan transmigrasi provinsi sulawesi tengah': '694567',
            'dinas tenaga kerja dan transmigrasi kabupaten tojo una-una': '694655',
            'dinas tenaga kerja dan transmigrasi kab. tojo una-una': '694655',
            'dinas transmigrasi kabupaten tolitoli': '694593',
            'dinas transmigrasi kab. toli-toli': '694593',
           
            // SULAWESI TENGGARA
            'dinas transmigrasi dan tenaga kerja kabupaten konawe': '694573',
            'dinas transmigrasi dan tenaga kerja kabupaten konawe selatan': '691668',
            'dinas transmigrasi dan tenaga kerja kabupaten konawe utara': '694574',
            'dinas transmigrasi dan tenaga kerja kabupaten muna': '694600',
            'dinas tenaga kerja dan transmigrasi provinsi sulawesi tenggara': '694547',
           
            // SUMATERA BARAT
            'dinas perdagangan dan transmigrasi kabupaten pesisir selatan': '691644',
            'dinas ketenagakerjaan dan transmigrasi kabupaten sijunjung': '694558',
            'dinas tenaga kerja dan transmigrasi provinsi sumatera barat': '694557',
           
            // SUMATERA SELATAN
            'dinas transmigrasi dan tenaga kerja kabupaten banyuasin': '694559',
            'dinas transmigrasi dan tenaga kerja kabupaten lahat': '691652',
            'dinas transmigrasi dan tenaga kerja kabupaten ogan ilir': '691651',
            'dinas tenaga kerja dan transmigrasi kabupaten oku timur': '691653',
            'dinas ketenagakerjaan dan transmigrasi kabupaten pali': '694545',
            'dinas tenaga kerja dan transmigrasi provinsi sumatera selatan': '694560',
            'dinas ketenagakerjaan dan transmigrasi kabupaten penukal abab lematang ilir': '694545',
           
            // YOGYAKARTA
            'dinas tenaga kerja dan transmigrasi provinsi di yogyakarta': '694554',
           
            // BIRO UMUM
            'biro umum dan layanan pengadaan': 'biro_umum'
        };
       
        // Try exact match first
        const exactMatch = firebaseMapping[name];
        if (exactMatch) {
            console.log(`🎯 EXACT MATCH found for "${name}" → "${exactMatch}"`);
            return exactMatch;
        }
       
        // LOCATION-BASED GENERATION for unmapped satkers
        // Generate unique codes based on location
        let location = '';
        if (satker.kabupaten) {
            location = satker.kabupaten.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 8);
        } else if (satker.provinsi) {
            location = satker.provinsi.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 8);
        } else {
            location = 'DEFAULT';
        }
       
        // Generate consistent hash-based number
        const locationHash = this.simpleHash(satker.name + location);
        const number = 690000 + (locationHash % 10000); // 690000-699999 range
       
        // Pattern-based prefixes
        let prefix = 'SATKER';
        if (name.includes('direktorat')) prefix = 'DIREKTORAT';
        else if (name.includes('biro')) prefix = 'BIRO';
        else if (name.includes('balai')) prefix = 'BALAI';
        else if (name.includes('pusat')) prefix = 'PUSAT';
        else if (name.includes('inspektorat')) prefix = 'INSPEKTORAT';
       
        const generatedCode = `${prefix}_${location}_${number}`;
        console.log(`🔧 GENERATED CODE for "${name}" → "${generatedCode}"`);
        return generatedCode;
    },

    simpleHash: function(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    }
};
