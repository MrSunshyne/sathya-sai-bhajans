const bhajans = {
  "001": ["Ambā Bhavāni Shiva Shambho Kumārā", "Shri Gananāthā Shāntākārā", "Purāna Purushā Sathya Sāi Nāthā", "Pranava Swarupā Parthishā"],
  "002": [
    "Ambikā Tanayā Gajānanā",
    "Gajavadanā Gananātha Gajānana",
    "Sāi Ganeshā Vināyakā",
    "Tribhuvana Pālaka Mangala Dāyaka",
    "Vidyā Buddhi Siddhi Pradāyaka",
    "Sāi Ganeshā Vināyakā (x2)",
  ],

  "003": ["Ādi Poojita Gajānanā", "Mangalakāri Mahāganādhipā", "* Ambikā Tanayā Gajānanā", "Ambā Bhavāni Shiva Shambho Kumārā", "Jaya (4) Gajānanā"],

  "004": ["Ādi Pujya Deva Gajānanā", "Gauri Vara Tanayā Shubhānanā", "* Vigna Vināshaka Siddhi Vināyaka", "Jaya Jaga Vandana Tava Sharanam"],

  "005": [
    "Bhajo Gananāyaka Gajavadanā",
    "Mangala Dāyaka Shubha Charanā",
    "* Siddhi Vināyaka Shiva Nandanā",
    "Ānanda Dāyaka Chitta Chandanā",
    "Buddhi Pradāyaka Jaga Vandanā",
  ],

  "006": [
    "Bhajoré (2) Gananātham Bhajoré",
    "Buddhi Pradāyaka Pāpa Vināshaka",
    "Vignesham Bhajoré",
    "Abhaya Pradāyaka Ānanda Dāyaka",
    "Shiva Nandanam Bhajoré Gananātham Bhajoré",
  ],

  "007": [
    "Bhava Bhaya Bhanjana Sumana Vinodana",
    "Jaya Sāi Ganarāyā",
    "Bandha Vimochana Sumukha Gajānana",
    "Jaya Sāi Ganarāyā",
    "* Sindura Vadana Suranara Vandana",
    "Jaya Sāi Ganarāyā",
    "Ganarāyā Ganarāyā",
    "Hara Shiva Nandana Nitya Niranjana",
    "Jaya Sāi Ganarāyā",
  ],

  "008": ["Bhavāni Nandana Bāla Gajānana", "Pranava Swarupā Pāhi", "Hey Parthipurishwara Sāi"],

  "009": [
    "Bhavāni Nandanā Siddhi Vināyaka",
    "Bhallaleshwarā Hey Gajānanā",
    "Sindura Vadana Shanmuga Sodara",
    "Hey Gajānanā",
    "* Vishwa Vanditā Sāi Gajānanā",
    "Vidya Dāyaka Hey Gajānanā",
    "Sindura Vadana Shanmuga Sodara",
    "Hey Gajānanā",
  ],

  "010": ["Gajamukha Gajamukha Gananāthā", "Suramuni Vandita Gunasheelā (x3)"],

  "011": [
    "Gajamukha Ganapati Devā",
    "Ganesha Devā Sharanam Devā",
    "Lambodarā Shri Devā",
    "Ganesha Devā Sharanam Devā",
    "Chāra Bhujāngita Ganesha Devā",
    "Vigna Vināshaka Ganesha Devā",
    "Ekadanta Shri Devā",
    "Devādi Devā Sharanam Devā",
  ],

  "012": [
    "Gajamukha Ganapati Gajānanā",
    "Gauri Nandana Gajānanā",
    "* Mooshika Vāhana Munijana Sevita",
    "Mangala Charanā Gajānanā",
    "Shambho Kumārā Sankata Hārā",
    "Shirdipurishā Gajānanā",
    "Puttaparthipurishā Gajānanā",
  ],

  "013": [
    "Gajamukha Hey Gajamukha",
    "Hey Gajamukha Nāthā Vināyaka",
    "Gauri Putrā Modaka Hastā",
    "Gajamukha Nāthā Vināyaka",
    "Shāntākārā Vigna Vināshā",
    "Gajamukha Nāthā Vināyaka",
    "Parthipurishā Sāi Ganeshā",
    "Gajamukha Nāthā Vināyaka",
    "Gajamukha Nāthā Vināyaka (4)",
  ],

  "014": ["Gajavadanā Gajānanā", "Gauri Tanayā Gajānanā", "* Jai (4) Gajānanā – 3", "Devādi Devā Gajānanā", "Gauri Tanayā Gajānanā"],

  "015": [
    "Gajavadanā (3) Gananāthā",
    "Gauri Nandana Shiva Kumarā",
    "Pārvati Nandana Hara Kumarā",
    "Siddhi Vināyaka Buddhi Pradāyaka",
    "Prashānti Vāsā Vigna Vināshaka",
    "Prashānti Vāsā Sāi Vināyaka",
  ],

  "016": [
    "Gajavadanā Gananāthā",
    "Gajavadanā Deena Haranā",
    "Siddhi Dātā Shiva Tanayā",
    "Buddhi Pradāyaka Gajānanā",
    "Pārvati Nandana Bhava Bhaya Bhanjana",
    "Yuga Yuga Vandita Jaya Shri Ganeshā",
  ],

  "017": ["Gajavadanā Gananāthā", "Gauri Tanayā Dayāmayā", "* Bhuvanādhārā Pranava Swarupā", "Pālaya (2) Parthipurishā"],

  "018": ["Gajavadanā Gananātha Nāthā", "Gauri Vara Tanayā Gunālaya", "* Vidyā Dāyaka Buddhi Pradāyaka", "Siddhi Vināyaka Hey Shubha Dāyaka"],

  "019": ["Gajānanā Gajānanā", "Prathama Poojana Ganarāyā", "* Prathama Prārthanā Shri Ganarāyā", "Lambodarā Ganarāyā (x2)"],

  "020": [
    "Gajānanā (2) Vigna Haranā Gajavadanā",
    "Gauri Nandana Gajānanā",
    "Shankara Tanayā Gajavadanā",
    "Shanmukha Sodara Gajānanā",
    "Bhakta Pālaka Gajavadanā",
    "Nitya Niranjana Gajānanā",
    "Nirupama Vadanā Gajavadanā",
    "Parthipurishwara Gajānanā",
    "Prashānti Nilaya Gajavadanā",
  ],

  "021": ["Gajānanā Hey Shubhānanā", "Gauri Manohara Priya Nandanā", "Pashupati Tanayā Gajānanā", "Parama Niranjana Shubhānanā"],

  "022": [
    "Gajānanā Hey Shubhānanā",
    "Parama Niranjana Gajavadanā",
    "Vakra Tunda Dhara Vigna Vināshā",
    "Pranava Swarupā Parthipurishā",
    "Siddhi Vināyakā Pāhi Gajānanā",
    "Parama Niranjana Gajavadanā",
  ],

  "023": ["Gajānanam Girijā Tanayam", "Gangādhara Shiva Kumāram Devam", "* Suramuni Poojita Charanam Sharanam", "Sadāshrayāmi Sāi Charanam"],

  "024": [
    "Gananātha Gajānana Vigneshwara",
    "Buddhi Pradāyaka Charanam Ganeshā",
    "* Neelakantha Suta Gajānanā",
    "Pāhi Prabhu Mām Gajānanā",
    "Parthipurishwara Shubhānanā Sāi",
  ],

  "025": [
    "Gananāthā Gananāthā",
    "Ganapati Devā Gananāthā",
    "Moksha Pradātā Vigna Vināshā",
    "Mangala Dāyaka Bhava Bhaya Nāshā",
    "Ganapati Devā Gananāthā",
  ],

  "026": [
    "Gananāthā Gananāthā",
    "Mooshika Vāhana Jaya Gananāthā",
    "Charanam Sharanam Gajānanā",
    "* Siddhi Vināyaka Gananāthā",
    "Mukti Pradāyaka Gananāthā",
    "Jagadodhārā Jaya Gananāthā",
    "Charanam Sharanam Gajānanā",
  ],

  "027": [
    "Gananāthā Gananāthā Gauri Nandanā",
    "Gananāthā Gananāthā Shambho Nandanā",
    "Gananāthā Gananāthā Sāi Gananāthā",
    "Pranava Swarupā Moolādhārā",
    "Mooshika Vāhanā Jaya Gananāthā",
    "Gananāthā Gananāthā Shambho Nandanā",
    "Gananāthā Gananāthā Sāi Gananāthā",
  ],

  "028": ["Gananāthā Omkāra Rupā", "Shri Gananāthā Gnāna Rupā", "* Siddhi Vināyakā Herambā", "Shri Gananāthā Gnāna Rupā"],

  "029": [
    "Gananātha Sāi Gajānanā",
    "Parthishwarā Dukha Bhanjanā",
    "Kailāshapaté Shiva Nandanā",
    "Deena Nātha Haré Hey Niranjanā",
    "Siddhi Pradātā Shubhānanā",
    "Jagadishwara Shānti Niketanā (x2)",
  ],

  "030": ["Gananāyakam Sāi Gananāyakam", "Sadānanda Sundara Gananāyakam", "Varadāyakam Sāi Shubha Dāyakam", "Parthipurishwara Gananāyakam"],

  "031": [
    "Ganapati Devā Hey Gananāyaka",
    "Pranava Swarupā Hey Shubha Dāyaka",
    "Pārvati Nandana Hey Dukha Bhanjana",
    "Lambodara Hey Mooshika Vāhana (x2)",
    "Prathama Poojana Sai Gajānana",
  ],

  "032": [
    "Ganapati Gananāyaka",
    "Gajamukha Shubha Dāyaka",
    "Vigna Nāshakā Devā Vallabheshwarā",
    "Vigna Nāshakā Vallabheshwarā",
    "Siddhi Dāyaka Ganesha Siddhi Dāyaka",
    "Buddhi Dāyaka Ganesha Buddhi Dāyaka",
    "Vigna Nāshaka Devā Vallabheshwarā",
    "Vigna Nāshakā Vallabheshwarā",
  ],

  "033": [
    "Ganapati Ganarāyā Mangala Murti Moriyā",
    "Mātanga Vadanā Moriyā",
    "Mooshika Vāhana Moriyā",
    "Ganapati Bappā Moriyā Ganapati Bappā Moriyā",
    "* Varada Vināyaka Moriyā",
    "Sindura Vadanā Moriyā",
    "Varada Vināyaka Moriyā Mahāganapati Moriyā",
  ],

  "034": [
    "Ganapati Om Jaya Ganapati Om",
    "Gajamukha Varadā Ganapati Om",
    "Mooshika Vāhana Gajānanā",
    "Modaka Hastā Gajānanā",
    "Parama Niranjana Gajānanā",
    "Pāda Namaste Gajānanā – Tava",
  ],

  "035": [
    "Ganapati Om (2) Sāi Ganapati Om",
    "Siddhi Vināyaka Ganapati Om",
    "Buddhi Pradāyaka Ganapati Om",
    "* Hey Shiva Nandana Jaya Jaga Vandana",
    "Sāi Ganapati Om",
    "Mooshika Vāhana Modaka Hastā",
    "Sāi Ganapati Om",
    "Sāi Ganapati Om Sāi Ganapati Om",
    "Hey Shiva Nandana Hey Gajānana (2) – 4",
  ],

  "036": [
    "Ganapati Om Sāi Om Ganeshāya Namah Om",
    "Vigna Vināshaka Hey Gananāthā",
    "Patita Pāvana Hey Sāi Nāthā",
    "Parthipurishwara Hey Gananāthā",
    "Jagata Paripālaka Sāi Gananāthā",
    "Jaya Gananātha Om Gananātha (x3)",
  ],

  "037": [
    "Ganesha Sharanam Parama Pāvanam",
    "Sathya Sāinam Gajānanam",
    "Nitya Smaranam Parama Pāvanam",
    "Sathya Sāinam Gajānanam",
    "Satguru Charanam Parama Pāvanam",
    "Sathya Sāinam Gajānanam",
    "Bhava Bhaya Haranam Parama Pāvanam",
    "Sathya Sāinam Gajānanam",
  ],

  "038": ["Ganesha Sharanam Sharanam Ganeshā (x4)", "Sāisha Sharanam Sharanam Sāishā (x4)"],

  "039": [
    "Ganesha Sharanam Sharanam Ganeshā",
    "Ganesha Smaranam Smaranam Ganeshā",
    "Mooshaka Vāhana Shri Gananāthā",
    "Devā Ganeshā",
    "* Vandana Ganesha Gananāthā",
    "Mangala Ganesha Gananāthā",
    "Gauri Ganesha Gananāthā",
    "Sāi Ganesha Gananāthā",
    "Devā Ganeshā",
  ],

  "040": ["Ganeshwarā Gajamukheshwarā", "Kārunya Lāvanya Vigneshwarā", "* Sankata Haranā Gajānanā", "Shankari Putrā Shubhānanā (Shiva) (x2)"],

  "041": ["Gauri Ganesh Umā Ganesh", "Pārvati Nandana Sāi Ganesh", "Sharanam Ganesh Sharanam Ganesh", "Shiva Nandana Ganapati Ganesh"],

  "042": [
    "Gauri Ganeshā Vināyaka (x2)",
    "Shuklāmbara Gananātha Gajānanā",
    "Hey Gananāthā Gajānanā",
    "Gajavadanā Jaya Ganapati Vandana",
    "Mangala Murti Gajānanā (x2)",
  ],

  "043": [
    "Gauri Nandana Gajānanā",
    "Girijā Nandana Niranjanā",
    "Pārvati Nandana Shubhānanā",
    "Pāhi Prabho Mām Pāhi Prasannā",
    "Girijā Nandana Niranjanā",
  ],

  "044": [
    "Gauri Nandana Gajavadanā",
    "Ganesha Varadā Mām Pāhi",
    "Ganapati Ganapati Ganeshwarā",
    "Gajamukha Gajamukha Vigneshwarā",
    "Gauri Nandana Gajavadanā",
    "Ganesha Varadā Mām Pāhi",
  ],

  "045": [
    "Gauri Suta Hey Bāla Gajānana",
    "Herambā Jaya Mooshika Vāhana",
    "* Jaya Lambodara Vigna Vināshana",
    "Jaya Jaya Ganesha Jaya Shri Ganesha",
    "Parama Dayāgana Pashupati Ranjana",
    "Bhālanetra Suta Parthi Gajānana",
  ],

  "046": [
    "Gauri Sutāya Ānanda Dāyaka",
    "Lambodarā Shiva Shambho Kumārā",
    "Vigna Vināshaka Siddhi Vināyaka",
    "Mangala Dāyaka Gajavadanā",
    "Mooshika Vāhana Sāi Gajānanā",
    "Hey Parameshā Parthishwarā",
  ],

  "047": ["Gauri Sutāya Om Namah Om", "Lambodarāya Om Namah Om", "* Vigneshwarāya Om Namah Om", "Sāishwarāya Om Namah Om"],

  "048": [
    "Gauri Tanayā Hey Gananāthā",
    "Vigneshwara Hey Vigna Vināshā",
    "* Pranavākārā Sāi Gajānana",
    "Sāi Gajānana Sāi Gajānana",
    "Pashupati Tanayā Sāi Gajānana",
  ],

  "049": [
    "Girijā Nandana Bhava Bhaya Bhanjana",
    "Hey Shiva Nandana Gajānanā",
    "* Mooshika Vāhana Jaya Jaga Vandana",
    "Parama Niranjana Shubhānanā – Hey",
  ],

  "050": [
    "Hey Gajānanā Hey Shubhānanā",
    "Gauri Manoharā Shiva Nandanā",
    "Pashupati Tanayā Gajānanā",
    "Parama Niranjana Shubhānanā",
    "Hey Parama Niranjana Shubhānanā",
    "Gauri Manoharā Shiva Nandanā",
  ],

  "051": ["Hey Gananāthā Gajānanā", "Herambā Gajānanā", "* Gauri Nandana Gajānanā", "Gajānanā Hey Gajānanā", "Siddhi Vināyaka Gajānanā - Vara"],

  "052": [
    "Hey Shiva Nandana Jaya Jaga Vandana",
    "Jaya Gauri Suta Pāhi Gajānana",
    "* Pārvati Nandana Parama Dayāgana",
    "Pāhi Prabho Mām Pāhi Gajānana -2",
  ],

  "053": [
    "Hey Shubha Vadanā Himagiri Sadanā",
    "Gauri Nandana Gajānanā",
    "Dānava Bhanjanā Mānasa Ranjanā",
    "Shritajana Sanmukha Shubha Charanā",
    "Parama Pāvanā Vijaya Kāranā",
    "Parthi Sadanā Shri Ramanā",
  ],

  "054": [
    "Hey Vigneshwarāya Namah",
    "Hey Gauri Sutāya Namah",
    "Hey Parthi Vāsāya Namah",
    "Hey Sāishwarāya Namah",
    "Teré Charanon Mé Jo Āyé",
    "Vo Khāli Kabhi Na Jāyé",
    "Pāyé Ānanda Barā Ananta Jeevan",
    "Hey Siddheshwarāya Namah",
  ],

  "055": [
    "Jai Ganarāyā Shri Ganarāyā",
    "Jai Ganarāyā Shri Ganarāyā",
    "Mangala Murti Moriyā",
    "Siddhi Vināyaka Mangala Dātā",
    "Siddhi Vināyaka Mangala Dāyaka",
    "Mangala Murti Moriyā",
    "Ashta Vināyaka Mangala Dāyaka",
    "Mangala Murti Moriyā",
    "Sindura Vadanā Pankaja Charanā",
    "Sindura Vadanā Pankaja Charanā",
    "Ganapati Bappā Moriyā",
  ],

  "056": [
    "Jai Ganesh Jai Jai Ganesh Jai Jai Ganesh",
    "Gananāthā Jai Ganesh Sāi Nāthā",
    "Shiva Shambho Kumārā Devā",
    "Shubha Dātā Parthi Vāsā",
    "Hey Vigna Nāsha Devā Hey Vishwā Parameshā",
    "Jai Ganesha Gananāthā Jai Ganesh Sāi Nāthā",
  ],

  "057": [
    "Jai Ganesh Pāhimām Shri Ganesh Rakshamām",
    "Jai Ganesha (3) Rakshamām",
    "Lambodara Gauri Suta Jai Ganesha Pāhimām",
    "Mangalakara Sankata Hara",
    "Jai Ganesha Rakshamām",
    "Jai Ganesha (3) Rakshamām",
  ],

  "058": [
    "Jai Ganesh Pāhimām Shri Ganesh Rakshamām",
    "Sāi Ganesh Pāhimām Trāhimām Rakshamām",
    "Jai Gananāthā Pāhimām",
    "Gajavadanā Rakshamām",
    "Sāi Ganesh Pāhimām Trāhimām Rakshamām",
  ],

  "059": [
    "Jai (3) Gananāyaka, Jai (2) Vigna Vināshaka",
    "Jaya Shubha Mangala Dāyaka",
    "Vidyā Buddhi Pradāyaka",
    "Gajavadanā Gauri Nandana (x2)",
    "Gangādharā Shiva Shambho Nandana",
  ],

  "060": [
    "Jai (4) Ganapati Devā",
    "Gajānanā Gajānanā",
    "Gajānanā Hey Ganapati Devā",
    "* Mātā Pārvati Pitā Mahādevā",
    "Gajānanā Gajānanā",
    "Gajānanā Hey Ganapati Devā",
  ],

  "061": [
    "Jaya Ganapati Siddhi Vināyaka",
    "Jaya Ganapati Mangala Dāyaka",
    "Jai Ganesha (3) Girijā Suta Jai Shri Ganesha",
    "Modaka Hasta Sindura Shobhita",
    "Lambodarā Gananāyakā",
    "Chandrashekharā Shambho Nandana",
    "Ganapati Shri Shubha Dāyaka",
    "Jai Ganesha (3) Girijā Suta Jai Shri Ganesha",
  ],

  "062": [
    "Jaya Ganesh (3) Devā",
    "Shri Ganesh (3) Devā",
    "Bhakta Uddhārana Bhaktajana Poshanā",
    "Pāpa Vināshanā Bhakta Samrakshanā",
    "Omkāra Pranava Shri Rupā",
    "Pārvati Nandanā Hey Shiva Nandanā",
  ],

  "063": [
    "Jaya Ganesha Jaya Mangala Dātā",
    "Vandé Saraswati Sāi Mātā",
    "* Mooshika Vāhana Shri Gananāthā",
    "Vigna Vināshā Bhāgya Vidhātā",
    "Vandé Saraswati Sāi Mātā",
  ],

  "064": ["Jaya (2) Gajānana Gananāthā", "Gauri Nandana Hey Gananāthā", "* Buddhi Pradāyaka Hey Gananāthā", "Siddhi Vināyaka Hey Gananāthā"],

  "065": [
    "Jaya Jaya Girijā Bāla Gajānana",
    "Hey Shiva Shankara Pārvati Nandana",
    "* Vigna Vināshaka Vimala Gajānana",
    "Saravana Sevita Sumukha Gajānana",
    "Tava Pada Charanam Sharanam Gajānana",
  ],

  "066": ["Jaya (3) Hey Gajānanā", "Gajānanā Hey Gajavadanā", "* Pārvati Nandana Gajānanā", "Pashupati Tanayā Gajānanā", "Ādi Poojya Deva Gajānanā"],

  "067": ["Jaya (3) Hey Gajānanā", "Pārvati Nandana Shubhānanā", "* Neelakantha Suta Gajānanā", "Nitya Shubhāngā Gajānanā"],

  "068": ["Jaya (3) Hey Sāmbava Rājā", "Pāshānkushadhara Shri Ganarājā", "* Sindura Vadanā Mangala Charanā", "Ambā Nandana Bhava Bhaya Haranā"],

  "069": [
    "Jaya Jaya Vigna Vināsham",
    "Gananātham Shri Gananātham",
    "Pārvati Nandana Parama Dayāgana",
    "Māyā Vināshaka Mooshika Vāhana",
    "Mangala Kara Hey Sāi Gajānana",
    "Gananātham Shri Gananātham",
  ],

  "070": [
    "Jaya Lambodarā Pāhimām",
    "Jagadambā Suta Rakshamām",
    "* Sharanāgata Rakshamām",
    "Hey Karunānidhé Pāhimām",
    "Gananātha Samrakshamām - Shri",
    "Nija Bhaktimudam Dehimām",
  ],

  "071": [
    "Jaya Shri Ganeshā Vigna Nāsha Gajānanā",
    "Vidyā Buddhi Sarva Siddhi Suranjanā",
    "Jaya Herambā Shri Jagadambā Nandanā",
    "Ekadantā Dayāvanta Shubhānanā",
    "Mangala Dāyaka Shri Vināyaka Vandanā",
  ],

  "072": [
    "Jaya Vallabha Gananāyaka",
    "Jaya Guha Sodara Shubhadātā",
    "Jaya Hey Ishwari Nandanā",
    "Jaya Vara Dāyaka Namostuté",
    "Jaya Parthishwara Namostuté",
    "Jaya Sāishwara Namostuté",
  ],

  "073": ["Lambodarā Gananāthā (x2)", "Lambodarā Vigneshwarā", "Mayureshwarā Siddheshwarā", "Namo (2) Gananātha Gajānana Lambodarā"],

  "074": [
    "Lambodarā Gananātha Gajānana",
    "Pārvati Nandana Shubhānanā",
    "Pashupati Tanayā Siddhi Vināyaka",
    "Pranavākārā Shambho Nandanā",
    "Parthipurishā Sāi Gajānanā",
    "Hey Shiva Nandana Shubhānanā",
  ],

  "075": [
    "Lambodara Hey Gauri Nandana",
    "Vigna Vināshaka Shubhānanā",
    "Siddhi Vināyaka Hey Dukha Bhanjana",
    "Asura Vināshaka Shubhānanā",
    "Gauri Nandana Mooshika Vāhana",
    "Vigna Vināshaka Shubhānanā",
  ],

  "076": ["Lambodarā Hey Vigneshwarā", "Shambho Kumārā Siddheshwarā", "Ambikā Tanayā Omkāreshwara", "Heramba Sāi Parthishwarā"],

  "077": [
    "Lambodarā Jaya Gajānanā",
    "Pārvati Nandana Parama Dayāgana",
    "* Bandha Vimochana Bhava Bhaya Bhanjana",
    "Pranava Swarupā Hey Shiva Nandana",
    "Pāhi Prabho Mām Pāhi Gajānanā",
  ],

  "078": [
    "Lambodarā Jaya Gauri Sutā",
    "Ganādhipā Jaya Gājānanā",
    "* Bhālachandradhara Gajakarneshwarā",
    "Parthishwarā Mām Pāhi Prabho",
    "Vigneshwara Mām Pāhi Prabho",
  ],

  "079": [
    "Mahādevā Hey Gajavadanā",
    "Sāi Ganeshā Gajavadanā",
    "Mangala Rupā Gajavadanā",
    "Parthi Ganeshā Gajavadanā",
    "Pārvati Nandana Gajavadanā",
    "Gauri Tanayā Gajavadanā",
  ],

  "080": [
    "Mahāganapaté Namostuté",
    "Mātanga Vadanā Namostuté",
    "* Ādi Poojita Gananāthā",
    "Ānanda Dāyaka Gananāthā",
    "Prathama Vandana Pranavākārā",
    "Vigneshwarā Vināyakā",
  ],

  "081": ["Mangala Charanā Gajānanā", "Gajavadanā Shubhānanā", "* Vidyā Dāyaka Buddhi Pradāyaka", "Gauri Tanayā Gajānanā"],

  "082": [
    "Mangala Dāyaka Hey Gananāthā",
    "Pranava Swarupā Vigna Vināshā",
    "Hey Shiva Nandana Pāhi Dayālā",
    "Parthipurishwara Jagatparipālā",
    "Pranava Swarupā Vigna Vināshā",
  ],

  "083": [
    "Mangalakāri Vigna Vināshaka",
    "Sāi Gajānana Moriyā",
    "Sāi Gajānana Moriyā Mangala Murti Moriyā",
    "Sāi Gajānana Moriyā",
    "Sharana Prabhu Ham Āyé Tihāré",
    "Sāi Gajānana Moriyā",
    "Sarva Vighan Karo Dur Hamāré",
    "Sāi Gajānana Moriyā",
    "Vigna Vināshaka Bhava Bhaya Nāshaka",
    "Sāi Gajānana Moriyā",
    "Sāi Gajānana Moriyā Mangala Murti Moriyā",
    "Sāi Gajānana Moriyā",
  ],

  "084": [
    "Mātanga Vadanā Ānanda Sadanā",
    "Mahādeva Shiva Shambho Nandanā",
    "* Māyā Vināshaka Mooshika Vāhana",
    "Mātā Maheshwari Bhavāni Nandana",
    "Mahāganapaté Mangala Charanā (x2)",
  ],

  "085": ["Mātanga Vadanā Mām Pālaya", "Maulishwara Shiva Gauri Nandana (x2)", "Mangala Dāyaka Siddhi Vināyaka"],

  "086": [
    "Mooshika Vāhana Gajānanā",
    "Modaka Hastā Gajānanā",
    "Chāmara Karna Gajānanā",
    "Vilambita Sutra Gajānanā",
    "Vāmana Rupā Gajānanā",
    "Maheshwara Putra Gajānanā",
    "Vigna Koti Nāshaka Gajānanā",
    "Siddhi Vināyaka Pālayamām",
  ],

  "087": [
    "Moriyā Moriyā Mangala Murti Moriyā",
    "Lambodara Ganarāja Gajānanā",
    "Sindura Vadanā Gauri Nandana",
    "Ashta Vināyaka Siddhi Vināyaka",
    "Mangala Murti Moriyā",
  ],

  "088": [
    "Namana Prathama Ganarāja Gajānana",
    "Mahāganapate Pārvati Nandana",
    "Vidya Dāyaka Hey Gananāthā",
    "Mukti Pradāyaka Buddhi Dātā",
    "Mangala Murti Vigna Vināshaka",
    "Sharana Tumhein Hey Siddhi Vināyaka",
  ],

  "089": ["Pāhi Gajānana Deenāvanā", "Sindura Vadanā Kshritajana Pālana", "* Ambikā Tanayā Amarādishwara", "Aganita Guna Gana Ānanda Dāyaka"],

  "090": [
    "Parama Niranjana Suramuni Vandita",
    "Pāpa Vimochaka Sāishwarā",
    "Sāishwarā Hey Ganeshwarā",
    "Yuga Yuga Vandita Jyoti Ganeshā",
    "Gajamukha Gunasheela Sāi Ganeshā",
    "Sāi Ganeshā Satya Ganeshā",
    "Sāishwarā Hey Ganeshwarā",
  ],

  "091": [
    "Pārvati Nandana Bāla Gajānana",
    "Hey Shiva Nandana Mooshika Vāhana",
    "* Vidyā Buddhi Siddhi Pradāyaka",
    "Suramuni Vandita Girijā Nandana",
    "Jaya (3) Hey Jaya Jaga Vandanā",
    "Parthipurishwara Sāi Gajānana",
    "Parama Niranjana Sāi Gajānana",
  ],

  "092": [
    "Pārvati Nandana Parama Niranjana",
    "Ganapati Bappā Moriyā",
    "Siddhi Vināyaka Buddhi Pradāyaka",
    "Mangala Murti Moriyā",
    "Jaya Ho Gajānana Vigna Harana",
    "Vilambita Sutra Sundara Vadan",
    "Shiva Shambho Kumārā Lambodarā",
    "Klesha Vimochana Vigneshwarā",
  ],

  "093": [
    "Pārvati Tanayā Vigna Vināshaka",
    "Mangala Dāyaka Devā",
    "Jai Ganesh (3)",
    "Sindura Vadanā Prathama Vandana",
    "Alaka Niranjana Mooshika Vāhana",
    "Pāshānkushadhara Shambho Nandanā",
    "Mangala Dāyaka Devā",
    "Jai Ganesh (3)",
  ],

  "094": [
    "Pashupati Tanayā Bāla Gajānanā",
    "Tum Ho Vigna Vināshā Ganeshā",
    "Hey Shiva Nandana Pāhi Gajānana",
    "Vidyā Buddhi Pradātā",
    "Mangalakara Hey (2)",
    "Sundara Sāi Ganeshā",
  ],

  "095": [
    "Prasanna Ho Sathya Sāi Ganeshā",
    "Prathama Poojita Vigna Vināshā",
    "* Pāshānkushadhara Parama Pavitrā",
    "Mooshika Vāhana Gajānanā",
    "Lambodara Hey Shambho Kumārā",
    "Ambikā Tanayā Gajānanā",
  ],

  "096": [
    "Prathama Bhajo Hey Ganapati Sāi",
    "Jai Jai Jai Jaya Sāi",
    "Buddhi Pradāyaka Hey Gananāyaka",
    "Ganapati Sāi Hey Shubhadāyi",
    "Jai Jai Jai Jaya Sāi",
  ],

  "097": [
    "Prathama Poojana Gananāyaka",
    "Siddhi Pradātā Vināyaka",
    "Lambodara Shri Shubha Dāyaka",
    "Buddhi Pradātā Vināyaka",
    "* Vigneshwara Sura Nara Vandana",
    "Ekadanta Adwaitya Prabodhana",
    "Bhava Tāpa Shoka Vināshana",
    "Hey Deena Nātha Gajānanā",
    "Lambodara Shri Shubha Dāyaka",
    "Buddhi Pradāta Vināyaka",
  ],

  "098": [
    "Prathama Vandanā Gananāthā",
    "Gajavadanā Jaya Gananāthā",
    "* Vidyā Dāyakā Buddhi Pradāyaka",
    "Vigna Vināshaka Vināyakā",
    "Suramuni Vandita Vināyaka",
  ],

  "099": [
    "Prathama Vandanā Gauri Nandana",
    "Hey Shiva Nandana Pāhi Gajānanā",
    "* Ekadanta Gunavanta Vināyaka (x2)",
    "Vigna Harana Shubha Mangala Charanā",
    "Pranava Swarupā Pāhi Gajānana",
  ],

  "100": ["Sāi Devā Shri Ganeshā", "Vandé Vigna Vināshā Devā", "Pārvati Nandana Parthipurishā", "Hey Shiva Nandana Jaya Sāishā (x2)"],

  "101": [
    "Sāi Ganarāyā (2) Sathya Sāi Ganarāyā",
    "Vidyā Dāyaka Buddhi Pradāyaka",
    "Siddhi Vināyaka Gajānanā",
    "Sāi Ganarāyā Gajavadanā Ganarāyā",
    "Sāi Ganarāyā",
    "Mangala Rupā Pranava Swarupā",
    "Parthi Sāishā Gajānanā",
    "Nityam Smaranam Satguru Charanam",
    "Sathya Sāinam Gajānanā",
    "Sāi Ganarāyā Gajavadanā Ganarāyā",
    "Sāi Ganarāyā",
  ],

  "102": [
    "Shambho Kumārā Gauri Tanayā",
    "Gajānanā Sadayā Jaya Jaya",
    "Gajānanā Sadayā",
    "Varada Ganeshā Durita Vināshā",
    "Pranavākārā Nāthā Sadayā",
    "Gajānanā Sadayā Jaya Jaya",
    "Gajānanā Sadayā",
  ],

  "103": [
    "Sharanam (2) Pāhi Gajānanam",
    "Vigna Vināshakam Gananātham (x2)",
    "Buddhi Pradāyaka Pāhi Gajānana",
    "Asura Nikantana Pāhi Gajānana",
    "Pāhi Gajānanā Pāhi Gajānanā",
    "Vigna Vināshaka Gananātham",
  ],

  "104": [
    "Shri Gananāthā Jaya Gananāthā",
    "Pārvati Shiva Tanayā",
    "Jaya Gananāthā Pārvati Shiva Tanayā",
    "Shankara Nandana Vijaya Gajānana",
    "Kalimala Bhanjana Sura Nara Vandana",
  ],

  "105": ["Shri Ganesha (3) Pāhimām", "Jaya Ganesha (3) Rakshamām", "Shri Ganesha Pāhimām", "Jaya Ganesha Rakshamām", "Jaya Ganesha (3) Rakshamām"],

  "106": [
    "Siddhi Vināyaka Mangala Dātā",
    "Buddhi Pradāyaka Gananāthā",
    "* Vigna Harana Prabhu Vigneshwara Tum",
    "Gauri Nandana Hey Jaga Vandana",
    "Namostuté (2)",
  ],

  "107": [
    "Siddhi Vināyaka Namostuté",
    "Chitta Ranjana Namostuté",
    "* Bhakta Paripālana Namostuté",
    "Pashupaté Tanayā Namostuté",
    "Bāla Gajānana Namostuté",
    "Parthi Gajānana Namostuté – Putta",
  ],

  "108": ["Sundara Mukha Shri Gajānanā", "Ekadanta Shri Gajānanā", "Prathama Namāmi Gajānanā", "Rishi Muni Vandita Gajānanā"],

  "109": [
    "Sundara Sundara Vināyakā",
    "Shubha Mangala Dāyaka Vināyakā",
    "Vigna Koti Hara Vimala Gajānana",
    "Sakala Vigna Hara Sāi Gajānana",
    "Ishwari Nandana Parthi Gajānana",
  ],

  "110": [
    "Suramuni Vandita Vināyaka",
    "Ānanda Dāyaka Vināyaka",
    "Hey Shiva Nandana Shubhānanā",
    "Sāi Ganeshā Vināyaka",
    "Sāi Ganeshā (3) Vināyaka (x2)",
  ],

  "111": ["Tum Ho Vigna Vināshā Ganeshā (x2)", "* Pārvati Nandana Pāhi Gajānana", "Pranava Swarupā Parthipurishā", "Pāhi Ganeshā Vigna Vināshā"],

  "112": [
    "Vāmana Rupā Ganādhipā",
    "Pārvati Nandana Pāhi Gajānana",
    "* Ekadanta Gunavanta Vināyaka",
    "Māyā Vināshaka Mooshika Vāhana",
    "Vidyā Buddhi Siddhi Pradāyaka",
    "Pranavākārā Hey Shiva Nandana",
  ],

  "113": ["Vandé Umā Nandanam Gajānanam", "Suramuni Sevita Sumukha Gajānanam", "* Vidyā Dāyaka Buddhi Pradāyaka", "Siddhi Vināyaka Pāhi Gajānanam"],

  "114": [
    "Vandeham Shri Gananāyakam",
    "Vidyāpatim Shri Vināyakam",
    "* Pranamāmyaham Vigneshwaram",
    "Pārvati Tanayam Gajānanam",
    "Sāi Ganesham Shubhānanam (x2)",
  ],

  "115": [
    "Vigna Harana Prabhu Pāhi Gajānana",
    "Pārvati Nandana Parama Dayāgana",
    "Nitya Niranjana Bhava Bhaya Bhanjana",
    "Pashupati Tanayā Hey Jagat Vandana",
    "Lambodara Hey Mooshika Vāhana",
    "Pārvati Nandana Parama Dayāgana",
  ],

  "116": [
    "Vigna Vināshaka Devādi Devā",
    "Ādi Sanātana Devā",
    "Prathama Pujya Gananāthā",
    "Bhava Bhaya Bhanjana Nitya Niranjana",
    "Siddhi Vināyaka Devā",
    "Mangala Dāyaka Shambho Manohara",
    "Prathama Pujya Gananāthā",
  ],

  "117": [
    "Vigna Vināshaka Gananāthā",
    "Gajānanā Hey Gajavadanā",
    "Gananāthā Gananāthā",
    "Pranava Swarupā Gananāthā",
    "Parthipurishwara Gananāthā",
    "Gajānanā Hey Gajavadanā",
  ],

  "118": [
    "Vigneshwarā Gananātha Gajānanā",
    "Pārvati Nandana Shubhānanā",
    "Mangala Murti Shri Ganarāyā",
    "Shri Ganārāyā Jaya Ganarāyā (x2)",
    "Siddhi Vināyaka Gajānanā",
    "Ashta Vināyaka Gajānanā",
  ],

  "119": [
    "Vigneshwarā Vināyaka",
    "Vishwādhārā Namostuté",
    "Namostuté Namostuté",
    "Vishwādhārā Namostuté",
    "Suramuni Vandita Vināyaka",
    "Bhava Bhaya Nāshā Vināyaka",
    "Sharanam (2) Vināyaka",
    "Sharanam (2) Vināyaka",
  ],

  "120": ["Vināyaka Vigna Nāshaka", "Anātha Rakshaka Ānanda Dāyaka", "Umā Maheshwara Hey Shiva Nandana"],

  "121": [
    "Vināyaka Vināyaka",
    "Vigna Vināshaka Vināyaka",
    "Gauri Nandana Hey Shiva Nandana",
    "Pārvati Nandana Gajānanā",
    "Mooshika Vāhana Gajānanā",
    "Modaka Hastā Gajānanā",
  ],

  "122": [
    "Vināyaka Vināyaka",
    "Vishwādhārā Vināyaka",
    "* Siddhi Vināyaka Bhava Bhaya Nāshā",
    "Suramuni Vandita Shri Ganeshā",
    "Vishwādhārā Vināyaka",
  ],

  "123": [
    "Yuga Yuga Vandita Varada Ganeshā",
    "Pālaya Pālaya Gauri Ganeshā",
    "* Pārvati Nandana Gajavadanā",
    "Jaya (3) Hey Gananāthā",
    "Pālaya Varada Ganeshā Pālaya Gauri Ganeshā",
    "* Mooshika Vāhana Vigneshwarā",
    "Jaya (3) Hey Lambodarā",
    "Pālaya Varada Ganeshā Pālaya Gauri Ganeshā",
  ],

  "200": [
    "Akhanda Jyoti Jalāo Sāi Mana Mandir Mé",
    "Akhanda Jyoti Jalāo (2)",
    "Koti Surya Sama Teja Swarupā",
    "Sāi Tum Ho Divya Swarupā",
    "Akhanda Jyoti Jalāo Akhanda Jyoti Jalāo",
    "Divya Jyoti Gnāna Jyoti Prema Jyoti Jalāo",
    "Akhanda Jyoti Jalāo (2)",
  ],

  "201": [
    "Akhila Jagat Ké Dātā Sāi",
    "Shirdi Nivāsi Bhagavān",
    "Darshan Do Bhagavān",
    "Kalimala Bhanjana Parama Dayāgana",
    "Karunānidhé Shirdi Vāsā (Parthi)",
    "Deena Janāvana Parthi Maheshā",
    "Shirdi Nivāsi Bhagavān",
    "Darshan Do Bhagavān",
  ],

  "202": ["Ānanda Shri Sāi Parthipurishā", "Sadānanda Mādhava Prashānti Vāsā", "* Sundara Rupa Shri Satchidānandā", "Mandaradhara Govinda Mukundā"],

  "203": [
    "Ānandamaya Bhagavān",
    "Hey Premamaya Bhagavān",
    "O Bhagavān Sāi Bhagavān",
    "* Hey Karunānidhé Prabhu Sāi Rām",
    "Kripānidhé Deenon Ké Prān",
    "Lelo Prabhu Mujhé Sharana Lagālo",
    "Dayā Karo Bhagavān (Mujhé)",
    "Mujhé Kripā Karo Bhagavān",
  ],

  "204": [
    "Anātha Bandhu Sāi Prabhu",
    "Aparādha Kshamā Karo Sāi Prabhu",
    "Jeeva Yātrā Mé Sāth Raho",
    "Prema Bhakti Ham Ko Dijo",
    "Hridaya Mandira Se Mat Jāo",
    "Charanāmrita Sevā Dijo Prabhu",
  ],

  "205": [
    "Antaranga Sāi Anātha Nātha Sāi",
    "Deena Bandhu Sāi Karunā Sindhu Sāi",
    "* Rām Krishna Shiva Shakti Prema Rupa Sāi",
    "Yuga Avatāra Bābā Shri Sathya Sāi",
  ],

  "206": ["Antarjyoti Namo Paramātma Jyoti Namo", "Akhanda Jyoti Namo Mama Jeevana Jyoti Namo", "Antaryāmi Namo Jaya Sadguru Sāi Namo"],

  "207": ["Antaryāmi Sāi Murāri", "Deena Dukhiyon Ké Tuma Hitakāri", "* Sāi Nām Ki Mahimā Bhāri", "Bhava Sāgara Se Pār Utāri", "Sāi Rām (3) Gāo"],

  "208": [
    "Antaryāmi Tu Hi",
    "Ālola Tulasi Dhāri",
    "Ashthānga Namana Karoun Āo Sāi Rām",
    "Tu Hi Mātā Pitā Tu Hi Bandhu Sakhā",
    "Tu Hi Sadguru Nātha O Meré Sāi Rām",

    " ",
  ],

  "209": ["Āo Pyāré Nayana Hamāré Sāi Hamāré Āo", "Tum Bina Koyi Nahin Rakhawālé", "Tum Bina Kaun Sahāré", "Tum Bina Kaun Sahāré Āo Sāi Pyāré"],

  "210": ["Āo Sāi Nārāyana Darshana Dedo", "Tum Ho Prema Swarupā", "* Tum Hi Ho Shivā Tum Hi Ho Shakti", "Tum Ho Antaryāmi – Sāi"],

  "211": [
    "Āo Shankara Sāi Nātha",
    "Mana Mandir Mé Sāi Nātha",
    "Bholénāthā Hey Mahādevā",
    "Sathya Sāi Nātha Hi Mahādevā",
    "Sāi Nātha (4)",
    "Shirdipuri Mé Tum Né Samāyé",
    "Ab Meré Man Mandir Mé",
    "Parthipuri Mé Tum Né Samāyé",
    "Ab Meré Man Mandir Mé",
    "Āo Sāi Man Mandir Mé",
    "Ghata Ghata Tu Hi Samāyé",
    "Sāi Nātha (4)",
  ],

  "212": [
    "Araja Suno Meré Parama Kripālu",
    "Parthishwara Sāi Devā",
    "* Satya Sanātana Antaryāmi",
    "Sakala Charāchara Tum Ho Swāmi",
    "Janana Marana Se Pār Karo",
    "Bhava Bandhana Se Uddhāra Karo",
  ],

  "213": [
    "Ārati Utāroun Guru Mahārāj O Guru Mahārāj",
    "Mā Jai Jagadambé Durgé Teri Ārati Utaroun",
    "Shri Rāmchandra Raghuveerā",
    "Teri Ārati Utāroun",
    "Hari Nārāyana Brijabāla Teri Ārati Utaroun",
    "Hara Mahādeva Shiva Shambo",
    "Teri Ārati Utāroun",
    "Sāi Bābā Sāi Devā Teri Ārati Utāroun",
    "Ārati Utāroun Bābā Ārati Utāroun",
  ],

  "214": [
    "Aravinda Lochana Ārtha Janāvana",
    "Sāi Nārāyana Satya Nārāyana",
    "* Eeshwarāmba Nandana Dosha Nivārana",
    "Parama Niranjana Hey Shubhānana",
  ],

  "215": [
    "Arunā Ramanā Shri Gurudevā",
    "Sheshā Ramanā Satguru Devā",
    "* Bhava Bhaya Haranā Shri Sāi Devā",
    "Shri Sāi Devā Jaya Sāi Devā",
    "Guru Hai Sat Chit Ānanda Devā",
    "Ānanda Devā Shri Sāi Devā",
  ],

  "216": [
    "Ātmā Mé Bas Jāo Bābā (2)",
    "Tum Bina Mana Mandir Hein Suné",
    "Ātmā Mé Bas Jāo Bābā (2)",
    "Paramātmā Tum Sāré Jagat Ké",
    "Rām Rahim Tum Sāré Jagat Ké",
    "Suné Mana Mé Vās Karo Tum",
    "Kankana Mé Bas Jāo Bābā",
    "Ātmā Mé Bas Jāo Bābā",
  ],

  "217": [
    "Ayodhyā Vāsi Rām Hai Dwāraka Mé Āyé",
    "Dwāraka Vāsi Shyāma Hai Shirdi Mé Āyé",
    "Shirdi Vāsi Shyāma Hai Parthi Sathya Sāi",
    "Bolo Rām Sāi Rām Bolo Sathya Sāi Rām",
  ],

  "218": ["Bābā Āo Meré Kirtan Mé", "Antaryāmi Darsha Dikhāo", "Naiyā Hamāri Pār Lagādo", "* Antarjyoti Jalādo Sāi", "Deenajanon Ké Tum Ho Sāi"],

  "219": [
    "Bāla Gopāl Jai Jai Sāi Rām",
    "Prem Bharo Dil Mé Hamāré Sāi Rām",
    "Hamāré Sāi Rām Baré Pyāré Sāi Rām",
    "Prem Bharo Dil Mé Hamāré Sāi Rām",
    "Ham Bhakton Ké Tum Ek Sāi Rām",
    "Tumhre Jagat Mé Barā Pyārā Pyārā Nām",
    "Sanga Raho Hardam Hamāré Sāi Rām",
    "Sanga Raho Hamāré Sāi Rām",
  ],

  "220": [
    "Bhagavān (3) Sāi Rām",
    "Sāi Rām (3) Bhagavān",
    "Bhagavān (3) Sāi Rām",
    "Aparādha Kshamā Karo Sāi Bhagavān",
    "Araja Suno Meré Sāi Bhagavān",
    "Bhagavān (3) Sāi Rām",
    "Deena Dayālā Parama Kripālā",
    "Bhaktoddhārā Sāi Bhagavān",
  ],

  "221": [
    "Bhagavān (2) Patita Pāvana Rām",
    "Dayā Karo (3) Bhagavān",
    "Patita Pāvana Rām - Sāi",
    "Deena Dayālu Parama Kripālu",
    "Rakshā Karo Bhagavān - Sāi",
  ],

  "222": [
    "Bhagavān Hamārā Rām",
    "Bhagavān Hamārā Sāi Rām",
    "* Jagmag Sāré Teré Liyé",
    "Ye Tan Man Dhan Sāre Teré Liyé",
    "Meré Man Kā Sitār Bājé Teré Liyé",
    "Hamein Rakshā Karo Bhagavān",
    "Hamein Kripā Karo Sāi Rām",
  ],

  "223": [
    "Bhajaré Mānasa Ātmā Rāmam",
    "Ātmā Rāmam Sāi Rāmam",
    "* Ātmā Tattvam Brahma Swarupam",
    "Ekam Nityam Vimalam Achalam",
    "Shuddha Brahmam Bhāvāteetam",
    "Bhajoré Bhajoré Mānasa Bhajoré",
  ],

  "224": [
    "Bhajaré Manwā Sāi Nāmam",
    "Parthi Nivāsam Pankaja Netram",
    "* Prema Swarupam Sāishwaram",
    "Hridaya Nivāsam Sāishwaram",
    "Shirdipurisham Sāishwaram",
    "Purnavatāram Sāishwaram - Pari",
  ],

  "225": ["Bhajaré Satguru Sāi Charanam", "Pāvana Charanam Padma Dala Charanam", "Mukti Dāyaka Mohana Charanam", "Pāpa Vināshaka Parthisha Charanam"],

  "226": [
    "Bhajo Bhajo Rām Sathya Sāi Rām",
    "Bhajo Bhajo Shyāma Sāi Ghanashyāma",
    "* Kaliyuga Ké Avatāra",
    "Jagadoddhārā Sāi Bhagavān",
    "Patita Pāvana Seetā Rām (x2)",
  ],

  "227": [
    "Bhajoré Bhāyi Sāi Rām",
    "Puttaparthipurishā Sāi Rām",
    "* Dwārakamāyi Sāi Rām",
    "Sadā Sukhadāyi Sāi Rām",
    "Shirdipurishā Sāi Rām",
    "Puttaparthipurishā Sāi Rām",
  ],

  "228": [
    "Bhajoré Manwā Satguru Devā",
    "Parama Kripālu Sāi Mahādevā",
    "* Nishdin Dhyāna Karoun Main Terā",
    "Janam Janam Kā Mithé Andherā",
    "Parabrahma Parameshwara Rupā (x2)",
    "Parama Kripālu Sāi Mahādevā",
  ],

  "229": [
    "Bhakta Vatsala Tero Nām O Sāi",
    "Dukha Bhanjana Tero Nām O Sāi",
    "Tum Sangha Bāndhi Prema Ki Dori",
    "Sumiran Karoun Tero Nām O Sāi",
    "Patitoddhārana Bhakta Pārāyana",
    "Parthishwara Sāi Rām",
  ],

  "230": [
    "Bolo Jaijaikār (2)",
    "Bolo Jaijaikār Sāi Bābā Ki",
    "Patita Pāvana Hey Ghanashyāmā",
    "Sāi Gopālā Hey Ghanashyāmā",
    "Prema Bhagavān Sāi Bhagavān",
    "Sāi Rām Sāi Rām",
  ],

  "231": [
    "Bolo Sāi Rām Bolo Sāi Rām",
    "Bolo Rām Krishna Bhagavān Bolo Sāi Rām",
    "Karunā Sindhu Rām Sāi Charanon Mé",
    "Teré Koti Pranām",
    "Bolo Rām Krishna Bhagavān Bolo Sāi Rām",
  ],

  "232": [
    "Brahma Swarupā Nāda Swarupā",
    "Satya Swarupā Dharma Swarupā",
    "* Jyoti Swarupā Divya Swarupā",
    "Shānti Swarupā Prema Swarupā",
    "Shirdi Swarupā Parthi Swarupā",
    "Deva Deva Devā Sathya Sāi Devā",
  ],

  "233": [
    "Chalre Man (3) Tu Chal",
    "Tu Prashānti Nilaya Chal Puttaparthi Tu Chal",
    "Dekho Shirdi Sāi Avatār Sathya Sāi Avatār",
    "Parthi Sāi Avatār Prema Sāi Avatār",
    "Shirdi Sāi Parthi Sāi Prema Sāi Avatār",
  ],

  "234": [
    "Chitrāvati Tatha Vishāla Sundara Sāi",
    "Avadoota Chintanā Gurudevā Sathya Sāi",
    "Meré Bābā Sāi",
    "Shirdi Bābā Sāi Parthi Bābā Sāi",
    "Yamunā Teera Shri Krishna Kanhaiyā Sāi",
    "Avadoota Chintanā Gurudevā Sathya Sāi",
  ],

  "235": [
    "Chittarājā Chittarājā",
    "Brindāvana Gana Mangala Charanā",
    "Sānvari Surata Prema Bharanā",
    "* Rupa Manohara Murali Madhuvana",
    "Parthipurishwara Chittarājā Chittarājā",
  ],

  "236": [
    "Darshana Deejo Bhagavān",
    "Parama Dayālu Bhagavān",
    "* Ādi Anantā Adbhuta Rupā",
    "Ānanda Dātā Āshrita Vatsala",
    "Prema Swarupā Shānti Pradātā",
    "Satchidānanda Shri Sathya Sāishā",
  ],

  "237": [
    "Darshana Do Bhagavān - Prabhu",
    "Anātha Nāthā Prabhu Sāi Nāthā",
    "* Deena Dayālā Hey Parameshā",
    "Parthipuri Bhagavān - Sāi",
    "Prabhu Darshana Do Bhagavān",
  ],

  "238": ["Dayā Karo Bhagavān Kripā Karo Bhagavān (x3)", "Bhagavān Bhagavān", "Hey Sāi Nātha Bhagavān", "Hey Kripānidhé Bhagavān"],

  "239": [
    "Dayā Karo Hey Dayānidhé Hey Bhagavān",
    "Tan Man Dhana Sab Charana Tumhāré",
    "* Ādi Ananta Hari Avināshi",
    "Sadā Nirantara Ghata Ghata Vāsi",
    "Deena Dayālā Sadā Kripālā (x2)",
  ],

  "240": [
    "Dayā Karo Kripā Karo Karunā Sāgara Devā",
    "Janama Marana Se Pār Karo Tum",
    "Sāi Nātha Mahādevā",
    "Dayā Karo Kripā Karo Parthishwara Sāi Devā",
    "Shirdishwara Sāi Devā",
    "Parthishwara Sāi Devā",
  ],

  "241": ["Dayā Sāgarā Karunākarā", "Jagadishwarā Sāishwarā", "* Bhuvaneshwarā Akhileshwarā", "Guna Gambheerā Sāishwarā"],

  "242": [
    "Deena Bāndhavā Bābā Dayā Sāgarā",
    "Patita Pāvanā Sāi Karunākarā",
    "* Sathya Sāi Prema Sāi",
    "Shānti Dharma Sindhu Sāi",
    "Jeevana Ādhār Sāi Janani Janaka Bandhu Sāi",
    "Patita Pāvanā Sāi Karunākarā",
  ],

  "243": [
    "Deena Bāndhavā Shri Sāi Devā",
    "Dayā Sāgarā Devādi Devā",
    "* Pāhi Prabho Jagadishwarā",
    "Dehi Vibho Jagadoddharā",
    "Sharanam Prabho Sathya Sāi Nāthā",
  ],

  "244": [
    "Deena Dukhiyon Se Prema Karo",
    "Merā Sāi Prasanna Hogā",
    "Sāi Merā Main Terā Yé Prema Ki Behti Dhārā",
    "Yé Prema Ki Behti Dhārā",
    "Merā Sāi Prasanna Hogā",
  ],

  "245": [
    "Deena Janāvana Deena Samrakshaka",
    "Sanātana Sārathi Devādi Devā",
    "Ādi Sanātana Nitya Niranjana",
    "Jagadoddhārana Sāi Nārāyana",
    "Jyoti Swarupā Prema Swarupā",
    "Prashanti Swarupā Devādi Devā",
  ],

  "246": [
    "Deva (2) Devā Devādi Devā",
    "Haré Rām Haré Krishna Sāi Rām Devā",
    "Haré Rām Haré Krishna Sāi Rām Devā",
    "Deva Deva Devā",
    "Kārunya Lāvanya Karunā Samudrā",
    "Kālinga Nartana Kaustubha Hārā",
    "Ghana Ghana Leelā Kaivalya Dhāmā",
    "Ghana Ghana Leelā Kaivalya Dhāmā",
    "Kaivalya Dhāmā",
  ],

  "247": [
    "Deva Devottama Deena Samrakshaka",
    "Devādi Devā Dayāmayā",
    "Shri Sāi Devā Dayāmayā",
    "Patitoddhārā Pāpa Vidurā",
    "Parthi Vihārā Parameshwarā",
    "Bhashmodbhavakara Bhava Bhaya Nāshaka",
    "Shri Sāi Devā Dayāmayā",
  ],

  "248": [
    "Dukha Ké Andher Mé",
    "Ujālā Sāi Nām Kā",
    "Chintā Mé Sahārā Bas Ek Sāi Nām Kā",
    "* Sahārā Do Sāi Nātha Sabko Sahārā Do",
    "Meré Bābā Meré Sāi Meré Sāi Nātha Bhagavān",
  ],

  "249": [
    "Eeshwarāmbā Nandana Jagata Vidhātā",
    "Parthi Nivāsā Sāi Devā Dayā Karo Gurudevā",
    "Kamala Nayana Hey Hridaya Vihāri",
    "Ānanda Dāyaka Hey Giridhāri",
    "Charana Sharana Mé Lelo Hamko",
    "Yuga Avatārā Krishna Murāri",
    "Parthi Nivāsā Sāi Devā Dayā Karo Gurudevā",
  ],

  "250": [
    "Eeshwarāmbā Priya Nandanā",
    "Sāi Jaya Jaga Vandanā (x2)",
    "Ratnākara Kula Bhooshanā",
    "Rājiva Nayanā Nārāyanā",
    "Nārāyanā Satya Nārāyanā",
    "Nārāyanā Sāi Nārāyanā",
  ],

  "251": [
    "Eeshwarāmbā Priya Tanayā Sāi Nārāyanā",
    "Sāi Nārāyanā Satya Nārāyanā (x2)",
    "Kaliyuga Mé Avatāra Liyé",
    "Kankana Mé Terā Nām O Sāi (x2)",
    "Kankana Mé Terā Nām",
  ],

  "252": ["Eeshwarammā Nayana Dulāré", "Subhammā Ki Ankh Ké Tāré", "Bhaktajanon Ké Prāna Pyāré", "Tum Ho Hamāré Ham Hein Tumhāré"],

  "253": [
    "Ek Bār Kshamā Karo Sāi",
    "Meré Bābā Shri Sathya Sāi",
    "Kshamā Murti Sāi Bābā Prema Murti Sathya Sāi",
    "* Shirdi Ké Sāi Teré Dwāra Hai Māyi",
    "Parthi Ké Sāi Teré Yād Mujhé Āyi",
    "Kshamā Murti Sāi Bābā Prema Murti Sathya Sāi",
  ],

  "254": [
    "Guru Bābā Guru Bābā",
    "Charana Namostuté Guru Bābā",
    "Sāi Bābā Bāl Bābā",
    "Sathya Bābā Prema Bābā",
    "Guruvara Guruvara Guru Bābā",
    "Vidyā Dāyaka Guru Bābā",
    "Shanta Swarupā Guru Bābā",
    "Guruvara Guruvara Guru Bābā",
  ],

  "255": [
    "Guru Brahmā Guru Vishnu",
    "Guru Devo Maheshwarā",
    "Jaya Devā Guru Devā Gurudattā Digambarā",
    "Jai (3) Karunākarā, Jai (3) Akhileshwarā",
    "Jai (3) Shirdishwarā, Jai (3) Parthishwarā",
  ],

  "256": ["Guru (5) Sathya Sāi", "Sharanāgatā (3) Om Guru Mahārāja", "Shirdi Ke Sāi Puttaparthi Ke Sāi", "Devādi Devā Guru Paramātmā Sāi (x2)"],

  "257": ["Guru Mahimā Gāo (x3)", "Satguru Sāi Ananta Guru", "Brahmānandā Nanda Guru", "Sarva Dharma Priya Sāi Guru", "Guru Ki Vāni Gāo"],

  "258": [
    "Guru Satguru Satguru Sāi Rām",
    "Guru Sāi Rām Shri Sāi Rām",
    "* Sāi Guru (2) Sāi Maheshā",
    "Sāi Maheshā Sathya Sāi Maheshā",
    "Pāhimām (2) Pāhi Maheshā",
    "Parthipuri Sāi Devā Sāi Maheshā",
    "Sāi Maheshā Sathya Sāi Maheshā",
  ],

  "259": [
    "Gurudevā Guru Govindā",
    "Mangala Giridhara Shirdipurishwara",
    "Jaya Parthishwara Sāi Shivā",
    "* Sundura Rupā Shri Sāi Devā",
    "Vaidehi Mohana Nārāyanā (x2)",
  ],

  "260": ["Gurudevā Gurudevā", "Guruvāyura Murahari Devā", "Hari Nārāyanā Hari Nārāyanā", "Sharanam Sharanam Sāi Devā"],

  "261": [
    "Gurudevā Jaya Devā Sāi Devā Dayāmayā",
    "Vibhuti Sundara Shashānka Shekhara",
    "Sāi Shankara Dayā Karo (2)",
    "Gokula Nandana Sāi Gopālā",
    "Raghukula Bhooshana Sāi Rām",
    "Hey Madanāntaka (Dayā Karo (3))",
  ],

  "262": [
    "Gurudevā Priya Devā Sāi Devā Dayāmayā",
    "Vibhuti Sundara Shashānka Shekhara",
    "Sāi Shankara Dayā Karo (x2)",
    "* Gokula Ranjana Sāi Gopālā",
    "Raghukula Bhooshana Sāi Rāmā",
    "Hey Madanāntaka Dayā Karo (x2)",
  ],

  "263": [
    "Gurudevā Satguru Devā Dayā Karo Bhagavān",
    "Shānti Do (3) Mujhé Dayākarā",
    "Ānanda Chandā Satchidānandā",
    "Ānanda Ānanda Sāi - Hey Gurudevā",
    "Parthipurishā Hey Bhuvaneshā",
    "Dayā Karo Bhagavān (Kripā)",
    "Shānti Do (3) Mujhé Dayākarā",
  ],

  "264": ["Gurudevā Sharanam Devā", "Pāhi Prabho Sharanam Devā", "* Sundara Rupā Shri Sāi Devā", "Sharanam Sharanam Satguru Devā"],

  "265": [
    "Gurudevāya Namo Namo",
    "Hey Parameshwara Namo Namo",
    "* Omkārāya Namo Namo",
    "Parthipurishwara Namo Namo",
    "Jagadishwarāya Namo Namo",
    "Prashānti Ishwara Namo Namo",
  ],

  "266": [
    "Guruvara Nāma Pāvana Nāma",
    "Satguru Nāma Guru Nānaka Nāma",
    "Guruvara Nāma Pāvana Nāma",
    "Satguru Sāi Bābā Nāma",
    "Jai Guru Satguru Nānak Nāma",
    "Jai Bolo Sāi Bābā Nāma",
  ],

  "267": [
    "Ham Ko Tum Se Pyār Kitnā Sāi Tum Hi Jānaté",
    "Dilon Ki Dharkan Tum Ho Sāi",
    "Tum Hamāré Prān Ho",
    "Ham Ko Tum Se Pyār Hai",
    "We Love You Dearest Lord We Love You",
    "We Love You Sāi Lord We Love You",
  ],

  "268": [
    "Hari Guna Gāna Karo Man Mero",
    "Sāi Guna Gāna Karo Man Mero",
    "* Haré Rām Haré Krishna",
    "Krishna Krishna Sāi Krishna",
    "Sāi Guna Gāna Karo Man Mero (x2)",
  ],

  "269": [
    "Hari Om Namo Shiva Shakti Namo",
    "Satguru Shri Sathya Sāi Namo",
    "Hari Om Namo Seetā Rām Namo",
    "Jaya Satguru Shri Sathya Sāi Namo",
    "Hari Om Namo Radhéshyām Namo",
    "Jaya Satguru Shri Sathya Sāi Namo",
  ],

  "270": [
    "Hey Anātha Nātha Sāi Tum Ho Antaryāmi",
    "Tum Ho Meré Bhagavān",
    "Deena Dukha Bhanjana Sahārā Do Mujhé",
    "O Meré Sāi Bhagavān",
    "Hridaya Mandir Mé Āo Sāi Meré",
    "Deejo Kripā Vardāna",
    "Tum Ho Meré Bhagavān",
  ],

  "271": [
    "Hey Brahmā Vishnu Maheshwarā Sāishwarā",
    "Dayā Karo Kripā Karo Parameshwarā",
    "Sāi Rām Sāi Rām (x2)",
    "Parama Dayālā Pāpa Vināshā",
    "Rakshā Karo (2) Sāishwarā",
    "Dayā Karo Kripā Karo Parameshwarā",
  ],

  "272": [
    "Hey Kamala Nayana Bhagavān",
    "Sathya Sāi Bhagavān",
    "Deenajanon Ké Prāna – Sāi",
    "Patita Pāvanā Seetā Rām",
    "Parthipurishwara Shri Sāi Rām",
    "Shri Sāi Rām Jaya Jaya Rām",
    "Parthipurishwara Shri Sāi Rām",
    "Hey Deenajanon Ké Prāna",
  ],

  "273": [
    "Hey Parama Dayālu Sāi Rām",
    "Bhagavān Bhagavān",
    "Tretāyuga Mé Dasharatha Nandana",
    "Dwāpara Yuga Mé Murali Mohana",
    "Kaliyuga Mé Sathya Nārāyana",
    "Eka Prabhu Aneka Nāma",
  ],

  "274": ["Hey Parthipurishā Prashānti Vāsā Sāi Murāri", "Sāi Murāri (2)", "Hey Hrishikeshā Hridaya Nivāsā Hridaya Nivāsā", "Sāi Murāri (4)"],

  "275": [
    "Hey Sāi Jagannāthā (3)",
    "Deena Bandhu Sāi Nāthā",
    "Karunā Sindhu Jagannāthā",
    "Hey Sāi Jagannāthā (2)",
    "Hey Shirdi Jagannāthā Hey Parthi Jagannāthā",
    "Hey Sāi Jagannāthā",
  ],

  "276": [
    "Hey Sanātana Sārathi",
    "Anupama Tava Rupa Manohara",
    "Sudhā Samā Tava Bhārati",
    "* Hey Parameshwara Hey Tāt Mātā",
    "Hey Jagadishwara Anātha Nāthā",
    "Hey Deena Bandhu Karunā Sindhu",
    "Hey Murti Mantra Prashānti",
  ],

  "277": [
    "Hey Shyāma Sundarā Hey Sāi Sundarā",
    "Parthipurishwarā Hey Sāi Sundarā",
    "* Neela Megha Sundarā Neeraja Lochanā",
    "Brahmānda Nāyakā Hey Sāi Sundarā",
  ],

  "278": [
    "Ishwar Tu Hai Dayālu Dukha Dura Kar Hamārā",
    "Teré Sharan Mé Āyé Ham Prabhu Dijiyé Sahārā",
    "Tu Hai Pitā Aur Mātā Sab Vishwa Kā Vidhātā",
    "Tum Sā Nahin Hai Dātā Sab Terā Hi Sahārā",
  ],

  "279": ["Itni Vinati Raghunandana Se", "Nandana Se Sai Nandana Se", "* Āo Prabhu Ham Sharana Tihāré", "Tum Bina Jag Mé Kaun Hamāré"],

  "280": [
    "Jaga Mé Sarvam Vishnumayam",
    "Satguru Shri Sathya Sāi Mayam",
    "Omkāra Nāda Mayam Om Shiva Shakti Mayam",
    "Prema Mayam Sāi Rām Mayam",
    "Pranavākārā Brahma Mayam",
  ],

  "281": [
    "Jagata Uddhārana Parthi Vihārana",
    "Prabhu Tum Ho Mangala Dhāma",
    "Jai Sāi Rām Jai Sāi Rām",
    "Pāpa Vimochana Bhava Bhaya Bhanjana",
    "Sundara Nayanabhi Rām",
    "Prabhu Tum Ho Mangala Dhāma",
    "Jai Sāi Rām Jai Sāi Rām",
  ],

  "282": [
    "Jai Guru (2) Sāi Rām",
    "Jagatguru Sathya Sāi Rām",
    "* Brahma Vishnu Shiva Sāi Rām",
    "Parabrahma Rupa Sāi Rām",
    "Mātā Pitā Guru Sāi Rām",
    "Jagatguru Sathya Sāi Rām",
  ],

  "283": ["Jai Jai Gurudevā Shri Sāi Mahādevā (x2)", "Brahmā Vishnu Maheshwarā Sāi Mahādevā", "Mātā Pitā Gurudevā Shri Sāi Mahādevā"],

  "284": [
    "Jai Jai Shri Guru Bhajalé",
    "Satguru Sāi Guru Bhajalé",
    "Parthipurishwara Shri Sāi Nāthā",
    "Mama Guru Satguru Bhajalé",
    "Andhakār Mé Jyoti Jalāo",
    "Bhataknéwālon Ko Rāh Dikhāo",
    "Bhavasāgar Mé Kāndhar Banké",
    "Guru Bhagavān Pār Lagāo",
    "Guru Bhajalé Nāma Bhajalé Sāi Bhajalé",
  ],

  "285": [
    "Jai Sāi Rām Bolo (3) Jai Sāi Rām",
    "Jai Sāi Rām Bolo (3) Sathya Sāi Rām",
    "Bhajore Manwā Mangala Nāma",
    "Bhajore Manwā Sathya Sāi Rām (x2)",
  ],

  "286": ["Jaya Guru Omkārā Jaya Jaya", "Satguru Omkārā Om", "Brahma Vishnu Maheshwarā", "Hara Hara Hara Hara Mahādevā"],

  "287": [
    "Jaya Guru Omkārā Sāi Satguru Omkārā",
    "Shirdipurishwara Shri Sāi Bābā",
    "Parthipurishwara Sathya Sāi Bābā",
    "* Parama Niranjana Deenajanāvanā",
    "Sāi Parameshwara Parama Dayāgana",
    "Paramānanda Dayālu Sāi",
    "Brahmānanda Kripālu Sāi",
  ],

  "288": [
    "Jaya Gurudevā Prabhu Sāi Devā",
    "Devādi Devā Pranamāmyaham",
    "Shiva Shiva Shambho Kailāshapaté",
    "Parthipurishwara Pālayamām",
    "Devādi Devā Pranamāmyaham",
  ],

  "289": [
    "Jaya Jaya Devā Jagadisha Devā",
    "Dayā Sāgarā Sāi Devā",
    "* Niraja Nayanā Niradhi Shayanā",
    "Neela Megha Shyāmā",
    "Sāma Gāna Priya Sarva Dharma",
    "Priya Sathya Sāi Mahādevā",
  ],

  "290": [
    "Jaya (4) Gurudevā",
    "Jaya Parameshwara Sāi Devā",
    "Jaya Shirdishwara Gurudevā",
    "Jaya Parthishwara Gurudevā",
    "Jaya Jaya Satguru Shri Sāi Devā",
  ],

  "291": [
    "Jaya Jaya Sāi Namo Jaya Shubhadāyi Namo",
    "Jaya Govindā Jaya Gopālā",
    "Jaya Mahādeva Namo",
    "* Abhaya Pradātā Vishwa Vidhātā",
    "Jagadoddhāra Namo",
    "Jaya Shirdishā Jaya Parthishā",
    "Jaya Parameshā Namo",
  ],

  "292": [
    "Jaya Nārāyana Satguru Devā",
    "Dāyana Nartana Priya Sāi Devā",
    "* Nirākāra Sākār Tum Hi Ho",
    "Purna Brahma Avatār Tum Hi Ho",
    "Parthipurishwara Sāi Mahādevā",
  ],

  "293": [
    "Jaya Sāi Gurudevā Sāi Gurudevā",
    "Guru Sevā Binā Nirvāna Nahin",
    "Jaya Sāi Gurudevā",
    "Tumhi Ho Mātā Pitā Tumhi Ho Sāi Gurudevā",
    "Satya Swarupa Rāha Dikhāo Sāi Gurudevā",
    "Guru Sevā Binā Nirvāna Nahin",
    "Jaya Sāi Gurudevā",
  ],

  "294": ["Jaya Sāishā Jaya Sāishā", "Rādhā Mādhava Jaya Parthishā", "* Hridaya Sārathi Sāi Kanhaiyā", "Rādhé Govindā Prashānti Nilaya"],

  "295": [
    "Jeevana Ādhār Bābā Jeevana Ādhār",
    "Koti Pranām Bābā Koti Pranām",
    "Sādhan Kā Ādhār Bābā Sādhan Kā Ādhār",
    "Jeevan Mé Sāth Raho Merā Pranām",
    "Dayā Karo (2) Koti Pranām",
    "Kripā Karo (2) Koti Pranām",
    "Koti Pranām Bābā Koti Pranām (x2)",
  ],

  "296": [
    "Jeevana Ādhāra Sāi Devā",
    "Paramo Uddhārā Prabhu Sāi Devā",
    "* Jagadoddhārā Shri Sāi Devā",
    "Bhakta Uddhārā Devādi Devā",
    "Parthi Vihārā Sathya Sāi Devā",
  ],

  "297": [
    "Jeevana Jyoti Tum Ho Sāi",
    "Prema Ki Jyot Jalāo Sāi Prema Ki Jyot Jalāo",
    "Jeevana Ke Inn Andhiyāron Mé Sāi Deepa Jalāo",
    "Sāi Deepa Jalāo Sathya Sāi Deepa Jalāo",
    "Prema Ki Jyot Jalāo Sāi Prema Ki Jyot Jalāo",
  ],

  "298": [
    "Jhulanā Mé Jhulé Meré Sāi Nandalāl",
    "Jhulanā Mé Jhulé Sāi Bāl Gopāl",
    "Jhulanā Jhulé Jhulanā Jhulé",
    "Mā Eeshwarammā Jhulanā Jhulāyé",
    "Godi Mé Bithālké Kahāni Sunāyé",
    "Hari Kathā Choté Sāi Rām Ko Sunāyé",
    "Apni Hi Kathā Suno Tum Nandalāl",
    "Jhulanā Mé Jhulé Sāi Bāl Gopāl",
    "Jhulanā Jhulé Jhulanā Jhulé",
  ],

  "299": [
    "Jhulé Meré Sāi Jhulé Meré Bābā",
    "Jhulanā Jhulāyé Meré Sāi",
    "Jhulanā Jhulāyé Meré Bābā",
    "Resham Ki Dori Soné Kā Palanā",
    "Jhulanā Jhulāyé Meré Sāi",
    "Jhulanā Jhulāyé Meré Bābā",
    "Shirdi Ké Sāi Parthi Ké Bābā",
    "Jhulanā Jhulāyé Meré Sāi",
    "Jhulanā Jhulāyé Meré Bābā",
  ],

  "300": [
    "Kamala Netra Sāishwarā",
    "Kaivalya Teja Sureshwarā",
    "* Meghashyāma Ghana Gagana Shareerā",
    "Nāda Brahmamaya Abhayakarā",
    "Meghashyāma Ghana Gagana Shareerā",
    "Nāda Brahmamaya Abhayakarā",
  ],

  "301": [
    "Koti Pranām Kshata Koti Pranām",
    "Hey Deena Nātha Sāi Rām – 3",
    "Tum Ho Bhakton Ké Yugavatāra",
    "Tum Ho Ānanda Nanda Ké Lāl",
    "Parthipuri Ké Sāi Gopāla – Putta",
    "Hey Deena Nātha Sāi Rām (x3)",
  ],

  "302": ["Mana Bangāru Parthi Bābā", "Mana Sringāra Vadanā Sāi", "* Antaryāmi Bābā", "Mana Sarvāntaryāmi Sāi"],

  "303": [
    "Mana Ek Bār Hari Bol",
    "Hari Hari Bol Hari Bol",
    "* Hari Pitā Hari Mātā",
    "Hari Guru Gnāna Dātā",
    "Chidānanda Rupa Hari Patita Pāvana Hari",
    "Ek Bār Hari Bol",
  ],

  "304": [
    "Mana Mandira Mé Āo Sāi",
    "Sāi Bhagavān Darsha Dikhāo",
    "Sadā Nirantara Bhajo Sāi Rām",
    "Giridhara Nāgara Natavara Shyām",
    "Sāi Bhagavān Darsha Dikhāo",
  ],

  "305": ["Mana Mandira Mé Rājādhirājā", "Tum Ho Sāi Mahārāj", "Nartana Sundara Natarājā", "Shivakāmi Priya Shivarājā", "Tum Ho Sāi Mahārāj"],

  "306": [
    "Mānasa Bhajaré Guru Charanam",
    "Dustara Bhava Sāgara Taranam",
    "Guru Mahārāj Guru Jai Jai",
    "Sāi Nātha Satguru Jai Jai",
    "Om Namah Shivāya (3) Shivāya Namah Om",
    "Arunāchala Shiva (3) Arunā Shiva Om",
    "Omkāram Bābā (3) Om Namo Bābā",
  ],

  "307": [
    "Mānasa Bhajaré Guru Charanam",
    "Satguru Charanam Pranamāmyaham",
    "Sathya Sāi Charanam Pranamāmyaham (x2)",
    "Nirmala Hridaya Virājita Charanam",
    "Sakala Charāchara Vyāpaka Charanam",
    "Bhavasāgara Uddhāraka Charanam",
    "Sāi Charanam Pranamāmyaham (x2)",
  ],

  "308": [
    "Meré Nainon Mé Baso Sāi Rāmā",
    "Sāi Rāmā Moré Sāi Shyāmā",
    "Meré Hridaya Mé Āo Sāi Rāmā",
    "Sāi Rāmā Moré Sāi Shyāmā",
    "Meré Jeevan Banādo Sāi Rāmā",
    "Sāi Rāmā Moré Sāi Shyāmā",
  ],

  "309": [
    "Meré Sāi Rām Sundarā",
    "Rupa Manohara Niranjanā",
    "* Shyāmala Komala Kamala Vadanā",
    "Mana Mohanā Mridu Charanā",
    "Anupama Charitra Atbhuta Leelā",
    "Sundara Sāi Premānandā",
  ],

  "310": [
    "Nādabrahma Hari Sāi Haré",
    "Nārāyana Hari Sāi Haré",
    "* Natanakalādhara Sāi Haré",
    "Nāgā Bharanā Sāi Haré",
    "Sāi Haré Sathya Sāi Haré (x3)",
  ],

  "311": ["Nāma Bhajoré Nāma Bhajo", "Sab Sukhadāyi Sundara Sāi", "* Ānanda Nāmā Ati Sukha Nāmā", "Mana Mohana Nāma Madhura Madhura Nāma"],

  "312": ["Namāmi Brahmā Namāmi Vishnu", "Namāmi Maheshwarā", "Smarāmi Brahmā Smarāmi Vishnu", "Smarāmi Sāishwarā (x2)"],

  "313": [
    "Namana Karoun Main Satguru Charanā",
    "Bhava Bhaya Haranā Mangala Karanā",
    "* Brahma Vishnu Maheshwara Rupā",
    "Satya Swarupā Prema Swarupā",
    "Dukha Haranā Bhavasāgara Taranā",
  ],

  "314": [
    "Nandalālā (2) Dayā Karo Bhagavān",
    "Bhava Sāgara Se Pār Utāro",
    "Dayā Karo Bhagavān",
    "Kripā Karo Bhagavān",
    "Tumhri Sharan Binā Anāth Hein Ham",
    "Dayā Karo Bhagavān",
    "Kripā Karo Bhagavān",
  ],

  "315": [
    "Nayanon Mé Premadhāra",
    "Vachanon Mé Amritadhāra",
    "Satguru Sāi Merā Jeevan Ādhār",
    "Nayanon Mé Premadhāra",
    "Vachanon Mé Amritadhāra",
    "Satguru Sāi Merā Jeevan Ādhār",
  ],

  "316": [
    "Nirupama Guna Sadanā Charanā",
    "Neeraja Dala Nayanā",
    "Kāshāyambara Veshā Dhāranā Kaliyuga Avatārā",
    "Nitya Ranjana Nirmala Charitra",
    "Nirupama Yogindrā",
    "Mahādeva Natarāja Virājā",
    "Āsha Pāsha Nāsha Ishā",
  ],

  "317": ["O Bābā Sāi Bābā", "Deenon Ké Dukha Haraté Bābā", "Rām Hi Bābā Krishna Hi Bābā", "Nara Dehi Nārāyana Bābā", "Nara Ké Hey Nārāyana Bābā"],

  "318": [
    "O Bhagavān (2)",
    "Araja Suno Meré Sāi Bhagavān",
    "Parthipuri Ké Tum Ho Rājā",
    "Brindāvana Ké Tum Ho Dātā",
    "Sab Bhakton Ké Man Ko Bhātā",
    "Pār Utāro Naiyā Mori",
    "Sāi Ghanashyāma Sāi Ghanashyāma",
  ],

  "319": [
    "O Sāi Bābā (3) Meri Rakshā Karo",
    "O Sāi Rāmā Prabhu Sāi Rāmā",
    "O Sāi Bābā Meri Rakshā Karo",
    "Karunā Nidhān Tum Karunā Karo",
    "Kripā Nidhān Tum Kripā Karo",
    "O Sāi Krishnā Sathya Sāi Krishnā",
    "O Sāi Bābā Meri Rakshā Karo",
    "O Shirdi Bābā O Parthi Bābā",
    "O Sāi Bābā Meri Rakshā Karo",
  ],

  "320": [
    "Parama Pujya Parama Priya Shri Sāi Devā",
    "Parthi Vāsi Hridaya Vāsi Shri Sāi Devā",
    "Sakala Janma Sātha Raho Shri Sāi Devā",
    "Sarva Bandhu Bhajan Karo Shri Sāi Devā",
    "Hey Sāi Devā (2)",
    "Shri Sāi Devā (2)",
  ],

  "321": [
    "Parthi Bulāo Meré Sāi Bhagavān",
    "Mujhé Darsha Dikhāo Meré Sāi Bhagavān",
    "Sparshana Sambhāshana Deejo Bhagavān",
    "Satguru Darshanam Pāpa Vināshanam",
    "Satguru Sparshanam Karma Vimochanam",
    "Satguru Sambhāshanam Sankata Nāshanam",
    "Satguru Charanam Sadā Nirantaram",
    "Araja Suno Meré Sāi Bhagavān",
    "Aparādha Kshamā Karo Sāi Bhagavān",
  ],

  "322": [
    "Parthipuri Ghanashyāma Prashānti Nilaya Rām",
    "Sāi Charanon Mé Lagé Merā Dhyāna",
    "Sāi Rām Tum Né Nayi Duniyā Basāyi",
    "Satya Dharma Shānti Ki Mālā Banāyi",
    "Sāi Nām Japné Ki Mālā Banāyi",
    "Prema Rupa Sāi Aur Prema Rupa Rām",
    "Rām Sāi Rām Bhajo Rām Sāi Rām",
  ],

  "323": [
    "Parthipuri Mé Janam Liyā",
    "Eeshwarāmba Ké Priya Tanayā",
    "* Main Kyā Janoun Teri Mahimā",
    "Jeevan Tu Meré Sāi Rāmā – Mama",
    "Tujh Bina Bābā Andhera Hai",
    "Tujh Se Sāi Ham Dur Hein",
    "Āo Āo Prabhu Sāi Mat Dera Se (x2)",
  ],

  "324": [
    "Parthipuri Mé Janam Liyā",
    "Jo Sāi Bābā Nām Hai",
    "Mayura Mukutadhara Murali Manohara",
    "Sāi Shyāmā Nām Hai",
    "Hey Shiva Shankara Umā Maheshwara",
    "Sāi Shambho Nāma Hai",
    "Hey Parameshwara Parthipurishwara",
    "Tu Hi Merā Prāna Hai",
  ],

  "325": [
    "Prabhu Gnāna Kā Deepa Jalāo",
    "Prabhu Prema Kā Deepa Jalāo",
    "Sāi Prema Kā Deepa Jalāo",
    "* Main Né Phukārā Māngā Sahārā",
    "Prabhu Dedo Mujhé Terā Sahārā",
    "Sāi Dedo Mujhé Abhaya Tumhārā",
    "Pahounchādo Prabhu Mujhé Kinārā",
    "Sāi Rām Sāi Shyām Sāi Rām",
  ],

  "326": [
    "Prabhu Leelā Prabhu Mahimā",
    "Kali Avatārā Sāi Nārāyana",
    "Prabhu Dhāma Parama Dhāmā",
    "Chaloré Chalo Man Parthi Dhāma",
    "Jaya (3) Hey Sāi Rāmā",
  ],

  "327": [
    "Prashānti Sāi Prashānti Bābā",
    "Shivāya Shivāya Namah Shivāya (2)",
    "* Shirdi Sāi Krishna Kanhāyi",
    "Namo (2) Sāi, Bhajo (2) Sāi",
    "Sāi Namo Namo Sāi Namo Namo",
    "Sāi Namo Namo Sāi Nāthā",
  ],

  "328": [
    "Prātah Smaranam Shri Guru Charanam",
    "Sāisha Charanam Shri Guru Charanam",
    "* Brahmānanda Pradāyaka Charanam",
    "Charanam Sharanam Sāisha Charanam",
  ],

  "329": [
    "Prema Bhakti Jagāo Man Mé",
    "Āo Meré Bhajan Mé Bābā",
    "Āo Meré Hridaya Mé Bābā",
    "Tum Ho Deenajanon Ké Sāi",
    "Tum Ho Bhaktajanon Ké Bābā",
    "Āo Meré Bhajan Mé Bābā",
    "Āo Meré Hridaya Mé Bābā",
  ],

  "330": [
    "Prema Rupa Ānanda Divya Rupa Ānanda",
    "Satchidānanda Sāi Mahāna",
    "Sāi Mahāna Sāi Mahāna",
    "Yuga Avatārā Tribhuvana Pālā",
    "Brahmānda Nāyaka Sāi Mahāna",
    "Sāi Mahāna Sāi Mahāna",
  ],

  "331": [
    "Prema Se Gāo Mangala Nām",
    "Govinda Gopāla Bolo Hari Nām",
    "Prema Ké Sindhu Deena Ké Bandho",
    "Karunāmayā Sāi Nayanabhi Rāmā",
    "Govinda Gopāla Bolo Hari Nām",
    "Haré Krishna Haré Rām Sāi Rām Sāi Rām (x2)",
  ],

  "332": [
    "Rājāti Rājadeva Rāja Poojitā",
    "Rāja (3) Mahārāja Shekharā",
    "Rāma Krishna Rupa Mahāteja Swarupā",
    "Satya Dharma Shānti Prema Sāi Swarupā",
  ],

  "333": [
    "Rājāti Rājā Meré Sāi Mahārājā",
    "Deenon Ké Nātha Bhagavān",
    "Devādi Devā Hey Sāi Mahādevā",
    "Parthi Vihāri Bhagavān",
    "Haré Rāmā Rāmā Rāmā Rāmā",
    "Haré Krishnā Krishnā Krishnā Krishnā",
  ],

  "334": [
    "Rām Bhajoré Shyāma Bhajoré",
    "Parthi Gopāl Sāi Rām Bhajoré",
    "Rām Hai Sāi Tu Shyām Hai Sāi",
    "Jag Paripālaka Pāvana Sāi",
    "Nanda Ké Dulāré Yashodā Ké Pyāré",
    "Rām Bhajo (3) Ré (x2)",
  ],

  "335": [
    "Sadā Nirantara Hari Guna Gāo",
    "Prema Bhakti Se Bhajana Sunāo",
    "* Sāi Nātha Ké Sharana Mé Āo",
    "Mana Mandira Mé Deepa Jalāo",
    "Jeevana Naiyā Pāra Lagāo",
  ],

  "336": [
    "Sahārā Do Bhagavān",
    "Mujhé Dayā Karo Mujhé Kripā Karo",
    "Sanmati Do Bhagavān",
    "* Sadā Sātha Raho Hey Bhagavān",
    "Sadā Raksha Karo Hey Bhagavān",
    "Shānti Bhakti Prema Do Bhagavān",
  ],

  "337": [
    "Sāi Avatārā Yuga Avatārā",
    "Deena Dayālā Sankata Hārā",
    "* Sāi Brahmā Sāi Vishnu",
    "Sāi Maheshwarā",
    "* Sathya Sāi Prema Sāi",
    "Sab Dharmon Ké Bābā Sāi",
    "Sāi Parameshwarā",
  ],

  "338": [
    "Sāi Bābā Geeta Sudhā",
    "Madhuram Madhuram Ānandam (x3)",
    "Shirdi Bābā Geeta Sudhā",
    "Madhuram Madhuram Ānandam",
    "Parthi Bābā Geeta Sudhā",
    "Madhuram Madhuram Ānandam",
  ],

  "339": ["Sāi Bābā Hamein Pās Bulāo", "Sāi Rāmā Hamein Darsha Dikhāo", "Sāi Krishna Meré Geet Mé Samāo", "Sāi Nātha Meri Phukār Sun Jāo"],

  "340": [
    "Sāi Bābā Sakala Bhuvana Ké Dātā – 3",
    "Rupa Manohara Kamalā Kāntā",
    "Yugavatāra Sāi Bābā Dayā Karo Parthi Bābā",
    "Shirdi Parthi Hridaya Vihāri",
    "Prashānti Nilaya Sāi (x2)",
  ],

  "341": [
    "Sāi Bār Bār Tum Āo",
    "Sāi Bār Bār Tum Bār Bār",
    "Prabhu Bār Bār Tum Āo",
    "* Bich Bhanvar Mé Nāw Phansi Hai",
    "Tumhi Pār Lagāo Sāi Āo",
    "Tarasa Rahé Hein Nayana Hamāré",
    "Ab To Darsha Dikhāo Sāi Āo",
    "Sāi Bār Bār Tum Bār Bār",
    "Prabhu Bār Bār Tum Āo",
  ],

  "342": [
    "Sāi Bhajana Binā Sukha Shānti Nahin",
    "Hari Nām Binā Ānanda Nahin",
    "Prema Bhakti Binā Uddhār Nahin",
    "Guru Seva Binā Nirvāna Nahin",
    "* Japa Dhyāna Binā Samayoga Nahin",
    "Prabhu Darsha Binā Pragnāna Nahin",
    "Dayā Dharma Binā Satkarma Nahin",
    "Bhagavan Binā Koyi Apnā Nahin",
    "Sāi Nātha Binā Paramātma Nahin",
  ],

  "343": [
    "Sāi Charan Sukhadāyi Man",
    "Sāi Binā Jeenā Kyā Hai (2)",
    "* Mātā Bhi Tu Pitā Bhi Tu",
    "Āo Bhagavan Deejo Darshan",
    "Mat Jāo Sāi Man Mandir Se",
    "Sāi Binā Jeenā Kyā Hai (2)",
  ],

  "344": [
    "Sāi Darbār Mé Āo Gāo",
    "Sankirtana Karoun Main Sāi Ké (x2)",
    "Peetāmbaradhara Nayana Manohara",
    "Sāi Sab Ké Prāna Sakhā",
    "Charana Kamala Par Sharana Paroun Main",
    "Sankirtana Karoun Main Sāi Ké (x2)",
  ],

  "345": [
    "Sāi Govindā Sāi Gopālā",
    "Teré Binā Sāi Sab Hai Andherā",
    "Deejo Meré Sāi Charana Tumhāré",
    "Deejo Meré Sāi Darsha Tumhāré",
    "Āo Meré Sāi Man Mandir Mé (x2)",
  ],

  "346": [
    "Sāi Hai Jeevan Jeevan Sathya Sāi",
    "Sāi Merā Jeevan Sahārā",
    "* Teré Binā Sāi Sab Hai Andherā",
    "Pār Karo Meré Jeevan Naiyā",
    "Charana Lagālo Mujhé Sāi Kanhaiyā",
  ],

  "347": [
    "Sāi Hamārā Tum Ujiyārā",
    "Kaliyuga Avatārā",
    "Jeevan Naiyā Pār Lagādé",
    "Meré Deenānātha (x2)",
    "Mandir Masjid Gurudwāré Mé",
    "Sāi Tero Nām",
    "Kankana Mé Sāi Rām",
  ],

  "348": [
    "Sāi Mahādevā - Sathya",
    "Parthipurishwara Hey",
    "Sāi Bābā Maheshwara Hey",
    "* Nirupama Sundara Hey",
    "Sāi Neeraja Dala Nayanā",
    "Vibhuti Sundara Hey Sāi Bābā Maheshwara Hey",
  ],

  "349": [
    "Sāi Mātā Pitā Deena Bandhu Sakhā",
    "Teré Charanon Mé Sāi Merā Koti Pranām",
    "Sāi Mātā Pitā Deena Bandhu Sakhā",
    "Teré Charanon Mé Sāi Merā Koti Pranām",
    "Mujhé Shakti Do Meré Sāi Shivā",
    "Mujhé Bhakti Do Meré Sāi Shivā",
    "Mujhé Mukti Do Meré Sāi Shivā",
  ],

  "350": [
    "Sāi Merā Tum Ho Sahārā",
    "Shirdi Avatārā Sāi Parthipuri Bhagavān",
    "Deenon Ké Tum Prāna Sakhā Prabhu",
    "Meré Sāi Rām",
    "Meré Sāi Rām Bābā Parthipuri Bhagavān",
  ],

  "351": [
    "Sāi Nām Bhajo Sathya Sāi Nām Bhajoré",
    "O Pyāré Sāi Meré Pār Utāro",
    "* Chānd Suraj Tāré Sāi Āsmān Bhi Sāi",
    "Parvat Sāi Sāgar Sāi Nadiyā Bhi Sāi",
    "Āgé Sāi Piché Sāi Dāyein Bāyein Sāi",
    "Har Pal Sāi Hardam Sāi Sabhi Sathya Sāi",
  ],

  "352": [
    "Sāi Nātha Deena Nātha Brahma Rupa Satguru",
    "Nirākāra Hey Ākāra Sathya Sāi Satguru",
    "Omkāra Satguru Nirvikāra Satguru",
    "Nirvikāra Satguru Omkāra Satguru",
    "* Mātā Pitā Satguru Sakala Tum Hi Satguru",
    "Sakala Tum Hi Satguru (2)",
  ],

  "353": ["Sāi Nāthā Guru Govindā", "Sathya Sāi Jaya Paramānandā (3)"],

  "354": [
    "Sāi Nātha Prabhu Ab Tum Āo",
    "Mana Mandira Mé Āo",
    "* Āo Sundara Sāi Bhagavān",
    "Āo Mangala Karunā Nidhān",
    "Āo Sumangala Bhakton Ké Prān",
    "Ab Tum Āo",
  ],

  "355": [
    "Sāi Om (3)",
    "Tan Man Prāna Mé Sāi Om",
    "* Shayana Sapana Mé Sāi Om",
    "Gagan Pavana Mé Sāi Om",
    "Shayana Sapana Mé Sāi Om",
    "Nayana Nayana Mé Sāi Om",
    "Janama Marana Mé Sāi Om",
  ],

  "356": [
    "Sāi Pitā Aur Mātā Sāi",
    "Deena Dayālā Dātā Sāi",
    "* Sāi Guru Sāi Sakhā Sahodara",
    "Sāi Satya Shivā Sāi Sundarā",
    "Veda Upanishada Geetā Sāi",
    "Deena Dayālā Dātā Sāi",
  ],

  "357": [
    "Sāi Prema Dé Shānti Dé Ānanda Dé",
    "Bābā Prema Dé",
    "Tum Ho Bābā Dayā Ké Sāgara",
    "Tum Ho Guna Mandir Natanāgara",
    "Ādi Ananta Hai Satya Sanātana",
    "Nitya Niranjana Sāi Janārdana",
    "Satchidānanda Prabhu Kripā Karo",
  ],

  "358": [
    "Sāi Rām Ghanashyāma Bhagavān Tumhārā Nām",
    "Tum Bina Koyi Nahin Rakhawālé",
    "Tum Bina Koyi Nahin Āpath Sahāré",
    "Tum Bina Prema Koyi Nahin Denéwālé",
    "Tum Ho Meré Ātmārām Bābā",
    "Bhagavān Tumhārā Nām",
    "Sāi Rām Tumhārā Nām",
  ],

  "359": [
    "Sāi Rāmā Hey Ghanashyāmā",
    "Parama Dayāgana Ātmārāmā",
    "* Shānta Saguna Hari Hara Paramātmā",
    "Bhakta Samrakshaka Dayābhi Rāmā",
    "Patita Pāvanā Sathya Sāi Rāmā",
    "Sharanam Sharanam Hey Sāi Rāmā",
  ],

  "360": [
    "Sāi Rām Sāi Rām",
    "Gā Ye Geeta Sadā Subah Aur Shām",
    "Har Ek Pāl Mé Har Ek Kshan Mé",
    "Bhajé Ham Sadā Terā Nām – Sāi",
    "Gā Ye Geeta Sadā Subah Aur Shām",
    "Koyi Kahé Tujhé Jānaki Rām",
    "Koyi Phukāré Rādhéshyām",
    "Hamhré Liyé Tum Sāi Bhagavān",
    "Gā Ye Geeta Sadā Subah Aur Shām",
  ],

  "361": ["Sāi Rām (2) Sāi Devā Satguru Rām", "Karunā Sāgara Parthipurishā", "Satya Swarupā Rām", "Ātmābhi Sāi Rām", "Sāi Parthipurishwara Rām"],

  "362": [
    "Sāi Rām Sāi Shyām Meré Sāi Rām",
    "Meré Sāi Meré Bābā Meré Prāna Nātha Rām",
    "Teré Dwār Pé Main Āwoun",
    "Mujhé Shānti Do Bhagavān",
    "Mujhé Shānti Do Bhagavān",
    "Meré Jeevan Mé Sāth Raho Sāi Nātha Hey",
    "Meré Sāi Meré Bābā Meré Prāna Nātha Rām",
  ],

  "363": [
    "Sāi Rām Swāgatam",
    "Sāi Rām Swāgatam",
    "Happy Birthday To You Sāi Lord",
    "Happy Birthday To You Sāi Lord",
    "Suragana Bhava Harā",
    "Eeshwarāmbā Nandanā",
    "Swāgatam Swāgatam",
  ],

  "364": ["Sāi (2) Smarana Karo", "Guru Charana Kamala Dhyāna Karo", "Keshava Mādhava Bhajana Karo", "Shri Satguru Sāi Sevā Karo"],

  "365": [
    "Sāi Satya Pālanā",
    "Bābā Satya Pālanā",
    "Shirdipuri Vāsā Sāi Sarveshā",
    "Hey Shirdipuri Vāsā Hey Parthipuri Vāsā",
    "Sarveshā Satya Pālanā",
    "* Akhila Nivāsā Jaya Hrishikeshā",
    "Mangala Kara Hey Pāvana Purushā",
    "Shirdipuri Vāsā Sāi Sarveshā",
    "Hey Shirdipuri Vāsā Hey Parthipuri Vāsā",
    "Sarveshā Satya Pālanā",
  ],

  "366": ["Sāi Sundarā Sundarā", "Vyāgrāmbaradhara Haré Hari Harā", "* Ananta Guna Mandirā Sundarā", "Natana Sundarā Bhuvana Sundarā"],

  "367": [
    "Sāi Tero Nāma Tero Nāma",
    "Janama Janama Main Gāoun (x2)",
    "Charana Tumhāre Satguru Sāi",
    "Apane Hridaya Basāo",
    "Shirdi Sāi Parthi Sāi",
    "Prema Sāi Guna Gāo",
    "Janama Janama Main Gāoun (x2)",
  ],

  "368": [
    "Sākshāt Parabrahma Sāi",
    "Guru Vandanā Sathya Sāi",
    "Guru Pada Ranjana Guru Parameshā",
    "Guru Brahma Guru Vishnu Maheshā",
    "Sadguru Sāi Parthipurishā",
    "Charana Namostuté Sāi Maheshā",
  ],

  "369": [
    "Sankata Haranā Shri Sāi Ramanā",
    "Pankaja Charanā Namo Namo",
    "Vedoddharanā Venkata Ramanā",
    "Lakshmi Nārāyana Namo Namo",
    "Namo Namo (2)",
    "Pankaja Charanā Namo Namo",
  ],

  "370": [
    "Sarva Nāma Swarupam Sāi Bābā",
    "Sarva Hridaya Virājam Sāi Bābā",
    "* Sarva Daivatva Swarupam Sāi Bābā",
    "Sarva Dharma Virājam Sāi Bābā",
    "Om Brahma Sanātani Sāi Bābā",
  ],

  "371": [
    "Satbār Kahoré Sāi Rām",
    "Sāi Rām Sāi Rām Sāi Rām",
    "Hey Mangala Nayanā Rām",
    "Hey Gopi Jeevana Shyām",
    "Hey Shirdi Ké Bhagavān",
    "Hey Prashānti Nilaya Rām",
    "Kshat Koti Namana Sāi Rām",
    "Sāi Rām (3)",
  ],

  "372": [
    "Satguru Brahma Sanātana Hai",
    "Parama Dayāgana Pāvana Hai",
    "Janmaja Dukha Vināshana Hai",
    "Jagadoddhārana Kārana Hai",
    "Sāi Krishna Janārdana Hai",
    "Bhava Bhaya Jaladi Tārana Hai",
  ],

  "373": [
    "Satguru Sāi Bābā Sāisha Bolo",
    "Sāisha Bolo Sāisha Bolo",
    "Satguru Sāi Nāma Samāyo",
    "Sāré Jaga Mé Sāi Samāyo",
    "Tumhré Nām Ki Jyoti Jalāyo",
  ],

  "374": [
    "Satguru (3) Sathya Sāi",
    "Hey Devādi Deva Guru Sāi",
    "Sarva Loka Sharanya Guru Sāi",
    "Merā Jeevan Ké Ādhār Sāi",
    "Kanakāmbaradhāri Hey Karunākara Sāi",
    "Kalyāna Gunashekhara Kaliyuga Avatāri",
    "Bhajoré (2) Sāi Merā Jeevan Ké Ādhār Sāi",
  ],

  "375": [
    "Sathya Sāi Gurudevā O Pyāré Satguru Devā",
    "Tum Ho Merā Jeevan Sahārā",
    "Parthi Vihārā Merā Dulārā",
    "Pār Karo Hey Priya Guru Naiyā",
    "Dur Karo Hey Jaga Ki Māyā",
    "Tum Ho Sāi Duniyā Ki Dheiyā",
  ],

  "376": [
    "Sathya Sāi Mahārājā",
    "Hey Trayambaka Yajā Maheshā - Shri",
    "Satyam Shivam Sundara Rupā",
    "Hey Satya Dharma Shānti Prema Ahimsā",
    "* Bhāradwāja Gotra Āpasthamba Sutra",
    "Dattātreya Digambareshā",
    "Nānā Avatārā Vedānta Sārā",
    "Nābhi Kamala Lingodbhavakarā",
  ],

  "378": [
    "Sathya Sāi Rāmā Hey Ghanashyāmā",
    "Prema Sudhā Barso Shānti Sudhā Barso",
    "* Kaliyuga Me Tum Yuga Avatāri",
    "Sathya Sāi Rāmā Hey Ghanashyāmā (x2)",
  ],

  "379": [
    "Sathya Sāi Rāmā Shiva Shakti Rupā",
    "Satya Dharma Shānti Prema Purna Teja",
    "Eeshwarāmba Nandana Sathya Nārāyana",
    "Yuga Avatārā Devādi Devā",
    "Jaya Parameshā Parthipurishā",
    "Hridayeshwarā Sāishwarā",
  ],

  "380": [
    "Sathya Sāi Smaranam Smaranam",
    "Parthi Sāi Smaranam",
    "Tribhuvana Pālaka Sāi Maheshā",
    "Sathya Sāi Smaranam",
    "Shri Guru Charanam Sab Dukha Haranam",
    "Sathya Sāi Smaranam Smaranam",
    "Sathya Sāi Smaranam",
  ],

  "375": ["Satya Gurudeva Rāh Dikhāo Prabhu", "Rāh Dikhāo Sāi Devā", "* Tum Ho Meré Prān Dātā", "Tum Ho Meré Bhāgya Dātā (x2)"],

  "381": ["Satyam Gyānam Anantam Brahmā (x3)", "Satyam Brahmā", "Gyānam Brahmā", "Anantam Brahmā"],

  "382": ["Shāntākāram Sāi Devam", "Sākshātkāram Parabrahmam", "Prashānti Nilayam Parama Pāvanam", "Devādi Devam Gurudevam"],

  "383": [
    "Sharana Mé Lelo Sāi Rām",
    "Kripā Karo Hey Sāi Rām",
    "Karunā Sāgara Deena Bandhu Sathya Sāi Rām",
    "Sab Kā Mālika Tum Ho Sāi Jag Kā Pālanhār",
    "Vinti Sunlo Swikār Karlo Sathya Sāi Rām",
  ],

  "384": [
    "Sharanam Gurudevā Sharanam Sāi Devā",
    "Jaya Jaya Gurudevā Jaya Jaya Sāi Devā",
    "* Kripā Karo Hey Gurudevā",
    "Kshamā Karo Hey Sāi Devā",
    "Deena Bandhu Karunā Sindhu",
    "Sāi Devā Sathya Sāi Devā",
    "Jaya Jaya Gurudevā Jaya Jaya Sāi Devā",
  ],

  "385": ["Sharanam (2) Sāisha Sharanam", "Shri Guru Jaya Guru Satguru Sāi Guru", "* Parthipurisham Sāi Gopālam", "Shānti Nivāsam Gurudeva Sharanam"],

  "386": [
    "Sheetala Charanam Komala Charanam",
    "Manjula Charanam Mama Guru Charanam",
    "Mridula Charanam Anugraha Charanam",
    "Satguru Charanam Sadā Smarāmi",
    "Prema Dātā Sāi Gurunāthā",
    "Pāvana Charanam Sadā Bhajāmi",
  ],

  "387": [
    "Shirdi Ké Bhagavān Sāi Rām",
    "Parthi Mé Tuhi Janam Liyo Ré",
    "* Mandira Mandira Ghantā Bājé",
    "Teré Nām Ki Mahimā Bhāri",
    "Bhakton Ké Rakhawālé O Bābā",
  ],

  "388": [
    "Shirdi Ké Sāi Parthi Ké Bābā",
    "Tum Ho Hamāré Pyāré Sāi Bābā",
    "* Prema Maya Sāi Prema Pradātā",
    "Eeshwarāmbā Nandana Jagat Paripālā",
    "Pāpa Vināshaka Parama Kripālā - Hey",
  ],

  "389": [
    "Shirdi Sāi Parthi Bābā",
    "Deenajanon Ké Sāi Bhaktajanon Ké Bābā",
    "Kaliyuga Avatārā Meré Jeevana Ādhārā",
    "Satguru Sāi Rām Shri Guru Sāi Rām",
  ],

  "390": [
    "Shirdi Sāi Parthi Sāi Ham Ko Deejo",
    "Premāmrita Dhārā (2)",
    "Tava Sevā Kā Avasar Deejo",
    "Sathya Sāi Mahādeva",
    "Gānāmrita Mé Bhāva Bhi Deejo",
    "Prema Sāi Bhagavān",
    "Hey Prema Sāi Bhagavān",
  ],

  "391": [
    "Shirdipuri Bhagavān Parthipuri Bhagavān",
    "Prema Swarupa Premāvatārā",
    "Sāi Nātha Bhagavān (x2)",
    "Buddham Sharanam Gachchāmi",
    "Dhammam Sharanam Gachchāmi",
    "Sangham Sharanam Gachchāmi",
    "Sāisha Sharanam Gachchāmi",
  ],

  "392": [
    "Shri Ganeshā Jaya Ganeshā",
    "Jaya Guru Devā Sāi Maheshā",
    "Pārvati Shankara Hey Parameshā",
    "Rām Krishna Hari Govinda Vitthalā",
    "Subrahmaniam (2)",
    "Shanmukha Nāthā Subrahmaniam",
    "Subrahmaniam (2) Sāi Nāthā Subrahmaniam",
  ],

  "393": [
    "Shubha Din Āj Mangala Gāna Karo",
    "Prema Pavitram Sundara Anupama",
    "Sathya Sāi Bhajana Karo",
    "Mangala Gāna Karo",
    "* Swāgatam Sāi Suswāgatam",
    "Hridaya Mandir Mé Āo Bhagavan",
    "Meré Hridaya Mé Āo Bhagavan",
  ],

  "394": [
    "Sundara Vadanā Sarasija Nayanā",
    "Parthipuri Bhagavān",
    "Jagat Paripālā Prashānti Nilaya",
    "Tum Ho Meré Bhagavān",
    "Dayā Karo Bhagavān",
    "Kripā Karo Bhagavān",
    "Parthipurishā Hey Bhuvaneshā",
    "Rakshā Karo Bhagavān",
    "Dayā Karo Bhagavān",
    "Kripā Karo Bhagavān",
  ],

  "395": [
    "Terā Sahārā Chooté Nā",
    "Sāi Terā Sahārā Chooté Nā",
    "Charanon Mé Rakhlo Mujhko Sāi",
    "Manwā Merā Thoothé Nā",
    "Ās Na Thoothé Tu Na Roothé",
    "Tor Do Sāi Bandhan Jhooté",
    "Tum Sanga Preeta Ki Bāndhi Dor",
    "Koyi Looterā Looté Nā",
  ],

  "396": [
    "Teré Dar Pé Āyā Houn Darshan Pāké Jāwoungā",
    "Ankhon Mé Tujhko Basāké Leké Jawoungā",
    "* Prashānti Mandir Se Bāhar Ā",
    "Sab Ko Darshan Tu Dedé",
    "Meré Man Mandir Mé Sāi Ājā Aur Bas Jā",
    "Ās Lagāyé Tujhé Phukāré Intazār Karoun",
  ],

  "397": [
    "Teré Sivā Prabhu Koyi Nahin Hai",
    "Tujhko Merā Pranām",
    "Tujhko Merā Pranām Sāi Rām",
    "Tujhko Merā Pranām",
    "Murali Manohara Āshā Na Toro",
    "Dukha Bhanjana Merā Sātha Na Choro",
    "Dwāra Kharā Houn Main Houn Bhikhāri",
    "Sunlé Meri Phukār Sāi Rām Sunlé Meri Phukār",
  ],

  "398": [
    "Tu Milé Na Milé O Meré Sāi",
    "Ham Āyé Teré Darsha Ko Sāi",
    "Teré Darasha Mé Sukha Jeevan Kā",
    "Nilaya Prashānti Nām Teré Ghar Kā",
    "Sāi Deepa Jalé Ghar Ghar Sāi",
    "Ham Āyé Teré Darsha Ko Sāi",
    "Parthi Mé Sāi Rām Virājé",
    "Bhajan Poojan Se Parthi Sājé",
    "Janam Janam Ki Poonji Pāyi",
    "Tu Chalé Na Chalé Meré Ghar Sāi",
    "Ham Āyé Teré Darsha Ko Sāi",
  ],

  "399": [
    "Tum Ho Anātha Nātha Bhagavān",
    "O Sāi Meré Prāna Sakhā Bhagavān",
    "Mātā Pitā Guru Bandhu Tum Ho",
    "Bhakta Sakhā Bhagavān",
    "Deena Sakhā Bhagavān",
    "Bhagavān Bhagavān",
    "Prāna Sakhā Bhagavān – O Sāi Meré",
  ],

  "400": [
    "Tum Ho Meré Bhagavān Bābā",
    "Parthipurishā Shri Sāi Nāthā",
    "Shirdipurishā Hey Jagannāthā",
    "* Prashānti Vāsā Shri Sāi Nāthā",
    "Purāna Purushā Hey Jagannāthā",
  ],

  "401": [
    "Tum Ho Rām Tum Ho Shyām",
    "Bhakton Ké Prān Bhagavān Sāi Rām",
    "Seetārām Rādhéshyām",
    "Eka Prabhu Bhagavān Sāi Rām",
    "Bhakton Ké Prān Bhagavān Sāi Rām",
  ],

  "402": [
    "Vinti Suno Meré Sāi Bhagavān",
    "Dayā Karo Meré Sāi Bhagavān",
    "Bhaktajanon Ké Tum Ho Prāna",
    "Deena Dayālā Karunā Nidhān",
    "Tribhuvan Pālā Sādhu Paritrāna",
  ],

  "403": [
    "Yuga Avatārā Pāvana Dhāmā",
    "Kaivalya Dāyaka Rām Sāi",
    "* Karunā Sāgara Prema Ké Sindhu",
    "Deena Bandhu Deenanātha Bhagavān",
    "Anupama Sundara Prashānti Vāsā",
    "Hridayeshwara Sāi Rām",
  ],

  "500": [
    "Abhaya Pradāyini Ānanda Rupini",
    "Sāi Mātā Sathya Sāi Mātā",
    "Hemagiri Nandini Bhava Bhaya Bhanjani",
    "Jaya Jaga Janani Devi Bhavāni",
    "Parthipurishwari Sāi Janani (x2)",
  ],

  "501": [
    "Akhilāndeshwari Rājā Rājeshwari",
    "Dayā Sāgari Parama Kripākari",
    "Sāmba Vinodini Shiva Sāi Shankari (x2)",
    "Mangala Gauri Mātā Maheshwari",
  ],

  "502": [
    "Ambā Jaga Janani",
    "Karunāmayi Sāi Premamayi",
    "Hey Ātma Swarupini Mā",
    "* Sahārā Do Mā Mujhé Kripā Karo Sāi Mā",
    "Mangala Kārini Manjula Bhāshini",
    "Moksha Pradāyini Mā",
  ],

  "503": [
    "Ambā Shankari Parameshwari",
    "Shashi Shekhari Ambā",
    "Sarveshwari Jagadishwari Maheshwari Ambā",
    "Ambā Sundari Guna Manjari",
    "Shiva Shankari Ambā",
    "Kādambari Swetāmbari Hari Sodari Ambā",
  ],

  "504": [
    "Ambamandahāsa Vadani Manohari",
    "Sāi Jaga Janani",
    "Mātā (3) Jaga Janani",
    "Jaga Janani Shubha Karani",
    "Sāi Jagan Mātā Sathya Sāi Jagan Mātā",
    "Mātā (3) Jaga Janani",
  ],

  "505": [
    "Ambé Janani Abhirāmi",
    "Abhaya Pradāyini Shivakāmi",
    "* Sāmbavi Shankari Sarveshwari",
    "Shānta Swarupini Shiva Shankari",
    "Sathya Swarupini Sāi Mātā",
    "Shāshwata Ānanda Dāyini Mātā",
  ],

  "506": [
    "Antarjyot Jalāo Sāi",
    "Brahma Sanātani Dayā Karo",
    "Dayā Karo Hey Poorna Jyotirmayi",
    "Shiva Shakti Mayi Kripā Karo",
    "Deena Dayāmayi Patita Pāvani",
    "Sāi Jagajanani Kripā Karo",
  ],

  "507": ["Bhairavi Ambé Bhavāni - Ambā", "Jagadambé Mā Jaga Janani", "* Nārāyani Patita Pāvani", "Parthi Puranjani Sāi Janani"],

  "508": [
    "Bhajaré Mā (2)",
    "Bhajaré Bhaja Man Sāi Mā",
    "* Bhajaré Saraswati Shankari Mā",
    "Bhajaré Chandi Maheshwari Mā",
    "Pārvati Bhava Bhaya Hārini Mā",
    "Pankaja Lochani Sāi Mā",
  ],

  "509": ["Bhajoré Bhajo Sadā Durgā Bhavāni", "Mangala Kārini Sāi Janani", "* Mahishāsura Mardini Bhavāni", "Dayā Sāgari Hey Jaga Janani"],

  "751": [
    "Shambho Shivā Hara Shambho Shivā",
    "Sāmba Shiva Nāyaka Hara Shambho Shivā",
    "Gangādhara Juthā Shiva Gauri Nāyakā",
    "Kāshipura Vāsā Hey Kanakasabeshā",
    "Tat Dimi Dimi Damaru Ka Shiva Rudra Nateshā",
    "Sāi Maheshā Sathya Sāi Maheshā (x2)",
  ],

  "752": ["Shankara Nām Bhajo", "Shankara (2) Nām Bhajo – 3", "* Peetāmbaradhara Sāi Shankara", "Chandrakalādhara Gauri Manohara"],

  "753": ["Shankara (2) Sadāshivā", "Sadāshivā Hey Sāmba Shivā", "* Ambā Sahitā Sāmba Shivā", "Sāmba Shivā Hey Sadāshivā"],

  "754": [
    "Shankaram Bhajé Sāi Shankaram Bhajé",
    "Parthi Vāsā Sāi Deva Shankaram Bhajé",
    "Sadgurum Bhajé Sāi Sadgurum Bhajé",
    "Satchidānanda Gurum Satgurum Bhajé",
  ],

  "755": [
    "Shankarā Sadāshivā Chandrashekharā",
    "Chandrashekharā Sāi Shankarā",
    "Neelakantha Trishuladhāri Sāi Shankarā",
    "Bhālanetra Tripura Hāri Sāi Shankarā",
    "Chandrashekharā Sāi Shankarā",
  ],

  "756": [
    "Shankarā Sadāshivā Sabhāpaté Manoharā",
    "Chandrashekharā Jatādharā Umā Maheshwarā",
    "* Shankarā Sāi Shankarā (x2)",
    "Chandrashekharā Jatādharā Umā Maheshwarā",
    "Ishwarā Sāi Ishwarā",
    "Ishwarā Parthi Ishwarā",
    "Chandrashekharā Jatādharā Umā Maheshwarā",
  ],

  "757": [
    "Shankarā Shiva Shankarā",
    "Shiva Shankarā Shambho",
    "Shankarā Shiva Shankarā",
    "Shiva Shambho Mahādevā",
    "* Dama (2) Damaru Bajé Shankara",
    "Ghana Ghana Ghantā Bajé",
    "Hara Bholenātha Shambho",
    "Hara Sāi Nātha Shambho – Hara",
  ],

  "758": [
    "Shirdi Nivāsā Sāi Shankarā",
    "Parthi Nivāsā Sāi Shankarā",
    "Bhāvā Teetā Bhāva Gocharā",
    "Kālā Teetā Kālā Bhairavā",
    "Jai Jagadishwara Omkāreshwara – 4",
  ],

  "759": [
    "Shirdi Sāi Shankarā Parthi Vihāri Shankarā",
    "Shankarā Abhayankarā",
    "Bhava Bhaya Hāri Shankarā",
    "* Paramātmā Shiva Shankarā",
    "Pāvana Purushā Shankarā",
    "Satya Swarupā Shankarā Sathya Sāi Shankarā",
  ],

  "760": [
    "Shirdi Sāi Shiva Parthi Sāi Shivā",
    "Hara Hara Shankara Shiva Sāi Shambho",
    "Natana Manohara Gaurivarā",
    "Sāmba Sadāshiva Shiva Sāi Shambho (Hara)",
    "Gangādhara Shiva Hara Hara Shambho",
  ],

  "761": ["Shirdi Sāi Shiva Shankarā", "Sathya Sāi Parameshwarā", "Shambho Mahādeva Sadāshivā", "Gangādhara Hara Gaurishwarā"],

  "762": [
    "Shiva Hara Hey Hara Shiva Hey",
    "Sāmba Sadāshiva Shiva Hara Hey",
    "Hara (4) Mahādevā",
    "Pārvati Ramanā Sadāshivā",
    "Namāmi Shankara Tava Sharanam",
    "Bhavāni Shankara Tava Sharanam",
  ],

  "763": [
    "Shiva Maheshwarā (3) Sāi Rām",
    "Shiva Maheshwarā Shiva Shankarā",
    "Shiva Mahādevā Sāi Rām",
    "Kailāsha Vāsā Mahādevā",
    "Jagadishwara Hara Mahādevā",
    "Tribhuvana Pāla Bābā Sāi Devā",
  ],

  "764": [
    "Shiva Shambho Shambho",
    "Shiva Shambho Mahādevā",
    "Hara (4) Mahādevā Shiva Shambho Mahādevā",
    "Hālāhaladhara Shambho Anātha Nāthā Shambho",
    "Hari Om (3) Namah Shivāya",
  ],

  "765": [
    "Shivā Shankarā",
    "Ānanda Nateshā",
    "Shambho Nandana Hey Parameshwara",
    "Chidambara Nāthā Ambalavānā",
    "* Damaru Bajé Shiva Ghantā Bajé",
    "Kailāshapaté Prema Shiva Shankara (Sāi)",
  ],

  "766": [
    "Shiva (2) Hara (2) Bhola Maheshwara",
    "Shambho Shankarā",
    "Chandrakalādhara Gauri Manohara",
    "Shambho Shankarā",
    "* Vyāgrāmbaradhara Chandrakalādhara",
    "Shambho Shankarā",
    "Hālāhaladhara Shailagirishwara",
    "Shambho Shankarā",
    "Chandrakalādhara Gauri Manohara",
    "Shambho Shankarā",
  ],

  "767": [
    "Shiva (2) Shambho Mahesha Girishā",
    "Hara (2) Sāi Mahādevā",
    "Nandi Vāhanā Nāga Bhooshāna",
    "Bhāla Lochanā Tripurāri Samhāri",
    "Parama Purusha Shiva Gangādhāri",
    "Chandrakalādhara Pārvati Ramanā",
    "Hara (2) Sāi Mahādevā",
  ],

  "768": [
    "Shiva (2) Shankara Hara Parameshwara",
    "Bāla Gangādhara Sāi",
    "Shiva (2) Shankara Parthipurishwara",
    "Natashiva Shankara Sāi",
    "Bāla Gangādhara Sāi",
  ],

  "769": [
    "Shiva (4) Tāndavané",
    "Hara (4) Shankarané",
    "* Shiva (4) Pashupatiyé",
    "Hara Hara Namo Pārvati Patayé",
    "Shiva (2) Shambho, Hara (2) Shambho",
    "Parthipurishwara Sāi Shambho (x2)",
  ],

  "770": ["Shivāya Parameshwarāya", "Chandrashekharāya Namah Om", "Bhavāya Gunasambhavāya", "Shiva Tāndavāya Namah Om"],

  "771": ["Shivoham (3) Shivā", "Chidānanda Rupam Shivoham Shivā", "Shivoham (3) Shivā", "Shivoham Shivā (2)", "Chidānanda Rupam Shivoham Shivā"],

  "772": [
    "Tāndava Priyakara Sabhāpaté",
    "Dam (4) Damaru Bajé",
    "Hara Bam Hara Bam Bholā Maheshwara",
    "Dama (2) Damaru Shiva Tāndavā",
    "Dam (4) Damaru Bajé",
    "Chidambareshā Sāi Natarājā",
    "Vibhuti Sundara Triyambakeshā",
    "Dam (4) Damaru Bajé",
  ],

  "773": [
    "Tāndava Priyakara Sāi Parameshwara",
    "Nāché Sāi Shankara Natarājā",
    "Dama (4) Damaru Bājé",
    "Ghana (2) Bājé Pāyaliyā",
    "Nāché Gangādhara Nāché Bimbādhara",
    "Nāché Sāi Shankara Natarājā",
  ],

  "774": ["Tum Ho Dātā Sāi Shankarā", "Sab Ko Deejo Ānanda Bābā", "* Āo Shankara Anātha Nāthā", "Deejo Darshan Deena Nāthā"],

  "775": [
    "Veda Rupāntara Shiva Shambho",
    "Vishmaya Rupā Shiva Shambho",
    "* Tripura Nāshaka Trishuladhāri",
    "Lokoddhāraka Bhava Bhaya Hāri",
    "Rudra Mahādeva Bhaktoddhāri",
  ],

  "776": [
    "Umā Maheshwara Uragā Bharanā",
    "Gangādhara Shiva Shambho",
    "Jaya Jagadishwara Pārvati Ramanā",
    "Parātparā Shiva Shambho",
    "Parthipurishwara Shambho",
  ],

  "777": ["Vishwādhāri Shiva Avatāri", "Sāi Shankara Namo Namo", "Mathurā Nāthā Nārāyana Hari", "Sāi Shankara Namo Namo (x2)"],

  "850": ["Ātmā Rām Ānanda Dhāma", "Atchyuta Rām Ayodhya Rām", "Seetā Rām Sathya Sāi Rām", "Sundara Rām Sugunābhi Rām", "Sāi Rām (3) Rām (x3)"],

  "851": ["Ātma Rāmā Ānanda Rāmā", "Ānanda Mohana Shri Parandhāmā", "* Māyāvee Rāmā Mānasa Premā", "Sundara Rāmā Sugunābhi Rāmā"],

  "852": [
    "Ayodhyā Vāsi Rām Rām Rām",
    "Dasharatha Nandana Rām",
    "Patita Pāvana Jānaki Jeevana",
    "Seetā Mohana Rām",
    "Ayodhyā Vāsi Rām Rām Rām",
    "Dasharatha Nandana Rām",
    "Patita Pāvana Jānaki Jeevana",
    "Seetā Mohana Rām",
  ],

  "853": [
    "Ayodhyā Vihāri Shri Rām Rām Rāmā",
    "Dwārakā Vihāri Shri Krishna Krishna Krishnā",
    "Saptagiri Vihāri Govinda Govindā",
    "Nija Bhakta Hridaya Vihāri",
    "Shri Sāi Nātha Devā",
  ],

  "854": ["Bhaja Bhajo Rām Rām Raghupati Seetā Rām", "Rāmeti Rāmā Seetā Rāmā Rāmā (x2)", "Rāmeti Rāmā Sāi Rāmā Rāmā"],

  "855": [
    "Bhaja Rāmam Bhaja Rāmam",
    "Bhajaré Mānasa Bhaja Rāmam",
    "Kalyāna Rāmam Bhaja Rāmam",
    "Kodanda Rāmam Bhaja Rāmam",
    "Patthābhi Rāmam Bhaja Rāmam",
    "Pāvana Nāmam Bhaja Rāmam",
    "Bhava Tārakam Nāmam Bhaja Rāmam",
  ],

  "856": [
    "Bhajaré Rām Charan Satatam",
    "Bhajaré Rām Charan",
    "Bhajaré Jānaki Jeevana Rāmam",
    "Bhajaré Rāma Bhadrachala Rāmam",
    "Bhajaré Pāvana Tāraka Nāmam",
    "Bhajaré Shri Rāma Rāmeti Rāmam",
  ],

  "857": [
    "Chandra Kirana Kula Mandana Rām",
    "Shrimad Dasharatha Nandana Rām",
    "Kaushalyā Sukha Vardhana Rām",
    "Vishwāmitra Priya Dhana Rām",
    "Shri Rām Jaya Rām Jaya Jaya Rām – 4",
  ],

  "858": [
    "Dānava Bhanjana Rām Sāi",
    "Shyāmala Komala Rām",
    "Hey Rām Rām Jaya Rām Sāi Rām Rām Rām",
    "Dasharatha Nandana Rām Sāi Dayā Sāgara Rām",
    "Hey Deenon Ké Prabhu Rām Sāi Rām Rām Rām",
  ],

  "859": [
    "Dasharatha Nandana Rām Rām Rām",
    "Dashamukha Mardana Rām Rām",
    "Raghupati Ranjana Rām Rām",
    "Pāpa Vimochana Rām Rām",
    "Kalyāna Rām Rām Rām",
    "Seetā Rām Jaya Rām Rām",
    "Kaliyuga Varadā Rām Rām",
    "Karunā Murti Sāi Rām",
  ],

  "860": [
    "Dasharatha Nandana Rāmā Dayā Sāgarā Rāmā",
    "Dashamukha Mardana Rāmā",
    "Daitya Kulāntaka Rāmā",
    "Lakshmana Sevita Rāmā",
    "Lakshmi Manohara Rāmā",
    "Sukshma Shareerā Rāmā Sundara Vadanā Rāmā",
  ],

  "861": [
    "Dasharatha Rām Jānaki Rām",
    "Māruti Sevita Manobhi Rām",
    "Seetā Rām Shri Raghurām",
    "Parthipurishwara Shri Sāi Rām",
    "Jaya Jaya Rām Jānaki Rām",
    "Ahalyoddhāraka Ānanda Rām",
  ],

  "862": [
    "Dayābhi Rāmā Jānaki Rāmā",
    "Madhura Manohara Prabhu Sāi Rāmā",
    "Ātmārāmā Nayanabhi Rāmā",
    "Kodanda Rāmā Patthābhi Rāmā",
    "Raghupati Rāghava Rājārāmā",
    "Madhura Manohara Prabhu Sāi Rāmā",
  ],

  "863": [
    "Deena Dayālā Shri Sāi Rāmā",
    "Jagadoddharā Prashānti Rāmā",
    "Anātha Rakshaka Ānanda Rāmā",
    "Ānanda Rāmā Prabhu Sāi Rāmā",
    "Ātmābhi Rāmā Prabhu Sāi Rāmā",
  ],

  "864": [
    "Dwārakāmāyi Rām Hey Shirdipurishwara Rām",
    "Prashānti Nilaya Rām",
    "Hey Parthipurishwara Rām",
    "Ayodhyā Vāsi Rām Hey Jānaki Jeevana Rām",
    "Dayā Karo Raghurām",
    "Hey Deena Bandhu Sāi Rām",
  ],

  "865": [
    "Hey Deena Dayālu Sāi Rāmā Rām",
    "Parama Kripālu Sāi Rāmā Rām",
    "Sāi Rām Rāmā Rāmā Rām (x2)",
    "Hey Patita Pāvana Sāi Rāmā Rām",
    "Bhakta Vatsala Sāi Rāmā Rām",
    "Sāi Rām Rāmā Rāmā Rām (x2)",
  ],

  "866": [
    "Hey Ishwari Nandana Rāghava Sāi",
    "Dayānidhé Bhagavān - Hey",
    "Kaushalyātmaja Dasharatha Nandana",
    "Ramaneeya Ānanda Tribhuvana Mohana",
    "Parthishwara Prabhu Karunā Niketana",
    "Dayānidhe Bhagavān – Hey (Kripā)",
  ],

  "867": [
    "Hey Karunānidhé Bhagavān Sāi Rām Sāi Rām",
    "Hey Deenajanon Ké Dayānidhé",
    "Prabhu Rām Sāi Rām",
    "Prabhuji Sāi Rām Sāi Rām",
    "Mangala Nāmā Sāi Rāmā Rāmā",
    "Hey Patita Pāvana Rām Sāi Rām Sāi Rām",
    "Prabhuji Sāi Rām Sāi Rām",
    "Jai Sathya Sāi Rām Sāi Rām",
  ],

  "868": [
    "Hey Parthipurishā Prashānti Vāsā",
    "Sadguru Sāi Rām",
    "Jaya Sadguru Sāi Rām – (Shri, Namo)",
    "Haré Rām Haré Rām Haré Rām Haré Rām",
    "Haré Rām Sāi Rām",
    "Hey Prema Swarupā Pāpa Vināshā",
    "Sadguru Sāi Rām",
    "Jaya Sadguru Sāi Rām – (Shri, Namo)",
    "Haré Rām Haré Rām Haré Rām Haré Rām",
    "Haré Rām Sāi Rām",
  ],

  "869": [
    "Hey Prashānti Nilaya Rām",
    "Hey Parthipuri Bhagavān",
    "Ahalyoddhāraka Rām Dāsharathe Raghurām",
    "Shri Rām Jaya Rām",
    "Shri Rām Rām Rām Jaya Rām",
    "Sāi Rām Rām Rām Sāi Rām",
  ],

  "870": [
    "Hey Rām Bhagavān",
    "Hey Karunā Sindhu Rām",
    "Hey Deena Bandhu Sāi Rām",
    "Bhakta Premi Ko Karunā Karo Bābā",
    "Dayā Karo Raghurām - Kripā",
    "Hey Jānaki Jeevana Rām",
    "Hey Parthipurishwara Rām",
    "Hey Deena Bandhu Sāi Rām",
  ],

  "871": [
    "Jagadāshraya Shri Raghurāmā",
    "Jagadoddhārā Sāi Rāmā",
    "* Parama Pāvanā Tāraka Nāmā",
    "Shri Rāma Kshata Koti Pranāmā",
    "Sāi Rāmā Koti Pranāmā",
    "Sharanam (2) Ātmā Rāmā",
  ],

  "872": [
    "Jaya Jaya Mohana Rāmā Rāmā",
    "Jaya Sathya Sāi Parandhāmā",
    "Kaushalyā Rāmā Kalyāna Rāmā",
    "Kārunyā Rāmā Jaya Jaya Rāmā",
    "Kaliyuga Avatāra Sathya Sāi Rāmā",
    "Shri Sathya Sāi Parandhāmā",
  ],

  "873": [
    "Jaya Jaya Raghunandanā Jaya Jānaki Jeevanā",
    "Sharanāgata Pālanā Jaya Jagadoddhāranā",
    "* Rājiva Dala Lochanā Jaya Jagatā Nandanā",
    "Rājādhirāja Rāmachandra Sāi Jaga Vandanā",
  ],

  "874": ["Jaya Jaya Rāmā Jānaki Rāmā", "Raghukula Bhooshana Rājā Rāmā", "* Tāpasa Ranjana Tāraka Nāmā", "Dānava Bhanjana Kodanda Rāmā"],

  "875": [
    "Jaya Jaya Rām Jaya Raghurām",
    "Jaya Jaya Rām Jaya Sāi Rām",
    "Dasharatha Nandana Hey Raghurām",
    "Dashamukha Mardana Seetārām",
    "Dānava Bhanjana Jānaki Rām",
  ],

  "876": [
    "Jaya Jaya Rāmā Jaya Raghurāmā",
    "Dasharatha Nandana Rājā Rāmā",
    "Abhaya Pradāyaka Ānanda Dāyaka",
    "Tribhuvana Mohana Seetā Rāmā",
    "Dānava Bhanjana Deenoddhārana",
    "Prema Sāgarā Sāi Rāmā",
  ],

  "877": ["Jaya Raghunandana Jaya Jaya Rāmā", "Jaya Jagatjanani Jānaki Rāmā", "Nava Nava Komala Meghashyāmā", "Bhava Haranā Bhadrāchala Rāmā"],

  "878": [
    "Jaya Raghunandana Jaya Siyārām",
    "Jaya Jaya Rām Jaya Sāi Rām",
    "* Jānaki Jeevana Seetā Rām",
    "Bhakta Uddhārana Sāi Rām",
    "* Māyi Meerā Prabhu Rādhéshyām",
    "Mandara Giridhāri Hey Ghanashyām",
    "Mandāsmita Mukha Rādhéshyām",
    "Mahimā Avatārā Sāi Rām",
  ],

  "879": [
    "Jaya Rāma Rāmā Manobhi Rāmā",
    "Dasharatha Nandana Sāketa Rāmā",
    "* Asharana Pālana Sāi Rāmā",
    "Anātha Rakshaka Shri Raghurāmā",
    "Shri Sāi Rāmā Mangala Dhāmā",
    "Pāhi Pāhi Shri Sāi Rāmā",
  ],

  "880": ["Jaya Rāmā Jānaki Rāmā", "Jaya Rām Seetārāmā", "Jaya Rām Meghashyāmā", "Jaya Rām Sāi Rāmā"],

  "881": ["Jaya Rāmā Raghurāmā", "Ranadheerā Sukumārā", "* Raghupati Rāghava Rājā Rāmā", "Rājiva Lochana Rāmā Rāmā"],

  "882": [
    "Jaya Sāi Rāmā Jaya Raghurāmā – 3",
    "Dukhiyon Ké Dātā Sāi Rāmā",
    "Prema Pradātā Sāi Rāmā",
    "Shānta Swarupā Sāi Rāmā",
    "Jaya Sāi Rāmā Jaya Raghurāmā – Hey",
  ],

  "883": ["Jaya Shri Rāmā Jaya Raghurāmā", "Jaya Parandhāmā Pāvana Dhāmā", "* Jaya Jaya Rāmā Jaya Satya Nāmā", "Jaya Mana Mohana Shri Sāi Rāmā"],

  "884": [
    "Jayatu Jayatu Shri Rāmā",
    "Janani Jānaki Rāmā",
    "Shri Sathya Sāi Rāmā",
    "* Shāshwata Ānanda Dhāmā",
    "Hey Dharmoddhāraka Rāmā",
    "Dayānidhé Kripānidhé",
    "Seetāpaté Jaya Raghurāmā",
    "Puttaparthipaté Jaya Sāi Rāmā",
  ],

  "885": [
    "Kalimala Bhanjana Kodanda Rāmā",
    "Karunāntarangā Kaivalya Dhāmā",
    "* Māyā Mānusha Munijana Premā",
    "Madhura Manohara Mangala Nāmā",
    "Parthipurishā Prabhu Paramātmā",
    "Patita Pāvanā Patthābhi Rāmā",
  ],

  "886": ["Kalyāna Rāmā Ānanda Rāmā", "Rāmā Shri Rāmā Jaya Rāmā", "* Avatāra Sāi Avatāra Rāmā", "Purna Avatāra Sathya Sāi Rāmā"],

  "887": [
    "Kalyāna Rāmā Kodanda Rāmā",
    "Seetā Rāmā Shri Raghurāmā",
    "* Lakshmana Sevita Lāvanya Rāmā",
    "Ahalyoddhāraka Pāvana Nāmā",
    "Mandāsmita Mukha Mangala Dhāmā",
    "Parthipurishwara Shri Sāi Rāmā",
    "Sathya Sāi Rāmā",
  ],

  "888": [
    "Karunā Niketana Bhakta Sakhā Prabhu",
    "Sharana Mé Lo Bhagavān",
    "Dukha Bhanjana Shri Rām",
    "Tribhuvana Sanchāri Jyoti Swarupā",
    "Nitya Niranjana Rām",
    "Ādi Ananta Hai Prema Swarupā",
    "Dukha Bhanjana Shri Rām",
  ],

  "889": ["Karunā Samudra Shri Rāmā", "Kaushalyā Tanayā Shri Rāmā", "Sharanāgata Priya Sāi Rāmā", "Sharanam Sharanam Sāi Rāmā"],

  "890": [
    "Karunā Sindhu Dasharatha Nandana",
    "Parthipurishwara Rām",
    "Prema Swarupa Prashānti Niketana",
    "Māruti Sevita Rām",
    "Ahalyoddhāraka Rājiva Lochana",
    "Raghukula Bhooshana Rām",
  ],

  "891": [
    "Kaushalyā Nandana Rām",
    "Paramānanda Ānanda Rām",
    "Ānanda Ānanda Rām",
    "Paramānanda Ānanda Rām",
    "Jaya Shirdisha Parthisha Rām",
    "Jaya Prashānti Sāisha Rām",
    "* Jaya Mangala Pāvana Rām",
    "Jaya Sundara Vaidehi Rām",
    "Jaya Sundara Sāisha Rām",
  ],

  "892": [
    "Kaushalyā Nandana Vaidehi Mohana",
    "Rājiva Lochana Rāmā",
    "Yuga Avatāra Parameshwara Rāmā",
    "Asura Nikantana Kodanda Rāmā",
    "Bharatāshrita Shri Rāmā Parthipurishwara Rāmā",
  ],

  "893": [
    "Kaushalyā Rāmā Kārunya Dhāmā",
    "Rāvana Mardana Rāmā Shri Rāmā",
    "* Ahalyoddhāraka Rāmā Shri Rāmā",
    "Māruti Sevita Rāmā Shri Rāmā",
    "Sāi Rām Jai Rām Jai Jai Rām (x3)",
  ],

  "894": [
    "Kaushalyātmaja Rām Charan",
    "Vaidehi Priya Rām Charan",
    "Māruti Sevita Rām Charan",
    "Bharatārchita Rām Charan",
    "Ahalyoddhāraka Rām Charan",
    "Prashānti Niketana Rām Charan",
    "Rām Charan Sadā Bhajo",
  ],

  "895": ["Maithilipaté Raghunandanā", "Rāmā Rāghavā Rājiva Lochanā", "* Deenāvanā Hey Karunāmayā", "Kamalā Nayanā Kaushalyā Tanayā"],

  "896": ["Mohana Raghurāmā", "Ati Sundara Shri Rāmā", "Māruti Sevita Rāmā", "Shri Rāma Rāma Jaya Rāmā (x2)", "Shri Rāma Rāma Sāi Rāmā"],

  "897": ["Om Shri Rām Jai Rām Jai Jai Rām – 4", "Seetā Rām (3)", "Rādhéshyām (3)"],

  "898": [
    "Patita Pāvana Rām",
    "Parthipurishwara Rām",
    "Pāvana Nāmā Tāraka Nāmā",
    "Pāpa Vimochana Rām",
    "Dānava Bhanjana Rām",
    "Dasharatha Nandana Rām",
    "Pāvana Nāmā Tāraka Nāmā",
    "Pāpa Vimochana Rām",
  ],

  "899": [
    "Prashānti Nilaya Rām Hey Parthipuri Bhagavān",
    "Ahalyoddhāraka Rām Hey Dāsharaté Raghurām",
    "Shri Rām Jaya Rām",
    "Shri Rām Rām Rām Jaya Rām",
    "Sāi Rām Rām Rām Sāi Rām",
  ],

  "900": [
    "Prema Se Bolo Ek Bār Sāi Rām (x2)",
    "Sāi Rām Sāi Rām",
    "Bolo Rām Sāi Rām",
    "* Madhura Manohara Rām",
    "Mohana Moorata Rām",
    "Hey Karunā Sindhu Rām",
    "Hey Raghupati Rāghava Rām",
    "Patita Pāvana Seetārām",
    "Haré Rām Haré Rām",
    "Bolo Rām Sāi Rām",
  ],

  "901": [
    "Punya Nām Pavitra Nām Rām Nām Sāi Rām",
    "Haré Krishna Haré Rām Madhura Nām Sāi Rām",
    "Karunā Sindhu Seetārām",
    "Deena Bandhu Rādhéshyām",
    "Haré Krishna Haré Rām Madhura Nām Sāi Rām",
  ],

  "902": [
    "Rāghava Sundara Rāmā Raghuvarā",
    "Parama Pāvanā Hey Jaga Vandana",
    "* Patitoddhārana Bhakta Pārāyana",
    "Rāvana Mardana Vigna Bhanjana",
    "Parthipurishwara Sāi Nārāyana",
  ],

  "903": [
    "Raghukula Bhooshana Rājiva Nayanā",
    "Eeshwarāmbā Nandana Sathya Sāi Rāmā",
    "Jānaki Vallabha Pāvana Nāmā",
    "Nirupama Sundara Sugunābhi Rāmā",
    "Prashānti Nilaya Pāvana Nāmā",
    "Jaya Jaya Rāmā Prabhu Sāi Rāmā",
  ],

  "904": [
    "Raghunandana Rāghava Rām Haré",
    "Hey Jānaki Jeevana Rām Haré",
    "Hey Rājiva Lochana Rām Haré",
    "Raghunandana Rāghava Rām Haré",
    "Shri Rām Haré Sāi Rām Haré (x5)",
    "Hey Rājiva Lochana Rām Haré",
  ],

  "905": [
    "Raghupaté Rāghavā Rājā Rāmā",
    "O Rājā Rāmā",
    "O Seetā Rāmā",
    "* Dasharatha Nandana Rājā Rāmā",
    "Kaushalyātmaja Sundara Rāmā",
    "Rām Rām Jaya Rājārāmā",
    "Rāghava Mohana Meghashyāmā",
    "Jai Jai Rām (2)",
    "Jai Jai Rām (3) Rām Rājā Rām",
    "Patita Pāvana Seetāpaté Rāmā",
  ],

  "906": [
    "Raghupaté Shri Rāmachandrā",
    "Rāghavā Dayānidhé (x2)",
    "Mādhavā Shri Rādhikeshā",
    "Govindā Haré Krishnā (x2)",
    "Pashupaté Shri Pārvatishā",
    "Shankarā Sadāshivā (x2)",
    "Shirdipaté Puttaparthipurishā",
    "Sāi Nātha Haré Haré (x2)",
  ],

  "907": [
    "Raghupati Rāghava Rājā Rām",
    "Patita Pāvana Seetā Rām",
    "Raghupati Rāghava Rājā Rām",
    "Patita Pāvana Seetā Rām",
    "Rām Rām Jaya Rājā Rām",
    "Rām Rām Jaya Sāi Rām",
    "Rām Rām Jaya Rājā Rām, Rām Rām",
    "Jaya Seetā Rām, Rām Rām Jaya",
    "Sāi Rām Bolo Rām Rām Jaya Sāi Rām",
  ],

  "908": [
    "Raghupati Rām Jaya Jaya Rām",
    "Dasharatha Nandana Shri Raghurām",
    "* Seetā Mohana Jānaki Rām",
    "Pāvana Nāma Mangala Dhāma",
    "Jaya Jaga Vandana Prashānti Rām",
  ],

  "909": ["Raghuveera Rām Haré", "Rām Rām Jaya Rām", "* Raghupati Rāghava Rām Rām Rām Jaya Rām", "Rājiva Lochana Rām Rām Rām Jaya Rām"],

  "910": [
    "Raghuveera Ranadheera Rām Rām Rām",
    "Rakumāyi Vitthalā Shyām Shyām Shyām",
    "Sukumāra Sundara Rām Rām Rām",
    "Shirdisha Parthisha Shyām Shyām Shyām",
  ],

  "911": [
    "Rām Charana Sukhadāyi Bhajoré (x2)",
    "Rām Nām Ké Do Akshara Mé",
    "Sab Sukha Shānti Samāyi Ré",
    "Sāi Nātha Ké Charanon Mé Ākar",
    "Jeevan Saphal Banāo Ré – Tum",
  ],

  "912": ["Rām Haré Seetā Rām", "Shyām Haré Rādhéshyām", "Seetā Vallabha Sundara Rām", "Murali Manohara Rādhéshyāmā", "Parthipurishwara Rām"],

  "913": [
    "Rām Nām Tārakam Sadā Bhajoré",
    "Sadā Bhajoré Sadā Japoré",
    "* Rām (3) Jaya Kodanda Rāmā",
    "Rām (3) Jaya Kalyāna Rāmā",
    "Rām (3) Jaya Patthābhi Rāmā",
  ],

  "914": [
    "Rām Raghuvara Rām Seetā Rām Rām Rām",
    "Rām (3) Sāi Rām Rām Rām",
    "* Hey Patita Pāvana Rām",
    "Hey Shyāmala Komala Rām",
    "Hey Vaidehi Priya Rām",
    "Sāi Rām Rām Jaya Rām",
    "Rām (3) Sāi Rām Rām Rām",
  ],

  "915": [
    "Rām Rām Bhajo Mana Haré Haré (x3)",
    "Raghupati Rājā Rām Rām",
    "Patita Pāvana Seetārām",
    "Haré Rām Haré Rām Haré Haré",
    "Haré Rām Sāi Rāmā Haré Haré",
  ],

  "916": ["Rām Rām Jaya Raghukula Tilakā", "Rājiva Lochana Rām", "Eeshwarāmba Suta Jaya Jaga Vandana", "Ratnākara Kula Deepā (x3)"],

  "917": [
    "Rām (3) Jaya Kodanda Rāmā",
    "Rām (3) Jaya Kalyāna Rāmā",
    "Rām (3) Jaya Vaidehi Rāmā",
    "Rām (3) Jaya Patthābhi Rāmā",
    "Rām (3) Jaya Ātmābhi Rāmā",
    "Rām (3) Jaya Shri Sāi Rāmā",
  ],

  "918": [
    "Rām (3) Parama Sumangala Rām Rām Rām",
    "Janani Jānaki Jeevana Rām",
    "Jai Jai Rāmā Sāi Rāmā Jayatu Jayatu Rāmā",
    "Parama Sumangala Rām Rām Rām",
  ],

  "919": [
    "Rām Rām Sāi Rām",
    "Parthipurishā Sāi Rām",
    "* Madhura Manohara Sundara Rām",
    "Shyāmala Komala Nayanabhi Rām",
    "Ravikula Mandala Rājana Rām",
    "Parama Pāvanā Mangala Rām",
  ],

  "920": [
    "Rām Sāi (3) Rām (x2)",
    "Kaushalyā Nandana Dasharatha Rām",
    "Jānaki Vallabha Jai Jai Rām",
    "Lakshman Sevita Lāvanya Rām",
    "Rāvana Mardana Ranadheera Rām",
    "Ayodhyā Vāsi Rājā Rām",
    "Anjana Priya Suta Ātmābhi Rām",
  ],

  "921": [
    "Rām Sumira Mana Rām Sumira Mana",
    "Rām Sumira Mana Rām",
    "Jānaki Vallabha Dasharatha Nandana",
    "Rāmchandra Shri Rām (x3)",
    "Bhaja Mana Seetārām Rām Rām",
    "Bhaja Mana Seetārām",
    "Bhaja Mana Rādhéshyām Shyām",
    "Bhaja Mana Rādhéshyām",
    "Bhaja Mana Sāi Rām Rām",
    "Bhaja Mana Sāi Rām",
  ],

  "922": ["Rāmā Rāghavā - Sāi", "Raghunandana Ravikula Somā", "* Rāvana Mardana Rāmābhi Rāmā", "Rameti Rāmā Raghurāmā", "Rameti Rāmā Sāi Rāmā"],

  "923": [
    "Rāmā Raghurāmā Rām Tum Ho Ātmā Rāmā",
    "Andar Rāmā Bāhar Rāmā",
    "Ghata Ghata Vāsi Rāmā",
    "Rāmā Raghurāmā Rām Tum Ho Ātmā Rāmā",
    "Ātmā Rāmā Ānanda Rāmā",
    "Jaya (4) Rāmā",
  ],

  "924": ["Rāmam Bhajo Raghurāmam Bhajo", "Raghukula Tilakā Rāmam Bhajo", "* Dasharatha Nandana Rāmam Bhajo", "Dashamukha Mardana Rāmam Bhajo"],

  "925": [
    "Rāmā Shri Rāmachandra Jaya Jaya Rāmā",
    "Karunābhi Rāmā Kamaneeya Rāmā",
    "* Kodanda Rāmā Kalyāna Rāmā",
    "Sharanāgata Paripālana Shri Charanā Rāmā",
    "Rāmā Shri Rāmā Sāi Rāmā",
    "Samara Vijaya Rāmā Sāketa Rāmā",
  ],

  "926": [
    "Rāmachandra Shri Rām",
    "Sāi Rāmā Jaya Rāmā",
    "* Dasharatha Nandana Dayābhi Rāmā",
    "Dashamukha Mardana Rāmā Rāmā",
    "Tāpasa Ranjana Tāraka Nāmā",
    "Ahalyoddhāraka Rāmā Rāmā",
  ],

  "927": [
    "Rāmachandra Raghuveerā",
    "Rāmachandra Ranadheerā",
    "Rāmachandra Raghunāthā",
    "Rāmachandra Jagannāthā",
    "Rāmachandra Mama Bandho",
    "Rāmachandra Dayā Sindho",
    "Raghuveerā Ranadheerā",
    "Raghurāmā Parandhāmā (x2)",
    "Mama Bandho Dayā Sindho",
    "Raghuveerā Ranadheerā",
    "Raghunāthā Jagannāthā",
    "Mama Bandho Dayā Sindho",
  ],

  "928": [
    "Sāi Rāma Haré Sāi Krishna Haré (x2)",
    "Raghupati Rāghava Rāma Haré",
    "Rājiva Lochana Rāma Haré",
    "Sāi Rāma Haré Sāi Krishna Haré",
    "Parthipurishwara Sāi Haré",
  ],

  "929": [
    "Sāi Rāmā Hey Ghanashyāmā",
    "Parama Dayāgana Ātmārāmā",
    "* Shānta Saguna Hari Hara Paramātmā",
    "Bhakta Samrakshaka Dayābhi Rāmā",
    "Patita Pāvana Sathya Sāi Rāmā",
    "Charanam Sharanam Hey Sāi Rāmā",
  ],

  "930": [
    "Sāi Rāmā Hey Parandhāmā",
    "Parama Niranjana Rām Parthipurishwara Rām",
    "Veda Vibhooshita Vibhuti Sundara",
    "Rupa Manohara Rām Bhuvanoddhāraka Rām",
    "Shri Rām Jai Rām Jai Jai Rām",
    "Jānaki Jeevana Seetā Rām",
    "Shri Rām Shri Rām Shri Rām",
  ],

  "931": ["Seetā Rāmā Shri Raghu Rāmā", "Dāsharaté Hey Jaya Rāmā", "Ātmā Rāmā Aganita Guna Nāmā", "Pāvana Nāmā Parandhāmā"],

  "932": [
    "Seetā Vallabha Sundara Rāmā",
    "Shri Rām Jaya Rām Sathya Sāi Rāmā",
    "Dāsharathé Rāmā Jaya Jaya Rāmā",
    "Raghukula Bhushana Rājā Rāmā",
    "Dāsharathé Rāmā Jaya Jaya Rāmā",
  ],

  "933": [
    "Shri Hari Nanda Mukunda Haré",
    "Dasharatha Nandana Rām Haré",
    "Geetā Prabodhana Shri Vatsalārchana",
    "Asura Nikhandana Rāvana Mardana",
    "Alaka Niranjana Rām Haré",
    "Rām Haré Seetā Rām Haré",
    "Raghupati Rāghava Rām Haré",
    "Dasharatha Nandana Rām Haré",
  ],

  "934": [
    "Shri Raghunandana Dasharatha Nandana",
    "Asura Nikantana Sāi",
    "Hey Yadu Nandana Devaki Nandana",
    "Bhava Bhaya Bhanjana Sāi",
    "Shri Raghunandana Dasharatha Nandana",
    "Bhadrādishwara Rāmā",
    "Vaidehi Priya Vaikunta Rāmā",
    "Sadā Smarāmi Rāmeti Rāmā",
  ],

  "935": ["Shri Raghunandana Dasharatha Nandana", "Bhadrādishwara Rāmā", "Vaidehi Priya Vaikunta Vāsā", "Sadā Smarāmi Rāmeti Rāmā"],

  "936": [
    "Shri Raghunandana Dasharatha Rāmā",
    "Raghukula Bhooshana Lāvanya Rāmā",
    "Hanumanta Sevita Māruti Rāmā",
    "Seetā Nāyaka Seetā Rāmā",
    "Ayodhyā Vāsi Rājā Rāmā",
    "Prashānti Priya Sathya Sāi Rāmā",
  ],

  "937": ["Shri Raghunandana Jānaki Jeevana", "Rām (3) Sāi", "Alaka Niranjana Asura Nikantana", "Rājiva Lochana Bhava Bhaya Bhanjana", "Rām (3) Sāi"],

  "938": [
    "Shri Raghunandana Seetā Rāmā",
    "Rājiva Lochana Rājā Rāmā",
    "Rājā Rāmā",
    "Sāi Rāmā",
    "Bhava Bhaya Bhanjana Tāraka Nāmā",
    "Ātmā Rāmā Sāi Rāmā",
    "Kalimala Bhanjana Kodanda Rāmā",
  ],

  "939": [
    "Shri Raghunandana Seetāpaté Shri Rām",
    "Jānaki Jeevana Rāghava Mohana",
    "Dasharatha Nandana Rām",
    "Dashamukha Mardana Rājiva Lochana",
    "Māruti Sevita Rām",
    "Jai Jai Rām Seetā Rām Jai Jai Rām (x4)",
  ],

  "940": [
    "Shri Raghurāmā Seetā Rāmā",
    "Pāvana Nāmā Shri Rāmā",
    "Jaya Raghurāmā Jānaki Rāmā",
    "Antar Guna Dhāmā Shri Rāmā",
    "Seetā Rāmā Sundara Rāmā",
    "Dasharatha Nandana Rāmā",
    "Dāsharathé Jaya Rāmā",
    "Dashamukha Mardana Rāmā",
    "Dayā Sāgara Rāmā - Hey",
  ],

  "941": [
    "Shri Rām Charanam (3) Bhajé",
    "Vaidehi Rāmā Vaikunta Rāmā",
    "Gopāla Choodāmani",
    "Ātmābhi Rāmā Prabhu Sāi Rāmā",
    "Shri Rāma Charanam Bhajé (x3)",
  ],

  "942": ["Shri Rām Jai Rām Jaya Jaya Rām – 4"],

  "943": [
    "Shri Rām Jaya Rām Jaya Jaya Rām",
    "Jānaki Jeevana Rām",
    "Patita Pāvanā Rām Haré Jaya",
    "Rāghava Sundara Rām",
    "Deenoddharanā Rām Haré Jaya",
    "Māruti Sevita Rām",
    "Jaya Jaya Rām Jaya Raghurām",
    "Jānaki Jeevana Rām",
  ],

  "944": [
    "Shri Rām Jaya Rām Shri Rām Rām Jaya Rām",
    "Shri Rām Rām Jaya Rām",
    "Dasharatha Nandana Rām Jānaki Jeevana Rām",
    "Patita Pāvana Rām Rām Rām",
    "Shri Rām Rām Jaya Rām",
    "Ahalyoddhāraka Rām Sabari Poojita Rām",
    "Hanumān Ké Romm Romm Mé",
    "Sadā Basata Shri Rām Rām Rām",
    "Shri Rām Rām Jaya Rām",
  ],

  "945": [
    "Shri Rām Parātpara Rām",
    "Hey Rājiva Lochana Rām",
    "Hey Ananta Shayana Rām",
    "Hey Ātma Swarupa Rām",
    "Shri Rām Jaya Rām Sāi Rām",
    "Hey Dasharatha Nandana Rām",
    "Hey Dashamukha Mardana Rām",
    "Hey Dānava Bhanjana Rām",
    "Hey Dayā Sāgarā Rām",
    "Shri Rām Jaya Rām Sāi Rām",
  ],

  "946": [
    "Shri Rām Raghuvara Rām",
    "Jaya Seetā Rām Rām",
    "Hey Ayodhyā Vāsi Rām",
    "Hey Parthipurishwara Rām",
    "Shri Rām (4)",
    "Hey Pāpa Vināshaka Rām",
    "Hey Patita Pāvana Rām",
    "Hey Deenajanāvana Rām",
    "Hey Parthipurishwara Rām",
    "Shri Rām (4)",
  ],

  "947": [
    "Shri Rām Rām Rām",
    "Yadunandana Hey Ghanashyām",
    "Shri Rām Jaya Rām Jaya Jaya Rām (x2)",
    "Shri Rām Jaya Rām Jaya Sāi Rām",
    "Raghupati Rāghava Rājā Rām",
    "Patita Pāvana Seetā Rām",
    "Shri Rām Jaya Rām Jaya Jaya Rām (x2)",
    "Shri Rām Jaya Rām Jaya Sāi Rām",
  ],

  "948": [
    "Shri Rām Rām Rāmā Raghuveerā Rām Rām",
    "Shri Rām Rām Rāmā Bharatāshrita Rām Rām",
    "Shri Rām Rām Rāmā Ranadheerā Rām Rām",
    "Shri Rām Rām Rāmā Sharanam Tava Rām Rām",
  ],

  "949": ["Shri Rām Shri Raghurāmā", "Shri Rām Seetā Rāmā", "* Shri Rāma Meghashyāmā", "Shri Rāma Sāi Rāmā"],

  "951": ["Shri Rāmachandra Jaya Jagannāthā", "Seetāpaté Jaya Raghunāthā", "* Patita Pāvana Deena Nāthā", "Parthipurishā Shri Sāi Nāthā"],

  "952": [
    "Shri Rāmachandrā Jaya Rāmachandrā",
    "Raghuveera Ranadheera Raghukula Rāmā",
    "* Dasharatha Nandana Dayābhi Rāmā",
    "Dānava Bhanjana Kodanda Rāmā",
    "Kalyāna Rāmā Kamaneeya Rāmā",
    "Raghuveera Ranadheera Raghukula Rāmā",
  ],

  "950": ["Shri Sāi Rāmā Haré (2)", "Shri Rāmachandrā Prabhu Rāmachandrā", "Sāi Rāmachandra Haré", "Shri Rāmachandra Haré (x2)"],

  "953": [
    "Sundara Rām Nayanabhi Rām",
    "Deena Bandhu Sāi Rām",
    "Jai Jai Rām (2) Sāi Rām",
    "Dānava Bhanjana Dayāmayā",
    "Dayāmayā Kripāmayā",
    "Alaka Niranjana Asura Nikantana",
    "Deena Bandhu Sāi Rām",
    "Jai Jai Rām (2) Sāi Rām",
  ],

  "954": [
    "Vaidehi Nāyaka Rām Vishwa Vidāyaka Rām",
    "Vibhishana Vandita Jaya Jaya Rām",
    "Rām Rām Jaya Sāi Rām",
    "Vibhuti Sundara Jaya Sāi Rām",
    "Rām Rām Jaya Rām",
    "Vishwa Vidāyaka Rām",
  ],

  "955": [
    "Yuga Avatārā Sāi Rāmā",
    "Rām Rām Rām",
    "Rām (3) Seetāpaté Shri Rām (x2)",
    "* Parama Niranjana Prashānti Rāmā",
    "Shri Raghurāmā Sāi Rāmā",
    "Rām Rām Rām",
  ],

  "1000": [
    "Āmar Krishna Gopāl Ré Āmar",
    "Shyāma Gopāl Ré",
    "Krishna Gopāl Shyām Gopāl Brahma Gopāl Ré",
    "Krishna Gopāl Shyām Gopāl",
    "Brahma Gopāl Ātmā Gopāl",
    "Krishna Gopāl (4)",
  ],

  "1001": [
    "Ānanda Rām Ānanda Shyām",
    "Nārāyanā Sāi Nārāyanā",
    "Nārāyanā Sāi Nārāyanā",
    "Prema Swarupā Brahmānandā",
    "Satchidānanda Hari Nārāyanā",
    "Nārāyanā Hari Nārāyanā (x2)",
    "Nārāyanā Sāi Nārāyanā",
  ],

  "1002": [
    "Antaryāmi Sāi",
    "Poorna Brahma Avatāri",
    "Hey Giridhāri Hridaya Vihāri",
    "Krishnā Kunja Vihāri",
    "Gopālā Leelādhāri",
    "Hey Gopi Mana Sanchāri",
    "Madhusudanā Murāri",
    "Hey Giridhāri Hridaya Vihāri",
    "Krishnā Kunja Vihāri",
  ],

  "1003": [
    "Āo (2) Nandalālā",
    "Sundara Shyāma Gopālā",
    "* Tum Hi Ho Bansidhāri Shyāmā",
    "Ayodhyā Pati Seetā Rāmā",
    "Parthi Bābā Karunā Nidhān",
    "Mākhan Chorā Yashoda Bālā",
  ],

  "1004": ["Āo Gopālā Giridhāri", "Āo Āo Antaryāmi", "Āo Āo Ānanda Sāi", "* Āo Āo Ātma Nivāsi", "Āo Āo Shānti Nivāsi"],

  "1005": [
    "Ātmā Rāmā Ānanda Ramanā",
    "Achyuta Keshava Hari Nārāyana",
    "* Bhava Bhaya Haranā Vandita Charanā",
    "Raghukula Bhooshana Rājiva Nayanā",
    "Ādi Nārāyana Ananta Shayanā",
    "Satchidānandā Sāi Nārāyana",
  ],

  "1006": [
    "Bansidharā Kanhaiyā Ghanashyāma Sundarā",
    "Giridhāri Gopa Bālā Brindāvana Vihārā",
    "* Govinda Mādhavā Haré",
    "Madhusudana Mukundā",
    "Rādhé Govinda Rādhé Gopāl",
    "Rādhé Govinda Rādhé",
  ],

  "1007": ["Barā Chittachorā Brindāvana Sanchārā", "Gopālā Gopālā Hey Murali Gopālā", "Govardhanodhāra Gopāl Bālā", "Gopi Manohara Rādhé Gopālā"],

  "1008": [
    "Barā Chittachora Mana Mohana",
    "Meerā Chittachora Mana Mohana",
    "Ayodhyā Ké Seetārām",
    "Brindāvana Ké Rādhéshyāma",
    "Shirdi Ké Sāi Bābā",
    "Parthi Ké Sathya Bābā",
  ],

  "1009": [
    "Bāla Sāi Parthi Sāi Nandana Kishorā",
    "Devaki Priya Gopāla Barā Chittachorā",
    "Barā Chittachorā",
    "Navanita Chorā",
    "Devaki Priya Gopāla Barā Chittachorā",
  ],

  "1010": [
    "Bhagavān Krishna Namo (2)",
    "Patita Pāvana Patita Pālana",
    "Rāmachandra Namo – Seetā",
    "* Kālāteetāya Shirdi Rupāya Sathya Sāi Namo",
    "Antaryāmi Namo Sarvāntaryāmi Namo",
  ],

  "1011": [
    "Bhaja Gopālā Bhaja Gopālā",
    "Pyāré Murāri Meré Sāi Nandalālā",
    "Nandalālā (3) Hey Nandalālā",
    "Bāla Gopālā Sāi Gopālā",
    "Murali Manohara Sāi Nandalālā",
    "Nandalālā (3) Hey Nandalālā",
  ],

  "1012": [
    "Bhaja Mana Rādhé Govindā",
    "Bhaja Mana, Rādhé (5) Govindā",
    "Bhaja Mana, Rādhé (9) Govindā",
    "Bhaja Mana Sāi Govindā",
    "Bhaja Mana, Sāi (5) Govindā",
    "Bhaja Mana, Sāi (9) Govindā",
  ],

  "1013": ["Bhaja Mana Rādhé Shyāma Gopālā", "Murali Manohara Rādhe Gopālā", "* Nanda Kishorā Natavara Lālā", "Parthi Vihārā Sāi Gopālā"],

  "1014": [
    "Bhaja Mana Shyāma Sundara Giridhāri",
    "Mora Mukuta Peetāmbaradhāri",
    "* Meerā Ké Prabhu Giridhara Nāgara",
    "Giridhara Nāgara Giridhara Nāgara",
    "Murali Manohara Shyāma Murāri",
  ],

  "1015": ["Bhajan Karo Manwā Govinda Haré", "Govinda Murāri Gopāla Murāri", "* Mathurā Nāthā Hey Giridhāri", "Rādhā Mādhava Hey Giridhāri (2)"],

  "1016": [
    "Bhajo Ghanashyāma Bhajo Murali Gopāla Bhajo",
    "Nanda Ké Lāl Bhajo Rādhé",
    "Giridhara Gopāl Mathurā Nāthā",
    "Kamala Nayana Hey Kaivalya Dhāmā",
    "Nanda Ké Lāl Bhajo Rādhé",
  ],

  "1017": [
    "Bhajo Rādhé Govinda Bhajo Shyām Gopāla",
    "Shyāma Gopāla Bhajo Murali Gopāla",
    "* Keshava Narahari Shyāma Gopāla",
    "Mādhava Murahara Murali Gopāla",
  ],

  "1018": [
    "Bhajoré Bhajo Sāi Haré Rām",
    "Govinda Gopāla Sāi Haré Rām",
    "Mādhava Mohana Sāi Haré Rām",
    "* Shri Madhusudana Bhava Bhaya Bhanjana",
    "Hari Prema Ānanda Se Bolo Rām Haré Rām",
    "Govinda Gopāla Sāi Haré Rām",
    "Mādhava Mohana Sāi Haré Rām",
  ],

  "1019": [
    "Bhajoré Sadā Bhajo Rām Krishna Govindā",
    "Bhajo Haré Deena Bandhu",
    "Krishna Rāmā Govindā",
    "Bhajoré Anātha Nāthā Sāi Rāmā Govindā",
    "Bhajo Haré Deena Bandhu",
    "Krishna Rāmā Govindā",
  ],

  "1020": [
    "Bhava Bhaya Haranā Vandita Charanā",
    "Jaya Rādhā Jaya Mādhavā Shauri",
    "Mangala Charanā Kalimala Dahanā",
    "Nārāyanā Keshavā",
    "Jaya Rādhā Jaya Mādhavā Shauri",
  ],

  "1021": ["Chandra Vadanā Kamala Nayanā", "Nārāyanā Sāi Nārāyanā", "Ananta Shayanā Deena Sharanyā", "Nārāyanā Sāi Nārāyanā"],

  "1022": [
    "Chittachora Muraliwālā",
    "Nandalāl Nanda Gopālā",
    "Nandalālā Nandalālā",
    "Brindāvana Shyāma Gopālā",
    "Yadunandana Gokula Bālā",
    "Mana Mohana Madana Gopālā",
    "Nandalālā Nandalālā",
    "Nandalāl Nanda Gopālā",
    "Nandalālā Nandalālā",
  ],

  "1023": [
    "Chittachorā Yashodā Ké Bāla",
    "Navanita Chora Gopāl",
    "Gopāl Gopāl Gopāl, Govardhana Dhara Gopāl",
    "Gopāl Gopāl Gopāl Gopāl,",
    "Govardhana Dhara Gopāl",
  ],

  "1024": [
    "Darsha Dikhāo Meré Sāi Nandalālā",
    "Dayā Karo Mujhé Krishna Gopālā",
    "* Devaki Nandana Deena Dayālā",
    "Mathurā Nāthā Madana Gopālā",
    "Sāi Nārāyana Sadā Kripālā",
    "Dayā Karo Mujhé Krishna Gopālā",
  ],

  "1025": [
    "Dayā Karo Hari Nārāyanā",
    "Karunā Sāgara Nārāyanā",
    "Pankaja Nayanā Pannaga Shayanā",
    "Shri Vāsudevā Nārāyanā",
    "Pāpa Vināshā Prashānti Vāsā",
    "Parthipuri Sāi Nārāyanā",
    "Paramānanda Nārāyanā",
  ],

  "1026": [
    "Deena Dayālā Sāi Parama Dayālā",
    "Rādhā Ramana Hari Govinda Gopālā",
    "Madhura Manohara Krishna Gopālā",
    "Rādhā Ramana Hari Govinda Gopālā",
    "Meerā Ké Prabhu Giridhara Bālā",
    "Brindāvana Ghana Madana Gopālā",
  ],

  "1027": ["Devaki Tanayā Dayānidhé (x2)", "Dayānidhé Kripānidhé (x2)", "* Darshana Dedo Deva Devā (x2)", "Deena Nāthā Sāi Nāthā"],

  "1028": ["Garuda Vāhana Nārāyanā", "Hey Shesha Shayanā Nārāyanā", "* Shri Lakshmi Ramanā Nārāyanā", "Hari Om (2) Nārāyanā"],

  "1029": [
    "Ghana Ghana Neela Vadana Ati Sundara",
    "Meghashyāmala Mādhava Murahara",
    "* Mandasmita Mukha Rādhā Manohara",
    "Govinda Gopāla Natavara Giridhara",
    "Meghashyāmala Mādhava Murahara",
  ],

  "1030": [
    "Ghanashyāmā Gopālā Ghanashyāmā Gopālā",
    "Mana Mohanā Jagan Mohanā",
    "Yadu Nandanā Gopāl",
    "Gopāla Gopāla Shyāma Gopāla",
    "Gopāla Gopāla Sāi Gopāla",
  ],

  "1031": [
    "Ghanashyāmā Sundarā",
    "Bansidhara Prabhu Krishna Kanhaiyā",
    "Tu Hi Meré Mā Bāp Bhaiyā",
    "Devaki Tanayā Hey Nandalālā",
    "Deena Bāndhavā Dwāraka Nāthā",
    "Rādhā Hridaya Nivāsā Haré Krishnā",
    "Madhusudanā Muralidharā",
    "Parthishwarā Sathya Sāishwarā",
  ],

  "1032": [
    "Giridhara Bālā Hey Nandalālā",
    "Devaki Nandana Shyāma Gopālā",
    "* Keshava Mādhava Shyāma Gopālā",
    "Shyāma Gopālā Shyāma Gopālā",
    "Bansidhara Hey Sāi Gopālā (x2)",
  ],

  "1033": ["Giridhara Gopālā Gopālā", "Sāi Gopālā (2)", "* Shirdipurishwara Sāi Shankara", "Parthipurishwara Sāi Shankara", "Sāi Shankara (2)"],

  "1034": [
    "Giridhara Gopālā Hey (2) Giridhara Gopālā",
    "Meerā Ké Prabhu Giridhara Nāgara",
    "Suradāsa Ké Shyāma Manohara",
    "Bhakton Ké Sathya Sāi Manohara",
  ],

  "1035": ["Giridhara Gopāla Muralidharā Haré", "Govinda Gopāla Dāmodarā", "Giridhara Gopāla Muralidharā Haré", "Govinda Gopāla Dāmodarā"],

  "1036": [
    "Giridhara Gopālā Sāi Giridhara Gopālā",
    "Parthipurishwara Shyām Gopālā",
    "* Meerā Ké Prabhu Giridhara Nāgara",
    "Pāhimām Ghanashyāma O Shyāmā (x2)",
  ],

  "1037": [
    "Giridhara Govinda Gopāla",
    "Ghanashyāma Nandalālā",
    "Mana Mohanā Madhusudanā Hey Mādhavā",
    "* Dāmodarā Janārdanā",
    "Muralidharā Mana Mohanā",
    "Namo Sāi Nārāyanāya Namo Satya Nārāyanāya",
    "Namo Satya Nārāyanāya (Sāi)",
  ],

  "1038": ["Giridhara Meré Gopālā", "Rādhé Gopālā Rādhé Gopālā", "* Nanda Kishorā Mākhana Chorā", "Yashoda Bālā Gopālā", "Rādhé Gopālā Rādhé Gopālā"],

  "1039": [
    "Giridhara Meré Shyāma Gopāla",
    "Shyāma Gopāl Sāi Gopāl",
    "* Govinda Govinda Gopi Gopāl",
    "Govardhanoddhāri Gokula Gopāl",
    "Shyāma Gopāl Sāi Gopāl",
    "* Mukunda Murahara Mohana Gopāl",
    "Murali Manohara Mādhava Gopāl",
    "Shyāma Gopāl Sāi Gopāl",
  ],

  "1040": [
    "Giridhāri Hey Nandalālā",
    "Yashodā Ké Bālā Tribhuvana Pālā",
    "Jagadoddhārā Gokula Bālā",
    "Murali Lolā Munijana Pālā",
    "Parthi Vihārā Sāi Gopālā",
  ],

  "1041": [
    "Giridhāri Lāl Shyām Gopāl",
    "Natavara Lāl Madana Gopāl",
    "Mathurā Nātha Krishna Gopāl",
    "Shri Madhusudana Sāi Gopāl",
    "Yashodā Ke Bāl Nanda Gopāl",
    "Eeshwarāmba Priya Sāi Gopāl",
  ],

  "1042": [
    "Gokula Nandana Gopāla Krishnā",
    "Govardhana Dhara Gopi Krishnā",
    "* Kamala Nayana Kamaneeya Krishnā",
    "Karunāmaya Shri Sathya Sāi Krishnā",
  ],

  "1043": [
    "Gopāl Rādhé Krishna Govinda Govinda Gopāl",
    "Gopāl Gopāl Gopāl",
    "Govinda Govinda Gopāl Rādhé Krishnā",
    "Govinda (2) Gopāl Sāi Krishnā",
    "Govinda Govinda Gopāl – Sāi",
  ],

  "1044": ["Gopālā Gopālā", "Giridhara Bālā Gopālā", "Gopālā Gopālā", "Goparipālā Gopālā"],

  "1045": [
    "Gopālā Giridhara Bālā",
    "Gopi Lolā Gokula Bālā",
    "Goparipālā Nārāyanā (x2)",
    "Nārāyanā Nārāyanā",
    "Goparipālā Nārāyanā",
    "Govinda Govinda Nārāyanā",
  ],

  "1046": ["Gopālā Rādhā Lolā", "Murali Lolā Nandalālā", "* Keshava Mādhava Janārdanā", "Vanamālā Brindāvana Bālā", "Murali Lolā Nandalālā"],

  "1047": [
    "Gopi Vallabha Shyāma Gopālā",
    "Shridharā Mādhavā Dāmodarā",
    "* Nanda Kishorā Navanita Chorā",
    "Smita Smita Sundara Sāi Gopālā",
    "Gokula Bālā Goparipālā",
    "Parthipurishwara Sāi Nandalālā",
  ],

  "1048": [
    "Govindā Gopālā Nārāyana Hari",
    "Nārāyana Hari Nārāyana Hari (x2)",
    "* Jagadoddhārā Nārāyana Hari",
    "Bhakta Uddhārā Nārāyana Hari",
    "Parthipurishā Nārāyana Hari",
    "Nārāyana Hari Nārāyana Hari (x2)",
  ],

  "1049": [
    "Govindā Gopāla Prabhu Giridhāri",
    "Govindā Gopāla Hridaya Vihāri",
    "* Nanda Kishorā Navanita Chorā",
    "Parthi Vihārā Barā Chittachorā",
    "Hridaya Vihārā Barā Chittachorā",
  ],

  "1050": [
    "Govindā (2) Bhaja Man Rādhé Govindā",
    "Rādhā Lolā Govindā Rāsa Vilolā Govindā",
    "* Krishna Keshavā Haré Mādhavā",
    "Govindā Jaya Govindā",
    "Haré Murāré Sāi Murāré Govindā Jaya Govindā",
  ],

  "1051": [
    "Govinda Govinda Gāyiyé",
    "Bhajo Rādhé Gopāla Krishna Gāyiyé",
    "Murali Manohara Gāyiyé,",
    "Bhajo Nanda Ké Lāla Prabhu Gāyiyé",
    "Giridhāri Giridhāri Gāyiyé,",
    "Māyi Meerā Ké Nātha Prabhu Gāyiyé (x2)",
  ],

  "1052": ["Govinda Govinda Govindā (x3)", "Venkata Ramanā Govindā", "Sankata Haranā Govindā", "Lakshmi Ramanā Govindā", "Bhaktoddharanā Govindā"],

  "1053": ["Govinda Govinda Govinda Bolo", "Shyām Sundara Venu Gopāl Bolo", "* Pārtha Sārathi Keshava Bolo", "Sanātana Sārathi Parthisha Bolo"],

  "1054": ["Govinda Haré Gopāla Haré", "Muralidhara Hey Ghanashyāma Haré", "* Meerā Ké Prabho Giridhara Nāgara – 4", "Charana Kamala Balihāri Ré"],

  "1055": [
    "Govinda Haré Gopāla Haré Hey Gopi Gopa Bālā",
    "Govinda Haré Gopāla Haré",
    "Hey Murali Gāna Lolā",
    "Govinda Haré Gopāla Haré",
    "Hey Rādhā Hridaya Lolā",
    "Govinda Haré Gopāla Haré",
    "Hey Nanda Gopa Bālā",
  ],

  "1056": [
    "Govinda Jai Jai Gopāl Jai Jai",
    "Rādhā Rāmana Hari Govinda Jai Jai",
    "Mukunda Mādhava Govinda Bol",
    "Keshava Mādhava Hari Hari Bol",
    "Rām Rām Bol (2)",
    "Krishna Krishna Bol (2)",
    "Keshava Mādhava Hari Hari Bol",
  ],

  "1057": [
    "Govindā Jaya Govindā",
    "Gokula Nandana Govindā",
    "Ghana Ghana Neelā Govindā",
    "Bāla Mukundā Govindā – (Sāi)",
    "Hey Ghanashyāmā Govindā",
    "Gokula Nandana Govindā",
  ],

  "1058": [
    "Govinda Krishna Jai Gopāla Krishna Jai",
    "Gopāla Bāla Bāla Rādhā Krishna Jai",
    "Krishna Jai (3) Krishna (4) Jai",
    "Gopikā Man Vihāri Pyāri",
    "Māyi Meerā Man Vihāri",
    "Madana Mohana Murali Dhāri",
    "Krishna Jai",
    "Krishna Jai (Bāla) Krishna Jai (Rādhā)",
    "Krishna Jai, Krishna (4) Jai",
  ],

  "1059": [
    "Govinda Krishna Jai Gopāla Krishna Jai",
    "Govinda Govinda Govindā Gopāla Jai",
    "Krishnā (2) Rādhā Krishnā",
    "Govinda Krishnā Gopāla Krishnā",
    "* Keshavā Mādhavā Sāi Nārāyanā,",
    "Govinda (2) Nārāyanā",
    "Nandalālā Brijabālā",
    "Hey Sāi Nārāyanā Krishnā Krishnā",
  ],

  "1060": [
    "Govinda Krishnā Jai Jai Gopāla Krishnā (x2)",
    "Govinda Govinda Krishnā Gopāla Krishnā",
    "Govinda Krishnā Jai Jai Gopāla Krishnā",
    "Govinda Govinda Krishnā Gopāla Krishnā",
    "Gopāla Gopāla Krishnā Govinda Krishnā",
  ],

  "1061": [
    "Govinda Mādhavā Gopālā Keshavā",
    "Jaya Nanda Mukundā Nanda Govindā",
    "Rādhé Gopālā",
    "* Giridhāri (2) Jaya Rādhé Gopālā",
    "Ghanashyāma Shyāma Shyāma",
    "Jaya Jaya Rādhé Gopālā",
    "Jaya Nanda Mukundā Nanda Govindā",
    "Radhé Gopālā",
  ],

  "1062": [
    "Govinda Mādhavā Gopāla Keshavā (x3)",
    "* Krishnā Krishnā Sāi Krishnā (Parthi)",
    "Krishnā Krishnā Gopālā",
    "Gokula Bālā Goparipālā",
    "Manamohanā Madhusudanā",
    "Jaya Mādhavā Jaya Keshavā",
  ],

  "1063": [
    "Govinda Murāri Mādhavā",
    "Govinda Gopāla Keshavā",
    "* Janārdanā Sāi Parthi Vihāri",
    "Govardhanodhāri Mādhavā",
    "Mādhavā Keshavā Hari Nārāyanā",
  ],

  "1064": [
    "Govinda Nāma Bhajo Gopāl Nām Bhajo",
    "Rādheshyāma Nāma Bhajo",
    "Rāmachandra Nāma Bhajo",
    "* Seetārām Nāma Bhajo Shrinivāsa Nāma Bhajo",
    "Shirdi Sāi Nām Bhajo Sathya Sāi Nāma Bhajo",
  ],

  "1065": [
    "Govinda Nārāyanā Gopāl Nārāyanā",
    "Govinda Govinda Nārāyanā",
    "Govinda Gopāla Nārāyanā",
    "Govinda Govinda Nārāyanā",
    "Sāi Govinda Gopāla Nārāyanā",
  ],

  "1066": [
    "Govinda Rādhé Krishna Govinda Govindā",
    "Gopāl Rādhé Krishnā Govinda Govindā",
    "Mohana Bāla Krishnā Govinda Govindā",
    "Parthi Nivāsā Krishnā Govinda Govindā",
  ],

  "1067": [
    "Govinda Rāmā Jai Jai Gopāla Rāmā",
    "Mādhava Rāmā Jai Jai Keshava Rāmā",
    "* Sulabha Rāmā Jaya Dulabha Rāmā",
    "Ek Tu Rāmā Jai Jai Aneka Tu Rāmā",
  ],

  "1068": [
    "Govinda Sāi Krishna Govinda Govinda",
    "Gopāl Rādhé Krishna Govinda Govinda",
    "Mohana Bāla Krishna Govinda Govinda",
    "Parthi Nivāsā Krishna Govinda Govinda",
  ],

  "1069": [
    "Guruvāyurapura Shri Hari Krishnā",
    "Nārāyana Gopāl",
    "Mukunda Mādhava Muralidhāri Nārāyana Gopāl",
    "Nārāyana Gopāl Sāi Nārāyana Gopāl – 3",
    "Govardhana Giridhāri Murāri Nārāyana Gopāl",
    "Mukunda Mādhava Muralidhāri Nārāyana Gopāl",
  ],

  "1070": [
    "Haré Krishnā Haré Krishnā",
    "Krishnā Krishnā Haré Haré",
    "Haré Rāmā Haré Rāmā Rāma Rāmā Haré Haré",
    "Haré Krishnā Haré Krishnā",
    "Krishnā Krishnā Haré Haré",
    "Haré Rāmā Haré Rāmā Rāmā Rāmā Haré Haré",
  ],

  "1071": [
    "Haré Krishna Haré Rām Sāi Rām Sāi Rām",
    "Gopāla Govinda Bolo Jai Sāi Rām",
    "Mādhava Mukunda Bolo Jai Sāi Rām",
    "Hey Parameshwara Parthipurishwara",
    "Dayā Karo Hey Sāi Rām",
    "Jai Jai Rām Sāi Rām Jai Jai Rām",
    "Jai Jai Rām Sāi Rām Jai Jai Rām Bolo",
    "Jai Jai Rām Sāi Rām Jai Jai Rām",
  ],

  "1072": ["Haré Murali Manohara Shyāmā", "Haré Gopi Manohara Shyāmā", "* Haré Devaki Nandana Shyāmā", "Haré Vāsuki Shayana Shyāmā"],

  "1073": ["Hari Ānandamaya Jaya Nārāyanā", "Vasudeva Nandana Rādhā Jeevana", "Paramānandā Mādhavā (x2)"],

  "1074": ["Hari Bolo Haré Rām Nām", "Hari Bolo Haré Krishna Nām", "Hari Bolo Sathya Sāi Rām", "Hari Bolo Haré Rām Nām"],

  "1075": [
    "Hari (6) Bolo",
    "Hari Hari Ké Guna Gāo",
    "Govinda (3) Bolo",
    "Govinda Ké Guna Gāo",
    "Sāi Rāma Bolo Sāi Shyāma Bolo",
    "Sāi Rāma Guna Gāo",
    "Govinda (3) Bolo",
    "Govinda Ké Guna Gāo",
  ],

  "1076": ["Hari Hari Nārāyanā", "Hari Govinda Nārāyanā", "Hari Gopāla Nārāyanā", "Shri Hari Nārāyanā", "Hrishikeshā Nārāyanā", "Parthishā Nārāyanā"],

  "1077": [
    "Hari Hari Om Shiva Shankara Hari Om",
    "Nārāyana Hari Om (x2)",
    "Keshava Hey Shiva Mādhava Hey",
    "Nārāyana Hari Om (x2)",
    "Paramātmā Antaryāmi",
    "Nārāyana Hari Om – Sāi (x3)",
  ],

  "1078": [
    "Hari Nāma Gāté Chalo Sāi Nāma Gāté Chalo",
    "Mādhava Govinda Govinda",
    "Mādhava Nāma Gāté Chalo",
    "* Govinda Vitthalā Gopāla Vitthalā",
    "Jaya Parthi Vitthalā Jaya Sāi Vitthalā (x2)",
    "Mādhava Govinda Govinda",
    "Mādhava Nāma Gāté Chalo",
  ],

  "1079": [
    "Hari Nārāyanā (3) Bhajoré",
    "Hari Nārāyanā Satya Nārāyanā",
    "Sāi Nārāyanā Bhajoré",
    "Shyāma Sundarā Madana Gopālā",
    "Satchidānandā Shyāma Gopāla",
    "Gopi Gopālanā (3) Bhajoré",
    "Hari Nārāyanā Satya Nārāyanā",
    "Sāi Nārāyanā Bhajoré",
  ],

  "1080": ["Hari Nārāyana Govindā Sāi Nārāyana Govindā", "Murali Mādhava Govindā", "Govardhanadhara Govindā"],

  "1081": ["Hey Giridhāri Hey Nandalāl", "Yashoda Nandā Hey Nandalāl", "* Rādhā Pyāré Hey Nandalāl", "Nandalāl Nandalāl"],

  "1082": [
    "Hey Govinda Hey Ananta Nanda Gopālā",
    "Mohana Muralidharā Shyāma Gopālā",
    "* Sundara Giridhāri Hari Natavara Lālā",
    "Mādhavā Keshavā Madana Gopālā",
    "Keshavā Mādhavā Madana Gopālā",
  ],

  "1083": [
    "Hey Kamala Vadana Sāi Rangā",
    "Kaivalya Pāndurangā (x2)",
    "Sāi Gopālā Ghana Ghana Neelā",
    "Kutila Kuntalā Tribhuvana Pālā",
    "Brahmā Vishnu Maheshwara Rupā (x2)",
    "Mayā Lolā Brahma Swarupā",
  ],

  "1084": ["Hey Mādhavā Hey Madhusudanā", "Dāmodarā Hey Muralidharā", "* Mana Mohanā Hey Yadunandanā", "Deenāvanā Bhava Bhaya Bhanjanā"],

  "1085": ["Hey Mādhavā Hey Yadunandanā", "Mana Mohanā Hey Madhusudanā", "Janārdanā Rādhā Jeevanā", "Gopālanā Gopi Ranjanā"],

  "1086": [
    "Hey Murali Mādhavā Rādhé Krishna Jai Gopāl",
    "Keshava Mādhava Yādhava Nandana",
    "Rādhé Krishna Jai Gopāl",
    "Nanda Nandana Rādhéshyām",
    "Indu Vadana Meghashyām",
    "Keshava Mādhava …",
    "Pānduranga Rādhéshyām",
    "Pandari Nātha Rādhéshyām",
    "Keshava Mādhava …",
  ],

  "1087": ["Hey Nanda Nanda Gopāla", "Ānanda Nanda Gopāla (x2)", "Hey Nanda Nanda Ānanda Nanda", "Yadunanda Nanda Gopāla"],

  "1088": ["Hey Nandalāl Gopālā", "Shyāma Gopāl Sāi Gopāl", "* Giridhara Gopālā Rādhé Gopālā", "Shyāma Gopāl Sāi Gopāl"],

  "1089": [
    "Hey Nandalālā Hey Brajabālā",
    "Mākhana Chorā Yashodā Ké Bālā",
    "Brindāvana Ké Gokula Bālā",
    "Daya Karo Hey Sāi Nandalālā",
    "Mākhana Chorā Yashodā Ké Bālā",
  ],

  "1090": [
    "Hey Shesha Shayanā Nārāyanā",
    "Vedā Bharanā Nārāyanā",
    "Bhava Bhaya Haranā Nārāyanā",
    "Pāvana Charanā Nārāyanā",
    "Nārāyanā Hari Nārāyanā (x3)",
  ],

  "1091": [
    "Hey Shyāma Sundarā Hey Sāi Sundarā",
    "Parthipurishwarā Hey Sāi Sundarā",
    "* Neela Megha Sundarā Neeraja Lochanā",
    "Brahmānda Nāyakā Hey Sāi Sundarā",
  ],

  "1092": ["Hey Vrajabāla Yadunanda Gopāla", "Shyāma Sundara Mohana Gopāla", "* Yashodā Ké Bāla Yadunanda Gopāla", "Gopāla Gopāla Gokula Bāla"],

  "1093": [
    "Hridaya Vihāri Sāi Murāri",
    "Parthi Vihāri Jaya Sāi Rām",
    "Ananta Shayanā Ādi Nārāyana",
    "Brindāvana Ghanashyāma Murāri",
    "Govinda Gopāla Ghanashyāma Ramani",
  ],

  "1094": [
    "Hridayāntaranga Sāi Nandanavana Vihāri",
    "Hridayāntaranga Sāi Parthipuri Vihāri",
    "Jaya Raghunandana Jaya Jaya Rām",
    "Jaya Yadu Nandana Jaya Ghanashyāma",
  ],

  "1095": [
    "Jagat Pālanā Jagan Mohanā",
    "Sundara Sāi Gopālanā",
    "Munijana Sevita Madhusudanā",
    "* Keshavā Govinda Janārdanā",
    "Shridharā Mādhavā Dāmodarā",
    "Atchyutā Ānantā Nārāyanā",
    "Shri Sāi Krishnā Nārāyanā (x2)",
    "Munijana Sevita Madhusudanā",
  ],

  "1096": [
    "Jagatpaté Hari Sāi Gopālā",
    "Jagata Uddhārā Sāi Nandalālā",
    "Mathurādipaté Krishna Gopālā",
    "Madhura Madhura Hey Gāna Vilolā",
    "Jagata Uddhārā Sāi Nandalālā",
  ],

  "1097": ["Jai Hari Krishnā (2) Govardhana Giridhāri", "Rādhā Mohana Rādhā Jeevana", "Manjula Kunja Vihāri"],

  "1098": ["Jai Jai Gopālā", "Sai Gopālā Rādhé Gopālā", "* Hey Nandalālā Gopi Lolā Gokula Bālā", "Brindāvana Sanchārā", "Sai Gopālā Rādhé Gopālā"],

  "1099": ["Jai (3) Mana Mohanā, Jai (3) Madhusudanā", "Mādhavā Keshavā", "Keshāvā Mādhavā", "Gopālā Gopālanā"],

  "1100": ["Janārdanā Nandalālā Govindā Gopālā", "Hare Krishnā (2)", "Krishnā Krishnā Gopālā", "Sāi Krishnā Gopālā"],

  "1101": [
    "Jaya Govindā Jaya Hari Om",
    "Mukhāravinda Murahari Om",
    "* Nanda Mukundā Murahari Om",
    "Satchidānanda Sāi Hari Om",
    "Mukhāravinda Murahari Om",
  ],

  "1102": ["Jaya Hari Govinda Nārāyanā", "Jaya Hari Gopāla Nārāyanā ---(x3)", "Nārāyanā Sāi Nārāyanā (x4)"],

  "1103": [
    "Jaya Jaya Jaya Hey Madhusudanā",
    "Jaya Brindāvana Mana Mohanā",
    "* Sundara Sāi Shirdi Vihāri",
    "Sundara Sāi Parthi Vihāri",
    "Rādhéshyām (4)",
    "Sāi Rām (4)",
    "Rādhéshyām (4)",
  ],

  "1104": ["Jaya Jaya Krishnā Yadu Nandanā", "Jaya Jaya Brindāvana Chandanā", "* Jaya Jaya Krishnā Mana Mohanā", "Jaya Jaya Sāi Gopālanā (x2)"],

  "1105": [
    "Jaya Jaya Prabhu Giridhāri Natavara Nandalālā",
    "Natavara Nandalālā Hey Giridhara Gopālā",
    "Hey Giridhara Gopālā (3)",
    "Jaya Mādhava Murahara Murali Manohara",
    "Giridhara Gopalā",
    "Hey Giridhara Gopālā (3)",
  ],

  "1106": [
    "Jaya Krishnā Kunja Vihāri",
    "Jaya Rādhā Hridaya Vihāri",
    "Jaya Yamunā Teera Vihāri",
    "Jaya Gopi Ké Hridaya Vihāri",
    "Jaya Mādhava Rāsa Vihāri",
    "Jaya Sāi Parthi Vihāri",
  ],

  "1107": [
    "Jaya Krishnā Madhusudanā",
    "Rādhā Krishnā Mana Mohanā",
    "Brindāvana Sanchāri Govardhana Giridhāri",
    "Parthi Vihāri Sāi Nārāyanā",
    "Nārāyanā Sāi Nārāyanā",
  ],

  "1108": [
    "Jaya Krishnā Mukunda Murāri",
    "Jaya Ānanda Brindā Vihāri (x2)",
    "* Ānanda Chandā Rādhé Govindā",
    "Rādhé Govindā Shyāma Mukundā",
    "Bāla Gopālā Shyāma Gopālā",
    "Parthi Vihārā Sāi Nandalālā",
  ],

  "1109": [
    "Jaya Murali Mādhavā Shauri",
    "Jaya Murali Mādhavā",
    "Madana Manohara Madhusudana Hari",
    "Brindāvana Ghanashyāma Murāri",
    "Hey Mana Mohana Kunja Vihāri",
    "Mādhava Mohana Gāna Priyā Sāi",
  ],

  "1110": ["Jaya Nandalālā Jai Jai Gopālā", "Rāsa Vilolā Rādhe Gopālā", "* Murali Lolā Munijana Pālā", "Gopi Lolā Gopāla Bālā"],

  "1111": [
    "Jaya Nārāyana Jaya Hari Om",
    "Sāi Nārāyana Jaya Hari Om",
    "Hari Om (4)",
    "Paramātmā Shiva Hari Om",
    "Parabrahmā Sāi Hari Om",
    "Hari Om (2) Jaya Hari Om",
  ],

  "1112": [
    "Jaya Sāi Nārāyanā Keshavā",
    "Jaya Sāi Nārāyanā Mādhavā",
    "* Jaya Sāi Nārāyanā Yādhavā",
    "Jaya Sāi Nārāyanā Rāghavā",
    "Jaya Sāi Nārāyanā Bāndhavā",
  ],

  "1113": ["Jaya Sāishā (2)", "Rādhā Mādhava Jaya Parthishā", "* Hridaya Sārathi Sāi Kanhaiyā", "Rādhé Govindā Prashānti Nilaya"],

  "1114": [
    "Jhuma (4) Bājé Ghunghariyā",
    "Sānvari Surata Nāché Kanhaiyā",
    "* Mora Mukuta Peetāmbara Khatiyā",
    "Madhura (2) Bājé Murali Adhariyā",
    "Sānvari Surata Nāché Kanhaiyā",
  ],

  "1115": [
    "Kalyāna Krishnā Kamaneeya Krishnā",
    "Kālinga Mardana Shri Krishnā",
    "Govardhana Giridhāri Murāri",
    "Brindāvana Sanchāri",
    "Brindāvana Ki Tulasi Mālā",
    "Peetāmbaradhāri Murāri",
  ],

  "1116": [
    "Kamala Nayana Prabhu Kamalāpate",
    "Kamalāsana Prabhu Kamalā Kāntā",
    "Kamala Nābha Prabhu Kamalā Ramanā",
    "Kamaleshwara Prabhu Kamalā Nāthā",
  ],

  "1117": [
    "Kānhā Kanhaiyā Bansi Adhariyā",
    "Brindāvana Ghana Rāsa Rachaiyā",
    "Gokula Nandana Hey Chitta Mohana",
    "Rādha Manohara Shyāmā",
    "Mānasa Chorā Nanda Kishorā",
    "Parthi Vihārā Sāi Gopālā Sāi Gopālā",
  ],

  "1118": [
    "Kānhā Kanhaiyā Nandalālā O Muraliwālā",
    "Aisé Bajāyé Murali Muraliyā Jādoo Bhari",
    "Hari Hari Govindā Hari Hari Mādhavā",
    "* Jaya (2) Seetārām, Jaya (2) Rādhéshyām",
    "* Hari (2) Nārāyanā, Hari (2) Nārāyanā",
  ],

  "1119": [
    "Kanhaiyā Teri Bansi Bajé Meré Lāl",
    "Nishdin Main Bhajoun Tero Nām",
    "* Hey Nandalālā Gopālā",
    "Gopālā Sāi Gopālā",
    "Govindā (2) Govinda Gopālā",
    "Sāi Krishna Sāi Rām",
  ],

  "1120": [
    "Karunā Sāgara Hey Nandalālā",
    "Murali Manohara Shyāma Gopālā",
    "* Giridhara Nāgara Sāi Gopālā",
    "Sāi Gopālā Sāi Gopālā",
    "Meerā Ké Prabhu Shyāma Gopālā",
  ],

  "1121": [
    "Karunāntarangā Karirāja Varadā",
    "Kamalesha Shri Sāi Rāmā",
    "Omkāra Rāmā Prashānti Rāmā",
    "Parabhrahma Sathya Sāi Rāmā - Hey",
    "Kamalesha Shri Sāi Rāmā",
  ],

  "1122": [
    "Kasturi Tilakam Nārāyanam",
    "Kamala Nayanam Nārāyanam",
    "* Guruvāyurapura Nārāyanam",
    "Kaliyuga Avatāra Nārāyanam",
    "Govinda Govinda Nārāyanam (x2)",
  ],

  "1123": ["Keshavā Mādhavā", "Govindā Gopālā", "Hari Bol Hari Bol Hari Hari Bol", "Keshava Mādhava Govinda Bol (x2)"],

  "1124": [
    "Keshavā Mādhavā Jaya Devā Madhusudanā",
    "Netra Kamala Dala Ateeva Manohara",
    "Antaryāmi Prabhu Parameshwara",
    "Māyā Mānusha Vesha Leelādhara (x2)",
    "Antaryāmi Prabhu Parameshwara",
  ],

  "1125": [
    "Krishna Bhajo (2) Murali Govinda Bhajo",
    "Rādhé Govinda Bhajo Rādhé Gopāl Bhajo",
    "* Giridhāri Shyām Bhajo Sāi Govinda Bhajo",
    "Madhuvana Sanchāri Shyām Gopāl Bhajo (x2)",
  ],

  "1126": [
    "Krishna Gopālā Yadunandanā",
    "Venu Vinodana Mana Mohanā",
    "* Pankaja Lochana Nārāyanā",
    "* Mora Mukuta Gokula Ramanā",
    "Ghanashyāmā Ānanda Govindā",
    "Krishna Murāri Madhusudanā",
  ],

  "1127": [
    "Krishna Kanhaiyā Bansi Bajaiyā",
    "Pār Karo Meré Jeevan Naiyā",
    "Nandaji Ké Lālā Murali Gopālā",
    "Bhakton Ké Sāi Deena Dayālā",
    "Pār Karo Meré Jeevana Naiyā",
  ],

  "1128": [
    "Krishna Kanhaiyā Krishna Kanhaiyā",
    "Natavara Nanda Kumāra Kanhaiyā",
    "Brindāvana Ké Bansi Adhariyā",
    "Rādhā Manohara Rāsa Rachayyā",
    "Giridhara Nāgara Shyāma Kanhaiyā",
    "Shri Madhusudana Sāi Kanhaiyā",
  ],

  "1129": [
    "Krishna Kanhaiyā Sapné Mé Āo",
    "Hey Manamohana Murali Sunāo",
    "Ateeva Manohara Darsha Dikhāo",
    "Hey Giridhāri Man Ko Lubhāo",
    "Vyākula Man Ki Pyāsa Bujhādo",
    "Govinda (3) Gāo",
  ],

  "1130": ["Krishna Krishna Govinda Nārāyanā", "Krishna Rāma Govinda Nārāyanā", "Sāi Rāma Govinda Sāi Shyāma Gopāla", "Sāi Krishna Govinda Nārāyanā"],

  "1131": [
    "Krishnā (2) Mujhé Darshan Do Krishnā",
    "Krishnā Oh Krishnā Mujhé Darshan Do Krishnā",
    "Giridhāri Murāri Krishnā",
    "Ghanashyāma Murāri Krishnā",
    "Krishnā (4) Sathya Sāi Murāri Krishnā",
    "Ab Ā Jāo Krishnā",
    "Mujhé Darshan Do Krishnā",
  ],

  "1132": [
    "Krishna Krishna Mukunda Janārdanā",
    "Krishna Govinda Nārāyanā Haré",
    "Achyudānanda Govinda Mādhavā",
    "Satchidānanda Nārāyanā Haré",
    "Rādhé Govinda Bhajo Rādhé Gopālā (x2)",
    "Shyāma Sundara Madana Mohana Rādhé Gopālā",
    "Murali Manohara Rādhé Gopālā",
    "Shankha Chakra Gadādhara Rādhé Gopālā",
    "Murali Manohara Rādhé Gopālā",
  ],

  "1133": [
    "Krishnā Krishnā Rādhé Krishnā",
    "Rādhé Krishnā (3) Rādhé",
    "Bāndhé Pāyaliyā Rādhā Āyi",
    "Nāche Sanga Sanga Krishna Kanhāyi",
    "Gopi Rāsa Rachāyi",
  ],

  "1134": [
    "Krishnā Krishnā Yaduvara Krishnā",
    "Murahara Keshavā Yādhavā Mādhavā",
    "* Murali Manohara Krishna Murāri",
    "Krishna Murāri Shyāma Murāri",
    "Murahara Keshavā Yādhavā Mādhavā",
  ],

  "1135": [
    "Krishna Mādhava Mādhava Krishnā",
    "Krishna Mādhava Sāi Haré",
    "Brindāvana Sanchāri Shyāma Gopālā",
    "Jaya Madhusudana Jaya Nandalālā",
    "Jhulanā Jhulé Meré Sāi Nandalālā",
  ],

  "1136": [
    "Krishna Mukunda Govinda Giridhara",
    "Murali Mohana Nārāyanā",
    "Parthi Purandara Nārāyanā",
    "Mādhava Shri Hari Mandara Giridhāri",
    "Govinda Murahari Nārāyanā – Haré",
    "Parthi Purandara Nārāyanā (x2)",
  ],

  "1137": [
    "Krishna Murāri Bhava Bhaya Hāri",
    "Hey Giridhāri Gopāla",
    "Parthi Vihāri Hridaya Vihāri",
    "Bhakta Sakhā Bhagavān",
    "Bhakta Sakhā Bhagavān (x2)",
  ],

  "1138": [
    "Krishna Murāri Gopālā",
    "Krishna Krishna Sāi Gopālā",
    "Nanda Kumārā Gopālā Navanita Chorā Gopālā",
    "Nāda Swarupā Gopālā Nanda Nandanā Gopālā",
    "Nanda Kumārā Navanita Chorā",
    "Gopālā Sāi Gopālā",
  ],

  "1139": ["Krishna Murāri Muralidhāri", "Gopi Vallabha Giridhāri", "Hridaya Vihāri Leelādhāri", "Parthi Vihāri Sāi Murāri"],

  "1140": [
    "Krishnā Rāmā Govindā Gokula Nandana Gopālā",
    "Rāmā Krishnā Govindā Jaya Brindāvana Gopālā",
    "Sāi Krishnā Govindā Parthipurishwara Gopālā",
    "Gopālā Sāi Gopālā",
    "Gopi Manohara Gokula Bālā Sāi Murāri",
  ],

  "1141": ["Krishnā Rāmā Govinda Nārāyanā", "Keshavā Mādhavā Hari Nārāyana", "* Shri Venu Gopāl Krishnā (x2)", "Mādhavā Madhusudanā Nārāyanā"],

  "1142": [
    "Krishna Sāi Krishnā Giridhara Bālā",
    "Giridhara Bālā",
    "Govardhana Sāi Yadukula Bālā",
    "* Nanda Nandanā Murali Mohanā",
    "Gopālanā Sāi Ranganā",
    "Madhusudana Mana Mohanā Parthi Nandanā",
  ],

  "1143": [
    "Krishna Shri Hari Krishnā",
    "Govindā Gopālā Krishnā Krishnā",
    "* Nanda Mukundā Govindā",
    "Navanita Chorā Gopālā",
    "Govindā Gopālā Gokula Nandana Gopālā",
    "Krishnā Shri Hari Krishnā",
    "Krishnā Shri Sāi Krishnā",
  ],

  "1144": [
    "Krishnā Shri Krishnā",
    "Gopāl Bālā Jaya Krishnā",
    "* Jaya Brindāvana Shyāma Murāri",
    "Jaya Parthishwara Sāi Murāri",
    "Parthi Vihāri Sāi Murāri",
  ],

  "1145": [
    "Kshirābdi Shayanā Nārāyanā",
    "Shri Lakshmi Ramanā Nārāyanā",
    "Nārāyanā Hari Nārāyanā",
    "Kshritajana Paripāla Nārāyanā",
    "Vaikunta Vāsā Nārāyanā",
    "Vaidehi Mohana Nārāyanā",
    "Nārāyanā Hari Nārāyanā",
    "Narahara Rupā Nārāyanā",
  ],

  "1146": ["Mādhavā Gopālā", "Madhusudana Hari Giridharā", "Mukunda Mādhava Parthi Vihārā", "Muralidhara Hari Sundarā"],

  "1147": ["Mādhavā Gopālā", "Nanda Nandana Ghanashyāma Gopālā", "* Rādhā Ramana Brindāvana Bālā", "Murali Manohara Shyāma Gopālā"],

  "1148": [
    "Mādhavā Haré Krishnā Madhura Mohanā",
    "Gokula Bālanā Devaki Nandanā",
    "Venu Vinodanā Pāpa Vināshanā",
    "* Rādhika Jeevanā Rājiva Nayanā",
    "Nanda Sunandanā Gopi Ramanā",
    "Venu Vinodanā Pāpa Vināshanā",
  ],

  "1149": [
    "Mādhava Mohana Shyāma Gopālā",
    "Muralidhara Mukunda Gopālā",
    "Dwāpara Yuga Mé Krishna Gopālā",
    "Meerā Ké Prabhu Giridhara Bālā",
    "Shyāma Manohara Hey Nandalālā",
    "Parthipurishwara Sāi Gopālā",
  ],

  "1150": [
    "Mādhava Murahara Murali Gopālā",
    "Jaya Govindā Jaya Gopālā",
    "Parthipuranjana Parama Dayāgana",
    "Deenajanāvana Sāi Gopālā",
    "Jaya Govindā Jaya Gopālā",
  ],

  "1151": ["Madhura (2) Murali Ghanashyāmā", "Mathurādipaté Rādhéshyāmā", "Suradāsa Prabhu Hey Giridhāri", "Meerā Ké Prabhu Hridaya Vihāri"],

  "1152": [
    "Madhusudanā Haré Mādhavā",
    "Shri Vāsudevā Janārdanā (x2)",
    "Hari Keshavā Nārāyanā",
    "Shri Hari Govinda Mana Mohanā",
    "Janārdanā Jagat Pālanā",
    "Deenāvanā Dukha Bhanjanā",
    "Aravinda Lochana Ānanda Rām",
    "Shri Vāsudevā Janārdanā (x2)",
  ],

  "1153": [
    "Madhusudana Krishnā Kunja Vihāri",
    "Rādhā Mādhava Shyāma Giridhāri",
    "Sāi Krishnā O Sāi Krishnā",
    "Mandara Giridhara Mādhava Mohana",
    "Dwāraka Nāthā Gopi Manohara",
    "Prāna Sakhā Prabhu Bhava Dukha Bhanjana",
    "Rādhā Mādhava Shyāma Giridhāri",
    "Sāi Krishnā O Sāi Krishnā",
  ],

  "1154": [
    "Madhusudanā Krishnā Mādhava Shyām",
    "Kunja Vihāri Hridaya Vihāri",
    "Prashānti Vihāri Gopāla",
    "Kaustubha Shreedhara Chavi Ati Sundara",
    "Netra Kamala Dala Rādhā Manohara",
    "Yuga Avatāra Tum Ho Parameshwara",
    "Bhajana Karoun Terā Sadā Nirantara (x2)",
  ],

  "1155": [
    "Madhusudanā Muralidharā",
    "Madhura Madhura Hey Giridhara Bālā",
    "Mādhavā Madhusudanā",
    "Hridayāntarangā Shri Sāi Rangā",
    "Shri Rangā Rangā Puttaparthi Rangā",
    "Mādhavā Madhusudanā",
  ],

  "1156": [
    "Madhuvana Ké Muraliwālā",
    "Nācho (3) Nandalālā",
    "Nandalālā (2)",
    "Nācho (3) Nandalālā",
    "Gopi Manohara Gopāla Bālā",
    "Parthipurishwara Hey Sāi Nāthā",
    "Nācho (3) Nandalālā",
  ],

  "1157": ["Madhuvana Murali Shyāma Murāri", "Sānvariyā Moré Rāsa Vihāri", "Gokula Nandana Hey Giridhāri", "Deenana Ké Tum Bhava Bhaya Hāri (x2)"],

  "1158": ["Madhuvana Sanchāri Shyāma Murāri", "Hey Madhusudana Murali Dhāri", "* Rādhā Mādhava Mayura Mukutadhara", "Mathurā Nāthā Sāi Giridhāri"],

  "1159": ["Mana Mandir Mé Āo Giridhāri", "Nishdin Barsat Nayana Hamāré", "* Suradās Ké Shyāma Murāri", "Akhiyan Teré Darsha Ki Pyāsi (x2)"],

  "1160": [
    "Mana Mohana Murali Gopālā",
    "Mana Mohana Shyāma Gopālā",
    "Ghanashyāma (4)",
    "Hey Giridhāri Hridaya Vihāri",
    "Krishna Murāri Gopāl",
    "Krishna Murāri Gopāl Sāi Murāri Gopāl",
  ],

  "1161": [
    "Mana Mohana Murali Gopālā",
    "Jaya Govinda Rādhé Gopālā",
    "Pandarināthā Jaya Hari Vitthalā",
    "Govardhana Giridhāri Gopālā",
    "Govinda Rādhé Gopālā",
  ],

  "1162": [
    "Mana Mohana Shyāma Murāri",
    "Hey Giridhāri Hridaya Vihāri",
    "Brindāvana Sanchāri",
    "* Gāna Vilolā Murāri Gopālā",
    "Sundara Shyāma Murāri",
    "Gopi Lolā Gokula Bālā",
    "Kamala Vadana Sāi Gopālā",
  ],

  "1163": [
    "Mandira Mé Āo Mādhavā",
    "Mādhavā Keshavā",
    "* Ādi Nārāyana Ananta Sāi",
    "Āo Āo Hridaya Nivāsi",
    "Rādhā Lolā Rakumāyi Vitthalā",
    "Rangā Pāndurangā Vitthalā",
  ],

  "1164": [
    "Mathurādipaté Krishna Mukundā",
    "Madhusudana Ghanashyāma Mukundā",
    "* Venu Vilolana Parthi Ramanā",
    "Yadukula Bhooshana Rājiva Lochanā",
    "Parthipurishwara Jaya Mana Mohanā",
    "Madhusudana Ghanashyāma Mukundā",
  ],

  "1165": [
    "Mukunda Murāri Murāri Gopāl",
    "Hey Antaranga Sāi Hey Sāi Nandalāl",
    "* Prashānti Nivāsi Nivāsi Nandalāl",
    "Hey Antarātmā Jyoti Hey Jyoti Nandalāl",
    "Satyam Shivam Shivam Sundaram",
    "Hey Sundara Rupā Hey Sāi Nandalāl",
  ],

  "1166": [
    "Murali Krishnā Mukunda Krishnā",
    "Mohana Krishnā Krishnā Krishnā",
    "Gopi Krishnā Gopāla Krishnā",
    "Govardhana Dhara Krishnā Krishnā",
    "Rādhā Krishnā Bāla Krishnā",
    "Rāsa Vilolā Krishnā Krishnā",
    "Shirdi Krishnā Parthi Krishnā",
    "Shri Sathya Sāi Krishnā Krishnā",
  ],

  "1167": [
    "Murali (3) Ghanashyām",
    "Mohana Murali Sāi Shyāma",
    "* Kanakāmbaradhara Karunā Sāgara",
    "Meerā Ké Prabhu Giridhara Nāgara",
    "Parthipurishwara Sāi Shyām",
  ],

  "1168": ["Muralidhara Mukunda Murāri", "Govardhana Giridhāri Murāri", "Māyā Nātaka Sutra Dhāri (x2)", "Māyā Mānusha Vesha Dhāri"],

  "1169": ["Muralidharā Muraharā Natavarā", "Gopijana Priya Giridharā", "* Brindāvana Sanchārā Jagadoddhārā", "Yashodā Bālā Nanda Kumārā"],

  "1170": [
    "Murali Vinodana Munijana Mohana",
    "Natana Manohara Gopālā",
    "Nitya Niranjana Hridaya Sanjeevana",
    "Deenajanāvana Gopālā",
    "Natana Manohara Gopālā",
  ],

  "1171": [
    "Nācho Gopāl Nācho Gopāl",
    "Rumjhum Rumjhum Nācho Gopāl",
    "Venu Vilolā Vijaya Gopālā",
    "Nācho Gopāla Giridhara Lāl",
    "* Nāch Ab Nācho Natakhata Gopālā",
    "Giridhara Gopālā Sāi Nandalālā",
  ],

  "1172": [
    "Nācho (3) Nandalālā",
    "Nandalālā Nandalālā",
    "Rumajhuma Pāyala Ghunghroo Bajé",
    "Ghunghroo Bajé Sāi Murali Bajé",
    "Nandalālā Nandalālā",
    "* Narahari Rupā Nārāyanā",
    "Nārāyanā Sāi Nārāyanā",
    "Nandalālā Nandalālā",
  ],

  "1173": [
    "Nanda Gopāl (2)",
    "Nanda Mukundā Shyāma Gopāl",
    "* Rādhā Mādhava Rādhé Gopāl",
    "Bhakta Uddhārā Parthi Gopāl",
    "Sāi Gopāl Sāi Gopāl",
    "Sāi Gopāl Sathya Sāi Gopāl",
  ],

  "1174": ["Nanda Ké Dulāré Yashodā Ké Pyāré", "Govinda Murāré Deenon Ké Sahāré", "* Karunā Sāgara Giridhara Nāgara", "Murali Manohara Sāi Murāré"],

  "1175": [
    "Nanda Ké Lāl Bhajo Murali Gopālā",
    "Rādhéshyām (2)",
    "Giridhāri Shyām Bhajo Gopi Gopālā",
    "Meerā Ké Nātha Prabhu Hey Nandalālā",
    "Rādhéshyām (2)",
  ],

  "1176": [
    "Nandā Ké Lāla Murali Gopāl",
    "Giridhāri Govinda Rādhé Gopāl",
    "Nandā Mukundā Rādhé Gopāl",
    "Rādhé Jai Rādhé Jai Rādhé Gopāl",
    "Rādhé (3) Gopāl",
    "Rādhé Rādhé Murali Gopāl",
    "Rādhé Rādhé Sāi Gopāl (x2)",
  ],

  "1177": ["Nanda Kishorā Bāla Gopāl", "Navanita Chorā Hridaya Vihār", "Sāi Gopāl Sathya Sāi Gopāl", "Sāi Gopāl Bhajo Murali Gopāl"],

  "1178": [
    "Nanda Kishorā Navanita Chorā Rādhé Gopālā",
    "Rāsa Vilolā Rādhé Gopālā Hey Nandalālā",
    "Nandalālā Nandalālā",
    "Goparipālā Gopi Lolā Giridhara Gopālā",
    "Murali Lolā Munijana Pālā Hey Nandalālā",
    "Nandalālā Nandalālā",
  ],

  "1179": ["Nanda Kishorā Nārāyanā", "Navanita Chorā Nārāyanā", "Narahari Rupā Nārāyanā", "Nāda Swarupā Nārāyanā"],

  "1180": [
    "Nanda Mukundā Navanita Chorā",
    "Narahari Rupā Nārāyanā",
    "Nādabrahma Hari Sāi Nārāyanā",
    "Satya Nārāyana Nārāyanā",
    "Sāi Nārāyana Nārāyanā",
  ],

  "1181": [
    "Nanda Nanda Govinda Nācho Nācho Gopāla",
    "Nandalāl Govinda Lāl (Sāi) - Hey",
    "Nandātmajā Hari Nārāyanā - (Sāi)",
    "Sadā Sukhadāyi Nārāyanā (Ānanda)",
    "Dwārakamāyi Nārāyanā",
    "Parthipurishwara Nārāyanā",
  ],

  "1187": [
    "Nandā Nandana Hari Govinda Gopālā",
    "Ghanashyāma Mana Mohanā (x2)",
    "Gopi Lolā Gopālā",
    "Gokula Bālā Gopālā",
    "Hey Nandalālā Gopālā",
    "Ghanashyāma Mana Mohanā (x2)",
  ],

  "1182": [
    "Nanda Nandanā Navanita Chorā",
    "Gokula Bālā Hey Gāna Vilolā",
    "Meerā Ké Nātha Prabhu Shyāma Gopālā",
    "Vanamāli Giridhāri Sāi Gopālā",
    "Gokula Bālā Hey Sāi Gopālā",
    "Mathurā Nāthā Prabhu Krishna Gopālā",
    "Vanamāli Giridhāri Sāi Gopālā",
    "Gokula Bālā Hey Sāi Gopālā",
  ],

  "1183": ["Nandalālā Nandalālā", "Nācho (3) Nandalālā", "Navanita Chorā Hey Bāla Gopālā", "Gopi Manohara Gopāla Bālā"],

  "1184": [
    "Nandalālā Shyāma Sundara Nandalālā",
    "Kaustubhadhāri Vanamālādhara",
    "Shyāmala Madana Gopālā",
    "Rādhéshyāma (2) Sāi Shyāma (2)",
    "Rādhā Mādhava Madana Gopālā",
    "Mathurā Nātha Gopālā",
    "Parthi Nandana Hridaya Sanjeevana",
    "Shyāmala Madana Gopālā",
  ],

  "1185": ["Nandalālā Yadu Nandalālā", "Brindāvana Govinda Lālā", "Rādhā Lolā Nandalāalā", "Rādhā Mādhava Nandalālā"],

  "1186": ["Nandānanda Mukunda Gopālā", "Murali Mohana Shyāma Gopālā", "Shyāma Gopāla Ghanashyāma Gopālā", "Murali Mohana Shyāma Gopālā"],

  "1188": [
    "Nārāyan (2) Bhaja Mana Nārāyan",
    "Shri Hari Mādhava Nārāyan",
    "Bhaja Mana Nārāyan",
    "Murali Shyām Mohana Shyām",
    "Murali Mohana Shyām",
    "Meré Rām Hey Ghanashyām Sāi Satguru Rām",
  ],

  "1189": [
    "Nārāyanā Hari Nārāyanā",
    "Nārāyanā Hari Om",
    "Nārāyanā Hari Divya Swarupā",
    "Nārāyanā Hari Jyoti Swarupā",
    "Sāishwarā Hari Om – Sathya",
    "Nārāyanā Hari Om",
  ],

  "1190": [
    "Nārāyanā Hari Nārāyanā",
    "Narahari Rupā Nārāyanā",
    "Vaikunta Vāsā Namo Nārāyanā",
    "Vaidehi Mohana Nārāyanā",
    "Nārāyanā Namo Nārāyanā",
    "Nārāyanā Veda Pārāyanā",
  ],

  "1191": [
    "Natavara Krishnā (2) Rādhé Nandalālā",
    "Haré Mādhavā Haré Gopikā Lolā – Har",
    "Krishnā Ghana Ghana Neelā",
    "Krishnā Gokula Bālā",
    "Haré Mādhavā Haré Gopikā Lolā – Har",
  ],

  "1192": ["Natavara Lāl Giridhara Gopāl", "Meerā Prabhuvara Shyāma Gopāl", "* Veda Sāra Jeevana Kā Dhāra", "Gopi Manohara Hridaya Vihār"],

  "1193": [
    "Nityānandā Satchidānandā",
    "Hari (3) Om Nārāyanā",
    "Premaswarupa Premānandā (x2)",
    "Hari (3) Om Nārāyanā",
    "Nārāyanā Nārāyanā",
    "Nārāyanā Sāi Nārāyanā",
    "Hari (3) Om Nārāyanā",
  ],

  "1194": ["Padmanābhā Nārāyanā", "Parthi Vāsā Nārāyanā (x2)", "Nārāyanā Hari Nārāyanā", "Nārāyanā Satya Nārāyanā", "Nārāyanā Sāi Nārāyanā"],

  "1195": [
    "Paramānanda Govinda Gopāla Jai",
    "Sāi Nanda Mukundā Gopāl Jai",
    "Sāi Krishna Haré Sāi Rāmā Haré",
    "Sāi Keshava Mādhava Mohana Haré",
    "* Mukhāravinda Gopāla Jai",
    "Satchidānanda Govinda Gopāla Jai",
    "Sāi Nandā Mukundā Gopāla Jai",
  ],

  "1196": [
    "Parthi Nandana Rādhéshyāmā",
    "Āo Āo Sāi Ghanashyāmā",
    "Brindāvana Ghanashyāma Govindā",
    "Madhura Manohara Mukhāravindā",
    "Hey Giridhāri Sāi Murāri",
    "Āo Āo Sāi Ghanashyāmā",
  ],

  "1197": [
    "Parthi Nivāsi Krishnā Hey Ghanashyāmā",
    "Rādhā Mādhava Sundara Shyāmā",
    "* Hey Jagan Mohana Gokula Bālā",
    "Sāi Gopālā Rāsa Vilolā",
    "Meerā Ké Prabhu Shyāma Gopālā",
    "Govinda Giridhara Hey Chittachorā",
  ],

  "1198": [
    "Parthishwarā Sathya Sāishwarā",
    "Dayā Karo Sāi Nārāyanā",
    "Shri Sāi Nārāyanā - Sāi",
    "Bhavasāgaroddhāra Bhuvanāvanā",
    "Sharanāgatatrāna Nārāyanā",
    "Dayā Karo Sāi Nārāyanā",
    "Shri Sāi Nārāyanā – Sāi",
  ],

  "1199": [
    "Pranava Swarupā Hari Om Sāi",
    "Nārāyanā Hari Om",
    "Sathya Sāishwarāya Hari Om",
    "Yādhavāya Mādhavāya Govindāya Namah Om",
    "Paramātmā Rupāya Hari Om",
    "Hari Om (2)",
    "Sathya Sāishwarāya Hari Om",
  ],

  "1200": [
    "Prema Se Gāo Mangala Nāma",
    "Govinda Gopāla Bolo Hari Nāma",
    "Prema Ké Sindhu Deena Ké Bandhu",
    "Karunāmayā Sāi Nayanabhi Rāmā",
    "Govinda Gopāla Bolo Hari Nāma",
    "Haré Krishna Haré Rām Sāi Rām Sāi Rām (x3)",
  ],

  "1201": [
    "Purnāvatārā Sāi Mahādeva Sāi Nārāyanā",
    "Nārāyanā Sāi Nārāyanā (x2)",
    "* Prema Swarupa Nārāyanā",
    "Prashānti Niketana Nārāyanā",
    "Pānduranga Nārāyanā",
    "Parthipurishā Nārāyanā",
  ],

  "1202": ["Pyāré Nandalāl Darshana Dijo", "Yashodā Ké Bāl Darshana Dijo", "* Natavara Lāl Darshana Dijo", "Giridhara Bāl Darshana Dijo"],

  "1203": ["Rādhā Ké Natavara Lāl Kanhaiyā", "Gokula Bālā Goparipālā", "* Nanda Kumārā Rāsa Vilolā", "Meerā Ké Prabhu Nandalāl Kanhaiyā"],

  "1204": [
    "Rādhā Krishnā Gopālā",
    "Rāsa Vihāri Gopālā",
    "Brindāvana Ké Gopālā",
    "Bhaktajana Priya Gopālā",
    "Nanda Mukundā Gopālā",
    "Navanita Chorā Gopālā",
    "Goparipālā Gopālā",
    "Govinda Govinda Gopālā",
  ],

  "1205": ["Rādhā Krishnā Karunā Lolā Rādhé Govindā", "Rādhé Govindā Murali Govindā", "Jai Jai Rādhé Rādhé Govindā Murali Govindā"],

  "1206": ["Rādhā Mādhava Gopālanā", "Govinda Gopāla Nārāyanā", "Nārāyanā Sāi Nārāyanā", "Nārāyanā Satya Nārāyanā", "Nārāyanā Veda Pārāyanā"],

  "1207": ["Rādhā Mādhava Madana Gopālā", "Nanda Mukundā Natavara Lālā", "* Mathurā Nāthā Deena Dayālā", "Sāi Govindā Giridhara Bālā"],

  "1208": ["Rādhā Mānasa Hey Govindā", "Murali Manohara Shri Govindā", "* Krishna Murāri Jaya Govindā", "Parthi Vihāri Sāi Govindā"],

  "1209": [
    "Rādhā Manohara Natavara Lāl",
    "Yashodā Ké Nandana Rādhé Gopāl",
    "Rādhé Gopāl (2)",
    "* Meerā Ké Prabhu Nācho Gopāl",
    "Eeshwārāmba Nandana Sāi Gopāl",
    "Parthi Manohara Krishna Gopāl",
    "Govinda Gopāla Sāi Nandalāl",
    "Sāi Nandalāl (2)",
  ],

  "1210": ["Rādhā Manohara Shauri Brindāvani Sanchāri", "Omkāramaya Sathya Sāi", "Vedānta Priya Shubhadāyi", "Paramānanda Govinda Gopāla Parthi Sāi"],

  "1211": [
    "Rādhā Mukunda Haré Pāhi Govinda Haré",
    "Vedānta Sāram Haré Nanda Nandanam Haré",
    "* Gokula Pālam Haré Lokābhirāmam Haré",
    "Krishnā Mukunda Haré Krishna Govinda Haré",
  ],

  "1212": [
    "Rādhé Govinda Gopālā Jaya",
    "Govinda Rādhé Gopālā",
    "Govinda (2) Gopālā (x2)",
    "* Krishnā Madhusudanā Madhusudanā Krishnā",
    "Govinda (2) Gopālā",
  ],

  "1213": ["Rādhé Govinda Haré Murāré", "Shyāma Mukunda Haré Murāré", "* Krishna Govinda Haré Murāré", "Sāi Mukunda Haré Murāré"],

  "1214": [
    "Rādhé Govindā Jai Jai Rādhé Gopālā",
    "Deena Nāthā Govindā Anātha Nātha Gopālā",
    "* Rādhā Lolā Govindā Rāsa Vilolā Gopālā",
    "Govindā Jaya Govindā Gopālā Sāi Gopālā",
  ],

  "1215": [
    "Rādhé Govinda Krishna Murāri",
    "Sathya Sāi Mukunda Murāri",
    "* Nandā Ānanda Rādhé Govindā",
    "Rādhé Govindā Sāi Mukundā",
    "Sathya Sāi Mukunda Murāri",
  ],

  "1216": [
    "Rādhé Govindā Rādhé Gopāl Sāi Rām",
    "Bansidhara (2) Hey Chittachorā",
    "Hey Natavara (2) Nanda Kishorā",
    "Ghanashyāma Sundara Meghashyāma",
    "Sundara Sāi Rām",
  ],

  "1217": [
    "Rādhé Krishnā (2)",
    "Jai Shri Krishnā Rādhé Rādhé (x2)",
    "Rādhé Krishnā Rādhé Rādhé",
    "Jai Shri Krishnā Rādhé Rādhé",
    "Shirdi Krishnā Parthi Krishnā",
    "Sāi Krishnā Rādhé Rādhé",
    "Rādhé Krishnā (2) Jai Shri Krishnā Rādhé Rādhé",
    "Rādhé Krishnā Rādhé Rādhé",
    "Jai Shri Krishnā Rādhé Rādhé",
  ],

  "1218": [
    "Rādhé Mukunda Murāri Govindā",
    "Govindā Govindā Ānanda Govindā",
    "* Giridhāri Giridhāri Ānanda Ānandā – 3",
    "* Murali Manohara Sāi Gopālā – 3",
  ],

  "1219": ["Rādhé (2) Govindā", "Rādhé (2) Gopālā", "Rādhé Govinda Bhajo Rādhé Gopālā", "Rādhé Mukunda Haré"],

  "1220": ["Rādhé (4) Govindā", "Rādhé Govinda Bhajo Rādhé Gopālā (x2)", "* Murali Manohara Govinda", "Hey Mādhava Murahara Govindā (x2)"],

  "1221": [
    "Rādhé (4) Govindā",
    "Rādhé Govindā Rādhé Gopālā",
    "Mohana Rupā Moksha Pradātā",
    "Murali Lolā Munijana Pālā",
    "Gopi Lolā Goparipālā",
    "Hridaya Vihārā Parthi Nivāsā",
    "Hridaya Vihārā Sāi Gopālā",
  ],

  "1222": [
    "Rādhé (4) Govindā",
    "Rādhé (3) Nanda Mukundā",
    "Giridhara Vrajadhara Rādhe Gopālā",
    "Murali Manohara Rādhe Gopālā",
    "Shankha Chakradhara Rādhe Gopāl",
    "Rādhe Govinda Bhajo Rādhe Gopāl",
  ],

  "1223": [
    "Rādhé (4) Venu Gopālā",
    "Venu Gopālā Sāi Gopālā",
    "* Rādhikā Manoharā Rāja Gopālā",
    "Gopikā Manoharā Gopi Gopālā",
    "Neela Meghashyāma Sundara Sāi Gopālā",
    "Mādhavā Keshavā Sāi Jai Jai Gopālā",
  ],

  "1224": [
    "Rādhéshyāmā Hey Ghanashyāmā",
    "Rādhā Mādhava Mangala Dhāmā",
    "Jaya (3) Hey Meghashyāmā",
    "Meghashyāmā Meghashyāmā",
    "Jaya (3) Brindāvana Dhāmā",
  ],

  "1225": [
    "Rādhikā Jeevanā",
    "Krishna Janārdanā",
    "Rādhé Govindā Rādhé Gopālā",
    "Devaki Nandanā – Vasu",
    "Nanda Nandanā Hey Gopikā Ranjanā",
    "Murali Mohanā",
    "Shri Madhusudanā – Krishnā Krishnā",
  ],

  "1226": ["Rādhikā Manoharā Madana Gopālā", "Deena Vatsalā Hey Rāja Gopālā", "Bhaktajana Mandārā Venu Gopālā", "Muralidhara Hey Sathya Sāi Gopālā"],

  "1227": [
    "Rām Dhun Lāgi Mohé Shyāma Dhun Lāgi",
    "Lāgi Ré Lāgi Mohé Shyāma Dhun Lāgi",
    "* Haré Rām (2) Bolo Haré Rām",
    "Haré Prema Ānanda Se Bolo Sāi Haré Rām",
    "Haré Rām (2) Bolo Haré Rām (x2)",
    "Rām (3) Rādhéshyāma Dhun Lāgi",
  ],

  "1228": ["Rām Krishna Govinda Nārāyanā", "Nārāyanā Hari Nārāyanā", "Shri Lakshmi Nārāyanā", "Om Ananta Nārāyanā (x3)"],

  "1229": [
    "Rām Krishna Govinda Nārāyana Keshavā",
    "Rādhikā Ramana Mādhavā Jaya Ranga Devā (x2)",
    "Haré Rām Haré Krishna Seetā Rāma Rāghavā",
    "Rādhikā Ramana Mādhavā Jaya Ranga Devā (x2)",
  ],

  "1230": [
    "Rāsa Vilolā Nandalālā",
    "Rādhā Mādhava Nandalālā",
    "* Nanda Kishorā Nandalālā",
    "Navaneeta Chorā Nandalālā",
    "Nandalālā Sāi Nandalālā - Hey",
  ],

  "1231": [
    "Ravikula Mandana Rājiva Lochana Rāghavā",
    "Vasudeva Nandana Bandha Vimochana Keshavā",
    "* Dharma Niketana Krishna Janārdana Yādhavā",
    "Hey Madhusudana Murali Mohana Mādhavā",
  ],

  "1232": [
    "Rumjhuma Nācho Nanda Dulāra",
    "Mādhava Murahara Madana Gopāl",
    "* Rādhā Manohara Natavara Lāl",
    "Govinda Giridhara Murali Gopāl - (Shyām)",
  ],

  "1233": ["Sāi Ghanashyāma (2)", "Rādhé Govinda Bhajo Rādhé Gopāla Bhajo", "Murali Gopāla Bhajo Sāi Ghanashyāma"],

  "1234": [
    "Sāi Jhulo Meré Bābā Jhulo Meré Bābā",
    "Jhulanā Jhulāyé Brijabālā Gopālā",
    "Gopi Manohara Bālā",
    "Jhulo Nandalālā Jhulo Nandalālā",
    "Parthi Mé Jhulé Sāi Lālā Gopālā",
    "Man Ké Jhulé Mé Virājo Gopālā",
    "Nandalālā Sāi Lālā",
    "Jhulo Nandalālā Jhulo Sāi Lālā",
  ],

  "1235": [
    "Sāi Kanhaiyā Sāi Kanhaiyā",
    "Pār Karo Meré Jeevana Naiyā",
    "Tum Ho Meré Mā Bāpa Bhaiyā",
    "Hridaya Nivāsi Sāi Kanhaiyā (x2)",
    "Pār Karo Meré Jeevana Naiyā",
  ],

  "1236": ["Sāi Nārāyana Nārāyana", "Satya Nārāyana Nārāyana", "Gāna Lola Prabhu Nārāyana", "Deena Pāla Jaya Nārāyana"],

  "1237": ["Sāi Rām Haré Ghanashyāmā", "Rādhéshyāma Haré Sāi Rāmā", "Meghashyāma Haré Parandhāmā", "Ghanashyāma Haré Sāi Rāmā"],

  "1238": [
    "Sapné Mé Āo Shyāma Murāri",
    "Sānvari Surata Muralidhāri",
    "* Sab Ké Sājana Prabhu Giridhāri",
    "Sab Ké Sājana Hridaya Vihāri",
    "Satguru Sāi Parthi Vihāri",
  ],

  "1239": [
    "Sarvatra Govinda Nāmasankirtanam",
    "Govindā Haré Govindā",
    "Govindā Haré Govindā",
    "Haré Govindā Haré Govindā",
    "Purāna Purushā Govindā",
    "Haré Punya Shloka Govindā",
    "Bhakta Vatsalā Govindā",
    "Haré Bhāgavata Priya Govindā",
    "Krishna Rāmā Govindā",
    "Haré Rāmā Krishnā Govindā",
    "Sāi Rāmā Govindā Haré Sāi Shyāmā Govindā",
  ],

  "1240": [
    "Satya Nārāyana Govinda Mādhavā",
    "Sāi Nārāyana Govinda Keshavā (x2)",
    "Haré Krishna (2) Krishnā (2) Haré Haré",
    "Haré Rāmā (2) Rāmā (2) Haré Haré",
  ],

  "1241": [
    "Satya Sanātana Nitya Niranjana",
    "Bhakta Parāyana Nārāyanā",
    "Govinda Govinda Nārāyanā (x2)",
    "Nārāyanā Sāi Nārāyanā",
    "Puttaparthi Purandara Nārāyanā",
    "Govinda Govinda Nārāyanā",
  ],

  "1242": [
    "Shesha Shailavāsā Nārāyanā",
    "Bhakta Pārijātā Nārāyanā",
    "* Sarvajeeva Vāsā Nārāyanā",
    "Sāmagāna Lolā Nārāyanā",
    "Sathya Sāi Rupa Nārāyanā (x2)",
  ],

  "1243": [
    "Shri Krishnā Mādhavā Govindā Gopālā",
    "Mathurā Nāthā Madana Gopālā",
    "Nanda Mukundā Shyāma Gopālā – (Sāi)",
    "Krishna Haré Jai Krishna Haré",
    "Jai Haré Govinda Krishna Haré (x2)",
  ],

  "1244": [
    "Shri Madhusudana Krishnā",
    "Giridhara Shyāma Murāri",
    "Bhakta Vatsala Prabhu Hey Giridhāri",
    "Rādhā Ramana Shri Hari",
    "Keshava Mādhavā Sādhu Samrakshaka",
    "Sāi Krishna Murāri",
  ],

  "1245": [
    "Shri Ranganā Krishnanā Devaki Nandanā",
    "Kamala Nayana Shyāmala Vadana",
    "Ānanda Chandanā",
    "* Venu Vinodana Gopikā Ranjana",
    "Yashodā Nandana",
    "Ānanda Chandanā",
    "Yashodā Nandanā",
  ],

  "1246": [
    "Shri Vāsudevā Nārāyanā Sāi Nārāyanā",
    "Janārdanā Hey Madhusudanā Sāi Nārāyanā",
    "Govardhanodhāra Gopālanā Sāi Nārāyanā",
    "Hari Om (3) Nārāyanā",
  ],

  "1247": [
    "Shridharā Muralidharā Brindāvanā Sanchārā",
    "Sāi Keshavā Sāi Mādhavā Parthipuri Krishnā",
    "Rādhā Mādhava Rāsa Vilolā",
    "Rājiva Nayanā Venu Gopālā",
    "Vishwa Vandita Sāi Kripālā",
    "Sāi Keshavā Sāi Mādhavā Parthipuri Krishnā",
  ],

  "1248": [
    "Shrinivāsā Govindā Shri Venkateshā Govindā",
    "Purāna Purushā Govindā",
    "Pundarikākshā Govindā",
    "Dasavidha Rupā Govindā",
    "Krishnā Rāmā Govindā",
    "Krishnā Rāmā Govindā Rāmā Krishnā Govindā",
    "Sāi Rāmā Govindā Sāi Krishnā Govindā",
  ],

  "1249": [
    "Shrinivāsā Venkateshā",
    "Kshritajana Paripālā Sāishā",
    "* Tirupati Girivāsā Govindā",
    "Gauruda Vāhanā Govindā Govindā",
    "Govinda Govindā Shrinivāsā Govindā",
    "Govinda Govindā Shirdi Vāsā Govindā",
    "Govinda Govindā Parthivāsā Govindā",
  ],

  "1250": [
    "Shyāma Sundara Madana Mohana Rādhé Gopāl",
    "Rādhé Gopāl Bhajo Rādhé Gopāl",
    "Shankha Chakra Gadādhara Rādhé Gopāl",
    "Rādhé Gopāl Bhajo Rādhé Gopāl",
  ],

  "1251": [
    "Shyāma Sundara Hari Govinda Bolo",
    "Govinda Bolo Hari Gopāla Bolo",
    "* Madana Mohana Prabhu Govinda Bolo",
    "Kamala Nayana Prabhu Gopāla Bolo",
    "Rādhā Ramana Hari Govinda Bolo",
  ],

  "1252": [
    "Shyāma Sundarā Nanda Kishorā",
    "Mohana Muralidharā Navanita Chorā",
    "Rādhikā Manoharā Rāsa Vilolā",
    "Gopika Manoharā Goparipālā",
    "Brindāvana Bālā Sāi Gopālā",
  ],

  "1253": [
    "Shyāmala Komala Krishnā Murāri (x2)",
    "Shyāmala Ghanashyāmala Meghashyāmala",
    "Komala Krishnā Murāri",
    "Shreedhara Yaduvara Krishnā Murāri (x2)",
    "Shreedhara Nanda Yaduvara Bhava Bhaya Hara",
    "Giridhara Krishnā Murāri",
    "Shreedhara Yaduvara Krishnā Murāri",
  ],

  "1254": ["Smita Smita Sundara Mukhāravinda", "Nāchoré Nandalālā Nandalālā (x4)", "Meerā Ké Prabhu Lālā Nandalālā (x4)"],

  "1255": [
    "Subah Aur Shām Bolo Hari Nām",
    "Gopi Gopāl Bhajo Sāi Ghanashyām",
    "* Chalo Mana Chalo Chalein Bābā Ké Dhām",
    "Shirdi Ké Dhām Sathya Sāi Ké Dhām",
  ],

  "1256": [
    "Sundara (2) Nāché Sundara Sāi Ghanashyāma",
    "Nācheré Sāi Sundara Shyām",
    "Jhumaka Jhumaka Jhum Ghunghroo Bājé",
    "Nāché Ghanashyām",
    "Nāché Natavara Sāi Sundara Meré Sāi Rām",
    "Nāché Nāché Mana Mandira Mé Meré Sāi Rām",
    "Nācheré Sāi Sundara Shyām",
  ],

  "1257": [
    "Sundara Shyāma Murāri Sāi",
    "Gopālā Shri Hari Shri Hari",
    "Parama Niranjana Mādhava Sāi",
    "Sakala Charāchara Vyāpaka Sāi",
    "Gopālā Shri Hari Shri Hari",
  ],

  "1258": [
    "Swāgatam Krishnā Sharanāgatam Krishnā",
    "Swāgatam (2) Sharanāgatam Krishnā",
    "Mathurāpuri Sadanā Madhusudanā Krishnā",
    "Swāgatam (2) Sharanāgatam Krishnā",
  ],

  "1259": ["Vaikuntapaté Sāi Haré", "Vaijayanti Mālā Dhāri", "* Hari Govinda Hari Gopāla (x2)", "Vara Godāvari Teera Vihāri – (Chitrāvati)"],

  "1260": [
    "Vanamāli Vāsudevā Jagan Mohanā",
    "Rādhā Ramanā",
    "Jagan Mohanā Rādhā Ramanā (x2)",
    "Shashi Vadanā Sarasija Nayanā",
    "Jagan Mohanā Rādhā Ramanā (x3)",
    "Rādhā Ramanā (x4)",
  ],

  "1261": ["Vasudevaki Nandana Gopālā", "Nanda Mukundā Gopālā", "* Rādhā Mādhava Rāsa Vilolā", "Meerā Mādhava Natavara Lālā"],

  "1262": ["Yadunandanā Yashoda Bālā", "Mādhavā Keshavā", "* Mathurā Nāthā Mama Sāi Nāthā", "Mandara Giridhāri Madhusudanā Hey"],

  "1300": [
    "Bhaja Mana Pānduranga Vitthalā Jai Vitthalā",
    "Purandara Vitthalā Vitthalā Jai Vitthalā",
    "* Bhaja Mana Pānduranga Vitthalā Jai Vitthalā",
    "Purandara Vitthalā Vitthalā Jai Vitthalā",
  ],

  "1301": [
    "Bhaja Mana Pānduranga Vitthalā Vitthalā",
    "Bhaja Mana Pānduranga Ranga Sāi Vitthalā",
    "* Tukārām Nāmadeva Poojitāya Vitthalā",
    "Rukmani Sameta Pānduranga Vitthalā",
    "Jayadeva (2) Sāi Rangā Vitthalā",
    "Bhakta Paripālana Pānduranga Vitthalā",
  ],

  "1302": [
    "Bhaja Mana Rām (2)",
    "Pāndurangā Shri Rangā Bhaja Mana Rām",
    "Bhaja Mana Mādhavā Bhaja Mana Keshavā",
    "Bhaja Mana Yādhavā Bhaja Mana Rām",
    "Pāndurangā Shri Rangā Bhaja Mana Rām",
    "Bhaja Mana Mukunda Bhaja Mana Govinda",
    "Bhaja Mana Ānanda Bhaja Mana Rām",
    "Pāndurangā Shri Rangā Bhaja Mana Rām",
  ],

  "1303": [
    "Bhajo Bhajo Vitthalā Pānduranga Vitthalā",
    "Pandarinātha Pānduranga Bhajo Mana Vitthalā",
    "* Parthishwarā Sāi Nātha Vitthalā",
    "Parameshwarā Sathya Sāi Vitthalā",
    "Rakumāyi Vitthalā Ranga Sāi Vitthalā",
  ],

  "1304": [
    "Bolo Nārāyanā Jai Jai Vitthalā",
    "Sāi Nārāyanā Rangā Rangā Vitthalā",
    "* Govinda Vitthalā Rakumāyi Vitthalā",
    "Gopāla Vitthalā Pānduranga Vitthalā",
    "Shri Rangā Vitthalā Sāi Rangā Vitthalā",
  ],

  "1305": [
    "Deena Bandhu Vitthalā Jai",
    "Karunā Sindhu Vitthalā Jai",
    "Vitthalā (3) Jai Pāndurangā Vitthalā Jai",
    "Āpatha Bāndhava Vitthalā Jai",
    "Anātha Rakshaka Vitthalā Jai",
    "Vitthalā (3) Jai Pāndurangā Vitthalā Jai",
  ],

  "1306": [
    "Govinda Krishna Vitthalā",
    "Venu Gopāl Krishna Vitthalā",
    "Pānduranga Vitthalā Jaya Pandarinātha Vitthalā",
    "Govinda Vitthalā Gopāla Vitthalā",
    "Pānduranga Vitthalā Pandarinātha Vitthalā",
    "Vitthala Vitthala Pānduranga – 4",
  ],

  "1307": [
    "Govinda Krishna Vitthalé",
    "Venu Gopāl Krishna Vitthalé",
    "Rangā Rangā Vitthalé Jaya Pāndurangā Vitthalé",
    "Govinda Krishna Vitthalé",
    "Venu Gopāl Krishna Vitthalé",
    "Rangā Rangā Vitthalé Jaya Pāndurangā Vitthalé",
  ],

  "1308": ["Govinda Murāri Gopāla Murāri", "Vitthala Shri Hari Pāndurangā", "Hridaya Vihāri Hey Giridhāri", "Murahara Shauri Pāndurangā"],

  "1309": [
    "Hari Hari Vitthalā Haré Pāndurangā",
    "Haré Pāndurangā (3) Hari Hari Vitthalā",
    "* Deena Bandhu Deena Nāth Haré Pāndurangā",
    "Deva Deva Ādi Deva Haré Pāndurangā",
    "Haré Pāndurangā (3) Hari Hari Vitthalā",
  ],

  "1310": [
    "Hari Hari Vitthalā Sāi Hari Vitthalā",
    "Hari Om Vitthalā Sāi Om Vitthalā",
    "* Shirdi Sāi Vitthalā",
    "Parthi Sāi Vitthalā",
    "Shirdi Sāi Vitthalā Parthi Sāi Vitthalā",
    "Purandara Vitthalā Pānduranga Vitthalā",
    "Vitthala (2) Vitthalā, Sāi Hari Vitthalā",
    "Vitthala (2) Vitthalā, Sāi Om Vitthalā",
    "Vitthala (2) Vitthalā, Vitthala (2) Vitthalā (x2)",
  ],

  "1311": [
    "Hari Vitthalā Vitthalā Jai Vitthalā (2)",
    "Deena Bāndhavā Bhakta Poshakā",
    "Pānduranga Hari Vitthalā",
    "Bhajaré Mānasa Vitthalam",
    "Vishwa Vishnu Rupam",
    "Krishna Dāmodaram Rukmini Vallabham",
    "Pandarinātha Kamalākānta Shri Hari Vitthalā",
    "* Bhajaré Mānasa Mādhavam Murali Mohanam",
    "Veera Venkatesham Padmini Vallabham",
    "Sarasijā Nayana Nandānanda Vijaya Vitthalā",
  ],

  "1312": [
    "Hey Kamala Vadana Sāi Rangā",
    "Kaivalya Pāndurangā (x2)",
    "Sāi Gopālā Ghana Ghana Neelā",
    "Kutila Kunthala Tribhuvana Pālā",
    "Brahmā Vishnu Maheshwara Rupā",
    "Māyā Lolā Brahma Swarupā",
  ],

  "1313": [
    "Hey Krishnā Hey Krishnā",
    "Vitthala Jaya Pānduranga Pāndurangā",
    "Nanda Kishorā Shyāma Gopālā",
    "Shyāma Gopālā Madana Gopālā (x2)",
    "Vitthala Jaya Pānduranga Pāndurangā",
    "Pāndurangā (4) (x5)",
  ],

  "1314": ["Hey Sāi Rangā Hey Pāndurangā", "Karunāntarangā Hridayāntarangā", "* Shri Rangā Rangā Jaya Rangā Rangā", "Ānanda Rangā Sadānanda Rangā"],

  "1315": [
    "Jai Hari Vitthalā Rangā Jai Hari Vitthalā",
    "Govinda Gopāla Rangā Jai Hari Vitthalā",
    "Pānduranga Vitthalā Krishna Nādā Vitthalā",
    "Govinda Gopāla Rangā Jai Hari Vitthalā",
    "Bhakta Vatsalā Ranga Krishnā Nādā Vitthalā",
    "Govinda Gopāla Ranga Jai Hari Vitthalā",
  ],

  "1316": [
    "Jai Jai Rangā Vitthalā Hey Jai Jai Sāi Vitthalā",
    "Janam Janam Meré Sāth Raho Tum",
    "* Patita Pāvana Parama Dayāgana",
    "Pānduranga Vitthalā Hey Pandarināthā Vitthalā",
    "Pānduranga Vitthalā Hey Parthi Sāi Vitthalā",
    "Vitthalā Jai Vitthalā Jai Sathya Sāi Vitthalā",
  ],

  "1317": ["Jai (2) Vitthalā Pāndurangā", "Jayatu Vitthalā Pandari Nāthā", "* Jai Jai Vitthalā Sāi Rangā", "Jayatu Vitthalā Parthi Nāthā"],

  "1318": [
    "Jai (2) Vitthalā Pānduranga Vitthalā",
    "Pundalika Varadā Pānduranga Vitthalā",
    "Jai (2) Vitthalā Pānduranga Vitthalā",
    "Pundalika Varadā Pānduranga Vitthalā",
  ],

  "1319": ["Jai Pānduranga Jaya Vitthalā", "Jagadoddhārā Hari Vitthalā", "Pandari Nāthā Jaya Hari Vitthalā", "Purandara Vitthalā Parama Dayālā"],

  "1320": [
    "Jaya Hari Pānduranga Nārāyanā",
    "Nārāyanā Hari Nārāyanā",
    "* Keshava Mādhava Hari Nārāyana",
    "Vitthala Narahari Sāi Nārāyana",
    "Jaya Hari Nārāyanā Jaya Sāi Nārāyanā",
  ],

  "1321": [
    "Jaya Pāndurangā Prabhu Vitthalā",
    "Jagadoddhārā Sāi Vitthalā",
    "Pānduranga Vitthalā Pandarinātha Vitthalā",
    "Shri Ramani Hridayāntaranga",
    "Mangala Kara Karunāntaranga",
    "Āshrita Deenajanavana Ranga",
    "Jagadoddhārā Sāi Vitthalā",
    "Pānduranga Vitthalā Pandarinātha Vitthalā – 6",
  ],

  "1322": [
    "Jaya Rangā Pāndurangā",
    "Shri Rangā Parthishā",
    "Sāi Rangā Pandarishā",
    "Jaya Shirdishā Jaya Parthishā",
    "Pāvana Purushā Jaya Sāishā",
    "Jai Hari Vitthala Shri Hari Vitthala (x2)",
  ],

  "1323": [
    "Kalyāna Rangā Kamaneeya Rangā",
    "Ānanda Rangā Sadānanda Rangā",
    "Hridayāntarangā Karunāntarangā",
    "Rakumāyi Rangā Sāisha Rangā",
    "Shirdisha Rangā Parthisha Rangā",
    "Ānanda Rangā Sadānanda Rangā",
  ],

  "1324": [
    "Kasturi Rangā Kāveri Rangā",
    "Shri Ranga Ranga Rangā",
    "Kalyāna Rangā Karunāntarangā",
    "Shri Ranga Ranga Rangā",
    "Gauruda Gamana Rangā Shesha Shayana Rangā",
    "Shri Ranga Ranga Rangā",
  ],

  "1325": [
    "Narahari Rangā Ré (2) Narahari Rangā Haré",
    "Narahari Rangā Haré",
    "Puttaparthi Rangā Shri Parthi Rangā",
    "Narahari Rangā Shri Rangā Rangā",
    "Shri Rangā Rangā Shri Rangā Haré",
  ],

  "1326": ["Pandari Nivāsā Hey Pāndurangā", "Hey Parthivāsā Shri Sāi Devā", "* Deena Rakshakā Anātha Rakshakā", "Bhakta Vatsalā Hey Sāishwarā (x2)"],

  "1327": [
    "Pandari Ranga Vitthalā",
    "Jaya Pānduranga Vitthalā",
    "Kasturi Ranga Vitthalā",
    "Kamaneeya Ranga Vitthalā",
    "* Govinda Ranga Vitthala",
    "Gopāla Ranga Vitthalā",
    "Kalyāna Ranga Vitthalā",
    "Karunāntaranga Vitthalā",
    "Parthisha Ranga Vitthalā",
    "Prabhu Sāi Ranga Vitthalā",
  ],

  "1328": ["Pāndurangā (2) Vitthalā Pāhé", "Deena Nāthā Karunā Nāthā", "Sāi Nātha Haré", "Pandarināthā Pāndurangā", "Vitthalā Pāhé"],

  "1329": [
    "Pānduranga Vitthalā Jai Pandarināthā Vitthalā",
    "Pānduranga Vitthalā Jai Pundarikākshā Vitthalā",
    "* Vitthalā Jai Vitthalā Purandara Vitthalā (x2)",
    "Vitthalā Jai Vitthalā Jai Rakumāyi Vitthalā",
  ],

  "1330": ["Pānduranga Vitthalé Hari Nārāyana", "Hari Nārāyana Govindā – 3", "Bhajo Nārāyana Govindā", "Sāi Nārāyana Govindā"],

  "1331": ["Purandara Rangā Haré Vitthalā", "Pandari Rangā Haré Vitthalā", "* Narahari Rangā Haré Vitthalā", "Murahara Rangā Haré Vitthalā"],

  "1332": [
    "Rādhéshyāma Gopālā Rādhika Jeevana",
    "Shri Rangā",
    "Meghashyāma Gopālā Manamohana Sundara",
    "Shri Rangā",
    "* Pandarinātha Gopālā Pānduranga Shri Rangā",
    "Parthipurishā Gopālā Sāi Rangā Shri Rangā",
  ],

  "1333": [
    "Rādhéshyāma Pānduranga Vitthalé Rakumāyi",
    "Pānduranga Purandara Vitthalé Rakumāyi",
    "Rādhéshyāma Pānduranga",
    "Vitthalé Rakumāyi (x2)",
    "Pānduranga Purandara Vitthalé Rakumāyi",
  ],

  "1334": [
    "Rāma Krishna Hari Mukunda Murāri",
    "Pānduranga Hari Pānduranga Hari",
    "Deva Deva Devā Mahādeva Devā",
    "Ādideva Devā Brahma Vishnu Devā",
    "Ādideva Devā Sathya Sāi Devā",
    "Pānduranga Hari Pānduranga Hari",
  ],

  "1335": [
    "Rangā Rangā Pāndurangā",
    "Rakumāyi Vitthalā Pāndurangā",
    "Mangala Murti Pāndurangā",
    "Vitthala Vitthala Pāndurangā",
    "* Singāra Sāi Pāndurangā",
    "Sathya Sāi Vitthalā Pāndurangā",
    "Omkāra Rupā Pāndurangā",
    "Om Hari Vitthalā Pāndurangā",
  ],

  "1336": [
    "Rangā Rangā Shri Hari Rangā",
    "Pandarināthā Pāndurangā",
    "Natana Manohara Navanita Chorā",
    "Natavara Lālā Gopālā",
    "Hari Nārāyana Jaya Nārāyana",
    "Shri Vaikunta Shrinivāsā",
    "Govindā Jaya Govindā Bhaja Govindā Govindā",
    "Vitthala Vitthala Pāndurangā",
    "Jaya Jaya Vitthala Sāi Rangā",
  ],

  "1337": [
    "Ranga Vitthalā Pānduranga Vitthalā",
    "Shri Ramani Hridayāntarangā",
    "Mangalakara Karunātaranga",
    "Āshisha Deenajanāvana Rangā",
    "Jagadoddhārā Hari Vitthalā",
  ],

  "1338": [
    "Shri Rangā Haré Vitthalā",
    "Sāi Rangā Haré Vitthalā",
    "Hey Dayānidhé Vitthalā",
    "Hey Kripānidhé Vitthalā",
    "Hey Sāi Prabhu Vitthalā",
    "Sathya Sāi Prabhu Vitthalā",
  ],

  "1339": [
    "Shri Rangā Rangā Vitthalā Vitthalā",
    "Rakumāyi Rangā Vitthalā Vitthalā",
    "Pandari Rangā Vitthalā Vitthalā",
    "Pānduranga Vitthalā Vitthalā",
    "Deena Bandhu Vitthalā Jai Sāi Nāthā Vitthalā",
    "Parthi Rangā Vitthalā Jai Jai Sāi Vitthalā",
  ],

  "1340": [
    "Shri Rangā (2) Rangā Rangā Shri Rangā (x2)",
    "Kāveri Tatha Vāsa Kasturi Rangā",
    "Kārunya Lāvanya Karunāntarangā",
    "Jaya Pāndurangā Jaya Sāi Rangā (x2)",
  ],

  "1341": [
    "Vitthala Bhajo Vitthala Bhajo (x2)",
    "Pandarināthā Pānduranga Vitthala Bhajo",
    "Parthi Vāsā Sāi Devā Vitthala Bhajo",
    "Shirdi Vāsā Sāi Devā Vitthala Bhajo",
  ],

  "1342": [
    "Vitthalā Hari Vitthalā (x3)",
    "Pāndurangā Vitthalé Hari Nārāyana",
    "Purandara Vitthalé Hari Nārāyana",
    "Hari Nārāyana Bhajo Nārāyana",
    "Sāi Nārāyana Satya Nārāyana",
  ],

  "1343": [
    "Vitthalā Jai Vitthalā Pānduranga Vitthalā",
    "Pānduranga Vitthalā Sāi Ranga Vitthalā",
    "* Pānduranga Sāi Ranga Sāi Ranga Pānduranga",
    "Pānduranga Sāi Ranga Sāi Ranga Pānduranga",
    "Pānduranga Vitthalā Sāi Ranga Vitthalā",
  ],

  "1344": [
    "Vitthalā Nārāyanā",
    "Nārayanā Sāi Nārāyanā",
    "* Madhusudanā Nārāyanā",
    "Shri Shesha Shayanā Nārāyanā",
    "Nārāyanā Sāi Nārāyanā",
    "Vitthala Vitthala Pānduranga Vitthala – 4",
  ],

  "1345": [
    "Vitthalā Nārāyanā Hari Vitthalā Nārāyanā",
    "Vishwādhārā Sāi Nārāyanā",
    "* Pandari Nāthā Hari Nārāyanā",
    "Purandara Rangā Bhajo Nārāyanā",
    "Rakumāyi Vitthalā Sāi Nārāyanā",
    "Ranga Sāi Vitthalā Satya Nārāyanā",
  ],

  "1346": [
    "Vitthala (2) Hari Vitthalā",
    "Vitthala (2) Nām Bhajo Hari Vitthalā",
    "Pānduranga Vitthalā Vitthala Vitthala Nām",
    "Vitthala (2) Nām Bhajo Hari Vitthalā",
    "Vitthala (2) Sāi Vitthalā",
  ],

  "1360": [
    "Anila Kumārā Hanumantā",
    "Anjani Putrā Shri Anjaneyā",
    "* Vānara Sevita Vāyu Kumārā",
    "Aganita Gunagana Ati Balavantā",
    "Shri Rām Dootā Kshritajana Pālā",
    "Shri Rām Bhaktā Abhaya Pradātā",
  ],

  "1361": [
    "Anjana Putrā Ānjaneyā Ati Balavantā Ānjaneyā",
    "Sanjivirāyā Ānjaneyā",
    "Shri Rāma Bhaktā Ānjaneyā",
    "* Bhadra Shareerā Ānjaneyā",
    "Vāyu Kumārā Ānjaneyā",
    "Kanjam Pādam Ānjaneyā",
    "Dukha Nivārana Ānjaneyā",
  ],

  "1362": ["Anjana Suta Ānjaneyā", "Vāyu Putrā Vātātmaja", "Vānara Uttama Balabheemā", "Rāma Doota Ranadheerā"],

  "1363": ["Anjanaiyā Veerā Hanumanta Surā", "Vāyu Kumārā Vānara Veerā", "Shri Rām Jai Rām Jai Jai Rām", "Seetārām Jai Rādhéshyām (x4)"],

  "1364": ["Bajaranga Bali Baladhām Nāthā", "Sankatā Mochanā", "* Keshari Nandana Mangala Rupā", "Sakala Gunālaya Hanumanta Veerā"],

  "1365": [
    "Baladhām Hanumantā",
    "Bajaranga Bali Devā",
    "Muni Nara Vandita Parama Yogishā",
    "Lankāpuri Dahanā",
    "Anjani Putra Raghupati Priyā",
    "Jai Jai Mahāveerā",
    "Māruti Nandana Vaidehi Priyā",
    "Jai Jai Balaveerā",
  ],

  "1366": [
    "Hey Rām Dootā Hey Rāma Bhaktā",
    "Hey Rāma Dāsā Namo Namo",
    "Seetā Mātā Shoka Vināshā",
    "Anātha Nāthā Namo Namo",
    "Mārutirāyā Mahānubhāvā",
    "Ati Balavantā Namo Namo",
    "Veera Ānjaneyā Namo Namo",
  ],

  "1367": [
    "Jai Jai Anjani Kumāra Hanumān Ji Ki Jai",
    "Hanumān Ji Ki Jai Hanumān Ji Ki Jai",
    "* Seetā Rām Ji Ki Jai Rādhéshyām Ji Ki Jai",
    "Jai Jai Pavana Kumāra Hanumān Ji Ki Jai",
    "Hanumān Ji Ki Jai Hanumān Ji Ki Jai",
    "Jai Jai Shiva Tripurāri Hanumān Ji Ki Jai",
  ],

  "1368": [
    "Jai Jai Hanumān Jai Hanumān",
    "Mārutirāyā Jai Hanumān",
    "Shri Rāma Doota Jai Hanumān",
    "Jai Bajarangi Jai Hanumān",
    "Jai Jai Hanumān Jai Hanumān",
  ],

  "1369": [
    "Jai Jai Hanumān Jaya Hanumān (x2)",
    "Mārutirāyā Jaya Hanumān",
    "Mahānubhāvā Jaya Hanumān",
    "Vāyu Kumārā Jaya Hanumān",
    "Vānara Veerā Jaya Hanumān",
    "Anjani Putrā Jaya Hanumān",
    "Ati Balavantā Jaya Hanumān",
    "Shri Rām Dootā Jaya Hanumān",
    "Shri Rām Bhaktā Jaya Hanumān",
  ],

  "1370": ["Jai Kapisha Jaya Hanumantā", "Jaya Ho (2) Sāi Anjanaiyā", "Rām Lakshman Priya Mahāveerā", "Rāha Dikhāo Prabhu Sāishā"],

  "1371": [
    "Jaya Ānjaneya Jaya Rāma Dootā",
    "Sharanam Prabho Sharanam",
    "Vānara Veerā Vāyu Kumārā",
    "Ranadheerā Sharanam",
    "Rāmapriyé Sharanam",
    "Sathya Sāi Hanumān Sharanam",
    "Rām Rām Jaya Jaya (3) Rām (x2)",
  ],

  "1372": ["Jaya Bajaranga Jaya Balaveera", "Jaya Hanumān Jaya Bolo (x2)"],

  "1373": [
    "Jaya Hanumān Bajaranga Bali",
    "Sankata Mochana Jai Jai Kapish",
    "Jaya Hanumantā Hey Mahāveer",
    "Seetā Shoka Nāshana Jai Jai Kapish",
    "Pavana Putrā Anjanaiyā",
    "Rām Sahāré Jai Jai Kapish",
    "Bhimā Sodara Mahābali",
    "Sab Dukha Tāré Jai Jai Kapish",
  ],

  "1374": [
    "Jaya Hanumān (2) Mārutirāyā Jaya Hanumān",
    "Jaya Hanumān (2) Ānjaneyā Jaya Hanumān",
    "Jaya Hanumān (2) Rām Dāsā Jaya Hanumān",
    "Jaya Hanumān (2) Rām Doota Jaya Hanumān",
    "Jaya Hanumān (2) Mahānubhāvā Jaya Hanumān",
    "Jaya Hanumān (2) Ānjaneya Jaya Hanumān",
  ],

  "1375": [
    "Jaya Hanumān Mahāveera",
    "Vāyu Nandanā Abhayankarā",
    "Vaidehi Priya Hanumān",
    "Seetā Shoka Nāshana Tu",
    "Lankābhayankara Tu",
    "Vāyu Nandanā Abhayankarā",
    "Vaidehi Priya Hanumān",
  ],

  "1376": [
    "Jaya Ho (2) Rāma Bhaktā Hanumān Ki Jai",
    "Jaya Ho (2) Pavana Putra Kapi Rupa Ki Jai",
    "Anjani Putrā Abhaya Māruti",
    "Pavana Putrā Amara Māruti",
    "Rāma Dootā Ajara Māruti",
    "Sukshma Rupā Akhanda Māruti",
    "Vajra Swarupā Prachanda Māruti (x2)",
  ],

  "1377": [
    "Jaya Vijayee Bhava Jaya Vijayee Bhava",
    "Bhava Bhaya Nāshā Hanumantā",
    "Pavana Kumārā Pāvana Veerā",
    "Ati Balavantā Hanumantā",
    "Anjani Putrā Veera Ānjaneyā",
    "Niranjanā Vijayee Bhava (x2)",
  ],

  "1378": [
    "Jo Māruti Nanda Sahāya Karé",
    "Phir Koyi Sahāy Milé Na Milé",
    "Jo Anjani Putra Sahāya Karé",
    "Phir Koyi Sahāy Milé Na Milé",
    "Phir Koyi Sahāy Milé Na Milé",
    "* Chāhé Kāla Karāla Darāvé Ousé",
    "Chāhé Pāpa Ki Jwāl Jalāyé Ousé",
    "Yadi Rām Kā Doota Sahāya Karé",
    "Phir Koyi Sahāy Milé Na Milé (x2)",
    "* Jin Ké Man Mandir Rām Basé",
    "Priya Lakshman Ké Sang Khubha Raché",
    "Hanumān Vohi Jo Sahāya Karé",
    "Phir Koyi Sahāy Milé Na Milé (x2)",
  ],

  "1379": [
    "Karunānidhé Hanumantā",
    "Hey Asādhya Sādhakā",
    "Kripānidhé Balavantā",
    "Hey Apāra Parākramā",
    "Shri Rām Bhaktā Shri Rām Swarupā",
    "Shri Rām Dootā Sangeeta Rasikā",
    "Rāma Geetāmrita Nāmāmrita",
    "Premāmrita Hanumantā",
  ],

  "1380": [
    "Lankāpuri Dahanā Seetā Shoka Nāshanā",
    "Kapisha Hanumantā",
    "Buddhi Swarupā Jaya Mahāveerā",
    "Sura Muni Nara Vanditā",
    "Rāmchandra Priyā",
    "Anjani Bālā Bhāgya Vidhātā",
    "Bhima Sodara Vāyu Nandana",
    "Sura Muni Nara Vanditā",
    "Rāmchandra Priyā",
  ],

  "1381": ["Pavana Suta Hanumān Ki Jai", "Siyāpati Rāmchandra Ki Jai", "* Parākrama Ānjaneya Ki Jai – 3", "Parthipuri Sāi Nātha Ki Jai"],

  "1382": [
    "Prabhu Rāmachandra Ké Dootā",
    "Hanumantā Ānjaneya",
    "Hanumantā (3) Ānjaneyā",
    "Hey Pavana Putra Hanumantā",
    "Balabheemā Ānjaneyā",
    "Balabheemā (3) Ānjaneyā",
  ],

  "1383": [
    "Rām Bhakta Hanumān Teri",
    "Jaya Ho Veera Mahāna",
    "Pavana Putra Hanumān Teri",
    "Jaya Ho Veera Mahāna",
    "Rām Ki Mahimā Tu Ne Jāni",
    "Ham Murakha Ham Hein Agnāni",
    "Dedo Ham Ko Gnāna Teri",
    "Jaya Ho Veera Mahāna - Prabhu",
  ],

  "1384": [
    "Rāma Dhyāna Nirata Ānjaneyā",
    "Rāma Sevāmritā Hanumantā",
    "Swāmi Mukhya Prānā Pavamānā",
    "Daitya Kulāntakā Mahāveerā",
    "Anjanā Trivāsā Gunavantā",
    "Dāsānudāsā Hanumantā",
    "Shri Rāma Dāsā Hanumantā",
    "* Māyā Vibhanjana Balabheemā",
    "Māra Vijaya Ghana Rāma Dootā",
    "Muni Guna Kapivara Vātātmajā",
    "Dāsānudāsā Hanumantā",
    "Shri Rāma Dāsā Hanumantā",
  ],

  "1385": ["Rām Kaho Sāi Bhajana Karo", "Jaya Hanumāna Ki Bhajana Karo", "Ayodhyā Jaya Sāi Shānta Karo", "Parama Pāvanā Tirtha Karo - Bābā"],

  "1386": [
    "Rām Lakshman Jānaki Jai Bolo Hanumān Ki",
    "Anjani Putrā Balabheemā Ānjaneya Balabheemā",
    "Balabheema (6) Balabheemā",
    "Vāyu Kumārā Balabheemā",
    "Vānara Veerā Balabheemā",
    "Balabheema (6) Balabheemā",
    "Parthipurishā Sāi Rāmā",
    "Pāvana Purushā Sāi Rāmā",
    "Sāi Rām (6) Sāi Rāmā",
  ],

  "1387": ["Rām Lakshman Jānaki Jai Bolo Hanumān Ki", "Rām Lakshman Jānaki", "Jai Bolo Hanumān Ki (x5)"],

  "1388": [
    "Rām (4) Pāda Sevitam",
    "Rām (4) Doota Pāhinam",
    "Seetā Shoka Nāshanam Anjanātmajam",
    "Para Hridatpriyam Sāi Vāyu Nandanam",
    "Rām Rām Shri Rām Rām Rām (x5)",
  ],

  "1389": ["Seetā Rakshaka Rāma Dootā", "Lankā Dahanā Rāvana Mardana", "Shri Rāma Dāsā Dayānidhé", "Sarva Mangalā Ānjaneyā"],

  "1390": [
    "Veera Dheera Māruti Gambheera Māruti",
    "Bheema Rupa Māruti Pavana Putra Māruti",
    "Rām (5) Japé Māruti – 3",
    "Bheema Rupa Māruti Parthi Vāsa Māruti",
  ],

  "1391": [
    "Veera Hanumānā Ati Balavānā Rām Nām",
    "Rasiyā Ré Hey Sāi Mana Basiyā Ré",
    "Rām Lakshmana Jānaki",
    "Jai Bolo Hanumān Ki (x2)",
    "* Raghupati Rāghava Rājā Rām",
    "Patita Pāvana Seetā Rām (x2)",
  ],

  "1392": [
    "Veera Māruti Gambheera Māruti",
    "Veera Māruti Ati Dheera Māruti",
    "Doota Māruti Rāma Doota Māruti",
    "Dāsa Māruti Rāmadāsa Māruti",
    "Geeta Māruti Sangeeta Māruti",
    "Bhakta Māruti Rāma Bhakta Māruti",
  ],

  "1400": [
    "Āndavané Sarvanané Shiva Gurunādā",
    "Āramuga Shanmugané Shiva Gurunādā",
    "Shiva Gurunādā Shiva Gurunādā",
    "* Vel Murugā Māl Marugā Shiva Gurunādā",
    "Mayil Veerā Vadivazhagā Shiva Gurunādā",
    "Shiva Gurunādā Shiva Gurunādā",
  ],

  "1401": [
    "Āramugā Vadivelavā",
    "Āndavané Sathya Sāi Vā",
    "Neela Mayil Mélé Ādi Vā",
    "Nādesané Bāla Odi Vā (x2)",
    "Sharanam Sharanam Vallisha Sharanam",
    "Sharanam Sharanam Sāisha Sharanam",
  ],

  "1402": [
    "Devā Murugā Varugā Singāra Velā Varugā",
    "Vā Vā Murugā Velā",
    "Vanna Mayil Vā Vā Varugā Murugā",
    "Parthipurishané Varugā",
    "Prashānti Vāsané Varugā",
    "Vā Vā Sāishā Devā Vettrivadivelané Sāi Murugā",
  ],

  "1403": [
    "Deva Senāpaté Skandā Subrahmania Pāhimām",
    "Pāhi Parameshwarā Skandā",
    "Subrahmania Pāhimām",
    "Subrahmania Shanmukha Nāthā",
    "Sāi Nāthā Karunā Sindhu",
    "Pāhi Parameshwarā Skandā",
    "Subrahmania Pāhimām",
  ],

  "1404": [
    "Gurunāda Kāvalana Vadivelā",
    "Kumāra Kadambā Shiva Bālā",
    "Umai Ammai Selvā Tanigāsalā",
    "Kundrudorum Ādivarum Kumaraiyā",
    "Subrahmania Shanmugané Vettrivadivelavané",
    "Gnāna Guru Desigané Kumaraiyā",
  ],

  "1405": [
    "Hara Hara Shiva Shiva Shanmugā",
    "Karunai Kadhalé Sāi Shanmugā",
    "* Pazhani Giri Nāthā Parthipurishwara",
    "Parangkundram Azhagā Devā Amarā",
  ],

  "1406": ["Kandā Kumarā Vadivelā", "Gauri Putrā Vadivelā", "* Kārtikeyā Karunā Sāgara", "Deena Sharanyā Vadivelā", "Shri Sāi Nāthā Vadivelā"],

  "1407": [
    "Kandayyā Kandayyā Vel Murugaiyā",
    "Vel Vel Velāyudha - Vettri",
    "Sāi Murugaiyā Haro Harā",
    "Haro Harā Sāi Haro Harā",
    "Kandappā Murugesā Velappā Mayuresā",
    "Vel Vel Sāi Nādā",
    "Sāi Murugaiyā Haro Harā",
    "Haro Harā Sāi Haro Harā",
  ],

  "1408": [
    "Kārtikeyā Kaliyuga Varadā",
    "Kandā Murugā Subrahmania",
    "Om Gurunādā Parthipurishā",
    "Mohana Vallisha Subrahmania",
    "Mayileri Vā Vā Māyon Marugā",
    "Asura Samhārā Subrahmania",
  ],

  "1409": [
    "Kārtikeyā Kandā Kumarā",
    "Mayil Vāganane Murugaiyā",
    "* Pazhaniyilvārum Parama Dayālā",
    "Vallideviyin Manavālā",
    "Devagar Talaivāsurasamhārā",
    "Parthi Vāsā Sāi Nāthā",
  ],

  "1410": [
    "Karunā Sāgara Kārtikeyā",
    "Kāmita Phala Dāyaka Valli Nāthā",
    "* Skandā Kumarā Subrahmania",
    "Devādi Devā Deena Sharanyā",
    "Parama Niranjana Parthi Nāthā",
    "Parama Niranjana Sāi Nāthā",
  ],

  "1411": [
    "Karunākara Shekhara Kārtikeyā",
    "Gaurishwara Tanayā Gananātha Sodarā",
    "* Kaliyuga Vandanā Kalimala Nāshanā",
    "Shri Vallikāntanā Shiva Gurunāthanā",
    "Haro Harā (2) Shanmukha Nāthā",
  ],

  "1412": [
    "Karunāmayā Kārtikeyā",
    "Kaivalya Dātā Hey Swāmināthā",
    "Himagiri Nandini Priya Kumārā",
    "Ihapara Sukhadāyi Bhava Bhaya Hārā",
    "Shraranāgata Priya Shanmukha Nāthā",
    "Sharanam Sharanam Shambho Kumārā",
  ],

  "1413": [
    "Murugā Māl Marugā Shanmugā",
    "Kumarā Guhané Kārtikeyā",
    "* Shankari Tanayā Saravana Nāthā",
    "Shambho Shankara Pārvati Bālā",
    "Parama Dayālā Pazhani Girishā",
    "Parthipurishā Sharanam Sharanam",
  ],

  "1414": ["Murugā Mohana Tanga Mayil Vāhana", "Saravanabhavané Velāyudha", "Hey Shiva Bālā Asura Samhārā", "Parthipurishwara Velāyudha"],

  "1415": [
    "Murugā (2) Shakti Vel Murugā",
    "You Are My Shining Star",
    "Shakti Vel Murugā Vadivel Murugā",
    "Come To Me Lord Murugā",
    "Murugā Sāi Rām Murugā Sāi Rām",
    "When I Need You Murugā,",
    "You Are There Murugā",
    "To Take All My Troubles Away",
    "You Are My Sāi Murugā",
    "You Are My Light Murugā",
    "Vā Vā Vadivelavā",
    "Murugā Sāi Rām Murugā Sāi Rām",
  ],

  "1416": [
    "Murugā Murugā Sharanam Sharanam",
    "Mayil Vāhanané Sharanam Sharanam",
    "Kandā Kadambā Sharanam Sharanam",
    "Kaliyuga Varadā Sharanam Sharanam",
  ],

  "1417": [
    "Murugā Saravana Shanmugā",
    "Murugā Sāi Shanmugā",
    "* Shiva Shakti Bālā Mohanā",
    "Kārtikeya Bālā Sundarā",
    "Shakti Vadivelā Skandā",
    "Kaliyuga Varadā Sāishā",
  ],

  "1418": [
    "Pacchai Mayil Yerivarum Vel Murugaiyā",
    "Vadivel Murugaiyā",
    "Parthipuri Nādané Ni Vel Murugaiyā",
    "Vadivel Murugaiyā",
    "Asoorané Samhārané Ni Vel Murugaiyā",
    "Vadivel Murugaiyā",
    "Sathya Sāi Kumarané Ni Vel Murugaiyā",
    "Vadivel Murugaiyā",
    "Vel Vel Murugā Vadivel Azhagā (x2)",
  ],

  "1419": [
    "Pazhani Āndavā Pazhani Āndavā",
    "Parāshakti Bālagané Pazhani Āndavā",
    "Pazhani Āndavā Parthi Vihārā",
    "Neela Mayil Vel Murugā",
    "Kola Mayil Māl Marugā",
    "Saravanabhava Shanmugané Sathya Sāi Āndavā",
    "Parāshakti Bālagané Pazhani Āndavā",
    "Pazhani Āndavā Parthi Vihārā",
  ],

  "1420": [
    "Pazhani Āndavā Yengal Pazhani Āndavā",
    "Tenpazhani Nāyagane Pazhani Āndavā",
    "Unpugarai Pārivandrum Pazhani Āndavā",
    "Yempiraigal Tiratiruvāi Pazhani Āndavā",
    "Anbānadaivam Neeyé Pazhani Āndavā",
    "Chinmaya Rupā Sāi Pazhani Āndavā",
  ],

  "1421": [
    "Pazhani Malai Āndavā Shanmuga Kuga",
    "Pazhamudhir Solaiyil Vadivazhagā",
    "* Veeravel Murugā Om Saravanā",
    "Parthipuri Nāyakā Sāi Shanmugā",
    "Sathya Sāi Shanmugā",
  ],

  "1422": [
    "Pazhani Malai Āndi Vela Vadivelavā",
    "Pannirugai Āndavā Sāi Velavā",
    "Pannirugai Āndavā Gnāna Velavā",
    "Pazhani Malai Āndi Swāmi Malai Āndi",
    "Solai Malai Āndi Vela Vadivelavā",
    "Pannirugai Āndavā Sāi Velavā",
    "Pannirugai Āndavā Gnāna Velavā",
    "Azhagiya Bālané Āramuga Nādané",
    "Ānanda Rubané Sāi Velavā",
    "Saravanabhava (2) Saravana Nādā",
  ],

  "1423": [
    "Pazhani Murugā Vela Murugā",
    "Sharanam Sharanam Vela Murugā",
    "Ganapati Sodara Vela Murugā",
    "Kārtikeyā Vela Murugā",
    "Subrahmania Vela Murugā",
    "Hara Haro Harā Murugā Hara Haro Harā",
    "Haro Harā (2) Hara Haro Harā",
  ],

  "1424": [
    "Pazhani Vāsā Gnāna Vela Murugā",
    "Kaliyuga Varadā Shiva Bālā",
    "* Saravanabhavané Haro Murugā",
    "Shiva Subrahmania Haro Murugā",
    "Hara Hara Murugā Shiva Shiva Murugā",
    "Shiva Shiva Murugā Sathya Sāi Murugā",
  ],

  "1425": [
    "Sāi Nādā Subrahmania Pazhani Āndi Sundarā",
    "Nyāna Velā Muttu Kumarā Parthi Nādā Sundarā",
    "Tanga Vela Vettri Veera Vel",
    "Shiva Shakti Vela Sāi Anbu Vel",
    "Mayilum Neeyum Ādi Vā Vā",
    "Mayilum Neeyum Odi Vā Vā",
    "Nyāna Velā Muttu Kumarā Parthi Nādā Sundarā",
  ],

  "1426": [
    "Saravana Hara Shiva Shanmukha Nāthā",
    "Pārvati Nandana Pranava Swarupā",
    "* Jyoti Swarupa Gnāna Pradātā",
    "Devaganārchita Jaya Kārtikeya",
    "Mayura Vāhana Pazhani Nivāsā",
    "Parthipurishwara Shri Sāi Devā",
    "Shri Sāi Devā Sathya Sāi Devā",
  ],

  "1427": [
    "Saravanabhava Kuga Sāi Murugā",
    "Yengal Shiva Shakti Bālā Sāi Murugā",
    "Pranava Swarupā Sāi Murugā",
    "Parthipuri Sathya Sāi Murugā",
    "Purāna Purushā Sāi Murugā",
    "Pāvana Purushā Sāi Murugā",
    "Sharanam Sharanam Sāi Murugā",
    "Shanmuga Nāthā Sāi Murugā",
  ],

  "1428": [
    "Saravanabhava Sathya Sāi Nāthā",
    "Satchidānandā Shiva Sāi Nāthā",
    "* Kārtikeyā Kandā Kumarā",
    "Karunānidhiyé Kaliyuga Devā",
    "Pranavākārā Parthipurishā",
  ],

  "1429": [
    "Saravanabhava Subrahmania Sāishā",
    "Shanmugā Shanmugā Odi Vā",
    "* Kandappā Murugesā Vā Vā Vā",
    "Velappā Mayuresā Vā Vā Vā",
    "Muttu Kumaresā Vā Vā Vā",
    "Odi Vā Ādi Vā Vā Vā Vā",
  ],

  "1430": [
    "Sathya Sāi (2) Bol, Sathya Sāi (2) Bol",
    "Sathya Sāi (2) Sāi Bābā Sathya Sāi",
    "Murugā Haro Harā Shirdi Sāi Bābā",
    "Murugā Haro Harā Parthi Sāi Bābā",
    "Vel Vel Murugā Shakti Vel Murugā (x2)",
    "Shirdishwarā Haro Harā",
    "Parthishwarā Haro Harā",
    "Vel Vel Murugā Vadivel Murugā (x2)",
  ],

  "1431": [
    "Shanmuga Shanmuga Sāi Sundara",
    "Shiva Saravana Bhava Om",
    "Guru Saravana Bhava Om",
    "Mangala Gauri Shankara Nandana",
    "Shiva Saravana Bhava Om",
    "Guru Saravana Bhava Om",
    "Parthi Vihāri Pranavākāri",
    "Shiva Saravana Bhava Om (x2)",
    "Guru Saravana Bhava Om",
  ],

  "1432": [
    "Shanmuga (2) Vadivelavā",
    "Shankari Shiva Bālā Sāishwarā",
    "Sāishwarā Sāishwarā",
    "Parthipurishwara Subrahmania",
    "Aum Shiva Subrahmania Om Sāi Subrahmania",
    "Hara Hara Murugā Sāishwarā",
  ],

  "1433": [
    "Sharanam Kugāya Sharanam Kugāya",
    "Saravanabhava Kuga Haro Harā",
    "Gajamukha Sodara Kārtikeyā",
    "Sharanam Sharanam Haro Harā",
    "Sharanam Kugāya Sharanam Kugāya",
    "Saravanabhava Kuga Haro Harā",
    "Gajamukha Sodara Kārtikeyā",
    "Sharanam Sharanam Haro Harā",
  ],

  "1434": [
    "Sharanam Pazhani Nāda Murugā",
    "Sāi Sharanam Shiva Kumāra Skandā",
    "Vela Murugan Subrahmaniam Parthi Nādā - Sāi",
    "Velāyudha Kārtikeya Shanmuga Nādā - Sāi",
    "* Mohana Rubā Devasenā Valli Nādā - Sāi",
    "Mohānaga Mayil Vāhanané Swāmi Nādā - Sāi",
  ],

  "1435": [
    "Shiva Kumārane Shakti Bālane Vā Vā Vā",
    "Saravanabhava Kuga Shanmuga Velā Vā Vā Vā",
    "Omkāra Tattuvame Ni Vā Vā Vā",
    "Parthipurishā Sāi Nādā Vā Vā Vā",
    "Kandā Vā Vā Vā",
    "Velā Vā Vā Vā",
    "Sāi Vā Vā Vā",
  ],

  "1436": [
    "Shiva Priya Nandana Bhava Bhaya Bhanjana",
    "Gauri Priya Suta Om Shadānana",
    "* Hey Mayurāsana Smita Vadanā",
    "Sindura Vadanā Shubha Charanā",
    "Shanmukha Nāthā Subrahmania Devā",
    "Shanmukha Nāthā Sathya Sāi Devā",
  ],

  "1437": [
    "Shiva Saravanabhava Shirdipurishwara",
    "Parthipuri Nāyaka Pārvati Bālā",
    "Kandā Shanmugā Kuga Ānanda Velavā",
    "Parthipuri Nāyaka Pārvati Bālā",
  ],

  "1438": [
    "Subrahmania Gurunādā",
    "Āramuga Saravanabhava Kuga Sāi Nādā",
    "Pannirugai Āndava Pacchai Mayil Vāgana",
    "Parthipuri Shiva Subrahmania",
    "Shakti Umai Bālā Sathya Sāi Nādā",
    "Swāmi Malai Kumaresā",
  ],

  "1439": [
    "Subrahmania Nādā Āramuga Velā",
    "Asura Samhārā Deena Dayālā",
    "Sendil Vadivela Sundara Gana Bālā",
    "Solai Malai Azhagā Valli Manālā",
    "Asura Samhārā Deena Dayālā",
  ],

  "1440": [
    "Subrahmania Shiva Shakti Velā",
    "Shiva Shiva Sāi Guru Nādā",
    "Parthipurishā Asura Samhārā",
    "Vettrivelāyudha Pāpa Vināshā",
    "Hara Hara Sāi Guru Nādā",
  ],

  "1441": [
    "Subrahmaniam Subrahmaniam",
    "Shanmuga Nādā Subrahmaniam",
    "Subrahmaniam Subrahmaniam",
    "Sāi Nādā Subrahmaniam",
    "Shiva (4) Subrahmaniam,",
    "Hara (4) Subrahmaniam",
    "Shiva (2) Hara (2) Subrahmaniam,",
    "Hara (2) Shiva (2) Subrahmaniam",
    "Shiva Saravanabhava Subrahmaniam",
    "Guru Saravanabhava Subrahmaniam",
    "Shiva (2) Hara (2) Subrahmaniam,",
    "Hara (2) Shiva (2) Subrahmaniam",
    "Shiva (2) Hara (2) Subrahmaniam",
    "Sāi Nāthā Subrahmaniam",
  ],

  "1442": [
    "Swāmināthā Sāi Karunā Sindhu Swāmi",
    "Pazhani Girivāsā Pārvati Nandanā",
    "Pranavākārā Shiva Subrahmania",
    "Skandā Kumara Valli Nāyaka",
    "Deenajanāvana Parthi Nāyaka",
  ],

  "1443": [
    "Tenpazhani Nādanikku Hara Haro Harā",
    "Yerumayil Velanikku Hara Haro Harā",
    "Hara Haro Harā Murugā Hara Haro Harā",
    "Hara Haro Harā Shanmugā Hara Haro Harā",
    "Swāmimalai Nādanikku Hara Haro Harā",
    "Tiruchendur Velanikku Hara Haro Harā",
    "Parthipuri Nādanikku Hara Haro Harā",
    "Shakti Vadivelanikku Hara Haro Harā",
  ],

  "1444": [
    "Umā Maheshwara Kumāra Gurubara",
    "Pazhani Subrahmania",
    "Bhaktajana Priya Pārvati Bālā Bāla Subrahmania",
    "Shiva (4) Shivāya Namah Om,",
    "Hara (4) Harāya Namah Om (x2)",
    "Shiva (6) Shanmugā",
    "Hara (6) Shanmugā",
  ],

  "1445": [
    "Vadivela Azhagā Murugā",
    "Vimalā Amarā Shanmugā",
    "Saravanabhava Kuga Shakti Velā (x2)",
    "Sathya Sāi Āndavā Shakti Velā",
    "Sathya Sāi Āndavā Parthi Lolā",
  ],

  "1446": [
    "Vadivela Kandappā Murugesané",
    "Sāi Kumaresa Parthisha Azhagesané",
    "Vadivela Kandappā Murugesané",
    "Vadivela Sundaresa Subrahmanyané",
    "Parthipuri Vāsané Nee Mayiloné",
    "Sāi Kumaresa Parthisha Azhagesané",
  ],

  "1447": [
    "Valli Malai Nādā Asura Samhārā",
    "Vettrivelāyudha (Shiva Bālā (3))",
    "* Sendil Velava Arupadai Veerā",
    "Saravanabhava Kuga (Shiva Bālā (3))",
  ],

  "1448": [
    "Valli Mohanā Sāi Mayil Vāhanā",
    "Āramuga Kandané Sundara Vadanā",
    "Kumarā Gurubara Sāishā Vadivelavā",
    "Murugā Hari Marugā Sathya Sāi Āndavā (x2)",
  ],

  "1449": [
    "Vā Vā Murugaiyā Vadivela Azhagā",
    "Vā (3) Kumarā Tiru Kārtikeyā",
    "Sāi Sāi (x3)",
    "Singāra Velā Shiva Shakti Bālā",
    "Sangeeta Lolā Sathya Sāishā",
    "Sāi Sāi (x3)",
  ],

  "1450": ["Vel Murugā Māl Marugā", "Saravanabhava Kuga Shakti Vadivelā", "Pazhani Girishā Vel Murugā", "Prashānti Nilaya Sāi Murugā"],

  "1451": [
    "Vel Murugā (2) Vel, Vel Murugā (2) Vel",
    "Vel Murugā Māl Pazhani Vel Murugā Vel Vel",
    "* Vel Vel Murugā – Vettrivel Murugā",
    "Vā Vā Vadivelā Vel Murugaiyā Vā Vā Vadivelā",
    "Vel Vel Murugā Āndavane",
    "Vel Vel Murugā – Vettrivel Murugā",
  ],

  "1452": [
    "Vel Vel Murugā Vadivela Murugā",
    "Vadivela Murugā Vettrivela Murugā",
    "Vettrivel Murugā Veeravel Murugā",
    "Veeravel Murugā Shaktivel Murugā",
    "Hara Hara Murugā Shiva Shiva Murugā",
    "Hara Shiva Murugā Sathya Sāi Murugā",
  ],

  "1453": [
    "Vel Vel Murugā Vadivela Murugā",
    "Vel Vel Murugā Gnānavela Murugā",
    "Vel Vel Murugā Kandavela Murugā",
    "Vel Vel Murugā Vadivela Azhagā",
    "Murugā (4)",
    "Murugā (2) Sathya Sāi Murugā (x2)",
    "Murugā (2) Vadivela Azhagā",
  ],

  "1454": [
    "Velāyudha Sāi Velāyudha",
    "Velavane Sāi Velāyudha",
    "Vel Murugā Māl Marugā Velāyudha",
    "Vettrivadivelavané Velāyudha",
    "Kandanikku Vel Vel Muruganikku Vel Vel",
  ],

  "1455": [
    "Vettrivelāyudha (3) Azhagā",
    "Vettrivelāyudha Sāi Shanmuga",
    "Shiva Subrahmania Azhagā",
    "Pazhani Girishā Kumāresā",
    "Tirumāl Marugā Sāi Murugesā",
    "Swāmi Malai Āndavā Azhagesā",
  ],

  "1500": [
    "Come Come To Me You Children Of The World",
    "Sāi Is Father Mother To All",
    "Love All Serve All This Is The Way To God",
    "* Love Gives And Forgives One And All",
    "Self Gets And Forgets One And All (x2)",
  ],

  "1501": [
    "Divine Father Soham You And I Are One",
    "Jesus Christ Soham You And I Are One",
    "Sāi Bābā Soham You And I Are One",
    "Soham Soham Soham You And I Are One",
  ],

  "1502": [
    "Divine Mother (3) Sāi Mā,",
    "Divine Mother (3) Sāi Mā",
    "Mā Sāi Mā, Mā Sāi Mā",
    "You Are Loving Sāi Mā You Are Caring Sāi Mā",
    "Satya Dharma Shānti Prema Ānanda Rupini Mā",
    "Mā Sāi Mā, Mā Sāi Mā",
    "Light The Lamp Of Love In Our Heart Sāi Mā",
    "You Are Here You Are There",
    "You Are Everywhere",
    "Mā Sāi Mā, Mā Sāi Mā",
  ],

  "1503": [
    "God Is Within You So Says Sāi Bābā",
    "Listen To The Voice Of Silence Within",
    "He Is In All Of Us",
    "The Light Is Within You So Says Sāi Bābā",
    "Open Your Heart To Your Fellowmen",
    "And Let His Love Flow Out",
    "God Is Love God Is Light",
    "God Is Light God Is Love",
  ],

  "1504": [
    "He Was Born In The Village Of Puttaparthi",
    "In A Land Far Across The Sea",
    "On A Beautiful November Morn",
    "When Music Divine Played On",
    "Sathya Nārāyanā Sathya Nārāyanā",
    "Sathya Nārāyanā Shri Sathya Sāi Bābā",
    "A Saviour Born To Reedeem Us All",
    "Little Sathya Nārāyanā",
    "Our Lord Divine Come To Show Us The Way",
    "Shri Sathya Sāi Avatār",
  ],

  "1505": [
    "I Bow To Thy Lotus Feet My Lord",
    "I Pray To Be Close To You Dear My Lord",
    "Sāi Rāmā Sāi Krishnā Sāi Allāh Sāi Jesus",
    "* You Are Truth You Are Peace",
    "You Are Love And Compassion",
    "You Are My Teacher You Are My Preacher",
    "You Are My Guide For Liberation",
  ],

  "1506": [
    "I Keep Feeling Your Love In Me",
    "Over And Over Again",
    "And It’s Sweeter And Sweeter",
    "As The Days Go By",
    "Oh What A Love Between My Lord And I",
    "My Lord And I My Sāi And I (x2)",
  ],

  "1507": [
    "I Love You Lord I Love You",
    "You And I Are One",
    "Shirdi Bābā Shri Sathya Sāi Nārāyana Sāi Bābā",
    "Let All Sing The Name Of Sāi",
    "Let Us Pray The Lord",
    "He Has Come On Earth For Us",
    "He Is Our Lord",
    "Let’s Rejoice And Follow Him",
    "Listen To His Words",
    "Do Not Look Outside For Him",
    "He Is In Our Hearts",
  ],

  "1508": [
    "I Love You With All My Heart Sāi Lord",
    "I Love With All My Soul Sāi Lord",
    "Only You Only You",
    "And To Know That You Live In My Heart",
    "Sāi Lord",
    "Makes Me Love You More Than Ever Sāi Lord",
    "All I Want All I Want",
    "True To You In Every Way",
  ],

  "1509": [
    "Listen To Sāi Bābā And What He Has To Say",
    "Sathya Sāi Bābā The God To Whom We Pray",
    "* Follow The Master Face The Devil",
    "Fight To The End And Finish The Game",
  ],

  "1510": [
    "Love All Serve All",
    "Listen To The Call Of The Lord",
    "Love All Serve All",
    "This Is The Call Of The Lord",
    "If You Love The Lord Then You Must Love All",
    "If You Serve The Lord",
    "Then You Must Serve All",
    "Love All Serve All",
    "Listen To The Call Of The Lord",
    "Love All Serve All",
    "This Is The Call Of The Lord",
    "See No Evil Speak No Evil",
    "Hear No Evil Says The Lord",
    "Think No Evil Do No Evil",
    "Love All Serve All Says The Lord",
  ],

  "1511": [
    "Love In My Heart Love In My Home",
    "Love In My Life Sāi Is Love",
    "Sāi In My Heart Sāi In My Home",
    "Sāi In My Life Sāi My Own",
    "Love Love Love Is God",
    "Live Live Live In Love",
  ],

  "1512": [
    "Love Is God God Is Love",
    "Love All Serve All Says Our Lord (x2)",
    "Free Us From Ego Free Us From Lust",
    "Free Us From Anger Free Us From Hate",
    "Help Everyone Hurt No One",
    "Burn All The Evil Desires",
  ],

  "1513": [
    "Love Is My Form Truth Is My Breath",
    "Bliss Is My Food",
    "My Life Is My Message Expansion Is My Life",
    "No Reason For Love No Season For Love",
    "No Birth No Death",
    "Prema Satya Ānanda Dharma Shānti Ahimsā",
    "Shirdi Sāi Sathya Sāi Prema Sāi Jai Jai",
    "Shirdi Bābā Sathya Bābā Prema Bābā Jai Jai",
  ],

  "1514": [
    "Love Is Thy Name O Sāi Rām",
    "Truth Is Thy Breath O Sāi Rām",
    "You Are Our Lord And Only One",
    "Give Us The Strength To Follow You",
    "Give Us The Love To Forgive All",
    "You Are Our Lord And Only One",
  ],

  "1515": [
    "Love Love Love God Is Love",
    "Live Live Live Live In Love",
    "Expand Your Heart To Encompass All",
    "Live Live In Love",
    "Your Master Is Your Heart",
    "Your Heart Where God Resides",
    "God Is In You With You Above You",
    "Around You And Behind You",
    "Love Love Is God",
    "Live Live In Love",
  ],

  "1516": [
    "Mother Oh Mother Sāi Mā,",
    "You Mean The World To Me Sāi Mā",
    "Mother Oh Mother Sāi Mā,",
    "You Are The Light Of My Life Sāi Mā",
    "Mā Sāi Mā (2)",
    "In Times Of Trouble And Despair",
    "I Call Your Name, You’re Always There",
    "You Guide Me Forever Each Day,",
    "With All Your Love,",
    "You Show Me The Way",
    "How Can We Thank You Oh Dear Sāi Mā",
    "For All Your Patience And Love Sāi Mā",
    "Mā Sāi Mā (2)",
  ],

  "1517": [
    "My Eyes They Thirst For You My Lord",
    "My Heart It Pines For You",
    "Teach Me How To Serve But You My Lord",
    "Show Me How To Love But You",
    "Lead Us All O Kindly Light",
    "Kindly Light O Kindly Light",
  ],

  "1518": [
    "My Heart Is Pining My Eyes Are Searching",
    "My Ears Are Yearning My Lips Are Calling",
    "And My Whole Self Is Waiting",
    "For You My Lord",
    "End My Craving My Lord Come Come To Me",
  ],

  "1519": [
    "Our Jesus Came And He Is Here Again",
    "Sāi Rāmā Sāi Krishnā Sāi Is His Name",
    "Mohammad Zorāshtra Yehovā Are The Same",
    "Jesus Christ Of Bethlehem",
    "And Sāi Are The Same",
    "Hāleluyāh (2) Glory To Thy Name",
    "Sathya Bābā Prema Bābā Blessed Be Thy Name",
  ],

  "1520": [
    "Repeat His Name Sāi Rām Sāi Rām",
    "Say It With Love Sāi Rām Sāi Rām",
    "Picture His Form Sāi Rām Sāi Rām",
    "He’s Everywhere Feel Him Shining Within You",
    "Rām (4) Sāi, Rām Rām Rām Rām",
  ],

  "1521": ["Sāi As Rāmā He Came To Teach Us", "Sāi As Krishnā He Came With Joy", "Sāi As Jesus He Came To Save Us", "And Now He Comes As Love (x2)"],

  "1522": [
    "Shālom Chāverim (2) Shālom Shālom",
    "Laihitrāòt (2) Shālom Shālom",
    "Glad Tidings We Bring Of Peace On Earth",
    "Goodwill Towards Man (x2)",
  ],

  "1523": ["Shālom Ālleluiā", "Ālleluiā Ālā", "Shri Rām Jai Rām Jai Jai Rām", "Shri Rām Jai Rām Jai Sāi Rām"],

  "1524": [
    "Swāgatam (2) Shri Sathya Sāi Swāgatam",
    "You Are Our Lord You Are Our Swāmi",
    "You Are Our Bābā Antaryāmi",
    "Come O My Lord O Come To Me",
    "* Deep In My Heart A Light Is Burning",
    "Deep In My Soul I Feel A Yearning",
    "Come O My Lord O Come To Me",
  ],

  "1525": [
    "Take My Hand Dear Sāi Sathya Sāi",
    "Take My Hand And Walk Me",
    "Through This Land",
    "Take My Hand Dear Sāi Sathya Sāi",
    "Take My Hand And Walk Me",
    "Through This Land",
    "Take My Heart My Lord Sathya Sāi",
    "Take My Life And Fill It With Your Love",
    "Let The Love In Me Be Love Divine",
    "Walk With Me My Lord Your Hand In Mine",
    "Sāi Rām Rām Sāi Rām (2)",
  ],

  "1526": [
    "There Are Many Races In This Land",
    "In Different Homes We Pray",
    "We Call Him By Different Names",
    "The One Who Shows The Way",
    "The One Who Shows The Way My Lord",
    "By What Name Can We Pray",
    "Krishna Buddha Jesus Allāh",
    "Come And Show The Way",
    "Your Children Here Do Pray",
    "Please Come And Show The Way",
  ],

  "1527": [
    "To Stand Alone You Give Me Strength",
    "Your Love Means More Than Any Wealth",
    "My Confused Mind You Made So Clear",
    "Wiped Every Tear Taught Me Not To Fear",
    "Oh Sāi Lord, I’m Grateful For The Love",
    "And Grace That You Bestow (x2)",
    "You Give Me Comfort When I Am Sad",
    "You Bring Me Hope When Things Seem Bad",
    "You Always Hear My Every Prayer",
    "Somehow I Know For Me You Care",
    "I’ll Face The World Afraid No More",
    "Oh Sāi Lord I Love You So (x2)",
  ],

  "1528": [
    "We Are Blessed (3)",
    "Sāi Bābā Is Watching Over Us",
    "We Are Here To Sing Your Sweet Name",
    "Let The Light Of Your Love Shine On Us",
    "Bless Us All With Your Presence Gurudev",
    "We Are Blessed (3)",
    "No More Tears, No More Sorrows,",
    "No More Death",
    "Banish The Darkness With Your Love – Sāi",
    "We Are Born In The Golden Age Of Sāi",
    "We Are Blessed (3)",
    "We Are Born In The Golden Age Of Sāi",
    "We Receive The Love Divine",
    "We Are Born In The Golden Age Of Sāi",
    "We Are Blessed (3)",
  ],

  "1529": [
    "We Are Brothers And Sisters All In One God",
    "Peace And Love Is What We Seek",
    "In The Good Lord",
    "We May Call And Worship God",
    "By Many Names",
    "But The God Of All Names Is Just The Same",
    "God Has Come In Life For Us To Purify",
    "Came As Rāmā, Krishnā, Buddhā,",
    "Jesus, Shirdi Sāi",
    "Hail To Rāmā Hail To Krishnā",
    "Hail To Buddhā And Hail To Jesus",
    "Hail To Shirdi And Sathya Sāi",
    "Hail To All These",
    "Loving Divine Teachers",
  ],

  "1530": [
    "Chantons L’Amour Chantons La Joie",
    "Chantons La Paix Chantons Sāi",
    "Le Christ Est Avec Nous",
    "Venez Vous Rechauffer",
    "Sāi Est Avec Nous Venez Vous Consoler",
    "Venez Venez Il Est L’Ami,",
    "Venez Venez Il Est La Vie (x2)",
  ],

  "1531": [
    "Mon Coeur T’appelle La Nuit Et Le Jour",
    "De Colline En Colline Mes Yeux Te Cherchent",
    "Pourquoi Ne M’apparais-Tu Pas Seigneur",
    "Dans Le Silence De La Nuit Seigneur",
    "Je T’aime Plus Que Jamais Seigneur",
    "O Viens Vers Moi Seigneur (x2)",
  ],

  "1532": [
    "Seigneur Toi Qui Es Notre Sauveur",
    "Toi Qui Es Notre Lumiere",
    "Toi Qui Es Dans Notre Coeur",
    "Toi Donc La Bonté Inonde",
    "Toi Qui Aime Tout Le Monde",
    "Ecoutes Ma Prière Seigneur",
    "Ne Desertes Pas Mon Coeur",
    "Fais De Moi Ton Serviteur",
  ],

  "1533": [
    "Viens Dans Mon Coeur Seigneur",
    "Ton Nom Y Est Inscrit",
    "Donnes Moi L’Amour Donnes Moi La Paix",
    "Viens Dans Mon Coeur Seigneur",
    "Chaque Jour Je Ne Prie Que Toi",
    "Chaque Jour Je Ne Pense Qu’à Toi",
    "Donnes Moi La Vie Donnes Moi L’espoir",
    "Viens Dans Mon Coeur Seigneur",
  ],

  "1600": [
    "Allāh (3) Ishwara Rām",
    "Maulāh (3) Sāi Nām",
    "Allāh Yeshu Buddha Mahāveer",
    "Gautam Guru Govindaji Nānaka",
    "Prashānti Sāi Sab Kā Mālik",
    "Allāh Ho Sāi Maulāh Ho Sāi",
  ],

  "1601": [
    "Allāh Allāh Karo Phukār",
    "Sathya Sāi Ki Jaijaikār",
    "Yeshu Pitā Ki Jaijaikār",
    "Mahāveer Ki Jaijaikār",
    "Zorāshtra Ki Jaijaikār",
    "Sarva Dharma Ki Jaijaikār",
  ],

  "1602": ["Allāh Allāh Sāi Bābā", "Yeshu Masihā Sāi Bābā", "* Nānaka Shri Buddha Sāi Bābā", "Zorāshtra Mahāveer Sāi Bābā"],

  "1603": [
    "Allāh Bhajo Maulāh Bhajo",
    "Hey Allāh Sāi Bhagavān",
    "Sāi Rām Bhajo Sāi Krishna Bhajo",
    "Hey Rām Krishna Bhagavān",
    "Nānaka Bhajo Gautam Bhajo",
    "Hey Buddha Sāi Bhagavān",
    "Yeshu Bhajo Zorāshtra Bhajo",
    "Hey Mahāveer Bhagavān",
    "Sāi Bhajo Shirdi Sāi Bhajo",
    "Hey Shirdi Sāi Bhagavān",
    "Sathya Bhajo Sathya Sāi Bhajo",
    "Hey Sathya Sāi Bhagavān",
  ],

  "1604": [
    "Allāh Ho Akhbar (2) Allāh Bhi Tum Ho",
    "Rām Rām Sāi Krishna Krishna Sāi",
    "Sāi Rām Tum Ho",
    "Rām Rahim Tum Ho Krishna Karim Tum Ho",
    "Buddha Zorāshtra Yeshu Prabhu",
    "Guru Nānak Bhi Tum Ho",
    "Sarva Dharma Priya Shānti Pradāyaka",
    "Sathya Sāi Tum Ho",
  ],

  "1605": [
    "Allāh Ho Akhbar (3)",
    "Yeshu Pitā Prabhu Allāh Ho Akhbar",
    "Shirdi Sāi Parthi Sāi Tum Ho",
    "Guru Nānak Bhi Tum Ho",
    "Zorāshtra Mahāveer Tum Ho",
    "Yeshu Pitā Prabhu Tum Ho",
    "Sāi Allāh Ho Akhbar Tum Ho",
  ],

  "1606": [
    "Allāh Ho Akhbar (2) Sāi Teré Nām",
    "Allāh Teré Nām Maulāh Teré Nām",
    "Buddha Zorāshtra Yeshu Mahāveer",
    "Sab Hein Sāi Bhagavān",
    "Allāh Ho (3) Akhbar",
    "Buddha Zorāshtra Yeshu Mahāveer",
    "Sab Hein Sāi Bhagavān",
    "Allāh Teré Nām Maulāh Teré Nām",
  ],

  "1607": [
    "Allāh Ho (3) Akhbar, Salāmallaikum (3) Salām",
    "Buddha Zorāshtra Yeshu Mahāveera",
    "Nānakaji Ki Jai Jai Gāo",
    "Sāi Nātha Ki Jai Jai Gāo",
    "Salāmallaikum (3) Salām",
  ],

  "1608": [
    "Allāh Is Compassionate, Love He Radiates",
    "Allāh He Is Merciful, He Is Full Of Grace",
    "Alham Dullilāh Alham Dullilāh",
    "Praise Be To God Alham Dullilāh",
    "Allāh Ho Akhbar Allāh Ho Akhbar",
    "God Is Great God Is Great",
    "Allāh Ho Akhbar",
  ],

  "1609": [
    "Allāh Ishwara Ek Hi Nām",
    "Bhajoré Manwā Bābā Nām",
    "* Allāh Bolo Ishwara Bolo Bolo Sāi Rām",
    "Nānaka Bolo Yeshu Bolo Bolo Sāi Rām",
    "Gautam Buddha Mahāveera Bolo Bolo Sāi Rām",
    "Bolo Sāi Rām Bolo Bolo Sāi Rām",
  ],

  "1610": [
    "Allāh Ishwara Ek Hi Nām",
    "Sab Mil Bolo Hari Kā Nāma",
    "Rām Rahim Yeshu Sāi Nām",
    "Buddha Zorāshtra Mahāveer Nām",
    "Ek Omkār Bolo Jai Satya Nām",
    "Vāhé Guru (2) Nānaka Nām",
  ],

  "1611": [
    "Allāh Ishwara Sāi Bābā",
    "Sab Dharmon Ké Tum Ho Vidhātā",
    "Sāi Maheshā Sāi Nārāyana",
    "Nānaka Yeshu Buddhā Mahāveera",
    "Rām Rahim Krishna Karim",
    "Sarva Dharma Priya Sāi Shankara",
    "Yuga Avatārā Sāi Haré",
  ],

  "1612": [
    "Allāh Kaho Yā Maulāh Kaho",
    "Sab Kā Mālik Ek Sab Kā Mālik Ek",
    "Rām Krishna Rahmān",
    "Yeshu Buddha Ghanashyām",
    "Zorāshtra Mahāveer Tu Jagannātha Prabhu Tu",
    "Sab Kā Mālik Ek Sab Kā Mālik Ek",
  ],

  "1613": ["Allāh Nām Teré Nām", "Sāi Nām Eka Hi Nām", "Yeshu Nānak Bābā Nām", "Buddha Mahāveera Sāi Nām (x2)", "Sāi Nām Eka Hi Nām"],

  "1614": [
    "Allāh Sāi Bolo Sāishwara Bolo",
    "Mandira Mé Vo Masjida Mé Vo",
    "Sāi Nām Sab Bhakton Sukhadāyi",
    "Allāh Nām Sadā Bhajoré Bhāyi",
    "Sab Bhakton Ké Priya Avatār Tu",
    "Sab Prāniyon Ké Jeevan Sahārā Tu",
  ],

  "1615": ["Allāh Sāi Maulāh Sāi", "Satguru Sāi Antaryāmi", "Nānak Sāi Prema Sāi", "Yeshu Sāi Karunā Sāgara", "Sarva Dharma Priya Sathya Sāi"],

  "1616": [
    "Allāh Sāi Sunlé Meri Phukār",
    "Sunlé Meri Phukār Sunlé Meri Phukār",
    "Sarva Dharma Priya Sāi Nātha",
    "* Koyi Bolé Allāh Khudā",
    "Koyi Bolé Yeshu Pitā (x2)",
    "Sarva Dharma Priya Sāi Nātha",
  ],

  "1617": [
    "Allāh Teré Kitné Pyāré Nām",
    "Allāh Teré Kitné Pyāré Nām",
    "Kitné Pyāré Nām",
    "Koyi Kahé Allāh Koyi Kahé Khudā",
    "Allāh Sāi Ek Hi Hai Aneka Teré Nām",
    "* Koyi Phukāré Tum Ko Rahim",
    "Koyi Phukaré Tum Ko Karim",
    "Koyi Kahé Tujhé Noor Muhammad",
    "Koyi Kahé Tujhé Khudā",
    "Allāh Sāi Ek Hi Hai Aneka Teré Nām",
  ],

  "1618": ["Allāh Tero Nām Sāi Ishwar Tero Nām", "Yeshu Pitā Guru Nānaka Tum Ho", "Sab Kā Mālika Ek Hai Sāi"],

  "1619": [
    "Allāh Tum Ho Ishwara Tum Ho",
    "Tum Hi Ho Rām Rahim",
    "Tum Hi Ho Krishna Karim",
    "Yeshu Tum Ho Nānak Tum Ho",
    "Zorāshtra Bhi Ho Mahāveera Tum Ho",
    "Gautam Buddha Karim",
    "Meré Rām (2) Rām Rahim (x3)",
    "Meré Rām (2) Sathya Sāi Rām",
  ],

  "1620": [
    "Allāh Tum Ishwara Bhi Tum",
    "Mahāveer Nānak Rām",
    "Parthisha Sāi Shankarā",
    "Tum Hi Ho Meré Shyāma",
    "* Zorāshtra Yeshu Buddha Tum Ho",
    "Sab Ké Pālanhār",
    "Satchidānanda Sāi Terā",
    "Brindāvana Shubha Dhām",
  ],

  "1621": [
    "Antaryāmi Sab Kā Ek",
    "Ātmā Ek Paramātmā Ek",
    "Hindu Ho Yā Musalmān Parsee Isāyi Chini",
    "Sab Mé Basā Hai Bhagavān",
    "Sab Dharmon Ké Sāi Rām",
  ],

  "1622": [
    "Āo Āo Jaga Mangala Dātā",
    "Shirdipurishwara Rām",
    "Parthipurishwara Rām",
    "Allāh Yeshu Nānaka Mahāveer",
    "Buddha Zorāshtra Sab Tum Ho",
    "Sāi Antarjyoti Jalāo Rām",
    "Mana Mandira Mé Tu Antaryāmi",
    "Sab Dukha Bhanjana Rām Pāpa Mitāo Shyām",
  ],

  "1623": [
    "Berā Pār Karo Meré Sāi",
    "Uddhār Karo Meré Bābā",
    "* Allāh Ishwar Sāi Bābā",
    "Shirdi Bābā Parthi Bābā",
    "Raham Nazar Karo Sāi Bābā",
    "Dayā Karo Sāi Kripā Karo",
  ],

  "1624": [
    "Bhajoré Mānasa Sāi Rām",
    "Parthipuri Ké Sāi Bhagavān",
    "* Ishwar Allāh Teré Nām",
    "Yeshu Buddha Bhi Teré Nām",
    "Shirdipuri Ké Sāi Bhagavān",
    "Parthipuri Ké Sāi Bhagavān",
  ],

  "1625": [
    "Bhavasāgara Se Pār Utāro",
    "Sāi Nātha Bhagavān",
    "Allāh Yeshu Buddha Mahāveera",
    "Sab Nāmon Ki Eka Hai Mahimā",
    "Sarva Dharma Ké Pālanahāré",
    "Sāi Nātha Bhagavān",
  ],

  "1626": [
    "Bhuvana Bāndhava Sāi Bhagavān",
    "Mātā Pitā Bandhu Sakhā Tum Ho Bhagavān",
    "Ishwar Bhi Tum Ho Allāh Nānaka Tum Ho",
    "Prabhu Yeshu Tum Ho Mahāveer Tum Ho",
    "Buddha Deva Tum Ho",
    "Meré Prāna Nātha Tum Ho",
    "Sāi Rām Sāi Rām (x2)",
  ],

  "1627": [
    "Deena Dukhiyon Ké Tārana Kārana",
    "Tu Hai Ishā Masihā O Sāi Bābā",
    "* Dharma Uddhārana Bhakta Parāyana",
    "Ādi Nārāyana Sāi",
    "Alaka Niranjana Bhava Bhaya Bhanjana",
    "Parthi Nārāyana Sāi",
  ],

  "1628": [
    "Eeraivā (7) Nee Vā Eeraivā",
    "Bhagavān (7) Ā Bhi Jā Bhagavān",
    "Oh My Lord Sweet Lord Oh My Lord",
    "Dear Lord Oh My Lord Sweet Lord",
    "Oh My Lord Come To Me Dear God",
    "O Seigneur (7) Viens Vers Moi O Seigneur",
    "Woh Te Choo Chen Choo (3)",
    "Woh Te Choo Cheng Nee Lai",
    "Cheng Nee Lai",
  ],

  "1629": [
    "Ek Mantra Japté Raho Sāi Rām Rām",
    "Allāh Yeshu Buddha Nānaka Sab Hai Sāi Rām",
    "Sāi Rām Nām Japo Sāi Rām Rām",
    "Zorāshtra Mahāveera Sāi Rām Rām",
    "Mātā Pitā Bandhu Sakhā Sab Hai Sāi Rām",
    "Sāi Rām Nām Japo Sāi Rām Rām",
  ],

  "1630": [
    "Govinda Bolo Gopāla Bolo",
    "Rām Rām Bolo Hari Nām Bolo",
    "Allāh Mālik Ishā Nānaka",
    "Zorāshtra Mahāveera Buddha Nām Bolo",
    "* Yé Nām Sāré Hein Jeevan Sahāré",
    "Paramānanda Ké Kholté Hein Dwāré",
    "Jo Nām Chāho Vo Nām Bolo",
    "Prema Se Bolo Bhāva Se Bolo",
  ],

  "1631": [
    "Guru Nānakaji Ki Jaijaikār",
    "Jo Bowé So Howé Nihāl",
    "Allāh Sāi Lelo Salām",
    "Maulāh Sāi Lelo Salām",
    "Salām Salām Lākhon Salām",
    "Yeshu Pitā Prabhu Sāi Rām",
    "Buddha Zorāshtra Mahāveera Rām",
    "Allāh Sāi Lelo Salām",
    "Maulāh Sāi Lelo Salām",
    "Salām Salām Lākhon Salām",
  ],

  "1632": [
    "Guru Om (2) Jai Jai Jaya Guru Om",
    "Tu Hai Allāh Tu Hai Ishwar",
    "Sab Ké Rām Guru Om (2)",
    "* Tu Hai Krishnā Tu Hai Buddhā",
    "Parama Pitā Guru Om (3)",
  ],

  "1633": [
    "Haré Murāri Sāi Rām Haré Murāri Rām",
    "Parama Sumangala Sāi Rām",
    "Parama Sumangala Rām",
    "Ishwar Allāh Teré Nām Sab Tum Ho Bhagavān",
    "Ishwar Allāh Ek Hai Sab Tum Ho Bhagavān",
    "Parama Sumangala Sāi Rām",
    "Parama Sumangala Rām",
  ],

  "1634": [
    "Ishwar Allāh Buddha Yehovā God Is Only One",
    "Nānak Mahāveer Yeshu Mohammad",
    "So Said Everyone",
    "So Says Our Lord, Sathya Sāi Rām",
    "Love Is The Only Religion Of Man",
    "Love Is God, God Is Love",
    "Loving All Beings Is Loving God",
    "So Says Our Lord, Sathya Sāi Rām",
  ],

  "1635": [
    "Ishwar Allāh Ek Tum Hi Ho",
    "Karunā Sindhu Rām",
    "Deenajanon Ké Jeevana Sahāré",
    "Bhaktajanon Ké Jeevana Sahāré",
    "Dayā Karo Bhagavān",
    "(Sab Par) Kripā Karo Bhagavān",
    "Karunā Sāgara Dayābhi Rām",
  ],

  "1636": [
    "Ishwar Allāh Teré Nām Sāi Teré Nām",
    "Sarva Dharma Priya Sāi Rām Sathya Sāi Rām",
    "Allāh Sāi Maulāh Sāi",
    "Yeshu Buddha Sāi Hey Mahāveera Sāi",
    "Govinda Sāi Gopāla Sāi Nānaka Sāi",
    "Sarva Dharma Priya Sāi Rām Sathya Sāi Rām",
  ],

  "1637": [
    "Jagadisha Haré Jaya Ho",
    "Jagadoddhārā Jaya Jaya Ho",
    "* Allāh Yeshu Nānaka Sāi",
    "Antaryāmi Buddha Mahāveera",
    "Zorāshtra Sarva Dharma Priya Devā",
    "Prashānti Nivāsā Sathya Sāi Devā",
    "Jaya Ho Jaya Ho (x2)",
  ],

  "1638": [
    "Jaya Guru Omkārā",
    "Satguru Omkārā",
    "Allāh Tum Ho Ishwara Tum Ho",
    "Buddha Zorāshtra Mahāveera Tum Ho",
    "Sab Kā Mālika Bābā Tum Ho",
    "Parama Guru Sāi Pāvana Tum Ho",
  ],

  "1639": [
    "Jaya Ho Sāi Rām (2)",
    "Karunā Sindhu Rām",
    "Puttaparthipurishwar Rām",
    "* Tretā Yuga Mé Rām",
    "Dwāpara Yuga Mé Shyāma",
    "Rām Tu Hi Rahmān Sāi",
    "Sab Kā Hai Bhagavān",
    "Kaliyuga Ké Avatar Puttaparthipurishwara Rām",
  ],

  "1640": [
    "Karunā Sāgara Prema Swarupā",
    "Kshāpa Vimochana Rām",
    "Dukha Bhanjana Shri Rām",
    "Allāh Ishwara Teré Nām",
    "Nānaka Yeshu Teré Nām",
    "Parthipurishwara Deena Dayāgana",
    "Dukha Bhanjana Shri Rām",
  ],

  "1641": [
    "Kāshi Mathurā Hai Parthi Mé",
    "Hai Shirdi Aur Kābā",
    "Rom Rom Mé Sāi Basé Hein",
    "Ghar Ghar Mé Sāi Rāmā",
    "Hindu Karé Pranām Tujhko",
    "Muslim Karé Salām – Sāi",
  ],

  "1642": [
    "Koyi Bolé Hari Hari Koyi Bolé Rām Rām",
    "Koyi Bolé Durgā Kāli Koyi Bolé Sāi Mā",
    "* Koyi Bolé Nārāyana Allāh Bismillāh",
    "Koyi Bolé Nānaka Buddha Mahāveerā",
    "Sādhu Santa Phakira Jāné Sab Hein Tero Nām",
    "Bol Man Allāh Mālik Bol Man Sāi Rām",
  ],

  "1643": [
    "Kis Bid Tumhein Phukāroun Bhagavan",
    "Pyāré Meré Sāi",
    "Rādhéshyām Ho Seetārām Ho",
    "Rahiman Ho Yā Rām",
    "Hindu Ho Yā Muslim Ho Sab Hein Ek Samān",
    "Meré Bābā Ké Liyé Musalmān Aur Hindu",
    "Do Nayana Samān",
    "Rādhéshyām Ho Seetārām Ho",
    "Rahiman Ho Yā Rām",
  ],

  "1644": [
    "Mahādevā Maheshwarā Sāi Nārāyanā",
    "Natanāgarā Dukha Bhanjanā Sāi Nārāyanā",
    "Karunākarā Akhileshwarā Sāi Nārāyanā",
    "Allāh Ho Tum Mahāveera Yeshu Sāi Nārāyanā",
    "Hridayeshwarā Parthishwarā Sāi Nārāyanā",
  ],

  "1645": [
    "Mānava Sevā Mādhava Sevā",
    "Sab Bhakton Kā Yehi Sandesh Hai",
    "* Vo Hi Allāh Vo Hi Ishwara",
    "Sab Dharmon Kā Pyārā Masihā",
    "Mandir Mé Bhi Hai Masjida Mé Bhi Hai",
    "Sab Janon Kā Pyārā Avatārā",
  ],

  "1646": [
    "Mandir Masjid Aur Gurudwāré",
    "Sab Hein Teré Dhām",
    "Sāi Teré Dhām Prashānti Nilaya Dhām",
    "Rām Kaho Rahmān Kaho Sab Hein Teré Nām",
    "Ātma Nivāsi Rām Sāi Bhagavān",
    "Dwārkāmāyi Kābā Kāshi Sab Hein Teré Dhām",
  ],

  "1647": [
    "Mandira Mé Shyām Vohi Hai",
    "Masjida Mé Allāh Ho Akhbar",
    "Ek Prabhu Aneka Nām",
    "Sab Kā Mālik Ek",
    "Prema Avatār Yeshu Tum Ho Sāi",
    "Dharmāvatār Tu Buddha Bhi Ho",
    "Nānaka Guru Mahāveer Tirthankarā",
    "Sab Kā Mālik Ek",
  ],

  "1648": [
    "Mandir Mé Tum Rām Ho Sāi",
    "Masjida Mé Noor Mohammad",
    "Gurudwāré Mé Tum Guru Nānak",
    "Man Mandir Mé Sāi Sāi",
    "Bolo Rām Eka Hi Nām",
    "Bolo Rām Eka Hi Nām",
    "Sab Mil Bolo Sāi Rām",
  ],

  "1649": [
    "Masjida Mé Tu Noor Mohammad",
    "Gurudwār Mé Tu Guru Nānak",
    "Girijāghara Mé Tu Yeshu Krishtu",
    "Mandira Mé Bhagavān – Mana",
    "Rām Rahim Tu Krishna Karim",
    "Zorāshtra Mahāveera Tirthankarā",
    "Sāi Rām Bhagavān (x2)",
    "Sāi Rām Rām Rām Bhagavān",
  ],

  "1650": [
    "Mātā Pitā Guru Bandhu Sakhā Hari",
    "Nārāyanā Hari Nārāyanā (x2)",
    "Allāh Tum Ho Yeshu Tum Ho",
    "Buddha Zorāshtra Mahāveera Tum Ho",
    "Sab Kā Mālika Ek Hai Bhagavan",
    "Nārāyanā Hari Nārāyanā",
  ],

  "1651": [
    "Mero Mana Sāi Binā Nahin Lāgé",
    "Sāi Binā Mero Mana Nahin Lāgé",
    "Prabhu Parameshwara Ishā Masihā",
    "Ishā Masihā Ishā Masihā",
    "Prabhu Parameshwara Ishā Masihā",
    "Guru Nānaka Ki Eka Hi Mahimā",
    "Allāh Nām Ki Eka Hi Mahimā",
    "Mahāveera Ki Eka Hi Mahimā",
    "Mero Mana Sāi Binā Nahin Lāgé",
    "Sab Santon Ki Eka Hi Mahimā – 3",
  ],

  "1652": [
    "Mujh Pé Dayā Karo Sāi Bābā",
    "Hari Kripā Karo Bābā",
    "Rām Kaho Yā Allāh Kaho",
    "Krishna Kaho Yā Yeshu Kaho",
    "Zorāshtra Kaho Mahāveer Kaho",
    "Buddha Kaho Sathya Sāi Kaho",
  ],

  "1653": [
    "Namo Bhagavaté Vāsudevāya",
    "Namo Bhagavaté Rām Rupāya",
    "Namo Bhagavaté Shyāma Rupāya",
    "* Rām Rahim Krishna Karim",
    "Yeshu Buddha Mahāveera",
    "Sarva Dharma Priya Sāi Devāya (x2)",
  ],

  "1654": [
    "O Meré Rām Meré Rām Satguru Rām Sāi Rām",
    "Tu Hi Allāh Tu Hi Yeshu",
    "Tu Hi Nānaka Tu Zorāshtra",
    "Tu Hi Buddha Sab Kā Mālika",
    "Lelo Lelo Meré Pranām (x3)",
  ],

  "1655": [
    "Pār Karo Uddhār Karo",
    "Prabhu Parthipuri Bhagavān",
    "Haré Rām Rām Rām",
    "Ghanashyām Shyām Shyām",
    "Hey Sāi Nātha Bhagavān",
    "Deena Dayākara Karunā Murti",
    "Kaliyuga Avatāra Sāi Bhagavān",
    "Allāh Sāi Buddha Zorāshtra",
    "Yeshu Krishtu Bhagavān",
  ],

  "1657": [
    "Parthi Vihārā Pāpa Vidurā",
    "Pāvana Charanā Sāi Nārāyanā",
    "Allāh Tum Ho Yeshu Tum Ho",
    "Sab Kā Mālika Sāi Tum Ho",
    "Buddha Zorāshtra Nānaka Tum Ho",
    "Tum Ho Bābā Antaryāmi",
    "Sab Dharmon Ké Pālanhāré",
    "Kaliyuga Avatārā Sāi Nārāyana",
  ],

  "1656": [
    "Parthishwara Shri Sāi Prabho",
    "Eeshwarāmbā Nandana Sāi Prabho",
    "* Ishwara Allāh Shri Sāi Rām Nām",
    "Buddha Zorāshtrā Sāi Krishna Nām",
    "Mādhava Mohana Sāi Nārāyana",
    "Premāvatārā Prabhu Sāi Rāmā",
  ],

  "1658": [
    "Pranām Pranām Bābā",
    "Salām Salām Sāi",
    "Namo Namo Sāi",
    "* Ishwara Allāh Yeshu Pitā Prabhu",
    "Buddha Mahāveer Tum Hi Ho Sāi",
    "Sarva Dharmon Ké Mālik Sāi",
    "Bhaktajanon Ké Jeevana Sāi",
  ],

  "1659": [
    "Pranām Swikāra Karo Sāi Mahādevā",
    "Sāi Mahādevā Sāi Mahādevā",
    "* Allāh Ishwara Yeshu Sāi",
    "Buddha Mahāveer Nānaka Sāi",
    "Natana Sutradhāri Jagannātha Sāi",
    "Sāi Mahādevā Sāi Mahādevā",
  ],

  "1660": [
    "Prema Ishwara Hai Ishwara Prema Hai",
    "Ishwara Prema Hai, Prema Ishwara Hai",
    "Har Dharkan Mé Sāi Samā Hai",
    "Ishwara Prema Hai",
    "* Rām Rahim Buddha Karim",
    "Zorāshtra Yeshu Nānaka",
    "Koyi Bhi Nāma Japoré Manwā",
    "Ishwara Prema Hai",
  ],

  "1661": [
    "Purna Brahma Avatārā Sāi",
    "Sakala Jagata Ādhārā Sāi",
    "* Allāh Yeshu Bābā Sāi",
    "Buddha Mahāveer Nānak Sāi",
    "Sab Bhakton Ké Bābā Sāi",
    "Sarva Dharma Avatārā Sāi",
  ],

  "1662": [
    "Rahiman Rahiman Rām Rahim",
    "Rām Rahim Sāi Krishna Karim (x2)",
    "Buddha Zorāshtra Nānak Sāi",
    "Yeshu Pitā Prabhu Sāi Tum Ho",
    "Bhajoré Manwā Rām Rahim",
    "Sāi Rām Sāi Shyām Krishna Karim",
  ],

  "1663": [
    "Rām Bolo Rahim Bolo",
    "Nānaka Bolo Buddha Sāi Bolo",
    "* Yeshu Bolo Zorāshtra Bolo",
    "Mahāveera Bolo Maheshwara Bolo",
    "Prema Se Bolo Bhāva Se Bolo",
  ],

  "1664": [
    "Rām Haré Sāi Krishna Haré",
    "Sarva Dharma Priya Sāi Haré",
    "Allāh Ishwara Sāi Haré",
    "Nānaka Yeshu Buddha Haré",
    "Zorāshtra Mahāveer Sāi Haré",
    "Sarva Dharma Priya Sāi Haré",
  ],

  "1665": [
    "Rām Haré Sāi Krishna Haré",
    "Sarva Dharma Priyé Sāi Haré (x2)",
    "* Ishwara Allāh Sāi Haré",
    "Nānaka Yeshu Buddha Haré",
    "Zorāshtra Mahāveer Sāi Haré",
    "Jai Sarva Dharma Priyé Sāi Haré",
  ],

  "1666": [
    "Rām Hari Hari Nām Bolo",
    "Hari Nām Bolo Sāi Nām Bolo",
    "* Sāi Rāmā Parama Dayālā",
    "Parama Dayālā Parama Kripālā",
    "Mana Mandira Mé Kiyā Ujālā",
    "Allāh Sāi Bolo Maulāh Sāi Bolo (x3)",
  ],

  "1667": [
    "Rām Kaho Krishna Kaho",
    "Ishwara Allāh Sāi Kaho",
    "Buddha Kaho Guru Nānak Kaho",
    "Zorāshtra Mahāveera Yeshu Kaho",
    "* Yugavatāra Tum Ho Sakala Vishwa Tum Ho",
    "Sarva Dharma Priya Sāi Maheshā",
    "Parabrahma Tum Ho",
  ],

  "1668": [
    "Rām Kaho Sāi Rām Kaho",
    "Shyāma Kaho Ghanashyāma Kaho",
    "Yeshu Kaho Zorāshtra Kaho",
    "Jag Kā Vidhātā Sāi Kaho",
    "Mandir Mé Kabhi Masjida Mé",
    "Apnā Hridaya Mé Sāi Bhagavān",
  ],

  "1669": [
    "Rām Krishna Prabhu Tu Hey Rām Hey Rām",
    "Sāi Krishna Prabhu Tu Sāi Rām Sāi Rām",
    "Yeshu Pitā Prabhu Tu Hey Rām Hey Rām",
    "Allāh Ishwara Tu Allāh Ho Akhbar",
    "Shirdi Sāi Prabhu Tu Sāi Rām Sāi Rām",
    "Sathya Sāi Prabhu Tu Sāi Rām Sāi Rām",
  ],

  "1670": [
    "Rām Rahim Ko Bhajanéwālé Teré Poojāri Bābā",
    "Terā Nāma Ek Sahārā (x2)",
    "Sāi Nāma Ek Sahārā",
    "Tum Hi Ho Geetā Tum Hi Rāmāyana",
    "Tum Hi Ho Veda Purāna",
    "Terā Nāma Ek Sahārā (x2)",
    "Sāi Nāma Ek Sahārā",
    "Satya Dharma Ki Jyoti Jalāné Āyé Parthi Vihāri",
    "Terā Nāma Ek Sahārā (x2)",
    "Sāi Nāma Ek Sahārā",
  ],

  "1671": [
    "Rām Rahim (2) Bhajoré Manwā Rām Rahim",
    "Dwārakamāyi Rām Rahim",
    "Sarva Dharma Priya Sāi Rahim",
    "Parthipuri Mé Janam Liyā",
    "Prabhu Paramātmā Sāi Rahim",
  ],

  "1672": [
    "Rām (4) (x2)",
    "Rām Nām Sukha Ko Dhāma (x2)",
    "* Buddha Nām Shānti Dhāma",
    "Isā Nām Prema Dhāma (x2)",
    "* Mohammad Nām Dharma Dhāma",
    "Sāi Nām Satya Dhāma",
  ],

  "1673": [
    "Rām (3) Sāi Rām Namo",
    "Krishna (3) Sāi Krishnā Namo",
    "Yeshu (3) Sāi Yeshu Namo",
    "Buddha (3) Sāi Buddha Namo",
    "* Allāh (3) Sāi Allāh Namo",
    "Zorāshtra (2) Sāi Namo",
    "Mahāveer (2) Sāi Namo",
    "Guru Nānak (2) Nānak Namo",
  ],

  "1674": [
    "Sab Kā Mālika Sāi Haré",
    "Sab Dharmon Ké Sāi Haré",
    "* Ishwara Allāh Sāi Haré",
    "Yeshu Mahāveera Sāi Haré",
    "Buddha Zorāshtra Sāi Haré",
    "Satguru Nānaka Sāi Haré",
    "Satya Dharma Prema Sāi Haré",
    "Sarva Rupa Sathya Sāi Haré",
  ],

  "1675": [
    "Sāi Bābā Pranām",
    "Shirdi Bābā Pranām",
    "O Meré Ātmā Rām",
    "Lelo Meré Pranām",
    "Allāh Ishwara Rām",
    "Sab Ké Ghar Sāi Rām",
    "Purana Karo Meré Kām",
    "Parama Shānti Priya Rām",
    "Sarva Dharma Priya Rām (x2)",
  ],

  "1676": [
    "Sāi Bābā Sāi Bābā Japté Raho Sāi Nām",
    "Allāh Sāi Maulāh Sāi Leté Raho Sāi Nām",
    "Sab Hai Sāi Kā Nām",
    "* Yeshu Nānak Buddha Sāi Zorāshtra Mahāveer",
    "Sab Ké Hein Sāi Nām",
  ],

  "1677": [
    "Sāi Bābā Terā Nām Sathya Sāi Bābā Terā Nām",
    "Tu Hi Brahmā Tu Hi Vishnu",
    "Tu Hi Nānaka Tu Hi Yeshu",
    "Tu Hi Buddhā Tu Zorāshtrā",
    "Tu Hi Allāh Tu Mahāveer",
    "Sab Hein Sāi Bhagavān (x2)",
    "Sāi Rām (2) Sāi Bābā Terā Nām",
    "Allāh Sāi Tero Nām Maulāh Sāi Tero Nām",
    "Nānak Sāi Terā Nām Yeshu Sāi Terā Nām",
    "Sāi Bābā Terā Nām (2)",
  ],

  "1678": [
    "Sāi Brahmā Sāi Vishnu Sāi Pārvati Shankara",
    "Sāi Rām Sāi Shyām Sāi Lakshmi Nārāyan",
    "Tu Allāh Tu Maulāh Tu Buddhā Tu Mahāveer",
    "Tu Hi Mandir Tu Hi Masjid",
    "Tu Hi Girijā Tum Sab Ho",
  ],

  "1679": [
    "Sāi Devā Satya Swarupā Tum Ho Meré Bābā",
    "O Meré Sāi Bābā",
    "Sab Dharmon Kā Nāthā",
    "Parthi Vāsā Sāi Devā",
    "Sharanam Sharanam Devā (x2)",
    "Ishwar Hi Tum Allāh Tum",
    "Mahaveera Nānak Tum Ho",
    "Sab Hi Tum Ho Devā Meré Sāi Bābā",
    "Parthi Vāsā Sāi Devā",
    "Sharanam Sharanam Devā (x2)",
  ],

  "1680": [
    "Sāi Hamārā Ham Sāi Ké Aisā Prema Hamārā",
    "Sāi Rām Hamārā (2)",
    "Sathya Sāi Hai Nām Tumhārā Shirdi Sāi Avatārā",
    "Hindu Muslim Sikha Isāyi Sab Kā Pālanahārā",
    "Sāi Rām Hamārā (2)",
  ],

  "1681": [
    "Sāi Japo (2) Japo Sāi Nām Ré",
    "Sāi Japo (2) Japo Sāi Rām Ré",
    "Sāi Japo (2) Japo Sāi Nām Ré",
    "Japoré Japo Sāi Japo Japo Sāi Rām Ré",
    "Rām Japo (2) Japo Seetārām Ré",
    "Shyāma Japo (2) Japo Rādhéshyāma Ré",
    "* Har Pal Subah Shām Japo Sāi Rām Ré",
    "Allāh Japo Maulāh Japo Japo Jhalārām Ré",
    "Yeshu Buddha Mahāveer Sab Hai Sāi Nām Ré",
  ],

  "1682": [
    "Sāi Nām Bolo Govinda Nām Bolo",
    "Mahādeva Bolo Jai Pānduranga Bolo",
    "* Rām Krishna Bolo Jai Buddha Sāi Bolo",
    "Zorāshtra Mahāveera Yeshu Sāi Bolo",
    "Allāh Sāi Bolo Maulāh Sāi Bolo",
    "Prema Sāi Shāntidāyi Sathya Sāi Bolo",
  ],

  "1683": [
    "Sāi Nām Bolo Sathya Sāi Nām Bolo",
    "Sāi Mādhavā Sāi Keshavā",
    "Shri Hari Nām Bolo",
    "Allāh Ishwar Ishā Masihā",
    "Buddha Mahāveer Nām",
    "Sāi Mādhavā Sāi Keshavā",
    "Shri Hari Nām Bolo",
  ],

  "1684": [
    "Sāi Nātha Bhagavān (2)",
    "Satyam Shivam Sundaram",
    "Sāi Nātha Bhagavān",
    "* Buddham Sharanam Gachchāmi",
    "Dharmam Sharanam Gachchāmi",
    "Sangham Sharanam Gachchāmi",
    "Sāisha Sharanam Gachchāmi - Sathya",
  ],

  "1685": [
    "Sāi Rām Rahim Rahim",
    "Sāi Krishna Karim Karim",
    "Bhaja Mana Rām Rahim Rahim",
    "Govinda Krishna Karim Karim",
    "Bhaja Mana Rām Rahim Rahim",
  ],

  "1686": [
    "Sāi Rām (2)",
    "Sāi Rām Jaya Sāi Rām",
    "Parthipurishwara Sāi Rām",
    "* Raghupati Rāghava Rājā Rām",
    "Patita Pāvana Seetā Rām",
    "Ishwara Allāh Teré Nām",
    "Sab Ko Sanmati Do Bhagavān",
  ],

  "1687": [
    "Salāmallaikum (2) Salām Sāi",
    "Salāmallaikum Salāmallaikum Salām",
    "Allāh Ho (2) Akhbar Sāi Allāh Ho",
    "Allāh Ho Akhbar",
    "Buddha Zorāshtra Yeshu Mahāveer",
    "Sāi Sarva Dharma Priya Sāi Devā",
    "Salāmallaikum (2) Salām Sāi",
    "Salāmallaikum Salāmallaikum Salām",
    "Salāmallaikum Salāmallaikum",
  ],

  "1688": [
    "Sarva Dharma Priya Devā",
    "Sathya Sāi Devā",
    "Allāh Ishwara Buddha Aur Nānaka",
    "Zorāshtra Mahāveer Tum Ho",
    "Rām Hi Tum Ho Krishna Hi Tum Ho",
    "Vishwa Rupa Tum Ho (x2)",
  ],

  "1689": [
    "Sarva Dharma Swarupa Sāi",
    "Parthi Ké Avatārā",
    "Meré Bābā Meré Sāi",
    "Sāi Rām (4)",
    "Hindu Muslim Isāyi Āté Hein Teré Dwāré",
    "Milté Hein Teré Dwāré",
    "Sāi Rām (4)",
  ],

  "1690": [
    "Sarva Matha Priya Sāi",
    "Sarva Jana Priya Sāi",
    "Shāshthānga Namaskār Sāi",
    "Kshata Koti Namaskār Sāi",
    "Ishwar Allāh Sāi",
    "Yeshu Buddha Sathya Sāi",
    "Zorāshtra Mahāveera Sāi",
    "Shāshthānga Namaskār Sāi",
    "Kshata Koti Namaskār Sāi",
  ],

  "1691": [
    "Satnām (3) Bol, Vāhé Guru (3) Bol",
    "Satnām Bol Man Vāhé Guru Bol",
    "Man Mé Sāi Kā Ras Bhardo",
    "* Satnām Bol Vāhé Guru Bol",
    "Satnām (3) Bol, Satnām (3) Bol",
    "Sāi Meré Man Ki Ānkhein Khol - Bābā",
    "Āj Jagādé Jeevan Ki Jyot",
  ],

  "1692": [
    "Satya Dharma Shānti Prema Swarupā",
    "Prashānti Nilaya Devā",
    "Tum Rāmā Ho Krishnā Ho Sāi Rām Devā",
    "Shiva Shakti Swarupā Bābā",
    "Hey Deena Pālanā Bābā",
    "Hey Prashānti Nilaya Bābā",
    "Hey Purnāvatāra Bābā",
    "Tum Allāh Ho Maulāh Ho Sāi Rām Devā",
  ],

  "1693": [
    "Shirdi Sāi Dwārakāmāyi",
    "Prashānti Vāsā Sāi Rām",
    "Sāi Rām (2) Eka Hi Nām Sundara Nām",
    "Allāh Ishwara Sāi Rām",
    "Parthipuri Ké Hey Bhagavān",
    "Dayānidhé Kripānidhé Satya Swarupa Sāi Rām",
    "Sāi Rām (2) Eka Hi Nām Sundara Nām",
  ],

  "1694": [
    "Shri Guru Parthi Vāsā",
    "Sāi Brahma Vishnu Maheshā",
    "* Allāh Bhi Tum Ho Maulāh Bhi Tum Ho",
    "Zorāshtra Mahāveera Yeshu Bhi Tum Ho",
    "Rām Rahim Ho Krishna Karim Ho",
  ],

  "1695": [
    "Tuhi Allāh Ho Akhbar Tuhi Yeshu Sāi Shankara",
    "Tuhi Rām Rahim Tuhi Krishna Karim",
    "Tuhi Buddhā Tuhi Vishnu",
    "Tuhi Chidānanda Hari",
    "Tuhi Rām - Raghupati Rāghava Rājā Rām",
    "Patita Pāvana Seetā Rām",
    "Tuhi Buddhā - Buddham Sharanam Gachchāmi",
    "Tuhi Allāh - Allāh O Akhbar Allāh O Akhbar",
  ],

  "1696": [
    "Tu Hi Allāh Sāi Tu Hi Maulāh",
    "Sab Dharmon Ké Bhagavān",
    "Dhanya Ho Yeshu Sāi",
    "Dhanya Ho Hey Buddha Sāi",
    "Mahāveer Tum Ho Bābā Sāi",
    "Zorāshtra Sāi Kripā Karo",
    "Ishwar Sāi Rakshā Karo",
  ],

  "1697": [
    "Tum Āyé Masihā Banké Kaliyuga Mé Sāi Rāmā",
    "Tum Rām Krishna Ho Yeshu Krishna Ho",
    "Tum Ho Yuga Avatārā",
    "Tum Sāi Bhakton Ki Masihā",
    "Tum Sāré Jagat Ki Masihā",
    "Tum Rām Krishna Tum Sāi Krishna Ho",
    "Tum Ho Yuga Avatārā",
  ],

  "1698": [
    "Tum Bina Prāna Nahin O Sāi Meré",
    "Sab Bhakton Kā Tu Hai Sahārā",
    "Rahim Kaho Raghurām Kaho",
    "* Nānaka Yeshu Mahāveer Shri",
    "Shankara Premāvatāra Sāi Rām",
    "Tum Ho Meré Prān O Sāi Meré",
    "Tu Hai Sāi Bhagavān (x2)",
  ],

  "1699": [
    "Tum Ho Shyām Rām Rahim",
    "Rām Rahim Shyām Rahim (x2)",
    "* Allāh Yeshu Buddha Mahāveera",
    "Nānaka Sāi Zorāshtra Bhi Ho",
    "Sarva Dharma Priya Sāi Nārāyana",
    "Sarva Dharma Priya Sāi Shankara",
  ],

  "1700": [
    "Vāhé Guru (3) Ji Bolo",
    "Satya Nām (3) Ji Bolo",
    "Nitya Nitya Japiyé Teré Nām Ji Bolo",
    "Satya Nām (3) Ji Bolo",
    "Rām (6) Ji Bolo",
    "Nitya Nitya Japiyé Rām Nām Ji Bolo",
    "Krishna (6) Ji Bolo",
    "Nitya Nitya Japiyé Krishna Nām Ji Bolo",
    "Govinda Jai Jai Gopāla Jai Jai",
    "Rādhā Ramana Hari Govinda Jai Jai",
  ],

  "1701": [
    "Yeshu Masihā Āyé Sarva Loka Jagannāthā",
    "Allāh Ho Akhbar Allāh Ho",
    "Sathya Sāi Mahādevā",
    "Sāi Jagannāthā Shirdi Sāi Jagannāthā",
    "Zorāshtra Buddha Mahāveer",
    "Guru Nānaka Jaya Sāi Rām",
  ],

  "1702": [
    "Yuga Yuga Ké Avatārā Sāi Rāmā",
    "Sāi Krishnā Sāi Bābā",
    "Bābā Sāi Bābā, Bābā Sāi Bābā",
    "Allāh Ishwara Nānaka Sāi",
    "Buddha Zorāshtra Mahāveera Sāi",
    "Rām Rahim Jai (3) Rām (x2)",
  ],

  "1703": [
    "Yuga Yuga Ké Avatārā Tum Hi Ho",
    "Meré Rām Meré Shyām Shirdi Sāi Parthi Rām",
    "Jag Ké Pālanhār Tum Hi Ho",
    "* Allāh Ishwara Teré Nām",
    "Sab Ko Sanmati Do Bhagavān",
    "Allāh Ishwar Teré Nām Shirdi Sāi Parthi Rām",
    "Jag Ké Pālanhār Tum Hi Ho",
  ],
};
export default bhajans;
