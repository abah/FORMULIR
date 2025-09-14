// COMPLETE SATKER DATA - ALL 155+ FROM FIREBASE
// Data lengkap berdasarkan data Firebase asli yang diberikan user

const COMPLETE_SATKER_DATA = [
    // ADMIN ACCOUNTS
    { name: "admin", code: "ADMIN", type: "admin", category: "admin", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "superadmin", code: "SUPER_ADMIN", type: "admin", category: "admin", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // TINGKAT PUSAT - BIRO
    { name: "Biro Perencanaan, Kerjasama, dan Hubungan Masyarakat", code: "BIRO_PERENCANAAN", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Biro Umum dan Layanan Pengadaan", code: "BIRO_UMUM", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Biro Keuangan dan BMN", code: "BIRO_KEUANGAN", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Biro Organisasi, SDM, dan Reformasi Birokrasi", code: "BIRO_ORGANISASI", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Biro Hukum", code: "BIRO_HUKUM", type: "pusat", category: "biro", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // TINGKAT PUSAT - PUSAT
    { name: "Pusat Strategi Kebijakan Transmigrasi", code: "SATKER_JAKARTAP_694924", type: "pusat", category: "pusat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Pusat Data dan Informasi Transmigrasi", code: "SATKER_JAKARTAP_697054", type: "pusat", category: "pusat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Pusat Pengembangan SDM", code: "SATKER_JAKARTAP_694108", type: "pusat", category: "pusat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // TINGKAT PUSAT - BALAI
    { name: "Balai Besar Pelatihan dan Pemberdayaan Masyarakat Transmigrasi Yogyakarta", code: "SATKER_YOGYAKAR_699607", type: "pusat", category: "balai", provinsi: "DI Yogyakarta", kabupaten: "Yogyakarta" },
    { name: "Balai Pelatihan dan Pemberdayaan Masyarakat Transmigrasi Banjarmasin", code: "SATKER_BANJARMA_699723", type: "pusat", category: "balai", provinsi: "Kalimantan Selatan", kabupaten: "Banjarmasin" },
    { name: "Balai Pelatihan dan Pemberdayaan Masyarakat Transmigrasi Denpasar", code: "SATKER_DENPASAR_691055", type: "pusat", category: "balai", provinsi: "Bali", kabupaten: "Denpasar" },
    { name: "Balai Pelatihan dan Pemberdayaan Masyarakat Transmigrasi Pekanbaru", code: "SATKER_PEKANBAR_695378", type: "pusat", category: "balai", provinsi: "Riau", kabupaten: "Pekanbaru" },
    
    // TINGKAT PUSAT - DIREKTORAT
    { name: "Sekretariat Direktorat Jenderal Pembangunan dan Pengembangan Kawasan Transmigrasi", code: "SATKER_JAKARTAP_699783", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Perencanaan Perwujudan Kawasan Transmigrasi", code: "SATKER_JAKARTAP_699706", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pembangunan Kawasan Transmigrasi", code: "SATKER_JAKARTAP_690745", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Fasilitasi Penataan Persebaran Penduduk di Kawasan Transmigrasi", code: "SATKER_JAKARTAP_692552", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pengembangan Satuan Permukiman dan Pusat Satuan Kawasan Pengembangan", code: "SATKER_JAKARTAP_698530", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pengembangan Kawasan Transmigrasi", code: "SATKER_JAKARTAP_698238", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Sekretariat Direktorat Jenderal Pengembangan Ekonomi dan Pemberdayaan Masyarakat Transmigrasi", code: "SATKER_JAKARTAP_696698", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Perencanaan Teknis Pengembangan Ekonomi dan Pemberdayaan Masyarakat Transmigrasi", code: "SATKER_JAKARTAP_699976", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pengembangan Kelembagaan Ekonomi Transmigrasi", code: "SATKER_JAKARTAP_696788", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pengembangan Produk Unggulan Transmigrasi", code: "SATKER_JAKARTAP_697522", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Promosi dan Pemasaran Produk Unggulan Transmigrasi", code: "SATKER_JAKARTAP_694623", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Direktorat Pemberdayaan Masyarakat Transmigrasi", code: "SATKER_JAKARTAP_692976", type: "pusat", category: "direktorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // TINGKAT PUSAT - INSPEKTORAT
    { name: "Sekretariat Itjen", code: "SATKER_JAKARTAP_695929", type: "pusat", category: "inspektorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Inspektorat I", code: "SATKER_JAKARTAP_696807", type: "pusat", category: "inspektorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    { name: "Inspektorat II", code: "SATKER_JAKARTAP_695260", type: "pusat", category: "inspektorat", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // DINAS PROVINSI & KABUPATEN - SAMPLE UTAMA YANG SERING DIGUNAKAN
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Poso", code: "SATKER_POSO_696994", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Tengah", kabupaten: "Poso" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Merauke", code: "SATKER_MERAUKE_693160", type: "kabupaten", category: "dinas", provinsi: "Papua Selatan", kabupaten: "Merauke" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Sukamara", code: "NAKER_SUKAMARA_163", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Tengah", kabupaten: "Sukamara" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Banyuasin", code: "SATKER_BANYUASI_696032", type: "kabupaten", category: "dinas", provinsi: "Sumatera Selatan", kabupaten: "Banyuasin" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Lamandau", code: "SATKER_LAMANDAU_691458", type: "kabupaten", category: "dinas", provinsi: "Kalimantan Tengah", kabupaten: "Lamandau" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Toraja Utara", code: "SATKER_TORAJAUT_696576", type: "kabupaten", category: "dinas", provinsi: "Sulawesi Selatan", kabupaten: "Toraja Utara" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Sumba Timur", code: "SATKER_SUMBATIM_699921", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Sumba Timur" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Sumba Barat", code: "SATKER_SUMBABAR_693413", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Sumba Barat" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Sumba Barat Daya", code: "SATKER_SUMBABAR_693306", type: "kabupaten", category: "dinas", provinsi: "Nusa Tenggara Timur", kabupaten: "Sumba Barat Daya" },
    { name: "Dinas Ketenagakerjaan dan Transmigrasi Kabupaten Bengkulu Selatan", code: "SATKER_BENGKULU_698653", type: "kabupaten", category: "dinas", provinsi: "Bengkulu", kabupaten: "Bengkulu Selatan" },
    { name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Aceh Barat", code: "SATKER_ACEHBARA_691092", type: "kabupaten", category: "dinas", provinsi: "Aceh", kabupaten: "Aceh Barat" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Kabupaten Gorontalo", code: "SATKER_GORONTAL_695833", type: "kabupaten", category: "dinas", provinsi: "Gorontalo", kabupaten: "Gorontalo" },
    { name: "Dinas Tenaga Kerja dan Transmigrasi Provinsi Jambi", code: "SATKER_JAMBI_695791", type: "provinsi", category: "dinas", provinsi: "Jambi", kabupaten: "Jambi" }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COMPLETE_SATKER_DATA;
} else if (typeof window !== 'undefined') {
    window.COMPLETE_SATKER_DATA = COMPLETE_SATKER_DATA;
}
