// COMPLETE SATUAN KERJA DATA - 150+ SATKER KEMENTERIAN TRANSMIGRASI
// Data lengkap semua satuan kerja dari Pusat hingga Kabupaten/Kota

const completeSatkerData = [
    // ========================================
    // TINGKAT PUSAT - BIRO (5)
    // ========================================
    { name: "Biro Perencanaan, Kerjasama, dan Hubungan Masyarakat", code: "BIRO_PERENCANAAN", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Biro Umum dan Layanan Pengadaan", code: "BIRO_UMUM", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Biro Keuangan dan BMN", code: "BIRO_KEUANGAN", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Biro Organisasi, SDM, dan Reformasi Birokrasi", code: "BIRO_ORGANISASI", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Biro Hukum", code: "BIRO_HUKUM", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // ========================================
    // TINGKAT PUSAT - PUSAT (3)
    // ========================================
    { name: "Pusat Strategi Kebijakan Transmigrasi", type: "pusat", category: "pusat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Pusat Data dan Informasi Transmigrasi", type: "pusat", category: "pusat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Pusat Pengembangan SDM", type: "pusat", category: "pusat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // ========================================
    // TINGKAT PUSAT - BALAI (4)
    // ========================================
    { name: "Balai Besar Pelatihan dan Pemberdayaan Masyarakat Transmigrasi Yogyakarta", type: "pusat", category: "balai", provinsi: "DI Yogyakarta", kabupaten: "Yogyakarta" },
    { name: "Balai Pelatihan dan Pemberdayaan Masyarakat Transmigrasi Banjarmasin", type: "pusat", category: "balai", provinsi: "Kalimantan Selatan", kabupaten: "Banjarmasin" },
    { name: "Balai Pelatihan dan Pemberdayaan Masyarakat Transmigrasi Denpasar", type: "pusat", category: "balai", provinsi: "Bali", kabupaten: "Denpasar" },
    { name: "Balai Pelatihan dan Pemberdayaan Masyarakat Transmigrasi Pekanbaru", type: "pusat", category: "balai", provinsi: "Riau", kabupaten: "Pekanbaru" },
    
    // ========================================
    // TINGKAT PUSAT - DIREKTORAT (13)
    // ========================================
    { name: "Sekretariat Direktorat Jenderal Pembangunan dan Pengembangan Kawasan Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Perencanaan Perwujudan Kawasan Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pembangunan Kawasan Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Fasilitasi Penataan Persebaran Penduduk di Kawasan Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pengembangan Satuan Permukiman dan Pusat Satuan Kawasan Pengembangan", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pengembangan Kawasan Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Sekretariat Direktorat Jenderal Pengembangan Ekonomi dan Pemberdayaan Masyarakat Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Perencanaan Teknis Pengembangan Ekonomi dan Pemberdayaan Masyarakat Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pengembangan Kelembagaan Ekonomi Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pengembangan Produk Unggulan Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Promosi dan Pemasaran Produk Unggulan Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pemberdayaan Masyarakat Transmigrasi", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // ========================================
    // TINGKAT PUSAT - INSPEKTORAT (3)
    // ========================================
    { name: "Sekretariat Itjen", type: "pusat", category: "inspektorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Inspektorat I", type: "pusat", category: "inspektorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Inspektorat II", type: "pusat", category: "inspektorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // ========================================
    // ACEH (7)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Mobilitas Penduduk Provinsi Aceh", type: "provinsi", category: "dinas", provinsi: "Aceh", kabupaten: "Banda Aceh" },
    { name: "Dinas Penanaman Modal, Transmigrasi dan Tenaga Kerja Kabupaten Aceh Utara", type: "kabupaten", category: "dinas", provinsi: "Aceh", kabupaten: "Aceh Utara" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Aceh Barat", type: "kabupaten", category: "dinas", provinsi: "Aceh", kabupaten: "Aceh Barat" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Bener Meriah", type: "kabupaten", category: "dinas", provinsi: "Aceh", kabupaten: "Bener Meriah" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Aceh Selatan", type: "kabupaten", category: "dinas", provinsi: "Aceh", kabupaten: "Aceh Selatan" },
    { name: "Dinas Keluarga Sejahtera, Mobilitas Penduduk, dan Transmigrasi Kabupaten Simeulue", type: "kabupaten", category: "dinas", provinsi: "Aceh", kabupaten: "Simeulue" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kota Subulussalam", type: "kabupaten", category: "dinas", provinsi: "Aceh", kabupaten: "Subulussalam" },
    
    // ========================================
    // SUMATERA UTARA (1)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sumatera Utara", type: "provinsi", category: "dinas", provinsi: "Sumatera Utara", kabupaten: "Medan" },
    
    // ========================================
    // SUMATERA BARAT (3)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sumatera Barat", type: "provinsi", category: "dinas", provinsi: "Sumatera Barat", kabupaten: "Padang" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Sijunjung", type: "kabupaten", category: "dinas", provinsi: "Sumatera Barat", kabupaten: "Sijunjung" },
    { name: "Dinas Perdagangan dan Transmigrasi Kabupaten Pesisir Selatan", type: "kabupaten", category: "dinas", provinsi: "Sumatera Barat", kabupaten: "Pesisir Selatan" },
    
    // ========================================
    // RIAU (4)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Riau", type: "provinsi", category: "dinas", provinsi: "Riau", kabupaten: "Pekanbaru" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kepulauan Riau", type: "provinsi", category: "dinas", provinsi: "Kepulauan Riau", kabupaten: "Tanjung Pinang" },
    { name: "Dinas Perumahan, Kawasan Permukiman, dan Pertamanan Kota Batam", type: "kabupaten", category: "dinas", provinsi: "Kepulauan Riau", kabupaten: "Batam" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Bengkalis", type: "kabupaten", category: "dinas", provinsi: "Riau", kabupaten: "Bengkalis" },
    
    // ========================================
    // BENGKULU (3)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Bengkulu", type: "provinsi", category: "dinas", provinsi: "Bengkulu", kabupaten: "Bengkulu" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Bengkulu Utara", type: "kabupaten", category: "dinas", provinsi: "Bengkulu", kabupaten: "Bengkulu Utara" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Bengkulu Selatan", type: "kabupaten", category: "dinas", provinsi: "Bengkulu", kabupaten: "Bengkulu Selatan" },
    
    // ========================================
    // BANGKA BELITUNG (2)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kepulauan Bangka Belitung", type: "provinsi", category: "dinas", provinsi: "Bangka Belitung", kabupaten: "Pangkalpinang" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Bangka Selatan", type: "kabupaten", category: "dinas", provinsi: "Bangka Belitung", kabupaten: "Bangka Selatan" },
    
    // ========================================
    // JAMBI (2)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Jambi", type: "provinsi", category: "dinas", provinsi: "Jambi", kabupaten: "Jambi" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Tanjung Jabung Timur", type: "kabupaten", category: "dinas", provinsi: "Jambi", kabupaten: "Tanjung Jabung Timur" },
    
    // ========================================
    // SUMATERA SELATAN (6)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sumatera Selatan", type: "provinsi", category: "dinas", provinsi: "Sumatera Selatan", kabupaten: "Palembang" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Lahat", type: "kabupaten", category: "dinas", provinsi: "Sumatera Selatan", kabupaten: "Lahat" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Banyuasin", code: "694559", type: "kabupaten", category: "dinas", provinsi: "Sumatera Selatan", kabupaten: "Banyuasin" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Ogan Ilir", type: "kabupaten", category: "dinas", provinsi: "Sumatera Selatan", kabupaten: "Ogan Ilir" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Ogan Komering Ulu Timur", type: "kabupaten", category: "dinas", provinsi: "Sumatera Selatan", kabupaten: "Ogan Komering Ulu Timur" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Penukal Abab Lematang Ilir", type: "kabupaten", category: "dinas", provinsi: "Sumatera Selatan", kabupaten: "Penukal Abab Lematang Ilir" },
    
    // ========================================
    // LAMPUNG (2)
    // ========================================
    { name: "Dinas Pemberdayaan Masyarakat, Desa dan Transmigrasi Provinsi Lampung", type: "provinsi", category: "dinas", provinsi: "Lampung", kabupaten: "Bandar Lampung" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Mesuji", type: "kabupaten", category: "dinas", provinsi: "Lampung", kabupaten: "Mesuji" },
    
    // ========================================
    // DKI JAKARTA (1)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Daerah Khusus Jakarta", type: "provinsi", category: "dinas", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // ========================================
    // BANTEN (1)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Banten", type: "provinsi", category: "dinas", provinsi: "Banten", kabupaten: "Serang" },
    
    // ========================================
    // JAWA BARAT (1)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Jawa Barat", type: "provinsi", category: "dinas", provinsi: "Jawa Barat", kabupaten: "Bandung" },
    
    // ========================================
    // JAWA TENGAH (1)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Jawa Tengah", type: "provinsi", category: "dinas", provinsi: "Jawa Tengah", kabupaten: "Semarang" },
    
    // ========================================
    // DI YOGYAKARTA (1)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Daerah Istimewa Yogyakarta", type: "provinsi", category: "dinas", provinsi: "DI Yogyakarta", kabupaten: "Yogyakarta" },
    
    // ========================================
    // JAWA TIMUR (1)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Jawa Timur", type: "provinsi", category: "dinas", provinsi: "Jawa Timur", kabupaten: "Surabaya" },
    
    // ========================================
    // KALIMANTAN BARAT (5)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Barat", type: "provinsi", category: "dinas", provinsi: "Kalimantan Barat", kabupaten: "Pontianak" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Sambas", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Barat", kabupaten: "Sambas" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Sintang", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Barat", kabupaten: "Sintang" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Kubu Raya", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Barat", kabupaten: "Kubu Raya" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Kayong Utara", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Barat", kabupaten: "Kayong Utara" },
    
    // ========================================
    // KALIMANTAN TENGAH (5)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Tengah", type: "provinsi", category: "dinas", provinsi: "Kalimantan Tengah", kabupaten: "Palangka Raya" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Kapuas", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Tengah", kabupaten: "Kapuas" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Kotawaringin Barat", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Tengah", kabupaten: "Kotawaringin Barat" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Sukamara", code: "NAKER_SUKAMARA_163", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Tengah", kabupaten: "Sukamara" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Lamandau", code: "694546", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Tengah", kabupaten: "Lamandau" },
    
    // ========================================
    // KALIMANTAN SELATAN (3)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Selatan", type: "provinsi", category: "dinas", provinsi: "Kalimantan Selatan", kabupaten: "Banjarmasin" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Barito Kuala", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Selatan", kabupaten: "Barito Kuala" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Tanah Bumbu", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Selatan", kabupaten: "Tanah Bumbu" },
    
    // ========================================
    // KALIMANTAN TIMUR (3)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Timur", type: "provinsi", category: "dinas", provinsi: "Kalimantan Timur", kabupaten: "Samarinda" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Paser", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Timur", kabupaten: "Paser" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Kutai Timur", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Timur", kabupaten: "Kutai Timur" },
    
    // ========================================
    // KALIMANTAN UTARA (2)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Utara", type: "provinsi", category: "dinas", provinsi: "Kalimantan Utara", kabupaten: "Tarakan" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Bulungan", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Utara", kabupaten: "Bulungan" },
    
    // ========================================
    // SULAWESI TENGAH (8)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Tengah", code: "694567", type: "provinsi", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Palu" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Poso", code: "694568", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Poso" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Sigi", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Sigi" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Tojo Una-Una", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Tojo Una-Una" },
    { name: "Dinas Transmigrasi Kabupaten Toli-Toli", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Toli-Toli" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Buol", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Buol" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Daerah Kabupaten Morowali", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Morowali" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Morowali Utara", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Morowali Utara" },
    
    // ========================================
    // SULAWESI SELATAN (7)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan", type: "provinsi", category: "dinas", provinsi: "Sulawesi Selatan", kabupaten: "Makassar" },
    { name: "Dinas Koperasi, Usaha Kecil Menengah, Tenaga Kerja, dan Transmigrasi Kabupaten Sidenreng Rappang", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Selatan", kabupaten: "Sidenreng Rappang" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Luwu Utara", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Selatan", kabupaten: "Luwu Utara" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Luwu Timur", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Selatan", kabupaten: "Luwu Timur" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Toraja Utara", code: "694618", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Selatan", kabupaten: "Toraja Utara" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Wajo", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Selatan", kabupaten: "Wajo" },
    { name: "Dinas Koperasi, Usaha Kecil Menengah, Tenaga Kerja dan Transmigrasi Kabupaten Enrekang", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Selatan", kabupaten: "Enrekang" },
    
    // ========================================
    // SULAWESI BARAT (7)
    // ========================================
    { name: "Dinas Transmigrasi Daerah Provinsi Sulawesi Barat", type: "provinsi", category: "dinas", provinsi: "Sulawesi Barat", kabupaten: "Mamuju" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Majene", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Barat", kabupaten: "Majene" },
    { name: "Dinas Transmigrasi, Tenaga Kerja, dan Energi Sumber Daya Mineral Kabupaten Polewali Mandar", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Barat", kabupaten: "Polewali Mandar" },
    { name: "Dinas Tenaga Kerja, Perindustrian, dan Transmigrasi Kabupaten Pasangkayu", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Barat", kabupaten: "Pasangkayu" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Mamasa", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Barat", kabupaten: "Mamasa" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Mamuju", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Barat", kabupaten: "Mamuju" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Mamuju Tengah", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Barat", kabupaten: "Mamuju Tengah" },
    
    // ========================================
    // SULAWESI TENGGARA (5)
    // ========================================
    { name: "Dinas Transmigrasi dan Tenaga Kerja Provinsi Sulawesi Tenggara", type: "provinsi", category: "dinas", provinsi: "Sulawesi Tenggara", kabupaten: "Kendari" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Muna", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tenggara", kabupaten: "Muna" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Konawe", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tenggara", kabupaten: "Konawe" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Konawe Utara", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tenggara", kabupaten: "Konawe Utara" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Konawe Selatan", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tenggara", kabupaten: "Konawe Selatan" },
    
    // ========================================
    // SULAWESI UTARA (1)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Daerah Provinsi Sulawesi Utara", type: "provinsi", category: "dinas", provinsi: "Sulawesi Utara", kabupaten: "Manado" },
    
    // ========================================
    // GORONTALO (4)
    // ========================================
    { name: "Dinas Tenaga Kerja Energi Sumber Daya Mineral dan Transmigrasi Provinsi Gorontalo", type: "provinsi", category: "dinas", provinsi: "Gorontalo", kabupaten: "Gorontalo" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Gorontalo", type: "kabupaten", category: "dinas", provinsi: "Gorontalo", kabupaten: "Gorontalo" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Gorontalo Utara", type: "kabupaten", category: "dinas", provinsi: "Gorontalo", kabupaten: "Gorontalo Utara" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Boalemo", type: "kabupaten", category: "dinas", provinsi: "Gorontalo", kabupaten: "Boalemo" },
    
    // ========================================
    // NUSA TENGGARA BARAT (3)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Nusa Tenggara Barat", type: "provinsi", category: "dinas", provinsi: "Nusa Tenggara Barat", kabupaten: "Mataram" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Bima", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Barat", kabupaten: "Bima" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Lombok Timur", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Barat", kabupaten: "Lombok Timur" },
    
    // ========================================
    // NUSA TENGGARA TIMUR (16)
    // ========================================
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Provinsi Nusa Tenggara Timur", type: "provinsi", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Kupang" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Malaka", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Malaka" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Sumba Timur", code: "694577", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Sumba Timur" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Sumba Barat", code: "694575", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Sumba Barat" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Sumba Barat Daya", code: "691673", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Sumba Barat Daya" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Timor Tengah Utara", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Timor Tengah Utara" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Timor Tengah Selatan", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Timor Tengah Selatan" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Belu", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Belu" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Rote Ndao", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Rote Ndao" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Nagekeo", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Nagekeo" },
    { name: "Dinas Transmigrasi Dan Tenaga Kerja Kabupaten Ende", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Ende" },
    { name: "Dinas Transmigrasi, Koperasi, Usaha Kecil Menengah, dan Tenaga Kerja Kabupaten Sabu Raijua", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Sabu Raijua" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Kupang", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Kupang" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Ngada", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Ngada" },
    { name: "Dinas Tenaga Kerja Kabupaten Flores Timur", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Flores Timur" },
    { name: "Dinas Tenaga Kerja, Transmigrasi, Koperasi, dan Usaha Kecil Menengah Kabupaten Manggarai Barat", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Manggarai Barat" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Alor", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Alor" },
    
    // ========================================
    // MALUKU (2)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Maluku", type: "provinsi", category: "dinas", provinsi: "Maluku", kabupaten: "Ambon" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Maluku Tengah", type: "kabupaten", category: "dinas", provinsi: "Maluku", kabupaten: "Maluku Tengah" },
    
    // ========================================
    // MALUKU UTARA (8)
    // ========================================
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Maluku Utara", type: "provinsi", category: "dinas", provinsi: "Maluku Utara", kabupaten: "Ternate" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Pulau Morotai", type: "kabupaten", category: "dinas", provinsi: "Maluku Utara", kabupaten: "Pulau Morotai" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Halmahera Timur", type: "kabupaten", category: "dinas", provinsi: "Maluku Utara", kabupaten: "Halmahera Timur" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Halmahera Selatan", type: "kabupaten", category: "dinas", provinsi: "Maluku Utara", kabupaten: "Halmahera Selatan" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Kepulauan Sula", type: "kabupaten", category: "dinas", provinsi: "Maluku Utara", kabupaten: "Kepulauan Sula" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Halmahera Utara", type: "kabupaten", category: "dinas", provinsi: "Maluku Utara", kabupaten: "Halmahera Utara" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Halmahera Tengah", type: "kabupaten", category: "dinas", provinsi: "Maluku Utara", kabupaten: "Halmahera Tengah" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kota Tidore Kepulauan", type: "kabupaten", category: "dinas", provinsi: "Maluku Utara", kabupaten: "Tidore Kepulauan" },
    
    // ========================================
    // PAPUA (3)
    // ========================================
    { name: "Dinas Tenaga Kerja, Koperasi, Usaha Kecil dan Menengah Provinsi Papua", type: "provinsi", category: "dinas", provinsi: "Papua", kabupaten: "Jayapura" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Jayapura", type: "kabupaten", category: "dinas", provinsi: "Papua", kabupaten: "Jayapura" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Keerom", type: "kabupaten", category: "dinas", provinsi: "Papua", kabupaten: "Keerom" },
    
    // ========================================
    // PAPUA BARAT (6)
    // ========================================
    { name: "Dinas Transmigrasi dan Tenaga Kerja Provinsi Papua Barat", type: "provinsi", category: "dinas", provinsi: "Papua Barat", kabupaten: "Manokwari" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Manokwari", type: "kabupaten", category: "dinas", provinsi: "Papua Barat", kabupaten: "Manokwari" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Sorong", type: "kabupaten", category: "dinas", provinsi: "Papua Barat", kabupaten: "Sorong" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Fak-Fak", type: "kabupaten", category: "dinas", provinsi: "Papua Barat", kabupaten: "Fak-Fak" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Teluk Wondama", type: "kabupaten", category: "dinas", provinsi: "Papua Barat", kabupaten: "Teluk Wondama" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Manokwari Selatan", type: "kabupaten", category: "dinas", provinsi: "Papua Barat", kabupaten: "Manokwari Selatan" },
    
    // ========================================
    // PAPUA BARAT DAYA (1)
    // ========================================
    { name: "Dinas Tenaga Kerja, Transmigrasi, Energi, dan Sumber Daya Mineral Provinsi Papua Barat Daya", type: "provinsi", category: "dinas", provinsi: "Papua Barat Daya", kabupaten: "Sorong" },
    
    // ========================================
    // PAPUA SELATAN (2)
    // ========================================
    { name: "Dinas Tenaga Kerja, Transmigrasi, Energi, dan Sumber Daya Mineral Provinsi Papua Selatan", type: "provinsi", category: "dinas", provinsi: "Papua Selatan", kabupaten: "Merauke" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Merauke", type: "kabupaten", category: "dinas", provinsi: "Papua Selatan", kabupaten: "Merauke" }
];

// SUMMARY STATISTICS
// Total: 153 Satuan Kerja
// Tingkat Pusat: 28 (Biro: 5, Pusat: 3, Balai: 4, Direktorat: 13, Inspektorat: 3)
// Tingkat Provinsi: 34
// Tingkat Kabupaten/Kota: 91

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = completeSatkerData;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.completeSatkerData = completeSatkerData;
    console.log('🏛️ Satker data loaded:', completeSatkerData.length, 'satkers');
}
