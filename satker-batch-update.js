// SATKER BATCH UPDATE - BERTAHAP PER 10 SATKER
// Berdasarkan data Firebase lengkap 155+ satker

// BATCH 1 (10 SATKER PERTAMA)
const BATCH_1_SATKER = [
    // Direktorat Pengembangan Kelembagaan Ekonomi Transmigrasi
    { name: "nakerpengembangan1", code: "694652", type: "satker", category: "satker", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // Direktorat Pemberdayaan Masyarakat Transmigrasi  
    { name: "nakerpemberdayaan1", code: "694652", type: "satker", category: "satker", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // Direktorat Pengembangan Produk Unggulan Transmigrasi
    { name: "nakerproduk1", code: "694652", type: "satker", category: "satker", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // Dinas Perumahan Kawasan Permukiman dan Pertamanan Kota Batam
    { name: "nakerbatam", code: "691702", type: "satker", category: "satker", provinsi: "Kepulauan Riau", kabupaten: "Batam" },
    
    // Direktorat Promosi dan Pemasaran Produk Unggulan Transmigrasi
    { name: "nakerpromosi1", code: "694652", type: "satker", category: "satker", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // Dinas Tenaga Kerja dan Transmigrasi Kabupaten Keerom
    { name: "nakerkeerom", code: "691698", type: "satker", category: "satker", provinsi: "Papua", kabupaten: "Keerom" },
    
    // Dinas Transmigrasi Tenaga Kerja dan Energi Sumber Daya Mineral Kabupaten Polewali Mandar
    { name: "nakerpolewali", code: "691698", type: "satker", category: "satker", provinsi: "Sulawesi Barat", kabupaten: "Polewali Mandar" },
    
    // Dinas Transmigrasi dan Tenaga Kerja Kabupaten Bener Meriah
    { name: "nakerbenermeriah", code: "691701", type: "satker", category: "satker", provinsi: "Aceh", kabupaten: "Bener Meriah" },
    
    // Dinas Tenaga Kerja dan Transmigrasi Provinsi Maluku Utara
    { name: "nakermalukuutara", code: "691692", type: "satker", category: "satker", provinsi: "Maluku Utara", kabupaten: "Ternate" },
    
    // Dinas Transmigrasi dan Tenaga Kerja Kabupaten Sumba Timur
    { name: "nakersumbatimur2", code: "691700", type: "satker", category: "satker", provinsi: "Nusa Tenggara Timur", kabupaten: "Sumba Timur" }
];

// BATCH 2 (10 SATKER BERIKUTNYA) - AKAN DIUPDATE NANTI
const BATCH_2_SATKER = [
    // Dinas Transmigrasi dan Tenaga Kerja Kabupaten Kutai Timur
    { name: "nakerkutaitimur", code: "691696", type: "satker", category: "satker", provinsi: "Kalimantan Timur", kabupaten: "Kutai Timur" },
    
    // Dinas Tenaga Kerja dan Transmigrasi Kabupaten Mesuji
    { name: "nakermesuji", code: "691694", type: "satker", category: "satker", provinsi: "Lampung", kabupaten: "Mesuji" },
    
    // Sekretaris Direktorat Jenderal Pengembangan Ekonomi dan Pemberdayaan Masyarkat Transmigrasi
    { name: "nakersekretaris1", code: "694652", type: "satker", category: "satker", provinsi: "DKI Jakarta", kabupaten: "Jakarta Pusat" },
    
    // Dinas Tenaga Kerja dan Mobilitas Penduduk Aceh
    { name: "nakeraceh", code: "694544", type: "satker", category: "satker", provinsi: "Aceh", kabupaten: "Banda Aceh" },
    
    // Dinas Transmigrasi dan Tenaga Kerja Kabupaten Aceh Selatan
    { name: "nakeracehselatan", code: "694556", type: "satker", category: "satker", provinsi: "Aceh", kabupaten: "Aceh Selatan" },
    
    // Dinas Penanaman Modal Transmigrasi dan Tenaga Kerja Kabupaten Aceh Utara
    { name: "nakeracehutara", code: "691641", type: "satker", category: "satker", provinsi: "Aceh", kabupaten: "Aceh Utara" },
    
    // Dinas Transmigrasi dan Tenaga Kerja Kabupaten Bener Meriah
    { name: "nakerbenermeriah2", code: "691642", type: "satker", category: "satker", provinsi: "Aceh", kabupaten: "Bener Meriah" },
    
    // Dinas Tenaga Kerja dan Transmigrasi Kabupaten Simeulue
    { name: "nakersimeulue", code: "694589", type: "satker", category: "satker", provinsi: "Aceh", kabupaten: "Simeulue" },
    
    // Dinas Tenaga Kerja dan Transmigrasi Kota Subulussalam
    { name: "nakersubulussalam", code: "691640", type: "satker", category: "satker", provinsi: "Aceh", kabupaten: "Subulussalam" },
    
    // Dinas Tenaga Kerja Provinsi Bangka Belitung
    { name: "nakerbangkabelitung", code: "694635", type: "satker", category: "satker", provinsi: "Bangka Belitung", kabupaten: "Pangkal Pinang" }
];

// Export untuk digunakan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BATCH_1_SATKER, BATCH_2_SATKER };
} else if (typeof window !== 'undefined') {
    window.BATCH_1_SATKER = BATCH_1_SATKER;
    window.BATCH_2_SATKER = BATCH_2_SATKER;
}
