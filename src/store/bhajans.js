const bhajans = [
  { id: "001", content: "Ambā Bhavāni Shiva Shambho Kumārā\n Shri Gananāthā Shāntākārā\n Purāna Purushā Sathya Sāi Nāthā\n Pranava Swarupā Parthishā" },
  { id: "002", content: "Ambikā Tanayā Gajānanā\n Gajavadanā Gananātha Gajānana\n Sāi Ganeshā Vināyakā\n Tribhuvana Pālaka Mangala Dāyaka\n Vidyā Buddhi Siddhi Pradāyaka\n Sāi Ganeshā Vināyakā (x2)" },

  { id: "003", content: "Ādi Poojita Gajānanā\n Mangalakāri Mahāganādhipā\n * Ambikā Tanayā Gajānanā\n Ambā Bhavāni Shiva Shambho Kumārā\n Jaya (4) Gajānanā" },

  { id: "004", content: "Ādi Pujya Deva Gajānanā\n Gauri Vara Tanayā Shubhānanā\n * Vigna Vināshaka Siddhi Vināyaka\n Jaya Jaga Vandana Tava Sharanam" },

  { id: "005", content: "Bhajo Gananāyaka Gajavadanā\n Mangala Dāyaka Shubha Charanā\n * Siddhi Vināyaka Shiva Nandanā\n Ānanda Dāyaka Chitta Chandanā\n Buddhi Pradāyaka Jaga Vandanā" },

  { id: "006", content: "Bhajoré (2) Gananātham Bhajoré\n Buddhi Pradāyaka Pāpa Vināshaka\n Vignesham Bhajoré\n Abhaya Pradāyaka Ānanda Dāyaka\n Shiva Nandanam Bhajoré Gananātham Bhajoré" },

  { id: "007", content: "Bhava Bhaya Bhanjana Sumana Vinodana\n Jaya Sāi Ganarāyā\n Bandha Vimochana Sumukha Gajānana\n Jaya Sāi Ganarāyā\n * Sindura Vadana Suranara Vandana\n Jaya Sāi Ganarāyā\n Ganarāyā Ganarāyā\n Hara Shiva Nandana Nitya Niranjana\n Jaya Sāi Ganarāyā" },

  { id: "008", content: "Bhavāni Nandana Bāla Gajānana\n Pranava Swarupā Pāhi\n Hey Parthipurishwara Sāi" },

  { id: "009", content: "Bhavāni Nandanā Siddhi Vināyaka\n Bhallaleshwarā Hey Gajānanā\n Sindura Vadana Shanmuga Sodara\n Hey Gajānanā\n * Vishwa Vanditā Sāi Gajānanā\n Vidya Dāyaka Hey Gajānanā\n Sindura Vadana Shanmuga Sodara\n Hey Gajānanā" },

  { id: "010", content: "Gajamukha Gajamukha Gananāthā\n Suramuni Vandita Gunasheelā (x3)" },

  { id: "011", content: "Gajamukha Ganapati Devā\n Ganesha Devā Sharanam Devā\n Lambodarā Shri Devā\n Ganesha Devā Sharanam Devā\n Chāra Bhujāngita Ganesha Devā\n Vigna Vināshaka Ganesha Devā\n Ekadanta Shri Devā\n Devādi Devā Sharanam Devā" },

  { id: "012", content: "Gajamukha Ganapati Gajānanā\n Gauri Nandana Gajānanā\n * Mooshika Vāhana Munijana Sevita\n Mangala Charanā Gajānanā\n Shambho Kumārā Sankata Hārā\n Shirdipurishā Gajānanā\n Puttaparthipurishā Gajānanā" },

  { id: "013", content: "Gajamukha Hey Gajamukha\n Hey Gajamukha Nāthā Vināyaka\n Gauri Putrā Modaka Hastā\n Gajamukha Nāthā Vināyaka\n Shāntākārā Vigna Vināshā\n Gajamukha Nāthā Vināyaka\n Parthipurishā Sāi Ganeshā\n Gajamukha Nāthā Vināyaka\n Gajamukha Nāthā Vināyaka (4)" },

  { id: "014", content: "Gajavadanā Gajānanā\n Gauri Tanayā Gajānanā\n * Jai (4) Gajānanā – 3\n Devādi Devā Gajānanā\n Gauri Tanayā Gajānanā" },

  { id: "015", content: "Gajavadanā (3) Gananāthā\n Gauri Nandana Shiva Kumarā\n Pārvati Nandana Hara Kumarā\n Siddhi Vināyaka Buddhi Pradāyaka\n Prashānti Vāsā Vigna Vināshaka\n Prashānti Vāsā Sāi Vināyaka" },

  { id: "016", content: "Gajavadanā Gananāthā\n Gajavadanā Deena Haranā\n Siddhi Dātā Shiva Tanayā\n Buddhi Pradāyaka Gajānanā\n Pārvati Nandana Bhava Bhaya Bhanjana\n Yuga Yuga Vandita Jaya Shri Ganeshā" },

  { id: "017", content: "Gajavadanā Gananāthā\n Gauri Tanayā Dayāmayā\n * Bhuvanādhārā Pranava Swarupā\n Pālaya (2) Parthipurishā" },

  { id: "018", content: "Gajavadanā Gananātha Nāthā\n Gauri Vara Tanayā Gunālaya\n * Vidyā Dāyaka Buddhi Pradāyaka\n Siddhi Vināyaka Hey Shubha Dāyaka" },

  { id: "019", content: "Gajānanā Gajānanā\n Prathama Poojana Ganarāyā\n * Prathama Prārthanā Shri Ganarāyā\n Lambodarā Ganarāyā (x2)" },

  { id: "020", content: "Gajānanā (2) Vigna Haranā Gajavadanā\n Gauri Nandana Gajānanā\n Shankara Tanayā Gajavadanā\n Shanmukha Sodara Gajānanā\n Bhakta Pālaka Gajavadanā\n Nitya Niranjana Gajānanā\n Nirupama Vadanā Gajavadanā\n Parthipurishwara Gajānanā\n Prashānti Nilaya Gajavadanā" },

  { id: "021", content: "Gajānanā Hey Shubhānanā\n Gauri Manohara Priya Nandanā\n Pashupati Tanayā Gajānanā\n Parama Niranjana Shubhānanā" },

  { id: "022", content: "Gajānanā Hey Shubhānanā\n Parama Niranjana Gajavadanā\n Vakra Tunda Dhara Vigna Vināshā\n Pranava Swarupā Parthipurishā\n Siddhi Vināyakā Pāhi Gajānanā\n Parama Niranjana Gajavadanā" },

  { id: "023", content: "Gajānanam Girijā Tanayam\n Gangādhara Shiva Kumāram Devam\n * Suramuni Poojita Charanam Sharanam\n Sadāshrayāmi Sāi Charanam" },

  { id: "024", content: "Gananātha Gajānana Vigneshwara\n Buddhi Pradāyaka Charanam Ganeshā\n * Neelakantha Suta Gajānanā\n Pāhi Prabhu Mām Gajānanā\n Parthipurishwara Shubhānanā Sāi" },

  { id: "025", content: "Gananāthā Gananāthā\n Ganapati Devā Gananāthā\n Moksha Pradātā Vigna Vināshā\n Mangala Dāyaka Bhava Bhaya Nāshā\n Ganapati Devā Gananāthā" },

  { id: "026", content: "Gananāthā Gananāthā\n Mooshika Vāhana Jaya Gananāthā\n Charanam Sharanam Gajānanā\n * Siddhi Vināyaka Gananāthā\n Mukti Pradāyaka Gananāthā\n Jagadodhārā Jaya Gananāthā\n Charanam Sharanam Gajānanā" },

  { id: "027", content: "Gananāthā Gananāthā Gauri Nandanā\n Gananāthā Gananāthā Shambho Nandanā\n Gananāthā Gananāthā Sāi Gananāthā\n Pranava Swarupā Moolādhārā\n Mooshika Vāhanā Jaya Gananāthā\n Gananāthā Gananāthā Shambho Nandanā\n Gananāthā Gananāthā Sāi Gananāthā" },

  { id: "028", content: "Gananāthā Omkāra Rupā\n Shri Gananāthā Gnāna Rupā\n * Siddhi Vināyakā Herambā\n Shri Gananāthā Gnāna Rupā" },

  { id: "029", content: "Gananātha Sāi Gajānanā\n Parthishwarā Dukha Bhanjanā\n Kailāshapaté Shiva Nandanā\n Deena Nātha Haré Hey Niranjanā\n Siddhi Pradātā Shubhānanā\n Jagadishwara Shānti Niketanā (x2)" },

  { id: "030", content: "Gananāyakam Sāi Gananāyakam\n Sadānanda Sundara Gananāyakam\n Varadāyakam Sāi Shubha Dāyakam\n Parthipurishwara Gananāyakam" },

  { id: "031", content: "Ganapati Devā Hey Gananāyaka\n Pranava Swarupā Hey Shubha Dāyaka\n Pārvati Nandana Hey Dukha Bhanjana\n Lambodara Hey Mooshika Vāhana (x2)\n Prathama Poojana Sai Gajānana" },

  { id: "032", content: "Ganapati Gananāyaka\n Gajamukha Shubha Dāyaka\n Vigna Nāshakā Devā Vallabheshwarā\n Vigna Nāshakā Vallabheshwarā\n Siddhi Dāyaka Ganesha Siddhi Dāyaka\n Buddhi Dāyaka Ganesha Buddhi Dāyaka\n Vigna Nāshaka Devā Vallabheshwarā\n Vigna Nāshakā Vallabheshwarā" },

  { id: "033", content: "Ganapati Ganarāyā Mangala Murti Moriyā\n Mātanga Vadanā Moriyā\n Mooshika Vāhana Moriyā\n Ganapati Bappā Moriyā Ganapati Bappā Moriyā\n * Varada Vināyaka Moriyā\n Sindura Vadanā Moriyā\n Varada Vināyaka Moriyā Mahāganapati Moriyā" },

  { id: "034", content: "Ganapati Om Jaya Ganapati Om\n Gajamukha Varadā Ganapati Om\n Mooshika Vāhana Gajānanā\n Modaka Hastā Gajānanā\n Parama Niranjana Gajānanā\n Pāda Namaste Gajānanā – Tava" },

  { id: "035", content: "Ganapati Om (2) Sāi Ganapati Om\n Siddhi Vināyaka Ganapati Om\n Buddhi Pradāyaka Ganapati Om\n * Hey Shiva Nandana Jaya Jaga Vandana\n Sāi Ganapati Om\n Mooshika Vāhana Modaka Hastā\n Sāi Ganapati Om\n Sāi Ganapati Om Sāi Ganapati Om\n Hey Shiva Nandana Hey Gajānana (2) – 4" },

  { id: "036", content: "Ganapati Om Sāi Om Ganeshāya Namah Om\n Vigna Vināshaka Hey Gananāthā\n Patita Pāvana Hey Sāi Nāthā\n Parthipurishwara Hey Gananāthā\n Jagata Paripālaka Sāi Gananāthā\n Jaya Gananātha Om Gananātha (x3)" },

  { id: "037", content: "Ganesha Sharanam Parama Pāvanam\n Sathya Sāinam Gajānanam\n Nitya Smaranam Parama Pāvanam\n Sathya Sāinam Gajānanam\n Satguru Charanam Parama Pāvanam\n Sathya Sāinam Gajānanam\n Bhava Bhaya Haranam Parama Pāvanam\n Sathya Sāinam Gajānanam" },

  { id: "038", content: "Ganesha Sharanam Sharanam Ganeshā (x4)\n Sāisha Sharanam Sharanam Sāishā (x4)" },

  { id: "039", content: "Ganesha Sharanam Sharanam Ganeshā\n Ganesha Smaranam Smaranam Ganeshā\n Mooshaka Vāhana Shri Gananāthā\n Devā Ganeshā\n * Vandana Ganesha Gananāthā\n Mangala Ganesha Gananāthā\n Gauri Ganesha Gananāthā\n Sāi Ganesha Gananāthā\n Devā Ganeshā" },

  { id: "040", content: "Ganeshwarā Gajamukheshwarā\n Kārunya Lāvanya Vigneshwarā\n * Sankata Haranā Gajānanā\n Shankari Putrā Shubhānanā (Shiva) (x2)" },

  { id: "041", content: "Gauri Ganesh Umā Ganesh\n Pārvati Nandana Sāi Ganesh\n Sharanam Ganesh Sharanam Ganesh\n Shiva Nandana Ganapati Ganesh" },

  { id: "042", content: "Gauri Ganeshā Vināyaka (x2)\n Shuklāmbara Gananātha Gajānanā\n Hey Gananāthā Gajānanā\n Gajavadanā Jaya Ganapati Vandana\n Mangala Murti Gajānanā (x2)" },

  { id: "043", content: "Gauri Nandana Gajānanā\n Girijā Nandana Niranjanā\n Pārvati Nandana Shubhānanā\n Pāhi Prabho Mām Pāhi Prasannā\n Girijā Nandana Niranjanā" },

  { id: "044", content: "Gauri Nandana Gajavadanā\n Ganesha Varadā Mām Pāhi\n Ganapati Ganapati Ganeshwarā\n Gajamukha Gajamukha Vigneshwarā\n Gauri Nandana Gajavadanā\n Ganesha Varadā Mām Pāhi" },

  { id: "045", content: "Gauri Suta Hey Bāla Gajānana\n Herambā Jaya Mooshika Vāhana\n * Jaya Lambodara Vigna Vināshana\n Jaya Jaya Ganesha Jaya Shri Ganesha\n Parama Dayāgana Pashupati Ranjana\n Bhālanetra Suta Parthi Gajānana" },

  { id: "046", content: "Gauri Sutāya Ānanda Dāyaka\n Lambodarā Shiva Shambho Kumārā\n Vigna Vināshaka Siddhi Vināyaka\n Mangala Dāyaka Gajavadanā\n Mooshika Vāhana Sāi Gajānanā\n Hey Parameshā Parthishwarā" },

  { id: "047", content: "Gauri Sutāya Om Namah Om\n Lambodarāya Om Namah Om\n * Vigneshwarāya Om Namah Om\n Sāishwarāya Om Namah Om" },

  { id: "048", content: "Gauri Tanayā Hey Gananāthā\n Vigneshwara Hey Vigna Vināshā\n * Pranavākārā Sāi Gajānana\n Sāi Gajānana Sāi Gajānana\n Pashupati Tanayā Sāi Gajānana" },

  { id: "049", content: "Girijā Nandana Bhava Bhaya Bhanjana\n Hey Shiva Nandana Gajānanā\n * Mooshika Vāhana Jaya Jaga Vandana\n Parama Niranjana Shubhānanā – Hey" },

  { id: "050", content: "Hey Gajānanā Hey Shubhānanā\n Gauri Manoharā Shiva Nandanā\n Pashupati Tanayā Gajānanā\n Parama Niranjana Shubhānanā\n Hey Parama Niranjana Shubhānanā\n Gauri Manoharā Shiva Nandanā" },

  { id: "051", content: "Hey Gananāthā Gajānanā\n Herambā Gajānanā\n * Gauri Nandana Gajānanā\n Gajānanā Hey Gajānanā\n Siddhi Vināyaka Gajānanā - Vara" },

  { id: "052", content: "Hey Shiva Nandana Jaya Jaga Vandana\n Jaya Gauri Suta Pāhi Gajānana\n * Pārvati Nandana Parama Dayāgana\n Pāhi Prabho Mām Pāhi Gajānana -2" },

  { id: "053", content: "Hey Shubha Vadanā Himagiri Sadanā\n Gauri Nandana Gajānanā\n Dānava Bhanjanā Mānasa Ranjanā\n Shritajana Sanmukha Shubha Charanā\n Parama Pāvanā Vijaya Kāranā\n Parthi Sadanā Shri Ramanā" },

  { id: "054", content: "Hey Vigneshwarāya Namah\n Hey Gauri Sutāya Namah\n Hey Parthi Vāsāya Namah\n Hey Sāishwarāya Namah\n Teré Charanon Mé Jo Āyé\n Vo Khāli Kabhi Na Jāyé\n Pāyé Ānanda Barā Ananta Jeevan\n Hey Siddheshwarāya Namah" },

  { id: "055", content: "Jai Ganarāyā Shri Ganarāyā\n Jai Ganarāyā Shri Ganarāyā\n Mangala Murti Moriyā\n Siddhi Vināyaka Mangala Dātā\n Siddhi Vināyaka Mangala Dāyaka\n Mangala Murti Moriyā\n Ashta Vināyaka Mangala Dāyaka\n Mangala Murti Moriyā\n Sindura Vadanā Pankaja Charanā\n Sindura Vadanā Pankaja Charanā\n Ganapati Bappā Moriyā" },

  { id: "056", content: "Jai Ganesh Jai Jai Ganesh Jai Jai Ganesh\n Gananāthā Jai Ganesh Sāi Nāthā\n Shiva Shambho Kumārā Devā\n Shubha Dātā Parthi Vāsā\n Hey Vigna Nāsha Devā Hey Vishwā Parameshā\n Jai Ganesha Gananāthā Jai Ganesh Sāi Nāthā" },

  { id: "057", content: "Jai Ganesh Pāhimām Shri Ganesh Rakshamām\n Jai Ganesha (3) Rakshamām\n Lambodara Gauri Suta Jai Ganesha Pāhimām\n Mangalakara Sankata Hara\n Jai Ganesha Rakshamām\n Jai Ganesha (3) Rakshamām" },

  { id: "058", content: "Jai Ganesh Pāhimām Shri Ganesh Rakshamām\n Sāi Ganesh Pāhimām Trāhimām Rakshamām\n Jai Gananāthā Pāhimām\n Gajavadanā Rakshamām\n Sāi Ganesh Pāhimām Trāhimām Rakshamām" },

  { id: "059", content: "Jai (3) Gananāyaka, Jai (2) Vigna Vināshaka\n Jaya Shubha Mangala Dāyaka\n Vidyā Buddhi Pradāyaka\n Gajavadanā Gauri Nandana (x2)\n Gangādharā Shiva Shambho Nandana" },

  { id: "060", content: "Jai (4) Ganapati Devā\n Gajānanā Gajānanā\n Gajānanā Hey Ganapati Devā\n * Mātā Pārvati Pitā Mahādevā\n Gajānanā Gajānanā\n Gajānanā Hey Ganapati Devā" },

  { id: "061", content: "Jaya Ganapati Siddhi Vināyaka\n Jaya Ganapati Mangala Dāyaka\n Jai Ganesha (3) Girijā Suta Jai Shri Ganesha\n Modaka Hasta Sindura Shobhita\n Lambodarā Gananāyakā\n Chandrashekharā Shambho Nandana\n Ganapati Shri Shubha Dāyaka\n Jai Ganesha (3) Girijā Suta Jai Shri Ganesha" },

  { id: "062", content: "Jaya Ganesh (3) Devā\n Shri Ganesh (3) Devā\n Bhakta Uddhārana Bhaktajana Poshanā\n Pāpa Vināshanā Bhakta Samrakshanā\n Omkāra Pranava Shri Rupā\n Pārvati Nandanā Hey Shiva Nandanā" },

  { id: "063", content: "Jaya Ganesha Jaya Mangala Dātā\n Vandé Saraswati Sāi Mātā\n * Mooshika Vāhana Shri Gananāthā\n Vigna Vināshā Bhāgya Vidhātā\n Vandé Saraswati Sāi Mātā" },

  { id: "064", content: "Jaya (2) Gajānana Gananāthā\n Gauri Nandana Hey Gananāthā\n * Buddhi Pradāyaka Hey Gananāthā\n Siddhi Vināyaka Hey Gananāthā" },

  { id: "065", content: "Jaya Jaya Girijā Bāla Gajānana\n Hey Shiva Shankara Pārvati Nandana\n * Vigna Vināshaka Vimala Gajānana\n Saravana Sevita Sumukha Gajānana\n Tava Pada Charanam Sharanam Gajānana" },

  { id: "066", content: "Jaya (3) Hey Gajānanā\n Gajānanā Hey Gajavadanā\n * Pārvati Nandana Gajānanā\n Pashupati Tanayā Gajānanā\n Ādi Poojya Deva Gajānanā" },

  { id: "067", content: "Jaya (3) Hey Gajānanā\n Pārvati Nandana Shubhānanā\n * Neelakantha Suta Gajānanā\n Nitya Shubhāngā Gajānanā" },

  { id: "068", content: "Jaya (3) Hey Sāmbava Rājā\n Pāshānkushadhara Shri Ganarājā\n * Sindura Vadanā Mangala Charanā\n Ambā Nandana Bhava Bhaya Haranā" },

  { id: "069", content: "Jaya Jaya Vigna Vināsham\n Gananātham Shri Gananātham\n Pārvati Nandana Parama Dayāgana\n Māyā Vināshaka Mooshika Vāhana\n Mangala Kara Hey Sāi Gajānana\n Gananātham Shri Gananātham" },

  { id: "070", content: "Jaya Lambodarā Pāhimām\n Jagadambā Suta Rakshamām\n * Sharanāgata Rakshamām\n Hey Karunānidhé Pāhimām\n Gananātha Samrakshamām - Shri\n Nija Bhaktimudam Dehimām" },

  { id: "071", content: "Jaya Shri Ganeshā Vigna Nāsha Gajānanā\n Vidyā Buddhi Sarva Siddhi Suranjanā\n Jaya Herambā Shri Jagadambā Nandanā\n Ekadantā Dayāvanta Shubhānanā\n Mangala Dāyaka Shri Vināyaka Vandanā" },

  { id: "072", content: "Jaya Vallabha Gananāyaka\n Jaya Guha Sodara Shubhadātā\n Jaya Hey Ishwari Nandanā\n Jaya Vara Dāyaka Namostuté\n Jaya Parthishwara Namostuté\n Jaya Sāishwara Namostuté" },

  { id: "073", content: "Lambodarā Gananāthā (x2)\n Lambodarā Vigneshwarā\n Mayureshwarā Siddheshwarā\n Namo (2) Gananātha Gajānana Lambodarā" },

  { id: "074", content: "Lambodarā Gananātha Gajānana\n Pārvati Nandana Shubhānanā\n Pashupati Tanayā Siddhi Vināyaka\n Pranavākārā Shambho Nandanā\n Parthipurishā Sāi Gajānanā\n Hey Shiva Nandana Shubhānanā" },

  { id: "075", content: "Lambodara Hey Gauri Nandana\n Vigna Vināshaka Shubhānanā\n Siddhi Vināyaka Hey Dukha Bhanjana\n Asura Vināshaka Shubhānanā\n Gauri Nandana Mooshika Vāhana\n Vigna Vināshaka Shubhānanā" },

  { id: "076", content: "Lambodarā Hey Vigneshwarā\n Shambho Kumārā Siddheshwarā\n Ambikā Tanayā Omkāreshwara\n Heramba Sāi Parthishwarā" },

  { id: "077", content: "Lambodarā Jaya Gajānanā\n Pārvati Nandana Parama Dayāgana\n * Bandha Vimochana Bhava Bhaya Bhanjana\n Pranava Swarupā Hey Shiva Nandana\n Pāhi Prabho Mām Pāhi Gajānanā" },

  { id: "078", content: "Lambodarā Jaya Gauri Sutā\n Ganādhipā Jaya Gājānanā\n * Bhālachandradhara Gajakarneshwarā\n Parthishwarā Mām Pāhi Prabho\n Vigneshwara Mām Pāhi Prabho" },

  { id: "079", content: "Mahādevā Hey Gajavadanā\n Sāi Ganeshā Gajavadanā\n Mangala Rupā Gajavadanā\n Parthi Ganeshā Gajavadanā\n Pārvati Nandana Gajavadanā\n Gauri Tanayā Gajavadanā" },

  { id: "080", content: "Mahāganapaté Namostuté\n Mātanga Vadanā Namostuté\n * Ādi Poojita Gananāthā\n Ānanda Dāyaka Gananāthā\n Prathama Vandana Pranavākārā\n Vigneshwarā Vināyakā" },

  { id: "081", content: "Mangala Charanā Gajānanā\n Gajavadanā Shubhānanā\n * Vidyā Dāyaka Buddhi Pradāyaka\n Gauri Tanayā Gajānanā" },

  { id: "082", content: "Mangala Dāyaka Hey Gananāthā\n Pranava Swarupā Vigna Vināshā\n Hey Shiva Nandana Pāhi Dayālā\n Parthipurishwara Jagatparipālā\n Pranava Swarupā Vigna Vināshā" },

  { id: "083", content: "Mangalakāri Vigna Vināshaka\n Sāi Gajānana Moriyā\n Sāi Gajānana Moriyā Mangala Murti Moriyā\n Sāi Gajānana Moriyā\n Sharana Prabhu Ham Āyé Tihāré\n Sāi Gajānana Moriyā\n Sarva Vighan Karo Dur Hamāré\n Sāi Gajānana Moriyā\n Vigna Vināshaka Bhava Bhaya Nāshaka\n Sāi Gajānana Moriyā\n Sāi Gajānana Moriyā Mangala Murti Moriyā\n Sāi Gajānana Moriyā" },

  { id: "084", content: "Mātanga Vadanā Ānanda Sadanā\n Mahādeva Shiva Shambho Nandanā\n * Māyā Vināshaka Mooshika Vāhana\n Mātā Maheshwari Bhavāni Nandana\n Mahāganapaté Mangala Charanā (x2)" },

  { id: "085", content: "Mātanga Vadanā Mām Pālaya\n Maulishwara Shiva Gauri Nandana (x2)\n Mangala Dāyaka Siddhi Vināyaka" },

  { id: "086", content: "Mooshika Vāhana Gajānanā\n Modaka Hastā Gajānanā\n Chāmara Karna Gajānanā\n Vilambita Sutra Gajānanā\n Vāmana Rupā Gajānanā\n Maheshwara Putra Gajānanā\n Vigna Koti Nāshaka Gajānanā\n Siddhi Vināyaka Pālayamām" },

  { id: "087", content: "Moriyā Moriyā Mangala Murti Moriyā\n Lambodara Ganarāja Gajānanā\n Sindura Vadanā Gauri Nandana\n Ashta Vināyaka Siddhi Vināyaka\n Mangala Murti Moriyā" },

  { id: "088", content: "Namana Prathama Ganarāja Gajānana\n Mahāganapate Pārvati Nandana\n Vidya Dāyaka Hey Gananāthā\n Mukti Pradāyaka Buddhi Dātā\n Mangala Murti Vigna Vināshaka\n Sharana Tumhein Hey Siddhi Vināyaka" },

  { id: "089", content: "Pāhi Gajānana Deenāvanā\n Sindura Vadanā Kshritajana Pālana\n * Ambikā Tanayā Amarādishwara\n Aganita Guna Gana Ānanda Dāyaka" },

  { id: "090", content: "Parama Niranjana Suramuni Vandita\n Pāpa Vimochaka Sāishwarā\n Sāishwarā Hey Ganeshwarā\n Yuga Yuga Vandita Jyoti Ganeshā\n Gajamukha Gunasheela Sāi Ganeshā\n Sāi Ganeshā Satya Ganeshā\n Sāishwarā Hey Ganeshwarā" },

  { id: "091", content: "Pārvati Nandana Bāla Gajānana\n Hey Shiva Nandana Mooshika Vāhana\n * Vidyā Buddhi Siddhi Pradāyaka\n Suramuni Vandita Girijā Nandana\n Jaya (3) Hey Jaya Jaga Vandanā\n Parthipurishwara Sāi Gajānana\n Parama Niranjana Sāi Gajānana" },

  { id: "092", content: "Pārvati Nandana Parama Niranjana\n Ganapati Bappā Moriyā\n Siddhi Vināyaka Buddhi Pradāyaka\n Mangala Murti Moriyā\n Jaya Ho Gajānana Vigna Harana\n Vilambita Sutra Sundara Vadan\n Shiva Shambho Kumārā Lambodarā\n Klesha Vimochana Vigneshwarā" },

  { id: "093", content: "Pārvati Tanayā Vigna Vināshaka\n Mangala Dāyaka Devā\n Jai Ganesh (3)\n Sindura Vadanā Prathama Vandana\n Alaka Niranjana Mooshika Vāhana\n Pāshānkushadhara Shambho Nandanā\n Mangala Dāyaka Devā\n Jai Ganesh (3)" },

  { id: "094", content: "Pashupati Tanayā Bāla Gajānanā\n Tum Ho Vigna Vināshā Ganeshā\n Hey Shiva Nandana Pāhi Gajānana\n Vidyā Buddhi Pradātā\n Mangalakara Hey (2)\n Sundara Sāi Ganeshā" },

  { id: "095", content: "Prasanna Ho Sathya Sāi Ganeshā\n Prathama Poojita Vigna Vināshā\n * Pāshānkushadhara Parama Pavitrā\n Mooshika Vāhana Gajānanā\n Lambodara Hey Shambho Kumārā\n Ambikā Tanayā Gajānanā" },

  { id: "096", content: "Prathama Bhajo Hey Ganapati Sāi\n Jai Jai Jai Jaya Sāi\n Buddhi Pradāyaka Hey Gananāyaka\n Ganapati Sāi Hey Shubhadāyi\n Jai Jai Jai Jaya Sāi" },

  { id: "097", content: "Prathama Poojana Gananāyaka\n Siddhi Pradātā Vināyaka\n Lambodara Shri Shubha Dāyaka\n Buddhi Pradātā Vināyaka\n * Vigneshwara Sura Nara Vandana\n Ekadanta Adwaitya Prabodhana\n Bhava Tāpa Shoka Vināshana\n Hey Deena Nātha Gajānanā\n Lambodara Shri Shubha Dāyaka\n Buddhi Pradāta Vināyaka" },

  { id: "098", content: "Prathama Vandanā Gananāthā\n Gajavadanā Jaya Gananāthā\n * Vidyā Dāyakā Buddhi Pradāyaka\n Vigna Vināshaka Vināyakā\n Suramuni Vandita Vināyaka" },

  { id: "099", content: "Prathama Vandanā Gauri Nandana\n Hey Shiva Nandana Pāhi Gajānanā\n * Ekadanta Gunavanta Vināyaka (x2)\n Vigna Harana Shubha Mangala Charanā\n Pranava Swarupā Pāhi Gajānana" },

  { id: "100", content: "Sāi Devā Shri Ganeshā\n Vandé Vigna Vināshā Devā\n Pārvati Nandana Parthipurishā\n Hey Shiva Nandana Jaya Sāishā (x2)" },

  { id: "101", content: "Sāi Ganarāyā (2) Sathya Sāi Ganarāyā\n Vidyā Dāyaka Buddhi Pradāyaka\n Siddhi Vināyaka Gajānanā\n Sāi Ganarāyā Gajavadanā Ganarāyā\n Sāi Ganarāyā\n Mangala Rupā Pranava Swarupā\n Parthi Sāishā Gajānanā\n Nityam Smaranam Satguru Charanam\n Sathya Sāinam Gajānanā\n Sāi Ganarāyā Gajavadanā Ganarāyā\n Sāi Ganarāyā" },

  { id: "102", content: "Shambho Kumārā Gauri Tanayā\n Gajānanā Sadayā Jaya Jaya\n Gajānanā Sadayā\n Varada Ganeshā Durita Vināshā\n Pranavākārā Nāthā Sadayā\n Gajānanā Sadayā Jaya Jaya\n Gajānanā Sadayā" },

  { id: "103", content: "Sharanam (2) Pāhi Gajānanam\n Vigna Vināshakam Gananātham (x2)\n Buddhi Pradāyaka Pāhi Gajānana\n Asura Nikantana Pāhi Gajānana\n Pāhi Gajānanā Pāhi Gajānanā\n Vigna Vināshaka Gananātham" },

  { id: "104", content: "Shri Gananāthā Jaya Gananāthā\n Pārvati Shiva Tanayā\n Jaya Gananāthā Pārvati Shiva Tanayā\n Shankara Nandana Vijaya Gajānana\n Kalimala Bhanjana Sura Nara Vandana" },

  { id: "105", content: "Shri Ganesha (3) Pāhimām\n Jaya Ganesha (3) Rakshamām\n Shri Ganesha Pāhimām\n Jaya Ganesha Rakshamām\n Jaya Ganesha (3) Rakshamām" },

  { id: "106", content: "Siddhi Vināyaka Mangala Dātā\n Buddhi Pradāyaka Gananāthā\n * Vigna Harana Prabhu Vigneshwara Tum\n Gauri Nandana Hey Jaga Vandana\n Namostuté (2)" },

  { id: "107", content: "Siddhi Vināyaka Namostuté\n Chitta Ranjana Namostuté\n * Bhakta Paripālana Namostuté\n Pashupaté Tanayā Namostuté\n Bāla Gajānana Namostuté\n Parthi Gajānana Namostuté – Putta" },

  { id: "108", content: "Sundara Mukha Shri Gajānanā\n Ekadanta Shri Gajānanā\n Prathama Namāmi Gajānanā\n Rishi Muni Vandita Gajānanā" },

  { id: "109", content: "Sundara Sundara Vināyakā\n Shubha Mangala Dāyaka Vināyakā\n Vigna Koti Hara Vimala Gajānana\n Sakala Vigna Hara Sāi Gajānana\n Ishwari Nandana Parthi Gajānana" },

  { id: "110", content: "Suramuni Vandita Vināyaka\n Ānanda Dāyaka Vināyaka\n Hey Shiva Nandana Shubhānanā\n Sāi Ganeshā Vināyaka\n Sāi Ganeshā (3) Vināyaka (x2)" },

  { id: "111", content: "Tum Ho Vigna Vināshā Ganeshā (x2)\n * Pārvati Nandana Pāhi Gajānana\n Pranava Swarupā Parthipurishā\n Pāhi Ganeshā Vigna Vināshā" },

  { id: "112", content: "Vāmana Rupā Ganādhipā\n Pārvati Nandana Pāhi Gajānana\n * Ekadanta Gunavanta Vināyaka\n Māyā Vināshaka Mooshika Vāhana\n Vidyā Buddhi Siddhi Pradāyaka\n Pranavākārā Hey Shiva Nandana" },

  { id: "113", content: "Vandé Umā Nandanam Gajānanam\n Suramuni Sevita Sumukha Gajānanam\n * Vidyā Dāyaka Buddhi Pradāyaka\n Siddhi Vināyaka Pāhi Gajānanam" },

  { id: "114", content: "Vandeham Shri Gananāyakam\n Vidyāpatim Shri Vināyakam\n * Pranamāmyaham Vigneshwaram\n Pārvati Tanayam Gajānanam\n Sāi Ganesham Shubhānanam (x2)" },

  { id: "115", content: "Vigna Harana Prabhu Pāhi Gajānana\n Pārvati Nandana Parama Dayāgana\n Nitya Niranjana Bhava Bhaya Bhanjana\n Pashupati Tanayā Hey Jagat Vandana\n Lambodara Hey Mooshika Vāhana\n Pārvati Nandana Parama Dayāgana" },

  { id: "116", content: "Vigna Vināshaka Devādi Devā\n Ādi Sanātana Devā\n Prathama Pujya Gananāthā\n Bhava Bhaya Bhanjana Nitya Niranjana\n Siddhi Vināyaka Devā\n Mangala Dāyaka Shambho Manohara\n Prathama Pujya Gananāthā" },

  { id: "117", content: "Vigna Vināshaka Gananāthā\n Gajānanā Hey Gajavadanā\n Gananāthā Gananāthā\n Pranava Swarupā Gananāthā\n Parthipurishwara Gananāthā\n Gajānanā Hey Gajavadanā" },

  { id: "118", content: "Vigneshwarā Gananātha Gajānanā\n Pārvati Nandana Shubhānanā\n Mangala Murti Shri Ganarāyā\n Shri Ganārāyā Jaya Ganarāyā (x2)\n Siddhi Vināyaka Gajānanā\n Ashta Vināyaka Gajānanā" },

  { id: "119", content: "Vigneshwarā Vināyaka\n Vishwādhārā Namostuté\n Namostuté Namostuté\n Vishwādhārā Namostuté\n Suramuni Vandita Vināyaka\n Bhava Bhaya Nāshā Vināyaka\n Sharanam (2) Vināyaka\n Sharanam (2) Vināyaka" },

  { id: "120", content: "Vināyaka Vigna Nāshaka\n Anātha Rakshaka Ānanda Dāyaka\n Umā Maheshwara Hey Shiva Nandana" },

  { id: "121", content: "Vināyaka Vināyaka\n Vigna Vināshaka Vināyaka\n Gauri Nandana Hey Shiva Nandana\n Pārvati Nandana Gajānanā\n Mooshika Vāhana Gajānanā\n Modaka Hastā Gajānanā" },

  { id: "122", content: "Vināyaka Vināyaka\n Vishwādhārā Vināyaka\n * Siddhi Vināyaka Bhava Bhaya Nāshā\n Suramuni Vandita Shri Ganeshā\n Vishwādhārā Vināyaka" },

  { id: "123", content: "Yuga Yuga Vandita Varada Ganeshā\n Pālaya Pālaya Gauri Ganeshā\n * Pārvati Nandana Gajavadanā\n Jaya (3) Hey Gananāthā\n Pālaya Varada Ganeshā Pālaya Gauri Ganeshā\n * Mooshika Vāhana Vigneshwarā\n Jaya (3) Hey Lambodarā\n Pālaya Varada Ganeshā Pālaya Gauri Ganeshā" },

  { id: "200", content: "Akhanda Jyoti Jalāo Sāi Mana Mandir Mé\n Akhanda Jyoti Jalāo (2)\n Koti Surya Sama Teja Swarupā\n Sāi Tum Ho Divya Swarupā\n Akhanda Jyoti Jalāo Akhanda Jyoti Jalāo\n Divya Jyoti Gnāna Jyoti Prema Jyoti Jalāo\n Akhanda Jyoti Jalāo (2)" },

  { id: "201", content: "Akhila Jagat Ké Dātā Sāi\n Shirdi Nivāsi Bhagavān\n Darshan Do Bhagavān\n Kalimala Bhanjana Parama Dayāgana\n Karunānidhé Shirdi Vāsā (Parthi)\n Deena Janāvana Parthi Maheshā\n Shirdi Nivāsi Bhagavān\n Darshan Do Bhagavān" },

  { id: "202", content: "Ānanda Shri Sāi Parthipurishā\n Sadānanda Mādhava Prashānti Vāsā\n * Sundara Rupa Shri Satchidānandā\n Mandaradhara Govinda Mukundā" },

  { id: "203", content: "Ānandamaya Bhagavān\n Hey Premamaya Bhagavān\n O Bhagavān Sāi Bhagavān\n * Hey Karunānidhé Prabhu Sāi Rām\n Kripānidhé Deenon Ké Prān\n Lelo Prabhu Mujhé Sharana Lagālo\n Dayā Karo Bhagavān (Mujhé)\n Mujhé Kripā Karo Bhagavān" },

  { id: "204", content: "Anātha Bandhu Sāi Prabhu\n Aparādha Kshamā Karo Sāi Prabhu\n Jeeva Yātrā Mé Sāth Raho\n Prema Bhakti Ham Ko Dijo\n Hridaya Mandira Se Mat Jāo\n Charanāmrita Sevā Dijo Prabhu" },

  { id: "205", content: "Antaranga Sāi Anātha Nātha Sāi\n Deena Bandhu Sāi Karunā Sindhu Sāi\n * Rām Krishna Shiva Shakti Prema Rupa Sāi\n Yuga Avatāra Bābā Shri Sathya Sāi" },

  { id: "206", content: "Antarjyoti Namo Paramātma Jyoti Namo\n Akhanda Jyoti Namo Mama Jeevana Jyoti Namo\n Antaryāmi Namo Jaya Sadguru Sāi Namo" },

  { id: "207", content: "Antaryāmi Sāi Murāri\n Deena Dukhiyon Ké Tuma Hitakāri\n * Sāi Nām Ki Mahimā Bhāri\n Bhava Sāgara Se Pār Utāri\n Sāi Rām (3) Gāo" },

  { id: "208", content: "Antaryāmi Tu Hi\n Ālola Tulasi Dhāri\n Ashthānga Namana Karoun Āo Sāi Rām\n Tu Hi Mātā Pitā Tu Hi Bandhu Sakhā\n Tu Hi Sadguru Nātha O Meré Sāi Rām\n  " },

  { id: "209", content: "Āo Pyāré Nayana Hamāré Sāi Hamāré Āo\n Tum Bina Koyi Nahin Rakhawālé\n Tum Bina Kaun Sahāré\n Tum Bina Kaun Sahāré Āo Sāi Pyāré" },

  { id: "210", content: "Āo Sāi Nārāyana Darshana Dedo\n Tum Ho Prema Swarupā\n * Tum Hi Ho Shivā Tum Hi Ho Shakti\n Tum Ho Antaryāmi – Sāi" },

  { id: "211", content: "Āo Shankara Sāi Nātha\n Mana Mandir Mé Sāi Nātha\n Bholénāthā Hey Mahādevā\n Sathya Sāi Nātha Hi Mahādevā\n Sāi Nātha (4)\n Shirdipuri Mé Tum Né Samāyé\n Ab Meré Man Mandir Mé\n Parthipuri Mé Tum Né Samāyé\n Ab Meré Man Mandir Mé\n Āo Sāi Man Mandir Mé\n Ghata Ghata Tu Hi Samāyé\n Sāi Nātha (4)" },

  { id: "212", content: "Araja Suno Meré Parama Kripālu\n Parthishwara Sāi Devā\n * Satya Sanātana Antaryāmi\n Sakala Charāchara Tum Ho Swāmi\n Janana Marana Se Pār Karo\n Bhava Bandhana Se Uddhāra Karo" },

  { id: "213", content: "Ārati Utāroun Guru Mahārāj O Guru Mahārāj\n Mā Jai Jagadambé Durgé Teri Ārati Utaroun\n Shri Rāmchandra Raghuveerā\n Teri Ārati Utāroun\n Hari Nārāyana Brijabāla Teri Ārati Utaroun\n Hara Mahādeva Shiva Shambo\n Teri Ārati Utāroun\n Sāi Bābā Sāi Devā Teri Ārati Utāroun\n Ārati Utāroun Bābā Ārati Utāroun" },

  { id: "214", content: "Aravinda Lochana Ārtha Janāvana\n Sāi Nārāyana Satya Nārāyana\n * Eeshwarāmba Nandana Dosha Nivārana\n Parama Niranjana Hey Shubhānana" },

  { id: "215", content: "Arunā Ramanā Shri Gurudevā\n Sheshā Ramanā Satguru Devā\n * Bhava Bhaya Haranā Shri Sāi Devā\n Shri Sāi Devā Jaya Sāi Devā\n Guru Hai Sat Chit Ānanda Devā\n Ānanda Devā Shri Sāi Devā" },

  { id: "216", content: "Ātmā Mé Bas Jāo Bābā (2)\n Tum Bina Mana Mandir Hein Suné\n Ātmā Mé Bas Jāo Bābā (2)\n Paramātmā Tum Sāré Jagat Ké\n Rām Rahim Tum Sāré Jagat Ké\n Suné Mana Mé Vās Karo Tum\n Kankana Mé Bas Jāo Bābā\n Ātmā Mé Bas Jāo Bābā" },

  { id: "217", content: "Ayodhyā Vāsi Rām Hai Dwāraka Mé Āyé\n Dwāraka Vāsi Shyāma Hai Shirdi Mé Āyé\n Shirdi Vāsi Shyāma Hai Parthi Sathya Sāi\n Bolo Rām Sāi Rām Bolo Sathya Sāi Rām" },

  { id: "218", content: "Bābā Āo Meré Kirtan Mé\n Antaryāmi Darsha Dikhāo\n Naiyā Hamāri Pār Lagādo\n * Antarjyoti Jalādo Sāi\n Deenajanon Ké Tum Ho Sāi" },

  { id: "219", content: "Bāla Gopāl Jai Jai Sāi Rām\n Prem Bharo Dil Mé Hamāré Sāi Rām\n Hamāré Sāi Rām Baré Pyāré Sāi Rām\n Prem Bharo Dil Mé Hamāré Sāi Rām\n Ham Bhakton Ké Tum Ek Sāi Rām\n Tumhre Jagat Mé Barā Pyārā Pyārā Nām\n Sanga Raho Hardam Hamāré Sāi Rām\n Sanga Raho Hamāré Sāi Rām" },

  { id: "220", content: "Bhagavān (3) Sāi Rām\n Sāi Rām (3) Bhagavān\n Bhagavān (3) Sāi Rām\n Aparādha Kshamā Karo Sāi Bhagavān\n Araja Suno Meré Sāi Bhagavān\n Bhagavān (3) Sāi Rām\n Deena Dayālā Parama Kripālā\n Bhaktoddhārā Sāi Bhagavān" },

  { id: "221", content: "Bhagavān (2) Patita Pāvana Rām\n Dayā Karo (3) Bhagavān\n Patita Pāvana Rām - Sāi\n Deena Dayālu Parama Kripālu\n Rakshā Karo Bhagavān - Sāi" },

  { id: "222", content: "Bhagavān Hamārā Rām\n Bhagavān Hamārā Sāi Rām\n * Jagmag Sāré Teré Liyé\n Ye Tan Man Dhan Sāre Teré Liyé\n Meré Man Kā Sitār Bājé Teré Liyé\n Hamein Rakshā Karo Bhagavān\n Hamein Kripā Karo Sāi Rām" },

  { id: "223", content: "Bhajaré Mānasa Ātmā Rāmam\n Ātmā Rāmam Sāi Rāmam\n * Ātmā Tattvam Brahma Swarupam\n Ekam Nityam Vimalam Achalam\n Shuddha Brahmam Bhāvāteetam\n Bhajoré Bhajoré Mānasa Bhajoré" },

  { id: "224", content: "Bhajaré Manwā Sāi Nāmam\n Parthi Nivāsam Pankaja Netram\n * Prema Swarupam Sāishwaram\n Hridaya Nivāsam Sāishwaram\n Shirdipurisham Sāishwaram\n Purnavatāram Sāishwaram - Pari" },

  { id: "225", content: "Bhajaré Satguru Sāi Charanam\n Pāvana Charanam Padma Dala Charanam\n Mukti Dāyaka Mohana Charanam\n Pāpa Vināshaka Parthisha Charanam" },

  { id: "226", content: "Bhajo Bhajo Rām Sathya Sāi Rām\n Bhajo Bhajo Shyāma Sāi Ghanashyāma\n * Kaliyuga Ké Avatāra\n Jagadoddhārā Sāi Bhagavān\n Patita Pāvana Seetā Rām (x2)" },

  { id: "227", content: "Bhajoré Bhāyi Sāi Rām\n Puttaparthipurishā Sāi Rām\n * Dwārakamāyi Sāi Rām\n Sadā Sukhadāyi Sāi Rām\n Shirdipurishā Sāi Rām\n Puttaparthipurishā Sāi Rām" },

  { id: "228", content: "Bhajoré Manwā Satguru Devā\n Parama Kripālu Sāi Mahādevā\n * Nishdin Dhyāna Karoun Main Terā\n Janam Janam Kā Mithé Andherā\n Parabrahma Parameshwara Rupā (x2)\n Parama Kripālu Sāi Mahādevā" },

  { id: "229", content: "Bhakta Vatsala Tero Nām O Sāi\n Dukha Bhanjana Tero Nām O Sāi\n Tum Sangha Bāndhi Prema Ki Dori\n Sumiran Karoun Tero Nām O Sāi\n Patitoddhārana Bhakta Pārāyana\n Parthishwara Sāi Rām" },

  { id: "230", content: "Bolo Jaijaikār (2)\n Bolo Jaijaikār Sāi Bābā Ki\n Patita Pāvana Hey Ghanashyāmā\n Sāi Gopālā Hey Ghanashyāmā\n Prema Bhagavān Sāi Bhagavān\n Sāi Rām Sāi Rām" },

  { id: "231", content: "Bolo Sāi Rām Bolo Sāi Rām\n Bolo Rām Krishna Bhagavān Bolo Sāi Rām\n Karunā Sindhu Rām Sāi Charanon Mé\n Teré Koti Pranām\n Bolo Rām Krishna Bhagavān Bolo Sāi Rām" },

  { id: "232", content: "Brahma Swarupā Nāda Swarupā\n Satya Swarupā Dharma Swarupā\n * Jyoti Swarupā Divya Swarupā\n Shānti Swarupā Prema Swarupā\n Shirdi Swarupā Parthi Swarupā\n Deva Deva Devā Sathya Sāi Devā" },

  { id: "233", content: "Chalre Man (3) Tu Chal\n Tu Prashānti Nilaya Chal Puttaparthi Tu Chal\n Dekho Shirdi Sāi Avatār Sathya Sāi Avatār\n Parthi Sāi Avatār Prema Sāi Avatār\n Shirdi Sāi Parthi Sāi Prema Sāi Avatār" },

  { id: "234", content: "Chitrāvati Tatha Vishāla Sundara Sāi\n Avadoota Chintanā Gurudevā Sathya Sāi\n Meré Bābā Sāi\n Shirdi Bābā Sāi Parthi Bābā Sāi\n Yamunā Teera Shri Krishna Kanhaiyā Sāi\n Avadoota Chintanā Gurudevā Sathya Sāi" },

  { id: "235", content: "Chittarājā Chittarājā\n Brindāvana Gana Mangala Charanā\n Sānvari Surata Prema Bharanā\n * Rupa Manohara Murali Madhuvana\n Parthipurishwara Chittarājā Chittarājā" },

  { id: "236", content: "Darshana Deejo Bhagavān\n Parama Dayālu Bhagavān\n * Ādi Anantā Adbhuta Rupā\n Ānanda Dātā Āshrita Vatsala\n Prema Swarupā Shānti Pradātā\n Satchidānanda Shri Sathya Sāishā" },

  { id: "237", content: "Darshana Do Bhagavān - Prabhu\n Anātha Nāthā Prabhu Sāi Nāthā\n * Deena Dayālā Hey Parameshā\n Parthipuri Bhagavān - Sāi\n Prabhu Darshana Do Bhagavān" },

  { id: "238", content: "Dayā Karo Bhagavān Kripā Karo Bhagavān (x3)\n Bhagavān Bhagavān\n Hey Sāi Nātha Bhagavān\n Hey Kripānidhé Bhagavān" },

  { id: "239", content: "Dayā Karo Hey Dayānidhé Hey Bhagavān\n Tan Man Dhana Sab Charana Tumhāré\n * Ādi Ananta Hari Avināshi\n Sadā Nirantara Ghata Ghata Vāsi\n Deena Dayālā Sadā Kripālā (x2)" },

  { id: "240", content: "Dayā Karo Kripā Karo Karunā Sāgara Devā\n Janama Marana Se Pār Karo Tum\n Sāi Nātha Mahādevā\n Dayā Karo Kripā Karo Parthishwara Sāi Devā\n Shirdishwara Sāi Devā\n Parthishwara Sāi Devā" },

  { id: "241", content: "Dayā Sāgarā Karunākarā\n Jagadishwarā Sāishwarā\n * Bhuvaneshwarā Akhileshwarā\n Guna Gambheerā Sāishwarā" },

  { id: "242", content: "Deena Bāndhavā Bābā Dayā Sāgarā\n Patita Pāvanā Sāi Karunākarā\n * Sathya Sāi Prema Sāi\n Shānti Dharma Sindhu Sāi\n Jeevana Ādhār Sāi Janani Janaka Bandhu Sāi\n Patita Pāvanā Sāi Karunākarā" },

  { id: "243", content: "Deena Bāndhavā Shri Sāi Devā\n Dayā Sāgarā Devādi Devā\n * Pāhi Prabho Jagadishwarā\n Dehi Vibho Jagadoddharā\n Sharanam Prabho Sathya Sāi Nāthā" },

  { id: "244", content: "Deena Dukhiyon Se Prema Karo\n Merā Sāi Prasanna Hogā\n Sāi Merā Main Terā Yé Prema Ki Behti Dhārā\n Yé Prema Ki Behti Dhārā\n Merā Sāi Prasanna Hogā" },

  { id: "245", content: "Deena Janāvana Deena Samrakshaka\n Sanātana Sārathi Devādi Devā\n Ādi Sanātana Nitya Niranjana\n Jagadoddhārana Sāi Nārāyana\n Jyoti Swarupā Prema Swarupā\n Prashanti Swarupā Devādi Devā" },

  { id: "246", content: "Deva (2) Devā Devādi Devā\n Haré Rām Haré Krishna Sāi Rām Devā\n Haré Rām Haré Krishna Sāi Rām Devā\n Deva Deva Devā\n Kārunya Lāvanya Karunā Samudrā\n Kālinga Nartana Kaustubha Hārā\n Ghana Ghana Leelā Kaivalya Dhāmā\n Ghana Ghana Leelā Kaivalya Dhāmā\n Kaivalya Dhāmā" },

  { id: "247", content: "Deva Devottama Deena Samrakshaka\n Devādi Devā Dayāmayā\n Shri Sāi Devā Dayāmayā\n Patitoddhārā Pāpa Vidurā\n Parthi Vihārā Parameshwarā\n Bhashmodbhavakara Bhava Bhaya Nāshaka\n Shri Sāi Devā Dayāmayā" },

  { id: "248", content: "Dukha Ké Andher Mé\n Ujālā Sāi Nām Kā\n Chintā Mé Sahārā Bas Ek Sāi Nām Kā\n * Sahārā Do Sāi Nātha Sabko Sahārā Do\n Meré Bābā Meré Sāi Meré Sāi Nātha Bhagavān" },

  { id: "249", content: "Eeshwarāmbā Nandana Jagata Vidhātā\n Parthi Nivāsā Sāi Devā Dayā Karo Gurudevā\n Kamala Nayana Hey Hridaya Vihāri\n Ānanda Dāyaka Hey Giridhāri\n Charana Sharana Mé Lelo Hamko\n Yuga Avatārā Krishna Murāri\n Parthi Nivāsā Sāi Devā Dayā Karo Gurudevā" },

  { id: "250", content: "Eeshwarāmbā Priya Nandanā\n Sāi Jaya Jaga Vandanā (x2)\n Ratnākara Kula Bhooshanā\n Rājiva Nayanā Nārāyanā\n Nārāyanā Satya Nārāyanā\n Nārāyanā Sāi Nārāyanā" },

  { id: "251", content: "Eeshwarāmbā Priya Tanayā Sāi Nārāyanā\n Sāi Nārāyanā Satya Nārāyanā (x2)\n Kaliyuga Mé Avatāra Liyé\n Kankana Mé Terā Nām O Sāi (x2)\n Kankana Mé Terā Nām" },

  { id: "252", content: "Eeshwarammā Nayana Dulāré\n Subhammā Ki Ankh Ké Tāré\n Bhaktajanon Ké Prāna Pyāré\n Tum Ho Hamāré Ham Hein Tumhāré" },

  { id: "253", content: "Ek Bār Kshamā Karo Sāi\n Meré Bābā Shri Sathya Sāi\n Kshamā Murti Sāi Bābā Prema Murti Sathya Sāi\n * Shirdi Ké Sāi Teré Dwāra Hai Māyi\n Parthi Ké Sāi Teré Yād Mujhé Āyi\n Kshamā Murti Sāi Bābā Prema Murti Sathya Sāi" },

  { id: "254", content: "Guru Bābā Guru Bābā\n Charana Namostuté Guru Bābā\n Sāi Bābā Bāl Bābā\n Sathya Bābā Prema Bābā\n Guruvara Guruvara Guru Bābā\n Vidyā Dāyaka Guru Bābā\n Shanta Swarupā Guru Bābā\n Guruvara Guruvara Guru Bābā" },

  { id: "255", content: "Guru Brahmā Guru Vishnu\n Guru Devo Maheshwarā\n Jaya Devā Guru Devā Gurudattā Digambarā\n Jai (3) Karunākarā, Jai (3) Akhileshwarā\n Jai (3) Shirdishwarā, Jai (3) Parthishwarā" },

  { id: "256", content: "Guru (5) Sathya Sāi\n Sharanāgatā (3) Om Guru Mahārāja\n Shirdi Ke Sāi Puttaparthi Ke Sāi\n Devādi Devā Guru Paramātmā Sāi (x2)" },

  { id: "257", content: "Guru Mahimā Gāo (x3)\n Satguru Sāi Ananta Guru\n Brahmānandā Nanda Guru\n Sarva Dharma Priya Sāi Guru\n Guru Ki Vāni Gāo" },

  { id: "258", content: "Guru Satguru Satguru Sāi Rām\n Guru Sāi Rām Shri Sāi Rām\n * Sāi Guru (2) Sāi Maheshā\n Sāi Maheshā Sathya Sāi Maheshā\n Pāhimām (2) Pāhi Maheshā\n Parthipuri Sāi Devā Sāi Maheshā\n Sāi Maheshā Sathya Sāi Maheshā" },

  { id: "259", content: "Gurudevā Guru Govindā\n Mangala Giridhara Shirdipurishwara\n Jaya Parthishwara Sāi Shivā\n * Sundura Rupā Shri Sāi Devā\n Vaidehi Mohana Nārāyanā (x2)" },

  { id: "260", content: "Gurudevā Gurudevā\n Guruvāyura Murahari Devā\n Hari Nārāyanā Hari Nārāyanā\n Sharanam Sharanam Sāi Devā" },

  { id: "261", content: "Gurudevā Jaya Devā Sāi Devā Dayāmayā\n Vibhuti Sundara Shashānka Shekhara\n Sāi Shankara Dayā Karo (2)\n Gokula Nandana Sāi Gopālā\n Raghukula Bhooshana Sāi Rām\n Hey Madanāntaka (Dayā Karo (3))" },

  { id: "262", content: "Gurudevā Priya Devā Sāi Devā Dayāmayā\n Vibhuti Sundara Shashānka Shekhara\n Sāi Shankara Dayā Karo (x2)\n * Gokula Ranjana Sāi Gopālā\n Raghukula Bhooshana Sāi Rāmā\n Hey Madanāntaka Dayā Karo (x2)" },

  { id: "263", content: "Gurudevā Satguru Devā Dayā Karo Bhagavān\n Shānti Do (3) Mujhé Dayākarā\n Ānanda Chandā Satchidānandā\n Ānanda Ānanda Sāi - Hey Gurudevā\n Parthipurishā Hey Bhuvaneshā\n Dayā Karo Bhagavān (Kripā)\n Shānti Do (3) Mujhé Dayākarā" },

  { id: "264", content: "Gurudevā Sharanam Devā\n Pāhi Prabho Sharanam Devā\n * Sundara Rupā Shri Sāi Devā\n Sharanam Sharanam Satguru Devā" },

  { id: "265", content: "Gurudevāya Namo Namo\n Hey Parameshwara Namo Namo\n * Omkārāya Namo Namo\n Parthipurishwara Namo Namo\n Jagadishwarāya Namo Namo\n Prashānti Ishwara Namo Namo" },

  { id: "266", content: "Guruvara Nāma Pāvana Nāma\n Satguru Nāma Guru Nānaka Nāma\n Guruvara Nāma Pāvana Nāma\n Satguru Sāi Bābā Nāma\n Jai Guru Satguru Nānak Nāma\n Jai Bolo Sāi Bābā Nāma" },

  { id: "267", content: "Ham Ko Tum Se Pyār Kitnā Sāi Tum Hi Jānaté\n Dilon Ki Dharkan Tum Ho Sāi\n Tum Hamāré Prān Ho\n Ham Ko Tum Se Pyār Hai\n We Love You Dearest Lord We Love You\n We Love You Sāi Lord We Love You" },

  { id: "268", content: "Hari Guna Gāna Karo Man Mero\n Sāi Guna Gāna Karo Man Mero\n * Haré Rām Haré Krishna\n Krishna Krishna Sāi Krishna\n Sāi Guna Gāna Karo Man Mero (x2)" },

  { id: "269", content: "Hari Om Namo Shiva Shakti Namo\n Satguru Shri Sathya Sāi Namo\n Hari Om Namo Seetā Rām Namo\n Jaya Satguru Shri Sathya Sāi Namo\n Hari Om Namo Radhéshyām Namo\n Jaya Satguru Shri Sathya Sāi Namo" },

  { id: "270", content: "Hey Anātha Nātha Sāi Tum Ho Antaryāmi\n Tum Ho Meré Bhagavān\n Deena Dukha Bhanjana Sahārā Do Mujhé\n O Meré Sāi Bhagavān\n Hridaya Mandir Mé Āo Sāi Meré\n Deejo Kripā Vardāna\n Tum Ho Meré Bhagavān" },

  { id: "271", content: "Hey Brahmā Vishnu Maheshwarā Sāishwarā\n Dayā Karo Kripā Karo Parameshwarā\n Sāi Rām Sāi Rām (x2)\n Parama Dayālā Pāpa Vināshā\n Rakshā Karo (2) Sāishwarā\n Dayā Karo Kripā Karo Parameshwarā" },

  { id: "272", content: "Hey Kamala Nayana Bhagavān\n Sathya Sāi Bhagavān\n Deenajanon Ké Prāna – Sāi\n Patita Pāvanā Seetā Rām\n Parthipurishwara Shri Sāi Rām\n Shri Sāi Rām Jaya Jaya Rām\n Parthipurishwara Shri Sāi Rām\n Hey Deenajanon Ké Prāna" },

  { id: "273", content: "Hey Parama Dayālu Sāi Rām\n Bhagavān Bhagavān\n Tretāyuga Mé Dasharatha Nandana\n Dwāpara Yuga Mé Murali Mohana\n Kaliyuga Mé Sathya Nārāyana\n Eka Prabhu Aneka Nāma" },

  { id: "274", content: "Hey Parthipurishā Prashānti Vāsā Sāi Murāri\n Sāi Murāri (2)\n Hey Hrishikeshā Hridaya Nivāsā Hridaya Nivāsā\n Sāi Murāri (4)" },

  { id: "275", content: "Hey Sāi Jagannāthā (3)\n Deena Bandhu Sāi Nāthā\n Karunā Sindhu Jagannāthā\n Hey Sāi Jagannāthā (2)\n Hey Shirdi Jagannāthā Hey Parthi Jagannāthā\n Hey Sāi Jagannāthā" },

  { id: "276", content: "Hey Sanātana Sārathi\n Anupama Tava Rupa Manohara\n Sudhā Samā Tava Bhārati\n * Hey Parameshwara Hey Tāt Mātā\n Hey Jagadishwara Anātha Nāthā\n Hey Deena Bandhu Karunā Sindhu\n Hey Murti Mantra Prashānti" },

  { id: "277", content: "Hey Shyāma Sundarā Hey Sāi Sundarā\n Parthipurishwarā Hey Sāi Sundarā\n * Neela Megha Sundarā Neeraja Lochanā\n Brahmānda Nāyakā Hey Sāi Sundarā" },

  { id: "278", content: "Ishwar Tu Hai Dayālu Dukha Dura Kar Hamārā\n Teré Sharan Mé Āyé Ham Prabhu Dijiyé Sahārā\n Tu Hai Pitā Aur Mātā Sab Vishwa Kā Vidhātā\n Tum Sā Nahin Hai Dātā Sab Terā Hi Sahārā" },

  { id: "279", content: "Itni Vinati Raghunandana Se\n Nandana Se Sai Nandana Se\n * Āo Prabhu Ham Sharana Tihāré\n Tum Bina Jag Mé Kaun Hamāré" },

  { id: "280", content: "Jaga Mé Sarvam Vishnumayam\n Satguru Shri Sathya Sāi Mayam\n Omkāra Nāda Mayam Om Shiva Shakti Mayam\n Prema Mayam Sāi Rām Mayam\n Pranavākārā Brahma Mayam" },

  { id: "281", content: "Jagata Uddhārana Parthi Vihārana\n Prabhu Tum Ho Mangala Dhāma\n Jai Sāi Rām Jai Sāi Rām\n Pāpa Vimochana Bhava Bhaya Bhanjana\n Sundara Nayanabhi Rām\n Prabhu Tum Ho Mangala Dhāma\n Jai Sāi Rām Jai Sāi Rām" },

  { id: "282", content: "Jai Guru (2) Sāi Rām\n Jagatguru Sathya Sāi Rām\n * Brahma Vishnu Shiva Sāi Rām\n Parabrahma Rupa Sāi Rām\n Mātā Pitā Guru Sāi Rām\n Jagatguru Sathya Sāi Rām" },

  { id: "283", content: "Jai Jai Gurudevā Shri Sāi Mahādevā (x2)\n Brahmā Vishnu Maheshwarā Sāi Mahādevā\n Mātā Pitā Gurudevā Shri Sāi Mahādevā" },

  { id: "284", content: "Jai Jai Shri Guru Bhajalé\n Satguru Sāi Guru Bhajalé\n Parthipurishwara Shri Sāi Nāthā\n Mama Guru Satguru Bhajalé\n Andhakār Mé Jyoti Jalāo\n Bhataknéwālon Ko Rāh Dikhāo\n Bhavasāgar Mé Kāndhar Banké\n Guru Bhagavān Pār Lagāo\n Guru Bhajalé Nāma Bhajalé Sāi Bhajalé" },

  { id: "285", content: "Jai Sāi Rām Bolo (3) Jai Sāi Rām\n Jai Sāi Rām Bolo (3) Sathya Sāi Rām\n Bhajore Manwā Mangala Nāma\n Bhajore Manwā Sathya Sāi Rām (x2)" },

  { id: "286", content: "Jaya Guru Omkārā Jaya Jaya\n Satguru Omkārā Om\n Brahma Vishnu Maheshwarā\n Hara Hara Hara Hara Mahādevā" },

  { id: "287", content: "Jaya Guru Omkārā Sāi Satguru Omkārā\n Shirdipurishwara Shri Sāi Bābā\n Parthipurishwara Sathya Sāi Bābā\n * Parama Niranjana Deenajanāvanā\n Sāi Parameshwara Parama Dayāgana\n Paramānanda Dayālu Sāi\n Brahmānanda Kripālu Sāi" },

  { id: "288", content: "Jaya Gurudevā Prabhu Sāi Devā\n Devādi Devā Pranamāmyaham\n Shiva Shiva Shambho Kailāshapaté\n Parthipurishwara Pālayamām\n Devādi Devā Pranamāmyaham" },

  { id: "289", content: "Jaya Jaya Devā Jagadisha Devā\n Dayā Sāgarā Sāi Devā\n * Niraja Nayanā Niradhi Shayanā\n Neela Megha Shyāmā\n Sāma Gāna Priya Sarva Dharma\n Priya Sathya Sāi Mahādevā" },

  { id: "290", content: "Jaya (4) Gurudevā\n Jaya Parameshwara Sāi Devā\n Jaya Shirdishwara Gurudevā\n Jaya Parthishwara Gurudevā\n Jaya Jaya Satguru Shri Sāi Devā" },

  { id: "291", content: "Jaya Jaya Sāi Namo Jaya Shubhadāyi Namo\n Jaya Govindā Jaya Gopālā\n Jaya Mahādeva Namo\n * Abhaya Pradātā Vishwa Vidhātā\n Jagadoddhāra Namo\n Jaya Shirdishā Jaya Parthishā\n Jaya Parameshā Namo" },

  { id: "292", content: "Jaya Nārāyana Satguru Devā\n Dāyana Nartana Priya Sāi Devā\n * Nirākāra Sākār Tum Hi Ho\n Purna Brahma Avatār Tum Hi Ho\n Parthipurishwara Sāi Mahādevā" },

  { id: "293", content: "Jaya Sāi Gurudevā Sāi Gurudevā\n Guru Sevā Binā Nirvāna Nahin\n Jaya Sāi Gurudevā\n Tumhi Ho Mātā Pitā Tumhi Ho Sāi Gurudevā\n Satya Swarupa Rāha Dikhāo Sāi Gurudevā\n Guru Sevā Binā Nirvāna Nahin\n Jaya Sāi Gurudevā" },

  { id: "294", content: "Jaya Sāishā Jaya Sāishā\n Rādhā Mādhava Jaya Parthishā\n * Hridaya Sārathi Sāi Kanhaiyā\n Rādhé Govindā Prashānti Nilaya" },

  { id: "295", content: "Jeevana Ādhār Bābā Jeevana Ādhār\n Koti Pranām Bābā Koti Pranām\n Sādhan Kā Ādhār Bābā Sādhan Kā Ādhār\n Jeevan Mé Sāth Raho Merā Pranām\n Dayā Karo (2) Koti Pranām\n Kripā Karo (2) Koti Pranām\n Koti Pranām Bābā Koti Pranām (x2)" },

  { id: "296", content: "Jeevana Ādhāra Sāi Devā\n Paramo Uddhārā Prabhu Sāi Devā\n * Jagadoddhārā Shri Sāi Devā\n Bhakta Uddhārā Devādi Devā\n Parthi Vihārā Sathya Sāi Devā" },

  { id: "297", content: "Jeevana Jyoti Tum Ho Sāi\n Prema Ki Jyot Jalāo Sāi Prema Ki Jyot Jalāo\n Jeevana Ke Inn Andhiyāron Mé Sāi Deepa Jalāo\n Sāi Deepa Jalāo Sathya Sāi Deepa Jalāo\n Prema Ki Jyot Jalāo Sāi Prema Ki Jyot Jalāo" },

  { id: "298", content: "Jhulanā Mé Jhulé Meré Sāi Nandalāl\n Jhulanā Mé Jhulé Sāi Bāl Gopāl\n Jhulanā Jhulé Jhulanā Jhulé\n Mā Eeshwarammā Jhulanā Jhulāyé\n Godi Mé Bithālké Kahāni Sunāyé\n Hari Kathā Choté Sāi Rām Ko Sunāyé\n Apni Hi Kathā Suno Tum Nandalāl\n Jhulanā Mé Jhulé Sāi Bāl Gopāl\n Jhulanā Jhulé Jhulanā Jhulé" },

  { id: "299", content: "Jhulé Meré Sāi Jhulé Meré Bābā\n Jhulanā Jhulāyé Meré Sāi\n Jhulanā Jhulāyé Meré Bābā\n Resham Ki Dori Soné Kā Palanā\n Jhulanā Jhulāyé Meré Sāi\n Jhulanā Jhulāyé Meré Bābā\n Shirdi Ké Sāi Parthi Ké Bābā\n Jhulanā Jhulāyé Meré Sāi\n Jhulanā Jhulāyé Meré Bābā" },

  { id: "300", content: "Kamala Netra Sāishwarā\n Kaivalya Teja Sureshwarā\n * Meghashyāma Ghana Gagana Shareerā\n Nāda Brahmamaya Abhayakarā\n Meghashyāma Ghana Gagana Shareerā\n Nāda Brahmamaya Abhayakarā" },

  { id: "301", content: "Koti Pranām Kshata Koti Pranām\n Hey Deena Nātha Sāi Rām – 3\n Tum Ho Bhakton Ké Yugavatāra\n Tum Ho Ānanda Nanda Ké Lāl\n Parthipuri Ké Sāi Gopāla – Putta\n Hey Deena Nātha Sāi Rām (x3)" },

  { id: "302", content: "Mana Bangāru Parthi Bābā\n Mana Sringāra Vadanā Sāi\n * Antaryāmi Bābā\n Mana Sarvāntaryāmi Sāi" },

  { id: "303", content: "Mana Ek Bār Hari Bol\n Hari Hari Bol Hari Bol\n * Hari Pitā Hari Mātā\n Hari Guru Gnāna Dātā\n Chidānanda Rupa Hari Patita Pāvana Hari\n Ek Bār Hari Bol" },

  { id: "304", content: "Mana Mandira Mé Āo Sāi\n Sāi Bhagavān Darsha Dikhāo\n Sadā Nirantara Bhajo Sāi Rām\n Giridhara Nāgara Natavara Shyām\n Sāi Bhagavān Darsha Dikhāo" },

  { id: "305", content: "Mana Mandira Mé Rājādhirājā\n Tum Ho Sāi Mahārāj\n Nartana Sundara Natarājā\n Shivakāmi Priya Shivarājā\n Tum Ho Sāi Mahārāj" },

  { id: "306", content: "Mānasa Bhajaré Guru Charanam\n Dustara Bhava Sāgara Taranam\n Guru Mahārāj Guru Jai Jai\n Sāi Nātha Satguru Jai Jai\n Om Namah Shivāya (3) Shivāya Namah Om\n Arunāchala Shiva (3) Arunā Shiva Om\n Omkāram Bābā (3) Om Namo Bābā" },

  { id: "307", content: "Mānasa Bhajaré Guru Charanam\n Satguru Charanam Pranamāmyaham\n Sathya Sāi Charanam Pranamāmyaham (x2)\n Nirmala Hridaya Virājita Charanam\n Sakala Charāchara Vyāpaka Charanam\n Bhavasāgara Uddhāraka Charanam\n Sāi Charanam Pranamāmyaham (x2)" },

  { id: "308", content: "Meré Nainon Mé Baso Sāi Rāmā\n Sāi Rāmā Moré Sāi Shyāmā\n Meré Hridaya Mé Āo Sāi Rāmā\n Sāi Rāmā Moré Sāi Shyāmā\n Meré Jeevan Banādo Sāi Rāmā\n Sāi Rāmā Moré Sāi Shyāmā" },

  { id: "309", content: "Meré Sāi Rām Sundarā\n Rupa Manohara Niranjanā\n * Shyāmala Komala Kamala Vadanā\n Mana Mohanā Mridu Charanā\n Anupama Charitra Atbhuta Leelā\n Sundara Sāi Premānandā" },

  { id: "310", content: "Nādabrahma Hari Sāi Haré\n Nārāyana Hari Sāi Haré\n * Natanakalādhara Sāi Haré\n Nāgā Bharanā Sāi Haré\n Sāi Haré Sathya Sāi Haré (x3)" },

  { id: "311", content: "Nāma Bhajoré Nāma Bhajo\n Sab Sukhadāyi Sundara Sāi\n * Ānanda Nāmā Ati Sukha Nāmā\n Mana Mohana Nāma Madhura Madhura Nāma" },

  { id: "312", content: "Namāmi Brahmā Namāmi Vishnu\n Namāmi Maheshwarā\n Smarāmi Brahmā Smarāmi Vishnu\n Smarāmi Sāishwarā (x2)" },

  { id: "313", content: "Namana Karoun Main Satguru Charanā\n Bhava Bhaya Haranā Mangala Karanā\n * Brahma Vishnu Maheshwara Rupā\n Satya Swarupā Prema Swarupā\n Dukha Haranā Bhavasāgara Taranā" },

  { id: "314", content: "Nandalālā (2) Dayā Karo Bhagavān\n Bhava Sāgara Se Pār Utāro\n Dayā Karo Bhagavān\n Kripā Karo Bhagavān\n Tumhri Sharan Binā Anāth Hein Ham\n Dayā Karo Bhagavān\n Kripā Karo Bhagavān" },

  { id: "315", content: "Nayanon Mé Premadhāra\n Vachanon Mé Amritadhāra\n Satguru Sāi Merā Jeevan Ādhār\n Nayanon Mé Premadhāra\n Vachanon Mé Amritadhāra\n Satguru Sāi Merā Jeevan Ādhār" },

  { id: "316", content: "Nirupama Guna Sadanā Charanā\n Neeraja Dala Nayanā\n Kāshāyambara Veshā Dhāranā Kaliyuga Avatārā\n Nitya Ranjana Nirmala Charitra\n Nirupama Yogindrā\n Mahādeva Natarāja Virājā\n Āsha Pāsha Nāsha Ishā" },

  { id: "317", content: "O Bābā Sāi Bābā\n Deenon Ké Dukha Haraté Bābā\n Rām Hi Bābā Krishna Hi Bābā\n Nara Dehi Nārāyana Bābā\n Nara Ké Hey Nārāyana Bābā" },

  { id: "318", content: "O Bhagavān (2)\n Araja Suno Meré Sāi Bhagavān\n Parthipuri Ké Tum Ho Rājā\n Brindāvana Ké Tum Ho Dātā\n Sab Bhakton Ké Man Ko Bhātā\n Pār Utāro Naiyā Mori\n Sāi Ghanashyāma Sāi Ghanashyāma" },

  { id: "319", content: "O Sāi Bābā (3) Meri Rakshā Karo\n O Sāi Rāmā Prabhu Sāi Rāmā\n O Sāi Bābā Meri Rakshā Karo\n Karunā Nidhān Tum Karunā Karo\n Kripā Nidhān Tum Kripā Karo\n O Sāi Krishnā Sathya Sāi Krishnā\n O Sāi Bābā Meri Rakshā Karo\n O Shirdi Bābā O Parthi Bābā\n O Sāi Bābā Meri Rakshā Karo" },

  { id: "320", content: "Parama Pujya Parama Priya Shri Sāi Devā\n Parthi Vāsi Hridaya Vāsi Shri Sāi Devā\n Sakala Janma Sātha Raho Shri Sāi Devā\n Sarva Bandhu Bhajan Karo Shri Sāi Devā\n Hey Sāi Devā (2)\n Shri Sāi Devā (2)" },

  { id: "321", content: "Parthi Bulāo Meré Sāi Bhagavān\n Mujhé Darsha Dikhāo Meré Sāi Bhagavān\n Sparshana Sambhāshana Deejo Bhagavān\n Satguru Darshanam Pāpa Vināshanam\n Satguru Sparshanam Karma Vimochanam\n Satguru Sambhāshanam Sankata Nāshanam\n Satguru Charanam Sadā Nirantaram\n Araja Suno Meré Sāi Bhagavān\n Aparādha Kshamā Karo Sāi Bhagavān" },

  { id: "322", content: "Parthipuri Ghanashyāma Prashānti Nilaya Rām\n Sāi Charanon Mé Lagé Merā Dhyāna\n Sāi Rām Tum Né Nayi Duniyā Basāyi\n Satya Dharma Shānti Ki Mālā Banāyi\n Sāi Nām Japné Ki Mālā Banāyi\n Prema Rupa Sāi Aur Prema Rupa Rām\n Rām Sāi Rām Bhajo Rām Sāi Rām" },

  { id: "323", content: "Parthipuri Mé Janam Liyā\n Eeshwarāmba Ké Priya Tanayā\n * Main Kyā Janoun Teri Mahimā\n Jeevan Tu Meré Sāi Rāmā – Mama\n Tujh Bina Bābā Andhera Hai\n Tujh Se Sāi Ham Dur Hein\n Āo Āo Prabhu Sāi Mat Dera Se (x2)" },

  { id: "324", content: "Parthipuri Mé Janam Liyā\n Jo Sāi Bābā Nām Hai\n Mayura Mukutadhara Murali Manohara\n Sāi Shyāmā Nām Hai\n Hey Shiva Shankara Umā Maheshwara\n Sāi Shambho Nāma Hai\n Hey Parameshwara Parthipurishwara\n Tu Hi Merā Prāna Hai" },

  { id: "325", content: "Prabhu Gnāna Kā Deepa Jalāo\n Prabhu Prema Kā Deepa Jalāo\n Sāi Prema Kā Deepa Jalāo\n * Main Né Phukārā Māngā Sahārā\n Prabhu Dedo Mujhé Terā Sahārā\n Sāi Dedo Mujhé Abhaya Tumhārā\n Pahounchādo Prabhu Mujhé Kinārā\n Sāi Rām Sāi Shyām Sāi Rām" },

  { id: "326", content: "Prabhu Leelā Prabhu Mahimā\n Kali Avatārā Sāi Nārāyana\n Prabhu Dhāma Parama Dhāmā\n Chaloré Chalo Man Parthi Dhāma\n Jaya (3) Hey Sāi Rāmā" },

  { id: "327", content: "Prashānti Sāi Prashānti Bābā\n Shivāya Shivāya Namah Shivāya (2)\n * Shirdi Sāi Krishna Kanhāyi\n Namo (2) Sāi, Bhajo (2) Sāi\n Sāi Namo Namo Sāi Namo Namo\n Sāi Namo Namo Sāi Nāthā" },

  { id: "328", content: "Prātah Smaranam Shri Guru Charanam\n Sāisha Charanam Shri Guru Charanam\n * Brahmānanda Pradāyaka Charanam\n Charanam Sharanam Sāisha Charanam" },

  { id: "329", content: "Prema Bhakti Jagāo Man Mé\n Āo Meré Bhajan Mé Bābā\n Āo Meré Hridaya Mé Bābā\n Tum Ho Deenajanon Ké Sāi\n Tum Ho Bhaktajanon Ké Bābā\n Āo Meré Bhajan Mé Bābā\n Āo Meré Hridaya Mé Bābā" },

  { id: "330", content: "Prema Rupa Ānanda Divya Rupa Ānanda\n Satchidānanda Sāi Mahāna\n Sāi Mahāna Sāi Mahāna\n Yuga Avatārā Tribhuvana Pālā\n Brahmānda Nāyaka Sāi Mahāna\n Sāi Mahāna Sāi Mahāna" },

  { id: "331", content: "Prema Se Gāo Mangala Nām\n Govinda Gopāla Bolo Hari Nām\n Prema Ké Sindhu Deena Ké Bandho\n Karunāmayā Sāi Nayanabhi Rāmā\n Govinda Gopāla Bolo Hari Nām\n Haré Krishna Haré Rām Sāi Rām Sāi Rām (x2)" },

  { id: "332", content: "Rājāti Rājadeva Rāja Poojitā\n Rāja (3) Mahārāja Shekharā\n Rāma Krishna Rupa Mahāteja Swarupā\n Satya Dharma Shānti Prema Sāi Swarupā" },

  { id: "333", content: "Rājāti Rājā Meré Sāi Mahārājā\n Deenon Ké Nātha Bhagavān\n Devādi Devā Hey Sāi Mahādevā\n Parthi Vihāri Bhagavān\n Haré Rāmā Rāmā Rāmā Rāmā\n Haré Krishnā Krishnā Krishnā Krishnā" },

  { id: "334", content: "Rām Bhajoré Shyāma Bhajoré\n Parthi Gopāl Sāi Rām Bhajoré\n Rām Hai Sāi Tu Shyām Hai Sāi\n Jag Paripālaka Pāvana Sāi\n Nanda Ké Dulāré Yashodā Ké Pyāré\n Rām Bhajo (3) Ré (x2)" },

  { id: "335", content: "Sadā Nirantara Hari Guna Gāo\n Prema Bhakti Se Bhajana Sunāo\n * Sāi Nātha Ké Sharana Mé Āo\n Mana Mandira Mé Deepa Jalāo\n Jeevana Naiyā Pāra Lagāo" },

  { id: "336", content: "Sahārā Do Bhagavān\n Mujhé Dayā Karo Mujhé Kripā Karo\n Sanmati Do Bhagavān\n * Sadā Sātha Raho Hey Bhagavān\n Sadā Raksha Karo Hey Bhagavān\n Shānti Bhakti Prema Do Bhagavān" },

  { id: "337", content: "Sāi Avatārā Yuga Avatārā\n Deena Dayālā Sankata Hārā\n * Sāi Brahmā Sāi Vishnu\n Sāi Maheshwarā\n * Sathya Sāi Prema Sāi\n Sab Dharmon Ké Bābā Sāi\n Sāi Parameshwarā" },

  { id: "338", content: "Sāi Bābā Geeta Sudhā\n Madhuram Madhuram Ānandam (x3)\n Shirdi Bābā Geeta Sudhā\n Madhuram Madhuram Ānandam\n Parthi Bābā Geeta Sudhā\n Madhuram Madhuram Ānandam" },

  { id: "339", content: "Sāi Bābā Hamein Pās Bulāo\n Sāi Rāmā Hamein Darsha Dikhāo\n Sāi Krishna Meré Geet Mé Samāo\n Sāi Nātha Meri Phukār Sun Jāo" },

  { id: "340", content: "Sāi Bābā Sakala Bhuvana Ké Dātā – 3\n Rupa Manohara Kamalā Kāntā\n Yugavatāra Sāi Bābā Dayā Karo Parthi Bābā\n Shirdi Parthi Hridaya Vihāri\n Prashānti Nilaya Sāi (x2)" },

  { id: "341", content: "Sāi Bār Bār Tum Āo\n Sāi Bār Bār Tum Bār Bār\n Prabhu Bār Bār Tum Āo\n * Bich Bhanvar Mé Nāw Phansi Hai\n Tumhi Pār Lagāo Sāi Āo\n Tarasa Rahé Hein Nayana Hamāré\n Ab To Darsha Dikhāo Sāi Āo\n Sāi Bār Bār Tum Bār Bār\n Prabhu Bār Bār Tum Āo" },

  { id: "342", content: "Sāi Bhajana Binā Sukha Shānti Nahin\n Hari Nām Binā Ānanda Nahin\n Prema Bhakti Binā Uddhār Nahin\n Guru Seva Binā Nirvāna Nahin\n * Japa Dhyāna Binā Samayoga Nahin\n Prabhu Darsha Binā Pragnāna Nahin\n Dayā Dharma Binā Satkarma Nahin\n Bhagavan Binā Koyi Apnā Nahin\n Sāi Nātha Binā Paramātma Nahin" },

  { id: "343", content: "Sāi Charan Sukhadāyi Man\n Sāi Binā Jeenā Kyā Hai (2)\n * Mātā Bhi Tu Pitā Bhi Tu\n Āo Bhagavan Deejo Darshan\n Mat Jāo Sāi Man Mandir Se\n Sāi Binā Jeenā Kyā Hai (2)" },

  { id: "344", content: "Sāi Darbār Mé Āo Gāo\n Sankirtana Karoun Main Sāi Ké (x2)\n Peetāmbaradhara Nayana Manohara\n Sāi Sab Ké Prāna Sakhā\n Charana Kamala Par Sharana Paroun Main\n Sankirtana Karoun Main Sāi Ké (x2)" },

  { id: "345", content: "Sāi Govindā Sāi Gopālā\n Teré Binā Sāi Sab Hai Andherā\n Deejo Meré Sāi Charana Tumhāré\n Deejo Meré Sāi Darsha Tumhāré\n Āo Meré Sāi Man Mandir Mé (x2)" },

  { id: "346", content: "Sāi Hai Jeevan Jeevan Sathya Sāi\n Sāi Merā Jeevan Sahārā\n * Teré Binā Sāi Sab Hai Andherā\n Pār Karo Meré Jeevan Naiyā\n Charana Lagālo Mujhé Sāi Kanhaiyā" },

  { id: "347", content: "Sāi Hamārā Tum Ujiyārā\n Kaliyuga Avatārā\n Jeevan Naiyā Pār Lagādé\n Meré Deenānātha (x2)\n Mandir Masjid Gurudwāré Mé\n Sāi Tero Nām\n Kankana Mé Sāi Rām" },

  { id: "348", content: "Sāi Mahādevā - Sathya\n Parthipurishwara Hey\n Sāi Bābā Maheshwara Hey\n * Nirupama Sundara Hey\n Sāi Neeraja Dala Nayanā\n Vibhuti Sundara Hey Sāi Bābā Maheshwara Hey" },

  { id: "349", content: "Sāi Mātā Pitā Deena Bandhu Sakhā\n Teré Charanon Mé Sāi Merā Koti Pranām\n Sāi Mātā Pitā Deena Bandhu Sakhā\n Teré Charanon Mé Sāi Merā Koti Pranām\n Mujhé Shakti Do Meré Sāi Shivā\n Mujhé Bhakti Do Meré Sāi Shivā\n Mujhé Mukti Do Meré Sāi Shivā" },

  { id: "350", content: "Sāi Merā Tum Ho Sahārā\n Shirdi Avatārā Sāi Parthipuri Bhagavān\n Deenon Ké Tum Prāna Sakhā Prabhu\n Meré Sāi Rām\n Meré Sāi Rām Bābā Parthipuri Bhagavān" },

  { id: "351", content: "Sāi Nām Bhajo Sathya Sāi Nām Bhajoré\n O Pyāré Sāi Meré Pār Utāro\n * Chānd Suraj Tāré Sāi Āsmān Bhi Sāi\n Parvat Sāi Sāgar Sāi Nadiyā Bhi Sāi\n Āgé Sāi Piché Sāi Dāyein Bāyein Sāi\n Har Pal Sāi Hardam Sāi Sabhi Sathya Sāi" },

  { id: "352", content: "Sāi Nātha Deena Nātha Brahma Rupa Satguru\n Nirākāra Hey Ākāra Sathya Sāi Satguru\n Omkāra Satguru Nirvikāra Satguru\n Nirvikāra Satguru Omkāra Satguru\n * Mātā Pitā Satguru Sakala Tum Hi Satguru\n Sakala Tum Hi Satguru (2)" },

  { id: "353", content: "Sāi Nāthā Guru Govindā\n Sathya Sāi Jaya Paramānandā (3)" },

  { id: "354", content: "Sāi Nātha Prabhu Ab Tum Āo\n Mana Mandira Mé Āo\n * Āo Sundara Sāi Bhagavān\n Āo Mangala Karunā Nidhān\n Āo Sumangala Bhakton Ké Prān\n Ab Tum Āo" },

  { id: "355", content: "Sāi Om (3)\n Tan Man Prāna Mé Sāi Om\n * Shayana Sapana Mé Sāi Om\n Gagan Pavana Mé Sāi Om\n Shayana Sapana Mé Sāi Om\n Nayana Nayana Mé Sāi Om\n Janama Marana Mé Sāi Om" },

  { id: "356", content: "Sāi Pitā Aur Mātā Sāi\n Deena Dayālā Dātā Sāi\n * Sāi Guru Sāi Sakhā Sahodara\n Sāi Satya Shivā Sāi Sundarā\n Veda Upanishada Geetā Sāi\n Deena Dayālā Dātā Sāi" },

  { id: "357", content: "Sāi Prema Dé Shānti Dé Ānanda Dé\n Bābā Prema Dé\n Tum Ho Bābā Dayā Ké Sāgara\n Tum Ho Guna Mandir Natanāgara\n Ādi Ananta Hai Satya Sanātana\n Nitya Niranjana Sāi Janārdana\n Satchidānanda Prabhu Kripā Karo" },

  { id: "358", content: "Sāi Rām Ghanashyāma Bhagavān Tumhārā Nām\n Tum Bina Koyi Nahin Rakhawālé\n Tum Bina Koyi Nahin Āpath Sahāré\n Tum Bina Prema Koyi Nahin Denéwālé\n Tum Ho Meré Ātmārām Bābā\n Bhagavān Tumhārā Nām\n Sāi Rām Tumhārā Nām" },

  { id: "359", content: "Sāi Rāmā Hey Ghanashyāmā\n Parama Dayāgana Ātmārāmā\n * Shānta Saguna Hari Hara Paramātmā\n Bhakta Samrakshaka Dayābhi Rāmā\n Patita Pāvanā Sathya Sāi Rāmā\n Sharanam Sharanam Hey Sāi Rāmā" },

  { id: "360", content: "Sāi Rām Sāi Rām\n Gā Ye Geeta Sadā Subah Aur Shām\n Har Ek Pāl Mé Har Ek Kshan Mé\n Bhajé Ham Sadā Terā Nām – Sāi\n Gā Ye Geeta Sadā Subah Aur Shām\n Koyi Kahé Tujhé Jānaki Rām\n Koyi Phukāré Rādhéshyām\n Hamhré Liyé Tum Sāi Bhagavān\n Gā Ye Geeta Sadā Subah Aur Shām" },

  { id: "361", content: "Sāi Rām (2) Sāi Devā Satguru Rām\n Karunā Sāgara Parthipurishā\n Satya Swarupā Rām\n Ātmābhi Sāi Rām\n Sāi Parthipurishwara Rām" },

  { id: "362", content: "Sāi Rām Sāi Shyām Meré Sāi Rām\n Meré Sāi Meré Bābā Meré Prāna Nātha Rām\n Teré Dwār Pé Main Āwoun\n Mujhé Shānti Do Bhagavān\n Mujhé Shānti Do Bhagavān\n Meré Jeevan Mé Sāth Raho Sāi Nātha Hey\n Meré Sāi Meré Bābā Meré Prāna Nātha Rām" },

  { id: "363", content: "Sāi Rām Swāgatam\n Sāi Rām Swāgatam\n Happy Birthday To You Sāi Lord\n Happy Birthday To You Sāi Lord\n Suragana Bhava Harā\n Eeshwarāmbā Nandanā\n Swāgatam Swāgatam" },

  { id: "364", content: "Sāi (2) Smarana Karo\n Guru Charana Kamala Dhyāna Karo\n Keshava Mādhava Bhajana Karo\n Shri Satguru Sāi Sevā Karo" },

  { id: "365", content: "Sāi Satya Pālanā\n Bābā Satya Pālanā\n Shirdipuri Vāsā Sāi Sarveshā\n Hey Shirdipuri Vāsā Hey Parthipuri Vāsā\n Sarveshā Satya Pālanā\n * Akhila Nivāsā Jaya Hrishikeshā\n Mangala Kara Hey Pāvana Purushā\n Shirdipuri Vāsā Sāi Sarveshā\n Hey Shirdipuri Vāsā Hey Parthipuri Vāsā\n Sarveshā Satya Pālanā" },

  { id: "366", content: "Sāi Sundarā Sundarā\n Vyāgrāmbaradhara Haré Hari Harā\n * Ananta Guna Mandirā Sundarā\n Natana Sundarā Bhuvana Sundarā" },

  { id: "367", content: "Sāi Tero Nāma Tero Nāma\n Janama Janama Main Gāoun (x2)\n Charana Tumhāre Satguru Sāi\n Apane Hridaya Basāo\n Shirdi Sāi Parthi Sāi\n Prema Sāi Guna Gāo\n Janama Janama Main Gāoun (x2)" },

  { id: "368", content: "Sākshāt Parabrahma Sāi\n Guru Vandanā Sathya Sāi\n Guru Pada Ranjana Guru Parameshā\n Guru Brahma Guru Vishnu Maheshā\n Sadguru Sāi Parthipurishā\n Charana Namostuté Sāi Maheshā" },

  { id: "369", content: "Sankata Haranā Shri Sāi Ramanā\n Pankaja Charanā Namo Namo\n Vedoddharanā Venkata Ramanā\n Lakshmi Nārāyana Namo Namo\n Namo Namo (2)\n Pankaja Charanā Namo Namo" },

  { id: "370", content: "Sarva Nāma Swarupam Sāi Bābā\n Sarva Hridaya Virājam Sāi Bābā\n * Sarva Daivatva Swarupam Sāi Bābā\n Sarva Dharma Virājam Sāi Bābā\n Om Brahma Sanātani Sāi Bābā" },

  { id: "371", content: "Satbār Kahoré Sāi Rām\n Sāi Rām Sāi Rām Sāi Rām\n Hey Mangala Nayanā Rām\n Hey Gopi Jeevana Shyām\n Hey Shirdi Ké Bhagavān\n Hey Prashānti Nilaya Rām\n Kshat Koti Namana Sāi Rām\n Sāi Rām (3)" },

  { id: "372", content: "Satguru Brahma Sanātana Hai\n Parama Dayāgana Pāvana Hai\n Janmaja Dukha Vināshana Hai\n Jagadoddhārana Kārana Hai\n Sāi Krishna Janārdana Hai\n Bhava Bhaya Jaladi Tārana Hai" },

  { id: "373", content: "Satguru Sāi Bābā Sāisha Bolo\n Sāisha Bolo Sāisha Bolo\n Satguru Sāi Nāma Samāyo\n Sāré Jaga Mé Sāi Samāyo\n Tumhré Nām Ki Jyoti Jalāyo" },

  { id: "374", content: "Satguru (3) Sathya Sāi\n Hey Devādi Deva Guru Sāi\n Sarva Loka Sharanya Guru Sāi\n Merā Jeevan Ké Ādhār Sāi\n Kanakāmbaradhāri Hey Karunākara Sāi\n Kalyāna Gunashekhara Kaliyuga Avatāri\n Bhajoré (2) Sāi Merā Jeevan Ké Ādhār Sāi" },

  { id: "375", content: "Sathya Sāi Gurudevā O Pyāré Satguru Devā\n Tum Ho Merā Jeevan Sahārā\n Parthi Vihārā Merā Dulārā\n Pār Karo Hey Priya Guru Naiyā\n Dur Karo Hey Jaga Ki Māyā\n Tum Ho Sāi Duniyā Ki Dheiyā" },

  { id: "376", content: "Sathya Sāi Mahārājā\n Hey Trayambaka Yajā Maheshā - Shri\n Satyam Shivam Sundara Rupā\n Hey Satya Dharma Shānti Prema Ahimsā\n * Bhāradwāja Gotra Āpasthamba Sutra\n Dattātreya Digambareshā\n Nānā Avatārā Vedānta Sārā\n Nābhi Kamala Lingodbhavakarā" },

  { id: "378", content: "Sathya Sāi Rāmā Hey Ghanashyāmā\n Prema Sudhā Barso Shānti Sudhā Barso\n * Kaliyuga Me Tum Yuga Avatāri\n Sathya Sāi Rāmā Hey Ghanashyāmā (x2)" },

  { id: "379", content: "Sathya Sāi Rāmā Shiva Shakti Rupā\n Satya Dharma Shānti Prema Purna Teja\n Eeshwarāmba Nandana Sathya Nārāyana\n Yuga Avatārā Devādi Devā\n Jaya Parameshā Parthipurishā\n Hridayeshwarā Sāishwarā" },

  { id: "380", content: "Sathya Sāi Smaranam Smaranam\n Parthi Sāi Smaranam\n Tribhuvana Pālaka Sāi Maheshā\n Sathya Sāi Smaranam\n Shri Guru Charanam Sab Dukha Haranam\n Sathya Sāi Smaranam Smaranam\n Sathya Sāi Smaranam" },

  { id: "375", content: "Satya Gurudeva Rāh Dikhāo Prabhu\n Rāh Dikhāo Sāi Devā\n * Tum Ho Meré Prān Dātā\n Tum Ho Meré Bhāgya Dātā (x2)" },

  { id: "381", content: "Satyam Gyānam Anantam Brahmā (x3)\n Satyam Brahmā\n Gyānam Brahmā\n Anantam Brahmā" },

  { id: "382", content: "Shāntākāram Sāi Devam\n Sākshātkāram Parabrahmam\n Prashānti Nilayam Parama Pāvanam\n Devādi Devam Gurudevam" },

  { id: "383", content: "Sharana Mé Lelo Sāi Rām\n Kripā Karo Hey Sāi Rām\n Karunā Sāgara Deena Bandhu Sathya Sāi Rām\n Sab Kā Mālika Tum Ho Sāi Jag Kā Pālanhār\n Vinti Sunlo Swikār Karlo Sathya Sāi Rām" },

  { id: "384", content: "Sharanam Gurudevā Sharanam Sāi Devā\n Jaya Jaya Gurudevā Jaya Jaya Sāi Devā\n * Kripā Karo Hey Gurudevā\n Kshamā Karo Hey Sāi Devā\n Deena Bandhu Karunā Sindhu\n Sāi Devā Sathya Sāi Devā\n Jaya Jaya Gurudevā Jaya Jaya Sāi Devā" },

  { id: "385", content: "Sharanam (2) Sāisha Sharanam\n Shri Guru Jaya Guru Satguru Sāi Guru\n * Parthipurisham Sāi Gopālam\n Shānti Nivāsam Gurudeva Sharanam" },

  { id: "386", content: "Sheetala Charanam Komala Charanam\n Manjula Charanam Mama Guru Charanam\n Mridula Charanam Anugraha Charanam\n Satguru Charanam Sadā Smarāmi\n Prema Dātā Sāi Gurunāthā\n Pāvana Charanam Sadā Bhajāmi" },

  { id: "387", content: "Shirdi Ké Bhagavān Sāi Rām\n Parthi Mé Tuhi Janam Liyo Ré\n * Mandira Mandira Ghantā Bājé\n Teré Nām Ki Mahimā Bhāri\n Bhakton Ké Rakhawālé O Bābā" },

  { id: "388", content: "Shirdi Ké Sāi Parthi Ké Bābā\n Tum Ho Hamāré Pyāré Sāi Bābā\n * Prema Maya Sāi Prema Pradātā\n Eeshwarāmbā Nandana Jagat Paripālā\n Pāpa Vināshaka Parama Kripālā - Hey" },

  { id: "389", content: "Shirdi Sāi Parthi Bābā\n Deenajanon Ké Sāi Bhaktajanon Ké Bābā\n Kaliyuga Avatārā Meré Jeevana Ādhārā\n Satguru Sāi Rām Shri Guru Sāi Rām" },

  { id: "390", content: "Shirdi Sāi Parthi Sāi Ham Ko Deejo\n Premāmrita Dhārā (2)\n Tava Sevā Kā Avasar Deejo\n Sathya Sāi Mahādeva\n Gānāmrita Mé Bhāva Bhi Deejo\n Prema Sāi Bhagavān\n Hey Prema Sāi Bhagavān" },

  { id: "391", content: "Shirdipuri Bhagavān Parthipuri Bhagavān\n Prema Swarupa Premāvatārā\n Sāi Nātha Bhagavān (x2)\n Buddham Sharanam Gachchāmi\n Dhammam Sharanam Gachchāmi\n Sangham Sharanam Gachchāmi\n Sāisha Sharanam Gachchāmi" },

  { id: "392", content: "Shri Ganeshā Jaya Ganeshā\n Jaya Guru Devā Sāi Maheshā\n Pārvati Shankara Hey Parameshā\n Rām Krishna Hari Govinda Vitthalā\n Subrahmaniam (2)\n Shanmukha Nāthā Subrahmaniam\n Subrahmaniam (2) Sāi Nāthā Subrahmaniam" },

  { id: "393", content: "Shubha Din Āj Mangala Gāna Karo\n Prema Pavitram Sundara Anupama\n Sathya Sāi Bhajana Karo\n Mangala Gāna Karo\n * Swāgatam Sāi Suswāgatam\n Hridaya Mandir Mé Āo Bhagavan\n Meré Hridaya Mé Āo Bhagavan" },

  { id: "394", content: "Sundara Vadanā Sarasija Nayanā\n Parthipuri Bhagavān\n Jagat Paripālā Prashānti Nilaya\n Tum Ho Meré Bhagavān\n Dayā Karo Bhagavān\n Kripā Karo Bhagavān\n Parthipurishā Hey Bhuvaneshā\n Rakshā Karo Bhagavān\n Dayā Karo Bhagavān\n Kripā Karo Bhagavān" },

  { id: "395", content: "Terā Sahārā Chooté Nā\n Sāi Terā Sahārā Chooté Nā\n Charanon Mé Rakhlo Mujhko Sāi\n Manwā Merā Thoothé Nā\n Ās Na Thoothé Tu Na Roothé\n Tor Do Sāi Bandhan Jhooté\n Tum Sanga Preeta Ki Bāndhi Dor\n Koyi Looterā Looté Nā" },

  { id: "396", content: "Teré Dar Pé Āyā Houn Darshan Pāké Jāwoungā\n Ankhon Mé Tujhko Basāké Leké Jawoungā\n * Prashānti Mandir Se Bāhar Ā\n Sab Ko Darshan Tu Dedé\n Meré Man Mandir Mé Sāi Ājā Aur Bas Jā\n Ās Lagāyé Tujhé Phukāré Intazār Karoun" },

  { id: "397", content: "Teré Sivā Prabhu Koyi Nahin Hai\n Tujhko Merā Pranām\n Tujhko Merā Pranām Sāi Rām\n Tujhko Merā Pranām\n Murali Manohara Āshā Na Toro\n Dukha Bhanjana Merā Sātha Na Choro\n Dwāra Kharā Houn Main Houn Bhikhāri\n Sunlé Meri Phukār Sāi Rām Sunlé Meri Phukār" },

  { id: "398", content: "Tu Milé Na Milé O Meré Sāi\n Ham Āyé Teré Darsha Ko Sāi\n Teré Darasha Mé Sukha Jeevan Kā\n Nilaya Prashānti Nām Teré Ghar Kā\n Sāi Deepa Jalé Ghar Ghar Sāi\n Ham Āyé Teré Darsha Ko Sāi\n Parthi Mé Sāi Rām Virājé\n Bhajan Poojan Se Parthi Sājé\n Janam Janam Ki Poonji Pāyi\n Tu Chalé Na Chalé Meré Ghar Sāi\n Ham Āyé Teré Darsha Ko Sāi" },

  { id: "399", content: "Tum Ho Anātha Nātha Bhagavān\n O Sāi Meré Prāna Sakhā Bhagavān\n Mātā Pitā Guru Bandhu Tum Ho\n Bhakta Sakhā Bhagavān\n Deena Sakhā Bhagavān\n Bhagavān Bhagavān\n Prāna Sakhā Bhagavān – O Sāi Meré" },

  { id: "400", content: "Tum Ho Meré Bhagavān Bābā\n Parthipurishā Shri Sāi Nāthā\n Shirdipurishā Hey Jagannāthā\n * Prashānti Vāsā Shri Sāi Nāthā\n Purāna Purushā Hey Jagannāthā" },

  { id: "401", content: "Tum Ho Rām Tum Ho Shyām\n Bhakton Ké Prān Bhagavān Sāi Rām\n Seetārām Rādhéshyām\n Eka Prabhu Bhagavān Sāi Rām\n Bhakton Ké Prān Bhagavān Sāi Rām" },

  { id: "402", content: "Vinti Suno Meré Sāi Bhagavān\n Dayā Karo Meré Sāi Bhagavān\n Bhaktajanon Ké Tum Ho Prāna\n Deena Dayālā Karunā Nidhān\n Tribhuvan Pālā Sādhu Paritrāna" },

  { id: "403", content: "Yuga Avatārā Pāvana Dhāmā\n Kaivalya Dāyaka Rām Sāi\n * Karunā Sāgara Prema Ké Sindhu\n Deena Bandhu Deenanātha Bhagavān\n Anupama Sundara Prashānti Vāsā\n Hridayeshwara Sāi Rām" },

  { id: "500", content: "Abhaya Pradāyini Ānanda Rupini\n Sāi Mātā Sathya Sāi Mātā\n Hemagiri Nandini Bhava Bhaya Bhanjani\n Jaya Jaga Janani Devi Bhavāni\n Parthipurishwari Sāi Janani (x2)" },

  { id: "501", content: "Akhilāndeshwari Rājā Rājeshwari\n Dayā Sāgari Parama Kripākari\n Sāmba Vinodini Shiva Sāi Shankari (x2)\n Mangala Gauri Mātā Maheshwari" },

  { id: "502", content: "Ambā Jaga Janani\n Karunāmayi Sāi Premamayi\n Hey Ātma Swarupini Mā\n * Sahārā Do Mā Mujhé Kripā Karo Sāi Mā\n Mangala Kārini Manjula Bhāshini\n Moksha Pradāyini Mā" },

  { id: "503", content: "Ambā Shankari Parameshwari\n Shashi Shekhari Ambā\n Sarveshwari Jagadishwari Maheshwari Ambā\n Ambā Sundari Guna Manjari\n Shiva Shankari Ambā\n Kādambari Swetāmbari Hari Sodari Ambā" },

  { id: "504", content: "Ambamandahāsa Vadani Manohari\n Sāi Jaga Janani\n Mātā (3) Jaga Janani\n Jaga Janani Shubha Karani\n Sāi Jagan Mātā Sathya Sāi Jagan Mātā\n Mātā (3) Jaga Janani" },

  { id: "505", content: "Ambé Janani Abhirāmi\n Abhaya Pradāyini Shivakāmi\n * Sāmbavi Shankari Sarveshwari\n Shānta Swarupini Shiva Shankari\n Sathya Swarupini Sāi Mātā\n Shāshwata Ānanda Dāyini Mātā" },

  { id: "506", content: "Antarjyot Jalāo Sāi\n Brahma Sanātani Dayā Karo\n Dayā Karo Hey Poorna Jyotirmayi\n Shiva Shakti Mayi Kripā Karo\n Deena Dayāmayi Patita Pāvani\n Sāi Jagajanani Kripā Karo" },

  { id: "507", content: "Bhairavi Ambé Bhavāni - Ambā\n Jagadambé Mā Jaga Janani\n * Nārāyani Patita Pāvani\n Parthi Puranjani Sāi Janani" },

  { id: "508", content: "Bhajaré Mā (2)\n Bhajaré Bhaja Man Sāi Mā\n * Bhajaré Saraswati Shankari Mā\n Bhajaré Chandi Maheshwari Mā\n Pārvati Bhava Bhaya Hārini Mā\n Pankaja Lochani Sāi Mā" },

  { id: "509", content: "Bhajoré Bhajo Sadā Durgā Bhavāni\n Mangala Kārini Sāi Janani\n * Mahishāsura Mardini Bhavāni\n Dayā Sāgari Hey Jaga Janani" },

  { id: "751", content: "Shambho Shivā Hara Shambho Shivā\n Sāmba Shiva Nāyaka Hara Shambho Shivā\n Gangādhara Juthā Shiva Gauri Nāyakā\n Kāshipura Vāsā Hey Kanakasabeshā\n Tat Dimi Dimi Damaru Ka Shiva Rudra Nateshā\n Sāi Maheshā Sathya Sāi Maheshā (x2)" },

  { id: "752", content: "Shankara Nām Bhajo\n Shankara (2) Nām Bhajo – 3\n * Peetāmbaradhara Sāi Shankara\n Chandrakalādhara Gauri Manohara" },

  { id: "753", content: "Shankara (2) Sadāshivā\n Sadāshivā Hey Sāmba Shivā\n * Ambā Sahitā Sāmba Shivā\n Sāmba Shivā Hey Sadāshivā" },

  { id: "754", content: "Shankaram Bhajé Sāi Shankaram Bhajé\n Parthi Vāsā Sāi Deva Shankaram Bhajé\n Sadgurum Bhajé Sāi Sadgurum Bhajé\n Satchidānanda Gurum Satgurum Bhajé" },

  { id: "755", content: "Shankarā Sadāshivā Chandrashekharā\n Chandrashekharā Sāi Shankarā\n Neelakantha Trishuladhāri Sāi Shankarā\n Bhālanetra Tripura Hāri Sāi Shankarā\n Chandrashekharā Sāi Shankarā" },

  { id: "756", content: "Shankarā Sadāshivā Sabhāpaté Manoharā\n Chandrashekharā Jatādharā Umā Maheshwarā\n * Shankarā Sāi Shankarā (x2)\n Chandrashekharā Jatādharā Umā Maheshwarā\n Ishwarā Sāi Ishwarā\n Ishwarā Parthi Ishwarā\n Chandrashekharā Jatādharā Umā Maheshwarā" },

  { id: "757", content: "Shankarā Shiva Shankarā\n Shiva Shankarā Shambho\n Shankarā Shiva Shankarā\n Shiva Shambho Mahādevā\n * Dama (2) Damaru Bajé Shankara\n Ghana Ghana Ghantā Bajé\n Hara Bholenātha Shambho\n Hara Sāi Nātha Shambho – Hara" },

  { id: "758", content: "Shirdi Nivāsā Sāi Shankarā\n Parthi Nivāsā Sāi Shankarā\n Bhāvā Teetā Bhāva Gocharā\n Kālā Teetā Kālā Bhairavā\n Jai Jagadishwara Omkāreshwara – 4" },

  { id: "759", content: "Shirdi Sāi Shankarā Parthi Vihāri Shankarā\n Shankarā Abhayankarā\n Bhava Bhaya Hāri Shankarā\n * Paramātmā Shiva Shankarā\n Pāvana Purushā Shankarā\n Satya Swarupā Shankarā Sathya Sāi Shankarā" },

  { id: "760", content: "Shirdi Sāi Shiva Parthi Sāi Shivā\n Hara Hara Shankara Shiva Sāi Shambho\n Natana Manohara Gaurivarā\n Sāmba Sadāshiva Shiva Sāi Shambho (Hara)\n Gangādhara Shiva Hara Hara Shambho" },

  { id: "761", content: "Shirdi Sāi Shiva Shankarā\n Sathya Sāi Parameshwarā\n Shambho Mahādeva Sadāshivā\n Gangādhara Hara Gaurishwarā" },

  { id: "762", content: "Shiva Hara Hey Hara Shiva Hey\n Sāmba Sadāshiva Shiva Hara Hey\n Hara (4) Mahādevā\n Pārvati Ramanā Sadāshivā\n Namāmi Shankara Tava Sharanam\n Bhavāni Shankara Tava Sharanam" },

  { id: "763", content: "Shiva Maheshwarā (3) Sāi Rām\n Shiva Maheshwarā Shiva Shankarā\n Shiva Mahādevā Sāi Rām\n Kailāsha Vāsā Mahādevā\n Jagadishwara Hara Mahādevā\n Tribhuvana Pāla Bābā Sāi Devā" },

  { id: "764", content: "Shiva Shambho Shambho\n Shiva Shambho Mahādevā\n Hara (4) Mahādevā Shiva Shambho Mahādevā\n Hālāhaladhara Shambho Anātha Nāthā Shambho\n Hari Om (3) Namah Shivāya" },

  { id: "765", content: "Shivā Shankarā\n Ānanda Nateshā\n Shambho Nandana Hey Parameshwara\n Chidambara Nāthā Ambalavānā\n * Damaru Bajé Shiva Ghantā Bajé\n Kailāshapaté Prema Shiva Shankara (Sāi)" },

  { id: "766", content: "Shiva (2) Hara (2) Bhola Maheshwara\n Shambho Shankarā\n Chandrakalādhara Gauri Manohara\n Shambho Shankarā\n * Vyāgrāmbaradhara Chandrakalādhara\n Shambho Shankarā\n Hālāhaladhara Shailagirishwara\n Shambho Shankarā\n Chandrakalādhara Gauri Manohara\n Shambho Shankarā" },

  { id: "767", content: "Shiva (2) Shambho Mahesha Girishā\n Hara (2) Sāi Mahādevā\n Nandi Vāhanā Nāga Bhooshāna\n Bhāla Lochanā Tripurāri Samhāri\n Parama Purusha Shiva Gangādhāri\n Chandrakalādhara Pārvati Ramanā\n Hara (2) Sāi Mahādevā" },

  { id: "768", content: "Shiva (2) Shankara Hara Parameshwara\n Bāla Gangādhara Sāi\n Shiva (2) Shankara Parthipurishwara\n Natashiva Shankara Sāi\n Bāla Gangādhara Sāi" },

  { id: "769", content: "Shiva (4) Tāndavané\n Hara (4) Shankarané\n * Shiva (4) Pashupatiyé\n Hara Hara Namo Pārvati Patayé\n Shiva (2) Shambho, Hara (2) Shambho\n Parthipurishwara Sāi Shambho (x2)" },

  { id: "770", content: "Shivāya Parameshwarāya\n Chandrashekharāya Namah Om\n Bhavāya Gunasambhavāya\n Shiva Tāndavāya Namah Om" },

  { id: "771", content: "Shivoham (3) Shivā\n Chidānanda Rupam Shivoham Shivā\n Shivoham (3) Shivā\n Shivoham Shivā (2)\n Chidānanda Rupam Shivoham Shivā" },

  { id: "772", content: "Tāndava Priyakara Sabhāpaté\n Dam (4) Damaru Bajé\n Hara Bam Hara Bam Bholā Maheshwara\n Dama (2) Damaru Shiva Tāndavā\n Dam (4) Damaru Bajé\n Chidambareshā Sāi Natarājā\n Vibhuti Sundara Triyambakeshā\n Dam (4) Damaru Bajé" },

  { id: "773", content: "Tāndava Priyakara Sāi Parameshwara\n Nāché Sāi Shankara Natarājā\n Dama (4) Damaru Bājé\n Ghana (2) Bājé Pāyaliyā\n Nāché Gangādhara Nāché Bimbādhara\n Nāché Sāi Shankara Natarājā" },

  { id: "774", content: "Tum Ho Dātā Sāi Shankarā\n Sab Ko Deejo Ānanda Bābā\n * Āo Shankara Anātha Nāthā\n Deejo Darshan Deena Nāthā" },

  { id: "775", content: "Veda Rupāntara Shiva Shambho\n Vishmaya Rupā Shiva Shambho\n * Tripura Nāshaka Trishuladhāri\n Lokoddhāraka Bhava Bhaya Hāri\n Rudra Mahādeva Bhaktoddhāri" },

  { id: "776", content: "Umā Maheshwara Uragā Bharanā\n Gangādhara Shiva Shambho\n Jaya Jagadishwara Pārvati Ramanā\n Parātparā Shiva Shambho\n Parthipurishwara Shambho" },

  { id: "777", content: "Vishwādhāri Shiva Avatāri\n Sāi Shankara Namo Namo\n Mathurā Nāthā Nārāyana Hari\n Sāi Shankara Namo Namo (x2)" },

  { id: "850", content: "Ātmā Rām Ānanda Dhāma\n Atchyuta Rām Ayodhya Rām\n Seetā Rām Sathya Sāi Rām\n Sundara Rām Sugunābhi Rām\n Sāi Rām (3) Rām (x3)" },

  { id: "851", content: "Ātma Rāmā Ānanda Rāmā\n Ānanda Mohana Shri Parandhāmā\n * Māyāvee Rāmā Mānasa Premā\n Sundara Rāmā Sugunābhi Rāmā" },

  { id: "852", content: "Ayodhyā Vāsi Rām Rām Rām\n Dasharatha Nandana Rām\n Patita Pāvana Jānaki Jeevana\n Seetā Mohana Rām\n Ayodhyā Vāsi Rām Rām Rām\n Dasharatha Nandana Rām\n Patita Pāvana Jānaki Jeevana\n Seetā Mohana Rām" },

  { id: "853", content: "Ayodhyā Vihāri Shri Rām Rām Rāmā\n Dwārakā Vihāri Shri Krishna Krishna Krishnā\n Saptagiri Vihāri Govinda Govindā\n Nija Bhakta Hridaya Vihāri\n Shri Sāi Nātha Devā" },

  { id: "854", content: "Bhaja Bhajo Rām Rām Raghupati Seetā Rām\n Rāmeti Rāmā Seetā Rāmā Rāmā (x2)\n Rāmeti Rāmā Sāi Rāmā Rāmā" },

  { id: "855", content: "Bhaja Rāmam Bhaja Rāmam\n Bhajaré Mānasa Bhaja Rāmam\n Kalyāna Rāmam Bhaja Rāmam\n Kodanda Rāmam Bhaja Rāmam\n Patthābhi Rāmam Bhaja Rāmam\n Pāvana Nāmam Bhaja Rāmam\n Bhava Tārakam Nāmam Bhaja Rāmam" },

  { id: "856", content: "Bhajaré Rām Charan Satatam\n Bhajaré Rām Charan\n Bhajaré Jānaki Jeevana Rāmam\n Bhajaré Rāma Bhadrachala Rāmam\n Bhajaré Pāvana Tāraka Nāmam\n Bhajaré Shri Rāma Rāmeti Rāmam" },

  { id: "857", content: "Chandra Kirana Kula Mandana Rām\n Shrimad Dasharatha Nandana Rām\n Kaushalyā Sukha Vardhana Rām\n Vishwāmitra Priya Dhana Rām\n Shri Rām Jaya Rām Jaya Jaya Rām – 4" },

  { id: "858", content: "Dānava Bhanjana Rām Sāi\n Shyāmala Komala Rām\n Hey Rām Rām Jaya Rām Sāi Rām Rām Rām\n Dasharatha Nandana Rām Sāi Dayā Sāgara Rām\n Hey Deenon Ké Prabhu Rām Sāi Rām Rām Rām" },

  { id: "859", content: "Dasharatha Nandana Rām Rām Rām\n Dashamukha Mardana Rām Rām\n Raghupati Ranjana Rām Rām\n Pāpa Vimochana Rām Rām\n Kalyāna Rām Rām Rām\n Seetā Rām Jaya Rām Rām\n Kaliyuga Varadā Rām Rām\n Karunā Murti Sāi Rām" },

  { id: "860", content: "Dasharatha Nandana Rāmā Dayā Sāgarā Rāmā\n Dashamukha Mardana Rāmā\n Daitya Kulāntaka Rāmā\n Lakshmana Sevita Rāmā\n Lakshmi Manohara Rāmā\n Sukshma Shareerā Rāmā Sundara Vadanā Rāmā" },

  { id: "861", content: "Dasharatha Rām Jānaki Rām\n Māruti Sevita Manobhi Rām\n Seetā Rām Shri Raghurām\n Parthipurishwara Shri Sāi Rām\n Jaya Jaya Rām Jānaki Rām\n Ahalyoddhāraka Ānanda Rām" },

  { id: "862", content: "Dayābhi Rāmā Jānaki Rāmā\n Madhura Manohara Prabhu Sāi Rāmā\n Ātmārāmā Nayanabhi Rāmā\n Kodanda Rāmā Patthābhi Rāmā\n Raghupati Rāghava Rājārāmā\n Madhura Manohara Prabhu Sāi Rāmā" },

  { id: "863", content: "Deena Dayālā Shri Sāi Rāmā\n Jagadoddharā Prashānti Rāmā\n Anātha Rakshaka Ānanda Rāmā\n Ānanda Rāmā Prabhu Sāi Rāmā\n Ātmābhi Rāmā Prabhu Sāi Rāmā" },

  { id: "864", content: "Dwārakāmāyi Rām Hey Shirdipurishwara Rām\n Prashānti Nilaya Rām\n Hey Parthipurishwara Rām\n Ayodhyā Vāsi Rām Hey Jānaki Jeevana Rām\n Dayā Karo Raghurām\n Hey Deena Bandhu Sāi Rām" },

  { id: "865", content: "Hey Deena Dayālu Sāi Rāmā Rām\n Parama Kripālu Sāi Rāmā Rām\n Sāi Rām Rāmā Rāmā Rām (x2)\n Hey Patita Pāvana Sāi Rāmā Rām\n Bhakta Vatsala Sāi Rāmā Rām\n Sāi Rām Rāmā Rāmā Rām (x2)" },

  { id: "866", content: "Hey Ishwari Nandana Rāghava Sāi\n Dayānidhé Bhagavān - Hey\n Kaushalyātmaja Dasharatha Nandana\n Ramaneeya Ānanda Tribhuvana Mohana\n Parthishwara Prabhu Karunā Niketana\n Dayānidhe Bhagavān – Hey (Kripā)" },

  { id: "867", content: "Hey Karunānidhé Bhagavān Sāi Rām Sāi Rām\n Hey Deenajanon Ké Dayānidhé\n Prabhu Rām Sāi Rām\n Prabhuji Sāi Rām Sāi Rām\n Mangala Nāmā Sāi Rāmā Rāmā\n Hey Patita Pāvana Rām Sāi Rām Sāi Rām\n Prabhuji Sāi Rām Sāi Rām\n Jai Sathya Sāi Rām Sāi Rām" },

  { id: "868", content: "Hey Parthipurishā Prashānti Vāsā\n Sadguru Sāi Rām\n Jaya Sadguru Sāi Rām – (Shri, Namo)\n Haré Rām Haré Rām Haré Rām Haré Rām\n Haré Rām Sāi Rām\n Hey Prema Swarupā Pāpa Vināshā\n Sadguru Sāi Rām\n Jaya Sadguru Sāi Rām – (Shri, Namo)\n Haré Rām Haré Rām Haré Rām Haré Rām\n Haré Rām Sāi Rām" },

  { id: "869", content: "Hey Prashānti Nilaya Rām\n Hey Parthipuri Bhagavān\n Ahalyoddhāraka Rām Dāsharathe Raghurām\n Shri Rām Jaya Rām\n Shri Rām Rām Rām Jaya Rām\n Sāi Rām Rām Rām Sāi Rām" },

  { id: "870", content: "Hey Rām Bhagavān\n Hey Karunā Sindhu Rām\n Hey Deena Bandhu Sāi Rām\n Bhakta Premi Ko Karunā Karo Bābā\n Dayā Karo Raghurām - Kripā\n Hey Jānaki Jeevana Rām\n Hey Parthipurishwara Rām\n Hey Deena Bandhu Sāi Rām" },

  { id: "871", content: "Jagadāshraya Shri Raghurāmā\n Jagadoddhārā Sāi Rāmā\n * Parama Pāvanā Tāraka Nāmā\n Shri Rāma Kshata Koti Pranāmā\n Sāi Rāmā Koti Pranāmā\n Sharanam (2) Ātmā Rāmā" },

  { id: "872", content: "Jaya Jaya Mohana Rāmā Rāmā\n Jaya Sathya Sāi Parandhāmā\n Kaushalyā Rāmā Kalyāna Rāmā\n Kārunyā Rāmā Jaya Jaya Rāmā\n Kaliyuga Avatāra Sathya Sāi Rāmā\n Shri Sathya Sāi Parandhāmā" },

  { id: "873", content: "Jaya Jaya Raghunandanā Jaya Jānaki Jeevanā\n Sharanāgata Pālanā Jaya Jagadoddhāranā\n * Rājiva Dala Lochanā Jaya Jagatā Nandanā\n Rājādhirāja Rāmachandra Sāi Jaga Vandanā" },

  { id: "874", content: "Jaya Jaya Rāmā Jānaki Rāmā\n Raghukula Bhooshana Rājā Rāmā\n * Tāpasa Ranjana Tāraka Nāmā\n Dānava Bhanjana Kodanda Rāmā" },

  { id: "875", content: "Jaya Jaya Rām Jaya Raghurām\n Jaya Jaya Rām Jaya Sāi Rām\n Dasharatha Nandana Hey Raghurām\n Dashamukha Mardana Seetārām\n Dānava Bhanjana Jānaki Rām" },

  { id: "876", content: "Jaya Jaya Rāmā Jaya Raghurāmā\n Dasharatha Nandana Rājā Rāmā\n Abhaya Pradāyaka Ānanda Dāyaka\n Tribhuvana Mohana Seetā Rāmā\n Dānava Bhanjana Deenoddhārana\n Prema Sāgarā Sāi Rāmā" },

  { id: "877", content: "Jaya Raghunandana Jaya Jaya Rāmā\n Jaya Jagatjanani Jānaki Rāmā\n Nava Nava Komala Meghashyāmā\n Bhava Haranā Bhadrāchala Rāmā" },

  { id: "878", content: "Jaya Raghunandana Jaya Siyārām\n Jaya Jaya Rām Jaya Sāi Rām\n * Jānaki Jeevana Seetā Rām\n Bhakta Uddhārana Sāi Rām\n * Māyi Meerā Prabhu Rādhéshyām\n Mandara Giridhāri Hey Ghanashyām\n Mandāsmita Mukha Rādhéshyām\n Mahimā Avatārā Sāi Rām" },

  { id: "879", content: "Jaya Rāma Rāmā Manobhi Rāmā\n Dasharatha Nandana Sāketa Rāmā\n * Asharana Pālana Sāi Rāmā\n Anātha Rakshaka Shri Raghurāmā\n Shri Sāi Rāmā Mangala Dhāmā\n Pāhi Pāhi Shri Sāi Rāmā" },

  { id: "880", content: "Jaya Rāmā Jānaki Rāmā\n Jaya Rām Seetārāmā\n Jaya Rām Meghashyāmā\n Jaya Rām Sāi Rāmā" },

  { id: "881", content: "Jaya Rāmā Raghurāmā\n Ranadheerā Sukumārā\n * Raghupati Rāghava Rājā Rāmā\n Rājiva Lochana Rāmā Rāmā" },

  { id: "882", content: "Jaya Sāi Rāmā Jaya Raghurāmā – 3\n Dukhiyon Ké Dātā Sāi Rāmā\n Prema Pradātā Sāi Rāmā\n Shānta Swarupā Sāi Rāmā\n Jaya Sāi Rāmā Jaya Raghurāmā – Hey" },

  { id: "883", content: "Jaya Shri Rāmā Jaya Raghurāmā\n Jaya Parandhāmā Pāvana Dhāmā\n * Jaya Jaya Rāmā Jaya Satya Nāmā\n Jaya Mana Mohana Shri Sāi Rāmā" },

  { id: "884", content: "Jayatu Jayatu Shri Rāmā\n Janani Jānaki Rāmā\n Shri Sathya Sāi Rāmā\n * Shāshwata Ānanda Dhāmā\n Hey Dharmoddhāraka Rāmā\n Dayānidhé Kripānidhé\n Seetāpaté Jaya Raghurāmā\n Puttaparthipaté Jaya Sāi Rāmā" },

  { id: "885", content: "Kalimala Bhanjana Kodanda Rāmā\n Karunāntarangā Kaivalya Dhāmā\n * Māyā Mānusha Munijana Premā\n Madhura Manohara Mangala Nāmā\n Parthipurishā Prabhu Paramātmā\n Patita Pāvanā Patthābhi Rāmā" },

  { id: "886", content: "Kalyāna Rāmā Ānanda Rāmā\n Rāmā Shri Rāmā Jaya Rāmā\n * Avatāra Sāi Avatāra Rāmā\n Purna Avatāra Sathya Sāi Rāmā" },

  { id: "887", content: "Kalyāna Rāmā Kodanda Rāmā\n Seetā Rāmā Shri Raghurāmā\n * Lakshmana Sevita Lāvanya Rāmā\n Ahalyoddhāraka Pāvana Nāmā\n Mandāsmita Mukha Mangala Dhāmā\n Parthipurishwara Shri Sāi Rāmā\n Sathya Sāi Rāmā" },

  { id: "888", content: "Karunā Niketana Bhakta Sakhā Prabhu\n Sharana Mé Lo Bhagavān\n Dukha Bhanjana Shri Rām\n Tribhuvana Sanchāri Jyoti Swarupā\n Nitya Niranjana Rām\n Ādi Ananta Hai Prema Swarupā\n Dukha Bhanjana Shri Rām" },

  { id: "889", content: "Karunā Samudra Shri Rāmā\n Kaushalyā Tanayā Shri Rāmā\n Sharanāgata Priya Sāi Rāmā\n Sharanam Sharanam Sāi Rāmā" },

  { id: "890", content: "Karunā Sindhu Dasharatha Nandana\n Parthipurishwara Rām\n Prema Swarupa Prashānti Niketana\n Māruti Sevita Rām\n Ahalyoddhāraka Rājiva Lochana\n Raghukula Bhooshana Rām" },

  { id: "891", content: "Kaushalyā Nandana Rām\n Paramānanda Ānanda Rām\n Ānanda Ānanda Rām\n Paramānanda Ānanda Rām\n Jaya Shirdisha Parthisha Rām\n Jaya Prashānti Sāisha Rām\n * Jaya Mangala Pāvana Rām\n Jaya Sundara Vaidehi Rām\n Jaya Sundara Sāisha Rām" },

  { id: "892", content: "Kaushalyā Nandana Vaidehi Mohana\n Rājiva Lochana Rāmā\n Yuga Avatāra Parameshwara Rāmā\n Asura Nikantana Kodanda Rāmā\n Bharatāshrita Shri Rāmā Parthipurishwara Rāmā" },

  { id: "893", content: "Kaushalyā Rāmā Kārunya Dhāmā\n Rāvana Mardana Rāmā Shri Rāmā\n * Ahalyoddhāraka Rāmā Shri Rāmā\n Māruti Sevita Rāmā Shri Rāmā\n Sāi Rām Jai Rām Jai Jai Rām (x3)" },

  { id: "894", content: "Kaushalyātmaja Rām Charan\n Vaidehi Priya Rām Charan\n Māruti Sevita Rām Charan\n Bharatārchita Rām Charan\n Ahalyoddhāraka Rām Charan\n Prashānti Niketana Rām Charan\n Rām Charan Sadā Bhajo" },

  { id: "895", content: "Maithilipaté Raghunandanā\n Rāmā Rāghavā Rājiva Lochanā\n * Deenāvanā Hey Karunāmayā\n Kamalā Nayanā Kaushalyā Tanayā" },

  { id: "896", content: "Mohana Raghurāmā\n Ati Sundara Shri Rāmā\n Māruti Sevita Rāmā\n Shri Rāma Rāma Jaya Rāmā (x2)\n Shri Rāma Rāma Sāi Rāmā" },

  { id: "897", content: "Om Shri Rām Jai Rām Jai Jai Rām – 4\n Seetā Rām (3)\n Rādhéshyām (3)" },

  { id: "898", content: "Patita Pāvana Rām\n Parthipurishwara Rām\n Pāvana Nāmā Tāraka Nāmā\n Pāpa Vimochana Rām\n Dānava Bhanjana Rām\n Dasharatha Nandana Rām\n Pāvana Nāmā Tāraka Nāmā\n Pāpa Vimochana Rām" },

  { id: "899", content: "Prashānti Nilaya Rām Hey Parthipuri Bhagavān\n Ahalyoddhāraka Rām Hey Dāsharaté Raghurām\n Shri Rām Jaya Rām\n Shri Rām Rām Rām Jaya Rām\n Sāi Rām Rām Rām Sāi Rām" },

  { id: "900", content: "Prema Se Bolo Ek Bār Sāi Rām (x2)\n Sāi Rām Sāi Rām\n Bolo Rām Sāi Rām\n * Madhura Manohara Rām\n Mohana Moorata Rām\n Hey Karunā Sindhu Rām\n Hey Raghupati Rāghava Rām\n Patita Pāvana Seetārām\n Haré Rām Haré Rām\n Bolo Rām Sāi Rām" },

  { id: "901", content: "Punya Nām Pavitra Nām Rām Nām Sāi Rām\n Haré Krishna Haré Rām Madhura Nām Sāi Rām\n Karunā Sindhu Seetārām\n Deena Bandhu Rādhéshyām\n Haré Krishna Haré Rām Madhura Nām Sāi Rām" },

  { id: "902", content: "Rāghava Sundara Rāmā Raghuvarā\n Parama Pāvanā Hey Jaga Vandana\n * Patitoddhārana Bhakta Pārāyana\n Rāvana Mardana Vigna Bhanjana\n Parthipurishwara Sāi Nārāyana" },

  { id: "903", content: "Raghukula Bhooshana Rājiva Nayanā\n Eeshwarāmbā Nandana Sathya Sāi Rāmā\n Jānaki Vallabha Pāvana Nāmā\n Nirupama Sundara Sugunābhi Rāmā\n Prashānti Nilaya Pāvana Nāmā\n Jaya Jaya Rāmā Prabhu Sāi Rāmā" },

  { id: "904", content: "Raghunandana Rāghava Rām Haré\n Hey Jānaki Jeevana Rām Haré\n Hey Rājiva Lochana Rām Haré\n Raghunandana Rāghava Rām Haré\n Shri Rām Haré Sāi Rām Haré (x5)\n Hey Rājiva Lochana Rām Haré" },

  { id: "905", content: "Raghupaté Rāghavā Rājā Rāmā\n O Rājā Rāmā\n O Seetā Rāmā\n * Dasharatha Nandana Rājā Rāmā\n Kaushalyātmaja Sundara Rāmā\n Rām Rām Jaya Rājārāmā\n Rāghava Mohana Meghashyāmā\n Jai Jai Rām (2)\n Jai Jai Rām (3) Rām Rājā Rām\n Patita Pāvana Seetāpaté Rāmā" },

  { id: "906", content: "Raghupaté Shri Rāmachandrā\n Rāghavā Dayānidhé (x2)\n Mādhavā Shri Rādhikeshā\n Govindā Haré Krishnā (x2)\n Pashupaté Shri Pārvatishā\n Shankarā Sadāshivā (x2)\n Shirdipaté Puttaparthipurishā\n Sāi Nātha Haré Haré (x2)" },

  { id: "907", content: "Raghupati Rāghava Rājā Rām\n Patita Pāvana Seetā Rām\n Raghupati Rāghava Rājā Rām\n Patita Pāvana Seetā Rām\n Rām Rām Jaya Rājā Rām\n Rām Rām Jaya Sāi Rām\n Rām Rām Jaya Rājā Rām, Rām Rām\n Jaya Seetā Rām, Rām Rām Jaya\n Sāi Rām Bolo Rām Rām Jaya Sāi Rām" },

  { id: "908", content: "Raghupati Rām Jaya Jaya Rām\n Dasharatha Nandana Shri Raghurām\n * Seetā Mohana Jānaki Rām\n Pāvana Nāma Mangala Dhāma\n Jaya Jaga Vandana Prashānti Rām" },

  { id: "909", content: "Raghuveera Rām Haré\n Rām Rām Jaya Rām\n * Raghupati Rāghava Rām Rām Rām Jaya Rām\n Rājiva Lochana Rām Rām Rām Jaya Rām" },

  { id: "910", content: "Raghuveera Ranadheera Rām Rām Rām\n Rakumāyi Vitthalā Shyām Shyām Shyām\n Sukumāra Sundara Rām Rām Rām\n Shirdisha Parthisha Shyām Shyām Shyām" },

  { id: "911", content: "Rām Charana Sukhadāyi Bhajoré (x2)\n Rām Nām Ké Do Akshara Mé\n Sab Sukha Shānti Samāyi Ré\n Sāi Nātha Ké Charanon Mé Ākar\n Jeevan Saphal Banāo Ré – Tum" },

  { id: "912", content: "Rām Haré Seetā Rām\n Shyām Haré Rādhéshyām\n Seetā Vallabha Sundara Rām\n Murali Manohara Rādhéshyāmā\n Parthipurishwara Rām" },

  { id: "913", content: "Rām Nām Tārakam Sadā Bhajoré\n Sadā Bhajoré Sadā Japoré\n * Rām (3) Jaya Kodanda Rāmā\n Rām (3) Jaya Kalyāna Rāmā\n Rām (3) Jaya Patthābhi Rāmā" },

  { id: "914", content: "Rām Raghuvara Rām Seetā Rām Rām Rām\n Rām (3) Sāi Rām Rām Rām\n * Hey Patita Pāvana Rām\n Hey Shyāmala Komala Rām\n Hey Vaidehi Priya Rām\n Sāi Rām Rām Jaya Rām\n Rām (3) Sāi Rām Rām Rām" },

  { id: "915", content: "Rām Rām Bhajo Mana Haré Haré (x3)\n Raghupati Rājā Rām Rām\n Patita Pāvana Seetārām\n Haré Rām Haré Rām Haré Haré\n Haré Rām Sāi Rāmā Haré Haré" },

  { id: "916", content: "Rām Rām Jaya Raghukula Tilakā\n Rājiva Lochana Rām\n Eeshwarāmba Suta Jaya Jaga Vandana\n Ratnākara Kula Deepā (x3)" },

  { id: "917", content: "Rām (3) Jaya Kodanda Rāmā\n Rām (3) Jaya Kalyāna Rāmā\n Rām (3) Jaya Vaidehi Rāmā\n Rām (3) Jaya Patthābhi Rāmā\n Rām (3) Jaya Ātmābhi Rāmā\n Rām (3) Jaya Shri Sāi Rāmā" },

  { id: "918", content: "Rām (3) Parama Sumangala Rām Rām Rām\n Janani Jānaki Jeevana Rām\n Jai Jai Rāmā Sāi Rāmā Jayatu Jayatu Rāmā\n Parama Sumangala Rām Rām Rām" },

  { id: "919", content: "Rām Rām Sāi Rām\n Parthipurishā Sāi Rām\n * Madhura Manohara Sundara Rām\n Shyāmala Komala Nayanabhi Rām\n Ravikula Mandala Rājana Rām\n Parama Pāvanā Mangala Rām" },

  { id: "920", content: "Rām Sāi (3) Rām (x2)\n Kaushalyā Nandana Dasharatha Rām\n Jānaki Vallabha Jai Jai Rām\n Lakshman Sevita Lāvanya Rām\n Rāvana Mardana Ranadheera Rām\n Ayodhyā Vāsi Rājā Rām\n Anjana Priya Suta Ātmābhi Rām" },

  { id: "921", content: "Rām Sumira Mana Rām Sumira Mana\n Rām Sumira Mana Rām\n Jānaki Vallabha Dasharatha Nandana\n Rāmchandra Shri Rām (x3)\n Bhaja Mana Seetārām Rām Rām\n Bhaja Mana Seetārām\n Bhaja Mana Rādhéshyām Shyām\n Bhaja Mana Rādhéshyām\n Bhaja Mana Sāi Rām Rām\n Bhaja Mana Sāi Rām" },

  { id: "922", content: "Rāmā Rāghavā - Sāi\n Raghunandana Ravikula Somā\n * Rāvana Mardana Rāmābhi Rāmā\n Rameti Rāmā Raghurāmā\n Rameti Rāmā Sāi Rāmā" },

  { id: "923", content: "Rāmā Raghurāmā Rām Tum Ho Ātmā Rāmā\n Andar Rāmā Bāhar Rāmā\n Ghata Ghata Vāsi Rāmā\n Rāmā Raghurāmā Rām Tum Ho Ātmā Rāmā\n Ātmā Rāmā Ānanda Rāmā\n Jaya (4) Rāmā" },

  { id: "924", content: "Rāmam Bhajo Raghurāmam Bhajo\n Raghukula Tilakā Rāmam Bhajo\n * Dasharatha Nandana Rāmam Bhajo\n Dashamukha Mardana Rāmam Bhajo" },

  { id: "925", content: "Rāmā Shri Rāmachandra Jaya Jaya Rāmā\n Karunābhi Rāmā Kamaneeya Rāmā\n * Kodanda Rāmā Kalyāna Rāmā\n Sharanāgata Paripālana Shri Charanā Rāmā\n Rāmā Shri Rāmā Sāi Rāmā\n Samara Vijaya Rāmā Sāketa Rāmā" },

  { id: "926", content: "Rāmachandra Shri Rām\n Sāi Rāmā Jaya Rāmā\n * Dasharatha Nandana Dayābhi Rāmā\n Dashamukha Mardana Rāmā Rāmā\n Tāpasa Ranjana Tāraka Nāmā\n Ahalyoddhāraka Rāmā Rāmā" },

  { id: "927", content: "Rāmachandra Raghuveerā\n Rāmachandra Ranadheerā\n Rāmachandra Raghunāthā\n Rāmachandra Jagannāthā\n Rāmachandra Mama Bandho\n Rāmachandra Dayā Sindho\n Raghuveerā Ranadheerā\n Raghurāmā Parandhāmā (x2)\n Mama Bandho Dayā Sindho\n Raghuveerā Ranadheerā\n Raghunāthā Jagannāthā\n Mama Bandho Dayā Sindho" },

  { id: "928", content: "Sāi Rāma Haré Sāi Krishna Haré (x2)\n Raghupati Rāghava Rāma Haré\n Rājiva Lochana Rāma Haré\n Sāi Rāma Haré Sāi Krishna Haré\n Parthipurishwara Sāi Haré" },

  { id: "929", content: "Sāi Rāmā Hey Ghanashyāmā\n Parama Dayāgana Ātmārāmā\n * Shānta Saguna Hari Hara Paramātmā\n Bhakta Samrakshaka Dayābhi Rāmā\n Patita Pāvana Sathya Sāi Rāmā\n Charanam Sharanam Hey Sāi Rāmā" },

  { id: "930", content: "Sāi Rāmā Hey Parandhāmā\n Parama Niranjana Rām Parthipurishwara Rām\n Veda Vibhooshita Vibhuti Sundara\n Rupa Manohara Rām Bhuvanoddhāraka Rām\n Shri Rām Jai Rām Jai Jai Rām\n Jānaki Jeevana Seetā Rām\n Shri Rām Shri Rām Shri Rām" },

  { id: "931", content: "Seetā Rāmā Shri Raghu Rāmā\n Dāsharaté Hey Jaya Rāmā\n Ātmā Rāmā Aganita Guna Nāmā\n Pāvana Nāmā Parandhāmā" },

  { id: "932", content: "Seetā Vallabha Sundara Rāmā\n Shri Rām Jaya Rām Sathya Sāi Rāmā\n Dāsharathé Rāmā Jaya Jaya Rāmā\n Raghukula Bhushana Rājā Rāmā\n Dāsharathé Rāmā Jaya Jaya Rāmā" },

  { id: "933", content: "Shri Hari Nanda Mukunda Haré\n Dasharatha Nandana Rām Haré\n Geetā Prabodhana Shri Vatsalārchana\n Asura Nikhandana Rāvana Mardana\n Alaka Niranjana Rām Haré\n Rām Haré Seetā Rām Haré\n Raghupati Rāghava Rām Haré\n Dasharatha Nandana Rām Haré" },

  { id: "934", content: "Shri Raghunandana Dasharatha Nandana\n Asura Nikantana Sāi\n Hey Yadu Nandana Devaki Nandana\n Bhava Bhaya Bhanjana Sāi\n Shri Raghunandana Dasharatha Nandana\n Bhadrādishwara Rāmā\n Vaidehi Priya Vaikunta Rāmā\n Sadā Smarāmi Rāmeti Rāmā" },

  { id: "935", content: "Shri Raghunandana Dasharatha Nandana\n Bhadrādishwara Rāmā\n Vaidehi Priya Vaikunta Vāsā\n Sadā Smarāmi Rāmeti Rāmā" },

  { id: "936", content: "Shri Raghunandana Dasharatha Rāmā\n Raghukula Bhooshana Lāvanya Rāmā\n Hanumanta Sevita Māruti Rāmā\n Seetā Nāyaka Seetā Rāmā\n Ayodhyā Vāsi Rājā Rāmā\n Prashānti Priya Sathya Sāi Rāmā" },

  { id: "937", content: "Shri Raghunandana Jānaki Jeevana\n Rām (3) Sāi\n Alaka Niranjana Asura Nikantana\n Rājiva Lochana Bhava Bhaya Bhanjana\n Rām (3) Sāi" },

  { id: "938", content: "Shri Raghunandana Seetā Rāmā\n Rājiva Lochana Rājā Rāmā\n Rājā Rāmā\n Sāi Rāmā\n Bhava Bhaya Bhanjana Tāraka Nāmā\n Ātmā Rāmā Sāi Rāmā\n Kalimala Bhanjana Kodanda Rāmā" },

  { id: "939", content: "Shri Raghunandana Seetāpaté Shri Rām\n Jānaki Jeevana Rāghava Mohana\n Dasharatha Nandana Rām\n Dashamukha Mardana Rājiva Lochana\n Māruti Sevita Rām\n Jai Jai Rām Seetā Rām Jai Jai Rām (x4)" },

  { id: "940", content: "Shri Raghurāmā Seetā Rāmā\n Pāvana Nāmā Shri Rāmā\n Jaya Raghurāmā Jānaki Rāmā\n Antar Guna Dhāmā Shri Rāmā\n Seetā Rāmā Sundara Rāmā\n Dasharatha Nandana Rāmā\n Dāsharathé Jaya Rāmā\n Dashamukha Mardana Rāmā\n Dayā Sāgara Rāmā - Hey" },

  { id: "941", content: "Shri Rām Charanam (3) Bhajé\n Vaidehi Rāmā Vaikunta Rāmā\n Gopāla Choodāmani\n Ātmābhi Rāmā Prabhu Sāi Rāmā\n Shri Rāma Charanam Bhajé (x3)" },

  { id: "942", content: "Shri Rām Jai Rām Jaya Jaya Rām – 4" },

  { id: "943", content: "Shri Rām Jaya Rām Jaya Jaya Rām\n Jānaki Jeevana Rām\n Patita Pāvanā Rām Haré Jaya\n Rāghava Sundara Rām\n Deenoddharanā Rām Haré Jaya\n Māruti Sevita Rām\n Jaya Jaya Rām Jaya Raghurām\n Jānaki Jeevana Rām" },

  { id: "944", content: "Shri Rām Jaya Rām Shri Rām Rām Jaya Rām\n Shri Rām Rām Jaya Rām\n Dasharatha Nandana Rām Jānaki Jeevana Rām\n Patita Pāvana Rām Rām Rām\n Shri Rām Rām Jaya Rām\n Ahalyoddhāraka Rām Sabari Poojita Rām\n Hanumān Ké Romm Romm Mé\n Sadā Basata Shri Rām Rām Rām\n Shri Rām Rām Jaya Rām" },

  { id: "945", content: "Shri Rām Parātpara Rām\n Hey Rājiva Lochana Rām\n Hey Ananta Shayana Rām\n Hey Ātma Swarupa Rām\n Shri Rām Jaya Rām Sāi Rām\n Hey Dasharatha Nandana Rām\n Hey Dashamukha Mardana Rām\n Hey Dānava Bhanjana Rām\n Hey Dayā Sāgarā Rām\n Shri Rām Jaya Rām Sāi Rām" },

  { id: "946", content: "Shri Rām Raghuvara Rām\n Jaya Seetā Rām Rām\n Hey Ayodhyā Vāsi Rām\n Hey Parthipurishwara Rām\n Shri Rām (4)\n Hey Pāpa Vināshaka Rām\n Hey Patita Pāvana Rām\n Hey Deenajanāvana Rām\n Hey Parthipurishwara Rām\n Shri Rām (4)" },

  { id: "947", content: "Shri Rām Rām Rām\n Yadunandana Hey Ghanashyām\n Shri Rām Jaya Rām Jaya Jaya Rām (x2)\n Shri Rām Jaya Rām Jaya Sāi Rām\n Raghupati Rāghava Rājā Rām\n Patita Pāvana Seetā Rām\n Shri Rām Jaya Rām Jaya Jaya Rām (x2)\n Shri Rām Jaya Rām Jaya Sāi Rām" },

  { id: "948", content: "Shri Rām Rām Rāmā Raghuveerā Rām Rām\n Shri Rām Rām Rāmā Bharatāshrita Rām Rām\n Shri Rām Rām Rāmā Ranadheerā Rām Rām\n Shri Rām Rām Rāmā Sharanam Tava Rām Rām" },

  { id: "949", content: "Shri Rām Shri Raghurāmā\n Shri Rām Seetā Rāmā\n * Shri Rāma Meghashyāmā\n Shri Rāma Sāi Rāmā" },

  { id: "951", content: "Shri Rāmachandra Jaya Jagannāthā\n Seetāpaté Jaya Raghunāthā\n * Patita Pāvana Deena Nāthā\n Parthipurishā Shri Sāi Nāthā" },

  { id: "952", content: "Shri Rāmachandrā Jaya Rāmachandrā\n Raghuveera Ranadheera Raghukula Rāmā\n * Dasharatha Nandana Dayābhi Rāmā\n Dānava Bhanjana Kodanda Rāmā\n Kalyāna Rāmā Kamaneeya Rāmā\n Raghuveera Ranadheera Raghukula Rāmā" },

  { id: "950", content: "Shri Sāi Rāmā Haré (2)\n Shri Rāmachandrā Prabhu Rāmachandrā\n Sāi Rāmachandra Haré\n Shri Rāmachandra Haré (x2)" },

  { id: "953", content: "Sundara Rām Nayanabhi Rām\n Deena Bandhu Sāi Rām\n Jai Jai Rām (2) Sāi Rām\n Dānava Bhanjana Dayāmayā\n Dayāmayā Kripāmayā\n Alaka Niranjana Asura Nikantana\n Deena Bandhu Sāi Rām\n Jai Jai Rām (2) Sāi Rām" },

  { id: "954", content: "Vaidehi Nāyaka Rām Vishwa Vidāyaka Rām\n Vibhishana Vandita Jaya Jaya Rām\n Rām Rām Jaya Sāi Rām\n Vibhuti Sundara Jaya Sāi Rām\n Rām Rām Jaya Rām\n Vishwa Vidāyaka Rām" },

  { id: "955", content: "Yuga Avatārā Sāi Rāmā\n Rām Rām Rām\n Rām (3) Seetāpaté Shri Rām (x2)\n * Parama Niranjana Prashānti Rāmā\n Shri Raghurāmā Sāi Rāmā\n Rām Rām Rām" },

  { id: "1000", content: "Āmar Krishna Gopāl Ré Āmar\n Shyāma Gopāl Ré\n Krishna Gopāl Shyām Gopāl Brahma Gopāl Ré\n Krishna Gopāl Shyām Gopāl\n Brahma Gopāl Ātmā Gopāl\n Krishna Gopāl (4)" },

  { id: "1001", content: "Ānanda Rām Ānanda Shyām\n Nārāyanā Sāi Nārāyanā\n Nārāyanā Sāi Nārāyanā\n Prema Swarupā Brahmānandā\n Satchidānanda Hari Nārāyanā\n Nārāyanā Hari Nārāyanā (x2)\n Nārāyanā Sāi Nārāyanā" },

  { id: "1002", content: "Antaryāmi Sāi\n Poorna Brahma Avatāri\n Hey Giridhāri Hridaya Vihāri\n Krishnā Kunja Vihāri\n Gopālā Leelādhāri\n Hey Gopi Mana Sanchāri\n Madhusudanā Murāri\n Hey Giridhāri Hridaya Vihāri\n Krishnā Kunja Vihāri" },

  { id: "1003", content: "Āo (2) Nandalālā\n Sundara Shyāma Gopālā\n * Tum Hi Ho Bansidhāri Shyāmā\n Ayodhyā Pati Seetā Rāmā\n Parthi Bābā Karunā Nidhān\n Mākhan Chorā Yashoda Bālā" },

  { id: "1004", content: "Āo Gopālā Giridhāri\n Āo Āo Antaryāmi\n Āo Āo Ānanda Sāi\n * Āo Āo Ātma Nivāsi\n Āo Āo Shānti Nivāsi" },

  { id: "1005", content: "Ātmā Rāmā Ānanda Ramanā\n Achyuta Keshava Hari Nārāyana\n * Bhava Bhaya Haranā Vandita Charanā\n Raghukula Bhooshana Rājiva Nayanā\n Ādi Nārāyana Ananta Shayanā\n Satchidānandā Sāi Nārāyana" },

  { id: "1006", content: "Bansidharā Kanhaiyā Ghanashyāma Sundarā\n Giridhāri Gopa Bālā Brindāvana Vihārā\n * Govinda Mādhavā Haré\n Madhusudana Mukundā\n Rādhé Govinda Rādhé Gopāl\n Rādhé Govinda Rādhé" },

  { id: "1007", content: "Barā Chittachorā Brindāvana Sanchārā\n Gopālā Gopālā Hey Murali Gopālā\n Govardhanodhāra Gopāl Bālā\n Gopi Manohara Rādhé Gopālā" },

  { id: "1008", content: "Barā Chittachora Mana Mohana\n Meerā Chittachora Mana Mohana\n Ayodhyā Ké Seetārām\n Brindāvana Ké Rādhéshyāma\n Shirdi Ké Sāi Bābā\n Parthi Ké Sathya Bābā" },

  { id: "1009", content: "Bāla Sāi Parthi Sāi Nandana Kishorā\n Devaki Priya Gopāla Barā Chittachorā\n Barā Chittachorā\n Navanita Chorā\n Devaki Priya Gopāla Barā Chittachorā" },

  { id: "1010", content: "Bhagavān Krishna Namo (2)\n Patita Pāvana Patita Pālana\n Rāmachandra Namo – Seetā\n * Kālāteetāya Shirdi Rupāya Sathya Sāi Namo\n Antaryāmi Namo Sarvāntaryāmi Namo" },

  { id: "1011", content: "Bhaja Gopālā Bhaja Gopālā\n Pyāré Murāri Meré Sāi Nandalālā\n Nandalālā (3) Hey Nandalālā\n Bāla Gopālā Sāi Gopālā\n Murali Manohara Sāi Nandalālā\n Nandalālā (3) Hey Nandalālā" },

  { id: "1012", content: "Bhaja Mana Rādhé Govindā\n Bhaja Mana, Rādhé (5) Govindā\n Bhaja Mana, Rādhé (9) Govindā\n Bhaja Mana Sāi Govindā\n Bhaja Mana, Sāi (5) Govindā\n Bhaja Mana, Sāi (9) Govindā" },

  { id: "1013", content: "Bhaja Mana Rādhé Shyāma Gopālā\n Murali Manohara Rādhe Gopālā\n * Nanda Kishorā Natavara Lālā\n Parthi Vihārā Sāi Gopālā" },

  { id: "1014", content: "Bhaja Mana Shyāma Sundara Giridhāri\n Mora Mukuta Peetāmbaradhāri\n * Meerā Ké Prabhu Giridhara Nāgara\n Giridhara Nāgara Giridhara Nāgara\n Murali Manohara Shyāma Murāri" },

  { id: "1015", content: "Bhajan Karo Manwā Govinda Haré\n Govinda Murāri Gopāla Murāri\n * Mathurā Nāthā Hey Giridhāri\n Rādhā Mādhava Hey Giridhāri (2)" },

  { id: "1016", content: "Bhajo Ghanashyāma Bhajo Murali Gopāla Bhajo\n Nanda Ké Lāl Bhajo Rādhé\n Giridhara Gopāl Mathurā Nāthā\n Kamala Nayana Hey Kaivalya Dhāmā\n Nanda Ké Lāl Bhajo Rādhé" },

  { id: "1017", content: "Bhajo Rādhé Govinda Bhajo Shyām Gopāla\n Shyāma Gopāla Bhajo Murali Gopāla\n * Keshava Narahari Shyāma Gopāla\n Mādhava Murahara Murali Gopāla" },

  { id: "1018", content: "Bhajoré Bhajo Sāi Haré Rām\n Govinda Gopāla Sāi Haré Rām\n Mādhava Mohana Sāi Haré Rām\n * Shri Madhusudana Bhava Bhaya Bhanjana\n Hari Prema Ānanda Se Bolo Rām Haré Rām\n Govinda Gopāla Sāi Haré Rām\n Mādhava Mohana Sāi Haré Rām" },

  { id: "1019", content: "Bhajoré Sadā Bhajo Rām Krishna Govindā\n Bhajo Haré Deena Bandhu\n Krishna Rāmā Govindā\n Bhajoré Anātha Nāthā Sāi Rāmā Govindā\n Bhajo Haré Deena Bandhu\n Krishna Rāmā Govindā" },

  { id: "1020", content: "Bhava Bhaya Haranā Vandita Charanā\n Jaya Rādhā Jaya Mādhavā Shauri\n Mangala Charanā Kalimala Dahanā\n Nārāyanā Keshavā\n Jaya Rādhā Jaya Mādhavā Shauri" },

  { id: "1021", content: "Chandra Vadanā Kamala Nayanā\n Nārāyanā Sāi Nārāyanā\n Ananta Shayanā Deena Sharanyā\n Nārāyanā Sāi Nārāyanā" },

  { id: "1022", content: "Chittachora Muraliwālā\n Nandalāl Nanda Gopālā\n Nandalālā Nandalālā\n Brindāvana Shyāma Gopālā\n Yadunandana Gokula Bālā\n Mana Mohana Madana Gopālā\n Nandalālā Nandalālā\n Nandalāl Nanda Gopālā\n Nandalālā Nandalālā" },

  { id: "1023", content: "Chittachorā Yashodā Ké Bāla\n Navanita Chora Gopāl\n Gopāl Gopāl Gopāl, Govardhana Dhara Gopāl\n Gopāl Gopāl Gopāl Gopāl,\n Govardhana Dhara Gopāl" },

  { id: "1024", content: "Darsha Dikhāo Meré Sāi Nandalālā\n Dayā Karo Mujhé Krishna Gopālā\n * Devaki Nandana Deena Dayālā\n Mathurā Nāthā Madana Gopālā\n Sāi Nārāyana Sadā Kripālā\n Dayā Karo Mujhé Krishna Gopālā" },

  { id: "1025", content: "Dayā Karo Hari Nārāyanā\n Karunā Sāgara Nārāyanā\n Pankaja Nayanā Pannaga Shayanā\n Shri Vāsudevā Nārāyanā\n Pāpa Vināshā Prashānti Vāsā\n Parthipuri Sāi Nārāyanā\n Paramānanda Nārāyanā" },

  { id: "1026", content: "Deena Dayālā Sāi Parama Dayālā\n Rādhā Ramana Hari Govinda Gopālā\n Madhura Manohara Krishna Gopālā\n Rādhā Ramana Hari Govinda Gopālā\n Meerā Ké Prabhu Giridhara Bālā\n Brindāvana Ghana Madana Gopālā" },

  { id: "1027", content: "Devaki Tanayā Dayānidhé (x2)\n Dayānidhé Kripānidhé (x2)\n * Darshana Dedo Deva Devā (x2)\n Deena Nāthā Sāi Nāthā" },

  { id: "1028", content: "Garuda Vāhana Nārāyanā\n Hey Shesha Shayanā Nārāyanā\n * Shri Lakshmi Ramanā Nārāyanā\n Hari Om (2) Nārāyanā" },

  { id: "1029", content: "Ghana Ghana Neela Vadana Ati Sundara\n Meghashyāmala Mādhava Murahara\n * Mandasmita Mukha Rādhā Manohara\n Govinda Gopāla Natavara Giridhara\n Meghashyāmala Mādhava Murahara" },

  { id: "1030", content: "Ghanashyāmā Gopālā Ghanashyāmā Gopālā\n Mana Mohanā Jagan Mohanā\n Yadu Nandanā Gopāl\n Gopāla Gopāla Shyāma Gopāla\n Gopāla Gopāla Sāi Gopāla" },

  { id: "1031", content: "Ghanashyāmā Sundarā\n Bansidhara Prabhu Krishna Kanhaiyā\n Tu Hi Meré Mā Bāp Bhaiyā\n Devaki Tanayā Hey Nandalālā\n Deena Bāndhavā Dwāraka Nāthā\n Rādhā Hridaya Nivāsā Haré Krishnā\n Madhusudanā Muralidharā\n Parthishwarā Sathya Sāishwarā" },

  { id: "1032", content: "Giridhara Bālā Hey Nandalālā\n Devaki Nandana Shyāma Gopālā\n * Keshava Mādhava Shyāma Gopālā\n Shyāma Gopālā Shyāma Gopālā\n Bansidhara Hey Sāi Gopālā (x2)" },

  { id: "1033", content: "Giridhara Gopālā Gopālā\n Sāi Gopālā (2)\n * Shirdipurishwara Sāi Shankara\n Parthipurishwara Sāi Shankara\n Sāi Shankara (2)" },

  { id: "1034", content: "Giridhara Gopālā Hey (2) Giridhara Gopālā\n Meerā Ké Prabhu Giridhara Nāgara\n Suradāsa Ké Shyāma Manohara\n Bhakton Ké Sathya Sāi Manohara" },

  { id: "1035", content: "Giridhara Gopāla Muralidharā Haré\n Govinda Gopāla Dāmodarā\n Giridhara Gopāla Muralidharā Haré\n Govinda Gopāla Dāmodarā" },

  { id: "1036", content: "Giridhara Gopālā Sāi Giridhara Gopālā\n Parthipurishwara Shyām Gopālā\n * Meerā Ké Prabhu Giridhara Nāgara\n Pāhimām Ghanashyāma O Shyāmā (x2)" },

  { id: "1037", content: "Giridhara Govinda Gopāla\n Ghanashyāma Nandalālā\n Mana Mohanā Madhusudanā Hey Mādhavā\n * Dāmodarā Janārdanā\n Muralidharā Mana Mohanā\n Namo Sāi Nārāyanāya Namo Satya Nārāyanāya\n Namo Satya Nārāyanāya (Sāi)" },

  { id: "1038", content: "Giridhara Meré Gopālā\n Rādhé Gopālā Rādhé Gopālā\n * Nanda Kishorā Mākhana Chorā\n Yashoda Bālā Gopālā\n Rādhé Gopālā Rādhé Gopālā" },

  { id: "1039", content: "Giridhara Meré Shyāma Gopāla\n Shyāma Gopāl Sāi Gopāl\n * Govinda Govinda Gopi Gopāl\n Govardhanoddhāri Gokula Gopāl\n Shyāma Gopāl Sāi Gopāl\n * Mukunda Murahara Mohana Gopāl\n Murali Manohara Mādhava Gopāl\n Shyāma Gopāl Sāi Gopāl" },

  { id: "1040", content: "Giridhāri Hey Nandalālā\n Yashodā Ké Bālā Tribhuvana Pālā\n Jagadoddhārā Gokula Bālā\n Murali Lolā Munijana Pālā\n Parthi Vihārā Sāi Gopālā" },

  { id: "1041", content: "Giridhāri Lāl Shyām Gopāl\n Natavara Lāl Madana Gopāl\n Mathurā Nātha Krishna Gopāl\n Shri Madhusudana Sāi Gopāl\n Yashodā Ke Bāl Nanda Gopāl\n Eeshwarāmba Priya Sāi Gopāl" },

  { id: "1042", content: "Gokula Nandana Gopāla Krishnā\n Govardhana Dhara Gopi Krishnā\n * Kamala Nayana Kamaneeya Krishnā\n Karunāmaya Shri Sathya Sāi Krishnā" },

  { id: "1043", content: "Gopāl Rādhé Krishna Govinda Govinda Gopāl\n Gopāl Gopāl Gopāl\n Govinda Govinda Gopāl Rādhé Krishnā\n Govinda (2) Gopāl Sāi Krishnā\n Govinda Govinda Gopāl – Sāi" },

  { id: "1044", content: "Gopālā Gopālā\n Giridhara Bālā Gopālā\n Gopālā Gopālā\n Goparipālā Gopālā" },

  { id: "1045", content: "Gopālā Giridhara Bālā\n Gopi Lolā Gokula Bālā\n Goparipālā Nārāyanā (x2)\n Nārāyanā Nārāyanā\n Goparipālā Nārāyanā\n Govinda Govinda Nārāyanā" },

  { id: "1046", content: "Gopālā Rādhā Lolā\n Murali Lolā Nandalālā\n * Keshava Mādhava Janārdanā\n Vanamālā Brindāvana Bālā\n Murali Lolā Nandalālā" },

  { id: "1047", content: "Gopi Vallabha Shyāma Gopālā\n Shridharā Mādhavā Dāmodarā\n * Nanda Kishorā Navanita Chorā\n Smita Smita Sundara Sāi Gopālā\n Gokula Bālā Goparipālā\n Parthipurishwara Sāi Nandalālā" },

  { id: "1048", content: "Govindā Gopālā Nārāyana Hari\n Nārāyana Hari Nārāyana Hari (x2)\n * Jagadoddhārā Nārāyana Hari\n Bhakta Uddhārā Nārāyana Hari\n Parthipurishā Nārāyana Hari\n Nārāyana Hari Nārāyana Hari (x2)" },

  { id: "1049", content: "Govindā Gopāla Prabhu Giridhāri\n Govindā Gopāla Hridaya Vihāri\n * Nanda Kishorā Navanita Chorā\n Parthi Vihārā Barā Chittachorā\n Hridaya Vihārā Barā Chittachorā" },

  { id: "1050", content: "Govindā (2) Bhaja Man Rādhé Govindā\n Rādhā Lolā Govindā Rāsa Vilolā Govindā\n * Krishna Keshavā Haré Mādhavā\n Govindā Jaya Govindā\n Haré Murāré Sāi Murāré Govindā Jaya Govindā" },

  { id: "1051", content: "Govinda Govinda Gāyiyé\n Bhajo Rādhé Gopāla Krishna Gāyiyé\n Murali Manohara Gāyiyé,\n Bhajo Nanda Ké Lāla Prabhu Gāyiyé\n Giridhāri Giridhāri Gāyiyé,\n Māyi Meerā Ké Nātha Prabhu Gāyiyé (x2)" },

  { id: "1052", content: "Govinda Govinda Govindā (x3)\n Venkata Ramanā Govindā\n Sankata Haranā Govindā\n Lakshmi Ramanā Govindā\n Bhaktoddharanā Govindā" },

  { id: "1053", content: "Govinda Govinda Govinda Bolo\n Shyām Sundara Venu Gopāl Bolo\n * Pārtha Sārathi Keshava Bolo\n Sanātana Sārathi Parthisha Bolo" },

  { id: "1054", content: "Govinda Haré Gopāla Haré\n Muralidhara Hey Ghanashyāma Haré\n * Meerā Ké Prabho Giridhara Nāgara – 4\n Charana Kamala Balihāri Ré" },

  { id: "1055", content: "Govinda Haré Gopāla Haré Hey Gopi Gopa Bālā\n Govinda Haré Gopāla Haré\n Hey Murali Gāna Lolā\n Govinda Haré Gopāla Haré\n Hey Rādhā Hridaya Lolā\n Govinda Haré Gopāla Haré\n Hey Nanda Gopa Bālā" },

  { id: "1056", content: "Govinda Jai Jai Gopāl Jai Jai\n Rādhā Rāmana Hari Govinda Jai Jai\n Mukunda Mādhava Govinda Bol\n Keshava Mādhava Hari Hari Bol\n Rām Rām Bol (2)\n Krishna Krishna Bol (2)\n Keshava Mādhava Hari Hari Bol" },

  { id: "1057", content: "Govindā Jaya Govindā\n Gokula Nandana Govindā\n Ghana Ghana Neelā Govindā\n Bāla Mukundā Govindā – (Sāi)\n Hey Ghanashyāmā Govindā\n Gokula Nandana Govindā" },

  { id: "1058", content: "Govinda Krishna Jai Gopāla Krishna Jai\n Gopāla Bāla Bāla Rādhā Krishna Jai\n Krishna Jai (3) Krishna (4) Jai\n Gopikā Man Vihāri Pyāri\n Māyi Meerā Man Vihāri\n Madana Mohana Murali Dhāri\n Krishna Jai\n Krishna Jai (Bāla) Krishna Jai (Rādhā)\n Krishna Jai, Krishna (4) Jai" },

  { id: "1059", content: "Govinda Krishna Jai Gopāla Krishna Jai\n Govinda Govinda Govindā Gopāla Jai\n Krishnā (2) Rādhā Krishnā\n Govinda Krishnā Gopāla Krishnā\n * Keshavā Mādhavā Sāi Nārāyanā,\n Govinda (2) Nārāyanā\n Nandalālā Brijabālā\n Hey Sāi Nārāyanā Krishnā Krishnā" },

  { id: "1060", content: "Govinda Krishnā Jai Jai Gopāla Krishnā (x2)\n Govinda Govinda Krishnā Gopāla Krishnā\n Govinda Krishnā Jai Jai Gopāla Krishnā\n Govinda Govinda Krishnā Gopāla Krishnā\n Gopāla Gopāla Krishnā Govinda Krishnā" },

  { id: "1061", content: "Govinda Mādhavā Gopālā Keshavā\n Jaya Nanda Mukundā Nanda Govindā\n Rādhé Gopālā\n * Giridhāri (2) Jaya Rādhé Gopālā\n Ghanashyāma Shyāma Shyāma\n Jaya Jaya Rādhé Gopālā\n Jaya Nanda Mukundā Nanda Govindā\n Radhé Gopālā" },

  { id: "1062", content: "Govinda Mādhavā Gopāla Keshavā (x3)\n * Krishnā Krishnā Sāi Krishnā (Parthi)\n Krishnā Krishnā Gopālā\n Gokula Bālā Goparipālā\n Manamohanā Madhusudanā\n Jaya Mādhavā Jaya Keshavā" },

  { id: "1063", content: "Govinda Murāri Mādhavā\n Govinda Gopāla Keshavā\n * Janārdanā Sāi Parthi Vihāri\n Govardhanodhāri Mādhavā\n Mādhavā Keshavā Hari Nārāyanā" },

  { id: "1064", content: "Govinda Nāma Bhajo Gopāl Nām Bhajo\n Rādheshyāma Nāma Bhajo\n Rāmachandra Nāma Bhajo\n * Seetārām Nāma Bhajo Shrinivāsa Nāma Bhajo\n Shirdi Sāi Nām Bhajo Sathya Sāi Nāma Bhajo" },

  { id: "1065", content: "Govinda Nārāyanā Gopāl Nārāyanā\n Govinda Govinda Nārāyanā\n Govinda Gopāla Nārāyanā\n Govinda Govinda Nārāyanā\n Sāi Govinda Gopāla Nārāyanā" },

  { id: "1066", content: "Govinda Rādhé Krishna Govinda Govindā\n Gopāl Rādhé Krishnā Govinda Govindā\n Mohana Bāla Krishnā Govinda Govindā\n Parthi Nivāsā Krishnā Govinda Govindā" },

  { id: "1067", content: "Govinda Rāmā Jai Jai Gopāla Rāmā\n Mādhava Rāmā Jai Jai Keshava Rāmā\n * Sulabha Rāmā Jaya Dulabha Rāmā\n Ek Tu Rāmā Jai Jai Aneka Tu Rāmā" },

  { id: "1068", content: "Govinda Sāi Krishna Govinda Govinda\n Gopāl Rādhé Krishna Govinda Govinda\n Mohana Bāla Krishna Govinda Govinda\n Parthi Nivāsā Krishna Govinda Govinda" },

  { id: "1069", content: "Guruvāyurapura Shri Hari Krishnā\n Nārāyana Gopāl\n Mukunda Mādhava Muralidhāri Nārāyana Gopāl\n Nārāyana Gopāl Sāi Nārāyana Gopāl – 3\n Govardhana Giridhāri Murāri Nārāyana Gopāl\n Mukunda Mādhava Muralidhāri Nārāyana Gopāl" },

  { id: "1070", content: "Haré Krishnā Haré Krishnā\n Krishnā Krishnā Haré Haré\n Haré Rāmā Haré Rāmā Rāma Rāmā Haré Haré\n Haré Krishnā Haré Krishnā\n Krishnā Krishnā Haré Haré\n Haré Rāmā Haré Rāmā Rāmā Rāmā Haré Haré" },

  { id: "1071", content: "Haré Krishna Haré Rām Sāi Rām Sāi Rām\n Gopāla Govinda Bolo Jai Sāi Rām\n Mādhava Mukunda Bolo Jai Sāi Rām\n Hey Parameshwara Parthipurishwara\n Dayā Karo Hey Sāi Rām\n Jai Jai Rām Sāi Rām Jai Jai Rām\n Jai Jai Rām Sāi Rām Jai Jai Rām Bolo\n Jai Jai Rām Sāi Rām Jai Jai Rām" },

  { id: "1072", content: "Haré Murali Manohara Shyāmā\n Haré Gopi Manohara Shyāmā\n * Haré Devaki Nandana Shyāmā\n Haré Vāsuki Shayana Shyāmā" },

  { id: "1073", content: "Hari Ānandamaya Jaya Nārāyanā\n Vasudeva Nandana Rādhā Jeevana\n Paramānandā Mādhavā (x2)" },

  { id: "1074", content: "Hari Bolo Haré Rām Nām\n Hari Bolo Haré Krishna Nām\n Hari Bolo Sathya Sāi Rām\n Hari Bolo Haré Rām Nām" },

  { id: "1075", content: "Hari (6) Bolo\n Hari Hari Ké Guna Gāo\n Govinda (3) Bolo\n Govinda Ké Guna Gāo\n Sāi Rāma Bolo Sāi Shyāma Bolo\n Sāi Rāma Guna Gāo\n Govinda (3) Bolo\n Govinda Ké Guna Gāo" },

  { id: "1076", content: "Hari Hari Nārāyanā\n Hari Govinda Nārāyanā\n Hari Gopāla Nārāyanā\n Shri Hari Nārāyanā\n Hrishikeshā Nārāyanā\n Parthishā Nārāyanā" },

  { id: "1077", content: "Hari Hari Om Shiva Shankara Hari Om\n Nārāyana Hari Om (x2)\n Keshava Hey Shiva Mādhava Hey\n Nārāyana Hari Om (x2)\n Paramātmā Antaryāmi\n Nārāyana Hari Om – Sāi (x3)" },

  { id: "1078", content: "Hari Nāma Gāté Chalo Sāi Nāma Gāté Chalo\n Mādhava Govinda Govinda\n Mādhava Nāma Gāté Chalo\n * Govinda Vitthalā Gopāla Vitthalā\n Jaya Parthi Vitthalā Jaya Sāi Vitthalā (x2)\n Mādhava Govinda Govinda\n Mādhava Nāma Gāté Chalo" },

  { id: "1079", content: "Hari Nārāyanā (3) Bhajoré\n Hari Nārāyanā Satya Nārāyanā\n Sāi Nārāyanā Bhajoré\n Shyāma Sundarā Madana Gopālā\n Satchidānandā Shyāma Gopāla\n Gopi Gopālanā (3) Bhajoré\n Hari Nārāyanā Satya Nārāyanā\n Sāi Nārāyanā Bhajoré" },

  { id: "1080", content: "Hari Nārāyana Govindā Sāi Nārāyana Govindā\n Murali Mādhava Govindā\n Govardhanadhara Govindā" },

  { id: "1081", content: "Hey Giridhāri Hey Nandalāl\n Yashoda Nandā Hey Nandalāl\n * Rādhā Pyāré Hey Nandalāl\n Nandalāl Nandalāl" },

  { id: "1082", content: "Hey Govinda Hey Ananta Nanda Gopālā\n Mohana Muralidharā Shyāma Gopālā\n * Sundara Giridhāri Hari Natavara Lālā\n Mādhavā Keshavā Madana Gopālā\n Keshavā Mādhavā Madana Gopālā" },

  { id: "1083", content: "Hey Kamala Vadana Sāi Rangā\n Kaivalya Pāndurangā (x2)\n Sāi Gopālā Ghana Ghana Neelā\n Kutila Kuntalā Tribhuvana Pālā\n Brahmā Vishnu Maheshwara Rupā (x2)\n Mayā Lolā Brahma Swarupā" },

  { id: "1084", content: "Hey Mādhavā Hey Madhusudanā\n Dāmodarā Hey Muralidharā\n * Mana Mohanā Hey Yadunandanā\n Deenāvanā Bhava Bhaya Bhanjanā" },

  { id: "1085", content: "Hey Mādhavā Hey Yadunandanā\n Mana Mohanā Hey Madhusudanā\n Janārdanā Rādhā Jeevanā\n Gopālanā Gopi Ranjanā" },

  { id: "1086", content: "Hey Murali Mādhavā Rādhé Krishna Jai Gopāl\n Keshava Mādhava Yādhava Nandana\n Rādhé Krishna Jai Gopāl\n Nanda Nandana Rādhéshyām\n Indu Vadana Meghashyām\n Keshava Mādhava …\n Pānduranga Rādhéshyām\n Pandari Nātha Rādhéshyām\n Keshava Mādhava …" },

  { id: "1087", content: "Hey Nanda Nanda Gopāla\n Ānanda Nanda Gopāla (x2)\n Hey Nanda Nanda Ānanda Nanda\n Yadunanda Nanda Gopāla" },

  { id: "1088", content: "Hey Nandalāl Gopālā\n Shyāma Gopāl Sāi Gopāl\n * Giridhara Gopālā Rādhé Gopālā\n Shyāma Gopāl Sāi Gopāl" },

  { id: "1089", content: "Hey Nandalālā Hey Brajabālā\n Mākhana Chorā Yashodā Ké Bālā\n Brindāvana Ké Gokula Bālā\n Daya Karo Hey Sāi Nandalālā\n Mākhana Chorā Yashodā Ké Bālā" },

  { id: "1090", content: "Hey Shesha Shayanā Nārāyanā\n Vedā Bharanā Nārāyanā\n Bhava Bhaya Haranā Nārāyanā\n Pāvana Charanā Nārāyanā\n Nārāyanā Hari Nārāyanā (x3)" },

  { id: "1091", content: "Hey Shyāma Sundarā Hey Sāi Sundarā\n Parthipurishwarā Hey Sāi Sundarā\n * Neela Megha Sundarā Neeraja Lochanā\n Brahmānda Nāyakā Hey Sāi Sundarā" },

  { id: "1092", content: "Hey Vrajabāla Yadunanda Gopāla\n Shyāma Sundara Mohana Gopāla\n * Yashodā Ké Bāla Yadunanda Gopāla\n Gopāla Gopāla Gokula Bāla" },

  { id: "1093", content: "Hridaya Vihāri Sāi Murāri\n Parthi Vihāri Jaya Sāi Rām\n Ananta Shayanā Ādi Nārāyana\n Brindāvana Ghanashyāma Murāri\n Govinda Gopāla Ghanashyāma Ramani" },

  { id: "1094", content: "Hridayāntaranga Sāi Nandanavana Vihāri\n Hridayāntaranga Sāi Parthipuri Vihāri\n Jaya Raghunandana Jaya Jaya Rām\n Jaya Yadu Nandana Jaya Ghanashyāma" },

  { id: "1095", content: "Jagat Pālanā Jagan Mohanā\n Sundara Sāi Gopālanā\n Munijana Sevita Madhusudanā\n * Keshavā Govinda Janārdanā\n Shridharā Mādhavā Dāmodarā\n Atchyutā Ānantā Nārāyanā\n Shri Sāi Krishnā Nārāyanā (x2)\n Munijana Sevita Madhusudanā" },

  { id: "1096", content: "Jagatpaté Hari Sāi Gopālā\n Jagata Uddhārā Sāi Nandalālā\n Mathurādipaté Krishna Gopālā\n Madhura Madhura Hey Gāna Vilolā\n Jagata Uddhārā Sāi Nandalālā" },

  { id: "1097", content: "Jai Hari Krishnā (2) Govardhana Giridhāri\n Rādhā Mohana Rādhā Jeevana\n Manjula Kunja Vihāri" },

  { id: "1098", content: "Jai Jai Gopālā\n Sai Gopālā Rādhé Gopālā\n * Hey Nandalālā Gopi Lolā Gokula Bālā\n Brindāvana Sanchārā\n Sai Gopālā Rādhé Gopālā" },

  { id: "1099", content: "Jai (3) Mana Mohanā, Jai (3) Madhusudanā\n Mādhavā Keshavā\n Keshāvā Mādhavā\n Gopālā Gopālanā" },

  { id: "1100", content: "Janārdanā Nandalālā Govindā Gopālā\n Hare Krishnā (2)\n Krishnā Krishnā Gopālā\n Sāi Krishnā Gopālā" },

  { id: "1101", content: "Jaya Govindā Jaya Hari Om\n Mukhāravinda Murahari Om\n * Nanda Mukundā Murahari Om\n Satchidānanda Sāi Hari Om\n Mukhāravinda Murahari Om" },

  { id: "1102", content: "Jaya Hari Govinda Nārāyanā\n Jaya Hari Gopāla Nārāyanā ---(x3)\n Nārāyanā Sāi Nārāyanā (x4)" },

  { id: "1103", content: "Jaya Jaya Jaya Hey Madhusudanā\n Jaya Brindāvana Mana Mohanā\n * Sundara Sāi Shirdi Vihāri\n Sundara Sāi Parthi Vihāri\n Rādhéshyām (4)\n Sāi Rām (4)\n Rādhéshyām (4)" },

  { id: "1104", content: "Jaya Jaya Krishnā Yadu Nandanā\n Jaya Jaya Brindāvana Chandanā\n * Jaya Jaya Krishnā Mana Mohanā\n Jaya Jaya Sāi Gopālanā (x2)" },

  { id: "1105", content: "Jaya Jaya Prabhu Giridhāri Natavara Nandalālā\n Natavara Nandalālā Hey Giridhara Gopālā\n Hey Giridhara Gopālā (3)\n Jaya Mādhava Murahara Murali Manohara\n Giridhara Gopalā\n Hey Giridhara Gopālā (3)" },

  { id: "1106", content: "Jaya Krishnā Kunja Vihāri\n Jaya Rādhā Hridaya Vihāri\n Jaya Yamunā Teera Vihāri\n Jaya Gopi Ké Hridaya Vihāri\n Jaya Mādhava Rāsa Vihāri\n Jaya Sāi Parthi Vihāri" },

  { id: "1107", content: "Jaya Krishnā Madhusudanā\n Rādhā Krishnā Mana Mohanā\n Brindāvana Sanchāri Govardhana Giridhāri\n Parthi Vihāri Sāi Nārāyanā\n Nārāyanā Sāi Nārāyanā" },

  { id: "1108", content: "Jaya Krishnā Mukunda Murāri\n Jaya Ānanda Brindā Vihāri (x2)\n * Ānanda Chandā Rādhé Govindā\n Rādhé Govindā Shyāma Mukundā\n Bāla Gopālā Shyāma Gopālā\n Parthi Vihārā Sāi Nandalālā" },

  { id: "1109", content: "Jaya Murali Mādhavā Shauri\n Jaya Murali Mādhavā\n Madana Manohara Madhusudana Hari\n Brindāvana Ghanashyāma Murāri\n Hey Mana Mohana Kunja Vihāri\n Mādhava Mohana Gāna Priyā Sāi" },

  { id: "1110", content: "Jaya Nandalālā Jai Jai Gopālā\n Rāsa Vilolā Rādhe Gopālā\n * Murali Lolā Munijana Pālā\n Gopi Lolā Gopāla Bālā" },

  { id: "1111", content: "Jaya Nārāyana Jaya Hari Om\n Sāi Nārāyana Jaya Hari Om\n Hari Om (4)\n Paramātmā Shiva Hari Om\n Parabrahmā Sāi Hari Om\n Hari Om (2) Jaya Hari Om" },

  { id: "1112", content: "Jaya Sāi Nārāyanā Keshavā\n Jaya Sāi Nārāyanā Mādhavā\n * Jaya Sāi Nārāyanā Yādhavā\n Jaya Sāi Nārāyanā Rāghavā\n Jaya Sāi Nārāyanā Bāndhavā" },

  { id: "1113", content: "Jaya Sāishā (2)\n Rādhā Mādhava Jaya Parthishā\n * Hridaya Sārathi Sāi Kanhaiyā\n Rādhé Govindā Prashānti Nilaya" },

  { id: "1114", content: "Jhuma (4) Bājé Ghunghariyā\n Sānvari Surata Nāché Kanhaiyā\n * Mora Mukuta Peetāmbara Khatiyā\n Madhura (2) Bājé Murali Adhariyā\n Sānvari Surata Nāché Kanhaiyā" },

  { id: "1115", content: "Kalyāna Krishnā Kamaneeya Krishnā\n Kālinga Mardana Shri Krishnā\n Govardhana Giridhāri Murāri\n Brindāvana Sanchāri\n Brindāvana Ki Tulasi Mālā\n Peetāmbaradhāri Murāri" },

  { id: "1116", content: "Kamala Nayana Prabhu Kamalāpate\n Kamalāsana Prabhu Kamalā Kāntā\n Kamala Nābha Prabhu Kamalā Ramanā\n Kamaleshwara Prabhu Kamalā Nāthā" },

  { id: "1117", content: "Kānhā Kanhaiyā Bansi Adhariyā\n Brindāvana Ghana Rāsa Rachaiyā\n Gokula Nandana Hey Chitta Mohana\n Rādha Manohara Shyāmā\n Mānasa Chorā Nanda Kishorā\n Parthi Vihārā Sāi Gopālā Sāi Gopālā" },

  { id: "1118", content: "Kānhā Kanhaiyā Nandalālā O Muraliwālā\n Aisé Bajāyé Murali Muraliyā Jādoo Bhari\n Hari Hari Govindā Hari Hari Mādhavā\n * Jaya (2) Seetārām, Jaya (2) Rādhéshyām\n * Hari (2) Nārāyanā, Hari (2) Nārāyanā" },

  { id: "1119", content: "Kanhaiyā Teri Bansi Bajé Meré Lāl\n Nishdin Main Bhajoun Tero Nām\n * Hey Nandalālā Gopālā\n Gopālā Sāi Gopālā\n Govindā (2) Govinda Gopālā\n Sāi Krishna Sāi Rām" },

  { id: "1120", content: "Karunā Sāgara Hey Nandalālā\n Murali Manohara Shyāma Gopālā\n * Giridhara Nāgara Sāi Gopālā\n Sāi Gopālā Sāi Gopālā\n Meerā Ké Prabhu Shyāma Gopālā" },

  { id: "1121", content: "Karunāntarangā Karirāja Varadā\n Kamalesha Shri Sāi Rāmā\n Omkāra Rāmā Prashānti Rāmā\n Parabhrahma Sathya Sāi Rāmā - Hey\n Kamalesha Shri Sāi Rāmā" },

  { id: "1122", content: "Kasturi Tilakam Nārāyanam\n Kamala Nayanam Nārāyanam\n * Guruvāyurapura Nārāyanam\n Kaliyuga Avatāra Nārāyanam\n Govinda Govinda Nārāyanam (x2)" },

  { id: "1123", content: "Keshavā Mādhavā\n Govindā Gopālā\n Hari Bol Hari Bol Hari Hari Bol\n Keshava Mādhava Govinda Bol (x2)" },

  { id: "1124", content: "Keshavā Mādhavā Jaya Devā Madhusudanā\n Netra Kamala Dala Ateeva Manohara\n Antaryāmi Prabhu Parameshwara\n Māyā Mānusha Vesha Leelādhara (x2)\n Antaryāmi Prabhu Parameshwara" },

  { id: "1125", content: "Krishna Bhajo (2) Murali Govinda Bhajo\n Rādhé Govinda Bhajo Rādhé Gopāl Bhajo\n * Giridhāri Shyām Bhajo Sāi Govinda Bhajo\n Madhuvana Sanchāri Shyām Gopāl Bhajo (x2)" },

  { id: "1126", content: "Krishna Gopālā Yadunandanā\n Venu Vinodana Mana Mohanā\n * Pankaja Lochana Nārāyanā\n * Mora Mukuta Gokula Ramanā\n Ghanashyāmā Ānanda Govindā\n Krishna Murāri Madhusudanā" },

  { id: "1127", content: "Krishna Kanhaiyā Bansi Bajaiyā\n Pār Karo Meré Jeevan Naiyā\n Nandaji Ké Lālā Murali Gopālā\n Bhakton Ké Sāi Deena Dayālā\n Pār Karo Meré Jeevana Naiyā" },

  { id: "1128", content: "Krishna Kanhaiyā Krishna Kanhaiyā\n Natavara Nanda Kumāra Kanhaiyā\n Brindāvana Ké Bansi Adhariyā\n Rādhā Manohara Rāsa Rachayyā\n Giridhara Nāgara Shyāma Kanhaiyā\n Shri Madhusudana Sāi Kanhaiyā" },

  { id: "1129", content: "Krishna Kanhaiyā Sapné Mé Āo\n Hey Manamohana Murali Sunāo\n Ateeva Manohara Darsha Dikhāo\n Hey Giridhāri Man Ko Lubhāo\n Vyākula Man Ki Pyāsa Bujhādo\n Govinda (3) Gāo" },

  { id: "1130", content: "Krishna Krishna Govinda Nārāyanā\n Krishna Rāma Govinda Nārāyanā\n Sāi Rāma Govinda Sāi Shyāma Gopāla\n Sāi Krishna Govinda Nārāyanā" },

  { id: "1131", content: "Krishnā (2) Mujhé Darshan Do Krishnā\n Krishnā Oh Krishnā Mujhé Darshan Do Krishnā\n Giridhāri Murāri Krishnā\n Ghanashyāma Murāri Krishnā\n Krishnā (4) Sathya Sāi Murāri Krishnā\n Ab Ā Jāo Krishnā\n Mujhé Darshan Do Krishnā" },

  { id: "1132", content: "Krishna Krishna Mukunda Janārdanā\n Krishna Govinda Nārāyanā Haré\n Achyudānanda Govinda Mādhavā\n Satchidānanda Nārāyanā Haré\n Rādhé Govinda Bhajo Rādhé Gopālā (x2)\n Shyāma Sundara Madana Mohana Rādhé Gopālā\n Murali Manohara Rādhé Gopālā\n Shankha Chakra Gadādhara Rādhé Gopālā\n Murali Manohara Rādhé Gopālā" },

  { id: "1133", content: "Krishnā Krishnā Rādhé Krishnā\n Rādhé Krishnā (3) Rādhé\n Bāndhé Pāyaliyā Rādhā Āyi\n Nāche Sanga Sanga Krishna Kanhāyi\n Gopi Rāsa Rachāyi" },

  { id: "1134", content: "Krishnā Krishnā Yaduvara Krishnā\n Murahara Keshavā Yādhavā Mādhavā\n * Murali Manohara Krishna Murāri\n Krishna Murāri Shyāma Murāri\n Murahara Keshavā Yādhavā Mādhavā" },

  { id: "1135", content: "Krishna Mādhava Mādhava Krishnā\n Krishna Mādhava Sāi Haré\n Brindāvana Sanchāri Shyāma Gopālā\n Jaya Madhusudana Jaya Nandalālā\n Jhulanā Jhulé Meré Sāi Nandalālā" },

  { id: "1136", content: "Krishna Mukunda Govinda Giridhara\n Murali Mohana Nārāyanā\n Parthi Purandara Nārāyanā\n Mādhava Shri Hari Mandara Giridhāri\n Govinda Murahari Nārāyanā – Haré\n Parthi Purandara Nārāyanā (x2)" },

  { id: "1137", content: "Krishna Murāri Bhava Bhaya Hāri\n Hey Giridhāri Gopāla\n Parthi Vihāri Hridaya Vihāri\n Bhakta Sakhā Bhagavān\n Bhakta Sakhā Bhagavān (x2)" },

  { id: "1138", content: "Krishna Murāri Gopālā\n Krishna Krishna Sāi Gopālā\n Nanda Kumārā Gopālā Navanita Chorā Gopālā\n Nāda Swarupā Gopālā Nanda Nandanā Gopālā\n Nanda Kumārā Navanita Chorā\n Gopālā Sāi Gopālā" },

  { id: "1139", content: "Krishna Murāri Muralidhāri\n Gopi Vallabha Giridhāri\n Hridaya Vihāri Leelādhāri\n Parthi Vihāri Sāi Murāri" },

  { id: "1140", content: "Krishnā Rāmā Govindā Gokula Nandana Gopālā\n Rāmā Krishnā Govindā Jaya Brindāvana Gopālā\n Sāi Krishnā Govindā Parthipurishwara Gopālā\n Gopālā Sāi Gopālā\n Gopi Manohara Gokula Bālā Sāi Murāri" },

  { id: "1141", content: "Krishnā Rāmā Govinda Nārāyanā\n Keshavā Mādhavā Hari Nārāyana\n * Shri Venu Gopāl Krishnā (x2)\n Mādhavā Madhusudanā Nārāyanā" },

  { id: "1142", content: "Krishna Sāi Krishnā Giridhara Bālā\n Giridhara Bālā\n Govardhana Sāi Yadukula Bālā\n * Nanda Nandanā Murali Mohanā\n Gopālanā Sāi Ranganā\n Madhusudana Mana Mohanā Parthi Nandanā" },

  { id: "1143", content: "Krishna Shri Hari Krishnā\n Govindā Gopālā Krishnā Krishnā\n * Nanda Mukundā Govindā\n Navanita Chorā Gopālā\n Govindā Gopālā Gokula Nandana Gopālā\n Krishnā Shri Hari Krishnā\n Krishnā Shri Sāi Krishnā" },

  { id: "1144", content: "Krishnā Shri Krishnā\n Gopāl Bālā Jaya Krishnā\n * Jaya Brindāvana Shyāma Murāri\n Jaya Parthishwara Sāi Murāri\n Parthi Vihāri Sāi Murāri" },

  { id: "1145", content: "Kshirābdi Shayanā Nārāyanā\n Shri Lakshmi Ramanā Nārāyanā\n Nārāyanā Hari Nārāyanā\n Kshritajana Paripāla Nārāyanā\n Vaikunta Vāsā Nārāyanā\n Vaidehi Mohana Nārāyanā\n Nārāyanā Hari Nārāyanā\n Narahara Rupā Nārāyanā" },

  { id: "1146", content: "Mādhavā Gopālā\n Madhusudana Hari Giridharā\n Mukunda Mādhava Parthi Vihārā\n Muralidhara Hari Sundarā" },

  { id: "1147", content: "Mādhavā Gopālā\n Nanda Nandana Ghanashyāma Gopālā\n * Rādhā Ramana Brindāvana Bālā\n Murali Manohara Shyāma Gopālā" },

  { id: "1148", content: "Mādhavā Haré Krishnā Madhura Mohanā\n Gokula Bālanā Devaki Nandanā\n Venu Vinodanā Pāpa Vināshanā\n * Rādhika Jeevanā Rājiva Nayanā\n Nanda Sunandanā Gopi Ramanā\n Venu Vinodanā Pāpa Vināshanā" },

  { id: "1149", content: "Mādhava Mohana Shyāma Gopālā\n Muralidhara Mukunda Gopālā\n Dwāpara Yuga Mé Krishna Gopālā\n Meerā Ké Prabhu Giridhara Bālā\n Shyāma Manohara Hey Nandalālā\n Parthipurishwara Sāi Gopālā" },

  { id: "1150", content: "Mādhava Murahara Murali Gopālā\n Jaya Govindā Jaya Gopālā\n Parthipuranjana Parama Dayāgana\n Deenajanāvana Sāi Gopālā\n Jaya Govindā Jaya Gopālā" },

  { id: "1151", content: "Madhura (2) Murali Ghanashyāmā\n Mathurādipaté Rādhéshyāmā\n Suradāsa Prabhu Hey Giridhāri\n Meerā Ké Prabhu Hridaya Vihāri" },

  { id: "1152", content: "Madhusudanā Haré Mādhavā\n Shri Vāsudevā Janārdanā (x2)\n Hari Keshavā Nārāyanā\n Shri Hari Govinda Mana Mohanā\n Janārdanā Jagat Pālanā\n Deenāvanā Dukha Bhanjanā\n Aravinda Lochana Ānanda Rām\n Shri Vāsudevā Janārdanā (x2)" },

  { id: "1153", content: "Madhusudana Krishnā Kunja Vihāri\n Rādhā Mādhava Shyāma Giridhāri\n Sāi Krishnā O Sāi Krishnā\n Mandara Giridhara Mādhava Mohana\n Dwāraka Nāthā Gopi Manohara\n Prāna Sakhā Prabhu Bhava Dukha Bhanjana\n Rādhā Mādhava Shyāma Giridhāri\n Sāi Krishnā O Sāi Krishnā" },

  { id: "1154", content: "Madhusudanā Krishnā Mādhava Shyām\n Kunja Vihāri Hridaya Vihāri\n Prashānti Vihāri Gopāla\n Kaustubha Shreedhara Chavi Ati Sundara\n Netra Kamala Dala Rādhā Manohara\n Yuga Avatāra Tum Ho Parameshwara\n Bhajana Karoun Terā Sadā Nirantara (x2)" },

  { id: "1155", content: "Madhusudanā Muralidharā\n Madhura Madhura Hey Giridhara Bālā\n Mādhavā Madhusudanā\n Hridayāntarangā Shri Sāi Rangā\n Shri Rangā Rangā Puttaparthi Rangā\n Mādhavā Madhusudanā" },

  { id: "1156", content: "Madhuvana Ké Muraliwālā\n Nācho (3) Nandalālā\n Nandalālā (2)\n Nācho (3) Nandalālā\n Gopi Manohara Gopāla Bālā\n Parthipurishwara Hey Sāi Nāthā\n Nācho (3) Nandalālā" },

  { id: "1157", content: "Madhuvana Murali Shyāma Murāri\n Sānvariyā Moré Rāsa Vihāri\n Gokula Nandana Hey Giridhāri\n Deenana Ké Tum Bhava Bhaya Hāri (x2)" },

  { id: "1158", content: "Madhuvana Sanchāri Shyāma Murāri\n Hey Madhusudana Murali Dhāri\n * Rādhā Mādhava Mayura Mukutadhara\n Mathurā Nāthā Sāi Giridhāri" },

  { id: "1159", content: "Mana Mandir Mé Āo Giridhāri\n Nishdin Barsat Nayana Hamāré\n * Suradās Ké Shyāma Murāri\n Akhiyan Teré Darsha Ki Pyāsi (x2)" },

  { id: "1160", content: "Mana Mohana Murali Gopālā\n Mana Mohana Shyāma Gopālā\n Ghanashyāma (4)\n Hey Giridhāri Hridaya Vihāri\n Krishna Murāri Gopāl\n Krishna Murāri Gopāl Sāi Murāri Gopāl" },

  { id: "1161", content: "Mana Mohana Murali Gopālā\n Jaya Govinda Rādhé Gopālā\n Pandarināthā Jaya Hari Vitthalā\n Govardhana Giridhāri Gopālā\n Govinda Rādhé Gopālā" },

  { id: "1162", content: "Mana Mohana Shyāma Murāri\n Hey Giridhāri Hridaya Vihāri\n Brindāvana Sanchāri\n * Gāna Vilolā Murāri Gopālā\n Sundara Shyāma Murāri\n Gopi Lolā Gokula Bālā\n Kamala Vadana Sāi Gopālā" },

  { id: "1163", content: "Mandira Mé Āo Mādhavā\n Mādhavā Keshavā\n * Ādi Nārāyana Ananta Sāi\n Āo Āo Hridaya Nivāsi\n Rādhā Lolā Rakumāyi Vitthalā\n Rangā Pāndurangā Vitthalā" },

  { id: "1164", content: "Mathurādipaté Krishna Mukundā\n Madhusudana Ghanashyāma Mukundā\n * Venu Vilolana Parthi Ramanā\n Yadukula Bhooshana Rājiva Lochanā\n Parthipurishwara Jaya Mana Mohanā\n Madhusudana Ghanashyāma Mukundā" },

  { id: "1165", content: "Mukunda Murāri Murāri Gopāl\n Hey Antaranga Sāi Hey Sāi Nandalāl\n * Prashānti Nivāsi Nivāsi Nandalāl\n Hey Antarātmā Jyoti Hey Jyoti Nandalāl\n Satyam Shivam Shivam Sundaram\n Hey Sundara Rupā Hey Sāi Nandalāl" },

  { id: "1166", content: "Murali Krishnā Mukunda Krishnā\n Mohana Krishnā Krishnā Krishnā\n Gopi Krishnā Gopāla Krishnā\n Govardhana Dhara Krishnā Krishnā\n Rādhā Krishnā Bāla Krishnā\n Rāsa Vilolā Krishnā Krishnā\n Shirdi Krishnā Parthi Krishnā\n Shri Sathya Sāi Krishnā Krishnā" },

  { id: "1167", content: "Murali (3) Ghanashyām\n Mohana Murali Sāi Shyāma\n * Kanakāmbaradhara Karunā Sāgara\n Meerā Ké Prabhu Giridhara Nāgara\n Parthipurishwara Sāi Shyām" },

  { id: "1168", content: "Muralidhara Mukunda Murāri\n Govardhana Giridhāri Murāri\n Māyā Nātaka Sutra Dhāri (x2)\n Māyā Mānusha Vesha Dhāri" },

  { id: "1169", content: "Muralidharā Muraharā Natavarā\n Gopijana Priya Giridharā\n * Brindāvana Sanchārā Jagadoddhārā\n Yashodā Bālā Nanda Kumārā" },

  { id: "1170", content: "Murali Vinodana Munijana Mohana\n Natana Manohara Gopālā\n Nitya Niranjana Hridaya Sanjeevana\n Deenajanāvana Gopālā\n Natana Manohara Gopālā" },

  { id: "1171", content: "Nācho Gopāl Nācho Gopāl\n Rumjhum Rumjhum Nācho Gopāl\n Venu Vilolā Vijaya Gopālā\n Nācho Gopāla Giridhara Lāl\n * Nāch Ab Nācho Natakhata Gopālā\n Giridhara Gopālā Sāi Nandalālā" },

  { id: "1172", content: "Nācho (3) Nandalālā\n Nandalālā Nandalālā\n Rumajhuma Pāyala Ghunghroo Bajé\n Ghunghroo Bajé Sāi Murali Bajé\n Nandalālā Nandalālā\n * Narahari Rupā Nārāyanā\n Nārāyanā Sāi Nārāyanā\n Nandalālā Nandalālā" },

  { id: "1173", content: "Nanda Gopāl (2)\n Nanda Mukundā Shyāma Gopāl\n * Rādhā Mādhava Rādhé Gopāl\n Bhakta Uddhārā Parthi Gopāl\n Sāi Gopāl Sāi Gopāl\n Sāi Gopāl Sathya Sāi Gopāl" },

  { id: "1174", content: "Nanda Ké Dulāré Yashodā Ké Pyāré\n Govinda Murāré Deenon Ké Sahāré\n * Karunā Sāgara Giridhara Nāgara\n Murali Manohara Sāi Murāré" },

  { id: "1175", content: "Nanda Ké Lāl Bhajo Murali Gopālā\n Rādhéshyām (2)\n Giridhāri Shyām Bhajo Gopi Gopālā\n Meerā Ké Nātha Prabhu Hey Nandalālā\n Rādhéshyām (2)" },

  { id: "1176", content: "Nandā Ké Lāla Murali Gopāl\n Giridhāri Govinda Rādhé Gopāl\n Nandā Mukundā Rādhé Gopāl\n Rādhé Jai Rādhé Jai Rādhé Gopāl\n Rādhé (3) Gopāl\n Rādhé Rādhé Murali Gopāl\n Rādhé Rādhé Sāi Gopāl (x2)" },

  { id: "1177", content: "Nanda Kishorā Bāla Gopāl\n Navanita Chorā Hridaya Vihār\n Sāi Gopāl Sathya Sāi Gopāl\n Sāi Gopāl Bhajo Murali Gopāl" },

  { id: "1178", content: "Nanda Kishorā Navanita Chorā Rādhé Gopālā\n Rāsa Vilolā Rādhé Gopālā Hey Nandalālā\n Nandalālā Nandalālā\n Goparipālā Gopi Lolā Giridhara Gopālā\n Murali Lolā Munijana Pālā Hey Nandalālā\n Nandalālā Nandalālā" },

  { id: "1179", content: "Nanda Kishorā Nārāyanā\n Navanita Chorā Nārāyanā\n Narahari Rupā Nārāyanā\n Nāda Swarupā Nārāyanā" },

  { id: "1180", content: "Nanda Mukundā Navanita Chorā\n Narahari Rupā Nārāyanā\n Nādabrahma Hari Sāi Nārāyanā\n Satya Nārāyana Nārāyanā\n Sāi Nārāyana Nārāyanā" },

  { id: "1181", content: "Nanda Nanda Govinda Nācho Nācho Gopāla\n Nandalāl Govinda Lāl (Sāi) - Hey\n Nandātmajā Hari Nārāyanā - (Sāi)\n Sadā Sukhadāyi Nārāyanā (Ānanda)\n Dwārakamāyi Nārāyanā\n Parthipurishwara Nārāyanā" },

  { id: "1187", content: "Nandā Nandana Hari Govinda Gopālā\n Ghanashyāma Mana Mohanā (x2)\n Gopi Lolā Gopālā\n Gokula Bālā Gopālā\n Hey Nandalālā Gopālā\n Ghanashyāma Mana Mohanā (x2)" },

  { id: "1182", content: "Nanda Nandanā Navanita Chorā\n Gokula Bālā Hey Gāna Vilolā\n Meerā Ké Nātha Prabhu Shyāma Gopālā\n Vanamāli Giridhāri Sāi Gopālā\n Gokula Bālā Hey Sāi Gopālā\n Mathurā Nāthā Prabhu Krishna Gopālā\n Vanamāli Giridhāri Sāi Gopālā\n Gokula Bālā Hey Sāi Gopālā" },

  { id: "1183", content: "Nandalālā Nandalālā\n Nācho (3) Nandalālā\n Navanita Chorā Hey Bāla Gopālā\n Gopi Manohara Gopāla Bālā" },

  { id: "1184", content: "Nandalālā Shyāma Sundara Nandalālā\n Kaustubhadhāri Vanamālādhara\n Shyāmala Madana Gopālā\n Rādhéshyāma (2) Sāi Shyāma (2)\n Rādhā Mādhava Madana Gopālā\n Mathurā Nātha Gopālā\n Parthi Nandana Hridaya Sanjeevana\n Shyāmala Madana Gopālā" },

  { id: "1185", content: "Nandalālā Yadu Nandalālā\n Brindāvana Govinda Lālā\n Rādhā Lolā Nandalāalā\n Rādhā Mādhava Nandalālā" },

  { id: "1186", content: "Nandānanda Mukunda Gopālā\n Murali Mohana Shyāma Gopālā\n Shyāma Gopāla Ghanashyāma Gopālā\n Murali Mohana Shyāma Gopālā" },

  { id: "1188", content: "Nārāyan (2) Bhaja Mana Nārāyan\n Shri Hari Mādhava Nārāyan\n Bhaja Mana Nārāyan\n Murali Shyām Mohana Shyām\n Murali Mohana Shyām\n Meré Rām Hey Ghanashyām Sāi Satguru Rām" },

  { id: "1189", content: "Nārāyanā Hari Nārāyanā\n Nārāyanā Hari Om\n Nārāyanā Hari Divya Swarupā\n Nārāyanā Hari Jyoti Swarupā\n Sāishwarā Hari Om – Sathya\n Nārāyanā Hari Om" },

  { id: "1190", content: "Nārāyanā Hari Nārāyanā\n Narahari Rupā Nārāyanā\n Vaikunta Vāsā Namo Nārāyanā\n Vaidehi Mohana Nārāyanā\n Nārāyanā Namo Nārāyanā\n Nārāyanā Veda Pārāyanā" },

  { id: "1191", content: "Natavara Krishnā (2) Rādhé Nandalālā\n Haré Mādhavā Haré Gopikā Lolā – Har\n Krishnā Ghana Ghana Neelā\n Krishnā Gokula Bālā\n Haré Mādhavā Haré Gopikā Lolā – Har" },

  { id: "1192", content: "Natavara Lāl Giridhara Gopāl\n Meerā Prabhuvara Shyāma Gopāl\n * Veda Sāra Jeevana Kā Dhāra\n Gopi Manohara Hridaya Vihār" },

  { id: "1193", content: "Nityānandā Satchidānandā\n Hari (3) Om Nārāyanā\n Premaswarupa Premānandā (x2)\n Hari (3) Om Nārāyanā\n Nārāyanā Nārāyanā\n Nārāyanā Sāi Nārāyanā\n Hari (3) Om Nārāyanā" },

  { id: "1194", content: "Padmanābhā Nārāyanā\n Parthi Vāsā Nārāyanā (x2)\n Nārāyanā Hari Nārāyanā\n Nārāyanā Satya Nārāyanā\n Nārāyanā Sāi Nārāyanā" },

  { id: "1195", content: "Paramānanda Govinda Gopāla Jai\n Sāi Nanda Mukundā Gopāl Jai\n Sāi Krishna Haré Sāi Rāmā Haré\n Sāi Keshava Mādhava Mohana Haré\n * Mukhāravinda Gopāla Jai\n Satchidānanda Govinda Gopāla Jai\n Sāi Nandā Mukundā Gopāla Jai" },

  { id: "1196", content: "Parthi Nandana Rādhéshyāmā\n Āo Āo Sāi Ghanashyāmā\n Brindāvana Ghanashyāma Govindā\n Madhura Manohara Mukhāravindā\n Hey Giridhāri Sāi Murāri\n Āo Āo Sāi Ghanashyāmā" },

  { id: "1197", content: "Parthi Nivāsi Krishnā Hey Ghanashyāmā\n Rādhā Mādhava Sundara Shyāmā\n * Hey Jagan Mohana Gokula Bālā\n Sāi Gopālā Rāsa Vilolā\n Meerā Ké Prabhu Shyāma Gopālā\n Govinda Giridhara Hey Chittachorā" },

  { id: "1198", content: "Parthishwarā Sathya Sāishwarā\n Dayā Karo Sāi Nārāyanā\n Shri Sāi Nārāyanā - Sāi\n Bhavasāgaroddhāra Bhuvanāvanā\n Sharanāgatatrāna Nārāyanā\n Dayā Karo Sāi Nārāyanā\n Shri Sāi Nārāyanā – Sāi" },

  { id: "1199", content: "Pranava Swarupā Hari Om Sāi\n Nārāyanā Hari Om\n Sathya Sāishwarāya Hari Om\n Yādhavāya Mādhavāya Govindāya Namah Om\n Paramātmā Rupāya Hari Om\n Hari Om (2)\n Sathya Sāishwarāya Hari Om" },

  { id: "1200", content: "Prema Se Gāo Mangala Nāma\n Govinda Gopāla Bolo Hari Nāma\n Prema Ké Sindhu Deena Ké Bandhu\n Karunāmayā Sāi Nayanabhi Rāmā\n Govinda Gopāla Bolo Hari Nāma\n Haré Krishna Haré Rām Sāi Rām Sāi Rām (x3)" },

  { id: "1201", content: "Purnāvatārā Sāi Mahādeva Sāi Nārāyanā\n Nārāyanā Sāi Nārāyanā (x2)\n * Prema Swarupa Nārāyanā\n Prashānti Niketana Nārāyanā\n Pānduranga Nārāyanā\n Parthipurishā Nārāyanā" },

  { id: "1202", content: "Pyāré Nandalāl Darshana Dijo\n Yashodā Ké Bāl Darshana Dijo\n * Natavara Lāl Darshana Dijo\n Giridhara Bāl Darshana Dijo" },

  { id: "1203", content: "Rādhā Ké Natavara Lāl Kanhaiyā\n Gokula Bālā Goparipālā\n * Nanda Kumārā Rāsa Vilolā\n Meerā Ké Prabhu Nandalāl Kanhaiyā" },

  { id: "1204", content: "Rādhā Krishnā Gopālā\n Rāsa Vihāri Gopālā\n Brindāvana Ké Gopālā\n Bhaktajana Priya Gopālā\n Nanda Mukundā Gopālā\n Navanita Chorā Gopālā\n Goparipālā Gopālā\n Govinda Govinda Gopālā" },

  { id: "1205", content: "Rādhā Krishnā Karunā Lolā Rādhé Govindā\n Rādhé Govindā Murali Govindā\n Jai Jai Rādhé Rādhé Govindā Murali Govindā" },

  { id: "1206", content: "Rādhā Mādhava Gopālanā\n Govinda Gopāla Nārāyanā\n Nārāyanā Sāi Nārāyanā\n Nārāyanā Satya Nārāyanā\n Nārāyanā Veda Pārāyanā" },

  { id: "1207", content: "Rādhā Mādhava Madana Gopālā\n Nanda Mukundā Natavara Lālā\n * Mathurā Nāthā Deena Dayālā\n Sāi Govindā Giridhara Bālā" },

  { id: "1208", content: "Rādhā Mānasa Hey Govindā\n Murali Manohara Shri Govindā\n * Krishna Murāri Jaya Govindā\n Parthi Vihāri Sāi Govindā" },

  { id: "1209", content: "Rādhā Manohara Natavara Lāl\n Yashodā Ké Nandana Rādhé Gopāl\n Rādhé Gopāl (2)\n * Meerā Ké Prabhu Nācho Gopāl\n Eeshwārāmba Nandana Sāi Gopāl\n Parthi Manohara Krishna Gopāl\n Govinda Gopāla Sāi Nandalāl\n Sāi Nandalāl (2)" },

  { id: "1210", content: "Rādhā Manohara Shauri Brindāvani Sanchāri\n Omkāramaya Sathya Sāi\n Vedānta Priya Shubhadāyi\n Paramānanda Govinda Gopāla Parthi Sāi" },

  { id: "1211", content: "Rādhā Mukunda Haré Pāhi Govinda Haré\n Vedānta Sāram Haré Nanda Nandanam Haré\n * Gokula Pālam Haré Lokābhirāmam Haré\n Krishnā Mukunda Haré Krishna Govinda Haré" },

  { id: "1212", content: "Rādhé Govinda Gopālā Jaya\n Govinda Rādhé Gopālā\n Govinda (2) Gopālā (x2)\n * Krishnā Madhusudanā Madhusudanā Krishnā\n Govinda (2) Gopālā" },

  { id: "1213", content: "Rādhé Govinda Haré Murāré\n Shyāma Mukunda Haré Murāré\n * Krishna Govinda Haré Murāré\n Sāi Mukunda Haré Murāré" },

  { id: "1214", content: "Rādhé Govindā Jai Jai Rādhé Gopālā\n Deena Nāthā Govindā Anātha Nātha Gopālā\n * Rādhā Lolā Govindā Rāsa Vilolā Gopālā\n Govindā Jaya Govindā Gopālā Sāi Gopālā" },

  { id: "1215", content: "Rādhé Govinda Krishna Murāri\n Sathya Sāi Mukunda Murāri\n * Nandā Ānanda Rādhé Govindā\n Rādhé Govindā Sāi Mukundā\n Sathya Sāi Mukunda Murāri" },

  { id: "1216", content: "Rādhé Govindā Rādhé Gopāl Sāi Rām\n Bansidhara (2) Hey Chittachorā\n Hey Natavara (2) Nanda Kishorā\n Ghanashyāma Sundara Meghashyāma\n Sundara Sāi Rām" },

  { id: "1217", content: "Rādhé Krishnā (2)\n Jai Shri Krishnā Rādhé Rādhé (x2)\n Rādhé Krishnā Rādhé Rādhé\n Jai Shri Krishnā Rādhé Rādhé\n Shirdi Krishnā Parthi Krishnā\n Sāi Krishnā Rādhé Rādhé\n Rādhé Krishnā (2) Jai Shri Krishnā Rādhé Rādhé\n Rādhé Krishnā Rādhé Rādhé\n Jai Shri Krishnā Rādhé Rādhé" },

  { id: "1218", content: "Rādhé Mukunda Murāri Govindā\n Govindā Govindā Ānanda Govindā\n * Giridhāri Giridhāri Ānanda Ānandā – 3\n * Murali Manohara Sāi Gopālā – 3" },

  { id: "1219", content: "Rādhé (2) Govindā\n Rādhé (2) Gopālā\n Rādhé Govinda Bhajo Rādhé Gopālā\n Rādhé Mukunda Haré" },

  { id: "1220", content: "Rādhé (4) Govindā\n Rādhé Govinda Bhajo Rādhé Gopālā (x2)\n * Murali Manohara Govinda\n Hey Mādhava Murahara Govindā (x2)" },

  { id: "1221", content: "Rādhé (4) Govindā\n Rādhé Govindā Rādhé Gopālā\n Mohana Rupā Moksha Pradātā\n Murali Lolā Munijana Pālā\n Gopi Lolā Goparipālā\n Hridaya Vihārā Parthi Nivāsā\n Hridaya Vihārā Sāi Gopālā" },

  { id: "1222", content: "Rādhé (4) Govindā\n Rādhé (3) Nanda Mukundā\n Giridhara Vrajadhara Rādhe Gopālā\n Murali Manohara Rādhe Gopālā\n Shankha Chakradhara Rādhe Gopāl\n Rādhe Govinda Bhajo Rādhe Gopāl" },

  { id: "1223", content: "Rādhé (4) Venu Gopālā\n Venu Gopālā Sāi Gopālā\n * Rādhikā Manoharā Rāja Gopālā\n Gopikā Manoharā Gopi Gopālā\n Neela Meghashyāma Sundara Sāi Gopālā\n Mādhavā Keshavā Sāi Jai Jai Gopālā" },

  { id: "1224", content: "Rādhéshyāmā Hey Ghanashyāmā\n Rādhā Mādhava Mangala Dhāmā\n Jaya (3) Hey Meghashyāmā\n Meghashyāmā Meghashyāmā\n Jaya (3) Brindāvana Dhāmā" },

  { id: "1225", content: "Rādhikā Jeevanā\n Krishna Janārdanā\n Rādhé Govindā Rādhé Gopālā\n Devaki Nandanā – Vasu\n Nanda Nandanā Hey Gopikā Ranjanā\n Murali Mohanā\n Shri Madhusudanā – Krishnā Krishnā" },

  { id: "1226", content: "Rādhikā Manoharā Madana Gopālā\n Deena Vatsalā Hey Rāja Gopālā\n Bhaktajana Mandārā Venu Gopālā\n Muralidhara Hey Sathya Sāi Gopālā" },

  { id: "1227", content: "Rām Dhun Lāgi Mohé Shyāma Dhun Lāgi\n Lāgi Ré Lāgi Mohé Shyāma Dhun Lāgi\n * Haré Rām (2) Bolo Haré Rām\n Haré Prema Ānanda Se Bolo Sāi Haré Rām\n Haré Rām (2) Bolo Haré Rām (x2)\n Rām (3) Rādhéshyāma Dhun Lāgi" },

  { id: "1228", content: "Rām Krishna Govinda Nārāyanā\n Nārāyanā Hari Nārāyanā\n Shri Lakshmi Nārāyanā\n Om Ananta Nārāyanā (x3)" },

  { id: "1229", content: "Rām Krishna Govinda Nārāyana Keshavā\n Rādhikā Ramana Mādhavā Jaya Ranga Devā (x2)\n Haré Rām Haré Krishna Seetā Rāma Rāghavā\n Rādhikā Ramana Mādhavā Jaya Ranga Devā (x2)" },

  { id: "1230", content: "Rāsa Vilolā Nandalālā\n Rādhā Mādhava Nandalālā\n * Nanda Kishorā Nandalālā\n Navaneeta Chorā Nandalālā\n Nandalālā Sāi Nandalālā - Hey" },

  { id: "1231", content: "Ravikula Mandana Rājiva Lochana Rāghavā\n Vasudeva Nandana Bandha Vimochana Keshavā\n * Dharma Niketana Krishna Janārdana Yādhavā\n Hey Madhusudana Murali Mohana Mādhavā" },

  { id: "1232", content: "Rumjhuma Nācho Nanda Dulāra\n Mādhava Murahara Madana Gopāl\n * Rādhā Manohara Natavara Lāl\n Govinda Giridhara Murali Gopāl - (Shyām)" },

  { id: "1233", content: "Sāi Ghanashyāma (2)\n Rādhé Govinda Bhajo Rādhé Gopāla Bhajo\n Murali Gopāla Bhajo Sāi Ghanashyāma" },

  { id: "1234", content: "Sāi Jhulo Meré Bābā Jhulo Meré Bābā\n Jhulanā Jhulāyé Brijabālā Gopālā\n Gopi Manohara Bālā\n Jhulo Nandalālā Jhulo Nandalālā\n Parthi Mé Jhulé Sāi Lālā Gopālā\n Man Ké Jhulé Mé Virājo Gopālā\n Nandalālā Sāi Lālā\n Jhulo Nandalālā Jhulo Sāi Lālā" },

  { id: "1235", content: "Sāi Kanhaiyā Sāi Kanhaiyā\n Pār Karo Meré Jeevana Naiyā\n Tum Ho Meré Mā Bāpa Bhaiyā\n Hridaya Nivāsi Sāi Kanhaiyā (x2)\n Pār Karo Meré Jeevana Naiyā" },

  { id: "1236", content: "Sāi Nārāyana Nārāyana\n Satya Nārāyana Nārāyana\n Gāna Lola Prabhu Nārāyana\n Deena Pāla Jaya Nārāyana" },

  { id: "1237", content: "Sāi Rām Haré Ghanashyāmā\n Rādhéshyāma Haré Sāi Rāmā\n Meghashyāma Haré Parandhāmā\n Ghanashyāma Haré Sāi Rāmā" },

  { id: "1238", content: "Sapné Mé Āo Shyāma Murāri\n Sānvari Surata Muralidhāri\n * Sab Ké Sājana Prabhu Giridhāri\n Sab Ké Sājana Hridaya Vihāri\n Satguru Sāi Parthi Vihāri" },

  { id: "1239", content: "Sarvatra Govinda Nāmasankirtanam\n Govindā Haré Govindā\n Govindā Haré Govindā\n Haré Govindā Haré Govindā\n Purāna Purushā Govindā\n Haré Punya Shloka Govindā\n Bhakta Vatsalā Govindā\n Haré Bhāgavata Priya Govindā\n Krishna Rāmā Govindā\n Haré Rāmā Krishnā Govindā\n Sāi Rāmā Govindā Haré Sāi Shyāmā Govindā" },

  { id: "1240", content: "Satya Nārāyana Govinda Mādhavā\n Sāi Nārāyana Govinda Keshavā (x2)\n Haré Krishna (2) Krishnā (2) Haré Haré\n Haré Rāmā (2) Rāmā (2) Haré Haré" },

  { id: "1241", content: "Satya Sanātana Nitya Niranjana\n Bhakta Parāyana Nārāyanā\n Govinda Govinda Nārāyanā (x2)\n Nārāyanā Sāi Nārāyanā\n Puttaparthi Purandara Nārāyanā\n Govinda Govinda Nārāyanā" },

  { id: "1242", content: "Shesha Shailavāsā Nārāyanā\n Bhakta Pārijātā Nārāyanā\n * Sarvajeeva Vāsā Nārāyanā\n Sāmagāna Lolā Nārāyanā\n Sathya Sāi Rupa Nārāyanā (x2)" },

  { id: "1243", content: "Shri Krishnā Mādhavā Govindā Gopālā\n Mathurā Nāthā Madana Gopālā\n Nanda Mukundā Shyāma Gopālā – (Sāi)\n Krishna Haré Jai Krishna Haré\n Jai Haré Govinda Krishna Haré (x2)" },

  { id: "1244", content: "Shri Madhusudana Krishnā\n Giridhara Shyāma Murāri\n Bhakta Vatsala Prabhu Hey Giridhāri\n Rādhā Ramana Shri Hari\n Keshava Mādhavā Sādhu Samrakshaka\n Sāi Krishna Murāri" },

  { id: "1245", content: "Shri Ranganā Krishnanā Devaki Nandanā\n Kamala Nayana Shyāmala Vadana\n Ānanda Chandanā\n * Venu Vinodana Gopikā Ranjana\n Yashodā Nandana\n Ānanda Chandanā\n Yashodā Nandanā" },

  { id: "1246", content: "Shri Vāsudevā Nārāyanā Sāi Nārāyanā\n Janārdanā Hey Madhusudanā Sāi Nārāyanā\n Govardhanodhāra Gopālanā Sāi Nārāyanā\n Hari Om (3) Nārāyanā" },

  { id: "1247", content: "Shridharā Muralidharā Brindāvanā Sanchārā\n Sāi Keshavā Sāi Mādhavā Parthipuri Krishnā\n Rādhā Mādhava Rāsa Vilolā\n Rājiva Nayanā Venu Gopālā\n Vishwa Vandita Sāi Kripālā\n Sāi Keshavā Sāi Mādhavā Parthipuri Krishnā" },

  { id: "1248", content: "Shrinivāsā Govindā Shri Venkateshā Govindā\n Purāna Purushā Govindā\n Pundarikākshā Govindā\n Dasavidha Rupā Govindā\n Krishnā Rāmā Govindā\n Krishnā Rāmā Govindā Rāmā Krishnā Govindā\n Sāi Rāmā Govindā Sāi Krishnā Govindā" },

  { id: "1249", content: "Shrinivāsā Venkateshā\n Kshritajana Paripālā Sāishā\n * Tirupati Girivāsā Govindā\n Gauruda Vāhanā Govindā Govindā\n Govinda Govindā Shrinivāsā Govindā\n Govinda Govindā Shirdi Vāsā Govindā\n Govinda Govindā Parthivāsā Govindā" },

  { id: "1250", content: "Shyāma Sundara Madana Mohana Rādhé Gopāl\n Rādhé Gopāl Bhajo Rādhé Gopāl\n Shankha Chakra Gadādhara Rādhé Gopāl\n Rādhé Gopāl Bhajo Rādhé Gopāl" },

  { id: "1251", content: "Shyāma Sundara Hari Govinda Bolo\n Govinda Bolo Hari Gopāla Bolo\n * Madana Mohana Prabhu Govinda Bolo\n Kamala Nayana Prabhu Gopāla Bolo\n Rādhā Ramana Hari Govinda Bolo" },

  { id: "1252", content: "Shyāma Sundarā Nanda Kishorā\n Mohana Muralidharā Navanita Chorā\n Rādhikā Manoharā Rāsa Vilolā\n Gopika Manoharā Goparipālā\n Brindāvana Bālā Sāi Gopālā" },

  { id: "1253", content: "Shyāmala Komala Krishnā Murāri (x2)\n Shyāmala Ghanashyāmala Meghashyāmala\n Komala Krishnā Murāri\n Shreedhara Yaduvara Krishnā Murāri (x2)\n Shreedhara Nanda Yaduvara Bhava Bhaya Hara\n Giridhara Krishnā Murāri\n Shreedhara Yaduvara Krishnā Murāri" },

  { id: "1254", content: "Smita Smita Sundara Mukhāravinda\n Nāchoré Nandalālā Nandalālā (x4)\n Meerā Ké Prabhu Lālā Nandalālā (x4)" },

  { id: "1255", content: "Subah Aur Shām Bolo Hari Nām\n Gopi Gopāl Bhajo Sāi Ghanashyām\n * Chalo Mana Chalo Chalein Bābā Ké Dhām\n Shirdi Ké Dhām Sathya Sāi Ké Dhām" },

  { id: "1256", content: "Sundara (2) Nāché Sundara Sāi Ghanashyāma\n Nācheré Sāi Sundara Shyām\n Jhumaka Jhumaka Jhum Ghunghroo Bājé\n Nāché Ghanashyām\n Nāché Natavara Sāi Sundara Meré Sāi Rām\n Nāché Nāché Mana Mandira Mé Meré Sāi Rām\n Nācheré Sāi Sundara Shyām" },

  { id: "1257", content: "Sundara Shyāma Murāri Sāi\n Gopālā Shri Hari Shri Hari\n Parama Niranjana Mādhava Sāi\n Sakala Charāchara Vyāpaka Sāi\n Gopālā Shri Hari Shri Hari" },

  { id: "1258", content: "Swāgatam Krishnā Sharanāgatam Krishnā\n Swāgatam (2) Sharanāgatam Krishnā\n Mathurāpuri Sadanā Madhusudanā Krishnā\n Swāgatam (2) Sharanāgatam Krishnā" },

  { id: "1259", content: "Vaikuntapaté Sāi Haré\n Vaijayanti Mālā Dhāri\n * Hari Govinda Hari Gopāla (x2)\n Vara Godāvari Teera Vihāri – (Chitrāvati)" },

  { id: "1260", content: "Vanamāli Vāsudevā Jagan Mohanā\n Rādhā Ramanā\n Jagan Mohanā Rādhā Ramanā (x2)\n Shashi Vadanā Sarasija Nayanā\n Jagan Mohanā Rādhā Ramanā (x3)\n Rādhā Ramanā (x4)" },

  { id: "1261", content: "Vasudevaki Nandana Gopālā\n Nanda Mukundā Gopālā\n * Rādhā Mādhava Rāsa Vilolā\n Meerā Mādhava Natavara Lālā" },

  { id: "1262", content: "Yadunandanā Yashoda Bālā\n Mādhavā Keshavā\n * Mathurā Nāthā Mama Sāi Nāthā\n Mandara Giridhāri Madhusudanā Hey" },

  { id: "1300", content: "Bhaja Mana Pānduranga Vitthalā Jai Vitthalā\n Purandara Vitthalā Vitthalā Jai Vitthalā\n * Bhaja Mana Pānduranga Vitthalā Jai Vitthalā\n Purandara Vitthalā Vitthalā Jai Vitthalā" },

  { id: "1301", content: "Bhaja Mana Pānduranga Vitthalā Vitthalā\n Bhaja Mana Pānduranga Ranga Sāi Vitthalā\n * Tukārām Nāmadeva Poojitāya Vitthalā\n Rukmani Sameta Pānduranga Vitthalā\n Jayadeva (2) Sāi Rangā Vitthalā\n Bhakta Paripālana Pānduranga Vitthalā" },

  { id: "1302", content: "Bhaja Mana Rām (2)\n Pāndurangā Shri Rangā Bhaja Mana Rām\n Bhaja Mana Mādhavā Bhaja Mana Keshavā\n Bhaja Mana Yādhavā Bhaja Mana Rām\n Pāndurangā Shri Rangā Bhaja Mana Rām\n Bhaja Mana Mukunda Bhaja Mana Govinda\n Bhaja Mana Ānanda Bhaja Mana Rām\n Pāndurangā Shri Rangā Bhaja Mana Rām" },

  { id: "1303", content: "Bhajo Bhajo Vitthalā Pānduranga Vitthalā\n Pandarinātha Pānduranga Bhajo Mana Vitthalā\n * Parthishwarā Sāi Nātha Vitthalā\n Parameshwarā Sathya Sāi Vitthalā\n Rakumāyi Vitthalā Ranga Sāi Vitthalā" },

  { id: "1304", content: "Bolo Nārāyanā Jai Jai Vitthalā\n Sāi Nārāyanā Rangā Rangā Vitthalā\n * Govinda Vitthalā Rakumāyi Vitthalā\n Gopāla Vitthalā Pānduranga Vitthalā\n Shri Rangā Vitthalā Sāi Rangā Vitthalā" },

  { id: "1305", content: "Deena Bandhu Vitthalā Jai\n Karunā Sindhu Vitthalā Jai\n Vitthalā (3) Jai Pāndurangā Vitthalā Jai\n Āpatha Bāndhava Vitthalā Jai\n Anātha Rakshaka Vitthalā Jai\n Vitthalā (3) Jai Pāndurangā Vitthalā Jai" },

  { id: "1306", content: "Govinda Krishna Vitthalā\n Venu Gopāl Krishna Vitthalā\n Pānduranga Vitthalā Jaya Pandarinātha Vitthalā\n Govinda Vitthalā Gopāla Vitthalā\n Pānduranga Vitthalā Pandarinātha Vitthalā\n Vitthala Vitthala Pānduranga – 4" },

  { id: "1307", content: "Govinda Krishna Vitthalé\n Venu Gopāl Krishna Vitthalé\n Rangā Rangā Vitthalé Jaya Pāndurangā Vitthalé\n Govinda Krishna Vitthalé\n Venu Gopāl Krishna Vitthalé\n Rangā Rangā Vitthalé Jaya Pāndurangā Vitthalé" },

  { id: "1308", content: "Govinda Murāri Gopāla Murāri\n Vitthala Shri Hari Pāndurangā\n Hridaya Vihāri Hey Giridhāri\n Murahara Shauri Pāndurangā" },

  { id: "1309", content: "Hari Hari Vitthalā Haré Pāndurangā\n Haré Pāndurangā (3) Hari Hari Vitthalā\n * Deena Bandhu Deena Nāth Haré Pāndurangā\n Deva Deva Ādi Deva Haré Pāndurangā\n Haré Pāndurangā (3) Hari Hari Vitthalā" },

  { id: "1310", content: "Hari Hari Vitthalā Sāi Hari Vitthalā\n Hari Om Vitthalā Sāi Om Vitthalā\n * Shirdi Sāi Vitthalā\n Parthi Sāi Vitthalā\n Shirdi Sāi Vitthalā Parthi Sāi Vitthalā\n Purandara Vitthalā Pānduranga Vitthalā\n Vitthala (2) Vitthalā, Sāi Hari Vitthalā\n Vitthala (2) Vitthalā, Sāi Om Vitthalā\n Vitthala (2) Vitthalā, Vitthala (2) Vitthalā (x2)" },

  { id: "1311", content: "Hari Vitthalā Vitthalā Jai Vitthalā (2)\n Deena Bāndhavā Bhakta Poshakā\n Pānduranga Hari Vitthalā\n Bhajaré Mānasa Vitthalam\n Vishwa Vishnu Rupam\n Krishna Dāmodaram Rukmini Vallabham\n Pandarinātha Kamalākānta Shri Hari Vitthalā\n * Bhajaré Mānasa Mādhavam Murali Mohanam\n Veera Venkatesham Padmini Vallabham\n Sarasijā Nayana Nandānanda Vijaya Vitthalā" },

  { id: "1312", content: "Hey Kamala Vadana Sāi Rangā\n Kaivalya Pāndurangā (x2)\n Sāi Gopālā Ghana Ghana Neelā\n Kutila Kunthala Tribhuvana Pālā\n Brahmā Vishnu Maheshwara Rupā\n Māyā Lolā Brahma Swarupā" },

  { id: "1313", content: "Hey Krishnā Hey Krishnā\n Vitthala Jaya Pānduranga Pāndurangā\n Nanda Kishorā Shyāma Gopālā\n Shyāma Gopālā Madana Gopālā (x2)\n Vitthala Jaya Pānduranga Pāndurangā\n Pāndurangā (4) (x5)" },

  { id: "1314", content: "Hey Sāi Rangā Hey Pāndurangā\n Karunāntarangā Hridayāntarangā\n * Shri Rangā Rangā Jaya Rangā Rangā\n Ānanda Rangā Sadānanda Rangā" },

  { id: "1315", content: "Jai Hari Vitthalā Rangā Jai Hari Vitthalā\n Govinda Gopāla Rangā Jai Hari Vitthalā\n Pānduranga Vitthalā Krishna Nādā Vitthalā\n Govinda Gopāla Rangā Jai Hari Vitthalā\n Bhakta Vatsalā Ranga Krishnā Nādā Vitthalā\n Govinda Gopāla Ranga Jai Hari Vitthalā" },

  { id: "1316", content: "Jai Jai Rangā Vitthalā Hey Jai Jai Sāi Vitthalā\n Janam Janam Meré Sāth Raho Tum\n * Patita Pāvana Parama Dayāgana\n Pānduranga Vitthalā Hey Pandarināthā Vitthalā\n Pānduranga Vitthalā Hey Parthi Sāi Vitthalā\n Vitthalā Jai Vitthalā Jai Sathya Sāi Vitthalā" },

  { id: "1317", content: "Jai (2) Vitthalā Pāndurangā\n Jayatu Vitthalā Pandari Nāthā\n * Jai Jai Vitthalā Sāi Rangā\n Jayatu Vitthalā Parthi Nāthā" },

  { id: "1318", content: "Jai (2) Vitthalā Pānduranga Vitthalā\n Pundalika Varadā Pānduranga Vitthalā\n Jai (2) Vitthalā Pānduranga Vitthalā\n Pundalika Varadā Pānduranga Vitthalā" },

  { id: "1319", content: "Jai Pānduranga Jaya Vitthalā\n Jagadoddhārā Hari Vitthalā\n Pandari Nāthā Jaya Hari Vitthalā\n Purandara Vitthalā Parama Dayālā" },

  { id: "1320", content: "Jaya Hari Pānduranga Nārāyanā\n Nārāyanā Hari Nārāyanā\n * Keshava Mādhava Hari Nārāyana\n Vitthala Narahari Sāi Nārāyana\n Jaya Hari Nārāyanā Jaya Sāi Nārāyanā" },

  { id: "1321", content: "Jaya Pāndurangā Prabhu Vitthalā\n Jagadoddhārā Sāi Vitthalā\n Pānduranga Vitthalā Pandarinātha Vitthalā\n Shri Ramani Hridayāntaranga\n Mangala Kara Karunāntaranga\n Āshrita Deenajanavana Ranga\n Jagadoddhārā Sāi Vitthalā\n Pānduranga Vitthalā Pandarinātha Vitthalā – 6" },

  { id: "1322", content: "Jaya Rangā Pāndurangā\n Shri Rangā Parthishā\n Sāi Rangā Pandarishā\n Jaya Shirdishā Jaya Parthishā\n Pāvana Purushā Jaya Sāishā\n Jai Hari Vitthala Shri Hari Vitthala (x2)" },

  { id: "1323", content: "Kalyāna Rangā Kamaneeya Rangā\n Ānanda Rangā Sadānanda Rangā\n Hridayāntarangā Karunāntarangā\n Rakumāyi Rangā Sāisha Rangā\n Shirdisha Rangā Parthisha Rangā\n Ānanda Rangā Sadānanda Rangā" },

  { id: "1324", content: "Kasturi Rangā Kāveri Rangā\n Shri Ranga Ranga Rangā\n Kalyāna Rangā Karunāntarangā\n Shri Ranga Ranga Rangā\n Gauruda Gamana Rangā Shesha Shayana Rangā\n Shri Ranga Ranga Rangā" },

  { id: "1325", content: "Narahari Rangā Ré (2) Narahari Rangā Haré\n Narahari Rangā Haré\n Puttaparthi Rangā Shri Parthi Rangā\n Narahari Rangā Shri Rangā Rangā\n Shri Rangā Rangā Shri Rangā Haré" },

  { id: "1326", content: "Pandari Nivāsā Hey Pāndurangā\n Hey Parthivāsā Shri Sāi Devā\n * Deena Rakshakā Anātha Rakshakā\n Bhakta Vatsalā Hey Sāishwarā (x2)" },

  { id: "1327", content: "Pandari Ranga Vitthalā\n Jaya Pānduranga Vitthalā\n Kasturi Ranga Vitthalā\n Kamaneeya Ranga Vitthalā\n * Govinda Ranga Vitthala\n Gopāla Ranga Vitthalā\n Kalyāna Ranga Vitthalā\n Karunāntaranga Vitthalā\n Parthisha Ranga Vitthalā\n Prabhu Sāi Ranga Vitthalā" },

  { id: "1328", content: "Pāndurangā (2) Vitthalā Pāhé\n Deena Nāthā Karunā Nāthā\n Sāi Nātha Haré\n Pandarināthā Pāndurangā\n Vitthalā Pāhé" },

  { id: "1329", content: "Pānduranga Vitthalā Jai Pandarināthā Vitthalā\n Pānduranga Vitthalā Jai Pundarikākshā Vitthalā\n * Vitthalā Jai Vitthalā Purandara Vitthalā (x2)\n Vitthalā Jai Vitthalā Jai Rakumāyi Vitthalā" },

  { id: "1330", content: "Pānduranga Vitthalé Hari Nārāyana\n Hari Nārāyana Govindā – 3\n Bhajo Nārāyana Govindā\n Sāi Nārāyana Govindā" },

  { id: "1331", content: "Purandara Rangā Haré Vitthalā\n Pandari Rangā Haré Vitthalā\n * Narahari Rangā Haré Vitthalā\n Murahara Rangā Haré Vitthalā" },

  { id: "1332", content: "Rādhéshyāma Gopālā Rādhika Jeevana\n Shri Rangā\n Meghashyāma Gopālā Manamohana Sundara\n Shri Rangā\n * Pandarinātha Gopālā Pānduranga Shri Rangā\n Parthipurishā Gopālā Sāi Rangā Shri Rangā" },

  { id: "1333", content: "Rādhéshyāma Pānduranga Vitthalé Rakumāyi\n Pānduranga Purandara Vitthalé Rakumāyi\n Rādhéshyāma Pānduranga\n Vitthalé Rakumāyi (x2)\n Pānduranga Purandara Vitthalé Rakumāyi" },

  { id: "1334", content: "Rāma Krishna Hari Mukunda Murāri\n Pānduranga Hari Pānduranga Hari\n Deva Deva Devā Mahādeva Devā\n Ādideva Devā Brahma Vishnu Devā\n Ādideva Devā Sathya Sāi Devā\n Pānduranga Hari Pānduranga Hari" },

  { id: "1335", content: "Rangā Rangā Pāndurangā\n Rakumāyi Vitthalā Pāndurangā\n Mangala Murti Pāndurangā\n Vitthala Vitthala Pāndurangā\n * Singāra Sāi Pāndurangā\n Sathya Sāi Vitthalā Pāndurangā\n Omkāra Rupā Pāndurangā\n Om Hari Vitthalā Pāndurangā" },

  { id: "1336", content: "Rangā Rangā Shri Hari Rangā\n Pandarināthā Pāndurangā\n Natana Manohara Navanita Chorā\n Natavara Lālā Gopālā\n Hari Nārāyana Jaya Nārāyana\n Shri Vaikunta Shrinivāsā\n Govindā Jaya Govindā Bhaja Govindā Govindā\n Vitthala Vitthala Pāndurangā\n Jaya Jaya Vitthala Sāi Rangā" },

  { id: "1337", content: "Ranga Vitthalā Pānduranga Vitthalā\n Shri Ramani Hridayāntarangā\n Mangalakara Karunātaranga\n Āshisha Deenajanāvana Rangā\n Jagadoddhārā Hari Vitthalā" },

  { id: "1338", content: "Shri Rangā Haré Vitthalā\n Sāi Rangā Haré Vitthalā\n Hey Dayānidhé Vitthalā\n Hey Kripānidhé Vitthalā\n Hey Sāi Prabhu Vitthalā\n Sathya Sāi Prabhu Vitthalā" },

  { id: "1339", content: "Shri Rangā Rangā Vitthalā Vitthalā\n Rakumāyi Rangā Vitthalā Vitthalā\n Pandari Rangā Vitthalā Vitthalā\n Pānduranga Vitthalā Vitthalā\n Deena Bandhu Vitthalā Jai Sāi Nāthā Vitthalā\n Parthi Rangā Vitthalā Jai Jai Sāi Vitthalā" },

  { id: "1340", content: "Shri Rangā (2) Rangā Rangā Shri Rangā (x2)\n Kāveri Tatha Vāsa Kasturi Rangā\n Kārunya Lāvanya Karunāntarangā\n Jaya Pāndurangā Jaya Sāi Rangā (x2)" },

  { id: "1341", content: "Vitthala Bhajo Vitthala Bhajo (x2)\n Pandarināthā Pānduranga Vitthala Bhajo\n Parthi Vāsā Sāi Devā Vitthala Bhajo\n Shirdi Vāsā Sāi Devā Vitthala Bhajo" },

  { id: "1342", content: "Vitthalā Hari Vitthalā (x3)\n Pāndurangā Vitthalé Hari Nārāyana\n Purandara Vitthalé Hari Nārāyana\n Hari Nārāyana Bhajo Nārāyana\n Sāi Nārāyana Satya Nārāyana" },

  { id: "1343", content: "Vitthalā Jai Vitthalā Pānduranga Vitthalā\n Pānduranga Vitthalā Sāi Ranga Vitthalā\n * Pānduranga Sāi Ranga Sāi Ranga Pānduranga\n Pānduranga Sāi Ranga Sāi Ranga Pānduranga\n Pānduranga Vitthalā Sāi Ranga Vitthalā" },

  { id: "1344", content: "Vitthalā Nārāyanā\n Nārayanā Sāi Nārāyanā\n * Madhusudanā Nārāyanā\n Shri Shesha Shayanā Nārāyanā\n Nārāyanā Sāi Nārāyanā\n Vitthala Vitthala Pānduranga Vitthala – 4" },

  { id: "1345", content: "Vitthalā Nārāyanā Hari Vitthalā Nārāyanā\n Vishwādhārā Sāi Nārāyanā\n * Pandari Nāthā Hari Nārāyanā\n Purandara Rangā Bhajo Nārāyanā\n Rakumāyi Vitthalā Sāi Nārāyanā\n Ranga Sāi Vitthalā Satya Nārāyanā" },

  { id: "1346", content: "Vitthala (2) Hari Vitthalā\n Vitthala (2) Nām Bhajo Hari Vitthalā\n Pānduranga Vitthalā Vitthala Vitthala Nām\n Vitthala (2) Nām Bhajo Hari Vitthalā\n Vitthala (2) Sāi Vitthalā" },

  { id: "1360", content: "Anila Kumārā Hanumantā\n Anjani Putrā Shri Anjaneyā\n * Vānara Sevita Vāyu Kumārā\n Aganita Gunagana Ati Balavantā\n Shri Rām Dootā Kshritajana Pālā\n Shri Rām Bhaktā Abhaya Pradātā" },

  { id: "1361", content: "Anjana Putrā Ānjaneyā Ati Balavantā Ānjaneyā\n Sanjivirāyā Ānjaneyā\n Shri Rāma Bhaktā Ānjaneyā\n * Bhadra Shareerā Ānjaneyā\n Vāyu Kumārā Ānjaneyā\n Kanjam Pādam Ānjaneyā\n Dukha Nivārana Ānjaneyā" },

  { id: "1362", content: "Anjana Suta Ānjaneyā\n Vāyu Putrā Vātātmaja\n Vānara Uttama Balabheemā\n Rāma Doota Ranadheerā" },

  { id: "1363", content: "Anjanaiyā Veerā Hanumanta Surā\n Vāyu Kumārā Vānara Veerā\n Shri Rām Jai Rām Jai Jai Rām\n Seetārām Jai Rādhéshyām (x4)" },

  { id: "1364", content: "Bajaranga Bali Baladhām Nāthā\n Sankatā Mochanā\n * Keshari Nandana Mangala Rupā\n Sakala Gunālaya Hanumanta Veerā" },

  { id: "1365", content: "Baladhām Hanumantā\n Bajaranga Bali Devā\n Muni Nara Vandita Parama Yogishā\n Lankāpuri Dahanā\n Anjani Putra Raghupati Priyā\n Jai Jai Mahāveerā\n Māruti Nandana Vaidehi Priyā\n Jai Jai Balaveerā" },

  { id: "1366", content: "Hey Rām Dootā Hey Rāma Bhaktā\n Hey Rāma Dāsā Namo Namo\n Seetā Mātā Shoka Vināshā\n Anātha Nāthā Namo Namo\n Mārutirāyā Mahānubhāvā\n Ati Balavantā Namo Namo\n Veera Ānjaneyā Namo Namo" },

  { id: "1367", content: "Jai Jai Anjani Kumāra Hanumān Ji Ki Jai\n Hanumān Ji Ki Jai Hanumān Ji Ki Jai\n * Seetā Rām Ji Ki Jai Rādhéshyām Ji Ki Jai\n Jai Jai Pavana Kumāra Hanumān Ji Ki Jai\n Hanumān Ji Ki Jai Hanumān Ji Ki Jai\n Jai Jai Shiva Tripurāri Hanumān Ji Ki Jai" },

  { id: "1368", content: "Jai Jai Hanumān Jai Hanumān\n Mārutirāyā Jai Hanumān\n Shri Rāma Doota Jai Hanumān\n Jai Bajarangi Jai Hanumān\n Jai Jai Hanumān Jai Hanumān" },

  { id: "1369", content: "Jai Jai Hanumān Jaya Hanumān (x2)\n Mārutirāyā Jaya Hanumān\n Mahānubhāvā Jaya Hanumān\n Vāyu Kumārā Jaya Hanumān\n Vānara Veerā Jaya Hanumān\n Anjani Putrā Jaya Hanumān\n Ati Balavantā Jaya Hanumān\n Shri Rām Dootā Jaya Hanumān\n Shri Rām Bhaktā Jaya Hanumān" },

  { id: "1370", content: "Jai Kapisha Jaya Hanumantā\n Jaya Ho (2) Sāi Anjanaiyā\n Rām Lakshman Priya Mahāveerā\n Rāha Dikhāo Prabhu Sāishā" },

  { id: "1371", content: "Jaya Ānjaneya Jaya Rāma Dootā\n Sharanam Prabho Sharanam\n Vānara Veerā Vāyu Kumārā\n Ranadheerā Sharanam\n Rāmapriyé Sharanam\n Sathya Sāi Hanumān Sharanam\n Rām Rām Jaya Jaya (3) Rām (x2)" },

  { id: "1372", content: "Jaya Bajaranga Jaya Balaveera\n Jaya Hanumān Jaya Bolo (x2)" },

  { id: "1373", content: "Jaya Hanumān Bajaranga Bali\n Sankata Mochana Jai Jai Kapish\n Jaya Hanumantā Hey Mahāveer\n Seetā Shoka Nāshana Jai Jai Kapish\n Pavana Putrā Anjanaiyā\n Rām Sahāré Jai Jai Kapish\n Bhimā Sodara Mahābali\n Sab Dukha Tāré Jai Jai Kapish" },

  { id: "1374", content: "Jaya Hanumān (2) Mārutirāyā Jaya Hanumān\n Jaya Hanumān (2) Ānjaneyā Jaya Hanumān\n Jaya Hanumān (2) Rām Dāsā Jaya Hanumān\n Jaya Hanumān (2) Rām Doota Jaya Hanumān\n Jaya Hanumān (2) Mahānubhāvā Jaya Hanumān\n Jaya Hanumān (2) Ānjaneya Jaya Hanumān" },

  { id: "1375", content: "Jaya Hanumān Mahāveera\n Vāyu Nandanā Abhayankarā\n Vaidehi Priya Hanumān\n Seetā Shoka Nāshana Tu\n Lankābhayankara Tu\n Vāyu Nandanā Abhayankarā\n Vaidehi Priya Hanumān" },

  { id: "1376", content: "Jaya Ho (2) Rāma Bhaktā Hanumān Ki Jai\n Jaya Ho (2) Pavana Putra Kapi Rupa Ki Jai\n Anjani Putrā Abhaya Māruti\n Pavana Putrā Amara Māruti\n Rāma Dootā Ajara Māruti\n Sukshma Rupā Akhanda Māruti\n Vajra Swarupā Prachanda Māruti (x2)" },

  { id: "1377", content: "Jaya Vijayee Bhava Jaya Vijayee Bhava\n Bhava Bhaya Nāshā Hanumantā\n Pavana Kumārā Pāvana Veerā\n Ati Balavantā Hanumantā\n Anjani Putrā Veera Ānjaneyā\n Niranjanā Vijayee Bhava (x2)" },

  { id: "1378", content: "Jo Māruti Nanda Sahāya Karé\n Phir Koyi Sahāy Milé Na Milé\n Jo Anjani Putra Sahāya Karé\n Phir Koyi Sahāy Milé Na Milé\n Phir Koyi Sahāy Milé Na Milé\n * Chāhé Kāla Karāla Darāvé Ousé\n Chāhé Pāpa Ki Jwāl Jalāyé Ousé\n Yadi Rām Kā Doota Sahāya Karé\n Phir Koyi Sahāy Milé Na Milé (x2)\n * Jin Ké Man Mandir Rām Basé\n Priya Lakshman Ké Sang Khubha Raché\n Hanumān Vohi Jo Sahāya Karé\n Phir Koyi Sahāy Milé Na Milé (x2)" },

  { id: "1379", content: "Karunānidhé Hanumantā\n Hey Asādhya Sādhakā\n Kripānidhé Balavantā\n Hey Apāra Parākramā\n Shri Rām Bhaktā Shri Rām Swarupā\n Shri Rām Dootā Sangeeta Rasikā\n Rāma Geetāmrita Nāmāmrita\n Premāmrita Hanumantā" },

  { id: "1380", content: "Lankāpuri Dahanā Seetā Shoka Nāshanā\n Kapisha Hanumantā\n Buddhi Swarupā Jaya Mahāveerā\n Sura Muni Nara Vanditā\n Rāmchandra Priyā\n Anjani Bālā Bhāgya Vidhātā\n Bhima Sodara Vāyu Nandana\n Sura Muni Nara Vanditā\n Rāmchandra Priyā" },

  { id: "1381", content: "Pavana Suta Hanumān Ki Jai\n Siyāpati Rāmchandra Ki Jai\n * Parākrama Ānjaneya Ki Jai – 3\n Parthipuri Sāi Nātha Ki Jai" },

  { id: "1382", content: "Prabhu Rāmachandra Ké Dootā\n Hanumantā Ānjaneya\n Hanumantā (3) Ānjaneyā\n Hey Pavana Putra Hanumantā\n Balabheemā Ānjaneyā\n Balabheemā (3) Ānjaneyā" },

  { id: "1383", content: "Rām Bhakta Hanumān Teri\n Jaya Ho Veera Mahāna\n Pavana Putra Hanumān Teri\n Jaya Ho Veera Mahāna\n Rām Ki Mahimā Tu Ne Jāni\n Ham Murakha Ham Hein Agnāni\n Dedo Ham Ko Gnāna Teri\n Jaya Ho Veera Mahāna - Prabhu" },

  { id: "1384", content: "Rāma Dhyāna Nirata Ānjaneyā\n Rāma Sevāmritā Hanumantā\n Swāmi Mukhya Prānā Pavamānā\n Daitya Kulāntakā Mahāveerā\n Anjanā Trivāsā Gunavantā\n Dāsānudāsā Hanumantā\n Shri Rāma Dāsā Hanumantā\n * Māyā Vibhanjana Balabheemā\n Māra Vijaya Ghana Rāma Dootā\n Muni Guna Kapivara Vātātmajā\n Dāsānudāsā Hanumantā\n Shri Rāma Dāsā Hanumantā" },

  { id: "1385", content: "Rām Kaho Sāi Bhajana Karo\n Jaya Hanumāna Ki Bhajana Karo\n Ayodhyā Jaya Sāi Shānta Karo\n Parama Pāvanā Tirtha Karo - Bābā" },

  { id: "1386", content: "Rām Lakshman Jānaki Jai Bolo Hanumān Ki\n Anjani Putrā Balabheemā Ānjaneya Balabheemā\n Balabheema (6) Balabheemā\n Vāyu Kumārā Balabheemā\n Vānara Veerā Balabheemā\n Balabheema (6) Balabheemā\n Parthipurishā Sāi Rāmā\n Pāvana Purushā Sāi Rāmā\n Sāi Rām (6) Sāi Rāmā" },

  { id: "1387", content: "Rām Lakshman Jānaki Jai Bolo Hanumān Ki\n Rām Lakshman Jānaki\n Jai Bolo Hanumān Ki (x5)" },

  { id: "1388", content: "Rām (4) Pāda Sevitam\n Rām (4) Doota Pāhinam\n Seetā Shoka Nāshanam Anjanātmajam\n Para Hridatpriyam Sāi Vāyu Nandanam\n Rām Rām Shri Rām Rām Rām (x5)" },

  { id: "1389", content: "Seetā Rakshaka Rāma Dootā\n Lankā Dahanā Rāvana Mardana\n Shri Rāma Dāsā Dayānidhé\n Sarva Mangalā Ānjaneyā" },

  { id: "1390", content: "Veera Dheera Māruti Gambheera Māruti\n Bheema Rupa Māruti Pavana Putra Māruti\n Rām (5) Japé Māruti – 3\n Bheema Rupa Māruti Parthi Vāsa Māruti" },

  { id: "1391", content: "Veera Hanumānā Ati Balavānā Rām Nām\n Rasiyā Ré Hey Sāi Mana Basiyā Ré\n Rām Lakshmana Jānaki\n Jai Bolo Hanumān Ki (x2)\n * Raghupati Rāghava Rājā Rām\n Patita Pāvana Seetā Rām (x2)" },

  { id: "1392", content: "Veera Māruti Gambheera Māruti\n Veera Māruti Ati Dheera Māruti\n Doota Māruti Rāma Doota Māruti\n Dāsa Māruti Rāmadāsa Māruti\n Geeta Māruti Sangeeta Māruti\n Bhakta Māruti Rāma Bhakta Māruti" },

  { id: "1400", content: "Āndavané Sarvanané Shiva Gurunādā\n Āramuga Shanmugané Shiva Gurunādā\n Shiva Gurunādā Shiva Gurunādā\n * Vel Murugā Māl Marugā Shiva Gurunādā\n Mayil Veerā Vadivazhagā Shiva Gurunādā\n Shiva Gurunādā Shiva Gurunādā" },

  { id: "1401", content: "Āramugā Vadivelavā\n Āndavané Sathya Sāi Vā\n Neela Mayil Mélé Ādi Vā\n Nādesané Bāla Odi Vā (x2)\n Sharanam Sharanam Vallisha Sharanam\n Sharanam Sharanam Sāisha Sharanam" },

  { id: "1402", content: "Devā Murugā Varugā Singāra Velā Varugā\n Vā Vā Murugā Velā\n Vanna Mayil Vā Vā Varugā Murugā\n Parthipurishané Varugā\n Prashānti Vāsané Varugā\n Vā Vā Sāishā Devā Vettrivadivelané Sāi Murugā" },

  { id: "1403", content: "Deva Senāpaté Skandā Subrahmania Pāhimām\n Pāhi Parameshwarā Skandā\n Subrahmania Pāhimām\n Subrahmania Shanmukha Nāthā\n Sāi Nāthā Karunā Sindhu\n Pāhi Parameshwarā Skandā\n Subrahmania Pāhimām" },

  { id: "1404", content: "Gurunāda Kāvalana Vadivelā\n Kumāra Kadambā Shiva Bālā\n Umai Ammai Selvā Tanigāsalā\n Kundrudorum Ādivarum Kumaraiyā\n Subrahmania Shanmugané Vettrivadivelavané\n Gnāna Guru Desigané Kumaraiyā" },

  { id: "1405", content: "Hara Hara Shiva Shiva Shanmugā\n Karunai Kadhalé Sāi Shanmugā\n * Pazhani Giri Nāthā Parthipurishwara\n Parangkundram Azhagā Devā Amarā" },

  { id: "1406", content: "Kandā Kumarā Vadivelā\n Gauri Putrā Vadivelā\n * Kārtikeyā Karunā Sāgara\n Deena Sharanyā Vadivelā\n Shri Sāi Nāthā Vadivelā" },

  { id: "1407", content: "Kandayyā Kandayyā Vel Murugaiyā\n Vel Vel Velāyudha - Vettri\n Sāi Murugaiyā Haro Harā\n Haro Harā Sāi Haro Harā\n Kandappā Murugesā Velappā Mayuresā\n Vel Vel Sāi Nādā\n Sāi Murugaiyā Haro Harā\n Haro Harā Sāi Haro Harā" },

  { id: "1408", content: "Kārtikeyā Kaliyuga Varadā\n Kandā Murugā Subrahmania\n Om Gurunādā Parthipurishā\n Mohana Vallisha Subrahmania\n Mayileri Vā Vā Māyon Marugā\n Asura Samhārā Subrahmania" },

  { id: "1409", content: "Kārtikeyā Kandā Kumarā\n Mayil Vāganane Murugaiyā\n * Pazhaniyilvārum Parama Dayālā\n Vallideviyin Manavālā\n Devagar Talaivāsurasamhārā\n Parthi Vāsā Sāi Nāthā" },

  { id: "1410", content: "Karunā Sāgara Kārtikeyā\n Kāmita Phala Dāyaka Valli Nāthā\n * Skandā Kumarā Subrahmania\n Devādi Devā Deena Sharanyā\n Parama Niranjana Parthi Nāthā\n Parama Niranjana Sāi Nāthā" },

  { id: "1411", content: "Karunākara Shekhara Kārtikeyā\n Gaurishwara Tanayā Gananātha Sodarā\n * Kaliyuga Vandanā Kalimala Nāshanā\n Shri Vallikāntanā Shiva Gurunāthanā\n Haro Harā (2) Shanmukha Nāthā" },

  { id: "1412", content: "Karunāmayā Kārtikeyā\n Kaivalya Dātā Hey Swāmināthā\n Himagiri Nandini Priya Kumārā\n Ihapara Sukhadāyi Bhava Bhaya Hārā\n Shraranāgata Priya Shanmukha Nāthā\n Sharanam Sharanam Shambho Kumārā" },

  { id: "1413", content: "Murugā Māl Marugā Shanmugā\n Kumarā Guhané Kārtikeyā\n * Shankari Tanayā Saravana Nāthā\n Shambho Shankara Pārvati Bālā\n Parama Dayālā Pazhani Girishā\n Parthipurishā Sharanam Sharanam" },

  { id: "1414", content: "Murugā Mohana Tanga Mayil Vāhana\n Saravanabhavané Velāyudha\n Hey Shiva Bālā Asura Samhārā\n Parthipurishwara Velāyudha" },

  { id: "1415", content: "Murugā (2) Shakti Vel Murugā\n You Are My Shining Star\n Shakti Vel Murugā Vadivel Murugā\n Come To Me Lord Murugā\n Murugā Sāi Rām Murugā Sāi Rām\n When I Need You Murugā,\n You Are There Murugā\n To Take All My Troubles Away\n You Are My Sāi Murugā\n You Are My Light Murugā\n Vā Vā Vadivelavā\n Murugā Sāi Rām Murugā Sāi Rām" },

  { id: "1416", content: "Murugā Murugā Sharanam Sharanam\n Mayil Vāhanané Sharanam Sharanam\n Kandā Kadambā Sharanam Sharanam\n Kaliyuga Varadā Sharanam Sharanam" },

  { id: "1417", content: "Murugā Saravana Shanmugā\n Murugā Sāi Shanmugā\n * Shiva Shakti Bālā Mohanā\n Kārtikeya Bālā Sundarā\n Shakti Vadivelā Skandā\n Kaliyuga Varadā Sāishā" },

  { id: "1418", content: "Pacchai Mayil Yerivarum Vel Murugaiyā\n Vadivel Murugaiyā\n Parthipuri Nādané Ni Vel Murugaiyā\n Vadivel Murugaiyā\n Asoorané Samhārané Ni Vel Murugaiyā\n Vadivel Murugaiyā\n Sathya Sāi Kumarané Ni Vel Murugaiyā\n Vadivel Murugaiyā\n Vel Vel Murugā Vadivel Azhagā (x2)" },

  { id: "1419", content: "Pazhani Āndavā Pazhani Āndavā\n Parāshakti Bālagané Pazhani Āndavā\n Pazhani Āndavā Parthi Vihārā\n Neela Mayil Vel Murugā\n Kola Mayil Māl Marugā\n Saravanabhava Shanmugané Sathya Sāi Āndavā\n Parāshakti Bālagané Pazhani Āndavā\n Pazhani Āndavā Parthi Vihārā" },

  { id: "1420", content: "Pazhani Āndavā Yengal Pazhani Āndavā\n Tenpazhani Nāyagane Pazhani Āndavā\n Unpugarai Pārivandrum Pazhani Āndavā\n Yempiraigal Tiratiruvāi Pazhani Āndavā\n Anbānadaivam Neeyé Pazhani Āndavā\n Chinmaya Rupā Sāi Pazhani Āndavā" },

  { id: "1421", content: "Pazhani Malai Āndavā Shanmuga Kuga\n Pazhamudhir Solaiyil Vadivazhagā\n * Veeravel Murugā Om Saravanā\n Parthipuri Nāyakā Sāi Shanmugā\n Sathya Sāi Shanmugā" },

  { id: "1422", content: "Pazhani Malai Āndi Vela Vadivelavā\n Pannirugai Āndavā Sāi Velavā\n Pannirugai Āndavā Gnāna Velavā\n Pazhani Malai Āndi Swāmi Malai Āndi\n Solai Malai Āndi Vela Vadivelavā\n Pannirugai Āndavā Sāi Velavā\n Pannirugai Āndavā Gnāna Velavā\n Azhagiya Bālané Āramuga Nādané\n Ānanda Rubané Sāi Velavā\n Saravanabhava (2) Saravana Nādā" },

  { id: "1423", content: "Pazhani Murugā Vela Murugā\n Sharanam Sharanam Vela Murugā\n Ganapati Sodara Vela Murugā\n Kārtikeyā Vela Murugā\n Subrahmania Vela Murugā\n Hara Haro Harā Murugā Hara Haro Harā\n Haro Harā (2) Hara Haro Harā" },

  { id: "1424", content: "Pazhani Vāsā Gnāna Vela Murugā\n Kaliyuga Varadā Shiva Bālā\n * Saravanabhavané Haro Murugā\n Shiva Subrahmania Haro Murugā\n Hara Hara Murugā Shiva Shiva Murugā\n Shiva Shiva Murugā Sathya Sāi Murugā" },

  { id: "1425", content: "Sāi Nādā Subrahmania Pazhani Āndi Sundarā\n Nyāna Velā Muttu Kumarā Parthi Nādā Sundarā\n Tanga Vela Vettri Veera Vel\n Shiva Shakti Vela Sāi Anbu Vel\n Mayilum Neeyum Ādi Vā Vā\n Mayilum Neeyum Odi Vā Vā\n Nyāna Velā Muttu Kumarā Parthi Nādā Sundarā" },

  { id: "1426", content: "Saravana Hara Shiva Shanmukha Nāthā\n Pārvati Nandana Pranava Swarupā\n * Jyoti Swarupa Gnāna Pradātā\n Devaganārchita Jaya Kārtikeya\n Mayura Vāhana Pazhani Nivāsā\n Parthipurishwara Shri Sāi Devā\n Shri Sāi Devā Sathya Sāi Devā" },

  { id: "1427", content: "Saravanabhava Kuga Sāi Murugā\n Yengal Shiva Shakti Bālā Sāi Murugā\n Pranava Swarupā Sāi Murugā\n Parthipuri Sathya Sāi Murugā\n Purāna Purushā Sāi Murugā\n Pāvana Purushā Sāi Murugā\n Sharanam Sharanam Sāi Murugā\n Shanmuga Nāthā Sāi Murugā" },

  { id: "1428", content: "Saravanabhava Sathya Sāi Nāthā\n Satchidānandā Shiva Sāi Nāthā\n * Kārtikeyā Kandā Kumarā\n Karunānidhiyé Kaliyuga Devā\n Pranavākārā Parthipurishā" },

  { id: "1429", content: "Saravanabhava Subrahmania Sāishā\n Shanmugā Shanmugā Odi Vā\n * Kandappā Murugesā Vā Vā Vā\n Velappā Mayuresā Vā Vā Vā\n Muttu Kumaresā Vā Vā Vā\n Odi Vā Ādi Vā Vā Vā Vā" },

  { id: "1430", content: "Sathya Sāi (2) Bol, Sathya Sāi (2) Bol\n Sathya Sāi (2) Sāi Bābā Sathya Sāi\n Murugā Haro Harā Shirdi Sāi Bābā\n Murugā Haro Harā Parthi Sāi Bābā\n Vel Vel Murugā Shakti Vel Murugā (x2)\n Shirdishwarā Haro Harā\n Parthishwarā Haro Harā\n Vel Vel Murugā Vadivel Murugā (x2)" },

  { id: "1431", content: "Shanmuga Shanmuga Sāi Sundara\n Shiva Saravana Bhava Om\n Guru Saravana Bhava Om\n Mangala Gauri Shankara Nandana\n Shiva Saravana Bhava Om\n Guru Saravana Bhava Om\n Parthi Vihāri Pranavākāri\n Shiva Saravana Bhava Om (x2)\n Guru Saravana Bhava Om" },

  { id: "1432", content: "Shanmuga (2) Vadivelavā\n Shankari Shiva Bālā Sāishwarā\n Sāishwarā Sāishwarā\n Parthipurishwara Subrahmania\n Aum Shiva Subrahmania Om Sāi Subrahmania\n Hara Hara Murugā Sāishwarā" },

  { id: "1433", content: "Sharanam Kugāya Sharanam Kugāya\n Saravanabhava Kuga Haro Harā\n Gajamukha Sodara Kārtikeyā\n Sharanam Sharanam Haro Harā\n Sharanam Kugāya Sharanam Kugāya\n Saravanabhava Kuga Haro Harā\n Gajamukha Sodara Kārtikeyā\n Sharanam Sharanam Haro Harā" },

  { id: "1434", content: "Sharanam Pazhani Nāda Murugā\n Sāi Sharanam Shiva Kumāra Skandā\n Vela Murugan Subrahmaniam Parthi Nādā - Sāi\n Velāyudha Kārtikeya Shanmuga Nādā - Sāi\n * Mohana Rubā Devasenā Valli Nādā - Sāi\n Mohānaga Mayil Vāhanané Swāmi Nādā - Sāi" },

  { id: "1435", content: "Shiva Kumārane Shakti Bālane Vā Vā Vā\n Saravanabhava Kuga Shanmuga Velā Vā Vā Vā\n Omkāra Tattuvame Ni Vā Vā Vā\n Parthipurishā Sāi Nādā Vā Vā Vā\n Kandā Vā Vā Vā\n Velā Vā Vā Vā\n Sāi Vā Vā Vā" },

  { id: "1436", content: "Shiva Priya Nandana Bhava Bhaya Bhanjana\n Gauri Priya Suta Om Shadānana\n * Hey Mayurāsana Smita Vadanā\n Sindura Vadanā Shubha Charanā\n Shanmukha Nāthā Subrahmania Devā\n Shanmukha Nāthā Sathya Sāi Devā" },

  { id: "1437", content: "Shiva Saravanabhava Shirdipurishwara\n Parthipuri Nāyaka Pārvati Bālā\n Kandā Shanmugā Kuga Ānanda Velavā\n Parthipuri Nāyaka Pārvati Bālā" },

  { id: "1438", content: "Subrahmania Gurunādā\n Āramuga Saravanabhava Kuga Sāi Nādā\n Pannirugai Āndava Pacchai Mayil Vāgana\n Parthipuri Shiva Subrahmania\n Shakti Umai Bālā Sathya Sāi Nādā\n Swāmi Malai Kumaresā" },

  { id: "1439", content: "Subrahmania Nādā Āramuga Velā\n Asura Samhārā Deena Dayālā\n Sendil Vadivela Sundara Gana Bālā\n Solai Malai Azhagā Valli Manālā\n Asura Samhārā Deena Dayālā" },

  { id: "1440", content: "Subrahmania Shiva Shakti Velā\n Shiva Shiva Sāi Guru Nādā\n Parthipurishā Asura Samhārā\n Vettrivelāyudha Pāpa Vināshā\n Hara Hara Sāi Guru Nādā" },

  { id: "1441", content: "Subrahmaniam Subrahmaniam\n Shanmuga Nādā Subrahmaniam\n Subrahmaniam Subrahmaniam\n Sāi Nādā Subrahmaniam\n Shiva (4) Subrahmaniam,\n Hara (4) Subrahmaniam\n Shiva (2) Hara (2) Subrahmaniam,\n Hara (2) Shiva (2) Subrahmaniam\n Shiva Saravanabhava Subrahmaniam\n Guru Saravanabhava Subrahmaniam\n Shiva (2) Hara (2) Subrahmaniam,\n Hara (2) Shiva (2) Subrahmaniam\n Shiva (2) Hara (2) Subrahmaniam\n Sāi Nāthā Subrahmaniam" },

  { id: "1442", content: "Swāmināthā Sāi Karunā Sindhu Swāmi\n Pazhani Girivāsā Pārvati Nandanā\n Pranavākārā Shiva Subrahmania\n Skandā Kumara Valli Nāyaka\n Deenajanāvana Parthi Nāyaka" },

  { id: "1443", content: "Tenpazhani Nādanikku Hara Haro Harā\n Yerumayil Velanikku Hara Haro Harā\n Hara Haro Harā Murugā Hara Haro Harā\n Hara Haro Harā Shanmugā Hara Haro Harā\n Swāmimalai Nādanikku Hara Haro Harā\n Tiruchendur Velanikku Hara Haro Harā\n Parthipuri Nādanikku Hara Haro Harā\n Shakti Vadivelanikku Hara Haro Harā" },

  { id: "1444", content: "Umā Maheshwara Kumāra Gurubara\n Pazhani Subrahmania\n Bhaktajana Priya Pārvati Bālā Bāla Subrahmania\n Shiva (4) Shivāya Namah Om,\n Hara (4) Harāya Namah Om (x2)\n Shiva (6) Shanmugā\n Hara (6) Shanmugā" },

  { id: "1445", content: "Vadivela Azhagā Murugā\n Vimalā Amarā Shanmugā\n Saravanabhava Kuga Shakti Velā (x2)\n Sathya Sāi Āndavā Shakti Velā\n Sathya Sāi Āndavā Parthi Lolā" },

  { id: "1446", content: "Vadivela Kandappā Murugesané\n Sāi Kumaresa Parthisha Azhagesané\n Vadivela Kandappā Murugesané\n Vadivela Sundaresa Subrahmanyané\n Parthipuri Vāsané Nee Mayiloné\n Sāi Kumaresa Parthisha Azhagesané" },

  { id: "1447", content: "Valli Malai Nādā Asura Samhārā\n Vettrivelāyudha (Shiva Bālā (3))\n * Sendil Velava Arupadai Veerā\n Saravanabhava Kuga (Shiva Bālā (3))" },

  { id: "1448", content: "Valli Mohanā Sāi Mayil Vāhanā\n Āramuga Kandané Sundara Vadanā\n Kumarā Gurubara Sāishā Vadivelavā\n Murugā Hari Marugā Sathya Sāi Āndavā (x2)" },

  { id: "1449", content: "Vā Vā Murugaiyā Vadivela Azhagā\n Vā (3) Kumarā Tiru Kārtikeyā\n Sāi Sāi (x3)\n Singāra Velā Shiva Shakti Bālā\n Sangeeta Lolā Sathya Sāishā\n Sāi Sāi (x3)" },

  { id: "1450", content: "Vel Murugā Māl Marugā\n Saravanabhava Kuga Shakti Vadivelā\n Pazhani Girishā Vel Murugā\n Prashānti Nilaya Sāi Murugā" },

  { id: "1451", content: "Vel Murugā (2) Vel, Vel Murugā (2) Vel\n Vel Murugā Māl Pazhani Vel Murugā Vel Vel\n * Vel Vel Murugā – Vettrivel Murugā\n Vā Vā Vadivelā Vel Murugaiyā Vā Vā Vadivelā\n Vel Vel Murugā Āndavane\n Vel Vel Murugā – Vettrivel Murugā" },

  { id: "1452", content: "Vel Vel Murugā Vadivela Murugā\n Vadivela Murugā Vettrivela Murugā\n Vettrivel Murugā Veeravel Murugā\n Veeravel Murugā Shaktivel Murugā\n Hara Hara Murugā Shiva Shiva Murugā\n Hara Shiva Murugā Sathya Sāi Murugā" },

  { id: "1453", content: "Vel Vel Murugā Vadivela Murugā\n Vel Vel Murugā Gnānavela Murugā\n Vel Vel Murugā Kandavela Murugā\n Vel Vel Murugā Vadivela Azhagā\n Murugā (4)\n Murugā (2) Sathya Sāi Murugā (x2)\n Murugā (2) Vadivela Azhagā" },

  { id: "1454", content: "Velāyudha Sāi Velāyudha\n Velavane Sāi Velāyudha\n Vel Murugā Māl Marugā Velāyudha\n Vettrivadivelavané Velāyudha\n Kandanikku Vel Vel Muruganikku Vel Vel" },

  { id: "1455", content: "Vettrivelāyudha (3) Azhagā\n Vettrivelāyudha Sāi Shanmuga\n Shiva Subrahmania Azhagā\n Pazhani Girishā Kumāresā\n Tirumāl Marugā Sāi Murugesā\n Swāmi Malai Āndavā Azhagesā" },

  { id: "1500", content: "Come Come To Me You Children Of The World\n Sāi Is Father Mother To All\n Love All Serve All This Is The Way To God\n * Love Gives And Forgives One And All\n Self Gets And Forgets One And All (x2)" },

  { id: "1501", content: "Divine Father Soham You And I Are One\n Jesus Christ Soham You And I Are One\n Sāi Bābā Soham You And I Are One\n Soham Soham Soham You And I Are One" },

  { id: "1502", content: "Divine Mother (3) Sāi Mā,\n Divine Mother (3) Sāi Mā\n Mā Sāi Mā, Mā Sāi Mā\n You Are Loving Sāi Mā You Are Caring Sāi Mā\n Satya Dharma Shānti Prema Ānanda Rupini Mā\n Mā Sāi Mā, Mā Sāi Mā\n Light The Lamp Of Love In Our Heart Sāi Mā\n You Are Here You Are There\n You Are Everywhere\n Mā Sāi Mā, Mā Sāi Mā" },

  { id: "1503", content: "God Is Within You So Says Sāi Bābā\n Listen To The Voice Of Silence Within\n He Is In All Of Us\n The Light Is Within You So Says Sāi Bābā\n Open Your Heart To Your Fellowmen\n And Let His Love Flow Out\n God Is Love God Is Light\n God Is Light God Is Love" },

  { id: "1504", content: "He Was Born In The Village Of Puttaparthi\n In A Land Far Across The Sea\n On A Beautiful November Morn\n When Music Divine Played On\n Sathya Nārāyanā Sathya Nārāyanā\n Sathya Nārāyanā Shri Sathya Sāi Bābā\n A Saviour Born To Reedeem Us All\n Little Sathya Nārāyanā\n Our Lord Divine Come To Show Us The Way\n Shri Sathya Sāi Avatār" },

  { id: "1505", content: "I Bow To Thy Lotus Feet My Lord\n I Pray To Be Close To You Dear My Lord\n Sāi Rāmā Sāi Krishnā Sāi Allāh Sāi Jesus\n * You Are Truth You Are Peace\n You Are Love And Compassion\n You Are My Teacher You Are My Preacher\n You Are My Guide For Liberation" },

  { id: "1506", content: "I Keep Feeling Your Love In Me\n Over And Over Again\n And It’s Sweeter And Sweeter\n As The Days Go By\n Oh What A Love Between My Lord And I\n My Lord And I My Sāi And I (x2)" },

  { id: "1507", content: "I Love You Lord I Love You\n You And I Are One\n Shirdi Bābā Shri Sathya Sāi Nārāyana Sāi Bābā\n Let All Sing The Name Of Sāi\n Let Us Pray The Lord\n He Has Come On Earth For Us\n He Is Our Lord\n Let’s Rejoice And Follow Him\n Listen To His Words\n Do Not Look Outside For Him\n He Is In Our Hearts" },

  { id: "1508", content: "I Love You With All My Heart Sāi Lord\n I Love With All My Soul Sāi Lord\n Only You Only You\n And To Know That You Live In My Heart\n Sāi Lord\n Makes Me Love You More Than Ever Sāi Lord\n All I Want All I Want\n True To You In Every Way" },

  { id: "1509", content: "Listen To Sāi Bābā And What He Has To Say\n Sathya Sāi Bābā The God To Whom We Pray\n * Follow The Master Face The Devil\n Fight To The End And Finish The Game" },

  { id: "1510", content: "Love All Serve All\n Listen To The Call Of The Lord\n Love All Serve All\n This Is The Call Of The Lord\n If You Love The Lord Then You Must Love All\n If You Serve The Lord\n Then You Must Serve All\n Love All Serve All\n Listen To The Call Of The Lord\n Love All Serve All\n This Is The Call Of The Lord\n See No Evil Speak No Evil\n Hear No Evil Says The Lord\n Think No Evil Do No Evil\n Love All Serve All Says The Lord" },

  { id: "1511", content: "Love In My Heart Love In My Home\n Love In My Life Sāi Is Love\n Sāi In My Heart Sāi In My Home\n Sāi In My Life Sāi My Own\n Love Love Love Is God\n Live Live Live In Love" },

  { id: "1512", content: "Love Is God God Is Love\n Love All Serve All Says Our Lord (x2)\n Free Us From Ego Free Us From Lust\n Free Us From Anger Free Us From Hate\n Help Everyone Hurt No One\n Burn All The Evil Desires" },

  { id: "1513", content: "Love Is My Form Truth Is My Breath\n Bliss Is My Food\n My Life Is My Message Expansion Is My Life\n No Reason For Love No Season For Love\n No Birth No Death\n Prema Satya Ānanda Dharma Shānti Ahimsā\n Shirdi Sāi Sathya Sāi Prema Sāi Jai Jai\n Shirdi Bābā Sathya Bābā Prema Bābā Jai Jai" },

  { id: "1514", content: "Love Is Thy Name O Sāi Rām\n Truth Is Thy Breath O Sāi Rām\n You Are Our Lord And Only One\n Give Us The Strength To Follow You\n Give Us The Love To Forgive All\n You Are Our Lord And Only One" },

  { id: "1515", content: "Love Love Love God Is Love\n Live Live Live Live In Love\n Expand Your Heart To Encompass All\n Live Live In Love\n Your Master Is Your Heart\n Your Heart Where God Resides\n God Is In You With You Above You\n Around You And Behind You\n Love Love Is God\n Live Live In Love" },

  { id: "1516", content: "Mother Oh Mother Sāi Mā,\n You Mean The World To Me Sāi Mā\n Mother Oh Mother Sāi Mā,\n You Are The Light Of My Life Sāi Mā\n Mā Sāi Mā (2)\n In Times Of Trouble And Despair\n I Call Your Name, You’re Always There\n You Guide Me Forever Each Day,\n With All Your Love,\n You Show Me The Way\n How Can We Thank You Oh Dear Sāi Mā\n For All Your Patience And Love Sāi Mā\n Mā Sāi Mā (2)" },

  { id: "1517", content: "My Eyes They Thirst For You My Lord\n My Heart It Pines For You\n Teach Me How To Serve But You My Lord\n Show Me How To Love But You\n Lead Us All O Kindly Light\n Kindly Light O Kindly Light" },

  { id: "1518", content: "My Heart Is Pining My Eyes Are Searching\n My Ears Are Yearning My Lips Are Calling\n And My Whole Self Is Waiting\n For You My Lord\n End My Craving My Lord Come Come To Me" },

  { id: "1519", content: "Our Jesus Came And He Is Here Again\n Sāi Rāmā Sāi Krishnā Sāi Is His Name\n Mohammad Zorāshtra Yehovā Are The Same\n Jesus Christ Of Bethlehem\n And Sāi Are The Same\n Hāleluyāh (2) Glory To Thy Name\n Sathya Bābā Prema Bābā Blessed Be Thy Name" },

  { id: "1520", content: "Repeat His Name Sāi Rām Sāi Rām\n Say It With Love Sāi Rām Sāi Rām\n Picture His Form Sāi Rām Sāi Rām\n He’s Everywhere Feel Him Shining Within You\n Rām (4) Sāi, Rām Rām Rām Rām" },

  { id: "1521", content: "Sāi As Rāmā He Came To Teach Us\n Sāi As Krishnā He Came With Joy\n Sāi As Jesus He Came To Save Us\n And Now He Comes As Love (x2)" },

  { id: "1522", content: "Shālom Chāverim (2) Shālom Shālom\n Laihitrāòt (2) Shālom Shālom\n Glad Tidings We Bring Of Peace On Earth\n Goodwill Towards Man (x2)" },

  { id: "1523", content: "Shālom Ālleluiā\n Ālleluiā Ālā\n Shri Rām Jai Rām Jai Jai Rām\n Shri Rām Jai Rām Jai Sāi Rām" },

  { id: "1524", content: "Swāgatam (2) Shri Sathya Sāi Swāgatam\n You Are Our Lord You Are Our Swāmi\n You Are Our Bābā Antaryāmi\n Come O My Lord O Come To Me\n * Deep In My Heart A Light Is Burning\n Deep In My Soul I Feel A Yearning\n Come O My Lord O Come To Me" },

  { id: "1525", content: "Take My Hand Dear Sāi Sathya Sāi\n Take My Hand And Walk Me\n Through This Land\n Take My Hand Dear Sāi Sathya Sāi\n Take My Hand And Walk Me\n Through This Land\n Take My Heart My Lord Sathya Sāi\n Take My Life And Fill It With Your Love\n Let The Love In Me Be Love Divine\n Walk With Me My Lord Your Hand In Mine\n Sāi Rām Rām Sāi Rām (2)" },

  { id: "1526", content: "There Are Many Races In This Land\n In Different Homes We Pray\n We Call Him By Different Names\n The One Who Shows The Way\n The One Who Shows The Way My Lord\n By What Name Can We Pray\n Krishna Buddha Jesus Allāh\n Come And Show The Way\n Your Children Here Do Pray\n Please Come And Show The Way" },

  { id: "1527", content: "To Stand Alone You Give Me Strength\n Your Love Means More Than Any Wealth\n My Confused Mind You Made So Clear\n Wiped Every Tear Taught Me Not To Fear\n Oh Sāi Lord, I’m Grateful For The Love\n And Grace That You Bestow (x2)\n You Give Me Comfort When I Am Sad\n You Bring Me Hope When Things Seem Bad\n You Always Hear My Every Prayer\n Somehow I Know For Me You Care\n I’ll Face The World Afraid No More\n Oh Sāi Lord I Love You So (x2)" },

  { id: "1528", content: "We Are Blessed (3)\n Sāi Bābā Is Watching Over Us\n We Are Here To Sing Your Sweet Name\n Let The Light Of Your Love Shine On Us\n Bless Us All With Your Presence Gurudev\n We Are Blessed (3)\n No More Tears, No More Sorrows,\n No More Death\n Banish The Darkness With Your Love – Sāi\n We Are Born In The Golden Age Of Sāi\n We Are Blessed (3)\n We Are Born In The Golden Age Of Sāi\n We Receive The Love Divine\n We Are Born In The Golden Age Of Sāi\n We Are Blessed (3)" },

  { id: "1529", content: "We Are Brothers And Sisters All In One God\n Peace And Love Is What We Seek\n In The Good Lord\n We May Call And Worship God\n By Many Names\n But The God Of All Names Is Just The Same\n God Has Come In Life For Us To Purify\n Came As Rāmā, Krishnā, Buddhā,\n Jesus, Shirdi Sāi\n Hail To Rāmā Hail To Krishnā\n Hail To Buddhā And Hail To Jesus\n Hail To Shirdi And Sathya Sāi\n Hail To All These\n Loving Divine Teachers" },

  { id: "1530", content: "Chantons L’Amour Chantons La Joie\n Chantons La Paix Chantons Sāi\n Le Christ Est Avec Nous\n Venez Vous Rechauffer\n Sāi Est Avec Nous Venez Vous Consoler\n Venez Venez Il Est L’Ami,\n Venez Venez Il Est La Vie (x2)" },

  { id: "1531", content: "Mon Coeur T’appelle La Nuit Et Le Jour\n De Colline En Colline Mes Yeux Te Cherchent\n Pourquoi Ne M’apparais-Tu Pas Seigneur\n Dans Le Silence De La Nuit Seigneur\n Je T’aime Plus Que Jamais Seigneur\n O Viens Vers Moi Seigneur (x2)" },

  { id: "1532", content: "Seigneur Toi Qui Es Notre Sauveur\n Toi Qui Es Notre Lumiere\n Toi Qui Es Dans Notre Coeur\n Toi Donc La Bonté Inonde\n Toi Qui Aime Tout Le Monde\n Ecoutes Ma Prière Seigneur\n Ne Desertes Pas Mon Coeur\n Fais De Moi Ton Serviteur" },

  { id: "1533", content: "Viens Dans Mon Coeur Seigneur\n Ton Nom Y Est Inscrit\n Donnes Moi L’Amour Donnes Moi La Paix\n Viens Dans Mon Coeur Seigneur\n Chaque Jour Je Ne Prie Que Toi\n Chaque Jour Je Ne Pense Qu’à Toi\n Donnes Moi La Vie Donnes Moi L’espoir\n Viens Dans Mon Coeur Seigneur" },

  { id: "1600", content: "Allāh (3) Ishwara Rām\n Maulāh (3) Sāi Nām\n Allāh Yeshu Buddha Mahāveer\n Gautam Guru Govindaji Nānaka\n Prashānti Sāi Sab Kā Mālik\n Allāh Ho Sāi Maulāh Ho Sāi" },

  { id: "1601", content: "Allāh Allāh Karo Phukār\n Sathya Sāi Ki Jaijaikār\n Yeshu Pitā Ki Jaijaikār\n Mahāveer Ki Jaijaikār\n Zorāshtra Ki Jaijaikār\n Sarva Dharma Ki Jaijaikār" },

  { id: "1602", content: "Allāh Allāh Sāi Bābā\n Yeshu Masihā Sāi Bābā\n * Nānaka Shri Buddha Sāi Bābā\n Zorāshtra Mahāveer Sāi Bābā" },

  { id: "1603", content: "Allāh Bhajo Maulāh Bhajo\n Hey Allāh Sāi Bhagavān\n Sāi Rām Bhajo Sāi Krishna Bhajo\n Hey Rām Krishna Bhagavān\n Nānaka Bhajo Gautam Bhajo\n Hey Buddha Sāi Bhagavān\n Yeshu Bhajo Zorāshtra Bhajo\n Hey Mahāveer Bhagavān\n Sāi Bhajo Shirdi Sāi Bhajo\n Hey Shirdi Sāi Bhagavān\n Sathya Bhajo Sathya Sāi Bhajo\n Hey Sathya Sāi Bhagavān" },

  { id: "1604", content: "Allāh Ho Akhbar (2) Allāh Bhi Tum Ho\n Rām Rām Sāi Krishna Krishna Sāi\n Sāi Rām Tum Ho\n Rām Rahim Tum Ho Krishna Karim Tum Ho\n Buddha Zorāshtra Yeshu Prabhu\n Guru Nānak Bhi Tum Ho\n Sarva Dharma Priya Shānti Pradāyaka\n Sathya Sāi Tum Ho" },

  { id: "1605", content: "Allāh Ho Akhbar (3)\n Yeshu Pitā Prabhu Allāh Ho Akhbar\n Shirdi Sāi Parthi Sāi Tum Ho\n Guru Nānak Bhi Tum Ho\n Zorāshtra Mahāveer Tum Ho\n Yeshu Pitā Prabhu Tum Ho\n Sāi Allāh Ho Akhbar Tum Ho" },

  { id: "1606", content: "Allāh Ho Akhbar (2) Sāi Teré Nām\n Allāh Teré Nām Maulāh Teré Nām\n Buddha Zorāshtra Yeshu Mahāveer\n Sab Hein Sāi Bhagavān\n Allāh Ho (3) Akhbar\n Buddha Zorāshtra Yeshu Mahāveer\n Sab Hein Sāi Bhagavān\n Allāh Teré Nām Maulāh Teré Nām" },

  { id: "1607", content: "Allāh Ho (3) Akhbar, Salāmallaikum (3) Salām\n Buddha Zorāshtra Yeshu Mahāveera\n Nānakaji Ki Jai Jai Gāo\n Sāi Nātha Ki Jai Jai Gāo\n Salāmallaikum (3) Salām" },

  { id: "1608", content: "Allāh Is Compassionate, Love He Radiates\n Allāh He Is Merciful, He Is Full Of Grace\n Alham Dullilāh Alham Dullilāh\n Praise Be To God Alham Dullilāh\n Allāh Ho Akhbar Allāh Ho Akhbar\n God Is Great God Is Great\n Allāh Ho Akhbar" },

  { id: "1609", content: "Allāh Ishwara Ek Hi Nām\n Bhajoré Manwā Bābā Nām\n * Allāh Bolo Ishwara Bolo Bolo Sāi Rām\n Nānaka Bolo Yeshu Bolo Bolo Sāi Rām\n Gautam Buddha Mahāveera Bolo Bolo Sāi Rām\n Bolo Sāi Rām Bolo Bolo Sāi Rām" },

  { id: "1610", content: "Allāh Ishwara Ek Hi Nām\n Sab Mil Bolo Hari Kā Nāma\n Rām Rahim Yeshu Sāi Nām\n Buddha Zorāshtra Mahāveer Nām\n Ek Omkār Bolo Jai Satya Nām\n Vāhé Guru (2) Nānaka Nām" },

  { id: "1611", content: "Allāh Ishwara Sāi Bābā\n Sab Dharmon Ké Tum Ho Vidhātā\n Sāi Maheshā Sāi Nārāyana\n Nānaka Yeshu Buddhā Mahāveera\n Rām Rahim Krishna Karim\n Sarva Dharma Priya Sāi Shankara\n Yuga Avatārā Sāi Haré" },

  { id: "1612", content: "Allāh Kaho Yā Maulāh Kaho\n Sab Kā Mālik Ek Sab Kā Mālik Ek\n Rām Krishna Rahmān\n Yeshu Buddha Ghanashyām\n Zorāshtra Mahāveer Tu Jagannātha Prabhu Tu\n Sab Kā Mālik Ek Sab Kā Mālik Ek" },

  { id: "1613", content: "Allāh Nām Teré Nām\n Sāi Nām Eka Hi Nām\n Yeshu Nānak Bābā Nām\n Buddha Mahāveera Sāi Nām (x2)\n Sāi Nām Eka Hi Nām" },

  { id: "1614", content: "Allāh Sāi Bolo Sāishwara Bolo\n Mandira Mé Vo Masjida Mé Vo\n Sāi Nām Sab Bhakton Sukhadāyi\n Allāh Nām Sadā Bhajoré Bhāyi\n Sab Bhakton Ké Priya Avatār Tu\n Sab Prāniyon Ké Jeevan Sahārā Tu" },

  { id: "1615", content: "Allāh Sāi Maulāh Sāi\n Satguru Sāi Antaryāmi\n Nānak Sāi Prema Sāi\n Yeshu Sāi Karunā Sāgara\n Sarva Dharma Priya Sathya Sāi" },

  { id: "1616", content: "Allāh Sāi Sunlé Meri Phukār\n Sunlé Meri Phukār Sunlé Meri Phukār\n Sarva Dharma Priya Sāi Nātha\n * Koyi Bolé Allāh Khudā\n Koyi Bolé Yeshu Pitā (x2)\n Sarva Dharma Priya Sāi Nātha" },

  { id: "1617", content: "Allāh Teré Kitné Pyāré Nām\n Allāh Teré Kitné Pyāré Nām\n Kitné Pyāré Nām\n Koyi Kahé Allāh Koyi Kahé Khudā\n Allāh Sāi Ek Hi Hai Aneka Teré Nām\n * Koyi Phukāré Tum Ko Rahim\n Koyi Phukaré Tum Ko Karim\n Koyi Kahé Tujhé Noor Muhammad\n Koyi Kahé Tujhé Khudā\n Allāh Sāi Ek Hi Hai Aneka Teré Nām" },

  { id: "1618", content: "Allāh Tero Nām Sāi Ishwar Tero Nām\n Yeshu Pitā Guru Nānaka Tum Ho\n Sab Kā Mālika Ek Hai Sāi" },

  { id: "1619", content: "Allāh Tum Ho Ishwara Tum Ho\n Tum Hi Ho Rām Rahim\n Tum Hi Ho Krishna Karim\n Yeshu Tum Ho Nānak Tum Ho\n Zorāshtra Bhi Ho Mahāveera Tum Ho\n Gautam Buddha Karim\n Meré Rām (2) Rām Rahim (x3)\n Meré Rām (2) Sathya Sāi Rām" },

  { id: "1620", content: "Allāh Tum Ishwara Bhi Tum\n Mahāveer Nānak Rām\n Parthisha Sāi Shankarā\n Tum Hi Ho Meré Shyāma\n * Zorāshtra Yeshu Buddha Tum Ho\n Sab Ké Pālanhār\n Satchidānanda Sāi Terā\n Brindāvana Shubha Dhām" },

  { id: "1621", content: "Antaryāmi Sab Kā Ek\n Ātmā Ek Paramātmā Ek\n Hindu Ho Yā Musalmān Parsee Isāyi Chini\n Sab Mé Basā Hai Bhagavān\n Sab Dharmon Ké Sāi Rām" },

  { id: "1622", content: "Āo Āo Jaga Mangala Dātā\n Shirdipurishwara Rām\n Parthipurishwara Rām\n Allāh Yeshu Nānaka Mahāveer\n Buddha Zorāshtra Sab Tum Ho\n Sāi Antarjyoti Jalāo Rām\n Mana Mandira Mé Tu Antaryāmi\n Sab Dukha Bhanjana Rām Pāpa Mitāo Shyām" },

  { id: "1623", content: "Berā Pār Karo Meré Sāi\n Uddhār Karo Meré Bābā\n * Allāh Ishwar Sāi Bābā\n Shirdi Bābā Parthi Bābā\n Raham Nazar Karo Sāi Bābā\n Dayā Karo Sāi Kripā Karo" },

  { id: "1624", content: "Bhajoré Mānasa Sāi Rām\n Parthipuri Ké Sāi Bhagavān\n * Ishwar Allāh Teré Nām\n Yeshu Buddha Bhi Teré Nām\n Shirdipuri Ké Sāi Bhagavān\n Parthipuri Ké Sāi Bhagavān" },

  { id: "1625", content: "Bhavasāgara Se Pār Utāro\n Sāi Nātha Bhagavān\n Allāh Yeshu Buddha Mahāveera\n Sab Nāmon Ki Eka Hai Mahimā\n Sarva Dharma Ké Pālanahāré\n Sāi Nātha Bhagavān" },

  { id: "1626", content: "Bhuvana Bāndhava Sāi Bhagavān\n Mātā Pitā Bandhu Sakhā Tum Ho Bhagavān\n Ishwar Bhi Tum Ho Allāh Nānaka Tum Ho\n Prabhu Yeshu Tum Ho Mahāveer Tum Ho\n Buddha Deva Tum Ho\n Meré Prāna Nātha Tum Ho\n Sāi Rām Sāi Rām (x2)" },

  { id: "1627", content: "Deena Dukhiyon Ké Tārana Kārana\n Tu Hai Ishā Masihā O Sāi Bābā\n * Dharma Uddhārana Bhakta Parāyana\n Ādi Nārāyana Sāi\n Alaka Niranjana Bhava Bhaya Bhanjana\n Parthi Nārāyana Sāi" },

  { id: "1628", content: "Eeraivā (7) Nee Vā Eeraivā\n Bhagavān (7) Ā Bhi Jā Bhagavān\n Oh My Lord Sweet Lord Oh My Lord\n Dear Lord Oh My Lord Sweet Lord\n Oh My Lord Come To Me Dear God\n O Seigneur (7) Viens Vers Moi O Seigneur\n Woh Te Choo Chen Choo (3)\n Woh Te Choo Cheng Nee Lai\n Cheng Nee Lai" },

  { id: "1629", content: "Ek Mantra Japté Raho Sāi Rām Rām\n Allāh Yeshu Buddha Nānaka Sab Hai Sāi Rām\n Sāi Rām Nām Japo Sāi Rām Rām\n Zorāshtra Mahāveera Sāi Rām Rām\n Mātā Pitā Bandhu Sakhā Sab Hai Sāi Rām\n Sāi Rām Nām Japo Sāi Rām Rām" },

  { id: "1630", content: "Govinda Bolo Gopāla Bolo\n Rām Rām Bolo Hari Nām Bolo\n Allāh Mālik Ishā Nānaka\n Zorāshtra Mahāveera Buddha Nām Bolo\n * Yé Nām Sāré Hein Jeevan Sahāré\n Paramānanda Ké Kholté Hein Dwāré\n Jo Nām Chāho Vo Nām Bolo\n Prema Se Bolo Bhāva Se Bolo" },

  { id: "1631", content: "Guru Nānakaji Ki Jaijaikār\n Jo Bowé So Howé Nihāl\n Allāh Sāi Lelo Salām\n Maulāh Sāi Lelo Salām\n Salām Salām Lākhon Salām\n Yeshu Pitā Prabhu Sāi Rām\n Buddha Zorāshtra Mahāveera Rām\n Allāh Sāi Lelo Salām\n Maulāh Sāi Lelo Salām\n Salām Salām Lākhon Salām" },

  { id: "1632", content: "Guru Om (2) Jai Jai Jaya Guru Om\n Tu Hai Allāh Tu Hai Ishwar\n Sab Ké Rām Guru Om (2)\n * Tu Hai Krishnā Tu Hai Buddhā\n Parama Pitā Guru Om (3)" },

  { id: "1633", content: "Haré Murāri Sāi Rām Haré Murāri Rām\n Parama Sumangala Sāi Rām\n Parama Sumangala Rām\n Ishwar Allāh Teré Nām Sab Tum Ho Bhagavān\n Ishwar Allāh Ek Hai Sab Tum Ho Bhagavān\n Parama Sumangala Sāi Rām\n Parama Sumangala Rām" },

  { id: "1634", content: "Ishwar Allāh Buddha Yehovā God Is Only One\n Nānak Mahāveer Yeshu Mohammad\n So Said Everyone\n So Says Our Lord, Sathya Sāi Rām\n Love Is The Only Religion Of Man\n Love Is God, God Is Love\n Loving All Beings Is Loving God\n So Says Our Lord, Sathya Sāi Rām" },

  { id: "1635", content: "Ishwar Allāh Ek Tum Hi Ho\n Karunā Sindhu Rām\n Deenajanon Ké Jeevana Sahāré\n Bhaktajanon Ké Jeevana Sahāré\n Dayā Karo Bhagavān\n (Sab Par) Kripā Karo Bhagavān\n Karunā Sāgara Dayābhi Rām" },

  { id: "1636", content: "Ishwar Allāh Teré Nām Sāi Teré Nām\n Sarva Dharma Priya Sāi Rām Sathya Sāi Rām\n Allāh Sāi Maulāh Sāi\n Yeshu Buddha Sāi Hey Mahāveera Sāi\n Govinda Sāi Gopāla Sāi Nānaka Sāi\n Sarva Dharma Priya Sāi Rām Sathya Sāi Rām" },

  { id: "1637", content: "Jagadisha Haré Jaya Ho\n Jagadoddhārā Jaya Jaya Ho\n * Allāh Yeshu Nānaka Sāi\n Antaryāmi Buddha Mahāveera\n Zorāshtra Sarva Dharma Priya Devā\n Prashānti Nivāsā Sathya Sāi Devā\n Jaya Ho Jaya Ho (x2)" },

  { id: "1638", content: "Jaya Guru Omkārā\n Satguru Omkārā\n Allāh Tum Ho Ishwara Tum Ho\n Buddha Zorāshtra Mahāveera Tum Ho\n Sab Kā Mālika Bābā Tum Ho\n Parama Guru Sāi Pāvana Tum Ho" },

  { id: "1639", content: "Jaya Ho Sāi Rām (2)\n Karunā Sindhu Rām\n Puttaparthipurishwar Rām\n * Tretā Yuga Mé Rām\n Dwāpara Yuga Mé Shyāma\n Rām Tu Hi Rahmān Sāi\n Sab Kā Hai Bhagavān\n Kaliyuga Ké Avatar Puttaparthipurishwara Rām" },

  { id: "1640", content: "Karunā Sāgara Prema Swarupā\n Kshāpa Vimochana Rām\n Dukha Bhanjana Shri Rām\n Allāh Ishwara Teré Nām\n Nānaka Yeshu Teré Nām\n Parthipurishwara Deena Dayāgana\n Dukha Bhanjana Shri Rām" },

  { id: "1641", content: "Kāshi Mathurā Hai Parthi Mé\n Hai Shirdi Aur Kābā\n Rom Rom Mé Sāi Basé Hein\n Ghar Ghar Mé Sāi Rāmā\n Hindu Karé Pranām Tujhko\n Muslim Karé Salām – Sāi" },

  { id: "1642", content: "Koyi Bolé Hari Hari Koyi Bolé Rām Rām\n Koyi Bolé Durgā Kāli Koyi Bolé Sāi Mā\n * Koyi Bolé Nārāyana Allāh Bismillāh\n Koyi Bolé Nānaka Buddha Mahāveerā\n Sādhu Santa Phakira Jāné Sab Hein Tero Nām\n Bol Man Allāh Mālik Bol Man Sāi Rām" },

  { id: "1643", content: "Kis Bid Tumhein Phukāroun Bhagavan\n Pyāré Meré Sāi\n Rādhéshyām Ho Seetārām Ho\n Rahiman Ho Yā Rām\n Hindu Ho Yā Muslim Ho Sab Hein Ek Samān\n Meré Bābā Ké Liyé Musalmān Aur Hindu\n Do Nayana Samān\n Rādhéshyām Ho Seetārām Ho\n Rahiman Ho Yā Rām" },

  { id: "1644", content: "Mahādevā Maheshwarā Sāi Nārāyanā\n Natanāgarā Dukha Bhanjanā Sāi Nārāyanā\n Karunākarā Akhileshwarā Sāi Nārāyanā\n Allāh Ho Tum Mahāveera Yeshu Sāi Nārāyanā\n Hridayeshwarā Parthishwarā Sāi Nārāyanā" },

  { id: "1645", content: "Mānava Sevā Mādhava Sevā\n Sab Bhakton Kā Yehi Sandesh Hai\n * Vo Hi Allāh Vo Hi Ishwara\n Sab Dharmon Kā Pyārā Masihā\n Mandir Mé Bhi Hai Masjida Mé Bhi Hai\n Sab Janon Kā Pyārā Avatārā" },

  { id: "1646", content: "Mandir Masjid Aur Gurudwāré\n Sab Hein Teré Dhām\n Sāi Teré Dhām Prashānti Nilaya Dhām\n Rām Kaho Rahmān Kaho Sab Hein Teré Nām\n Ātma Nivāsi Rām Sāi Bhagavān\n Dwārkāmāyi Kābā Kāshi Sab Hein Teré Dhām" },

  { id: "1647", content: "Mandira Mé Shyām Vohi Hai\n Masjida Mé Allāh Ho Akhbar\n Ek Prabhu Aneka Nām\n Sab Kā Mālik Ek\n Prema Avatār Yeshu Tum Ho Sāi\n Dharmāvatār Tu Buddha Bhi Ho\n Nānaka Guru Mahāveer Tirthankarā\n Sab Kā Mālik Ek" },

  { id: "1648", content: "Mandir Mé Tum Rām Ho Sāi\n Masjida Mé Noor Mohammad\n Gurudwāré Mé Tum Guru Nānak\n Man Mandir Mé Sāi Sāi\n Bolo Rām Eka Hi Nām\n Bolo Rām Eka Hi Nām\n Sab Mil Bolo Sāi Rām" },

  { id: "1649", content: "Masjida Mé Tu Noor Mohammad\n Gurudwār Mé Tu Guru Nānak\n Girijāghara Mé Tu Yeshu Krishtu\n Mandira Mé Bhagavān – Mana\n Rām Rahim Tu Krishna Karim\n Zorāshtra Mahāveera Tirthankarā\n Sāi Rām Bhagavān (x2)\n Sāi Rām Rām Rām Bhagavān" },

  { id: "1650", content: "Mātā Pitā Guru Bandhu Sakhā Hari\n Nārāyanā Hari Nārāyanā (x2)\n Allāh Tum Ho Yeshu Tum Ho\n Buddha Zorāshtra Mahāveera Tum Ho\n Sab Kā Mālika Ek Hai Bhagavan\n Nārāyanā Hari Nārāyanā" },

  { id: "1651", content: "Mero Mana Sāi Binā Nahin Lāgé\n Sāi Binā Mero Mana Nahin Lāgé\n Prabhu Parameshwara Ishā Masihā\n Ishā Masihā Ishā Masihā\n Prabhu Parameshwara Ishā Masihā\n Guru Nānaka Ki Eka Hi Mahimā\n Allāh Nām Ki Eka Hi Mahimā\n Mahāveera Ki Eka Hi Mahimā\n Mero Mana Sāi Binā Nahin Lāgé\n Sab Santon Ki Eka Hi Mahimā – 3" },

  { id: "1652", content: "Mujh Pé Dayā Karo Sāi Bābā\n Hari Kripā Karo Bābā\n Rām Kaho Yā Allāh Kaho\n Krishna Kaho Yā Yeshu Kaho\n Zorāshtra Kaho Mahāveer Kaho\n Buddha Kaho Sathya Sāi Kaho" },

  { id: "1653", content: "Namo Bhagavaté Vāsudevāya\n Namo Bhagavaté Rām Rupāya\n Namo Bhagavaté Shyāma Rupāya\n * Rām Rahim Krishna Karim\n Yeshu Buddha Mahāveera\n Sarva Dharma Priya Sāi Devāya (x2)" },

  { id: "1654", content: "O Meré Rām Meré Rām Satguru Rām Sāi Rām\n Tu Hi Allāh Tu Hi Yeshu\n Tu Hi Nānaka Tu Zorāshtra\n Tu Hi Buddha Sab Kā Mālika\n Lelo Lelo Meré Pranām (x3)" },

  { id: "1655", content: "Pār Karo Uddhār Karo\n Prabhu Parthipuri Bhagavān\n Haré Rām Rām Rām\n Ghanashyām Shyām Shyām\n Hey Sāi Nātha Bhagavān\n Deena Dayākara Karunā Murti\n Kaliyuga Avatāra Sāi Bhagavān\n Allāh Sāi Buddha Zorāshtra\n Yeshu Krishtu Bhagavān" },

  { id: "1657", content: "Parthi Vihārā Pāpa Vidurā\n Pāvana Charanā Sāi Nārāyanā\n Allāh Tum Ho Yeshu Tum Ho\n Sab Kā Mālika Sāi Tum Ho\n Buddha Zorāshtra Nānaka Tum Ho\n Tum Ho Bābā Antaryāmi\n Sab Dharmon Ké Pālanhāré\n Kaliyuga Avatārā Sāi Nārāyana" },

  { id: "1656", content: "Parthishwara Shri Sāi Prabho\n Eeshwarāmbā Nandana Sāi Prabho\n * Ishwara Allāh Shri Sāi Rām Nām\n Buddha Zorāshtrā Sāi Krishna Nām\n Mādhava Mohana Sāi Nārāyana\n Premāvatārā Prabhu Sāi Rāmā" },

  { id: "1658", content: "Pranām Pranām Bābā\n Salām Salām Sāi\n Namo Namo Sāi\n * Ishwara Allāh Yeshu Pitā Prabhu\n Buddha Mahāveer Tum Hi Ho Sāi\n Sarva Dharmon Ké Mālik Sāi\n Bhaktajanon Ké Jeevana Sāi" },

  { id: "1659", content: "Pranām Swikāra Karo Sāi Mahādevā\n Sāi Mahādevā Sāi Mahādevā\n * Allāh Ishwara Yeshu Sāi\n Buddha Mahāveer Nānaka Sāi\n Natana Sutradhāri Jagannātha Sāi\n Sāi Mahādevā Sāi Mahādevā" },

  { id: "1660", content: "Prema Ishwara Hai Ishwara Prema Hai\n Ishwara Prema Hai, Prema Ishwara Hai\n Har Dharkan Mé Sāi Samā Hai\n Ishwara Prema Hai\n * Rām Rahim Buddha Karim\n Zorāshtra Yeshu Nānaka\n Koyi Bhi Nāma Japoré Manwā\n Ishwara Prema Hai" },

  { id: "1661", content: "Purna Brahma Avatārā Sāi\n Sakala Jagata Ādhārā Sāi\n * Allāh Yeshu Bābā Sāi\n Buddha Mahāveer Nānak Sāi\n Sab Bhakton Ké Bābā Sāi\n Sarva Dharma Avatārā Sāi" },

  { id: "1662", content: "Rahiman Rahiman Rām Rahim\n Rām Rahim Sāi Krishna Karim (x2)\n Buddha Zorāshtra Nānak Sāi\n Yeshu Pitā Prabhu Sāi Tum Ho\n Bhajoré Manwā Rām Rahim\n Sāi Rām Sāi Shyām Krishna Karim" },

  { id: "1663", content: "Rām Bolo Rahim Bolo\n Nānaka Bolo Buddha Sāi Bolo\n * Yeshu Bolo Zorāshtra Bolo\n Mahāveera Bolo Maheshwara Bolo\n Prema Se Bolo Bhāva Se Bolo" },

  { id: "1664", content: "Rām Haré Sāi Krishna Haré\n Sarva Dharma Priya Sāi Haré\n Allāh Ishwara Sāi Haré\n Nānaka Yeshu Buddha Haré\n Zorāshtra Mahāveer Sāi Haré\n Sarva Dharma Priya Sāi Haré" },

  { id: "1665", content: "Rām Haré Sāi Krishna Haré\n Sarva Dharma Priyé Sāi Haré (x2)\n * Ishwara Allāh Sāi Haré\n Nānaka Yeshu Buddha Haré\n Zorāshtra Mahāveer Sāi Haré\n Jai Sarva Dharma Priyé Sāi Haré" },

  { id: "1666", content: "Rām Hari Hari Nām Bolo\n Hari Nām Bolo Sāi Nām Bolo\n * Sāi Rāmā Parama Dayālā\n Parama Dayālā Parama Kripālā\n Mana Mandira Mé Kiyā Ujālā\n Allāh Sāi Bolo Maulāh Sāi Bolo (x3)" },

  { id: "1667", content: "Rām Kaho Krishna Kaho\n Ishwara Allāh Sāi Kaho\n Buddha Kaho Guru Nānak Kaho\n Zorāshtra Mahāveera Yeshu Kaho\n * Yugavatāra Tum Ho Sakala Vishwa Tum Ho\n Sarva Dharma Priya Sāi Maheshā\n Parabrahma Tum Ho" },

  { id: "1668", content: "Rām Kaho Sāi Rām Kaho\n Shyāma Kaho Ghanashyāma Kaho\n Yeshu Kaho Zorāshtra Kaho\n Jag Kā Vidhātā Sāi Kaho\n Mandir Mé Kabhi Masjida Mé\n Apnā Hridaya Mé Sāi Bhagavān" },

  { id: "1669", content: "Rām Krishna Prabhu Tu Hey Rām Hey Rām\n Sāi Krishna Prabhu Tu Sāi Rām Sāi Rām\n Yeshu Pitā Prabhu Tu Hey Rām Hey Rām\n Allāh Ishwara Tu Allāh Ho Akhbar\n Shirdi Sāi Prabhu Tu Sāi Rām Sāi Rām\n Sathya Sāi Prabhu Tu Sāi Rām Sāi Rām" },

  { id: "1670", content: "Rām Rahim Ko Bhajanéwālé Teré Poojāri Bābā\n Terā Nāma Ek Sahārā (x2)\n Sāi Nāma Ek Sahārā\n Tum Hi Ho Geetā Tum Hi Rāmāyana\n Tum Hi Ho Veda Purāna\n Terā Nāma Ek Sahārā (x2)\n Sāi Nāma Ek Sahārā\n Satya Dharma Ki Jyoti Jalāné Āyé Parthi Vihāri\n Terā Nāma Ek Sahārā (x2)\n Sāi Nāma Ek Sahārā" },

  { id: "1671", content: "Rām Rahim (2) Bhajoré Manwā Rām Rahim\n Dwārakamāyi Rām Rahim\n Sarva Dharma Priya Sāi Rahim\n Parthipuri Mé Janam Liyā\n Prabhu Paramātmā Sāi Rahim" },

  { id: "1672", content: "Rām (4) (x2)\n Rām Nām Sukha Ko Dhāma (x2)\n * Buddha Nām Shānti Dhāma\n Isā Nām Prema Dhāma (x2)\n * Mohammad Nām Dharma Dhāma\n Sāi Nām Satya Dhāma" },

  { id: "1673", content: "Rām (3) Sāi Rām Namo\n Krishna (3) Sāi Krishnā Namo\n Yeshu (3) Sāi Yeshu Namo\n Buddha (3) Sāi Buddha Namo\n * Allāh (3) Sāi Allāh Namo\n Zorāshtra (2) Sāi Namo\n Mahāveer (2) Sāi Namo\n Guru Nānak (2) Nānak Namo" },

  { id: "1674", content: "Sab Kā Mālika Sāi Haré\n Sab Dharmon Ké Sāi Haré\n * Ishwara Allāh Sāi Haré\n Yeshu Mahāveera Sāi Haré\n Buddha Zorāshtra Sāi Haré\n Satguru Nānaka Sāi Haré\n Satya Dharma Prema Sāi Haré\n Sarva Rupa Sathya Sāi Haré" },

  { id: "1675", content: "Sāi Bābā Pranām\n Shirdi Bābā Pranām\n O Meré Ātmā Rām\n Lelo Meré Pranām\n Allāh Ishwara Rām\n Sab Ké Ghar Sāi Rām\n Purana Karo Meré Kām\n Parama Shānti Priya Rām\n Sarva Dharma Priya Rām (x2)" },

  { id: "1676", content: "Sāi Bābā Sāi Bābā Japté Raho Sāi Nām\n Allāh Sāi Maulāh Sāi Leté Raho Sāi Nām\n Sab Hai Sāi Kā Nām\n * Yeshu Nānak Buddha Sāi Zorāshtra Mahāveer\n Sab Ké Hein Sāi Nām" },

  { id: "1677", content: "Sāi Bābā Terā Nām Sathya Sāi Bābā Terā Nām\n Tu Hi Brahmā Tu Hi Vishnu\n Tu Hi Nānaka Tu Hi Yeshu\n Tu Hi Buddhā Tu Zorāshtrā\n Tu Hi Allāh Tu Mahāveer\n Sab Hein Sāi Bhagavān (x2)\n Sāi Rām (2) Sāi Bābā Terā Nām\n Allāh Sāi Tero Nām Maulāh Sāi Tero Nām\n Nānak Sāi Terā Nām Yeshu Sāi Terā Nām\n Sāi Bābā Terā Nām (2)" },

  { id: "1678", content: "Sāi Brahmā Sāi Vishnu Sāi Pārvati Shankara\n Sāi Rām Sāi Shyām Sāi Lakshmi Nārāyan\n Tu Allāh Tu Maulāh Tu Buddhā Tu Mahāveer\n Tu Hi Mandir Tu Hi Masjid\n Tu Hi Girijā Tum Sab Ho" },

  { id: "1679", content: "Sāi Devā Satya Swarupā Tum Ho Meré Bābā\n O Meré Sāi Bābā\n Sab Dharmon Kā Nāthā\n Parthi Vāsā Sāi Devā\n Sharanam Sharanam Devā (x2)\n Ishwar Hi Tum Allāh Tum\n Mahaveera Nānak Tum Ho\n Sab Hi Tum Ho Devā Meré Sāi Bābā\n Parthi Vāsā Sāi Devā\n Sharanam Sharanam Devā (x2)" },

  { id: "1680", content: "Sāi Hamārā Ham Sāi Ké Aisā Prema Hamārā\n Sāi Rām Hamārā (2)\n Sathya Sāi Hai Nām Tumhārā Shirdi Sāi Avatārā\n Hindu Muslim Sikha Isāyi Sab Kā Pālanahārā\n Sāi Rām Hamārā (2)" },

  { id: "1681", content: "Sāi Japo (2) Japo Sāi Nām Ré\n Sāi Japo (2) Japo Sāi Rām Ré\n Sāi Japo (2) Japo Sāi Nām Ré\n Japoré Japo Sāi Japo Japo Sāi Rām Ré\n Rām Japo (2) Japo Seetārām Ré\n Shyāma Japo (2) Japo Rādhéshyāma Ré\n * Har Pal Subah Shām Japo Sāi Rām Ré\n Allāh Japo Maulāh Japo Japo Jhalārām Ré\n Yeshu Buddha Mahāveer Sab Hai Sāi Nām Ré" },

  { id: "1682", content: "Sāi Nām Bolo Govinda Nām Bolo\n Mahādeva Bolo Jai Pānduranga Bolo\n * Rām Krishna Bolo Jai Buddha Sāi Bolo\n Zorāshtra Mahāveera Yeshu Sāi Bolo\n Allāh Sāi Bolo Maulāh Sāi Bolo\n Prema Sāi Shāntidāyi Sathya Sāi Bolo" },

  { id: "1683", content: "Sāi Nām Bolo Sathya Sāi Nām Bolo\n Sāi Mādhavā Sāi Keshavā\n Shri Hari Nām Bolo\n Allāh Ishwar Ishā Masihā\n Buddha Mahāveer Nām\n Sāi Mādhavā Sāi Keshavā\n Shri Hari Nām Bolo" },

  { id: "1684", content: "Sāi Nātha Bhagavān (2)\n Satyam Shivam Sundaram\n Sāi Nātha Bhagavān\n * Buddham Sharanam Gachchāmi\n Dharmam Sharanam Gachchāmi\n Sangham Sharanam Gachchāmi\n Sāisha Sharanam Gachchāmi - Sathya" },

  { id: "1685", content: "Sāi Rām Rahim Rahim\n Sāi Krishna Karim Karim\n Bhaja Mana Rām Rahim Rahim\n Govinda Krishna Karim Karim\n Bhaja Mana Rām Rahim Rahim" },

  { id: "1686", content: "Sāi Rām (2)\n Sāi Rām Jaya Sāi Rām\n Parthipurishwara Sāi Rām\n * Raghupati Rāghava Rājā Rām\n Patita Pāvana Seetā Rām\n Ishwara Allāh Teré Nām\n Sab Ko Sanmati Do Bhagavān" },

  { id: "1687", content: "Salāmallaikum (2) Salām Sāi\n Salāmallaikum Salāmallaikum Salām\n Allāh Ho (2) Akhbar Sāi Allāh Ho\n Allāh Ho Akhbar\n Buddha Zorāshtra Yeshu Mahāveer\n Sāi Sarva Dharma Priya Sāi Devā\n Salāmallaikum (2) Salām Sāi\n Salāmallaikum Salāmallaikum Salām\n Salāmallaikum Salāmallaikum" },

  { id: "1688", content: "Sarva Dharma Priya Devā\n Sathya Sāi Devā\n Allāh Ishwara Buddha Aur Nānaka\n Zorāshtra Mahāveer Tum Ho\n Rām Hi Tum Ho Krishna Hi Tum Ho\n Vishwa Rupa Tum Ho (x2)" },

  { id: "1689", content: "Sarva Dharma Swarupa Sāi\n Parthi Ké Avatārā\n Meré Bābā Meré Sāi\n Sāi Rām (4)\n Hindu Muslim Isāyi Āté Hein Teré Dwāré\n Milté Hein Teré Dwāré\n Sāi Rām (4)" },

  { id: "1690", content: "Sarva Matha Priya Sāi\n Sarva Jana Priya Sāi\n Shāshthānga Namaskār Sāi\n Kshata Koti Namaskār Sāi\n Ishwar Allāh Sāi\n Yeshu Buddha Sathya Sāi\n Zorāshtra Mahāveera Sāi\n Shāshthānga Namaskār Sāi\n Kshata Koti Namaskār Sāi" },

  { id: "1691", content: "Satnām (3) Bol, Vāhé Guru (3) Bol\n Satnām Bol Man Vāhé Guru Bol\n Man Mé Sāi Kā Ras Bhardo\n * Satnām Bol Vāhé Guru Bol\n Satnām (3) Bol, Satnām (3) Bol\n Sāi Meré Man Ki Ānkhein Khol - Bābā\n Āj Jagādé Jeevan Ki Jyot" },

  { id: "1692", content: "Satya Dharma Shānti Prema Swarupā\n Prashānti Nilaya Devā\n Tum Rāmā Ho Krishnā Ho Sāi Rām Devā\n Shiva Shakti Swarupā Bābā\n Hey Deena Pālanā Bābā\n Hey Prashānti Nilaya Bābā\n Hey Purnāvatāra Bābā\n Tum Allāh Ho Maulāh Ho Sāi Rām Devā" },

  { id: "1693", content: "Shirdi Sāi Dwārakāmāyi\n Prashānti Vāsā Sāi Rām\n Sāi Rām (2) Eka Hi Nām Sundara Nām\n Allāh Ishwara Sāi Rām\n Parthipuri Ké Hey Bhagavān\n Dayānidhé Kripānidhé Satya Swarupa Sāi Rām\n Sāi Rām (2) Eka Hi Nām Sundara Nām" },

  { id: "1694", content: "Shri Guru Parthi Vāsā\n Sāi Brahma Vishnu Maheshā\n * Allāh Bhi Tum Ho Maulāh Bhi Tum Ho\n Zorāshtra Mahāveera Yeshu Bhi Tum Ho\n Rām Rahim Ho Krishna Karim Ho" },

  { id: "1695", content: "Tuhi Allāh Ho Akhbar Tuhi Yeshu Sāi Shankara\n Tuhi Rām Rahim Tuhi Krishna Karim\n Tuhi Buddhā Tuhi Vishnu\n Tuhi Chidānanda Hari\n Tuhi Rām - Raghupati Rāghava Rājā Rām\n Patita Pāvana Seetā Rām\n Tuhi Buddhā - Buddham Sharanam Gachchāmi\n Tuhi Allāh - Allāh O Akhbar Allāh O Akhbar" },

  { id: "1696", content: "Tu Hi Allāh Sāi Tu Hi Maulāh\n Sab Dharmon Ké Bhagavān\n Dhanya Ho Yeshu Sāi\n Dhanya Ho Hey Buddha Sāi\n Mahāveer Tum Ho Bābā Sāi\n Zorāshtra Sāi Kripā Karo\n Ishwar Sāi Rakshā Karo" },

  { id: "1697", content: "Tum Āyé Masihā Banké Kaliyuga Mé Sāi Rāmā\n Tum Rām Krishna Ho Yeshu Krishna Ho\n Tum Ho Yuga Avatārā\n Tum Sāi Bhakton Ki Masihā\n Tum Sāré Jagat Ki Masihā\n Tum Rām Krishna Tum Sāi Krishna Ho\n Tum Ho Yuga Avatārā" },

  { id: "1698", content: "Tum Bina Prāna Nahin O Sāi Meré\n Sab Bhakton Kā Tu Hai Sahārā\n Rahim Kaho Raghurām Kaho\n * Nānaka Yeshu Mahāveer Shri\n Shankara Premāvatāra Sāi Rām\n Tum Ho Meré Prān O Sāi Meré\n Tu Hai Sāi Bhagavān (x2)" },

  { id: "1699", content: "Tum Ho Shyām Rām Rahim\n Rām Rahim Shyām Rahim (x2)\n * Allāh Yeshu Buddha Mahāveera\n Nānaka Sāi Zorāshtra Bhi Ho\n Sarva Dharma Priya Sāi Nārāyana\n Sarva Dharma Priya Sāi Shankara" },

  { id: "1700", content: "Vāhé Guru (3) Ji Bolo\n Satya Nām (3) Ji Bolo\n Nitya Nitya Japiyé Teré Nām Ji Bolo\n Satya Nām (3) Ji Bolo\n Rām (6) Ji Bolo\n Nitya Nitya Japiyé Rām Nām Ji Bolo\n Krishna (6) Ji Bolo\n Nitya Nitya Japiyé Krishna Nām Ji Bolo\n Govinda Jai Jai Gopāla Jai Jai\n Rādhā Ramana Hari Govinda Jai Jai" },

  { id: "1701", content: "Yeshu Masihā Āyé Sarva Loka Jagannāthā\n Allāh Ho Akhbar Allāh Ho\n Sathya Sāi Mahādevā\n Sāi Jagannāthā Shirdi Sāi Jagannāthā\n Zorāshtra Buddha Mahāveer\n Guru Nānaka Jaya Sāi Rām" },

  { id: "1702", content: "Yuga Yuga Ké Avatārā Sāi Rāmā\n Sāi Krishnā Sāi Bābā\n Bābā Sāi Bābā, Bābā Sāi Bābā\n Allāh Ishwara Nānaka Sāi\n Buddha Zorāshtra Mahāveera Sāi\n Rām Rahim Jai (3) Rām (x2)" },

  { id: "1703", content: "Yuga Yuga Ké Avatārā Tum Hi Ho\n Meré Rām Meré Shyām Shirdi Sāi Parthi Rām\n Jag Ké Pālanhār Tum Hi Ho\n * Allāh Ishwara Teré Nām\n Sab Ko Sanmati Do Bhagavān\n Allāh Ishwar Teré Nām Shirdi Sāi Parthi Rām\n Jag Ké Pālanhār Tum Hi Ho" },
];
export default bhajans;
