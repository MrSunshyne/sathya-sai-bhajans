const bhajans = [
  { id: "001", content: ["Ambā Bhavāni Shiva Shambho Kumārā", "Shri Gananāthā Shāntākārā", "Purāna Purushā Sathya Sāi Nāthā", "Pranava Swarupā Parthishā"] },
  { id: "002", content: ["Ambikā Tanayā Gajānanā", "Gajavadanā Gananātha Gajānana", "Sāi Ganeshā Vināyakā", "Tribhuvana Pālaka Mangala Dāyaka", "Vidyā Buddhi Siddhi Pradāyaka", "Sāi Ganeshā Vināyakā (x2)"] },

  { id: "003", content: ["Ādi Poojita Gajānanā", "Mangalakāri Mahāganādhipā", "* Ambikā Tanayā Gajānanā", "Ambā Bhavāni Shiva Shambho Kumārā", "Jaya (4) Gajānanā"] },

  { id: "004", content: ["Ādi Pujya Deva Gajānanā", "Gauri Vara Tanayā Shubhānanā", "* Vigna Vināshaka Siddhi Vināyaka", "Jaya Jaga Vandana Tava Sharanam"] },

  { id: "005", content: ["Bhajo Gananāyaka Gajavadanā", "Mangala Dāyaka Shubha Charanā", "* Siddhi Vināyaka Shiva Nandanā", "Ānanda Dāyaka Chitta Chandanā", "Buddhi Pradāyaka Jaga Vandanā"] },

  { id: "006", content: ["Bhajoré (2) Gananātham Bhajoré", "Buddhi Pradāyaka Pāpa Vināshaka", "Vignesham Bhajoré", "Abhaya Pradāyaka Ānanda Dāyaka", "Shiva Nandanam Bhajoré Gananātham Bhajoré"] },

  { id: "007", content: ["Bhava Bhaya Bhanjana Sumana Vinodana", "Jaya Sāi Ganarāyā", "Bandha Vimochana Sumukha Gajānana", "Jaya Sāi Ganarāyā", "* Sindura Vadana Suranara Vandana", "Jaya Sāi Ganarāyā", "Ganarāyā Ganarāyā", "Hara Shiva Nandana Nitya Niranjana", "Jaya Sāi Ganarāyā"] },

  { id: "008", content: ["Bhavāni Nandana Bāla Gajānana", "Pranava Swarupā Pāhi", "Hey Parthipurishwara Sāi"] },

  { id: "009", content: ["Bhavāni Nandanā Siddhi Vināyaka", "Bhallaleshwarā Hey Gajānanā", "Sindura Vadana Shanmuga Sodara", "Hey Gajānanā", "* Vishwa Vanditā Sāi Gajānanā", "Vidya Dāyaka Hey Gajānanā", "Sindura Vadana Shanmuga Sodara", "Hey Gajānanā"] },

  { id: "010", content: ["Gajamukha Gajamukha Gananāthā", "Suramuni Vandita Gunasheelā (x3)"] },

  { id: "011", content: ["Gajamukha Ganapati Devā", "Ganesha Devā Sharanam Devā", "Lambodarā Shri Devā", "Ganesha Devā Sharanam Devā", "Chāra Bhujāngita Ganesha Devā", "Vigna Vināshaka Ganesha Devā", "Ekadanta Shri Devā", "Devādi Devā Sharanam Devā"] },

  { id: "012", content: ["Gajamukha Ganapati Gajānanā", "Gauri Nandana Gajānanā", "* Mooshika Vāhana Munijana Sevita", "Mangala Charanā Gajānanā", "Shambho Kumārā Sankata Hārā", "Shirdipurishā Gajānanā", "Puttaparthipurishā Gajānanā"] },

  { id: "013", content: ["Gajamukha Hey Gajamukha", "Hey Gajamukha Nāthā Vināyaka", "Gauri Putrā Modaka Hastā", "Gajamukha Nāthā Vināyaka", "Shāntākārā Vigna Vināshā", "Gajamukha Nāthā Vināyaka", "Parthipurishā Sāi Ganeshā", "Gajamukha Nāthā Vināyaka", "Gajamukha Nāthā Vināyaka (4)"] },

  { id: "014", content: ["Gajavadanā Gajānanā", "Gauri Tanayā Gajānanā", "* Jai (4) Gajānanā – 3", "Devādi Devā Gajānanā", "Gauri Tanayā Gajānanā"] },

  { id: "015", content: ["Gajavadanā (3) Gananāthā", "Gauri Nandana Shiva Kumarā", "Pārvati Nandana Hara Kumarā", "Siddhi Vināyaka Buddhi Pradāyaka", "Prashānti Vāsā Vigna Vināshaka", "Prashānti Vāsā Sāi Vināyaka"] },

  { id: "016", content: ["Gajavadanā Gananāthā", "Gajavadanā Deena Haranā", "Siddhi Dātā Shiva Tanayā", "Buddhi Pradāyaka Gajānanā", "Pārvati Nandana Bhava Bhaya Bhanjana", "Yuga Yuga Vandita Jaya Shri Ganeshā"] },

  { id: "017", content: ["Gajavadanā Gananāthā", "Gauri Tanayā Dayāmayā", "* Bhuvanādhārā Pranava Swarupā", "Pālaya (2) Parthipurishā"] },

  { id: "018", content: ["Gajavadanā Gananātha Nāthā", "Gauri Vara Tanayā Gunālaya", "* Vidyā Dāyaka Buddhi Pradāyaka", "Siddhi Vināyaka Hey Shubha Dāyaka"] },

  { id: "019", content: ["Gajānanā Gajānanā", "Prathama Poojana Ganarāyā", "* Prathama Prārthanā Shri Ganarāyā", "Lambodarā Ganarāyā (x2)"] },

  { id: "020", content: ["Gajānanā (2) Vigna Haranā Gajavadanā", "Gauri Nandana Gajānanā", "Shankara Tanayā Gajavadanā", "Shanmukha Sodara Gajānanā", "Bhakta Pālaka Gajavadanā", "Nitya Niranjana Gajānanā", "Nirupama Vadanā Gajavadanā", "Parthipurishwara Gajānanā", "Prashānti Nilaya Gajavadanā"] },

  { id: "021", content: ["Gajānanā Hey Shubhānanā", "Gauri Manohara Priya Nandanā", "Pashupati Tanayā Gajānanā", "Parama Niranjana Shubhānanā"] },

  { id: "022", content: ["Gajānanā Hey Shubhānanā", "Parama Niranjana Gajavadanā", "Vakra Tunda Dhara Vigna Vināshā", "Pranava Swarupā Parthipurishā", "Siddhi Vināyakā Pāhi Gajānanā", "Parama Niranjana Gajavadanā"] },

  { id: "023", content: ["Gajānanam Girijā Tanayam", "Gangādhara Shiva Kumāram Devam", "* Suramuni Poojita Charanam Sharanam", "Sadāshrayāmi Sāi Charanam"] },

  { id: "024", content: ["Gananātha Gajānana Vigneshwara", "Buddhi Pradāyaka Charanam Ganeshā", "* Neelakantha Suta Gajānanā", "Pāhi Prabhu Mām Gajānanā", "Parthipurishwara Shubhānanā Sāi"] },

  { id: "025", content: ["Gananāthā Gananāthā", "Ganapati Devā Gananāthā", "Moksha Pradātā Vigna Vināshā", "Mangala Dāyaka Bhava Bhaya Nāshā", "Ganapati Devā Gananāthā"] },

  { id: "026", content: ["Gananāthā Gananāthā", "Mooshika Vāhana Jaya Gananāthā", "Charanam Sharanam Gajānanā", "* Siddhi Vināyaka Gananāthā", "Mukti Pradāyaka Gananāthā", "Jagadodhārā Jaya Gananāthā", "Charanam Sharanam Gajānanā"] },

  { id: "027", content: ["Gananāthā Gananāthā Gauri Nandanā", "Gananāthā Gananāthā Shambho Nandanā", "Gananāthā Gananāthā Sāi Gananāthā", "Pranava Swarupā Moolādhārā", "Mooshika Vāhanā Jaya Gananāthā", "Gananāthā Gananāthā Shambho Nandanā", "Gananāthā Gananāthā Sāi Gananāthā"] },

  { id: "028", content: ["Gananāthā Omkāra Rupā", "Shri Gananāthā Gnāna Rupā", "* Siddhi Vināyakā Herambā", "Shri Gananāthā Gnāna Rupā"] },

  { id: "029", content: ["Gananātha Sāi Gajānanā", "Parthishwarā Dukha Bhanjanā", "Kailāshapaté Shiva Nandanā", "Deena Nātha Haré Hey Niranjanā", "Siddhi Pradātā Shubhānanā", "Jagadishwara Shānti Niketanā (x2)"] },

  { id: "030", content: ["Gananāyakam Sāi Gananāyakam", "Sadānanda Sundara Gananāyakam", "Varadāyakam Sāi Shubha Dāyakam", "Parthipurishwara Gananāyakam"] },

  { id: "031", content: ["Ganapati Devā Hey Gananāyaka", "Pranava Swarupā Hey Shubha Dāyaka", "Pārvati Nandana Hey Dukha Bhanjana", "Lambodara Hey Mooshika Vāhana (x2)", "Prathama Poojana Sai Gajānana"] },

  { id: "032", content: ["Ganapati Gananāyaka", "Gajamukha Shubha Dāyaka", "Vigna Nāshakā Devā Vallabheshwarā", "Vigna Nāshakā Vallabheshwarā", "Siddhi Dāyaka Ganesha Siddhi Dāyaka", "Buddhi Dāyaka Ganesha Buddhi Dāyaka", "Vigna Nāshaka Devā Vallabheshwarā", "Vigna Nāshakā Vallabheshwarā"] },

  { id: "033", content: ["Ganapati Ganarāyā Mangala Murti Moriyā", "Mātanga Vadanā Moriyā", "Mooshika Vāhana Moriyā", "Ganapati Bappā Moriyā Ganapati Bappā Moriyā", "* Varada Vināyaka Moriyā", "Sindura Vadanā Moriyā", "Varada Vināyaka Moriyā Mahāganapati Moriyā"] },

  { id: "034", content: ["Ganapati Om Jaya Ganapati Om", "Gajamukha Varadā Ganapati Om", "Mooshika Vāhana Gajānanā", "Modaka Hastā Gajānanā", "Parama Niranjana Gajānanā", "Pāda Namaste Gajānanā – Tava"] },

  { id: "035", content: ["Ganapati Om (2) Sāi Ganapati Om", "Siddhi Vināyaka Ganapati Om", "Buddhi Pradāyaka Ganapati Om", "* Hey Shiva Nandana Jaya Jaga Vandana", "Sāi Ganapati Om", "Mooshika Vāhana Modaka Hastā", "Sāi Ganapati Om", "Sāi Ganapati Om Sāi Ganapati Om", "Hey Shiva Nandana Hey Gajānana (2) – 4"] },

  { id: "036", content: ["Ganapati Om Sāi Om Ganeshāya Namah Om", "Vigna Vināshaka Hey Gananāthā", "Patita Pāvana Hey Sāi Nāthā", "Parthipurishwara Hey Gananāthā", "Jagata Paripālaka Sāi Gananāthā", "Jaya Gananātha Om Gananātha (x3)"] },

  { id: "037", content: ["Ganesha Sharanam Parama Pāvanam", "Sathya Sāinam Gajānanam", "Nitya Smaranam Parama Pāvanam", "Sathya Sāinam Gajānanam", "Satguru Charanam Parama Pāvanam", "Sathya Sāinam Gajānanam", "Bhava Bhaya Haranam Parama Pāvanam", "Sathya Sāinam Gajānanam"] },

  { id: "038", content: ["Ganesha Sharanam Sharanam Ganeshā (x4)", "Sāisha Sharanam Sharanam Sāishā (x4)"] },

  { id: "039", content: ["Ganesha Sharanam Sharanam Ganeshā", "Ganesha Smaranam Smaranam Ganeshā", "Mooshaka Vāhana Shri Gananāthā", "Devā Ganeshā", "* Vandana Ganesha Gananāthā", "Mangala Ganesha Gananāthā", "Gauri Ganesha Gananāthā", "Sāi Ganesha Gananāthā", "Devā Ganeshā"] },

  { id: "040", content: ["Ganeshwarā Gajamukheshwarā", "Kārunya Lāvanya Vigneshwarā", "* Sankata Haranā Gajānanā", "Shankari Putrā Shubhānanā (Shiva) (x2)"] },

  { id: "041", content: ["Gauri Ganesh Umā Ganesh", "Pārvati Nandana Sāi Ganesh", "Sharanam Ganesh Sharanam Ganesh", "Shiva Nandana Ganapati Ganesh"] },

  { id: "042", content: ["Gauri Ganeshā Vināyaka (x2)", "Shuklāmbara Gananātha Gajānanā", "Hey Gananāthā Gajānanā", "Gajavadanā Jaya Ganapati Vandana", "Mangala Murti Gajānanā (x2)"] },

  { id: "043", content: ["Gauri Nandana Gajānanā", "Girijā Nandana Niranjanā", "Pārvati Nandana Shubhānanā", "Pāhi Prabho Mām Pāhi Prasannā", "Girijā Nandana Niranjanā"] },

  { id: "044", content: ["Gauri Nandana Gajavadanā", "Ganesha Varadā Mām Pāhi", "Ganapati Ganapati Ganeshwarā", "Gajamukha Gajamukha Vigneshwarā", "Gauri Nandana Gajavadanā", "Ganesha Varadā Mām Pāhi"] },

  { id: "045", content: ["Gauri Suta Hey Bāla Gajānana", "Herambā Jaya Mooshika Vāhana", "* Jaya Lambodara Vigna Vināshana", "Jaya Jaya Ganesha Jaya Shri Ganesha", "Parama Dayāgana Pashupati Ranjana", "Bhālanetra Suta Parthi Gajānana"] },

  { id: "046", content: ["Gauri Sutāya Ānanda Dāyaka", "Lambodarā Shiva Shambho Kumārā", "Vigna Vināshaka Siddhi Vināyaka", "Mangala Dāyaka Gajavadanā", "Mooshika Vāhana Sāi Gajānanā", "Hey Parameshā Parthishwarā"] },

  { id: "047", content: ["Gauri Sutāya Om Namah Om", "Lambodarāya Om Namah Om", "* Vigneshwarāya Om Namah Om", "Sāishwarāya Om Namah Om"] },

  { id: "048", content: ["Gauri Tanayā Hey Gananāthā", "Vigneshwara Hey Vigna Vināshā", "* Pranavākārā Sāi Gajānana", "Sāi Gajānana Sāi Gajānana", "Pashupati Tanayā Sāi Gajānana"] },

  { id: "049", content: ["Girijā Nandana Bhava Bhaya Bhanjana", "Hey Shiva Nandana Gajānanā", "* Mooshika Vāhana Jaya Jaga Vandana", "Parama Niranjana Shubhānanā – Hey"] },

  { id: "050", content: ["Hey Gajānanā Hey Shubhānanā", "Gauri Manoharā Shiva Nandanā", "Pashupati Tanayā Gajānanā", "Parama Niranjana Shubhānanā", "Hey Parama Niranjana Shubhānanā", "Gauri Manoharā Shiva Nandanā"] },

  { id: "051", content: ["Hey Gananāthā Gajānanā", "Herambā Gajānanā", "* Gauri Nandana Gajānanā", "Gajānanā Hey Gajānanā", "Siddhi Vināyaka Gajānanā - Vara"] },

  { id: "052", content: ["Hey Shiva Nandana Jaya Jaga Vandana", "Jaya Gauri Suta Pāhi Gajānana", "* Pārvati Nandana Parama Dayāgana", "Pāhi Prabho Mām Pāhi Gajānana -2"] },

  { id: "053", content: ["Hey Shubha Vadanā Himagiri Sadanā", "Gauri Nandana Gajānanā", "Dānava Bhanjanā Mānasa Ranjanā", "Shritajana Sanmukha Shubha Charanā", "Parama Pāvanā Vijaya Kāranā", "Parthi Sadanā Shri Ramanā"] },

  { id: "054", content: ["Hey Vigneshwarāya Namah", "Hey Gauri Sutāya Namah", "Hey Parthi Vāsāya Namah", "Hey Sāishwarāya Namah", "Teré Charanon Mé Jo Āyé", "Vo Khāli Kabhi Na Jāyé", "Pāyé Ānanda Barā Ananta Jeevan", "Hey Siddheshwarāya Namah"] },

  { id: "055", content: ["Jai Ganarāyā Shri Ganarāyā", "Jai Ganarāyā Shri Ganarāyā", "Mangala Murti Moriyā", "Siddhi Vināyaka Mangala Dātā", "Siddhi Vināyaka Mangala Dāyaka", "Mangala Murti Moriyā", "Ashta Vināyaka Mangala Dāyaka", "Mangala Murti Moriyā", "Sindura Vadanā Pankaja Charanā", "Sindura Vadanā Pankaja Charanā", "Ganapati Bappā Moriyā"] },

  { id: "056", content: ["Jai Ganesh Jai Jai Ganesh Jai Jai Ganesh", "Gananāthā Jai Ganesh Sāi Nāthā", "Shiva Shambho Kumārā Devā", "Shubha Dātā Parthi Vāsā", "Hey Vigna Nāsha Devā Hey Vishwā Parameshā", "Jai Ganesha Gananāthā Jai Ganesh Sāi Nāthā"] },

  { id: "057", content: ["Jai Ganesh Pāhimām Shri Ganesh Rakshamām", "Jai Ganesha (3) Rakshamām", "Lambodara Gauri Suta Jai Ganesha Pāhimām", "Mangalakara Sankata Hara", "Jai Ganesha Rakshamām", "Jai Ganesha (3) Rakshamām"] },

  { id: "058", content: ["Jai Ganesh Pāhimām Shri Ganesh Rakshamām", "Sāi Ganesh Pāhimām Trāhimām Rakshamām", "Jai Gananāthā Pāhimām", "Gajavadanā Rakshamām", "Sāi Ganesh Pāhimām Trāhimām Rakshamām"] },

  { id: "059", content: ["Jai (3) Gananāyaka, Jai (2) Vigna Vināshaka", "Jaya Shubha Mangala Dāyaka", "Vidyā Buddhi Pradāyaka", "Gajavadanā Gauri Nandana (x2)", "Gangādharā Shiva Shambho Nandana"] },

  { id: "060", content: ["Jai (4) Ganapati Devā", "Gajānanā Gajānanā", "Gajānanā Hey Ganapati Devā", "* Mātā Pārvati Pitā Mahādevā", "Gajānanā Gajānanā", "Gajānanā Hey Ganapati Devā"] },

  { id: "061", content: ["Jaya Ganapati Siddhi Vināyaka", "Jaya Ganapati Mangala Dāyaka", "Jai Ganesha (3) Girijā Suta Jai Shri Ganesha", "Modaka Hasta Sindura Shobhita", "Lambodarā Gananāyakā", "Chandrashekharā Shambho Nandana", "Ganapati Shri Shubha Dāyaka", "Jai Ganesha (3) Girijā Suta Jai Shri Ganesha"] },

  { id: "062", content: ["Jaya Ganesh (3) Devā", "Shri Ganesh (3) Devā", "Bhakta Uddhārana Bhaktajana Poshanā", "Pāpa Vināshanā Bhakta Samrakshanā", "Omkāra Pranava Shri Rupā", "Pārvati Nandanā Hey Shiva Nandanā"] },

  { id: "063", content: ["Jaya Ganesha Jaya Mangala Dātā", "Vandé Saraswati Sāi Mātā", "* Mooshika Vāhana Shri Gananāthā", "Vigna Vināshā Bhāgya Vidhātā", "Vandé Saraswati Sāi Mātā"] },

  { id: "064", content: ["Jaya (2) Gajānana Gananāthā", "Gauri Nandana Hey Gananāthā", "* Buddhi Pradāyaka Hey Gananāthā", "Siddhi Vināyaka Hey Gananāthā"] },

  { id: "065", content: ["Jaya Jaya Girijā Bāla Gajānana", "Hey Shiva Shankara Pārvati Nandana", "* Vigna Vināshaka Vimala Gajānana", "Saravana Sevita Sumukha Gajānana", "Tava Pada Charanam Sharanam Gajānana"] },

  { id: "066", content: ["Jaya (3) Hey Gajānanā", "Gajānanā Hey Gajavadanā", "* Pārvati Nandana Gajānanā", "Pashupati Tanayā Gajānanā", "Ādi Poojya Deva Gajānanā"] },

  { id: "067", content: ["Jaya (3) Hey Gajānanā", "Pārvati Nandana Shubhānanā", "* Neelakantha Suta Gajānanā", "Nitya Shubhāngā Gajānanā"] },

  { id: "068", content: ["Jaya (3) Hey Sāmbava Rājā", "Pāshānkushadhara Shri Ganarājā", "* Sindura Vadanā Mangala Charanā", "Ambā Nandana Bhava Bhaya Haranā"] },

  { id: "069", content: ["Jaya Jaya Vigna Vināsham", "Gananātham Shri Gananātham", "Pārvati Nandana Parama Dayāgana", "Māyā Vināshaka Mooshika Vāhana", "Mangala Kara Hey Sāi Gajānana", "Gananātham Shri Gananātham"] },

  { id: "070", content: ["Jaya Lambodarā Pāhimām", "Jagadambā Suta Rakshamām", "* Sharanāgata Rakshamām", "Hey Karunānidhé Pāhimām", "Gananātha Samrakshamām - Shri", "Nija Bhaktimudam Dehimām"] },

  { id: "071", content: ["Jaya Shri Ganeshā Vigna Nāsha Gajānanā", "Vidyā Buddhi Sarva Siddhi Suranjanā", "Jaya Herambā Shri Jagadambā Nandanā", "Ekadantā Dayāvanta Shubhānanā", "Mangala Dāyaka Shri Vināyaka Vandanā"] },

  { id: "072", content: ["Jaya Vallabha Gananāyaka", "Jaya Guha Sodara Shubhadātā", "Jaya Hey Ishwari Nandanā", "Jaya Vara Dāyaka Namostuté", "Jaya Parthishwara Namostuté", "Jaya Sāishwara Namostuté"] },

  { id: "073", content: ["Lambodarā Gananāthā (x2)", "Lambodarā Vigneshwarā", "Mayureshwarā Siddheshwarā", "Namo (2) Gananātha Gajānana Lambodarā"] },

  { id: "074", content: ["Lambodarā Gananātha Gajānana", "Pārvati Nandana Shubhānanā", "Pashupati Tanayā Siddhi Vināyaka", "Pranavākārā Shambho Nandanā", "Parthipurishā Sāi Gajānanā", "Hey Shiva Nandana Shubhānanā"] },

  { id: "075", content: ["Lambodara Hey Gauri Nandana", "Vigna Vināshaka Shubhānanā", "Siddhi Vināyaka Hey Dukha Bhanjana", "Asura Vināshaka Shubhānanā", "Gauri Nandana Mooshika Vāhana", "Vigna Vināshaka Shubhānanā"] },

  { id: "076", content: ["Lambodarā Hey Vigneshwarā", "Shambho Kumārā Siddheshwarā", "Ambikā Tanayā Omkāreshwara", "Heramba Sāi Parthishwarā"] },

  { id: "077", content: ["Lambodarā Jaya Gajānanā", "Pārvati Nandana Parama Dayāgana", "* Bandha Vimochana Bhava Bhaya Bhanjana", "Pranava Swarupā Hey Shiva Nandana", "Pāhi Prabho Mām Pāhi Gajānanā"] },

  { id: "078", content: ["Lambodarā Jaya Gauri Sutā", "Ganādhipā Jaya Gājānanā", "* Bhālachandradhara Gajakarneshwarā", "Parthishwarā Mām Pāhi Prabho", "Vigneshwara Mām Pāhi Prabho"] },

  { id: "079", content: ["Mahādevā Hey Gajavadanā", "Sāi Ganeshā Gajavadanā", "Mangala Rupā Gajavadanā", "Parthi Ganeshā Gajavadanā", "Pārvati Nandana Gajavadanā", "Gauri Tanayā Gajavadanā"] },

  { id: "080", content: ["Mahāganapaté Namostuté", "Mātanga Vadanā Namostuté", "* Ādi Poojita Gananāthā", "Ānanda Dāyaka Gananāthā", "Prathama Vandana Pranavākārā", "Vigneshwarā Vināyakā"] },

  { id: "081", content: ["Mangala Charanā Gajānanā", "Gajavadanā Shubhānanā", "* Vidyā Dāyaka Buddhi Pradāyaka", "Gauri Tanayā Gajānanā"] },

  { id: "082", content: ["Mangala Dāyaka Hey Gananāthā", "Pranava Swarupā Vigna Vināshā", "Hey Shiva Nandana Pāhi Dayālā", "Parthipurishwara Jagatparipālā", "Pranava Swarupā Vigna Vināshā"] },

  { id: "083", content: ["Mangalakāri Vigna Vināshaka", "Sāi Gajānana Moriyā", "Sāi Gajānana Moriyā Mangala Murti Moriyā", "Sāi Gajānana Moriyā", "Sharana Prabhu Ham Āyé Tihāré", "Sāi Gajānana Moriyā", "Sarva Vighan Karo Dur Hamāré", "Sāi Gajānana Moriyā", "Vigna Vināshaka Bhava Bhaya Nāshaka", "Sāi Gajānana Moriyā", "Sāi Gajānana Moriyā Mangala Murti Moriyā", "Sāi Gajānana Moriyā"] },

  { id: "084", content: ["Mātanga Vadanā Ānanda Sadanā", "Mahādeva Shiva Shambho Nandanā", "* Māyā Vināshaka Mooshika Vāhana", "Mātā Maheshwari Bhavāni Nandana", "Mahāganapaté Mangala Charanā (x2)"] },

  { id: "085", content: ["Mātanga Vadanā Mām Pālaya", "Maulishwara Shiva Gauri Nandana (x2)", "Mangala Dāyaka Siddhi Vināyaka"] },

  { id: "086", content: ["Mooshika Vāhana Gajānanā", "Modaka Hastā Gajānanā", "Chāmara Karna Gajānanā", "Vilambita Sutra Gajānanā", "Vāmana Rupā Gajānanā", "Maheshwara Putra Gajānanā", "Vigna Koti Nāshaka Gajānanā", "Siddhi Vināyaka Pālayamām"] },

  { id: "087", content: ["Moriyā Moriyā Mangala Murti Moriyā", "Lambodara Ganarāja Gajānanā", "Sindura Vadanā Gauri Nandana", "Ashta Vināyaka Siddhi Vināyaka", "Mangala Murti Moriyā"] },

  { id: "088", content: ["Namana Prathama Ganarāja Gajānana", "Mahāganapate Pārvati Nandana", "Vidya Dāyaka Hey Gananāthā", "Mukti Pradāyaka Buddhi Dātā", "Mangala Murti Vigna Vināshaka", "Sharana Tumhein Hey Siddhi Vināyaka"] },

  { id: "089", content: ["Pāhi Gajānana Deenāvanā", "Sindura Vadanā Kshritajana Pālana", "* Ambikā Tanayā Amarādishwara", "Aganita Guna Gana Ānanda Dāyaka"] },

  { id: "090", content: ["Parama Niranjana Suramuni Vandita", "Pāpa Vimochaka Sāishwarā", "Sāishwarā Hey Ganeshwarā", "Yuga Yuga Vandita Jyoti Ganeshā", "Gajamukha Gunasheela Sāi Ganeshā", "Sāi Ganeshā Satya Ganeshā", "Sāishwarā Hey Ganeshwarā"] },

  { id: "091", content: ["Pārvati Nandana Bāla Gajānana", "Hey Shiva Nandana Mooshika Vāhana", "* Vidyā Buddhi Siddhi Pradāyaka", "Suramuni Vandita Girijā Nandana", "Jaya (3) Hey Jaya Jaga Vandanā", "Parthipurishwara Sāi Gajānana", "Parama Niranjana Sāi Gajānana"] },

  { id: "092", content: ["Pārvati Nandana Parama Niranjana", "Ganapati Bappā Moriyā", "Siddhi Vināyaka Buddhi Pradāyaka", "Mangala Murti Moriyā", "Jaya Ho Gajānana Vigna Harana", "Vilambita Sutra Sundara Vadan", "Shiva Shambho Kumārā Lambodarā", "Klesha Vimochana Vigneshwarā"] },

  { id: "093", content: ["Pārvati Tanayā Vigna Vināshaka", "Mangala Dāyaka Devā", "Jai Ganesh (3)", "Sindura Vadanā Prathama Vandana", "Alaka Niranjana Mooshika Vāhana", "Pāshānkushadhara Shambho Nandanā", "Mangala Dāyaka Devā", "Jai Ganesh (3)"] },

  { id: "094", content: ["Pashupati Tanayā Bāla Gajānanā", "Tum Ho Vigna Vināshā Ganeshā", "Hey Shiva Nandana Pāhi Gajānana", "Vidyā Buddhi Pradātā", "Mangalakara Hey (2)", "Sundara Sāi Ganeshā"] },

  { id: "095", content: ["Prasanna Ho Sathya Sāi Ganeshā", "Prathama Poojita Vigna Vināshā", "* Pāshānkushadhara Parama Pavitrā", "Mooshika Vāhana Gajānanā", "Lambodara Hey Shambho Kumārā", "Ambikā Tanayā Gajānanā"] },

  { id: "096", content: ["Prathama Bhajo Hey Ganapati Sāi", "Jai Jai Jai Jaya Sāi", "Buddhi Pradāyaka Hey Gananāyaka", "Ganapati Sāi Hey Shubhadāyi", "Jai Jai Jai Jaya Sāi"] },

  { id: "097", content: ["Prathama Poojana Gananāyaka", "Siddhi Pradātā Vināyaka", "Lambodara Shri Shubha Dāyaka", "Buddhi Pradātā Vināyaka", "* Vigneshwara Sura Nara Vandana", "Ekadanta Adwaitya Prabodhana", "Bhava Tāpa Shoka Vināshana", "Hey Deena Nātha Gajānanā", "Lambodara Shri Shubha Dāyaka", "Buddhi Pradāta Vināyaka"] },

  { id: "098", content: ["Prathama Vandanā Gananāthā", "Gajavadanā Jaya Gananāthā", "* Vidyā Dāyakā Buddhi Pradāyaka", "Vigna Vināshaka Vināyakā", "Suramuni Vandita Vināyaka"] },

  { id: "099", content: ["Prathama Vandanā Gauri Nandana", "Hey Shiva Nandana Pāhi Gajānanā", "* Ekadanta Gunavanta Vināyaka (x2)", "Vigna Harana Shubha Mangala Charanā", "Pranava Swarupā Pāhi Gajānana"] },

  { id: "100", content: ["Sāi Devā Shri Ganeshā", "Vandé Vigna Vināshā Devā", "Pārvati Nandana Parthipurishā", "Hey Shiva Nandana Jaya Sāishā (x2)"] },

  { id: "101", content: ["Sāi Ganarāyā (2) Sathya Sāi Ganarāyā", "Vidyā Dāyaka Buddhi Pradāyaka", "Siddhi Vināyaka Gajānanā", "Sāi Ganarāyā Gajavadanā Ganarāyā", "Sāi Ganarāyā", "Mangala Rupā Pranava Swarupā", "Parthi Sāishā Gajānanā", "Nityam Smaranam Satguru Charanam", "Sathya Sāinam Gajānanā", "Sāi Ganarāyā Gajavadanā Ganarāyā", "Sāi Ganarāyā"] },

  { id: "102", content: ["Shambho Kumārā Gauri Tanayā", "Gajānanā Sadayā Jaya Jaya", "Gajānanā Sadayā", "Varada Ganeshā Durita Vināshā", "Pranavākārā Nāthā Sadayā", "Gajānanā Sadayā Jaya Jaya", "Gajānanā Sadayā"] },

  { id: "103", content: ["Sharanam (2) Pāhi Gajānanam", "Vigna Vināshakam Gananātham (x2)", "Buddhi Pradāyaka Pāhi Gajānana", "Asura Nikantana Pāhi Gajānana", "Pāhi Gajānanā Pāhi Gajānanā", "Vigna Vināshaka Gananātham"] },

  { id: "104", content: ["Shri Gananāthā Jaya Gananāthā", "Pārvati Shiva Tanayā", "Jaya Gananāthā Pārvati Shiva Tanayā", "Shankara Nandana Vijaya Gajānana", "Kalimala Bhanjana Sura Nara Vandana"] },

  { id: "105", content: ["Shri Ganesha (3) Pāhimām", "Jaya Ganesha (3) Rakshamām", "Shri Ganesha Pāhimām", "Jaya Ganesha Rakshamām", "Jaya Ganesha (3) Rakshamām"] },

  { id: "106", content: ["Siddhi Vināyaka Mangala Dātā", "Buddhi Pradāyaka Gananāthā", "* Vigna Harana Prabhu Vigneshwara Tum", "Gauri Nandana Hey Jaga Vandana", "Namostuté (2)"] },

  { id: "107", content: ["Siddhi Vināyaka Namostuté", "Chitta Ranjana Namostuté", "* Bhakta Paripālana Namostuté", "Pashupaté Tanayā Namostuté", "Bāla Gajānana Namostuté", "Parthi Gajānana Namostuté – Putta"] },

  { id: "108", content: ["Sundara Mukha Shri Gajānanā", "Ekadanta Shri Gajānanā", "Prathama Namāmi Gajānanā", "Rishi Muni Vandita Gajānanā"] },

  { id: "109", content: ["Sundara Sundara Vināyakā", "Shubha Mangala Dāyaka Vināyakā", "Vigna Koti Hara Vimala Gajānana", "Sakala Vigna Hara Sāi Gajānana", "Ishwari Nandana Parthi Gajānana"] },

  { id: "110", content: ["Suramuni Vandita Vināyaka", "Ānanda Dāyaka Vināyaka", "Hey Shiva Nandana Shubhānanā", "Sāi Ganeshā Vināyaka", "Sāi Ganeshā (3) Vināyaka (x2)"] },

  { id: "111", content: ["Tum Ho Vigna Vināshā Ganeshā (x2)", "* Pārvati Nandana Pāhi Gajānana", "Pranava Swarupā Parthipurishā", "Pāhi Ganeshā Vigna Vināshā"] },

  { id: "112", content: ["Vāmana Rupā Ganādhipā", "Pārvati Nandana Pāhi Gajānana", "* Ekadanta Gunavanta Vināyaka", "Māyā Vināshaka Mooshika Vāhana", "Vidyā Buddhi Siddhi Pradāyaka", "Pranavākārā Hey Shiva Nandana"] },

  { id: "113", content: ["Vandé Umā Nandanam Gajānanam", "Suramuni Sevita Sumukha Gajānanam", "* Vidyā Dāyaka Buddhi Pradāyaka", "Siddhi Vināyaka Pāhi Gajānanam"] },

  { id: "114", content: ["Vandeham Shri Gananāyakam", "Vidyāpatim Shri Vināyakam", "* Pranamāmyaham Vigneshwaram", "Pārvati Tanayam Gajānanam", "Sāi Ganesham Shubhānanam (x2)"] },

  { id: "115", content: ["Vigna Harana Prabhu Pāhi Gajānana", "Pārvati Nandana Parama Dayāgana", "Nitya Niranjana Bhava Bhaya Bhanjana", "Pashupati Tanayā Hey Jagat Vandana", "Lambodara Hey Mooshika Vāhana", "Pārvati Nandana Parama Dayāgana"] },

  { id: "116", content: ["Vigna Vināshaka Devādi Devā", "Ādi Sanātana Devā", "Prathama Pujya Gananāthā", "Bhava Bhaya Bhanjana Nitya Niranjana", "Siddhi Vināyaka Devā", "Mangala Dāyaka Shambho Manohara", "Prathama Pujya Gananāthā"] },

  { id: "117", content: ["Vigna Vināshaka Gananāthā", "Gajānanā Hey Gajavadanā", "Gananāthā Gananāthā", "Pranava Swarupā Gananāthā", "Parthipurishwara Gananāthā", "Gajānanā Hey Gajavadanā"] },

  { id: "118", content: ["Vigneshwarā Gananātha Gajānanā", "Pārvati Nandana Shubhānanā", "Mangala Murti Shri Ganarāyā", "Shri Ganārāyā Jaya Ganarāyā (x2)", "Siddhi Vināyaka Gajānanā", "Ashta Vināyaka Gajānanā"] },

  { id: "119", content: ["Vigneshwarā Vināyaka", "Vishwādhārā Namostuté", "Namostuté Namostuté", "Vishwādhārā Namostuté", "Suramuni Vandita Vināyaka", "Bhava Bhaya Nāshā Vināyaka", "Sharanam (2) Vināyaka", "Sharanam (2) Vināyaka"] },

  { id: "120", content: ["Vināyaka Vigna Nāshaka", "Anātha Rakshaka Ānanda Dāyaka", "Umā Maheshwara Hey Shiva Nandana"] },

  { id: "121", content: ["Vināyaka Vināyaka", "Vigna Vināshaka Vināyaka", "Gauri Nandana Hey Shiva Nandana", "Pārvati Nandana Gajānanā", "Mooshika Vāhana Gajānanā", "Modaka Hastā Gajānanā"] },

  { id: "122", content: ["Vināyaka Vināyaka", "Vishwādhārā Vināyaka", "* Siddhi Vināyaka Bhava Bhaya Nāshā", "Suramuni Vandita Shri Ganeshā", "Vishwādhārā Vināyaka"] },

  { id: "123", content: ["Yuga Yuga Vandita Varada Ganeshā", "Pālaya Pālaya Gauri Ganeshā", "* Pārvati Nandana Gajavadanā", "Jaya (3) Hey Gananāthā", "Pālaya Varada Ganeshā Pālaya Gauri Ganeshā", "* Mooshika Vāhana Vigneshwarā", "Jaya (3) Hey Lambodarā", "Pālaya Varada Ganeshā Pālaya Gauri Ganeshā"] },

  { id: "200", content: ["Akhanda Jyoti Jalāo Sāi Mana Mandir Mé", "Akhanda Jyoti Jalāo (2)", "Koti Surya Sama Teja Swarupā", "Sāi Tum Ho Divya Swarupā", "Akhanda Jyoti Jalāo Akhanda Jyoti Jalāo", "Divya Jyoti Gnāna Jyoti Prema Jyoti Jalāo", "Akhanda Jyoti Jalāo (2)"] },

  { id: "201", content: ["Akhila Jagat Ké Dātā Sāi", "Shirdi Nivāsi Bhagavān", "Darshan Do Bhagavān", "Kalimala Bhanjana Parama Dayāgana", "Karunānidhé Shirdi Vāsā (Parthi)", "Deena Janāvana Parthi Maheshā", "Shirdi Nivāsi Bhagavān", "Darshan Do Bhagavān"] },

  { id: "202", content: ["Ānanda Shri Sāi Parthipurishā", "Sadānanda Mādhava Prashānti Vāsā", "* Sundara Rupa Shri Satchidānandā", "Mandaradhara Govinda Mukundā"] },

  { id: "203", content: ["Ānandamaya Bhagavān", "Hey Premamaya Bhagavān", "O Bhagavān Sāi Bhagavān", "* Hey Karunānidhé Prabhu Sāi Rām", "Kripānidhé Deenon Ké Prān", "Lelo Prabhu Mujhé Sharana Lagālo", "Dayā Karo Bhagavān (Mujhé)", "Mujhé Kripā Karo Bhagavān"] },

  { id: "204", content: ["Anātha Bandhu Sāi Prabhu", "Aparādha Kshamā Karo Sāi Prabhu", "Jeeva Yātrā Mé Sāth Raho", "Prema Bhakti Ham Ko Dijo", "Hridaya Mandira Se Mat Jāo", "Charanāmrita Sevā Dijo Prabhu"] },

  { id: "205", content: ["Antaranga Sāi Anātha Nātha Sāi", "Deena Bandhu Sāi Karunā Sindhu Sāi", "* Rām Krishna Shiva Shakti Prema Rupa Sāi", "Yuga Avatāra Bābā Shri Sathya Sāi"] },

  { id: "206", content: ["Antarjyoti Namo Paramātma Jyoti Namo", "Akhanda Jyoti Namo Mama Jeevana Jyoti Namo", "Antaryāmi Namo Jaya Sadguru Sāi Namo"] },

  { id: "207", content: ["Antaryāmi Sāi Murāri", "Deena Dukhiyon Ké Tuma Hitakāri", "* Sāi Nām Ki Mahimā Bhāri", "Bhava Sāgara Se Pār Utāri", "Sāi Rām (3) Gāo"] },

  { id: "208", content: ["Antaryāmi Tu Hi", "Ālola Tulasi Dhāri", "Ashthānga Namana Karoun Āo Sāi Rām", "Tu Hi Mātā Pitā Tu Hi Bandhu Sakhā", "Tu Hi Sadguru Nātha O Meré Sāi Rām", " "] },

  { id: "209", content: ["Āo Pyāré Nayana Hamāré Sāi Hamāré Āo", "Tum Bina Koyi Nahin Rakhawālé", "Tum Bina Kaun Sahāré", "Tum Bina Kaun Sahāré Āo Sāi Pyāré"] },

  { id: "210", content: ["Āo Sāi Nārāyana Darshana Dedo", "Tum Ho Prema Swarupā", "* Tum Hi Ho Shivā Tum Hi Ho Shakti", "Tum Ho Antaryāmi – Sāi"] },

  { id: "211", content: ["Āo Shankara Sāi Nātha", "Mana Mandir Mé Sāi Nātha", "Bholénāthā Hey Mahādevā", "Sathya Sāi Nātha Hi Mahādevā", "Sāi Nātha (4)", "Shirdipuri Mé Tum Né Samāyé", "Ab Meré Man Mandir Mé", "Parthipuri Mé Tum Né Samāyé", "Ab Meré Man Mandir Mé", "Āo Sāi Man Mandir Mé", "Ghata Ghata Tu Hi Samāyé", "Sāi Nātha (4)"] },

  { id: "212", content: ["Araja Suno Meré Parama Kripālu", "Parthishwara Sāi Devā", "* Satya Sanātana Antaryāmi", "Sakala Charāchara Tum Ho Swāmi", "Janana Marana Se Pār Karo", "Bhava Bandhana Se Uddhāra Karo"] },

  { id: "213", content: ["Ārati Utāroun Guru Mahārāj O Guru Mahārāj", "Mā Jai Jagadambé Durgé Teri Ārati Utaroun", "Shri Rāmchandra Raghuveerā", "Teri Ārati Utāroun", "Hari Nārāyana Brijabāla Teri Ārati Utaroun", "Hara Mahādeva Shiva Shambo", "Teri Ārati Utāroun", "Sāi Bābā Sāi Devā Teri Ārati Utāroun", "Ārati Utāroun Bābā Ārati Utāroun"] },

  { id: "214", content: ["Aravinda Lochana Ārtha Janāvana", "Sāi Nārāyana Satya Nārāyana", "* Eeshwarāmba Nandana Dosha Nivārana", "Parama Niranjana Hey Shubhānana"] },

  { id: "215", content: ["Arunā Ramanā Shri Gurudevā", "Sheshā Ramanā Satguru Devā", "* Bhava Bhaya Haranā Shri Sāi Devā", "Shri Sāi Devā Jaya Sāi Devā", "Guru Hai Sat Chit Ānanda Devā", "Ānanda Devā Shri Sāi Devā"] },

  { id: "216", content: ["Ātmā Mé Bas Jāo Bābā (2)", "Tum Bina Mana Mandir Hein Suné", "Ātmā Mé Bas Jāo Bābā (2)", "Paramātmā Tum Sāré Jagat Ké", "Rām Rahim Tum Sāré Jagat Ké", "Suné Mana Mé Vās Karo Tum", "Kankana Mé Bas Jāo Bābā", "Ātmā Mé Bas Jāo Bābā"] },

  { id: "217", content: ["Ayodhyā Vāsi Rām Hai Dwāraka Mé Āyé", "Dwāraka Vāsi Shyāma Hai Shirdi Mé Āyé", "Shirdi Vāsi Shyāma Hai Parthi Sathya Sāi", "Bolo Rām Sāi Rām Bolo Sathya Sāi Rām"] },

  { id: "218", content: ["Bābā Āo Meré Kirtan Mé", "Antaryāmi Darsha Dikhāo", "Naiyā Hamāri Pār Lagādo", "* Antarjyoti Jalādo Sāi", "Deenajanon Ké Tum Ho Sāi"] },

  { id: "219", content: ["Bāla Gopāl Jai Jai Sāi Rām", "Prem Bharo Dil Mé Hamāré Sāi Rām", "Hamāré Sāi Rām Baré Pyāré Sāi Rām", "Prem Bharo Dil Mé Hamāré Sāi Rām", "Ham Bhakton Ké Tum Ek Sāi Rām", "Tumhre Jagat Mé Barā Pyārā Pyārā Nām", "Sanga Raho Hardam Hamāré Sāi Rām", "Sanga Raho Hamāré Sāi Rām"] },

  { id: "220", content: ["Bhagavān (3) Sāi Rām", "Sāi Rām (3) Bhagavān", "Bhagavān (3) Sāi Rām", "Aparādha Kshamā Karo Sāi Bhagavān", "Araja Suno Meré Sāi Bhagavān", "Bhagavān (3) Sāi Rām", "Deena Dayālā Parama Kripālā", "Bhaktoddhārā Sāi Bhagavān"] },

  { id: "221", content: ["Bhagavān (2) Patita Pāvana Rām", "Dayā Karo (3) Bhagavān", "Patita Pāvana Rām - Sāi", "Deena Dayālu Parama Kripālu", "Rakshā Karo Bhagavān - Sāi"] },

  { id: "222", content: ["Bhagavān Hamārā Rām", "Bhagavān Hamārā Sāi Rām", "* Jagmag Sāré Teré Liyé", "Ye Tan Man Dhan Sāre Teré Liyé", "Meré Man Kā Sitār Bājé Teré Liyé", "Hamein Rakshā Karo Bhagavān", "Hamein Kripā Karo Sāi Rām"] },

  { id: "223", content: ["Bhajaré Mānasa Ātmā Rāmam", "Ātmā Rāmam Sāi Rāmam", "* Ātmā Tattvam Brahma Swarupam", "Ekam Nityam Vimalam Achalam", "Shuddha Brahmam Bhāvāteetam", "Bhajoré Bhajoré Mānasa Bhajoré"] },

  { id: "224", content: ["Bhajaré Manwā Sāi Nāmam", "Parthi Nivāsam Pankaja Netram", "* Prema Swarupam Sāishwaram", "Hridaya Nivāsam Sāishwaram", "Shirdipurisham Sāishwaram", "Purnavatāram Sāishwaram - Pari"] },

  { id: "225", content: ["Bhajaré Satguru Sāi Charanam", "Pāvana Charanam Padma Dala Charanam", "Mukti Dāyaka Mohana Charanam", "Pāpa Vināshaka Parthisha Charanam"] },

  { id: "226", content: ["Bhajo Bhajo Rām Sathya Sāi Rām", "Bhajo Bhajo Shyāma Sāi Ghanashyāma", "* Kaliyuga Ké Avatāra", "Jagadoddhārā Sāi Bhagavān", "Patita Pāvana Seetā Rām (x2)"] },

  { id: "227", content: ["Bhajoré Bhāyi Sāi Rām", "Puttaparthipurishā Sāi Rām", "* Dwārakamāyi Sāi Rām", "Sadā Sukhadāyi Sāi Rām", "Shirdipurishā Sāi Rām", "Puttaparthipurishā Sāi Rām"] },

  { id: "228", content: ["Bhajoré Manwā Satguru Devā", "Parama Kripālu Sāi Mahādevā", "* Nishdin Dhyāna Karoun Main Terā", "Janam Janam Kā Mithé Andherā", "Parabrahma Parameshwara Rupā (x2)", "Parama Kripālu Sāi Mahādevā"] },

  { id: "229", content: ["Bhakta Vatsala Tero Nām O Sāi", "Dukha Bhanjana Tero Nām O Sāi", "Tum Sangha Bāndhi Prema Ki Dori", "Sumiran Karoun Tero Nām O Sāi", "Patitoddhārana Bhakta Pārāyana", "Parthishwara Sāi Rām"] },

  { id: "230", content: ["Bolo Jaijaikār (2)", "Bolo Jaijaikār Sāi Bābā Ki", "Patita Pāvana Hey Ghanashyāmā", "Sāi Gopālā Hey Ghanashyāmā", "Prema Bhagavān Sāi Bhagavān", "Sāi Rām Sāi Rām"] },

  { id: "231", content: ["Bolo Sāi Rām Bolo Sāi Rām", "Bolo Rām Krishna Bhagavān Bolo Sāi Rām", "Karunā Sindhu Rām Sāi Charanon Mé", "Teré Koti Pranām", "Bolo Rām Krishna Bhagavān Bolo Sāi Rām"] },

  { id: "232", content: ["Brahma Swarupā Nāda Swarupā", "Satya Swarupā Dharma Swarupā", "* Jyoti Swarupā Divya Swarupā", "Shānti Swarupā Prema Swarupā", "Shirdi Swarupā Parthi Swarupā", "Deva Deva Devā Sathya Sāi Devā"] },

  { id: "233", content: ["Chalre Man (3) Tu Chal", "Tu Prashānti Nilaya Chal Puttaparthi Tu Chal", "Dekho Shirdi Sāi Avatār Sathya Sāi Avatār", "Parthi Sāi Avatār Prema Sāi Avatār", "Shirdi Sāi Parthi Sāi Prema Sāi Avatār"] },

  { id: "234", content: ["Chitrāvati Tatha Vishāla Sundara Sāi", "Avadoota Chintanā Gurudevā Sathya Sāi", "Meré Bābā Sāi", "Shirdi Bābā Sāi Parthi Bābā Sāi", "Yamunā Teera Shri Krishna Kanhaiyā Sāi", "Avadoota Chintanā Gurudevā Sathya Sāi"] },

  { id: "235", content: ["Chittarājā Chittarājā", "Brindāvana Gana Mangala Charanā", "Sānvari Surata Prema Bharanā", "* Rupa Manohara Murali Madhuvana", "Parthipurishwara Chittarājā Chittarājā"] },

  { id: "236", content: ["Darshana Deejo Bhagavān", "Parama Dayālu Bhagavān", "* Ādi Anantā Adbhuta Rupā", "Ānanda Dātā Āshrita Vatsala", "Prema Swarupā Shānti Pradātā", "Satchidānanda Shri Sathya Sāishā"] },

  { id: "237", content: ["Darshana Do Bhagavān - Prabhu", "Anātha Nāthā Prabhu Sāi Nāthā", "* Deena Dayālā Hey Parameshā", "Parthipuri Bhagavān - Sāi", "Prabhu Darshana Do Bhagavān"] },

  { id: "238", content: ["Dayā Karo Bhagavān Kripā Karo Bhagavān (x3)", "Bhagavān Bhagavān", "Hey Sāi Nātha Bhagavān", "Hey Kripānidhé Bhagavān"] },

  { id: "239", content: ["Dayā Karo Hey Dayānidhé Hey Bhagavān", "Tan Man Dhana Sab Charana Tumhāré", "* Ādi Ananta Hari Avināshi", "Sadā Nirantara Ghata Ghata Vāsi", "Deena Dayālā Sadā Kripālā (x2)"] },

  { id: "240", content: ["Dayā Karo Kripā Karo Karunā Sāgara Devā", "Janama Marana Se Pār Karo Tum", "Sāi Nātha Mahādevā", "Dayā Karo Kripā Karo Parthishwara Sāi Devā", "Shirdishwara Sāi Devā", "Parthishwara Sāi Devā"] },

  { id: "241", content: ["Dayā Sāgarā Karunākarā", "Jagadishwarā Sāishwarā", "* Bhuvaneshwarā Akhileshwarā", "Guna Gambheerā Sāishwarā"] },

  { id: "242", content: ["Deena Bāndhavā Bābā Dayā Sāgarā", "Patita Pāvanā Sāi Karunākarā", "* Sathya Sāi Prema Sāi", "Shānti Dharma Sindhu Sāi", "Jeevana Ādhār Sāi Janani Janaka Bandhu Sāi", "Patita Pāvanā Sāi Karunākarā"] },

  { id: "243", content: ["Deena Bāndhavā Shri Sāi Devā", "Dayā Sāgarā Devādi Devā", "* Pāhi Prabho Jagadishwarā", "Dehi Vibho Jagadoddharā", "Sharanam Prabho Sathya Sāi Nāthā"] },

  { id: "244", content: ["Deena Dukhiyon Se Prema Karo", "Merā Sāi Prasanna Hogā", "Sāi Merā Main Terā Yé Prema Ki Behti Dhārā", "Yé Prema Ki Behti Dhārā", "Merā Sāi Prasanna Hogā"] },

  { id: "245", content: ["Deena Janāvana Deena Samrakshaka", "Sanātana Sārathi Devādi Devā", "Ādi Sanātana Nitya Niranjana", "Jagadoddhārana Sāi Nārāyana", "Jyoti Swarupā Prema Swarupā", "Prashanti Swarupā Devādi Devā"] },

  { id: "246", content: ["Deva (2) Devā Devādi Devā", "Haré Rām Haré Krishna Sāi Rām Devā", "Haré Rām Haré Krishna Sāi Rām Devā", "Deva Deva Devā", "Kārunya Lāvanya Karunā Samudrā", "Kālinga Nartana Kaustubha Hārā", "Ghana Ghana Leelā Kaivalya Dhāmā", "Ghana Ghana Leelā Kaivalya Dhāmā", "Kaivalya Dhāmā"] },

  { id: "247", content: ["Deva Devottama Deena Samrakshaka", "Devādi Devā Dayāmayā", "Shri Sāi Devā Dayāmayā", "Patitoddhārā Pāpa Vidurā", "Parthi Vihārā Parameshwarā", "Bhashmodbhavakara Bhava Bhaya Nāshaka", "Shri Sāi Devā Dayāmayā"] },

  { id: "248", content: ["Dukha Ké Andher Mé", "Ujālā Sāi Nām Kā", "Chintā Mé Sahārā Bas Ek Sāi Nām Kā", "* Sahārā Do Sāi Nātha Sabko Sahārā Do", "Meré Bābā Meré Sāi Meré Sāi Nātha Bhagavān"] },

  { id: "249", content: ["Eeshwarāmbā Nandana Jagata Vidhātā", "Parthi Nivāsā Sāi Devā Dayā Karo Gurudevā", "Kamala Nayana Hey Hridaya Vihāri", "Ānanda Dāyaka Hey Giridhāri", "Charana Sharana Mé Lelo Hamko", "Yuga Avatārā Krishna Murāri", "Parthi Nivāsā Sāi Devā Dayā Karo Gurudevā"] },

  { id: "250", content: ["Eeshwarāmbā Priya Nandanā", "Sāi Jaya Jaga Vandanā (x2)", "Ratnākara Kula Bhooshanā", "Rājiva Nayanā Nārāyanā", "Nārāyanā Satya Nārāyanā", "Nārāyanā Sāi Nārāyanā"] },

  { id: "251", content: ["Eeshwarāmbā Priya Tanayā Sāi Nārāyanā", "Sāi Nārāyanā Satya Nārāyanā (x2)", "Kaliyuga Mé Avatāra Liyé", "Kankana Mé Terā Nām O Sāi (x2)", "Kankana Mé Terā Nām"] },

  { id: "252", content: ["Eeshwarammā Nayana Dulāré", "Subhammā Ki Ankh Ké Tāré", "Bhaktajanon Ké Prāna Pyāré", "Tum Ho Hamāré Ham Hein Tumhāré"] },

  { id: "253", content: ["Ek Bār Kshamā Karo Sāi", "Meré Bābā Shri Sathya Sāi", "Kshamā Murti Sāi Bābā Prema Murti Sathya Sāi", "* Shirdi Ké Sāi Teré Dwāra Hai Māyi", "Parthi Ké Sāi Teré Yād Mujhé Āyi", "Kshamā Murti Sāi Bābā Prema Murti Sathya Sāi"] },

  { id: "254", content: ["Guru Bābā Guru Bābā", "Charana Namostuté Guru Bābā", "Sāi Bābā Bāl Bābā", "Sathya Bābā Prema Bābā", "Guruvara Guruvara Guru Bābā", "Vidyā Dāyaka Guru Bābā", "Shanta Swarupā Guru Bābā", "Guruvara Guruvara Guru Bābā"] },

  { id: "255", content: ["Guru Brahmā Guru Vishnu", "Guru Devo Maheshwarā", "Jaya Devā Guru Devā Gurudattā Digambarā", "Jai (3) Karunākarā, Jai (3) Akhileshwarā", "Jai (3) Shirdishwarā, Jai (3) Parthishwarā"] },

  { id: "256", content: ["Guru (5) Sathya Sāi", "Sharanāgatā (3) Om Guru Mahārāja", "Shirdi Ke Sāi Puttaparthi Ke Sāi", "Devādi Devā Guru Paramātmā Sāi (x2)"] },

  { id: "257", content: ["Guru Mahimā Gāo (x3)", "Satguru Sāi Ananta Guru", "Brahmānandā Nanda Guru", "Sarva Dharma Priya Sāi Guru", "Guru Ki Vāni Gāo"] },

  { id: "258", content: ["Guru Satguru Satguru Sāi Rām", "Guru Sāi Rām Shri Sāi Rām", "* Sāi Guru (2) Sāi Maheshā", "Sāi Maheshā Sathya Sāi Maheshā", "Pāhimām (2) Pāhi Maheshā", "Parthipuri Sāi Devā Sāi Maheshā", "Sāi Maheshā Sathya Sāi Maheshā"] },

  { id: "259", content: ["Gurudevā Guru Govindā", "Mangala Giridhara Shirdipurishwara", "Jaya Parthishwara Sāi Shivā", "* Sundura Rupā Shri Sāi Devā", "Vaidehi Mohana Nārāyanā (x2)"] },

  { id: "260", content: ["Gurudevā Gurudevā", "Guruvāyura Murahari Devā", "Hari Nārāyanā Hari Nārāyanā", "Sharanam Sharanam Sāi Devā"] },

  { id: "261", content: ["Gurudevā Jaya Devā Sāi Devā Dayāmayā", "Vibhuti Sundara Shashānka Shekhara", "Sāi Shankara Dayā Karo (2)", "Gokula Nandana Sāi Gopālā", "Raghukula Bhooshana Sāi Rām", "Hey Madanāntaka (Dayā Karo (3))"] },

  { id: "262", content: ["Gurudevā Priya Devā Sāi Devā Dayāmayā", "Vibhuti Sundara Shashānka Shekhara", "Sāi Shankara Dayā Karo (x2)", "* Gokula Ranjana Sāi Gopālā", "Raghukula Bhooshana Sāi Rāmā", "Hey Madanāntaka Dayā Karo (x2)"] },

  { id: "263", content: ["Gurudevā Satguru Devā Dayā Karo Bhagavān", "Shānti Do (3) Mujhé Dayākarā", "Ānanda Chandā Satchidānandā", "Ānanda Ānanda Sāi - Hey Gurudevā", "Parthipurishā Hey Bhuvaneshā", "Dayā Karo Bhagavān (Kripā)", "Shānti Do (3) Mujhé Dayākarā"] },

  { id: "264", content: ["Gurudevā Sharanam Devā", "Pāhi Prabho Sharanam Devā", "* Sundara Rupā Shri Sāi Devā", "Sharanam Sharanam Satguru Devā"] },

  { id: "265", content: ["Gurudevāya Namo Namo", "Hey Parameshwara Namo Namo", "* Omkārāya Namo Namo", "Parthipurishwara Namo Namo", "Jagadishwarāya Namo Namo", "Prashānti Ishwara Namo Namo"] },

  { id: "266", content: ["Guruvara Nāma Pāvana Nāma", "Satguru Nāma Guru Nānaka Nāma", "Guruvara Nāma Pāvana Nāma", "Satguru Sāi Bābā Nāma", "Jai Guru Satguru Nānak Nāma", "Jai Bolo Sāi Bābā Nāma"] },

  { id: "267", content: ["Ham Ko Tum Se Pyār Kitnā Sāi Tum Hi Jānaté", "Dilon Ki Dharkan Tum Ho Sāi", "Tum Hamāré Prān Ho", "Ham Ko Tum Se Pyār Hai", "We Love You Dearest Lord We Love You", "We Love You Sāi Lord We Love You"] },

  { id: "268", content: ["Hari Guna Gāna Karo Man Mero", "Sāi Guna Gāna Karo Man Mero", "* Haré Rām Haré Krishna", "Krishna Krishna Sāi Krishna", "Sāi Guna Gāna Karo Man Mero (x2)"] },

  { id: "269", content: ["Hari Om Namo Shiva Shakti Namo", "Satguru Shri Sathya Sāi Namo", "Hari Om Namo Seetā Rām Namo", "Jaya Satguru Shri Sathya Sāi Namo", "Hari Om Namo Radhéshyām Namo", "Jaya Satguru Shri Sathya Sāi Namo"] },

  { id: "270", content: ["Hey Anātha Nātha Sāi Tum Ho Antaryāmi", "Tum Ho Meré Bhagavān", "Deena Dukha Bhanjana Sahārā Do Mujhé", "O Meré Sāi Bhagavān", "Hridaya Mandir Mé Āo Sāi Meré", "Deejo Kripā Vardāna", "Tum Ho Meré Bhagavān"] },

  { id: "271", content: ["Hey Brahmā Vishnu Maheshwarā Sāishwarā", "Dayā Karo Kripā Karo Parameshwarā", "Sāi Rām Sāi Rām (x2)", "Parama Dayālā Pāpa Vināshā", "Rakshā Karo (2) Sāishwarā", "Dayā Karo Kripā Karo Parameshwarā"] },

  { id: "272", content: ["Hey Kamala Nayana Bhagavān", "Sathya Sāi Bhagavān", "Deenajanon Ké Prāna – Sāi", "Patita Pāvanā Seetā Rām", "Parthipurishwara Shri Sāi Rām", "Shri Sāi Rām Jaya Jaya Rām", "Parthipurishwara Shri Sāi Rām", "Hey Deenajanon Ké Prāna"] },

  { id: "273", content: ["Hey Parama Dayālu Sāi Rām", "Bhagavān Bhagavān", "Tretāyuga Mé Dasharatha Nandana", "Dwāpara Yuga Mé Murali Mohana", "Kaliyuga Mé Sathya Nārāyana", "Eka Prabhu Aneka Nāma"] },

  { id: "274", content: ["Hey Parthipurishā Prashānti Vāsā Sāi Murāri", "Sāi Murāri (2)", "Hey Hrishikeshā Hridaya Nivāsā Hridaya Nivāsā", "Sāi Murāri (4)"] },

  { id: "275", content: ["Hey Sāi Jagannāthā (3)", "Deena Bandhu Sāi Nāthā", "Karunā Sindhu Jagannāthā", "Hey Sāi Jagannāthā (2)", "Hey Shirdi Jagannāthā Hey Parthi Jagannāthā", "Hey Sāi Jagannāthā"] },

  { id: "276", content: ["Hey Sanātana Sārathi", "Anupama Tava Rupa Manohara", "Sudhā Samā Tava Bhārati", "* Hey Parameshwara Hey Tāt Mātā", "Hey Jagadishwara Anātha Nāthā", "Hey Deena Bandhu Karunā Sindhu", "Hey Murti Mantra Prashānti"] },

  { id: "277", content: ["Hey Shyāma Sundarā Hey Sāi Sundarā", "Parthipurishwarā Hey Sāi Sundarā", "* Neela Megha Sundarā Neeraja Lochanā", "Brahmānda Nāyakā Hey Sāi Sundarā"] },

  { id: "278", content: ["Ishwar Tu Hai Dayālu Dukha Dura Kar Hamārā", "Teré Sharan Mé Āyé Ham Prabhu Dijiyé Sahārā", "Tu Hai Pitā Aur Mātā Sab Vishwa Kā Vidhātā", "Tum Sā Nahin Hai Dātā Sab Terā Hi Sahārā"] },

  { id: "279", content: ["Itni Vinati Raghunandana Se", "Nandana Se Sai Nandana Se", "* Āo Prabhu Ham Sharana Tihāré", "Tum Bina Jag Mé Kaun Hamāré"] },

  { id: "280", content: ["Jaga Mé Sarvam Vishnumayam", "Satguru Shri Sathya Sāi Mayam", "Omkāra Nāda Mayam Om Shiva Shakti Mayam", "Prema Mayam Sāi Rām Mayam", "Pranavākārā Brahma Mayam"] },

  { id: "281", content: ["Jagata Uddhārana Parthi Vihārana", "Prabhu Tum Ho Mangala Dhāma", "Jai Sāi Rām Jai Sāi Rām", "Pāpa Vimochana Bhava Bhaya Bhanjana", "Sundara Nayanabhi Rām", "Prabhu Tum Ho Mangala Dhāma", "Jai Sāi Rām Jai Sāi Rām"] },

  { id: "282", content: ["Jai Guru (2) Sāi Rām", "Jagatguru Sathya Sāi Rām", "* Brahma Vishnu Shiva Sāi Rām", "Parabrahma Rupa Sāi Rām", "Mātā Pitā Guru Sāi Rām", "Jagatguru Sathya Sāi Rām"] },

  { id: "283", content: ["Jai Jai Gurudevā Shri Sāi Mahādevā (x2)", "Brahmā Vishnu Maheshwarā Sāi Mahādevā", "Mātā Pitā Gurudevā Shri Sāi Mahādevā"] },

  { id: "284", content: ["Jai Jai Shri Guru Bhajalé", "Satguru Sāi Guru Bhajalé", "Parthipurishwara Shri Sāi Nāthā", "Mama Guru Satguru Bhajalé", "Andhakār Mé Jyoti Jalāo", "Bhataknéwālon Ko Rāh Dikhāo", "Bhavasāgar Mé Kāndhar Banké", "Guru Bhagavān Pār Lagāo", "Guru Bhajalé Nāma Bhajalé Sāi Bhajalé"] },

  { id: "285", content: ["Jai Sāi Rām Bolo (3) Jai Sāi Rām", "Jai Sāi Rām Bolo (3) Sathya Sāi Rām", "Bhajore Manwā Mangala Nāma", "Bhajore Manwā Sathya Sāi Rām (x2)"] },

  { id: "286", content: ["Jaya Guru Omkārā Jaya Jaya", "Satguru Omkārā Om", "Brahma Vishnu Maheshwarā", "Hara Hara Hara Hara Mahādevā"] },

  { id: "287", content: ["Jaya Guru Omkārā Sāi Satguru Omkārā", "Shirdipurishwara Shri Sāi Bābā", "Parthipurishwara Sathya Sāi Bābā", "* Parama Niranjana Deenajanāvanā", "Sāi Parameshwara Parama Dayāgana", "Paramānanda Dayālu Sāi", "Brahmānanda Kripālu Sāi"] },

  { id: "288", content: ["Jaya Gurudevā Prabhu Sāi Devā", "Devādi Devā Pranamāmyaham", "Shiva Shiva Shambho Kailāshapaté", "Parthipurishwara Pālayamām", "Devādi Devā Pranamāmyaham"] },

  { id: "289", content: ["Jaya Jaya Devā Jagadisha Devā", "Dayā Sāgarā Sāi Devā", "* Niraja Nayanā Niradhi Shayanā", "Neela Megha Shyāmā", "Sāma Gāna Priya Sarva Dharma", "Priya Sathya Sāi Mahādevā"] },

  { id: "290", content: ["Jaya (4) Gurudevā", "Jaya Parameshwara Sāi Devā", "Jaya Shirdishwara Gurudevā", "Jaya Parthishwara Gurudevā", "Jaya Jaya Satguru Shri Sāi Devā"] },

  { id: "291", content: ["Jaya Jaya Sāi Namo Jaya Shubhadāyi Namo", "Jaya Govindā Jaya Gopālā", "Jaya Mahādeva Namo", "* Abhaya Pradātā Vishwa Vidhātā", "Jagadoddhāra Namo", "Jaya Shirdishā Jaya Parthishā", "Jaya Parameshā Namo"] },

  { id: "292", content: ["Jaya Nārāyana Satguru Devā", "Dāyana Nartana Priya Sāi Devā", "* Nirākāra Sākār Tum Hi Ho", "Purna Brahma Avatār Tum Hi Ho", "Parthipurishwara Sāi Mahādevā"] },

  { id: "293", content: ["Jaya Sāi Gurudevā Sāi Gurudevā", "Guru Sevā Binā Nirvāna Nahin", "Jaya Sāi Gurudevā", "Tumhi Ho Mātā Pitā Tumhi Ho Sāi Gurudevā", "Satya Swarupa Rāha Dikhāo Sāi Gurudevā", "Guru Sevā Binā Nirvāna Nahin", "Jaya Sāi Gurudevā"] },

  { id: "294", content: ["Jaya Sāishā Jaya Sāishā", "Rādhā Mādhava Jaya Parthishā", "* Hridaya Sārathi Sāi Kanhaiyā", "Rādhé Govindā Prashānti Nilaya"] },

  { id: "295", content: ["Jeevana Ādhār Bābā Jeevana Ādhār", "Koti Pranām Bābā Koti Pranām", "Sādhan Kā Ādhār Bābā Sādhan Kā Ādhār", "Jeevan Mé Sāth Raho Merā Pranām", "Dayā Karo (2) Koti Pranām", "Kripā Karo (2) Koti Pranām", "Koti Pranām Bābā Koti Pranām (x2)"] },

  { id: "296", content: ["Jeevana Ādhāra Sāi Devā", "Paramo Uddhārā Prabhu Sāi Devā", "* Jagadoddhārā Shri Sāi Devā", "Bhakta Uddhārā Devādi Devā", "Parthi Vihārā Sathya Sāi Devā"] },

  { id: "297", content: ["Jeevana Jyoti Tum Ho Sāi", "Prema Ki Jyot Jalāo Sāi Prema Ki Jyot Jalāo", "Jeevana Ke Inn Andhiyāron Mé Sāi Deepa Jalāo", "Sāi Deepa Jalāo Sathya Sāi Deepa Jalāo", "Prema Ki Jyot Jalāo Sāi Prema Ki Jyot Jalāo"] },

  { id: "298", content: ["Jhulanā Mé Jhulé Meré Sāi Nandalāl", "Jhulanā Mé Jhulé Sāi Bāl Gopāl", "Jhulanā Jhulé Jhulanā Jhulé", "Mā Eeshwarammā Jhulanā Jhulāyé", "Godi Mé Bithālké Kahāni Sunāyé", "Hari Kathā Choté Sāi Rām Ko Sunāyé", "Apni Hi Kathā Suno Tum Nandalāl", "Jhulanā Mé Jhulé Sāi Bāl Gopāl", "Jhulanā Jhulé Jhulanā Jhulé"] },

  { id: "299", content: ["Jhulé Meré Sāi Jhulé Meré Bābā", "Jhulanā Jhulāyé Meré Sāi", "Jhulanā Jhulāyé Meré Bābā", "Resham Ki Dori Soné Kā Palanā", "Jhulanā Jhulāyé Meré Sāi", "Jhulanā Jhulāyé Meré Bābā", "Shirdi Ké Sāi Parthi Ké Bābā", "Jhulanā Jhulāyé Meré Sāi", "Jhulanā Jhulāyé Meré Bābā"] },

  { id: "300", content: ["Kamala Netra Sāishwarā", "Kaivalya Teja Sureshwarā", "* Meghashyāma Ghana Gagana Shareerā", "Nāda Brahmamaya Abhayakarā", "Meghashyāma Ghana Gagana Shareerā", "Nāda Brahmamaya Abhayakarā"] },

  { id: "301", content: ["Koti Pranām Kshata Koti Pranām", "Hey Deena Nātha Sāi Rām – 3", "Tum Ho Bhakton Ké Yugavatāra", "Tum Ho Ānanda Nanda Ké Lāl", "Parthipuri Ké Sāi Gopāla – Putta", "Hey Deena Nātha Sāi Rām (x3)"] },

  { id: "302", content: ["Mana Bangāru Parthi Bābā", "Mana Sringāra Vadanā Sāi", "* Antaryāmi Bābā", "Mana Sarvāntaryāmi Sāi"] },

  { id: "303", content: ["Mana Ek Bār Hari Bol", "Hari Hari Bol Hari Bol", "* Hari Pitā Hari Mātā", "Hari Guru Gnāna Dātā", "Chidānanda Rupa Hari Patita Pāvana Hari", "Ek Bār Hari Bol"] },

  { id: "304", content: ["Mana Mandira Mé Āo Sāi", "Sāi Bhagavān Darsha Dikhāo", "Sadā Nirantara Bhajo Sāi Rām", "Giridhara Nāgara Natavara Shyām", "Sāi Bhagavān Darsha Dikhāo"] },

  { id: "305", content: ["Mana Mandira Mé Rājādhirājā", "Tum Ho Sāi Mahārāj", "Nartana Sundara Natarājā", "Shivakāmi Priya Shivarājā", "Tum Ho Sāi Mahārāj"] },

  { id: "306", content: ["Mānasa Bhajaré Guru Charanam", "Dustara Bhava Sāgara Taranam", "Guru Mahārāj Guru Jai Jai", "Sāi Nātha Satguru Jai Jai", "Om Namah Shivāya (3) Shivāya Namah Om", "Arunāchala Shiva (3) Arunā Shiva Om", "Omkāram Bābā (3) Om Namo Bābā"] },

  { id: "307", content: ["Mānasa Bhajaré Guru Charanam", "Satguru Charanam Pranamāmyaham", "Sathya Sāi Charanam Pranamāmyaham (x2)", "Nirmala Hridaya Virājita Charanam", "Sakala Charāchara Vyāpaka Charanam", "Bhavasāgara Uddhāraka Charanam", "Sāi Charanam Pranamāmyaham (x2)"] },

  { id: "308", content: ["Meré Nainon Mé Baso Sāi Rāmā", "Sāi Rāmā Moré Sāi Shyāmā", "Meré Hridaya Mé Āo Sāi Rāmā", "Sāi Rāmā Moré Sāi Shyāmā", "Meré Jeevan Banādo Sāi Rāmā", "Sāi Rāmā Moré Sāi Shyāmā"] },

  { id: "309", content: ["Meré Sāi Rām Sundarā", "Rupa Manohara Niranjanā", "* Shyāmala Komala Kamala Vadanā", "Mana Mohanā Mridu Charanā", "Anupama Charitra Atbhuta Leelā", "Sundara Sāi Premānandā"] },

  { id: "310", content: ["Nādabrahma Hari Sāi Haré", "Nārāyana Hari Sāi Haré", "* Natanakalādhara Sāi Haré", "Nāgā Bharanā Sāi Haré", "Sāi Haré Sathya Sāi Haré (x3)"] },

  { id: "311", content: ["Nāma Bhajoré Nāma Bhajo", "Sab Sukhadāyi Sundara Sāi", "* Ānanda Nāmā Ati Sukha Nāmā", "Mana Mohana Nāma Madhura Madhura Nāma"] },

  { id: "312", content: ["Namāmi Brahmā Namāmi Vishnu", "Namāmi Maheshwarā", "Smarāmi Brahmā Smarāmi Vishnu", "Smarāmi Sāishwarā (x2)"] },

  { id: "313", content: ["Namana Karoun Main Satguru Charanā", "Bhava Bhaya Haranā Mangala Karanā", "* Brahma Vishnu Maheshwara Rupā", "Satya Swarupā Prema Swarupā", "Dukha Haranā Bhavasāgara Taranā"] },

  { id: "314", content: ["Nandalālā (2) Dayā Karo Bhagavān", "Bhava Sāgara Se Pār Utāro", "Dayā Karo Bhagavān", "Kripā Karo Bhagavān", "Tumhri Sharan Binā Anāth Hein Ham", "Dayā Karo Bhagavān", "Kripā Karo Bhagavān"] },

  { id: "315", content: ["Nayanon Mé Premadhāra", "Vachanon Mé Amritadhāra", "Satguru Sāi Merā Jeevan Ādhār", "Nayanon Mé Premadhāra", "Vachanon Mé Amritadhāra", "Satguru Sāi Merā Jeevan Ādhār"] },

  { id: "316", content: ["Nirupama Guna Sadanā Charanā", "Neeraja Dala Nayanā", "Kāshāyambara Veshā Dhāranā Kaliyuga Avatārā", "Nitya Ranjana Nirmala Charitra", "Nirupama Yogindrā", "Mahādeva Natarāja Virājā", "Āsha Pāsha Nāsha Ishā"] },

  { id: "317", content: ["O Bābā Sāi Bābā", "Deenon Ké Dukha Haraté Bābā", "Rām Hi Bābā Krishna Hi Bābā", "Nara Dehi Nārāyana Bābā", "Nara Ké Hey Nārāyana Bābā"] },

  { id: "318", content: ["O Bhagavān (2)", "Araja Suno Meré Sāi Bhagavān", "Parthipuri Ké Tum Ho Rājā", "Brindāvana Ké Tum Ho Dātā", "Sab Bhakton Ké Man Ko Bhātā", "Pār Utāro Naiyā Mori", "Sāi Ghanashyāma Sāi Ghanashyāma"] },

  { id: "319", content: ["O Sāi Bābā (3) Meri Rakshā Karo", "O Sāi Rāmā Prabhu Sāi Rāmā", "O Sāi Bābā Meri Rakshā Karo", "Karunā Nidhān Tum Karunā Karo", "Kripā Nidhān Tum Kripā Karo", "O Sāi Krishnā Sathya Sāi Krishnā", "O Sāi Bābā Meri Rakshā Karo", "O Shirdi Bābā O Parthi Bābā", "O Sāi Bābā Meri Rakshā Karo"] },

  { id: "320", content: ["Parama Pujya Parama Priya Shri Sāi Devā", "Parthi Vāsi Hridaya Vāsi Shri Sāi Devā", "Sakala Janma Sātha Raho Shri Sāi Devā", "Sarva Bandhu Bhajan Karo Shri Sāi Devā", "Hey Sāi Devā (2)", "Shri Sāi Devā (2)"] },

  { id: "321", content: ["Parthi Bulāo Meré Sāi Bhagavān", "Mujhé Darsha Dikhāo Meré Sāi Bhagavān", "Sparshana Sambhāshana Deejo Bhagavān", "Satguru Darshanam Pāpa Vināshanam", "Satguru Sparshanam Karma Vimochanam", "Satguru Sambhāshanam Sankata Nāshanam", "Satguru Charanam Sadā Nirantaram", "Araja Suno Meré Sāi Bhagavān", "Aparādha Kshamā Karo Sāi Bhagavān"] },

  { id: "322", content: ["Parthipuri Ghanashyāma Prashānti Nilaya Rām", "Sāi Charanon Mé Lagé Merā Dhyāna", "Sāi Rām Tum Né Nayi Duniyā Basāyi", "Satya Dharma Shānti Ki Mālā Banāyi", "Sāi Nām Japné Ki Mālā Banāyi", "Prema Rupa Sāi Aur Prema Rupa Rām", "Rām Sāi Rām Bhajo Rām Sāi Rām"] },

  { id: "323", content: ["Parthipuri Mé Janam Liyā", "Eeshwarāmba Ké Priya Tanayā", "* Main Kyā Janoun Teri Mahimā", "Jeevan Tu Meré Sāi Rāmā – Mama", "Tujh Bina Bābā Andhera Hai", "Tujh Se Sāi Ham Dur Hein", "Āo Āo Prabhu Sāi Mat Dera Se (x2)"] },

  { id: "324", content: ["Parthipuri Mé Janam Liyā", "Jo Sāi Bābā Nām Hai", "Mayura Mukutadhara Murali Manohara", "Sāi Shyāmā Nām Hai", "Hey Shiva Shankara Umā Maheshwara", "Sāi Shambho Nāma Hai", "Hey Parameshwara Parthipurishwara", "Tu Hi Merā Prāna Hai"] },

  { id: "325", content: ["Prabhu Gnāna Kā Deepa Jalāo", "Prabhu Prema Kā Deepa Jalāo", "Sāi Prema Kā Deepa Jalāo", "* Main Né Phukārā Māngā Sahārā", "Prabhu Dedo Mujhé Terā Sahārā", "Sāi Dedo Mujhé Abhaya Tumhārā", "Pahounchādo Prabhu Mujhé Kinārā", "Sāi Rām Sāi Shyām Sāi Rām"] },

  { id: "326", content: ["Prabhu Leelā Prabhu Mahimā", "Kali Avatārā Sāi Nārāyana", "Prabhu Dhāma Parama Dhāmā", "Chaloré Chalo Man Parthi Dhāma", "Jaya (3) Hey Sāi Rāmā"] },

  { id: "327", content: ["Prashānti Sāi Prashānti Bābā", "Shivāya Shivāya Namah Shivāya (2)", "* Shirdi Sāi Krishna Kanhāyi", "Namo (2) Sāi, Bhajo (2) Sāi", "Sāi Namo Namo Sāi Namo Namo", "Sāi Namo Namo Sāi Nāthā"] },

  { id: "328", content: ["Prātah Smaranam Shri Guru Charanam", "Sāisha Charanam Shri Guru Charanam", "* Brahmānanda Pradāyaka Charanam", "Charanam Sharanam Sāisha Charanam"] },

  { id: "329", content: ["Prema Bhakti Jagāo Man Mé", "Āo Meré Bhajan Mé Bābā", "Āo Meré Hridaya Mé Bābā", "Tum Ho Deenajanon Ké Sāi", "Tum Ho Bhaktajanon Ké Bābā", "Āo Meré Bhajan Mé Bābā", "Āo Meré Hridaya Mé Bābā"] },

  { id: "330", content: ["Prema Rupa Ānanda Divya Rupa Ānanda", "Satchidānanda Sāi Mahāna", "Sāi Mahāna Sāi Mahāna", "Yuga Avatārā Tribhuvana Pālā", "Brahmānda Nāyaka Sāi Mahāna", "Sāi Mahāna Sāi Mahāna"] },

  { id: "331", content: ["Prema Se Gāo Mangala Nām", "Govinda Gopāla Bolo Hari Nām", "Prema Ké Sindhu Deena Ké Bandho", "Karunāmayā Sāi Nayanabhi Rāmā", "Govinda Gopāla Bolo Hari Nām", "Haré Krishna Haré Rām Sāi Rām Sāi Rām (x2)"] },

  { id: "332", content: ["Rājāti Rājadeva Rāja Poojitā", "Rāja (3) Mahārāja Shekharā", "Rāma Krishna Rupa Mahāteja Swarupā", "Satya Dharma Shānti Prema Sāi Swarupā"] },

  { id: "333", content: ["Rājāti Rājā Meré Sāi Mahārājā", "Deenon Ké Nātha Bhagavān", "Devādi Devā Hey Sāi Mahādevā", "Parthi Vihāri Bhagavān", "Haré Rāmā Rāmā Rāmā Rāmā", "Haré Krishnā Krishnā Krishnā Krishnā"] },

  { id: "334", content: ["Rām Bhajoré Shyāma Bhajoré", "Parthi Gopāl Sāi Rām Bhajoré", "Rām Hai Sāi Tu Shyām Hai Sāi", "Jag Paripālaka Pāvana Sāi", "Nanda Ké Dulāré Yashodā Ké Pyāré", "Rām Bhajo (3) Ré (x2)"] },

  { id: "335", content: ["Sadā Nirantara Hari Guna Gāo", "Prema Bhakti Se Bhajana Sunāo", "* Sāi Nātha Ké Sharana Mé Āo", "Mana Mandira Mé Deepa Jalāo", "Jeevana Naiyā Pāra Lagāo"] },

  { id: "336", content: ["Sahārā Do Bhagavān", "Mujhé Dayā Karo Mujhé Kripā Karo", "Sanmati Do Bhagavān", "* Sadā Sātha Raho Hey Bhagavān", "Sadā Raksha Karo Hey Bhagavān", "Shānti Bhakti Prema Do Bhagavān"] },

  { id: "337", content: ["Sāi Avatārā Yuga Avatārā", "Deena Dayālā Sankata Hārā", "* Sāi Brahmā Sāi Vishnu", "Sāi Maheshwarā", "* Sathya Sāi Prema Sāi", "Sab Dharmon Ké Bābā Sāi", "Sāi Parameshwarā"] },

  { id: "338", content: ["Sāi Bābā Geeta Sudhā", "Madhuram Madhuram Ānandam (x3)", "Shirdi Bābā Geeta Sudhā", "Madhuram Madhuram Ānandam", "Parthi Bābā Geeta Sudhā", "Madhuram Madhuram Ānandam"] },

  { id: "339", content: ["Sāi Bābā Hamein Pās Bulāo", "Sāi Rāmā Hamein Darsha Dikhāo", "Sāi Krishna Meré Geet Mé Samāo", "Sāi Nātha Meri Phukār Sun Jāo"] },

  { id: "340", content: ["Sāi Bābā Sakala Bhuvana Ké Dātā – 3", "Rupa Manohara Kamalā Kāntā", "Yugavatāra Sāi Bābā Dayā Karo Parthi Bābā", "Shirdi Parthi Hridaya Vihāri", "Prashānti Nilaya Sāi (x2)"] },

  { id: "341", content: ["Sāi Bār Bār Tum Āo", "Sāi Bār Bār Tum Bār Bār", "Prabhu Bār Bār Tum Āo", "* Bich Bhanvar Mé Nāw Phansi Hai", "Tumhi Pār Lagāo Sāi Āo", "Tarasa Rahé Hein Nayana Hamāré", "Ab To Darsha Dikhāo Sāi Āo", "Sāi Bār Bār Tum Bār Bār", "Prabhu Bār Bār Tum Āo"] },

  { id: "342", content: ["Sāi Bhajana Binā Sukha Shānti Nahin", "Hari Nām Binā Ānanda Nahin", "Prema Bhakti Binā Uddhār Nahin", "Guru Seva Binā Nirvāna Nahin", "* Japa Dhyāna Binā Samayoga Nahin", "Prabhu Darsha Binā Pragnāna Nahin", "Dayā Dharma Binā Satkarma Nahin", "Bhagavan Binā Koyi Apnā Nahin", "Sāi Nātha Binā Paramātma Nahin"] },

  { id: "343", content: ["Sāi Charan Sukhadāyi Man", "Sāi Binā Jeenā Kyā Hai (2)", "* Mātā Bhi Tu Pitā Bhi Tu", "Āo Bhagavan Deejo Darshan", "Mat Jāo Sāi Man Mandir Se", "Sāi Binā Jeenā Kyā Hai (2)"] },

  { id: "344", content: ["Sāi Darbār Mé Āo Gāo", "Sankirtana Karoun Main Sāi Ké (x2)", "Peetāmbaradhara Nayana Manohara", "Sāi Sab Ké Prāna Sakhā", "Charana Kamala Par Sharana Paroun Main", "Sankirtana Karoun Main Sāi Ké (x2)"] },

  { id: "345", content: ["Sāi Govindā Sāi Gopālā", "Teré Binā Sāi Sab Hai Andherā", "Deejo Meré Sāi Charana Tumhāré", "Deejo Meré Sāi Darsha Tumhāré", "Āo Meré Sāi Man Mandir Mé (x2)"] },

  { id: "346", content: ["Sāi Hai Jeevan Jeevan Sathya Sāi", "Sāi Merā Jeevan Sahārā", "* Teré Binā Sāi Sab Hai Andherā", "Pār Karo Meré Jeevan Naiyā", "Charana Lagālo Mujhé Sāi Kanhaiyā"] },

  { id: "347", content: ["Sāi Hamārā Tum Ujiyārā", "Kaliyuga Avatārā", "Jeevan Naiyā Pār Lagādé", "Meré Deenānātha (x2)", "Mandir Masjid Gurudwāré Mé", "Sāi Tero Nām", "Kankana Mé Sāi Rām"] },

  { id: "348", content: ["Sāi Mahādevā - Sathya", "Parthipurishwara Hey", "Sāi Bābā Maheshwara Hey", "* Nirupama Sundara Hey", "Sāi Neeraja Dala Nayanā", "Vibhuti Sundara Hey Sāi Bābā Maheshwara Hey"] },

  { id: "349", content: ["Sāi Mātā Pitā Deena Bandhu Sakhā", "Teré Charanon Mé Sāi Merā Koti Pranām", "Sāi Mātā Pitā Deena Bandhu Sakhā", "Teré Charanon Mé Sāi Merā Koti Pranām", "Mujhé Shakti Do Meré Sāi Shivā", "Mujhé Bhakti Do Meré Sāi Shivā", "Mujhé Mukti Do Meré Sāi Shivā"] },

  { id: "350", content: ["Sāi Merā Tum Ho Sahārā", "Shirdi Avatārā Sāi Parthipuri Bhagavān", "Deenon Ké Tum Prāna Sakhā Prabhu", "Meré Sāi Rām", "Meré Sāi Rām Bābā Parthipuri Bhagavān"] },

  { id: "351", content: ["Sāi Nām Bhajo Sathya Sāi Nām Bhajoré", "O Pyāré Sāi Meré Pār Utāro", "* Chānd Suraj Tāré Sāi Āsmān Bhi Sāi", "Parvat Sāi Sāgar Sāi Nadiyā Bhi Sāi", "Āgé Sāi Piché Sāi Dāyein Bāyein Sāi", "Har Pal Sāi Hardam Sāi Sabhi Sathya Sāi"] },

  { id: "352", content: ["Sāi Nātha Deena Nātha Brahma Rupa Satguru", "Nirākāra Hey Ākāra Sathya Sāi Satguru", "Omkāra Satguru Nirvikāra Satguru", "Nirvikāra Satguru Omkāra Satguru", "* Mātā Pitā Satguru Sakala Tum Hi Satguru", "Sakala Tum Hi Satguru (2)"] },

  { id: "353", content: ["Sāi Nāthā Guru Govindā", "Sathya Sāi Jaya Paramānandā (3)"] },

  { id: "354", content: ["Sāi Nātha Prabhu Ab Tum Āo", "Mana Mandira Mé Āo", "* Āo Sundara Sāi Bhagavān", "Āo Mangala Karunā Nidhān", "Āo Sumangala Bhakton Ké Prān", "Ab Tum Āo"] },

  { id: "355", content: ["Sāi Om (3)", "Tan Man Prāna Mé Sāi Om", "* Shayana Sapana Mé Sāi Om", "Gagan Pavana Mé Sāi Om", "Shayana Sapana Mé Sāi Om", "Nayana Nayana Mé Sāi Om", "Janama Marana Mé Sāi Om"] },

  { id: "356", content: ["Sāi Pitā Aur Mātā Sāi", "Deena Dayālā Dātā Sāi", "* Sāi Guru Sāi Sakhā Sahodara", "Sāi Satya Shivā Sāi Sundarā", "Veda Upanishada Geetā Sāi", "Deena Dayālā Dātā Sāi"] },

  { id: "357", content: ["Sāi Prema Dé Shānti Dé Ānanda Dé", "Bābā Prema Dé", "Tum Ho Bābā Dayā Ké Sāgara", "Tum Ho Guna Mandir Natanāgara", "Ādi Ananta Hai Satya Sanātana", "Nitya Niranjana Sāi Janārdana", "Satchidānanda Prabhu Kripā Karo"] },

  { id: "358", content: ["Sāi Rām Ghanashyāma Bhagavān Tumhārā Nām", "Tum Bina Koyi Nahin Rakhawālé", "Tum Bina Koyi Nahin Āpath Sahāré", "Tum Bina Prema Koyi Nahin Denéwālé", "Tum Ho Meré Ātmārām Bābā", "Bhagavān Tumhārā Nām", "Sāi Rām Tumhārā Nām"] },

  { id: "359", content: ["Sāi Rāmā Hey Ghanashyāmā", "Parama Dayāgana Ātmārāmā", "* Shānta Saguna Hari Hara Paramātmā", "Bhakta Samrakshaka Dayābhi Rāmā", "Patita Pāvanā Sathya Sāi Rāmā", "Sharanam Sharanam Hey Sāi Rāmā"] },

  { id: "360", content: ["Sāi Rām Sāi Rām", "Gā Ye Geeta Sadā Subah Aur Shām", "Har Ek Pāl Mé Har Ek Kshan Mé", "Bhajé Ham Sadā Terā Nām – Sāi", "Gā Ye Geeta Sadā Subah Aur Shām", "Koyi Kahé Tujhé Jānaki Rām", "Koyi Phukāré Rādhéshyām", "Hamhré Liyé Tum Sāi Bhagavān", "Gā Ye Geeta Sadā Subah Aur Shām"] },

  { id: "361", content: ["Sāi Rām (2) Sāi Devā Satguru Rām", "Karunā Sāgara Parthipurishā", "Satya Swarupā Rām", "Ātmābhi Sāi Rām", "Sāi Parthipurishwara Rām"] },

  { id: "362", content: ["Sāi Rām Sāi Shyām Meré Sāi Rām", "Meré Sāi Meré Bābā Meré Prāna Nātha Rām", "Teré Dwār Pé Main Āwoun", "Mujhé Shānti Do Bhagavān", "Mujhé Shānti Do Bhagavān", "Meré Jeevan Mé Sāth Raho Sāi Nātha Hey", "Meré Sāi Meré Bābā Meré Prāna Nātha Rām"] },

  { id: "363", content: ["Sāi Rām Swāgatam", "Sāi Rām Swāgatam", "Happy Birthday To You Sāi Lord", "Happy Birthday To You Sāi Lord", "Suragana Bhava Harā", "Eeshwarāmbā Nandanā", "Swāgatam Swāgatam"] },

  { id: "364", content: ["Sāi (2) Smarana Karo", "Guru Charana Kamala Dhyāna Karo", "Keshava Mādhava Bhajana Karo", "Shri Satguru Sāi Sevā Karo"] },

  { id: "365", content: ["Sāi Satya Pālanā", "Bābā Satya Pālanā", "Shirdipuri Vāsā Sāi Sarveshā", "Hey Shirdipuri Vāsā Hey Parthipuri Vāsā", "Sarveshā Satya Pālanā", "* Akhila Nivāsā Jaya Hrishikeshā", "Mangala Kara Hey Pāvana Purushā", "Shirdipuri Vāsā Sāi Sarveshā", "Hey Shirdipuri Vāsā Hey Parthipuri Vāsā", "Sarveshā Satya Pālanā"] },

  { id: "366", content: ["Sāi Sundarā Sundarā", "Vyāgrāmbaradhara Haré Hari Harā", "* Ananta Guna Mandirā Sundarā", "Natana Sundarā Bhuvana Sundarā"] },

  { id: "367", content: ["Sāi Tero Nāma Tero Nāma", "Janama Janama Main Gāoun (x2)", "Charana Tumhāre Satguru Sāi", "Apane Hridaya Basāo", "Shirdi Sāi Parthi Sāi", "Prema Sāi Guna Gāo", "Janama Janama Main Gāoun (x2)"] },

  { id: "368", content: ["Sākshāt Parabrahma Sāi", "Guru Vandanā Sathya Sāi", "Guru Pada Ranjana Guru Parameshā", "Guru Brahma Guru Vishnu Maheshā", "Sadguru Sāi Parthipurishā", "Charana Namostuté Sāi Maheshā"] },

  { id: "369", content: ["Sankata Haranā Shri Sāi Ramanā", "Pankaja Charanā Namo Namo", "Vedoddharanā Venkata Ramanā", "Lakshmi Nārāyana Namo Namo", "Namo Namo (2)", "Pankaja Charanā Namo Namo"] },

  { id: "370", content: ["Sarva Nāma Swarupam Sāi Bābā", "Sarva Hridaya Virājam Sāi Bābā", "* Sarva Daivatva Swarupam Sāi Bābā", "Sarva Dharma Virājam Sāi Bābā", "Om Brahma Sanātani Sāi Bābā"] },

  { id: "371", content: ["Satbār Kahoré Sāi Rām", "Sāi Rām Sāi Rām Sāi Rām", "Hey Mangala Nayanā Rām", "Hey Gopi Jeevana Shyām", "Hey Shirdi Ké Bhagavān", "Hey Prashānti Nilaya Rām", "Kshat Koti Namana Sāi Rām", "Sāi Rām (3)"] },

  { id: "372", content: ["Satguru Brahma Sanātana Hai", "Parama Dayāgana Pāvana Hai", "Janmaja Dukha Vināshana Hai", "Jagadoddhārana Kārana Hai", "Sāi Krishna Janārdana Hai", "Bhava Bhaya Jaladi Tārana Hai"] },

  { id: "373", content: ["Satguru Sāi Bābā Sāisha Bolo", "Sāisha Bolo Sāisha Bolo", "Satguru Sāi Nāma Samāyo", "Sāré Jaga Mé Sāi Samāyo", "Tumhré Nām Ki Jyoti Jalāyo"] },

  { id: "374", content: ["Satguru (3) Sathya Sāi", "Hey Devādi Deva Guru Sāi", "Sarva Loka Sharanya Guru Sāi", "Merā Jeevan Ké Ādhār Sāi", "Kanakāmbaradhāri Hey Karunākara Sāi", "Kalyāna Gunashekhara Kaliyuga Avatāri", "Bhajoré (2) Sāi Merā Jeevan Ké Ādhār Sāi"] },

  { id: "375", content: ["Sathya Sāi Gurudevā O Pyāré Satguru Devā", "Tum Ho Merā Jeevan Sahārā", "Parthi Vihārā Merā Dulārā", "Pār Karo Hey Priya Guru Naiyā", "Dur Karo Hey Jaga Ki Māyā", "Tum Ho Sāi Duniyā Ki Dheiyā"] },

  { id: "376", content: ["Sathya Sāi Mahārājā", "Hey Trayambaka Yajā Maheshā - Shri", "Satyam Shivam Sundara Rupā", "Hey Satya Dharma Shānti Prema Ahimsā", "* Bhāradwāja Gotra Āpasthamba Sutra", "Dattātreya Digambareshā", "Nānā Avatārā Vedānta Sārā", "Nābhi Kamala Lingodbhavakarā"] },

  { id: "378", content: ["Sathya Sāi Rāmā Hey Ghanashyāmā", "Prema Sudhā Barso Shānti Sudhā Barso", "* Kaliyuga Me Tum Yuga Avatāri", "Sathya Sāi Rāmā Hey Ghanashyāmā (x2)"] },

  { id: "379", content: ["Sathya Sāi Rāmā Shiva Shakti Rupā", "Satya Dharma Shānti Prema Purna Teja", "Eeshwarāmba Nandana Sathya Nārāyana", "Yuga Avatārā Devādi Devā", "Jaya Parameshā Parthipurishā", "Hridayeshwarā Sāishwarā"] },

  { id: "380", content: ["Sathya Sāi Smaranam Smaranam", "Parthi Sāi Smaranam", "Tribhuvana Pālaka Sāi Maheshā", "Sathya Sāi Smaranam", "Shri Guru Charanam Sab Dukha Haranam", "Sathya Sāi Smaranam Smaranam", "Sathya Sāi Smaranam"] },

  { id: "375", content: ["Satya Gurudeva Rāh Dikhāo Prabhu", "Rāh Dikhāo Sāi Devā", "* Tum Ho Meré Prān Dātā", "Tum Ho Meré Bhāgya Dātā (x2)"] },

  { id: "381", content: ["Satyam Gyānam Anantam Brahmā (x3)", "Satyam Brahmā", "Gyānam Brahmā", "Anantam Brahmā"] },

  { id: "382", content: ["Shāntākāram Sāi Devam", "Sākshātkāram Parabrahmam", "Prashānti Nilayam Parama Pāvanam", "Devādi Devam Gurudevam"] },

  { id: "383", content: ["Sharana Mé Lelo Sāi Rām", "Kripā Karo Hey Sāi Rām", "Karunā Sāgara Deena Bandhu Sathya Sāi Rām", "Sab Kā Mālika Tum Ho Sāi Jag Kā Pālanhār", "Vinti Sunlo Swikār Karlo Sathya Sāi Rām"] },

  { id: "384", content: ["Sharanam Gurudevā Sharanam Sāi Devā", "Jaya Jaya Gurudevā Jaya Jaya Sāi Devā", "* Kripā Karo Hey Gurudevā", "Kshamā Karo Hey Sāi Devā", "Deena Bandhu Karunā Sindhu", "Sāi Devā Sathya Sāi Devā", "Jaya Jaya Gurudevā Jaya Jaya Sāi Devā"] },

  { id: "385", content: ["Sharanam (2) Sāisha Sharanam", "Shri Guru Jaya Guru Satguru Sāi Guru", "* Parthipurisham Sāi Gopālam", "Shānti Nivāsam Gurudeva Sharanam"] },

  { id: "386", content: ["Sheetala Charanam Komala Charanam", "Manjula Charanam Mama Guru Charanam", "Mridula Charanam Anugraha Charanam", "Satguru Charanam Sadā Smarāmi", "Prema Dātā Sāi Gurunāthā", "Pāvana Charanam Sadā Bhajāmi"] },

  { id: "387", content: ["Shirdi Ké Bhagavān Sāi Rām", "Parthi Mé Tuhi Janam Liyo Ré", "* Mandira Mandira Ghantā Bājé", "Teré Nām Ki Mahimā Bhāri", "Bhakton Ké Rakhawālé O Bābā"] },

  { id: "388", content: ["Shirdi Ké Sāi Parthi Ké Bābā", "Tum Ho Hamāré Pyāré Sāi Bābā", "* Prema Maya Sāi Prema Pradātā", "Eeshwarāmbā Nandana Jagat Paripālā", "Pāpa Vināshaka Parama Kripālā - Hey"] },

  { id: "389", content: ["Shirdi Sāi Parthi Bābā", "Deenajanon Ké Sāi Bhaktajanon Ké Bābā", "Kaliyuga Avatārā Meré Jeevana Ādhārā", "Satguru Sāi Rām Shri Guru Sāi Rām"] },

  { id: "390", content: ["Shirdi Sāi Parthi Sāi Ham Ko Deejo", "Premāmrita Dhārā (2)", "Tava Sevā Kā Avasar Deejo", "Sathya Sāi Mahādeva", "Gānāmrita Mé Bhāva Bhi Deejo", "Prema Sāi Bhagavān", "Hey Prema Sāi Bhagavān"] },

  { id: "391", content: ["Shirdipuri Bhagavān Parthipuri Bhagavān", "Prema Swarupa Premāvatārā", "Sāi Nātha Bhagavān (x2)", "Buddham Sharanam Gachchāmi", "Dhammam Sharanam Gachchāmi", "Sangham Sharanam Gachchāmi", "Sāisha Sharanam Gachchāmi"] },

  { id: "392", content: ["Shri Ganeshā Jaya Ganeshā", "Jaya Guru Devā Sāi Maheshā", "Pārvati Shankara Hey Parameshā", "Rām Krishna Hari Govinda Vitthalā", "Subrahmaniam (2)", "Shanmukha Nāthā Subrahmaniam", "Subrahmaniam (2) Sāi Nāthā Subrahmaniam"] },

  { id: "393", content: ["Shubha Din Āj Mangala Gāna Karo", "Prema Pavitram Sundara Anupama", "Sathya Sāi Bhajana Karo", "Mangala Gāna Karo", "* Swāgatam Sāi Suswāgatam", "Hridaya Mandir Mé Āo Bhagavan", "Meré Hridaya Mé Āo Bhagavan"] },

  { id: "394", content: ["Sundara Vadanā Sarasija Nayanā", "Parthipuri Bhagavān", "Jagat Paripālā Prashānti Nilaya", "Tum Ho Meré Bhagavān", "Dayā Karo Bhagavān", "Kripā Karo Bhagavān", "Parthipurishā Hey Bhuvaneshā", "Rakshā Karo Bhagavān", "Dayā Karo Bhagavān", "Kripā Karo Bhagavān"] },

  { id: "395", content: ["Terā Sahārā Chooté Nā", "Sāi Terā Sahārā Chooté Nā", "Charanon Mé Rakhlo Mujhko Sāi", "Manwā Merā Thoothé Nā", "Ās Na Thoothé Tu Na Roothé", "Tor Do Sāi Bandhan Jhooté", "Tum Sanga Preeta Ki Bāndhi Dor", "Koyi Looterā Looté Nā"] },

  { id: "396", content: ["Teré Dar Pé Āyā Houn Darshan Pāké Jāwoungā", "Ankhon Mé Tujhko Basāké Leké Jawoungā", "* Prashānti Mandir Se Bāhar Ā", "Sab Ko Darshan Tu Dedé", "Meré Man Mandir Mé Sāi Ājā Aur Bas Jā", "Ās Lagāyé Tujhé Phukāré Intazār Karoun"] },

  { id: "397", content: ["Teré Sivā Prabhu Koyi Nahin Hai", "Tujhko Merā Pranām", "Tujhko Merā Pranām Sāi Rām", "Tujhko Merā Pranām", "Murali Manohara Āshā Na Toro", "Dukha Bhanjana Merā Sātha Na Choro", "Dwāra Kharā Houn Main Houn Bhikhāri", "Sunlé Meri Phukār Sāi Rām Sunlé Meri Phukār"] },

  { id: "398", content: ["Tu Milé Na Milé O Meré Sāi", "Ham Āyé Teré Darsha Ko Sāi", "Teré Darasha Mé Sukha Jeevan Kā", "Nilaya Prashānti Nām Teré Ghar Kā", "Sāi Deepa Jalé Ghar Ghar Sāi", "Ham Āyé Teré Darsha Ko Sāi", "Parthi Mé Sāi Rām Virājé", "Bhajan Poojan Se Parthi Sājé", "Janam Janam Ki Poonji Pāyi", "Tu Chalé Na Chalé Meré Ghar Sāi", "Ham Āyé Teré Darsha Ko Sāi"] },

  { id: "399", content: ["Tum Ho Anātha Nātha Bhagavān", "O Sāi Meré Prāna Sakhā Bhagavān", "Mātā Pitā Guru Bandhu Tum Ho", "Bhakta Sakhā Bhagavān", "Deena Sakhā Bhagavān", "Bhagavān Bhagavān", "Prāna Sakhā Bhagavān – O Sāi Meré"] },

  { id: "400", content: ["Tum Ho Meré Bhagavān Bābā", "Parthipurishā Shri Sāi Nāthā", "Shirdipurishā Hey Jagannāthā", "* Prashānti Vāsā Shri Sāi Nāthā", "Purāna Purushā Hey Jagannāthā"] },

  { id: "401", content: ["Tum Ho Rām Tum Ho Shyām", "Bhakton Ké Prān Bhagavān Sāi Rām", "Seetārām Rādhéshyām", "Eka Prabhu Bhagavān Sāi Rām", "Bhakton Ké Prān Bhagavān Sāi Rām"] },

  { id: "402", content: ["Vinti Suno Meré Sāi Bhagavān", "Dayā Karo Meré Sāi Bhagavān", "Bhaktajanon Ké Tum Ho Prāna", "Deena Dayālā Karunā Nidhān", "Tribhuvan Pālā Sādhu Paritrāna"] },

  { id: "403", content: ["Yuga Avatārā Pāvana Dhāmā", "Kaivalya Dāyaka Rām Sāi", "* Karunā Sāgara Prema Ké Sindhu", "Deena Bandhu Deenanātha Bhagavān", "Anupama Sundara Prashānti Vāsā", "Hridayeshwara Sāi Rām"] },

  { id: "500", content: ["Abhaya Pradāyini Ānanda Rupini", "Sāi Mātā Sathya Sāi Mātā", "Hemagiri Nandini Bhava Bhaya Bhanjani", "Jaya Jaga Janani Devi Bhavāni", "Parthipurishwari Sāi Janani (x2)"] },

  { id: "501", content: ["Akhilāndeshwari Rājā Rājeshwari", "Dayā Sāgari Parama Kripākari", "Sāmba Vinodini Shiva Sāi Shankari (x2)", "Mangala Gauri Mātā Maheshwari"] },

  { id: "502", content: ["Ambā Jaga Janani", "Karunāmayi Sāi Premamayi", "Hey Ātma Swarupini Mā", "* Sahārā Do Mā Mujhé Kripā Karo Sāi Mā", "Mangala Kārini Manjula Bhāshini", "Moksha Pradāyini Mā"] },

  { id: "503", content: ["Ambā Shankari Parameshwari", "Shashi Shekhari Ambā", "Sarveshwari Jagadishwari Maheshwari Ambā", "Ambā Sundari Guna Manjari", "Shiva Shankari Ambā", "Kādambari Swetāmbari Hari Sodari Ambā"] },

  { id: "504", content: ["Ambamandahāsa Vadani Manohari", "Sāi Jaga Janani", "Mātā (3) Jaga Janani", "Jaga Janani Shubha Karani", "Sāi Jagan Mātā Sathya Sāi Jagan Mātā", "Mātā (3) Jaga Janani"] },

  { id: "505", content: ["Ambé Janani Abhirāmi", "Abhaya Pradāyini Shivakāmi", "* Sāmbavi Shankari Sarveshwari", "Shānta Swarupini Shiva Shankari", "Sathya Swarupini Sāi Mātā", "Shāshwata Ānanda Dāyini Mātā"] },

  { id: "506", content: ["Antarjyot Jalāo Sāi", "Brahma Sanātani Dayā Karo", "Dayā Karo Hey Poorna Jyotirmayi", "Shiva Shakti Mayi Kripā Karo", "Deena Dayāmayi Patita Pāvani", "Sāi Jagajanani Kripā Karo"] },

  { id: "507", content: ["Bhairavi Ambé Bhavāni - Ambā", "Jagadambé Mā Jaga Janani", "* Nārāyani Patita Pāvani", "Parthi Puranjani Sāi Janani"] },

  { id: "508", content: ["Bhajaré Mā (2)", "Bhajaré Bhaja Man Sāi Mā", "* Bhajaré Saraswati Shankari Mā", "Bhajaré Chandi Maheshwari Mā", "Pārvati Bhava Bhaya Hārini Mā", "Pankaja Lochani Sāi Mā"] },

  { id: "509", content: ["Bhajoré Bhajo Sadā Durgā Bhavāni", "Mangala Kārini Sāi Janani", "* Mahishāsura Mardini Bhavāni", "Dayā Sāgari Hey Jaga Janani"] },

  { id: "751", content: ["Shambho Shivā Hara Shambho Shivā", "Sāmba Shiva Nāyaka Hara Shambho Shivā", "Gangādhara Juthā Shiva Gauri Nāyakā", "Kāshipura Vāsā Hey Kanakasabeshā", "Tat Dimi Dimi Damaru Ka Shiva Rudra Nateshā", "Sāi Maheshā Sathya Sāi Maheshā (x2)"] },

  { id: "752", content: ["Shankara Nām Bhajo", "Shankara (2) Nām Bhajo – 3", "* Peetāmbaradhara Sāi Shankara", "Chandrakalādhara Gauri Manohara"] },

  { id: "753", content: ["Shankara (2) Sadāshivā", "Sadāshivā Hey Sāmba Shivā", "* Ambā Sahitā Sāmba Shivā", "Sāmba Shivā Hey Sadāshivā"] },

  { id: "754", content: ["Shankaram Bhajé Sāi Shankaram Bhajé", "Parthi Vāsā Sāi Deva Shankaram Bhajé", "Sadgurum Bhajé Sāi Sadgurum Bhajé", "Satchidānanda Gurum Satgurum Bhajé"] },

  { id: "755", content: ["Shankarā Sadāshivā Chandrashekharā", "Chandrashekharā Sāi Shankarā", "Neelakantha Trishuladhāri Sāi Shankarā", "Bhālanetra Tripura Hāri Sāi Shankarā", "Chandrashekharā Sāi Shankarā"] },

  { id: "756", content: ["Shankarā Sadāshivā Sabhāpaté Manoharā", "Chandrashekharā Jatādharā Umā Maheshwarā", "* Shankarā Sāi Shankarā (x2)", "Chandrashekharā Jatādharā Umā Maheshwarā", "Ishwarā Sāi Ishwarā", "Ishwarā Parthi Ishwarā", "Chandrashekharā Jatādharā Umā Maheshwarā"] },

  { id: "757", content: ["Shankarā Shiva Shankarā", "Shiva Shankarā Shambho", "Shankarā Shiva Shankarā", "Shiva Shambho Mahādevā", "* Dama (2) Damaru Bajé Shankara", "Ghana Ghana Ghantā Bajé", "Hara Bholenātha Shambho", "Hara Sāi Nātha Shambho – Hara"] },

  { id: "758", content: ["Shirdi Nivāsā Sāi Shankarā", "Parthi Nivāsā Sāi Shankarā", "Bhāvā Teetā Bhāva Gocharā", "Kālā Teetā Kālā Bhairavā", "Jai Jagadishwara Omkāreshwara – 4"] },

  { id: "759", content: ["Shirdi Sāi Shankarā Parthi Vihāri Shankarā", "Shankarā Abhayankarā", "Bhava Bhaya Hāri Shankarā", "* Paramātmā Shiva Shankarā", "Pāvana Purushā Shankarā", "Satya Swarupā Shankarā Sathya Sāi Shankarā"] },

  { id: "760", content: ["Shirdi Sāi Shiva Parthi Sāi Shivā", "Hara Hara Shankara Shiva Sāi Shambho", "Natana Manohara Gaurivarā", "Sāmba Sadāshiva Shiva Sāi Shambho (Hara)", "Gangādhara Shiva Hara Hara Shambho"] },

  { id: "761", content: ["Shirdi Sāi Shiva Shankarā", "Sathya Sāi Parameshwarā", "Shambho Mahādeva Sadāshivā", "Gangādhara Hara Gaurishwarā"] },

  { id: "762", content: ["Shiva Hara Hey Hara Shiva Hey", "Sāmba Sadāshiva Shiva Hara Hey", "Hara (4) Mahādevā", "Pārvati Ramanā Sadāshivā", "Namāmi Shankara Tava Sharanam", "Bhavāni Shankara Tava Sharanam"] },

  { id: "763", content: ["Shiva Maheshwarā (3) Sāi Rām", "Shiva Maheshwarā Shiva Shankarā", "Shiva Mahādevā Sāi Rām", "Kailāsha Vāsā Mahādevā", "Jagadishwara Hara Mahādevā", "Tribhuvana Pāla Bābā Sāi Devā"] },

  { id: "764", content: ["Shiva Shambho Shambho", "Shiva Shambho Mahādevā", "Hara (4) Mahādevā Shiva Shambho Mahādevā", "Hālāhaladhara Shambho Anātha Nāthā Shambho", "Hari Om (3) Namah Shivāya"] },

  { id: "765", content: ["Shivā Shankarā", "Ānanda Nateshā", "Shambho Nandana Hey Parameshwara", "Chidambara Nāthā Ambalavānā", "* Damaru Bajé Shiva Ghantā Bajé", "Kailāshapaté Prema Shiva Shankara (Sāi)"] },

  { id: "766", content: ["Shiva (2) Hara (2) Bhola Maheshwara", "Shambho Shankarā", "Chandrakalādhara Gauri Manohara", "Shambho Shankarā", "* Vyāgrāmbaradhara Chandrakalādhara", "Shambho Shankarā", "Hālāhaladhara Shailagirishwara", "Shambho Shankarā", "Chandrakalādhara Gauri Manohara", "Shambho Shankarā"] },

  { id: "767", content: ["Shiva (2) Shambho Mahesha Girishā", "Hara (2) Sāi Mahādevā", "Nandi Vāhanā Nāga Bhooshāna", "Bhāla Lochanā Tripurāri Samhāri", "Parama Purusha Shiva Gangādhāri", "Chandrakalādhara Pārvati Ramanā", "Hara (2) Sāi Mahādevā"] },

  { id: "768", content: ["Shiva (2) Shankara Hara Parameshwara", "Bāla Gangādhara Sāi", "Shiva (2) Shankara Parthipurishwara", "Natashiva Shankara Sāi", "Bāla Gangādhara Sāi"] },

  { id: "769", content: ["Shiva (4) Tāndavané", "Hara (4) Shankarané", "* Shiva (4) Pashupatiyé", "Hara Hara Namo Pārvati Patayé", "Shiva (2) Shambho, Hara (2) Shambho", "Parthipurishwara Sāi Shambho (x2)"] },

  { id: "770", content: ["Shivāya Parameshwarāya", "Chandrashekharāya Namah Om", "Bhavāya Gunasambhavāya", "Shiva Tāndavāya Namah Om"] },

  { id: "771", content: ["Shivoham (3) Shivā", "Chidānanda Rupam Shivoham Shivā", "Shivoham (3) Shivā", "Shivoham Shivā (2)", "Chidānanda Rupam Shivoham Shivā"] },

  { id: "772", content: ["Tāndava Priyakara Sabhāpaté", "Dam (4) Damaru Bajé", "Hara Bam Hara Bam Bholā Maheshwara", "Dama (2) Damaru Shiva Tāndavā", "Dam (4) Damaru Bajé", "Chidambareshā Sāi Natarājā", "Vibhuti Sundara Triyambakeshā", "Dam (4) Damaru Bajé"] },

  { id: "773", content: ["Tāndava Priyakara Sāi Parameshwara", "Nāché Sāi Shankara Natarājā", "Dama (4) Damaru Bājé", "Ghana (2) Bājé Pāyaliyā", "Nāché Gangādhara Nāché Bimbādhara", "Nāché Sāi Shankara Natarājā"] },

  { id: "774", content: ["Tum Ho Dātā Sāi Shankarā", "Sab Ko Deejo Ānanda Bābā", "* Āo Shankara Anātha Nāthā", "Deejo Darshan Deena Nāthā"] },

  { id: "775", content: ["Veda Rupāntara Shiva Shambho", "Vishmaya Rupā Shiva Shambho", "* Tripura Nāshaka Trishuladhāri", "Lokoddhāraka Bhava Bhaya Hāri", "Rudra Mahādeva Bhaktoddhāri"] },

  { id: "776", content: ["Umā Maheshwara Uragā Bharanā", "Gangādhara Shiva Shambho", "Jaya Jagadishwara Pārvati Ramanā", "Parātparā Shiva Shambho", "Parthipurishwara Shambho"] },

  { id: "777", content: ["Vishwādhāri Shiva Avatāri", "Sāi Shankara Namo Namo", "Mathurā Nāthā Nārāyana Hari", "Sāi Shankara Namo Namo (x2)"] },

  { id: "850", content: ["Ātmā Rām Ānanda Dhāma", "Atchyuta Rām Ayodhya Rām", "Seetā Rām Sathya Sāi Rām", "Sundara Rām Sugunābhi Rām", "Sāi Rām (3) Rām (x3)"] },

  { id: "851", content: ["Ātma Rāmā Ānanda Rāmā", "Ānanda Mohana Shri Parandhāmā", "* Māyāvee Rāmā Mānasa Premā", "Sundara Rāmā Sugunābhi Rāmā"] },

  { id: "852", content: ["Ayodhyā Vāsi Rām Rām Rām", "Dasharatha Nandana Rām", "Patita Pāvana Jānaki Jeevana", "Seetā Mohana Rām", "Ayodhyā Vāsi Rām Rām Rām", "Dasharatha Nandana Rām", "Patita Pāvana Jānaki Jeevana", "Seetā Mohana Rām"] },

  { id: "853", content: ["Ayodhyā Vihāri Shri Rām Rām Rāmā", "Dwārakā Vihāri Shri Krishna Krishna Krishnā", "Saptagiri Vihāri Govinda Govindā", "Nija Bhakta Hridaya Vihāri", "Shri Sāi Nātha Devā"] },

  { id: "854", content: ["Bhaja Bhajo Rām Rām Raghupati Seetā Rām", "Rāmeti Rāmā Seetā Rāmā Rāmā (x2)", "Rāmeti Rāmā Sāi Rāmā Rāmā"] },

  { id: "855", content: ["Bhaja Rāmam Bhaja Rāmam", "Bhajaré Mānasa Bhaja Rāmam", "Kalyāna Rāmam Bhaja Rāmam", "Kodanda Rāmam Bhaja Rāmam", "Patthābhi Rāmam Bhaja Rāmam", "Pāvana Nāmam Bhaja Rāmam", "Bhava Tārakam Nāmam Bhaja Rāmam"] },

  { id: "856", content: ["Bhajaré Rām Charan Satatam", "Bhajaré Rām Charan", "Bhajaré Jānaki Jeevana Rāmam", "Bhajaré Rāma Bhadrachala Rāmam", "Bhajaré Pāvana Tāraka Nāmam", "Bhajaré Shri Rāma Rāmeti Rāmam"] },

  { id: "857", content: ["Chandra Kirana Kula Mandana Rām", "Shrimad Dasharatha Nandana Rām", "Kaushalyā Sukha Vardhana Rām", "Vishwāmitra Priya Dhana Rām", "Shri Rām Jaya Rām Jaya Jaya Rām – 4"] },

  { id: "858", content: ["Dānava Bhanjana Rām Sāi", "Shyāmala Komala Rām", "Hey Rām Rām Jaya Rām Sāi Rām Rām Rām", "Dasharatha Nandana Rām Sāi Dayā Sāgara Rām", "Hey Deenon Ké Prabhu Rām Sāi Rām Rām Rām"] },

  { id: "859", content: ["Dasharatha Nandana Rām Rām Rām", "Dashamukha Mardana Rām Rām", "Raghupati Ranjana Rām Rām", "Pāpa Vimochana Rām Rām", "Kalyāna Rām Rām Rām", "Seetā Rām Jaya Rām Rām", "Kaliyuga Varadā Rām Rām", "Karunā Murti Sāi Rām"] },

  { id: "860", content: ["Dasharatha Nandana Rāmā Dayā Sāgarā Rāmā", "Dashamukha Mardana Rāmā", "Daitya Kulāntaka Rāmā", "Lakshmana Sevita Rāmā", "Lakshmi Manohara Rāmā", "Sukshma Shareerā Rāmā Sundara Vadanā Rāmā"] },

  { id: "861", content: ["Dasharatha Rām Jānaki Rām", "Māruti Sevita Manobhi Rām", "Seetā Rām Shri Raghurām", "Parthipurishwara Shri Sāi Rām", "Jaya Jaya Rām Jānaki Rām", "Ahalyoddhāraka Ānanda Rām"] },

  { id: "862", content: ["Dayābhi Rāmā Jānaki Rāmā", "Madhura Manohara Prabhu Sāi Rāmā", "Ātmārāmā Nayanabhi Rāmā", "Kodanda Rāmā Patthābhi Rāmā", "Raghupati Rāghava Rājārāmā", "Madhura Manohara Prabhu Sāi Rāmā"] },

  { id: "863", content: ["Deena Dayālā Shri Sāi Rāmā", "Jagadoddharā Prashānti Rāmā", "Anātha Rakshaka Ānanda Rāmā", "Ānanda Rāmā Prabhu Sāi Rāmā", "Ātmābhi Rāmā Prabhu Sāi Rāmā"] },

  { id: "864", content: ["Dwārakāmāyi Rām Hey Shirdipurishwara Rām", "Prashānti Nilaya Rām", "Hey Parthipurishwara Rām", "Ayodhyā Vāsi Rām Hey Jānaki Jeevana Rām", "Dayā Karo Raghurām", "Hey Deena Bandhu Sāi Rām"] },

  { id: "865", content: ["Hey Deena Dayālu Sāi Rāmā Rām", "Parama Kripālu Sāi Rāmā Rām", "Sāi Rām Rāmā Rāmā Rām (x2)", "Hey Patita Pāvana Sāi Rāmā Rām", "Bhakta Vatsala Sāi Rāmā Rām", "Sāi Rām Rāmā Rāmā Rām (x2)"] },

  { id: "866", content: ["Hey Ishwari Nandana Rāghava Sāi", "Dayānidhé Bhagavān - Hey", "Kaushalyātmaja Dasharatha Nandana", "Ramaneeya Ānanda Tribhuvana Mohana", "Parthishwara Prabhu Karunā Niketana", "Dayānidhe Bhagavān – Hey (Kripā)"] },

  { id: "867", content: ["Hey Karunānidhé Bhagavān Sāi Rām Sāi Rām", "Hey Deenajanon Ké Dayānidhé", "Prabhu Rām Sāi Rām", "Prabhuji Sāi Rām Sāi Rām", "Mangala Nāmā Sāi Rāmā Rāmā", "Hey Patita Pāvana Rām Sāi Rām Sāi Rām", "Prabhuji Sāi Rām Sāi Rām", "Jai Sathya Sāi Rām Sāi Rām"] },

  { id: "868", content: ["Hey Parthipurishā Prashānti Vāsā", "Sadguru Sāi Rām", "Jaya Sadguru Sāi Rām – (Shri, Namo)", "Haré Rām Haré Rām Haré Rām Haré Rām", "Haré Rām Sāi Rām", "Hey Prema Swarupā Pāpa Vināshā", "Sadguru Sāi Rām", "Jaya Sadguru Sāi Rām – (Shri, Namo)", "Haré Rām Haré Rām Haré Rām Haré Rām", "Haré Rām Sāi Rām"] },

  { id: "869", content: ["Hey Prashānti Nilaya Rām", "Hey Parthipuri Bhagavān", "Ahalyoddhāraka Rām Dāsharathe Raghurām", "Shri Rām Jaya Rām", "Shri Rām Rām Rām Jaya Rām", "Sāi Rām Rām Rām Sāi Rām"] },

  { id: "870", content: ["Hey Rām Bhagavān", "Hey Karunā Sindhu Rām", "Hey Deena Bandhu Sāi Rām", "Bhakta Premi Ko Karunā Karo Bābā", "Dayā Karo Raghurām - Kripā", "Hey Jānaki Jeevana Rām", "Hey Parthipurishwara Rām", "Hey Deena Bandhu Sāi Rām"] },

  { id: "871", content: ["Jagadāshraya Shri Raghurāmā", "Jagadoddhārā Sāi Rāmā", "* Parama Pāvanā Tāraka Nāmā", "Shri Rāma Kshata Koti Pranāmā", "Sāi Rāmā Koti Pranāmā", "Sharanam (2) Ātmā Rāmā"] },

  { id: "872", content: ["Jaya Jaya Mohana Rāmā Rāmā", "Jaya Sathya Sāi Parandhāmā", "Kaushalyā Rāmā Kalyāna Rāmā", "Kārunyā Rāmā Jaya Jaya Rāmā", "Kaliyuga Avatāra Sathya Sāi Rāmā", "Shri Sathya Sāi Parandhāmā"] },

  { id: "873", content: ["Jaya Jaya Raghunandanā Jaya Jānaki Jeevanā", "Sharanāgata Pālanā Jaya Jagadoddhāranā", "* Rājiva Dala Lochanā Jaya Jagatā Nandanā", "Rājādhirāja Rāmachandra Sāi Jaga Vandanā"] },

  { id: "874", content: ["Jaya Jaya Rāmā Jānaki Rāmā", "Raghukula Bhooshana Rājā Rāmā", "* Tāpasa Ranjana Tāraka Nāmā", "Dānava Bhanjana Kodanda Rāmā"] },

  { id: "875", content: ["Jaya Jaya Rām Jaya Raghurām", "Jaya Jaya Rām Jaya Sāi Rām", "Dasharatha Nandana Hey Raghurām", "Dashamukha Mardana Seetārām", "Dānava Bhanjana Jānaki Rām"] },

  { id: "876", content: ["Jaya Jaya Rāmā Jaya Raghurāmā", "Dasharatha Nandana Rājā Rāmā", "Abhaya Pradāyaka Ānanda Dāyaka", "Tribhuvana Mohana Seetā Rāmā", "Dānava Bhanjana Deenoddhārana", "Prema Sāgarā Sāi Rāmā"] },

  { id: "877", content: ["Jaya Raghunandana Jaya Jaya Rāmā", "Jaya Jagatjanani Jānaki Rāmā", "Nava Nava Komala Meghashyāmā", "Bhava Haranā Bhadrāchala Rāmā"] },

  { id: "878", content: ["Jaya Raghunandana Jaya Siyārām", "Jaya Jaya Rām Jaya Sāi Rām", "* Jānaki Jeevana Seetā Rām", "Bhakta Uddhārana Sāi Rām", "* Māyi Meerā Prabhu Rādhéshyām", "Mandara Giridhāri Hey Ghanashyām", "Mandāsmita Mukha Rādhéshyām", "Mahimā Avatārā Sāi Rām"] },

  { id: "879", content: ["Jaya Rāma Rāmā Manobhi Rāmā", "Dasharatha Nandana Sāketa Rāmā", "* Asharana Pālana Sāi Rāmā", "Anātha Rakshaka Shri Raghurāmā", "Shri Sāi Rāmā Mangala Dhāmā", "Pāhi Pāhi Shri Sāi Rāmā"] },

  { id: "880", content: ["Jaya Rāmā Jānaki Rāmā", "Jaya Rām Seetārāmā", "Jaya Rām Meghashyāmā", "Jaya Rām Sāi Rāmā"] },

  { id: "881", content: ["Jaya Rāmā Raghurāmā", "Ranadheerā Sukumārā", "* Raghupati Rāghava Rājā Rāmā", "Rājiva Lochana Rāmā Rāmā"] },

  { id: "882", content: ["Jaya Sāi Rāmā Jaya Raghurāmā – 3", "Dukhiyon Ké Dātā Sāi Rāmā", "Prema Pradātā Sāi Rāmā", "Shānta Swarupā Sāi Rāmā", "Jaya Sāi Rāmā Jaya Raghurāmā – Hey"] },

  { id: "883", content: ["Jaya Shri Rāmā Jaya Raghurāmā", "Jaya Parandhāmā Pāvana Dhāmā", "* Jaya Jaya Rāmā Jaya Satya Nāmā", "Jaya Mana Mohana Shri Sāi Rāmā"] },

  { id: "884", content: ["Jayatu Jayatu Shri Rāmā", "Janani Jānaki Rāmā", "Shri Sathya Sāi Rāmā", "* Shāshwata Ānanda Dhāmā", "Hey Dharmoddhāraka Rāmā", "Dayānidhé Kripānidhé", "Seetāpaté Jaya Raghurāmā", "Puttaparthipaté Jaya Sāi Rāmā"] },

  { id: "885", content: ["Kalimala Bhanjana Kodanda Rāmā", "Karunāntarangā Kaivalya Dhāmā", "* Māyā Mānusha Munijana Premā", "Madhura Manohara Mangala Nāmā", "Parthipurishā Prabhu Paramātmā", "Patita Pāvanā Patthābhi Rāmā"] },

  { id: "886", content: ["Kalyāna Rāmā Ānanda Rāmā", "Rāmā Shri Rāmā Jaya Rāmā", "* Avatāra Sāi Avatāra Rāmā", "Purna Avatāra Sathya Sāi Rāmā"] },

  { id: "887", content: ["Kalyāna Rāmā Kodanda Rāmā", "Seetā Rāmā Shri Raghurāmā", "* Lakshmana Sevita Lāvanya Rāmā", "Ahalyoddhāraka Pāvana Nāmā", "Mandāsmita Mukha Mangala Dhāmā", "Parthipurishwara Shri Sāi Rāmā", "Sathya Sāi Rāmā"] },

  { id: "888", content: ["Karunā Niketana Bhakta Sakhā Prabhu", "Sharana Mé Lo Bhagavān", "Dukha Bhanjana Shri Rām", "Tribhuvana Sanchāri Jyoti Swarupā", "Nitya Niranjana Rām", "Ādi Ananta Hai Prema Swarupā", "Dukha Bhanjana Shri Rām"] },

  { id: "889", content: ["Karunā Samudra Shri Rāmā", "Kaushalyā Tanayā Shri Rāmā", "Sharanāgata Priya Sāi Rāmā", "Sharanam Sharanam Sāi Rāmā"] },

  { id: "890", content: ["Karunā Sindhu Dasharatha Nandana", "Parthipurishwara Rām", "Prema Swarupa Prashānti Niketana", "Māruti Sevita Rām", "Ahalyoddhāraka Rājiva Lochana", "Raghukula Bhooshana Rām"] },

  { id: "891", content: ["Kaushalyā Nandana Rām", "Paramānanda Ānanda Rām", "Ānanda Ānanda Rām", "Paramānanda Ānanda Rām", "Jaya Shirdisha Parthisha Rām", "Jaya Prashānti Sāisha Rām", "* Jaya Mangala Pāvana Rām", "Jaya Sundara Vaidehi Rām", "Jaya Sundara Sāisha Rām"] },

  { id: "892", content: ["Kaushalyā Nandana Vaidehi Mohana", "Rājiva Lochana Rāmā", "Yuga Avatāra Parameshwara Rāmā", "Asura Nikantana Kodanda Rāmā", "Bharatāshrita Shri Rāmā Parthipurishwara Rāmā"] },

  { id: "893", content: ["Kaushalyā Rāmā Kārunya Dhāmā", "Rāvana Mardana Rāmā Shri Rāmā", "* Ahalyoddhāraka Rāmā Shri Rāmā", "Māruti Sevita Rāmā Shri Rāmā", "Sāi Rām Jai Rām Jai Jai Rām (x3)"] },

  { id: "894", content: ["Kaushalyātmaja Rām Charan", "Vaidehi Priya Rām Charan", "Māruti Sevita Rām Charan", "Bharatārchita Rām Charan", "Ahalyoddhāraka Rām Charan", "Prashānti Niketana Rām Charan", "Rām Charan Sadā Bhajo"] },

  { id: "895", content: ["Maithilipaté Raghunandanā", "Rāmā Rāghavā Rājiva Lochanā", "* Deenāvanā Hey Karunāmayā", "Kamalā Nayanā Kaushalyā Tanayā"] },

  { id: "896", content: ["Mohana Raghurāmā", "Ati Sundara Shri Rāmā", "Māruti Sevita Rāmā", "Shri Rāma Rāma Jaya Rāmā (x2)", "Shri Rāma Rāma Sāi Rāmā"] },

  { id: "897", content: ["Om Shri Rām Jai Rām Jai Jai Rām – 4", "Seetā Rām (3)", "Rādhéshyām (3)"] },

  { id: "898", content: ["Patita Pāvana Rām", "Parthipurishwara Rām", "Pāvana Nāmā Tāraka Nāmā", "Pāpa Vimochana Rām", "Dānava Bhanjana Rām", "Dasharatha Nandana Rām", "Pāvana Nāmā Tāraka Nāmā", "Pāpa Vimochana Rām"] },

  { id: "899", content: ["Prashānti Nilaya Rām Hey Parthipuri Bhagavān", "Ahalyoddhāraka Rām Hey Dāsharaté Raghurām", "Shri Rām Jaya Rām", "Shri Rām Rām Rām Jaya Rām", "Sāi Rām Rām Rām Sāi Rām"] },

  { id: "900", content: ["Prema Se Bolo Ek Bār Sāi Rām (x2)", "Sāi Rām Sāi Rām", "Bolo Rām Sāi Rām", "* Madhura Manohara Rām", "Mohana Moorata Rām", "Hey Karunā Sindhu Rām", "Hey Raghupati Rāghava Rām", "Patita Pāvana Seetārām", "Haré Rām Haré Rām", "Bolo Rām Sāi Rām"] },

  { id: "901", content: ["Punya Nām Pavitra Nām Rām Nām Sāi Rām", "Haré Krishna Haré Rām Madhura Nām Sāi Rām", "Karunā Sindhu Seetārām", "Deena Bandhu Rādhéshyām", "Haré Krishna Haré Rām Madhura Nām Sāi Rām"] },

  { id: "902", content: ["Rāghava Sundara Rāmā Raghuvarā", "Parama Pāvanā Hey Jaga Vandana", "* Patitoddhārana Bhakta Pārāyana", "Rāvana Mardana Vigna Bhanjana", "Parthipurishwara Sāi Nārāyana"] },

  { id: "903", content: ["Raghukula Bhooshana Rājiva Nayanā", "Eeshwarāmbā Nandana Sathya Sāi Rāmā", "Jānaki Vallabha Pāvana Nāmā", "Nirupama Sundara Sugunābhi Rāmā", "Prashānti Nilaya Pāvana Nāmā", "Jaya Jaya Rāmā Prabhu Sāi Rāmā"] },

  { id: "904", content: ["Raghunandana Rāghava Rām Haré", "Hey Jānaki Jeevana Rām Haré", "Hey Rājiva Lochana Rām Haré", "Raghunandana Rāghava Rām Haré", "Shri Rām Haré Sāi Rām Haré (x5)", "Hey Rājiva Lochana Rām Haré"] },

  { id: "905", content: ["Raghupaté Rāghavā Rājā Rāmā", "O Rājā Rāmā", "O Seetā Rāmā", "* Dasharatha Nandana Rājā Rāmā", "Kaushalyātmaja Sundara Rāmā", "Rām Rām Jaya Rājārāmā", "Rāghava Mohana Meghashyāmā", "Jai Jai Rām (2)", "Jai Jai Rām (3) Rām Rājā Rām", "Patita Pāvana Seetāpaté Rāmā"] },

  { id: "906", content: ["Raghupaté Shri Rāmachandrā", "Rāghavā Dayānidhé (x2)", "Mādhavā Shri Rādhikeshā", "Govindā Haré Krishnā (x2)", "Pashupaté Shri Pārvatishā", "Shankarā Sadāshivā (x2)", "Shirdipaté Puttaparthipurishā", "Sāi Nātha Haré Haré (x2)"] },

  { id: "907", content: ["Raghupati Rāghava Rājā Rām", "Patita Pāvana Seetā Rām", "Raghupati Rāghava Rājā Rām", "Patita Pāvana Seetā Rām", "Rām Rām Jaya Rājā Rām", "Rām Rām Jaya Sāi Rām", "Rām Rām Jaya Rājā Rām, Rām Rām", "Jaya Seetā Rām, Rām Rām Jaya", "Sāi Rām Bolo Rām Rām Jaya Sāi Rām"] },

  { id: "908", content: ["Raghupati Rām Jaya Jaya Rām", "Dasharatha Nandana Shri Raghurām", "* Seetā Mohana Jānaki Rām", "Pāvana Nāma Mangala Dhāma", "Jaya Jaga Vandana Prashānti Rām"] },

  { id: "909", content: ["Raghuveera Rām Haré", "Rām Rām Jaya Rām", "* Raghupati Rāghava Rām Rām Rām Jaya Rām", "Rājiva Lochana Rām Rām Rām Jaya Rām"] },

  { id: "910", content: ["Raghuveera Ranadheera Rām Rām Rām", "Rakumāyi Vitthalā Shyām Shyām Shyām", "Sukumāra Sundara Rām Rām Rām", "Shirdisha Parthisha Shyām Shyām Shyām"] },

  { id: "911", content: ["Rām Charana Sukhadāyi Bhajoré (x2)", "Rām Nām Ké Do Akshara Mé", "Sab Sukha Shānti Samāyi Ré", "Sāi Nātha Ké Charanon Mé Ākar", "Jeevan Saphal Banāo Ré – Tum"] },

  { id: "912", content: ["Rām Haré Seetā Rām", "Shyām Haré Rādhéshyām", "Seetā Vallabha Sundara Rām", "Murali Manohara Rādhéshyāmā", "Parthipurishwara Rām"] },

  { id: "913", content: ["Rām Nām Tārakam Sadā Bhajoré", "Sadā Bhajoré Sadā Japoré", "* Rām (3) Jaya Kodanda Rāmā", "Rām (3) Jaya Kalyāna Rāmā", "Rām (3) Jaya Patthābhi Rāmā"] },

  { id: "914", content: ["Rām Raghuvara Rām Seetā Rām Rām Rām", "Rām (3) Sāi Rām Rām Rām", "* Hey Patita Pāvana Rām", "Hey Shyāmala Komala Rām", "Hey Vaidehi Priya Rām", "Sāi Rām Rām Jaya Rām", "Rām (3) Sāi Rām Rām Rām"] },

  { id: "915", content: ["Rām Rām Bhajo Mana Haré Haré (x3)", "Raghupati Rājā Rām Rām", "Patita Pāvana Seetārām", "Haré Rām Haré Rām Haré Haré", "Haré Rām Sāi Rāmā Haré Haré"] },

  { id: "916", content: ["Rām Rām Jaya Raghukula Tilakā", "Rājiva Lochana Rām", "Eeshwarāmba Suta Jaya Jaga Vandana", "Ratnākara Kula Deepā (x3)"] },

  { id: "917", content: ["Rām (3) Jaya Kodanda Rāmā", "Rām (3) Jaya Kalyāna Rāmā", "Rām (3) Jaya Vaidehi Rāmā", "Rām (3) Jaya Patthābhi Rāmā", "Rām (3) Jaya Ātmābhi Rāmā", "Rām (3) Jaya Shri Sāi Rāmā"] },

  { id: "918", content: ["Rām (3) Parama Sumangala Rām Rām Rām", "Janani Jānaki Jeevana Rām", "Jai Jai Rāmā Sāi Rāmā Jayatu Jayatu Rāmā", "Parama Sumangala Rām Rām Rām"] },

  { id: "919", content: ["Rām Rām Sāi Rām", "Parthipurishā Sāi Rām", "* Madhura Manohara Sundara Rām", "Shyāmala Komala Nayanabhi Rām", "Ravikula Mandala Rājana Rām", "Parama Pāvanā Mangala Rām"] },

  { id: "920", content: ["Rām Sāi (3) Rām (x2)", "Kaushalyā Nandana Dasharatha Rām", "Jānaki Vallabha Jai Jai Rām", "Lakshman Sevita Lāvanya Rām", "Rāvana Mardana Ranadheera Rām", "Ayodhyā Vāsi Rājā Rām", "Anjana Priya Suta Ātmābhi Rām"] },

  { id: "921", content: ["Rām Sumira Mana Rām Sumira Mana", "Rām Sumira Mana Rām", "Jānaki Vallabha Dasharatha Nandana", "Rāmchandra Shri Rām (x3)", "Bhaja Mana Seetārām Rām Rām", "Bhaja Mana Seetārām", "Bhaja Mana Rādhéshyām Shyām", "Bhaja Mana Rādhéshyām", "Bhaja Mana Sāi Rām Rām", "Bhaja Mana Sāi Rām"] },

  { id: "922", content: ["Rāmā Rāghavā - Sāi", "Raghunandana Ravikula Somā", "* Rāvana Mardana Rāmābhi Rāmā", "Rameti Rāmā Raghurāmā", "Rameti Rāmā Sāi Rāmā"] },

  { id: "923", content: ["Rāmā Raghurāmā Rām Tum Ho Ātmā Rāmā", "Andar Rāmā Bāhar Rāmā", "Ghata Ghata Vāsi Rāmā", "Rāmā Raghurāmā Rām Tum Ho Ātmā Rāmā", "Ātmā Rāmā Ānanda Rāmā", "Jaya (4) Rāmā"] },

  { id: "924", content: ["Rāmam Bhajo Raghurāmam Bhajo", "Raghukula Tilakā Rāmam Bhajo", "* Dasharatha Nandana Rāmam Bhajo", "Dashamukha Mardana Rāmam Bhajo"] },

  { id: "925", content: ["Rāmā Shri Rāmachandra Jaya Jaya Rāmā", "Karunābhi Rāmā Kamaneeya Rāmā", "* Kodanda Rāmā Kalyāna Rāmā", "Sharanāgata Paripālana Shri Charanā Rāmā", "Rāmā Shri Rāmā Sāi Rāmā", "Samara Vijaya Rāmā Sāketa Rāmā"] },

  { id: "926", content: ["Rāmachandra Shri Rām", "Sāi Rāmā Jaya Rāmā", "* Dasharatha Nandana Dayābhi Rāmā", "Dashamukha Mardana Rāmā Rāmā", "Tāpasa Ranjana Tāraka Nāmā", "Ahalyoddhāraka Rāmā Rāmā"] },

  { id: "927", content: ["Rāmachandra Raghuveerā", "Rāmachandra Ranadheerā", "Rāmachandra Raghunāthā", "Rāmachandra Jagannāthā", "Rāmachandra Mama Bandho", "Rāmachandra Dayā Sindho", "Raghuveerā Ranadheerā", "Raghurāmā Parandhāmā (x2)", "Mama Bandho Dayā Sindho", "Raghuveerā Ranadheerā", "Raghunāthā Jagannāthā", "Mama Bandho Dayā Sindho"] },

  { id: "928", content: ["Sāi Rāma Haré Sāi Krishna Haré (x2)", "Raghupati Rāghava Rāma Haré", "Rājiva Lochana Rāma Haré", "Sāi Rāma Haré Sāi Krishna Haré", "Parthipurishwara Sāi Haré"] },

  { id: "929", content: ["Sāi Rāmā Hey Ghanashyāmā", "Parama Dayāgana Ātmārāmā", "* Shānta Saguna Hari Hara Paramātmā", "Bhakta Samrakshaka Dayābhi Rāmā", "Patita Pāvana Sathya Sāi Rāmā", "Charanam Sharanam Hey Sāi Rāmā"] },

  { id: "930", content: ["Sāi Rāmā Hey Parandhāmā", "Parama Niranjana Rām Parthipurishwara Rām", "Veda Vibhooshita Vibhuti Sundara", "Rupa Manohara Rām Bhuvanoddhāraka Rām", "Shri Rām Jai Rām Jai Jai Rām", "Jānaki Jeevana Seetā Rām", "Shri Rām Shri Rām Shri Rām"] },

  { id: "931", content: ["Seetā Rāmā Shri Raghu Rāmā", "Dāsharaté Hey Jaya Rāmā", "Ātmā Rāmā Aganita Guna Nāmā", "Pāvana Nāmā Parandhāmā"] },

  { id: "932", content: ["Seetā Vallabha Sundara Rāmā", "Shri Rām Jaya Rām Sathya Sāi Rāmā", "Dāsharathé Rāmā Jaya Jaya Rāmā", "Raghukula Bhushana Rājā Rāmā", "Dāsharathé Rāmā Jaya Jaya Rāmā"] },

  { id: "933", content: ["Shri Hari Nanda Mukunda Haré", "Dasharatha Nandana Rām Haré", "Geetā Prabodhana Shri Vatsalārchana", "Asura Nikhandana Rāvana Mardana", "Alaka Niranjana Rām Haré", "Rām Haré Seetā Rām Haré", "Raghupati Rāghava Rām Haré", "Dasharatha Nandana Rām Haré"] },

  { id: "934", content: ["Shri Raghunandana Dasharatha Nandana", "Asura Nikantana Sāi", "Hey Yadu Nandana Devaki Nandana", "Bhava Bhaya Bhanjana Sāi", "Shri Raghunandana Dasharatha Nandana", "Bhadrādishwara Rāmā", "Vaidehi Priya Vaikunta Rāmā", "Sadā Smarāmi Rāmeti Rāmā"] },

  { id: "935", content: ["Shri Raghunandana Dasharatha Nandana", "Bhadrādishwara Rāmā", "Vaidehi Priya Vaikunta Vāsā", "Sadā Smarāmi Rāmeti Rāmā"] },

  { id: "936", content: ["Shri Raghunandana Dasharatha Rāmā", "Raghukula Bhooshana Lāvanya Rāmā", "Hanumanta Sevita Māruti Rāmā", "Seetā Nāyaka Seetā Rāmā", "Ayodhyā Vāsi Rājā Rāmā", "Prashānti Priya Sathya Sāi Rāmā"] },

  { id: "937", content: ["Shri Raghunandana Jānaki Jeevana", "Rām (3) Sāi", "Alaka Niranjana Asura Nikantana", "Rājiva Lochana Bhava Bhaya Bhanjana", "Rām (3) Sāi"] },

  { id: "938", content: ["Shri Raghunandana Seetā Rāmā", "Rājiva Lochana Rājā Rāmā", "Rājā Rāmā", "Sāi Rāmā", "Bhava Bhaya Bhanjana Tāraka Nāmā", "Ātmā Rāmā Sāi Rāmā", "Kalimala Bhanjana Kodanda Rāmā"] },

  { id: "939", content: ["Shri Raghunandana Seetāpaté Shri Rām", "Jānaki Jeevana Rāghava Mohana", "Dasharatha Nandana Rām", "Dashamukha Mardana Rājiva Lochana", "Māruti Sevita Rām", "Jai Jai Rām Seetā Rām Jai Jai Rām (x4)"] },

  { id: "940", content: ["Shri Raghurāmā Seetā Rāmā", "Pāvana Nāmā Shri Rāmā", "Jaya Raghurāmā Jānaki Rāmā", "Antar Guna Dhāmā Shri Rāmā", "Seetā Rāmā Sundara Rāmā", "Dasharatha Nandana Rāmā", "Dāsharathé Jaya Rāmā", "Dashamukha Mardana Rāmā", "Dayā Sāgara Rāmā - Hey"] },

  { id: "941", content: ["Shri Rām Charanam (3) Bhajé", "Vaidehi Rāmā Vaikunta Rāmā", "Gopāla Choodāmani", "Ātmābhi Rāmā Prabhu Sāi Rāmā", "Shri Rāma Charanam Bhajé (x3)"] },

  { id: "942", content: ["Shri Rām Jai Rām Jaya Jaya Rām – 4"] },

  { id: "943", content: ["Shri Rām Jaya Rām Jaya Jaya Rām", "Jānaki Jeevana Rām", "Patita Pāvanā Rām Haré Jaya", "Rāghava Sundara Rām", "Deenoddharanā Rām Haré Jaya", "Māruti Sevita Rām", "Jaya Jaya Rām Jaya Raghurām", "Jānaki Jeevana Rām"] },

  { id: "944", content: ["Shri Rām Jaya Rām Shri Rām Rām Jaya Rām", "Shri Rām Rām Jaya Rām", "Dasharatha Nandana Rām Jānaki Jeevana Rām", "Patita Pāvana Rām Rām Rām", "Shri Rām Rām Jaya Rām", "Ahalyoddhāraka Rām Sabari Poojita Rām", "Hanumān Ké Romm Romm Mé", "Sadā Basata Shri Rām Rām Rām", "Shri Rām Rām Jaya Rām"] },

  { id: "945", content: ["Shri Rām Parātpara Rām", "Hey Rājiva Lochana Rām", "Hey Ananta Shayana Rām", "Hey Ātma Swarupa Rām", "Shri Rām Jaya Rām Sāi Rām", "Hey Dasharatha Nandana Rām", "Hey Dashamukha Mardana Rām", "Hey Dānava Bhanjana Rām", "Hey Dayā Sāgarā Rām", "Shri Rām Jaya Rām Sāi Rām"] },

  { id: "946", content: ["Shri Rām Raghuvara Rām", "Jaya Seetā Rām Rām", "Hey Ayodhyā Vāsi Rām", "Hey Parthipurishwara Rām", "Shri Rām (4)", "Hey Pāpa Vināshaka Rām", "Hey Patita Pāvana Rām", "Hey Deenajanāvana Rām", "Hey Parthipurishwara Rām", "Shri Rām (4)"] },

  { id: "947", content: ["Shri Rām Rām Rām", "Yadunandana Hey Ghanashyām", "Shri Rām Jaya Rām Jaya Jaya Rām (x2)", "Shri Rām Jaya Rām Jaya Sāi Rām", "Raghupati Rāghava Rājā Rām", "Patita Pāvana Seetā Rām", "Shri Rām Jaya Rām Jaya Jaya Rām (x2)", "Shri Rām Jaya Rām Jaya Sāi Rām"] },

  { id: "948", content: ["Shri Rām Rām Rāmā Raghuveerā Rām Rām", "Shri Rām Rām Rāmā Bharatāshrita Rām Rām", "Shri Rām Rām Rāmā Ranadheerā Rām Rām", "Shri Rām Rām Rāmā Sharanam Tava Rām Rām"] },

  { id: "949", content: ["Shri Rām Shri Raghurāmā", "Shri Rām Seetā Rāmā", "* Shri Rāma Meghashyāmā", "Shri Rāma Sāi Rāmā"] },

  { id: "951", content: ["Shri Rāmachandra Jaya Jagannāthā", "Seetāpaté Jaya Raghunāthā", "* Patita Pāvana Deena Nāthā", "Parthipurishā Shri Sāi Nāthā"] },

  { id: "952", content: ["Shri Rāmachandrā Jaya Rāmachandrā", "Raghuveera Ranadheera Raghukula Rāmā", "* Dasharatha Nandana Dayābhi Rāmā", "Dānava Bhanjana Kodanda Rāmā", "Kalyāna Rāmā Kamaneeya Rāmā", "Raghuveera Ranadheera Raghukula Rāmā"] },

  { id: "950", content: ["Shri Sāi Rāmā Haré (2)", "Shri Rāmachandrā Prabhu Rāmachandrā", "Sāi Rāmachandra Haré", "Shri Rāmachandra Haré (x2)"] },

  { id: "953", content: ["Sundara Rām Nayanabhi Rām", "Deena Bandhu Sāi Rām", "Jai Jai Rām (2) Sāi Rām", "Dānava Bhanjana Dayāmayā", "Dayāmayā Kripāmayā", "Alaka Niranjana Asura Nikantana", "Deena Bandhu Sāi Rām", "Jai Jai Rām (2) Sāi Rām"] },

  { id: "954", content: ["Vaidehi Nāyaka Rām Vishwa Vidāyaka Rām", "Vibhishana Vandita Jaya Jaya Rām", "Rām Rām Jaya Sāi Rām", "Vibhuti Sundara Jaya Sāi Rām", "Rām Rām Jaya Rām", "Vishwa Vidāyaka Rām"] },

  { id: "955", content: ["Yuga Avatārā Sāi Rāmā", "Rām Rām Rām", "Rām (3) Seetāpaté Shri Rām (x2)", "* Parama Niranjana Prashānti Rāmā", "Shri Raghurāmā Sāi Rāmā", "Rām Rām Rām"] },

  { id: "1000", content: ["Āmar Krishna Gopāl Ré Āmar", "Shyāma Gopāl Ré", "Krishna Gopāl Shyām Gopāl Brahma Gopāl Ré", "Krishna Gopāl Shyām Gopāl", "Brahma Gopāl Ātmā Gopāl", "Krishna Gopāl (4)"] },

  { id: "1001", content: ["Ānanda Rām Ānanda Shyām", "Nārāyanā Sāi Nārāyanā", "Nārāyanā Sāi Nārāyanā", "Prema Swarupā Brahmānandā", "Satchidānanda Hari Nārāyanā", "Nārāyanā Hari Nārāyanā (x2)", "Nārāyanā Sāi Nārāyanā"] },

  { id: "1002", content: ["Antaryāmi Sāi", "Poorna Brahma Avatāri", "Hey Giridhāri Hridaya Vihāri", "Krishnā Kunja Vihāri", "Gopālā Leelādhāri", "Hey Gopi Mana Sanchāri", "Madhusudanā Murāri", "Hey Giridhāri Hridaya Vihāri", "Krishnā Kunja Vihāri"] },

  { id: "1003", content: ["Āo (2) Nandalālā", "Sundara Shyāma Gopālā", "* Tum Hi Ho Bansidhāri Shyāmā", "Ayodhyā Pati Seetā Rāmā", "Parthi Bābā Karunā Nidhān", "Mākhan Chorā Yashoda Bālā"] },

  { id: "1004", content: ["Āo Gopālā Giridhāri", "Āo Āo Antaryāmi", "Āo Āo Ānanda Sāi", "* Āo Āo Ātma Nivāsi", "Āo Āo Shānti Nivāsi"] },

  { id: "1005", content: ["Ātmā Rāmā Ānanda Ramanā", "Achyuta Keshava Hari Nārāyana", "* Bhava Bhaya Haranā Vandita Charanā", "Raghukula Bhooshana Rājiva Nayanā", "Ādi Nārāyana Ananta Shayanā", "Satchidānandā Sāi Nārāyana"] },

  { id: "1006", content: ["Bansidharā Kanhaiyā Ghanashyāma Sundarā", "Giridhāri Gopa Bālā Brindāvana Vihārā", "* Govinda Mādhavā Haré", "Madhusudana Mukundā", "Rādhé Govinda Rādhé Gopāl", "Rādhé Govinda Rādhé"] },

  { id: "1007", content: ["Barā Chittachorā Brindāvana Sanchārā", "Gopālā Gopālā Hey Murali Gopālā", "Govardhanodhāra Gopāl Bālā", "Gopi Manohara Rādhé Gopālā"] },

  { id: "1008", content: ["Barā Chittachora Mana Mohana", "Meerā Chittachora Mana Mohana", "Ayodhyā Ké Seetārām", "Brindāvana Ké Rādhéshyāma", "Shirdi Ké Sāi Bābā", "Parthi Ké Sathya Bābā"] },

  { id: "1009", content: ["Bāla Sāi Parthi Sāi Nandana Kishorā", "Devaki Priya Gopāla Barā Chittachorā", "Barā Chittachorā", "Navanita Chorā", "Devaki Priya Gopāla Barā Chittachorā"] },

  { id: "1010", content: ["Bhagavān Krishna Namo (2)", "Patita Pāvana Patita Pālana", "Rāmachandra Namo – Seetā", "* Kālāteetāya Shirdi Rupāya Sathya Sāi Namo", "Antaryāmi Namo Sarvāntaryāmi Namo"] },

  { id: "1011", content: ["Bhaja Gopālā Bhaja Gopālā", "Pyāré Murāri Meré Sāi Nandalālā", "Nandalālā (3) Hey Nandalālā", "Bāla Gopālā Sāi Gopālā", "Murali Manohara Sāi Nandalālā", "Nandalālā (3) Hey Nandalālā"] },

  { id: "1012", content: ["Bhaja Mana Rādhé Govindā", "Bhaja Mana, Rādhé (5) Govindā", "Bhaja Mana, Rādhé (9) Govindā", "Bhaja Mana Sāi Govindā", "Bhaja Mana, Sāi (5) Govindā", "Bhaja Mana, Sāi (9) Govindā"] },

  { id: "1013", content: ["Bhaja Mana Rādhé Shyāma Gopālā", "Murali Manohara Rādhe Gopālā", "* Nanda Kishorā Natavara Lālā", "Parthi Vihārā Sāi Gopālā"] },

  { id: "1014", content: ["Bhaja Mana Shyāma Sundara Giridhāri", "Mora Mukuta Peetāmbaradhāri", "* Meerā Ké Prabhu Giridhara Nāgara", "Giridhara Nāgara Giridhara Nāgara", "Murali Manohara Shyāma Murāri"] },

  { id: "1015", content: ["Bhajan Karo Manwā Govinda Haré", "Govinda Murāri Gopāla Murāri", "* Mathurā Nāthā Hey Giridhāri", "Rādhā Mādhava Hey Giridhāri (2)"] },

  { id: "1016", content: ["Bhajo Ghanashyāma Bhajo Murali Gopāla Bhajo", "Nanda Ké Lāl Bhajo Rādhé", "Giridhara Gopāl Mathurā Nāthā", "Kamala Nayana Hey Kaivalya Dhāmā", "Nanda Ké Lāl Bhajo Rādhé"] },

  { id: "1017", content: ["Bhajo Rādhé Govinda Bhajo Shyām Gopāla", "Shyāma Gopāla Bhajo Murali Gopāla", "* Keshava Narahari Shyāma Gopāla", "Mādhava Murahara Murali Gopāla"] },

  { id: "1018", content: ["Bhajoré Bhajo Sāi Haré Rām", "Govinda Gopāla Sāi Haré Rām", "Mādhava Mohana Sāi Haré Rām", "* Shri Madhusudana Bhava Bhaya Bhanjana", "Hari Prema Ānanda Se Bolo Rām Haré Rām", "Govinda Gopāla Sāi Haré Rām", "Mādhava Mohana Sāi Haré Rām"] },

  { id: "1019", content: ["Bhajoré Sadā Bhajo Rām Krishna Govindā", "Bhajo Haré Deena Bandhu", "Krishna Rāmā Govindā", "Bhajoré Anātha Nāthā Sāi Rāmā Govindā", "Bhajo Haré Deena Bandhu", "Krishna Rāmā Govindā"] },

  { id: "1020", content: ["Bhava Bhaya Haranā Vandita Charanā", "Jaya Rādhā Jaya Mādhavā Shauri", "Mangala Charanā Kalimala Dahanā", "Nārāyanā Keshavā", "Jaya Rādhā Jaya Mādhavā Shauri"] },

  { id: "1021", content: ["Chandra Vadanā Kamala Nayanā", "Nārāyanā Sāi Nārāyanā", "Ananta Shayanā Deena Sharanyā", "Nārāyanā Sāi Nārāyanā"] },

  { id: "1022", content: ["Chittachora Muraliwālā", "Nandalāl Nanda Gopālā", "Nandalālā Nandalālā", "Brindāvana Shyāma Gopālā", "Yadunandana Gokula Bālā", "Mana Mohana Madana Gopālā", "Nandalālā Nandalālā", "Nandalāl Nanda Gopālā", "Nandalālā Nandalālā"] },

  { id: "1023", content: ["Chittachorā Yashodā Ké Bāla", "Navanita Chora Gopāl", "Gopāl Gopāl Gopāl, Govardhana Dhara Gopāl", "Gopāl Gopāl Gopāl Gopāl,", "Govardhana Dhara Gopāl"] },

  { id: "1024", content: ["Darsha Dikhāo Meré Sāi Nandalālā", "Dayā Karo Mujhé Krishna Gopālā", "* Devaki Nandana Deena Dayālā", "Mathurā Nāthā Madana Gopālā", "Sāi Nārāyana Sadā Kripālā", "Dayā Karo Mujhé Krishna Gopālā"] },

  { id: "1025", content: ["Dayā Karo Hari Nārāyanā", "Karunā Sāgara Nārāyanā", "Pankaja Nayanā Pannaga Shayanā", "Shri Vāsudevā Nārāyanā", "Pāpa Vināshā Prashānti Vāsā", "Parthipuri Sāi Nārāyanā", "Paramānanda Nārāyanā"] },

  { id: "1026", content: ["Deena Dayālā Sāi Parama Dayālā", "Rādhā Ramana Hari Govinda Gopālā", "Madhura Manohara Krishna Gopālā", "Rādhā Ramana Hari Govinda Gopālā", "Meerā Ké Prabhu Giridhara Bālā", "Brindāvana Ghana Madana Gopālā"] },

  { id: "1027", content: ["Devaki Tanayā Dayānidhé (x2)", "Dayānidhé Kripānidhé (x2)", "* Darshana Dedo Deva Devā (x2)", "Deena Nāthā Sāi Nāthā"] },

  { id: "1028", content: ["Garuda Vāhana Nārāyanā", "Hey Shesha Shayanā Nārāyanā", "* Shri Lakshmi Ramanā Nārāyanā", "Hari Om (2) Nārāyanā"] },

  { id: "1029", content: ["Ghana Ghana Neela Vadana Ati Sundara", "Meghashyāmala Mādhava Murahara", "* Mandasmita Mukha Rādhā Manohara", "Govinda Gopāla Natavara Giridhara", "Meghashyāmala Mādhava Murahara"] },

  { id: "1030", content: ["Ghanashyāmā Gopālā Ghanashyāmā Gopālā", "Mana Mohanā Jagan Mohanā", "Yadu Nandanā Gopāl", "Gopāla Gopāla Shyāma Gopāla", "Gopāla Gopāla Sāi Gopāla"] },

  { id: "1031", content: ["Ghanashyāmā Sundarā", "Bansidhara Prabhu Krishna Kanhaiyā", "Tu Hi Meré Mā Bāp Bhaiyā", "Devaki Tanayā Hey Nandalālā", "Deena Bāndhavā Dwāraka Nāthā", "Rādhā Hridaya Nivāsā Haré Krishnā", "Madhusudanā Muralidharā", "Parthishwarā Sathya Sāishwarā"] },

  { id: "1032", content: ["Giridhara Bālā Hey Nandalālā", "Devaki Nandana Shyāma Gopālā", "* Keshava Mādhava Shyāma Gopālā", "Shyāma Gopālā Shyāma Gopālā", "Bansidhara Hey Sāi Gopālā (x2)"] },

  { id: "1033", content: ["Giridhara Gopālā Gopālā", "Sāi Gopālā (2)", "* Shirdipurishwara Sāi Shankara", "Parthipurishwara Sāi Shankara", "Sāi Shankara (2)"] },

  { id: "1034", content: ["Giridhara Gopālā Hey (2) Giridhara Gopālā", "Meerā Ké Prabhu Giridhara Nāgara", "Suradāsa Ké Shyāma Manohara", "Bhakton Ké Sathya Sāi Manohara"] },

  { id: "1035", content: ["Giridhara Gopāla Muralidharā Haré", "Govinda Gopāla Dāmodarā", "Giridhara Gopāla Muralidharā Haré", "Govinda Gopāla Dāmodarā"] },

  { id: "1036", content: ["Giridhara Gopālā Sāi Giridhara Gopālā", "Parthipurishwara Shyām Gopālā", "* Meerā Ké Prabhu Giridhara Nāgara", "Pāhimām Ghanashyāma O Shyāmā (x2)"] },

  { id: "1037", content: ["Giridhara Govinda Gopāla", "Ghanashyāma Nandalālā", "Mana Mohanā Madhusudanā Hey Mādhavā", "* Dāmodarā Janārdanā", "Muralidharā Mana Mohanā", "Namo Sāi Nārāyanāya Namo Satya Nārāyanāya", "Namo Satya Nārāyanāya (Sāi)"] },

  { id: "1038", content: ["Giridhara Meré Gopālā", "Rādhé Gopālā Rādhé Gopālā", "* Nanda Kishorā Mākhana Chorā", "Yashoda Bālā Gopālā", "Rādhé Gopālā Rādhé Gopālā"] },

  { id: "1039", content: ["Giridhara Meré Shyāma Gopāla", "Shyāma Gopāl Sāi Gopāl", "* Govinda Govinda Gopi Gopāl", "Govardhanoddhāri Gokula Gopāl", "Shyāma Gopāl Sāi Gopāl", "* Mukunda Murahara Mohana Gopāl", "Murali Manohara Mādhava Gopāl", "Shyāma Gopāl Sāi Gopāl"] },

  { id: "1040", content: ["Giridhāri Hey Nandalālā", "Yashodā Ké Bālā Tribhuvana Pālā", "Jagadoddhārā Gokula Bālā", "Murali Lolā Munijana Pālā", "Parthi Vihārā Sāi Gopālā"] },

  { id: "1041", content: ["Giridhāri Lāl Shyām Gopāl", "Natavara Lāl Madana Gopāl", "Mathurā Nātha Krishna Gopāl", "Shri Madhusudana Sāi Gopāl", "Yashodā Ke Bāl Nanda Gopāl", "Eeshwarāmba Priya Sāi Gopāl"] },

  { id: "1042", content: ["Gokula Nandana Gopāla Krishnā", "Govardhana Dhara Gopi Krishnā", "* Kamala Nayana Kamaneeya Krishnā", "Karunāmaya Shri Sathya Sāi Krishnā"] },

  { id: "1043", content: ["Gopāl Rādhé Krishna Govinda Govinda Gopāl", "Gopāl Gopāl Gopāl", "Govinda Govinda Gopāl Rādhé Krishnā", "Govinda (2) Gopāl Sāi Krishnā", "Govinda Govinda Gopāl – Sāi"] },

  { id: "1044", content: ["Gopālā Gopālā", "Giridhara Bālā Gopālā", "Gopālā Gopālā", "Goparipālā Gopālā"] },

  { id: "1045", content: ["Gopālā Giridhara Bālā", "Gopi Lolā Gokula Bālā", "Goparipālā Nārāyanā (x2)", "Nārāyanā Nārāyanā", "Goparipālā Nārāyanā", "Govinda Govinda Nārāyanā"] },

  { id: "1046", content: ["Gopālā Rādhā Lolā", "Murali Lolā Nandalālā", "* Keshava Mādhava Janārdanā", "Vanamālā Brindāvana Bālā", "Murali Lolā Nandalālā"] },

  { id: "1047", content: ["Gopi Vallabha Shyāma Gopālā", "Shridharā Mādhavā Dāmodarā", "* Nanda Kishorā Navanita Chorā", "Smita Smita Sundara Sāi Gopālā", "Gokula Bālā Goparipālā", "Parthipurishwara Sāi Nandalālā"] },

  { id: "1048", content: ["Govindā Gopālā Nārāyana Hari", "Nārāyana Hari Nārāyana Hari (x2)", "* Jagadoddhārā Nārāyana Hari", "Bhakta Uddhārā Nārāyana Hari", "Parthipurishā Nārāyana Hari", "Nārāyana Hari Nārāyana Hari (x2)"] },

  { id: "1049", content: ["Govindā Gopāla Prabhu Giridhāri", "Govindā Gopāla Hridaya Vihāri", "* Nanda Kishorā Navanita Chorā", "Parthi Vihārā Barā Chittachorā", "Hridaya Vihārā Barā Chittachorā"] },

  { id: "1050", content: ["Govindā (2) Bhaja Man Rādhé Govindā", "Rādhā Lolā Govindā Rāsa Vilolā Govindā", "* Krishna Keshavā Haré Mādhavā", "Govindā Jaya Govindā", "Haré Murāré Sāi Murāré Govindā Jaya Govindā"] },

  { id: "1051", content: ["Govinda Govinda Gāyiyé", "Bhajo Rādhé Gopāla Krishna Gāyiyé", "Murali Manohara Gāyiyé,", "Bhajo Nanda Ké Lāla Prabhu Gāyiyé", "Giridhāri Giridhāri Gāyiyé,", "Māyi Meerā Ké Nātha Prabhu Gāyiyé (x2)"] },

  { id: "1052", content: ["Govinda Govinda Govindā (x3)", "Venkata Ramanā Govindā", "Sankata Haranā Govindā", "Lakshmi Ramanā Govindā", "Bhaktoddharanā Govindā"] },

  { id: "1053", content: ["Govinda Govinda Govinda Bolo", "Shyām Sundara Venu Gopāl Bolo", "* Pārtha Sārathi Keshava Bolo", "Sanātana Sārathi Parthisha Bolo"] },

  { id: "1054", content: ["Govinda Haré Gopāla Haré", "Muralidhara Hey Ghanashyāma Haré", "* Meerā Ké Prabho Giridhara Nāgara – 4", "Charana Kamala Balihāri Ré"] },

  { id: "1055", content: ["Govinda Haré Gopāla Haré Hey Gopi Gopa Bālā", "Govinda Haré Gopāla Haré", "Hey Murali Gāna Lolā", "Govinda Haré Gopāla Haré", "Hey Rādhā Hridaya Lolā", "Govinda Haré Gopāla Haré", "Hey Nanda Gopa Bālā"] },

  { id: "1056", content: ["Govinda Jai Jai Gopāl Jai Jai", "Rādhā Rāmana Hari Govinda Jai Jai", "Mukunda Mādhava Govinda Bol", "Keshava Mādhava Hari Hari Bol", "Rām Rām Bol (2)", "Krishna Krishna Bol (2)", "Keshava Mādhava Hari Hari Bol"] },

  { id: "1057", content: ["Govindā Jaya Govindā", "Gokula Nandana Govindā", "Ghana Ghana Neelā Govindā", "Bāla Mukundā Govindā – (Sāi)", "Hey Ghanashyāmā Govindā", "Gokula Nandana Govindā"] },

  { id: "1058", content: ["Govinda Krishna Jai Gopāla Krishna Jai", "Gopāla Bāla Bāla Rādhā Krishna Jai", "Krishna Jai (3) Krishna (4) Jai", "Gopikā Man Vihāri Pyāri", "Māyi Meerā Man Vihāri", "Madana Mohana Murali Dhāri", "Krishna Jai", "Krishna Jai (Bāla) Krishna Jai (Rādhā)", "Krishna Jai, Krishna (4) Jai"] },

  { id: "1059", content: ["Govinda Krishna Jai Gopāla Krishna Jai", "Govinda Govinda Govindā Gopāla Jai", "Krishnā (2) Rādhā Krishnā", "Govinda Krishnā Gopāla Krishnā", "* Keshavā Mādhavā Sāi Nārāyanā,", "Govinda (2) Nārāyanā", "Nandalālā Brijabālā", "Hey Sāi Nārāyanā Krishnā Krishnā"] },

  { id: "1060", content: ["Govinda Krishnā Jai Jai Gopāla Krishnā (x2)", "Govinda Govinda Krishnā Gopāla Krishnā", "Govinda Krishnā Jai Jai Gopāla Krishnā", "Govinda Govinda Krishnā Gopāla Krishnā", "Gopāla Gopāla Krishnā Govinda Krishnā"] },

  { id: "1061", content: ["Govinda Mādhavā Gopālā Keshavā", "Jaya Nanda Mukundā Nanda Govindā", "Rādhé Gopālā", "* Giridhāri (2) Jaya Rādhé Gopālā", "Ghanashyāma Shyāma Shyāma", "Jaya Jaya Rādhé Gopālā", "Jaya Nanda Mukundā Nanda Govindā", "Radhé Gopālā"] },

  { id: "1062", content: ["Govinda Mādhavā Gopāla Keshavā (x3)", "* Krishnā Krishnā Sāi Krishnā (Parthi)", "Krishnā Krishnā Gopālā", "Gokula Bālā Goparipālā", "Manamohanā Madhusudanā", "Jaya Mādhavā Jaya Keshavā"] },

  { id: "1063", content: ["Govinda Murāri Mādhavā", "Govinda Gopāla Keshavā", "* Janārdanā Sāi Parthi Vihāri", "Govardhanodhāri Mādhavā", "Mādhavā Keshavā Hari Nārāyanā"] },

  { id: "1064", content: ["Govinda Nāma Bhajo Gopāl Nām Bhajo", "Rādheshyāma Nāma Bhajo", "Rāmachandra Nāma Bhajo", "* Seetārām Nāma Bhajo Shrinivāsa Nāma Bhajo", "Shirdi Sāi Nām Bhajo Sathya Sāi Nāma Bhajo"] },

  { id: "1065", content: ["Govinda Nārāyanā Gopāl Nārāyanā", "Govinda Govinda Nārāyanā", "Govinda Gopāla Nārāyanā", "Govinda Govinda Nārāyanā", "Sāi Govinda Gopāla Nārāyanā"] },

  { id: "1066", content: ["Govinda Rādhé Krishna Govinda Govindā", "Gopāl Rādhé Krishnā Govinda Govindā", "Mohana Bāla Krishnā Govinda Govindā", "Parthi Nivāsā Krishnā Govinda Govindā"] },

  { id: "1067", content: ["Govinda Rāmā Jai Jai Gopāla Rāmā", "Mādhava Rāmā Jai Jai Keshava Rāmā", "* Sulabha Rāmā Jaya Dulabha Rāmā", "Ek Tu Rāmā Jai Jai Aneka Tu Rāmā"] },

  { id: "1068", content: ["Govinda Sāi Krishna Govinda Govinda", "Gopāl Rādhé Krishna Govinda Govinda", "Mohana Bāla Krishna Govinda Govinda", "Parthi Nivāsā Krishna Govinda Govinda"] },

  { id: "1069", content: ["Guruvāyurapura Shri Hari Krishnā", "Nārāyana Gopāl", "Mukunda Mādhava Muralidhāri Nārāyana Gopāl", "Nārāyana Gopāl Sāi Nārāyana Gopāl – 3", "Govardhana Giridhāri Murāri Nārāyana Gopāl", "Mukunda Mādhava Muralidhāri Nārāyana Gopāl"] },

  { id: "1070", content: ["Haré Krishnā Haré Krishnā", "Krishnā Krishnā Haré Haré", "Haré Rāmā Haré Rāmā Rāma Rāmā Haré Haré", "Haré Krishnā Haré Krishnā", "Krishnā Krishnā Haré Haré", "Haré Rāmā Haré Rāmā Rāmā Rāmā Haré Haré"] },

  { id: "1071", content: ["Haré Krishna Haré Rām Sāi Rām Sāi Rām", "Gopāla Govinda Bolo Jai Sāi Rām", "Mādhava Mukunda Bolo Jai Sāi Rām", "Hey Parameshwara Parthipurishwara", "Dayā Karo Hey Sāi Rām", "Jai Jai Rām Sāi Rām Jai Jai Rām", "Jai Jai Rām Sāi Rām Jai Jai Rām Bolo", "Jai Jai Rām Sāi Rām Jai Jai Rām"] },

  { id: "1072", content: ["Haré Murali Manohara Shyāmā", "Haré Gopi Manohara Shyāmā", "* Haré Devaki Nandana Shyāmā", "Haré Vāsuki Shayana Shyāmā"] },

  { id: "1073", content: ["Hari Ānandamaya Jaya Nārāyanā", "Vasudeva Nandana Rādhā Jeevana", "Paramānandā Mādhavā (x2)"] },

  { id: "1074", content: ["Hari Bolo Haré Rām Nām", "Hari Bolo Haré Krishna Nām", "Hari Bolo Sathya Sāi Rām", "Hari Bolo Haré Rām Nām"] },

  { id: "1075", content: ["Hari (6) Bolo", "Hari Hari Ké Guna Gāo", "Govinda (3) Bolo", "Govinda Ké Guna Gāo", "Sāi Rāma Bolo Sāi Shyāma Bolo", "Sāi Rāma Guna Gāo", "Govinda (3) Bolo", "Govinda Ké Guna Gāo"] },

  { id: "1076", content: ["Hari Hari Nārāyanā", "Hari Govinda Nārāyanā", "Hari Gopāla Nārāyanā", "Shri Hari Nārāyanā", "Hrishikeshā Nārāyanā", "Parthishā Nārāyanā"] },

  { id: "1077", content: ["Hari Hari Om Shiva Shankara Hari Om", "Nārāyana Hari Om (x2)", "Keshava Hey Shiva Mādhava Hey", "Nārāyana Hari Om (x2)", "Paramātmā Antaryāmi", "Nārāyana Hari Om – Sāi (x3)"] },

  { id: "1078", content: ["Hari Nāma Gāté Chalo Sāi Nāma Gāté Chalo", "Mādhava Govinda Govinda", "Mādhava Nāma Gāté Chalo", "* Govinda Vitthalā Gopāla Vitthalā", "Jaya Parthi Vitthalā Jaya Sāi Vitthalā (x2)", "Mādhava Govinda Govinda", "Mādhava Nāma Gāté Chalo"] },

  { id: "1079", content: ["Hari Nārāyanā (3) Bhajoré", "Hari Nārāyanā Satya Nārāyanā", "Sāi Nārāyanā Bhajoré", "Shyāma Sundarā Madana Gopālā", "Satchidānandā Shyāma Gopāla", "Gopi Gopālanā (3) Bhajoré", "Hari Nārāyanā Satya Nārāyanā", "Sāi Nārāyanā Bhajoré"] },

  { id: "1080", content: ["Hari Nārāyana Govindā Sāi Nārāyana Govindā", "Murali Mādhava Govindā", "Govardhanadhara Govindā"] },

  { id: "1081", content: ["Hey Giridhāri Hey Nandalāl", "Yashoda Nandā Hey Nandalāl", "* Rādhā Pyāré Hey Nandalāl", "Nandalāl Nandalāl"] },

  { id: "1082", content: ["Hey Govinda Hey Ananta Nanda Gopālā", "Mohana Muralidharā Shyāma Gopālā", "* Sundara Giridhāri Hari Natavara Lālā", "Mādhavā Keshavā Madana Gopālā", "Keshavā Mādhavā Madana Gopālā"] },

  { id: "1083", content: ["Hey Kamala Vadana Sāi Rangā", "Kaivalya Pāndurangā (x2)", "Sāi Gopālā Ghana Ghana Neelā", "Kutila Kuntalā Tribhuvana Pālā", "Brahmā Vishnu Maheshwara Rupā (x2)", "Mayā Lolā Brahma Swarupā"] },

  { id: "1084", content: ["Hey Mādhavā Hey Madhusudanā", "Dāmodarā Hey Muralidharā", "* Mana Mohanā Hey Yadunandanā", "Deenāvanā Bhava Bhaya Bhanjanā"] },

  { id: "1085", content: ["Hey Mādhavā Hey Yadunandanā", "Mana Mohanā Hey Madhusudanā", "Janārdanā Rādhā Jeevanā", "Gopālanā Gopi Ranjanā"] },

  { id: "1086", content: ["Hey Murali Mādhavā Rādhé Krishna Jai Gopāl", "Keshava Mādhava Yādhava Nandana", "Rādhé Krishna Jai Gopāl", "Nanda Nandana Rādhéshyām", "Indu Vadana Meghashyām", "Keshava Mādhava …", "Pānduranga Rādhéshyām", "Pandari Nātha Rādhéshyām", "Keshava Mādhava …"] },

  { id: "1087", content: ["Hey Nanda Nanda Gopāla", "Ānanda Nanda Gopāla (x2)", "Hey Nanda Nanda Ānanda Nanda", "Yadunanda Nanda Gopāla"] },

  { id: "1088", content: ["Hey Nandalāl Gopālā", "Shyāma Gopāl Sāi Gopāl", "* Giridhara Gopālā Rādhé Gopālā", "Shyāma Gopāl Sāi Gopāl"] },

  { id: "1089", content: ["Hey Nandalālā Hey Brajabālā", "Mākhana Chorā Yashodā Ké Bālā", "Brindāvana Ké Gokula Bālā", "Daya Karo Hey Sāi Nandalālā", "Mākhana Chorā Yashodā Ké Bālā"] },

  { id: "1090", content: ["Hey Shesha Shayanā Nārāyanā", "Vedā Bharanā Nārāyanā", "Bhava Bhaya Haranā Nārāyanā", "Pāvana Charanā Nārāyanā", "Nārāyanā Hari Nārāyanā (x3)"] },

  { id: "1091", content: ["Hey Shyāma Sundarā Hey Sāi Sundarā", "Parthipurishwarā Hey Sāi Sundarā", "* Neela Megha Sundarā Neeraja Lochanā", "Brahmānda Nāyakā Hey Sāi Sundarā"] },

  { id: "1092", content: ["Hey Vrajabāla Yadunanda Gopāla", "Shyāma Sundara Mohana Gopāla", "* Yashodā Ké Bāla Yadunanda Gopāla", "Gopāla Gopāla Gokula Bāla"] },

  { id: "1093", content: ["Hridaya Vihāri Sāi Murāri", "Parthi Vihāri Jaya Sāi Rām", "Ananta Shayanā Ādi Nārāyana", "Brindāvana Ghanashyāma Murāri", "Govinda Gopāla Ghanashyāma Ramani"] },

  { id: "1094", content: ["Hridayāntaranga Sāi Nandanavana Vihāri", "Hridayāntaranga Sāi Parthipuri Vihāri", "Jaya Raghunandana Jaya Jaya Rām", "Jaya Yadu Nandana Jaya Ghanashyāma"] },

  { id: "1095", content: ["Jagat Pālanā Jagan Mohanā", "Sundara Sāi Gopālanā", "Munijana Sevita Madhusudanā", "* Keshavā Govinda Janārdanā", "Shridharā Mādhavā Dāmodarā", "Atchyutā Ānantā Nārāyanā", "Shri Sāi Krishnā Nārāyanā (x2)", "Munijana Sevita Madhusudanā"] },

  { id: "1096", content: ["Jagatpaté Hari Sāi Gopālā", "Jagata Uddhārā Sāi Nandalālā", "Mathurādipaté Krishna Gopālā", "Madhura Madhura Hey Gāna Vilolā", "Jagata Uddhārā Sāi Nandalālā"] },

  { id: "1097", content: ["Jai Hari Krishnā (2) Govardhana Giridhāri", "Rādhā Mohana Rādhā Jeevana", "Manjula Kunja Vihāri"] },

  { id: "1098", content: ["Jai Jai Gopālā", "Sai Gopālā Rādhé Gopālā", "* Hey Nandalālā Gopi Lolā Gokula Bālā", "Brindāvana Sanchārā", "Sai Gopālā Rādhé Gopālā"] },

  { id: "1099", content: ["Jai (3) Mana Mohanā, Jai (3) Madhusudanā", "Mādhavā Keshavā", "Keshāvā Mādhavā", "Gopālā Gopālanā"] },

  { id: "1100", content: ["Janārdanā Nandalālā Govindā Gopālā", "Hare Krishnā (2)", "Krishnā Krishnā Gopālā", "Sāi Krishnā Gopālā"] },

  { id: "1101", content: ["Jaya Govindā Jaya Hari Om", "Mukhāravinda Murahari Om", "* Nanda Mukundā Murahari Om", "Satchidānanda Sāi Hari Om", "Mukhāravinda Murahari Om"] },

  { id: "1102", content: ["Jaya Hari Govinda Nārāyanā", "Jaya Hari Gopāla Nārāyanā ---(x3)", "Nārāyanā Sāi Nārāyanā (x4)"] },

  { id: "1103", content: ["Jaya Jaya Jaya Hey Madhusudanā", "Jaya Brindāvana Mana Mohanā", "* Sundara Sāi Shirdi Vihāri", "Sundara Sāi Parthi Vihāri", "Rādhéshyām (4)", "Sāi Rām (4)", "Rādhéshyām (4)"] },

  { id: "1104", content: ["Jaya Jaya Krishnā Yadu Nandanā", "Jaya Jaya Brindāvana Chandanā", "* Jaya Jaya Krishnā Mana Mohanā", "Jaya Jaya Sāi Gopālanā (x2)"] },

  { id: "1105", content: ["Jaya Jaya Prabhu Giridhāri Natavara Nandalālā", "Natavara Nandalālā Hey Giridhara Gopālā", "Hey Giridhara Gopālā (3)", "Jaya Mādhava Murahara Murali Manohara", "Giridhara Gopalā", "Hey Giridhara Gopālā (3)"] },

  { id: "1106", content: ["Jaya Krishnā Kunja Vihāri", "Jaya Rādhā Hridaya Vihāri", "Jaya Yamunā Teera Vihāri", "Jaya Gopi Ké Hridaya Vihāri", "Jaya Mādhava Rāsa Vihāri", "Jaya Sāi Parthi Vihāri"] },

  { id: "1107", content: ["Jaya Krishnā Madhusudanā", "Rādhā Krishnā Mana Mohanā", "Brindāvana Sanchāri Govardhana Giridhāri", "Parthi Vihāri Sāi Nārāyanā", "Nārāyanā Sāi Nārāyanā"] },

  { id: "1108", content: ["Jaya Krishnā Mukunda Murāri", "Jaya Ānanda Brindā Vihāri (x2)", "* Ānanda Chandā Rādhé Govindā", "Rādhé Govindā Shyāma Mukundā", "Bāla Gopālā Shyāma Gopālā", "Parthi Vihārā Sāi Nandalālā"] },

  { id: "1109", content: ["Jaya Murali Mādhavā Shauri", "Jaya Murali Mādhavā", "Madana Manohara Madhusudana Hari", "Brindāvana Ghanashyāma Murāri", "Hey Mana Mohana Kunja Vihāri", "Mādhava Mohana Gāna Priyā Sāi"] },

  { id: "1110", content: ["Jaya Nandalālā Jai Jai Gopālā", "Rāsa Vilolā Rādhe Gopālā", "* Murali Lolā Munijana Pālā", "Gopi Lolā Gopāla Bālā"] },

  { id: "1111", content: ["Jaya Nārāyana Jaya Hari Om", "Sāi Nārāyana Jaya Hari Om", "Hari Om (4)", "Paramātmā Shiva Hari Om", "Parabrahmā Sāi Hari Om", "Hari Om (2) Jaya Hari Om"] },

  { id: "1112", content: ["Jaya Sāi Nārāyanā Keshavā", "Jaya Sāi Nārāyanā Mādhavā", "* Jaya Sāi Nārāyanā Yādhavā", "Jaya Sāi Nārāyanā Rāghavā", "Jaya Sāi Nārāyanā Bāndhavā"] },

  { id: "1113", content: ["Jaya Sāishā (2)", "Rādhā Mādhava Jaya Parthishā", "* Hridaya Sārathi Sāi Kanhaiyā", "Rādhé Govindā Prashānti Nilaya"] },

  { id: "1114", content: ["Jhuma (4) Bājé Ghunghariyā", "Sānvari Surata Nāché Kanhaiyā", "* Mora Mukuta Peetāmbara Khatiyā", "Madhura (2) Bājé Murali Adhariyā", "Sānvari Surata Nāché Kanhaiyā"] },

  { id: "1115", content: ["Kalyāna Krishnā Kamaneeya Krishnā", "Kālinga Mardana Shri Krishnā", "Govardhana Giridhāri Murāri", "Brindāvana Sanchāri", "Brindāvana Ki Tulasi Mālā", "Peetāmbaradhāri Murāri"] },

  { id: "1116", content: ["Kamala Nayana Prabhu Kamalāpate", "Kamalāsana Prabhu Kamalā Kāntā", "Kamala Nābha Prabhu Kamalā Ramanā", "Kamaleshwara Prabhu Kamalā Nāthā"] },

  { id: "1117", content: ["Kānhā Kanhaiyā Bansi Adhariyā", "Brindāvana Ghana Rāsa Rachaiyā", "Gokula Nandana Hey Chitta Mohana", "Rādha Manohara Shyāmā", "Mānasa Chorā Nanda Kishorā", "Parthi Vihārā Sāi Gopālā Sāi Gopālā"] },

  { id: "1118", content: ["Kānhā Kanhaiyā Nandalālā O Muraliwālā", "Aisé Bajāyé Murali Muraliyā Jādoo Bhari", "Hari Hari Govindā Hari Hari Mādhavā", "* Jaya (2) Seetārām, Jaya (2) Rādhéshyām", "* Hari (2) Nārāyanā, Hari (2) Nārāyanā"] },

  { id: "1119", content: ["Kanhaiyā Teri Bansi Bajé Meré Lāl", "Nishdin Main Bhajoun Tero Nām", "* Hey Nandalālā Gopālā", "Gopālā Sāi Gopālā", "Govindā (2) Govinda Gopālā", "Sāi Krishna Sāi Rām"] },

  { id: "1120", content: ["Karunā Sāgara Hey Nandalālā", "Murali Manohara Shyāma Gopālā", "* Giridhara Nāgara Sāi Gopālā", "Sāi Gopālā Sāi Gopālā", "Meerā Ké Prabhu Shyāma Gopālā"] },

  { id: "1121", content: ["Karunāntarangā Karirāja Varadā", "Kamalesha Shri Sāi Rāmā", "Omkāra Rāmā Prashānti Rāmā", "Parabhrahma Sathya Sāi Rāmā - Hey", "Kamalesha Shri Sāi Rāmā"] },

  { id: "1122", content: ["Kasturi Tilakam Nārāyanam", "Kamala Nayanam Nārāyanam", "* Guruvāyurapura Nārāyanam", "Kaliyuga Avatāra Nārāyanam", "Govinda Govinda Nārāyanam (x2)"] },

  { id: "1123", content: ["Keshavā Mādhavā", "Govindā Gopālā", "Hari Bol Hari Bol Hari Hari Bol", "Keshava Mādhava Govinda Bol (x2)"] },

  { id: "1124", content: ["Keshavā Mādhavā Jaya Devā Madhusudanā", "Netra Kamala Dala Ateeva Manohara", "Antaryāmi Prabhu Parameshwara", "Māyā Mānusha Vesha Leelādhara (x2)", "Antaryāmi Prabhu Parameshwara"] },

  { id: "1125", content: ["Krishna Bhajo (2) Murali Govinda Bhajo", "Rādhé Govinda Bhajo Rādhé Gopāl Bhajo", "* Giridhāri Shyām Bhajo Sāi Govinda Bhajo", "Madhuvana Sanchāri Shyām Gopāl Bhajo (x2)"] },

  { id: "1126", content: ["Krishna Gopālā Yadunandanā", "Venu Vinodana Mana Mohanā", "* Pankaja Lochana Nārāyanā", "* Mora Mukuta Gokula Ramanā", "Ghanashyāmā Ānanda Govindā", "Krishna Murāri Madhusudanā"] },

  { id: "1127", content: ["Krishna Kanhaiyā Bansi Bajaiyā", "Pār Karo Meré Jeevan Naiyā", "Nandaji Ké Lālā Murali Gopālā", "Bhakton Ké Sāi Deena Dayālā", "Pār Karo Meré Jeevana Naiyā"] },

  { id: "1128", content: ["Krishna Kanhaiyā Krishna Kanhaiyā", "Natavara Nanda Kumāra Kanhaiyā", "Brindāvana Ké Bansi Adhariyā", "Rādhā Manohara Rāsa Rachayyā", "Giridhara Nāgara Shyāma Kanhaiyā", "Shri Madhusudana Sāi Kanhaiyā"] },

  { id: "1129", content: ["Krishna Kanhaiyā Sapné Mé Āo", "Hey Manamohana Murali Sunāo", "Ateeva Manohara Darsha Dikhāo", "Hey Giridhāri Man Ko Lubhāo", "Vyākula Man Ki Pyāsa Bujhādo", "Govinda (3) Gāo"] },

  { id: "1130", content: ["Krishna Krishna Govinda Nārāyanā", "Krishna Rāma Govinda Nārāyanā", "Sāi Rāma Govinda Sāi Shyāma Gopāla", "Sāi Krishna Govinda Nārāyanā"] },

  { id: "1131", content: ["Krishnā (2) Mujhé Darshan Do Krishnā", "Krishnā Oh Krishnā Mujhé Darshan Do Krishnā", "Giridhāri Murāri Krishnā", "Ghanashyāma Murāri Krishnā", "Krishnā (4) Sathya Sāi Murāri Krishnā", "Ab Ā Jāo Krishnā", "Mujhé Darshan Do Krishnā"] },

  { id: "1132", content: ["Krishna Krishna Mukunda Janārdanā", "Krishna Govinda Nārāyanā Haré", "Achyudānanda Govinda Mādhavā", "Satchidānanda Nārāyanā Haré", "Rādhé Govinda Bhajo Rādhé Gopālā (x2)", "Shyāma Sundara Madana Mohana Rādhé Gopālā", "Murali Manohara Rādhé Gopālā", "Shankha Chakra Gadādhara Rādhé Gopālā", "Murali Manohara Rādhé Gopālā"] },

  { id: "1133", content: ["Krishnā Krishnā Rādhé Krishnā", "Rādhé Krishnā (3) Rādhé", "Bāndhé Pāyaliyā Rādhā Āyi", "Nāche Sanga Sanga Krishna Kanhāyi", "Gopi Rāsa Rachāyi"] },

  { id: "1134", content: ["Krishnā Krishnā Yaduvara Krishnā", "Murahara Keshavā Yādhavā Mādhavā", "* Murali Manohara Krishna Murāri", "Krishna Murāri Shyāma Murāri", "Murahara Keshavā Yādhavā Mādhavā"] },

  { id: "1135", content: ["Krishna Mādhava Mādhava Krishnā", "Krishna Mādhava Sāi Haré", "Brindāvana Sanchāri Shyāma Gopālā", "Jaya Madhusudana Jaya Nandalālā", "Jhulanā Jhulé Meré Sāi Nandalālā"] },

  { id: "1136", content: ["Krishna Mukunda Govinda Giridhara", "Murali Mohana Nārāyanā", "Parthi Purandara Nārāyanā", "Mādhava Shri Hari Mandara Giridhāri", "Govinda Murahari Nārāyanā – Haré", "Parthi Purandara Nārāyanā (x2)"] },

  { id: "1137", content: ["Krishna Murāri Bhava Bhaya Hāri", "Hey Giridhāri Gopāla", "Parthi Vihāri Hridaya Vihāri", "Bhakta Sakhā Bhagavān", "Bhakta Sakhā Bhagavān (x2)"] },

  { id: "1138", content: ["Krishna Murāri Gopālā", "Krishna Krishna Sāi Gopālā", "Nanda Kumārā Gopālā Navanita Chorā Gopālā", "Nāda Swarupā Gopālā Nanda Nandanā Gopālā", "Nanda Kumārā Navanita Chorā", "Gopālā Sāi Gopālā"] },

  { id: "1139", content: ["Krishna Murāri Muralidhāri", "Gopi Vallabha Giridhāri", "Hridaya Vihāri Leelādhāri", "Parthi Vihāri Sāi Murāri"] },

  { id: "1140", content: ["Krishnā Rāmā Govindā Gokula Nandana Gopālā", "Rāmā Krishnā Govindā Jaya Brindāvana Gopālā", "Sāi Krishnā Govindā Parthipurishwara Gopālā", "Gopālā Sāi Gopālā", "Gopi Manohara Gokula Bālā Sāi Murāri"] },

  { id: "1141", content: ["Krishnā Rāmā Govinda Nārāyanā", "Keshavā Mādhavā Hari Nārāyana", "* Shri Venu Gopāl Krishnā (x2)", "Mādhavā Madhusudanā Nārāyanā"] },

  { id: "1142", content: ["Krishna Sāi Krishnā Giridhara Bālā", "Giridhara Bālā", "Govardhana Sāi Yadukula Bālā", "* Nanda Nandanā Murali Mohanā", "Gopālanā Sāi Ranganā", "Madhusudana Mana Mohanā Parthi Nandanā"] },

  { id: "1143", content: ["Krishna Shri Hari Krishnā", "Govindā Gopālā Krishnā Krishnā", "* Nanda Mukundā Govindā", "Navanita Chorā Gopālā", "Govindā Gopālā Gokula Nandana Gopālā", "Krishnā Shri Hari Krishnā", "Krishnā Shri Sāi Krishnā"] },

  { id: "1144", content: ["Krishnā Shri Krishnā", "Gopāl Bālā Jaya Krishnā", "* Jaya Brindāvana Shyāma Murāri", "Jaya Parthishwara Sāi Murāri", "Parthi Vihāri Sāi Murāri"] },

  { id: "1145", content: ["Kshirābdi Shayanā Nārāyanā", "Shri Lakshmi Ramanā Nārāyanā", "Nārāyanā Hari Nārāyanā", "Kshritajana Paripāla Nārāyanā", "Vaikunta Vāsā Nārāyanā", "Vaidehi Mohana Nārāyanā", "Nārāyanā Hari Nārāyanā", "Narahara Rupā Nārāyanā"] },

  { id: "1146", content: ["Mādhavā Gopālā", "Madhusudana Hari Giridharā", "Mukunda Mādhava Parthi Vihārā", "Muralidhara Hari Sundarā"] },

  { id: "1147", content: ["Mādhavā Gopālā", "Nanda Nandana Ghanashyāma Gopālā", "* Rādhā Ramana Brindāvana Bālā", "Murali Manohara Shyāma Gopālā"] },

  { id: "1148", content: ["Mādhavā Haré Krishnā Madhura Mohanā", "Gokula Bālanā Devaki Nandanā", "Venu Vinodanā Pāpa Vināshanā", "* Rādhika Jeevanā Rājiva Nayanā", "Nanda Sunandanā Gopi Ramanā", "Venu Vinodanā Pāpa Vināshanā"] },

  { id: "1149", content: ["Mādhava Mohana Shyāma Gopālā", "Muralidhara Mukunda Gopālā", "Dwāpara Yuga Mé Krishna Gopālā", "Meerā Ké Prabhu Giridhara Bālā", "Shyāma Manohara Hey Nandalālā", "Parthipurishwara Sāi Gopālā"] },

  { id: "1150", content: ["Mādhava Murahara Murali Gopālā", "Jaya Govindā Jaya Gopālā", "Parthipuranjana Parama Dayāgana", "Deenajanāvana Sāi Gopālā", "Jaya Govindā Jaya Gopālā"] },

  { id: "1151", content: ["Madhura (2) Murali Ghanashyāmā", "Mathurādipaté Rādhéshyāmā", "Suradāsa Prabhu Hey Giridhāri", "Meerā Ké Prabhu Hridaya Vihāri"] },

  { id: "1152", content: ["Madhusudanā Haré Mādhavā", "Shri Vāsudevā Janārdanā (x2)", "Hari Keshavā Nārāyanā", "Shri Hari Govinda Mana Mohanā", "Janārdanā Jagat Pālanā", "Deenāvanā Dukha Bhanjanā", "Aravinda Lochana Ānanda Rām", "Shri Vāsudevā Janārdanā (x2)"] },

  { id: "1153", content: ["Madhusudana Krishnā Kunja Vihāri", "Rādhā Mādhava Shyāma Giridhāri", "Sāi Krishnā O Sāi Krishnā", "Mandara Giridhara Mādhava Mohana", "Dwāraka Nāthā Gopi Manohara", "Prāna Sakhā Prabhu Bhava Dukha Bhanjana", "Rādhā Mādhava Shyāma Giridhāri", "Sāi Krishnā O Sāi Krishnā"] },

  { id: "1154", content: ["Madhusudanā Krishnā Mādhava Shyām", "Kunja Vihāri Hridaya Vihāri", "Prashānti Vihāri Gopāla", "Kaustubha Shreedhara Chavi Ati Sundara", "Netra Kamala Dala Rādhā Manohara", "Yuga Avatāra Tum Ho Parameshwara", "Bhajana Karoun Terā Sadā Nirantara (x2)"] },

  { id: "1155", content: ["Madhusudanā Muralidharā", "Madhura Madhura Hey Giridhara Bālā", "Mādhavā Madhusudanā", "Hridayāntarangā Shri Sāi Rangā", "Shri Rangā Rangā Puttaparthi Rangā", "Mādhavā Madhusudanā"] },

  { id: "1156", content: ["Madhuvana Ké Muraliwālā", "Nācho (3) Nandalālā", "Nandalālā (2)", "Nācho (3) Nandalālā", "Gopi Manohara Gopāla Bālā", "Parthipurishwara Hey Sāi Nāthā", "Nācho (3) Nandalālā"] },

  { id: "1157", content: ["Madhuvana Murali Shyāma Murāri", "Sānvariyā Moré Rāsa Vihāri", "Gokula Nandana Hey Giridhāri", "Deenana Ké Tum Bhava Bhaya Hāri (x2)"] },

  { id: "1158", content: ["Madhuvana Sanchāri Shyāma Murāri", "Hey Madhusudana Murali Dhāri", "* Rādhā Mādhava Mayura Mukutadhara", "Mathurā Nāthā Sāi Giridhāri"] },

  { id: "1159", content: ["Mana Mandir Mé Āo Giridhāri", "Nishdin Barsat Nayana Hamāré", "* Suradās Ké Shyāma Murāri", "Akhiyan Teré Darsha Ki Pyāsi (x2)"] },

  { id: "1160", content: ["Mana Mohana Murali Gopālā", "Mana Mohana Shyāma Gopālā", "Ghanashyāma (4)", "Hey Giridhāri Hridaya Vihāri", "Krishna Murāri Gopāl", "Krishna Murāri Gopāl Sāi Murāri Gopāl"] },

  { id: "1161", content: ["Mana Mohana Murali Gopālā", "Jaya Govinda Rādhé Gopālā", "Pandarināthā Jaya Hari Vitthalā", "Govardhana Giridhāri Gopālā", "Govinda Rādhé Gopālā"] },

  { id: "1162", content: ["Mana Mohana Shyāma Murāri", "Hey Giridhāri Hridaya Vihāri", "Brindāvana Sanchāri", "* Gāna Vilolā Murāri Gopālā", "Sundara Shyāma Murāri", "Gopi Lolā Gokula Bālā", "Kamala Vadana Sāi Gopālā"] },

  { id: "1163", content: ["Mandira Mé Āo Mādhavā", "Mādhavā Keshavā", "* Ādi Nārāyana Ananta Sāi", "Āo Āo Hridaya Nivāsi", "Rādhā Lolā Rakumāyi Vitthalā", "Rangā Pāndurangā Vitthalā"] },

  { id: "1164", content: ["Mathurādipaté Krishna Mukundā", "Madhusudana Ghanashyāma Mukundā", "* Venu Vilolana Parthi Ramanā", "Yadukula Bhooshana Rājiva Lochanā", "Parthipurishwara Jaya Mana Mohanā", "Madhusudana Ghanashyāma Mukundā"] },

  { id: "1165", content: ["Mukunda Murāri Murāri Gopāl", "Hey Antaranga Sāi Hey Sāi Nandalāl", "* Prashānti Nivāsi Nivāsi Nandalāl", "Hey Antarātmā Jyoti Hey Jyoti Nandalāl", "Satyam Shivam Shivam Sundaram", "Hey Sundara Rupā Hey Sāi Nandalāl"] },

  { id: "1166", content: ["Murali Krishnā Mukunda Krishnā", "Mohana Krishnā Krishnā Krishnā", "Gopi Krishnā Gopāla Krishnā", "Govardhana Dhara Krishnā Krishnā", "Rādhā Krishnā Bāla Krishnā", "Rāsa Vilolā Krishnā Krishnā", "Shirdi Krishnā Parthi Krishnā", "Shri Sathya Sāi Krishnā Krishnā"] },

  { id: "1167", content: ["Murali (3) Ghanashyām", "Mohana Murali Sāi Shyāma", "* Kanakāmbaradhara Karunā Sāgara", "Meerā Ké Prabhu Giridhara Nāgara", "Parthipurishwara Sāi Shyām"] },

  { id: "1168", content: ["Muralidhara Mukunda Murāri", "Govardhana Giridhāri Murāri", "Māyā Nātaka Sutra Dhāri (x2)", "Māyā Mānusha Vesha Dhāri"] },

  { id: "1169", content: ["Muralidharā Muraharā Natavarā", "Gopijana Priya Giridharā", "* Brindāvana Sanchārā Jagadoddhārā", "Yashodā Bālā Nanda Kumārā"] },

  { id: "1170", content: ["Murali Vinodana Munijana Mohana", "Natana Manohara Gopālā", "Nitya Niranjana Hridaya Sanjeevana", "Deenajanāvana Gopālā", "Natana Manohara Gopālā"] },

  { id: "1171", content: ["Nācho Gopāl Nācho Gopāl", "Rumjhum Rumjhum Nācho Gopāl", "Venu Vilolā Vijaya Gopālā", "Nācho Gopāla Giridhara Lāl", "* Nāch Ab Nācho Natakhata Gopālā", "Giridhara Gopālā Sāi Nandalālā"] },

  { id: "1172", content: ["Nācho (3) Nandalālā", "Nandalālā Nandalālā", "Rumajhuma Pāyala Ghunghroo Bajé", "Ghunghroo Bajé Sāi Murali Bajé", "Nandalālā Nandalālā", "* Narahari Rupā Nārāyanā", "Nārāyanā Sāi Nārāyanā", "Nandalālā Nandalālā"] },

  { id: "1173", content: ["Nanda Gopāl (2)", "Nanda Mukundā Shyāma Gopāl", "* Rādhā Mādhava Rādhé Gopāl", "Bhakta Uddhārā Parthi Gopāl", "Sāi Gopāl Sāi Gopāl", "Sāi Gopāl Sathya Sāi Gopāl"] },

  { id: "1174", content: ["Nanda Ké Dulāré Yashodā Ké Pyāré", "Govinda Murāré Deenon Ké Sahāré", "* Karunā Sāgara Giridhara Nāgara", "Murali Manohara Sāi Murāré"] },

  { id: "1175", content: ["Nanda Ké Lāl Bhajo Murali Gopālā", "Rādhéshyām (2)", "Giridhāri Shyām Bhajo Gopi Gopālā", "Meerā Ké Nātha Prabhu Hey Nandalālā", "Rādhéshyām (2)"] },

  { id: "1176", content: ["Nandā Ké Lāla Murali Gopāl", "Giridhāri Govinda Rādhé Gopāl", "Nandā Mukundā Rādhé Gopāl", "Rādhé Jai Rādhé Jai Rādhé Gopāl", "Rādhé (3) Gopāl", "Rādhé Rādhé Murali Gopāl", "Rādhé Rādhé Sāi Gopāl (x2)"] },

  { id: "1177", content: ["Nanda Kishorā Bāla Gopāl", "Navanita Chorā Hridaya Vihār", "Sāi Gopāl Sathya Sāi Gopāl", "Sāi Gopāl Bhajo Murali Gopāl"] },

  { id: "1178", content: ["Nanda Kishorā Navanita Chorā Rādhé Gopālā", "Rāsa Vilolā Rādhé Gopālā Hey Nandalālā", "Nandalālā Nandalālā", "Goparipālā Gopi Lolā Giridhara Gopālā", "Murali Lolā Munijana Pālā Hey Nandalālā", "Nandalālā Nandalālā"] },

  { id: "1179", content: ["Nanda Kishorā Nārāyanā", "Navanita Chorā Nārāyanā", "Narahari Rupā Nārāyanā", "Nāda Swarupā Nārāyanā"] },

  { id: "1180", content: ["Nanda Mukundā Navanita Chorā", "Narahari Rupā Nārāyanā", "Nādabrahma Hari Sāi Nārāyanā", "Satya Nārāyana Nārāyanā", "Sāi Nārāyana Nārāyanā"] },

  { id: "1181", content: ["Nanda Nanda Govinda Nācho Nācho Gopāla", "Nandalāl Govinda Lāl (Sāi) - Hey", "Nandātmajā Hari Nārāyanā - (Sāi)", "Sadā Sukhadāyi Nārāyanā (Ānanda)", "Dwārakamāyi Nārāyanā", "Parthipurishwara Nārāyanā"] },

  { id: "1187", content: ["Nandā Nandana Hari Govinda Gopālā", "Ghanashyāma Mana Mohanā (x2)", "Gopi Lolā Gopālā", "Gokula Bālā Gopālā", "Hey Nandalālā Gopālā", "Ghanashyāma Mana Mohanā (x2)"] },

  { id: "1182", content: ["Nanda Nandanā Navanita Chorā", "Gokula Bālā Hey Gāna Vilolā", "Meerā Ké Nātha Prabhu Shyāma Gopālā", "Vanamāli Giridhāri Sāi Gopālā", "Gokula Bālā Hey Sāi Gopālā", "Mathurā Nāthā Prabhu Krishna Gopālā", "Vanamāli Giridhāri Sāi Gopālā", "Gokula Bālā Hey Sāi Gopālā"] },

  { id: "1183", content: ["Nandalālā Nandalālā", "Nācho (3) Nandalālā", "Navanita Chorā Hey Bāla Gopālā", "Gopi Manohara Gopāla Bālā"] },

  { id: "1184", content: ["Nandalālā Shyāma Sundara Nandalālā", "Kaustubhadhāri Vanamālādhara", "Shyāmala Madana Gopālā", "Rādhéshyāma (2) Sāi Shyāma (2)", "Rādhā Mādhava Madana Gopālā", "Mathurā Nātha Gopālā", "Parthi Nandana Hridaya Sanjeevana", "Shyāmala Madana Gopālā"] },

  { id: "1185", content: ["Nandalālā Yadu Nandalālā", "Brindāvana Govinda Lālā", "Rādhā Lolā Nandalāalā", "Rādhā Mādhava Nandalālā"] },

  { id: "1186", content: ["Nandānanda Mukunda Gopālā", "Murali Mohana Shyāma Gopālā", "Shyāma Gopāla Ghanashyāma Gopālā", "Murali Mohana Shyāma Gopālā"] },

  { id: "1188", content: ["Nārāyan (2) Bhaja Mana Nārāyan", "Shri Hari Mādhava Nārāyan", "Bhaja Mana Nārāyan", "Murali Shyām Mohana Shyām", "Murali Mohana Shyām", "Meré Rām Hey Ghanashyām Sāi Satguru Rām"] },

  { id: "1189", content: ["Nārāyanā Hari Nārāyanā", "Nārāyanā Hari Om", "Nārāyanā Hari Divya Swarupā", "Nārāyanā Hari Jyoti Swarupā", "Sāishwarā Hari Om – Sathya", "Nārāyanā Hari Om"] },

  { id: "1190", content: ["Nārāyanā Hari Nārāyanā", "Narahari Rupā Nārāyanā", "Vaikunta Vāsā Namo Nārāyanā", "Vaidehi Mohana Nārāyanā", "Nārāyanā Namo Nārāyanā", "Nārāyanā Veda Pārāyanā"] },

  { id: "1191", content: ["Natavara Krishnā (2) Rādhé Nandalālā", "Haré Mādhavā Haré Gopikā Lolā – Har", "Krishnā Ghana Ghana Neelā", "Krishnā Gokula Bālā", "Haré Mādhavā Haré Gopikā Lolā – Har"] },

  { id: "1192", content: ["Natavara Lāl Giridhara Gopāl", "Meerā Prabhuvara Shyāma Gopāl", "* Veda Sāra Jeevana Kā Dhāra", "Gopi Manohara Hridaya Vihār"] },

  { id: "1193", content: ["Nityānandā Satchidānandā", "Hari (3) Om Nārāyanā", "Premaswarupa Premānandā (x2)", "Hari (3) Om Nārāyanā", "Nārāyanā Nārāyanā", "Nārāyanā Sāi Nārāyanā", "Hari (3) Om Nārāyanā"] },

  { id: "1194", content: ["Padmanābhā Nārāyanā", "Parthi Vāsā Nārāyanā (x2)", "Nārāyanā Hari Nārāyanā", "Nārāyanā Satya Nārāyanā", "Nārāyanā Sāi Nārāyanā"] },

  { id: "1195", content: ["Paramānanda Govinda Gopāla Jai", "Sāi Nanda Mukundā Gopāl Jai", "Sāi Krishna Haré Sāi Rāmā Haré", "Sāi Keshava Mādhava Mohana Haré", "* Mukhāravinda Gopāla Jai", "Satchidānanda Govinda Gopāla Jai", "Sāi Nandā Mukundā Gopāla Jai"] },

  { id: "1196", content: ["Parthi Nandana Rādhéshyāmā", "Āo Āo Sāi Ghanashyāmā", "Brindāvana Ghanashyāma Govindā", "Madhura Manohara Mukhāravindā", "Hey Giridhāri Sāi Murāri", "Āo Āo Sāi Ghanashyāmā"] },

  { id: "1197", content: ["Parthi Nivāsi Krishnā Hey Ghanashyāmā", "Rādhā Mādhava Sundara Shyāmā", "* Hey Jagan Mohana Gokula Bālā", "Sāi Gopālā Rāsa Vilolā", "Meerā Ké Prabhu Shyāma Gopālā", "Govinda Giridhara Hey Chittachorā"] },

  { id: "1198", content: ["Parthishwarā Sathya Sāishwarā", "Dayā Karo Sāi Nārāyanā", "Shri Sāi Nārāyanā - Sāi", "Bhavasāgaroddhāra Bhuvanāvanā", "Sharanāgatatrāna Nārāyanā", "Dayā Karo Sāi Nārāyanā", "Shri Sāi Nārāyanā – Sāi"] },

  { id: "1199", content: ["Pranava Swarupā Hari Om Sāi", "Nārāyanā Hari Om", "Sathya Sāishwarāya Hari Om", "Yādhavāya Mādhavāya Govindāya Namah Om", "Paramātmā Rupāya Hari Om", "Hari Om (2)", "Sathya Sāishwarāya Hari Om"] },

  { id: "1200", content: ["Prema Se Gāo Mangala Nāma", "Govinda Gopāla Bolo Hari Nāma", "Prema Ké Sindhu Deena Ké Bandhu", "Karunāmayā Sāi Nayanabhi Rāmā", "Govinda Gopāla Bolo Hari Nāma", "Haré Krishna Haré Rām Sāi Rām Sāi Rām (x3)"] },

  { id: "1201", content: ["Purnāvatārā Sāi Mahādeva Sāi Nārāyanā", "Nārāyanā Sāi Nārāyanā (x2)", "* Prema Swarupa Nārāyanā", "Prashānti Niketana Nārāyanā", "Pānduranga Nārāyanā", "Parthipurishā Nārāyanā"] },

  { id: "1202", content: ["Pyāré Nandalāl Darshana Dijo", "Yashodā Ké Bāl Darshana Dijo", "* Natavara Lāl Darshana Dijo", "Giridhara Bāl Darshana Dijo"] },

  { id: "1203", content: ["Rādhā Ké Natavara Lāl Kanhaiyā", "Gokula Bālā Goparipālā", "* Nanda Kumārā Rāsa Vilolā", "Meerā Ké Prabhu Nandalāl Kanhaiyā"] },

  { id: "1204", content: ["Rādhā Krishnā Gopālā", "Rāsa Vihāri Gopālā", "Brindāvana Ké Gopālā", "Bhaktajana Priya Gopālā", "Nanda Mukundā Gopālā", "Navanita Chorā Gopālā", "Goparipālā Gopālā", "Govinda Govinda Gopālā"] },

  { id: "1205", content: ["Rādhā Krishnā Karunā Lolā Rādhé Govindā", "Rādhé Govindā Murali Govindā", "Jai Jai Rādhé Rādhé Govindā Murali Govindā"] },

  { id: "1206", content: ["Rādhā Mādhava Gopālanā", "Govinda Gopāla Nārāyanā", "Nārāyanā Sāi Nārāyanā", "Nārāyanā Satya Nārāyanā", "Nārāyanā Veda Pārāyanā"] },

  { id: "1207", content: ["Rādhā Mādhava Madana Gopālā", "Nanda Mukundā Natavara Lālā", "* Mathurā Nāthā Deena Dayālā", "Sāi Govindā Giridhara Bālā"] },

  { id: "1208", content: ["Rādhā Mānasa Hey Govindā", "Murali Manohara Shri Govindā", "* Krishna Murāri Jaya Govindā", "Parthi Vihāri Sāi Govindā"] },

  { id: "1209", content: ["Rādhā Manohara Natavara Lāl", "Yashodā Ké Nandana Rādhé Gopāl", "Rādhé Gopāl (2)", "* Meerā Ké Prabhu Nācho Gopāl", "Eeshwārāmba Nandana Sāi Gopāl", "Parthi Manohara Krishna Gopāl", "Govinda Gopāla Sāi Nandalāl", "Sāi Nandalāl (2)"] },

  { id: "1210", content: ["Rādhā Manohara Shauri Brindāvani Sanchāri", "Omkāramaya Sathya Sāi", "Vedānta Priya Shubhadāyi", "Paramānanda Govinda Gopāla Parthi Sāi"] },

  { id: "1211", content: ["Rādhā Mukunda Haré Pāhi Govinda Haré", "Vedānta Sāram Haré Nanda Nandanam Haré", "* Gokula Pālam Haré Lokābhirāmam Haré", "Krishnā Mukunda Haré Krishna Govinda Haré"] },

  { id: "1212", content: ["Rādhé Govinda Gopālā Jaya", "Govinda Rādhé Gopālā", "Govinda (2) Gopālā (x2)", "* Krishnā Madhusudanā Madhusudanā Krishnā", "Govinda (2) Gopālā"] },

  { id: "1213", content: ["Rādhé Govinda Haré Murāré", "Shyāma Mukunda Haré Murāré", "* Krishna Govinda Haré Murāré", "Sāi Mukunda Haré Murāré"] },

  { id: "1214", content: ["Rādhé Govindā Jai Jai Rādhé Gopālā", "Deena Nāthā Govindā Anātha Nātha Gopālā", "* Rādhā Lolā Govindā Rāsa Vilolā Gopālā", "Govindā Jaya Govindā Gopālā Sāi Gopālā"] },

  { id: "1215", content: ["Rādhé Govinda Krishna Murāri", "Sathya Sāi Mukunda Murāri", "* Nandā Ānanda Rādhé Govindā", "Rādhé Govindā Sāi Mukundā", "Sathya Sāi Mukunda Murāri"] },

  { id: "1216", content: ["Rādhé Govindā Rādhé Gopāl Sāi Rām", "Bansidhara (2) Hey Chittachorā", "Hey Natavara (2) Nanda Kishorā", "Ghanashyāma Sundara Meghashyāma", "Sundara Sāi Rām"] },

  { id: "1217", content: ["Rādhé Krishnā (2)", "Jai Shri Krishnā Rādhé Rādhé (x2)", "Rādhé Krishnā Rādhé Rādhé", "Jai Shri Krishnā Rādhé Rādhé", "Shirdi Krishnā Parthi Krishnā", "Sāi Krishnā Rādhé Rādhé", "Rādhé Krishnā (2) Jai Shri Krishnā Rādhé Rādhé", "Rādhé Krishnā Rādhé Rādhé", "Jai Shri Krishnā Rādhé Rādhé"] },

  { id: "1218", content: ["Rādhé Mukunda Murāri Govindā", "Govindā Govindā Ānanda Govindā", "* Giridhāri Giridhāri Ānanda Ānandā – 3", "* Murali Manohara Sāi Gopālā – 3"] },

  { id: "1219", content: ["Rādhé (2) Govindā", "Rādhé (2) Gopālā", "Rādhé Govinda Bhajo Rādhé Gopālā", "Rādhé Mukunda Haré"] },

  { id: "1220", content: ["Rādhé (4) Govindā", "Rādhé Govinda Bhajo Rādhé Gopālā (x2)", "* Murali Manohara Govinda", "Hey Mādhava Murahara Govindā (x2)"] },

  { id: "1221", content: ["Rādhé (4) Govindā", "Rādhé Govindā Rādhé Gopālā", "Mohana Rupā Moksha Pradātā", "Murali Lolā Munijana Pālā", "Gopi Lolā Goparipālā", "Hridaya Vihārā Parthi Nivāsā", "Hridaya Vihārā Sāi Gopālā"] },

  { id: "1222", content: ["Rādhé (4) Govindā", "Rādhé (3) Nanda Mukundā", "Giridhara Vrajadhara Rādhe Gopālā", "Murali Manohara Rādhe Gopālā", "Shankha Chakradhara Rādhe Gopāl", "Rādhe Govinda Bhajo Rādhe Gopāl"] },

  { id: "1223", content: ["Rādhé (4) Venu Gopālā", "Venu Gopālā Sāi Gopālā", "* Rādhikā Manoharā Rāja Gopālā", "Gopikā Manoharā Gopi Gopālā", "Neela Meghashyāma Sundara Sāi Gopālā", "Mādhavā Keshavā Sāi Jai Jai Gopālā"] },

  { id: "1224", content: ["Rādhéshyāmā Hey Ghanashyāmā", "Rādhā Mādhava Mangala Dhāmā", "Jaya (3) Hey Meghashyāmā", "Meghashyāmā Meghashyāmā", "Jaya (3) Brindāvana Dhāmā"] },

  { id: "1225", content: ["Rādhikā Jeevanā", "Krishna Janārdanā", "Rādhé Govindā Rādhé Gopālā", "Devaki Nandanā – Vasu", "Nanda Nandanā Hey Gopikā Ranjanā", "Murali Mohanā", "Shri Madhusudanā – Krishnā Krishnā"] },

  { id: "1226", content: ["Rādhikā Manoharā Madana Gopālā", "Deena Vatsalā Hey Rāja Gopālā", "Bhaktajana Mandārā Venu Gopālā", "Muralidhara Hey Sathya Sāi Gopālā"] },

  { id: "1227", content: ["Rām Dhun Lāgi Mohé Shyāma Dhun Lāgi", "Lāgi Ré Lāgi Mohé Shyāma Dhun Lāgi", "* Haré Rām (2) Bolo Haré Rām", "Haré Prema Ānanda Se Bolo Sāi Haré Rām", "Haré Rām (2) Bolo Haré Rām (x2)", "Rām (3) Rādhéshyāma Dhun Lāgi"] },

  { id: "1228", content: ["Rām Krishna Govinda Nārāyanā", "Nārāyanā Hari Nārāyanā", "Shri Lakshmi Nārāyanā", "Om Ananta Nārāyanā (x3)"] },

  { id: "1229", content: ["Rām Krishna Govinda Nārāyana Keshavā", "Rādhikā Ramana Mādhavā Jaya Ranga Devā (x2)", "Haré Rām Haré Krishna Seetā Rāma Rāghavā", "Rādhikā Ramana Mādhavā Jaya Ranga Devā (x2)"] },

  { id: "1230", content: ["Rāsa Vilolā Nandalālā", "Rādhā Mādhava Nandalālā", "* Nanda Kishorā Nandalālā", "Navaneeta Chorā Nandalālā", "Nandalālā Sāi Nandalālā - Hey"] },

  { id: "1231", content: ["Ravikula Mandana Rājiva Lochana Rāghavā", "Vasudeva Nandana Bandha Vimochana Keshavā", "* Dharma Niketana Krishna Janārdana Yādhavā", "Hey Madhusudana Murali Mohana Mādhavā"] },

  { id: "1232", content: ["Rumjhuma Nācho Nanda Dulāra", "Mādhava Murahara Madana Gopāl", "* Rādhā Manohara Natavara Lāl", "Govinda Giridhara Murali Gopāl - (Shyām)"] },

  { id: "1233", content: ["Sāi Ghanashyāma (2)", "Rādhé Govinda Bhajo Rādhé Gopāla Bhajo", "Murali Gopāla Bhajo Sāi Ghanashyāma"] },

  { id: "1234", content: ["Sāi Jhulo Meré Bābā Jhulo Meré Bābā", "Jhulanā Jhulāyé Brijabālā Gopālā", "Gopi Manohara Bālā", "Jhulo Nandalālā Jhulo Nandalālā", "Parthi Mé Jhulé Sāi Lālā Gopālā", "Man Ké Jhulé Mé Virājo Gopālā", "Nandalālā Sāi Lālā", "Jhulo Nandalālā Jhulo Sāi Lālā"] },

  { id: "1235", content: ["Sāi Kanhaiyā Sāi Kanhaiyā", "Pār Karo Meré Jeevana Naiyā", "Tum Ho Meré Mā Bāpa Bhaiyā", "Hridaya Nivāsi Sāi Kanhaiyā (x2)", "Pār Karo Meré Jeevana Naiyā"] },

  { id: "1236", content: ["Sāi Nārāyana Nārāyana", "Satya Nārāyana Nārāyana", "Gāna Lola Prabhu Nārāyana", "Deena Pāla Jaya Nārāyana"] },

  { id: "1237", content: ["Sāi Rām Haré Ghanashyāmā", "Rādhéshyāma Haré Sāi Rāmā", "Meghashyāma Haré Parandhāmā", "Ghanashyāma Haré Sāi Rāmā"] },

  { id: "1238", content: ["Sapné Mé Āo Shyāma Murāri", "Sānvari Surata Muralidhāri", "* Sab Ké Sājana Prabhu Giridhāri", "Sab Ké Sājana Hridaya Vihāri", "Satguru Sāi Parthi Vihāri"] },

  { id: "1239", content: ["Sarvatra Govinda Nāmasankirtanam", "Govindā Haré Govindā", "Govindā Haré Govindā", "Haré Govindā Haré Govindā", "Purāna Purushā Govindā", "Haré Punya Shloka Govindā", "Bhakta Vatsalā Govindā", "Haré Bhāgavata Priya Govindā", "Krishna Rāmā Govindā", "Haré Rāmā Krishnā Govindā", "Sāi Rāmā Govindā Haré Sāi Shyāmā Govindā"] },

  { id: "1240", content: ["Satya Nārāyana Govinda Mādhavā", "Sāi Nārāyana Govinda Keshavā (x2)", "Haré Krishna (2) Krishnā (2) Haré Haré", "Haré Rāmā (2) Rāmā (2) Haré Haré"] },

  { id: "1241", content: ["Satya Sanātana Nitya Niranjana", "Bhakta Parāyana Nārāyanā", "Govinda Govinda Nārāyanā (x2)", "Nārāyanā Sāi Nārāyanā", "Puttaparthi Purandara Nārāyanā", "Govinda Govinda Nārāyanā"] },

  { id: "1242", content: ["Shesha Shailavāsā Nārāyanā", "Bhakta Pārijātā Nārāyanā", "* Sarvajeeva Vāsā Nārāyanā", "Sāmagāna Lolā Nārāyanā", "Sathya Sāi Rupa Nārāyanā (x2)"] },

  { id: "1243", content: ["Shri Krishnā Mādhavā Govindā Gopālā", "Mathurā Nāthā Madana Gopālā", "Nanda Mukundā Shyāma Gopālā – (Sāi)", "Krishna Haré Jai Krishna Haré", "Jai Haré Govinda Krishna Haré (x2)"] },

  { id: "1244", content: ["Shri Madhusudana Krishnā", "Giridhara Shyāma Murāri", "Bhakta Vatsala Prabhu Hey Giridhāri", "Rādhā Ramana Shri Hari", "Keshava Mādhavā Sādhu Samrakshaka", "Sāi Krishna Murāri"] },

  { id: "1245", content: ["Shri Ranganā Krishnanā Devaki Nandanā", "Kamala Nayana Shyāmala Vadana", "Ānanda Chandanā", "* Venu Vinodana Gopikā Ranjana", "Yashodā Nandana", "Ānanda Chandanā", "Yashodā Nandanā"] },

  { id: "1246", content: ["Shri Vāsudevā Nārāyanā Sāi Nārāyanā", "Janārdanā Hey Madhusudanā Sāi Nārāyanā", "Govardhanodhāra Gopālanā Sāi Nārāyanā", "Hari Om (3) Nārāyanā"] },

  { id: "1247", content: ["Shridharā Muralidharā Brindāvanā Sanchārā", "Sāi Keshavā Sāi Mādhavā Parthipuri Krishnā", "Rādhā Mādhava Rāsa Vilolā", "Rājiva Nayanā Venu Gopālā", "Vishwa Vandita Sāi Kripālā", "Sāi Keshavā Sāi Mādhavā Parthipuri Krishnā"] },

  { id: "1248", content: ["Shrinivāsā Govindā Shri Venkateshā Govindā", "Purāna Purushā Govindā", "Pundarikākshā Govindā", "Dasavidha Rupā Govindā", "Krishnā Rāmā Govindā", "Krishnā Rāmā Govindā Rāmā Krishnā Govindā", "Sāi Rāmā Govindā Sāi Krishnā Govindā"] },

  { id: "1249", content: ["Shrinivāsā Venkateshā", "Kshritajana Paripālā Sāishā", "* Tirupati Girivāsā Govindā", "Gauruda Vāhanā Govindā Govindā", "Govinda Govindā Shrinivāsā Govindā", "Govinda Govindā Shirdi Vāsā Govindā", "Govinda Govindā Parthivāsā Govindā"] },

  { id: "1250", content: ["Shyāma Sundara Madana Mohana Rādhé Gopāl", "Rādhé Gopāl Bhajo Rādhé Gopāl", "Shankha Chakra Gadādhara Rādhé Gopāl", "Rādhé Gopāl Bhajo Rādhé Gopāl"] },

  { id: "1251", content: ["Shyāma Sundara Hari Govinda Bolo", "Govinda Bolo Hari Gopāla Bolo", "* Madana Mohana Prabhu Govinda Bolo", "Kamala Nayana Prabhu Gopāla Bolo", "Rādhā Ramana Hari Govinda Bolo"] },

  { id: "1252", content: ["Shyāma Sundarā Nanda Kishorā", "Mohana Muralidharā Navanita Chorā", "Rādhikā Manoharā Rāsa Vilolā", "Gopika Manoharā Goparipālā", "Brindāvana Bālā Sāi Gopālā"] },

  { id: "1253", content: ["Shyāmala Komala Krishnā Murāri (x2)", "Shyāmala Ghanashyāmala Meghashyāmala", "Komala Krishnā Murāri", "Shreedhara Yaduvara Krishnā Murāri (x2)", "Shreedhara Nanda Yaduvara Bhava Bhaya Hara", "Giridhara Krishnā Murāri", "Shreedhara Yaduvara Krishnā Murāri"] },

  { id: "1254", content: ["Smita Smita Sundara Mukhāravinda", "Nāchoré Nandalālā Nandalālā (x4)", "Meerā Ké Prabhu Lālā Nandalālā (x4)"] },

  { id: "1255", content: ["Subah Aur Shām Bolo Hari Nām", "Gopi Gopāl Bhajo Sāi Ghanashyām", "* Chalo Mana Chalo Chalein Bābā Ké Dhām", "Shirdi Ké Dhām Sathya Sāi Ké Dhām"] },

  { id: "1256", content: ["Sundara (2) Nāché Sundara Sāi Ghanashyāma", "Nācheré Sāi Sundara Shyām", "Jhumaka Jhumaka Jhum Ghunghroo Bājé", "Nāché Ghanashyām", "Nāché Natavara Sāi Sundara Meré Sāi Rām", "Nāché Nāché Mana Mandira Mé Meré Sāi Rām", "Nācheré Sāi Sundara Shyām"] },

  { id: "1257", content: ["Sundara Shyāma Murāri Sāi", "Gopālā Shri Hari Shri Hari", "Parama Niranjana Mādhava Sāi", "Sakala Charāchara Vyāpaka Sāi", "Gopālā Shri Hari Shri Hari"] },

  { id: "1258", content: ["Swāgatam Krishnā Sharanāgatam Krishnā", "Swāgatam (2) Sharanāgatam Krishnā", "Mathurāpuri Sadanā Madhusudanā Krishnā", "Swāgatam (2) Sharanāgatam Krishnā"] },

  { id: "1259", content: ["Vaikuntapaté Sāi Haré", "Vaijayanti Mālā Dhāri", "* Hari Govinda Hari Gopāla (x2)", "Vara Godāvari Teera Vihāri – (Chitrāvati)"] },

  { id: "1260", content: ["Vanamāli Vāsudevā Jagan Mohanā", "Rādhā Ramanā", "Jagan Mohanā Rādhā Ramanā (x2)", "Shashi Vadanā Sarasija Nayanā", "Jagan Mohanā Rādhā Ramanā (x3)", "Rādhā Ramanā (x4)"] },

  { id: "1261", content: ["Vasudevaki Nandana Gopālā", "Nanda Mukundā Gopālā", "* Rādhā Mādhava Rāsa Vilolā", "Meerā Mādhava Natavara Lālā"] },

  { id: "1262", content: ["Yadunandanā Yashoda Bālā", "Mādhavā Keshavā", "* Mathurā Nāthā Mama Sāi Nāthā", "Mandara Giridhāri Madhusudanā Hey"] },

  { id: "1300", content: ["Bhaja Mana Pānduranga Vitthalā Jai Vitthalā", "Purandara Vitthalā Vitthalā Jai Vitthalā", "* Bhaja Mana Pānduranga Vitthalā Jai Vitthalā", "Purandara Vitthalā Vitthalā Jai Vitthalā"] },

  { id: "1301", content: ["Bhaja Mana Pānduranga Vitthalā Vitthalā", "Bhaja Mana Pānduranga Ranga Sāi Vitthalā", "* Tukārām Nāmadeva Poojitāya Vitthalā", "Rukmani Sameta Pānduranga Vitthalā", "Jayadeva (2) Sāi Rangā Vitthalā", "Bhakta Paripālana Pānduranga Vitthalā"] },

  { id: "1302", content: ["Bhaja Mana Rām (2)", "Pāndurangā Shri Rangā Bhaja Mana Rām", "Bhaja Mana Mādhavā Bhaja Mana Keshavā", "Bhaja Mana Yādhavā Bhaja Mana Rām", "Pāndurangā Shri Rangā Bhaja Mana Rām", "Bhaja Mana Mukunda Bhaja Mana Govinda", "Bhaja Mana Ānanda Bhaja Mana Rām", "Pāndurangā Shri Rangā Bhaja Mana Rām"] },

  { id: "1303", content: ["Bhajo Bhajo Vitthalā Pānduranga Vitthalā", "Pandarinātha Pānduranga Bhajo Mana Vitthalā", "* Parthishwarā Sāi Nātha Vitthalā", "Parameshwarā Sathya Sāi Vitthalā", "Rakumāyi Vitthalā Ranga Sāi Vitthalā"] },

  { id: "1304", content: ["Bolo Nārāyanā Jai Jai Vitthalā", "Sāi Nārāyanā Rangā Rangā Vitthalā", "* Govinda Vitthalā Rakumāyi Vitthalā", "Gopāla Vitthalā Pānduranga Vitthalā", "Shri Rangā Vitthalā Sāi Rangā Vitthalā"] },

  { id: "1305", content: ["Deena Bandhu Vitthalā Jai", "Karunā Sindhu Vitthalā Jai", "Vitthalā (3) Jai Pāndurangā Vitthalā Jai", "Āpatha Bāndhava Vitthalā Jai", "Anātha Rakshaka Vitthalā Jai", "Vitthalā (3) Jai Pāndurangā Vitthalā Jai"] },

  { id: "1306", content: ["Govinda Krishna Vitthalā", "Venu Gopāl Krishna Vitthalā", "Pānduranga Vitthalā Jaya Pandarinātha Vitthalā", "Govinda Vitthalā Gopāla Vitthalā", "Pānduranga Vitthalā Pandarinātha Vitthalā", "Vitthala Vitthala Pānduranga – 4"] },

  { id: "1307", content: ["Govinda Krishna Vitthalé", "Venu Gopāl Krishna Vitthalé", "Rangā Rangā Vitthalé Jaya Pāndurangā Vitthalé", "Govinda Krishna Vitthalé", "Venu Gopāl Krishna Vitthalé", "Rangā Rangā Vitthalé Jaya Pāndurangā Vitthalé"] },

  { id: "1308", content: ["Govinda Murāri Gopāla Murāri", "Vitthala Shri Hari Pāndurangā", "Hridaya Vihāri Hey Giridhāri", "Murahara Shauri Pāndurangā"] },

  { id: "1309", content: ["Hari Hari Vitthalā Haré Pāndurangā", "Haré Pāndurangā (3) Hari Hari Vitthalā", "* Deena Bandhu Deena Nāth Haré Pāndurangā", "Deva Deva Ādi Deva Haré Pāndurangā", "Haré Pāndurangā (3) Hari Hari Vitthalā"] },

  { id: "1310", content: ["Hari Hari Vitthalā Sāi Hari Vitthalā", "Hari Om Vitthalā Sāi Om Vitthalā", "* Shirdi Sāi Vitthalā", "Parthi Sāi Vitthalā", "Shirdi Sāi Vitthalā Parthi Sāi Vitthalā", "Purandara Vitthalā Pānduranga Vitthalā", "Vitthala (2) Vitthalā, Sāi Hari Vitthalā", "Vitthala (2) Vitthalā, Sāi Om Vitthalā", "Vitthala (2) Vitthalā, Vitthala (2) Vitthalā (x2)"] },

  { id: "1311", content: ["Hari Vitthalā Vitthalā Jai Vitthalā (2)", "Deena Bāndhavā Bhakta Poshakā", "Pānduranga Hari Vitthalā", "Bhajaré Mānasa Vitthalam", "Vishwa Vishnu Rupam", "Krishna Dāmodaram Rukmini Vallabham", "Pandarinātha Kamalākānta Shri Hari Vitthalā", "* Bhajaré Mānasa Mādhavam Murali Mohanam", "Veera Venkatesham Padmini Vallabham", "Sarasijā Nayana Nandānanda Vijaya Vitthalā"] },

  { id: "1312", content: ["Hey Kamala Vadana Sāi Rangā", "Kaivalya Pāndurangā (x2)", "Sāi Gopālā Ghana Ghana Neelā", "Kutila Kunthala Tribhuvana Pālā", "Brahmā Vishnu Maheshwara Rupā", "Māyā Lolā Brahma Swarupā"] },

  { id: "1313", content: ["Hey Krishnā Hey Krishnā", "Vitthala Jaya Pānduranga Pāndurangā", "Nanda Kishorā Shyāma Gopālā", "Shyāma Gopālā Madana Gopālā (x2)", "Vitthala Jaya Pānduranga Pāndurangā", "Pāndurangā (4) (x5)"] },

  { id: "1314", content: ["Hey Sāi Rangā Hey Pāndurangā", "Karunāntarangā Hridayāntarangā", "* Shri Rangā Rangā Jaya Rangā Rangā", "Ānanda Rangā Sadānanda Rangā"] },

  { id: "1315", content: ["Jai Hari Vitthalā Rangā Jai Hari Vitthalā", "Govinda Gopāla Rangā Jai Hari Vitthalā", "Pānduranga Vitthalā Krishna Nādā Vitthalā", "Govinda Gopāla Rangā Jai Hari Vitthalā", "Bhakta Vatsalā Ranga Krishnā Nādā Vitthalā", "Govinda Gopāla Ranga Jai Hari Vitthalā"] },

  { id: "1316", content: ["Jai Jai Rangā Vitthalā Hey Jai Jai Sāi Vitthalā", "Janam Janam Meré Sāth Raho Tum", "* Patita Pāvana Parama Dayāgana", "Pānduranga Vitthalā Hey Pandarināthā Vitthalā", "Pānduranga Vitthalā Hey Parthi Sāi Vitthalā", "Vitthalā Jai Vitthalā Jai Sathya Sāi Vitthalā"] },

  { id: "1317", content: ["Jai (2) Vitthalā Pāndurangā", "Jayatu Vitthalā Pandari Nāthā", "* Jai Jai Vitthalā Sāi Rangā", "Jayatu Vitthalā Parthi Nāthā"] },

  { id: "1318", content: ["Jai (2) Vitthalā Pānduranga Vitthalā", "Pundalika Varadā Pānduranga Vitthalā", "Jai (2) Vitthalā Pānduranga Vitthalā", "Pundalika Varadā Pānduranga Vitthalā"] },

  { id: "1319", content: ["Jai Pānduranga Jaya Vitthalā", "Jagadoddhārā Hari Vitthalā", "Pandari Nāthā Jaya Hari Vitthalā", "Purandara Vitthalā Parama Dayālā"] },

  { id: "1320", content: ["Jaya Hari Pānduranga Nārāyanā", "Nārāyanā Hari Nārāyanā", "* Keshava Mādhava Hari Nārāyana", "Vitthala Narahari Sāi Nārāyana", "Jaya Hari Nārāyanā Jaya Sāi Nārāyanā"] },

  { id: "1321", content: ["Jaya Pāndurangā Prabhu Vitthalā", "Jagadoddhārā Sāi Vitthalā", "Pānduranga Vitthalā Pandarinātha Vitthalā", "Shri Ramani Hridayāntaranga", "Mangala Kara Karunāntaranga", "Āshrita Deenajanavana Ranga", "Jagadoddhārā Sāi Vitthalā", "Pānduranga Vitthalā Pandarinātha Vitthalā – 6"] },

  { id: "1322", content: ["Jaya Rangā Pāndurangā", "Shri Rangā Parthishā", "Sāi Rangā Pandarishā", "Jaya Shirdishā Jaya Parthishā", "Pāvana Purushā Jaya Sāishā", "Jai Hari Vitthala Shri Hari Vitthala (x2)"] },

  { id: "1323", content: ["Kalyāna Rangā Kamaneeya Rangā", "Ānanda Rangā Sadānanda Rangā", "Hridayāntarangā Karunāntarangā", "Rakumāyi Rangā Sāisha Rangā", "Shirdisha Rangā Parthisha Rangā", "Ānanda Rangā Sadānanda Rangā"] },

  { id: "1324", content: ["Kasturi Rangā Kāveri Rangā", "Shri Ranga Ranga Rangā", "Kalyāna Rangā Karunāntarangā", "Shri Ranga Ranga Rangā", "Gauruda Gamana Rangā Shesha Shayana Rangā", "Shri Ranga Ranga Rangā"] },

  { id: "1325", content: ["Narahari Rangā Ré (2) Narahari Rangā Haré", "Narahari Rangā Haré", "Puttaparthi Rangā Shri Parthi Rangā", "Narahari Rangā Shri Rangā Rangā", "Shri Rangā Rangā Shri Rangā Haré"] },

  { id: "1326", content: ["Pandari Nivāsā Hey Pāndurangā", "Hey Parthivāsā Shri Sāi Devā", "* Deena Rakshakā Anātha Rakshakā", "Bhakta Vatsalā Hey Sāishwarā (x2)"] },

  { id: "1327", content: ["Pandari Ranga Vitthalā", "Jaya Pānduranga Vitthalā", "Kasturi Ranga Vitthalā", "Kamaneeya Ranga Vitthalā", "* Govinda Ranga Vitthala", "Gopāla Ranga Vitthalā", "Kalyāna Ranga Vitthalā", "Karunāntaranga Vitthalā", "Parthisha Ranga Vitthalā", "Prabhu Sāi Ranga Vitthalā"] },

  { id: "1328", content: ["Pāndurangā (2) Vitthalā Pāhé", "Deena Nāthā Karunā Nāthā", "Sāi Nātha Haré", "Pandarināthā Pāndurangā", "Vitthalā Pāhé"] },

  { id: "1329", content: ["Pānduranga Vitthalā Jai Pandarināthā Vitthalā", "Pānduranga Vitthalā Jai Pundarikākshā Vitthalā", "* Vitthalā Jai Vitthalā Purandara Vitthalā (x2)", "Vitthalā Jai Vitthalā Jai Rakumāyi Vitthalā"] },

  { id: "1330", content: ["Pānduranga Vitthalé Hari Nārāyana", "Hari Nārāyana Govindā – 3", "Bhajo Nārāyana Govindā", "Sāi Nārāyana Govindā"] },

  { id: "1331", content: ["Purandara Rangā Haré Vitthalā", "Pandari Rangā Haré Vitthalā", "* Narahari Rangā Haré Vitthalā", "Murahara Rangā Haré Vitthalā"] },

  { id: "1332", content: ["Rādhéshyāma Gopālā Rādhika Jeevana", "Shri Rangā", "Meghashyāma Gopālā Manamohana Sundara", "Shri Rangā", "* Pandarinātha Gopālā Pānduranga Shri Rangā", "Parthipurishā Gopālā Sāi Rangā Shri Rangā"] },

  { id: "1333", content: ["Rādhéshyāma Pānduranga Vitthalé Rakumāyi", "Pānduranga Purandara Vitthalé Rakumāyi", "Rādhéshyāma Pānduranga", "Vitthalé Rakumāyi (x2)", "Pānduranga Purandara Vitthalé Rakumāyi"] },

  { id: "1334", content: ["Rāma Krishna Hari Mukunda Murāri", "Pānduranga Hari Pānduranga Hari", "Deva Deva Devā Mahādeva Devā", "Ādideva Devā Brahma Vishnu Devā", "Ādideva Devā Sathya Sāi Devā", "Pānduranga Hari Pānduranga Hari"] },

  { id: "1335", content: ["Rangā Rangā Pāndurangā", "Rakumāyi Vitthalā Pāndurangā", "Mangala Murti Pāndurangā", "Vitthala Vitthala Pāndurangā", "* Singāra Sāi Pāndurangā", "Sathya Sāi Vitthalā Pāndurangā", "Omkāra Rupā Pāndurangā", "Om Hari Vitthalā Pāndurangā"] },

  { id: "1336", content: ["Rangā Rangā Shri Hari Rangā", "Pandarināthā Pāndurangā", "Natana Manohara Navanita Chorā", "Natavara Lālā Gopālā", "Hari Nārāyana Jaya Nārāyana", "Shri Vaikunta Shrinivāsā", "Govindā Jaya Govindā Bhaja Govindā Govindā", "Vitthala Vitthala Pāndurangā", "Jaya Jaya Vitthala Sāi Rangā"] },

  { id: "1337", content: ["Ranga Vitthalā Pānduranga Vitthalā", "Shri Ramani Hridayāntarangā", "Mangalakara Karunātaranga", "Āshisha Deenajanāvana Rangā", "Jagadoddhārā Hari Vitthalā"] },

  { id: "1338", content: ["Shri Rangā Haré Vitthalā", "Sāi Rangā Haré Vitthalā", "Hey Dayānidhé Vitthalā", "Hey Kripānidhé Vitthalā", "Hey Sāi Prabhu Vitthalā", "Sathya Sāi Prabhu Vitthalā"] },

  { id: "1339", content: ["Shri Rangā Rangā Vitthalā Vitthalā", "Rakumāyi Rangā Vitthalā Vitthalā", "Pandari Rangā Vitthalā Vitthalā", "Pānduranga Vitthalā Vitthalā", "Deena Bandhu Vitthalā Jai Sāi Nāthā Vitthalā", "Parthi Rangā Vitthalā Jai Jai Sāi Vitthalā"] },

  { id: "1340", content: ["Shri Rangā (2) Rangā Rangā Shri Rangā (x2)", "Kāveri Tatha Vāsa Kasturi Rangā", "Kārunya Lāvanya Karunāntarangā", "Jaya Pāndurangā Jaya Sāi Rangā (x2)"] },

  { id: "1341", content: ["Vitthala Bhajo Vitthala Bhajo (x2)", "Pandarināthā Pānduranga Vitthala Bhajo", "Parthi Vāsā Sāi Devā Vitthala Bhajo", "Shirdi Vāsā Sāi Devā Vitthala Bhajo"] },

  { id: "1342", content: ["Vitthalā Hari Vitthalā (x3)", "Pāndurangā Vitthalé Hari Nārāyana", "Purandara Vitthalé Hari Nārāyana", "Hari Nārāyana Bhajo Nārāyana", "Sāi Nārāyana Satya Nārāyana"] },

  { id: "1343", content: ["Vitthalā Jai Vitthalā Pānduranga Vitthalā", "Pānduranga Vitthalā Sāi Ranga Vitthalā", "* Pānduranga Sāi Ranga Sāi Ranga Pānduranga", "Pānduranga Sāi Ranga Sāi Ranga Pānduranga", "Pānduranga Vitthalā Sāi Ranga Vitthalā"] },

  { id: "1344", content: ["Vitthalā Nārāyanā", "Nārayanā Sāi Nārāyanā", "* Madhusudanā Nārāyanā", "Shri Shesha Shayanā Nārāyanā", "Nārāyanā Sāi Nārāyanā", "Vitthala Vitthala Pānduranga Vitthala – 4"] },

  { id: "1345", content: ["Vitthalā Nārāyanā Hari Vitthalā Nārāyanā", "Vishwādhārā Sāi Nārāyanā", "* Pandari Nāthā Hari Nārāyanā", "Purandara Rangā Bhajo Nārāyanā", "Rakumāyi Vitthalā Sāi Nārāyanā", "Ranga Sāi Vitthalā Satya Nārāyanā"] },

  { id: "1346", content: ["Vitthala (2) Hari Vitthalā", "Vitthala (2) Nām Bhajo Hari Vitthalā", "Pānduranga Vitthalā Vitthala Vitthala Nām", "Vitthala (2) Nām Bhajo Hari Vitthalā", "Vitthala (2) Sāi Vitthalā"] },

  { id: "1360", content: ["Anila Kumārā Hanumantā", "Anjani Putrā Shri Anjaneyā", "* Vānara Sevita Vāyu Kumārā", "Aganita Gunagana Ati Balavantā", "Shri Rām Dootā Kshritajana Pālā", "Shri Rām Bhaktā Abhaya Pradātā"] },

  { id: "1361", content: ["Anjana Putrā Ānjaneyā Ati Balavantā Ānjaneyā", "Sanjivirāyā Ānjaneyā", "Shri Rāma Bhaktā Ānjaneyā", "* Bhadra Shareerā Ānjaneyā", "Vāyu Kumārā Ānjaneyā", "Kanjam Pādam Ānjaneyā", "Dukha Nivārana Ānjaneyā"] },

  { id: "1362", content: ["Anjana Suta Ānjaneyā", "Vāyu Putrā Vātātmaja", "Vānara Uttama Balabheemā", "Rāma Doota Ranadheerā"] },

  { id: "1363", content: ["Anjanaiyā Veerā Hanumanta Surā", "Vāyu Kumārā Vānara Veerā", "Shri Rām Jai Rām Jai Jai Rām", "Seetārām Jai Rādhéshyām (x4)"] },

  { id: "1364", content: ["Bajaranga Bali Baladhām Nāthā", "Sankatā Mochanā", "* Keshari Nandana Mangala Rupā", "Sakala Gunālaya Hanumanta Veerā"] },

  { id: "1365", content: ["Baladhām Hanumantā", "Bajaranga Bali Devā", "Muni Nara Vandita Parama Yogishā", "Lankāpuri Dahanā", "Anjani Putra Raghupati Priyā", "Jai Jai Mahāveerā", "Māruti Nandana Vaidehi Priyā", "Jai Jai Balaveerā"] },

  { id: "1366", content: ["Hey Rām Dootā Hey Rāma Bhaktā", "Hey Rāma Dāsā Namo Namo", "Seetā Mātā Shoka Vināshā", "Anātha Nāthā Namo Namo", "Mārutirāyā Mahānubhāvā", "Ati Balavantā Namo Namo", "Veera Ānjaneyā Namo Namo"] },

  { id: "1367", content: ["Jai Jai Anjani Kumāra Hanumān Ji Ki Jai", "Hanumān Ji Ki Jai Hanumān Ji Ki Jai", "* Seetā Rām Ji Ki Jai Rādhéshyām Ji Ki Jai", "Jai Jai Pavana Kumāra Hanumān Ji Ki Jai", "Hanumān Ji Ki Jai Hanumān Ji Ki Jai", "Jai Jai Shiva Tripurāri Hanumān Ji Ki Jai"] },

  { id: "1368", content: ["Jai Jai Hanumān Jai Hanumān", "Mārutirāyā Jai Hanumān", "Shri Rāma Doota Jai Hanumān", "Jai Bajarangi Jai Hanumān", "Jai Jai Hanumān Jai Hanumān"] },

  { id: "1369", content: ["Jai Jai Hanumān Jaya Hanumān (x2)", "Mārutirāyā Jaya Hanumān", "Mahānubhāvā Jaya Hanumān", "Vāyu Kumārā Jaya Hanumān", "Vānara Veerā Jaya Hanumān", "Anjani Putrā Jaya Hanumān", "Ati Balavantā Jaya Hanumān", "Shri Rām Dootā Jaya Hanumān", "Shri Rām Bhaktā Jaya Hanumān"] },

  { id: "1370", content: ["Jai Kapisha Jaya Hanumantā", "Jaya Ho (2) Sāi Anjanaiyā", "Rām Lakshman Priya Mahāveerā", "Rāha Dikhāo Prabhu Sāishā"] },

  { id: "1371", content: ["Jaya Ānjaneya Jaya Rāma Dootā", "Sharanam Prabho Sharanam", "Vānara Veerā Vāyu Kumārā", "Ranadheerā Sharanam", "Rāmapriyé Sharanam", "Sathya Sāi Hanumān Sharanam", "Rām Rām Jaya Jaya (3) Rām (x2)"] },

  { id: "1372", content: ["Jaya Bajaranga Jaya Balaveera", "Jaya Hanumān Jaya Bolo (x2)"] },

  { id: "1373", content: ["Jaya Hanumān Bajaranga Bali", "Sankata Mochana Jai Jai Kapish", "Jaya Hanumantā Hey Mahāveer", "Seetā Shoka Nāshana Jai Jai Kapish", "Pavana Putrā Anjanaiyā", "Rām Sahāré Jai Jai Kapish", "Bhimā Sodara Mahābali", "Sab Dukha Tāré Jai Jai Kapish"] },

  { id: "1374", content: ["Jaya Hanumān (2) Mārutirāyā Jaya Hanumān", "Jaya Hanumān (2) Ānjaneyā Jaya Hanumān", "Jaya Hanumān (2) Rām Dāsā Jaya Hanumān", "Jaya Hanumān (2) Rām Doota Jaya Hanumān", "Jaya Hanumān (2) Mahānubhāvā Jaya Hanumān", "Jaya Hanumān (2) Ānjaneya Jaya Hanumān"] },

  { id: "1375", content: ["Jaya Hanumān Mahāveera", "Vāyu Nandanā Abhayankarā", "Vaidehi Priya Hanumān", "Seetā Shoka Nāshana Tu", "Lankābhayankara Tu", "Vāyu Nandanā Abhayankarā", "Vaidehi Priya Hanumān"] },

  { id: "1376", content: ["Jaya Ho (2) Rāma Bhaktā Hanumān Ki Jai", "Jaya Ho (2) Pavana Putra Kapi Rupa Ki Jai", "Anjani Putrā Abhaya Māruti", "Pavana Putrā Amara Māruti", "Rāma Dootā Ajara Māruti", "Sukshma Rupā Akhanda Māruti", "Vajra Swarupā Prachanda Māruti (x2)"] },

  { id: "1377", content: ["Jaya Vijayee Bhava Jaya Vijayee Bhava", "Bhava Bhaya Nāshā Hanumantā", "Pavana Kumārā Pāvana Veerā", "Ati Balavantā Hanumantā", "Anjani Putrā Veera Ānjaneyā", "Niranjanā Vijayee Bhava (x2)"] },

  { id: "1378", content: ["Jo Māruti Nanda Sahāya Karé", "Phir Koyi Sahāy Milé Na Milé", "Jo Anjani Putra Sahāya Karé", "Phir Koyi Sahāy Milé Na Milé", "Phir Koyi Sahāy Milé Na Milé", "* Chāhé Kāla Karāla Darāvé Ousé", "Chāhé Pāpa Ki Jwāl Jalāyé Ousé", "Yadi Rām Kā Doota Sahāya Karé", "Phir Koyi Sahāy Milé Na Milé (x2)", "* Jin Ké Man Mandir Rām Basé", "Priya Lakshman Ké Sang Khubha Raché", "Hanumān Vohi Jo Sahāya Karé", "Phir Koyi Sahāy Milé Na Milé (x2)"] },

  { id: "1379", content: ["Karunānidhé Hanumantā", "Hey Asādhya Sādhakā", "Kripānidhé Balavantā", "Hey Apāra Parākramā", "Shri Rām Bhaktā Shri Rām Swarupā", "Shri Rām Dootā Sangeeta Rasikā", "Rāma Geetāmrita Nāmāmrita", "Premāmrita Hanumantā"] },

  { id: "1380", content: ["Lankāpuri Dahanā Seetā Shoka Nāshanā", "Kapisha Hanumantā", "Buddhi Swarupā Jaya Mahāveerā", "Sura Muni Nara Vanditā", "Rāmchandra Priyā", "Anjani Bālā Bhāgya Vidhātā", "Bhima Sodara Vāyu Nandana", "Sura Muni Nara Vanditā", "Rāmchandra Priyā"] },

  { id: "1381", content: ["Pavana Suta Hanumān Ki Jai", "Siyāpati Rāmchandra Ki Jai", "* Parākrama Ānjaneya Ki Jai – 3", "Parthipuri Sāi Nātha Ki Jai"] },

  { id: "1382", content: ["Prabhu Rāmachandra Ké Dootā", "Hanumantā Ānjaneya", "Hanumantā (3) Ānjaneyā", "Hey Pavana Putra Hanumantā", "Balabheemā Ānjaneyā", "Balabheemā (3) Ānjaneyā"] },

  { id: "1383", content: ["Rām Bhakta Hanumān Teri", "Jaya Ho Veera Mahāna", "Pavana Putra Hanumān Teri", "Jaya Ho Veera Mahāna", "Rām Ki Mahimā Tu Ne Jāni", "Ham Murakha Ham Hein Agnāni", "Dedo Ham Ko Gnāna Teri", "Jaya Ho Veera Mahāna - Prabhu"] },

  { id: "1384", content: ["Rāma Dhyāna Nirata Ānjaneyā", "Rāma Sevāmritā Hanumantā", "Swāmi Mukhya Prānā Pavamānā", "Daitya Kulāntakā Mahāveerā", "Anjanā Trivāsā Gunavantā", "Dāsānudāsā Hanumantā", "Shri Rāma Dāsā Hanumantā", "* Māyā Vibhanjana Balabheemā", "Māra Vijaya Ghana Rāma Dootā", "Muni Guna Kapivara Vātātmajā", "Dāsānudāsā Hanumantā", "Shri Rāma Dāsā Hanumantā"] },

  { id: "1385", content: ["Rām Kaho Sāi Bhajana Karo", "Jaya Hanumāna Ki Bhajana Karo", "Ayodhyā Jaya Sāi Shānta Karo", "Parama Pāvanā Tirtha Karo - Bābā"] },

  { id: "1386", content: ["Rām Lakshman Jānaki Jai Bolo Hanumān Ki", "Anjani Putrā Balabheemā Ānjaneya Balabheemā", "Balabheema (6) Balabheemā", "Vāyu Kumārā Balabheemā", "Vānara Veerā Balabheemā", "Balabheema (6) Balabheemā", "Parthipurishā Sāi Rāmā", "Pāvana Purushā Sāi Rāmā", "Sāi Rām (6) Sāi Rāmā"] },

  { id: "1387", content: ["Rām Lakshman Jānaki Jai Bolo Hanumān Ki", "Rām Lakshman Jānaki", "Jai Bolo Hanumān Ki (x5)"] },

  { id: "1388", content: ["Rām (4) Pāda Sevitam", "Rām (4) Doota Pāhinam", "Seetā Shoka Nāshanam Anjanātmajam", "Para Hridatpriyam Sāi Vāyu Nandanam", "Rām Rām Shri Rām Rām Rām (x5)"] },

  { id: "1389", content: ["Seetā Rakshaka Rāma Dootā", "Lankā Dahanā Rāvana Mardana", "Shri Rāma Dāsā Dayānidhé", "Sarva Mangalā Ānjaneyā"] },

  { id: "1390", content: ["Veera Dheera Māruti Gambheera Māruti", "Bheema Rupa Māruti Pavana Putra Māruti", "Rām (5) Japé Māruti – 3", "Bheema Rupa Māruti Parthi Vāsa Māruti"] },

  { id: "1391", content: ["Veera Hanumānā Ati Balavānā Rām Nām", "Rasiyā Ré Hey Sāi Mana Basiyā Ré", "Rām Lakshmana Jānaki", "Jai Bolo Hanumān Ki (x2)", "* Raghupati Rāghava Rājā Rām", "Patita Pāvana Seetā Rām (x2)"] },

  { id: "1392", content: ["Veera Māruti Gambheera Māruti", "Veera Māruti Ati Dheera Māruti", "Doota Māruti Rāma Doota Māruti", "Dāsa Māruti Rāmadāsa Māruti", "Geeta Māruti Sangeeta Māruti", "Bhakta Māruti Rāma Bhakta Māruti"] },

  { id: "1400", content: ["Āndavané Sarvanané Shiva Gurunādā", "Āramuga Shanmugané Shiva Gurunādā", "Shiva Gurunādā Shiva Gurunādā", "* Vel Murugā Māl Marugā Shiva Gurunādā", "Mayil Veerā Vadivazhagā Shiva Gurunādā", "Shiva Gurunādā Shiva Gurunādā"] },

  { id: "1401", content: ["Āramugā Vadivelavā", "Āndavané Sathya Sāi Vā", "Neela Mayil Mélé Ādi Vā", "Nādesané Bāla Odi Vā (x2)", "Sharanam Sharanam Vallisha Sharanam", "Sharanam Sharanam Sāisha Sharanam"] },

  { id: "1402", content: ["Devā Murugā Varugā Singāra Velā Varugā", "Vā Vā Murugā Velā", "Vanna Mayil Vā Vā Varugā Murugā", "Parthipurishané Varugā", "Prashānti Vāsané Varugā", "Vā Vā Sāishā Devā Vettrivadivelané Sāi Murugā"] },

  { id: "1403", content: ["Deva Senāpaté Skandā Subrahmania Pāhimām", "Pāhi Parameshwarā Skandā", "Subrahmania Pāhimām", "Subrahmania Shanmukha Nāthā", "Sāi Nāthā Karunā Sindhu", "Pāhi Parameshwarā Skandā", "Subrahmania Pāhimām"] },

  { id: "1404", content: ["Gurunāda Kāvalana Vadivelā", "Kumāra Kadambā Shiva Bālā", "Umai Ammai Selvā Tanigāsalā", "Kundrudorum Ādivarum Kumaraiyā", "Subrahmania Shanmugané Vettrivadivelavané", "Gnāna Guru Desigané Kumaraiyā"] },

  { id: "1405", content: ["Hara Hara Shiva Shiva Shanmugā", "Karunai Kadhalé Sāi Shanmugā", "* Pazhani Giri Nāthā Parthipurishwara", "Parangkundram Azhagā Devā Amarā"] },

  { id: "1406", content: ["Kandā Kumarā Vadivelā", "Gauri Putrā Vadivelā", "* Kārtikeyā Karunā Sāgara", "Deena Sharanyā Vadivelā", "Shri Sāi Nāthā Vadivelā"] },

  { id: "1407", content: ["Kandayyā Kandayyā Vel Murugaiyā", "Vel Vel Velāyudha - Vettri", "Sāi Murugaiyā Haro Harā", "Haro Harā Sāi Haro Harā", "Kandappā Murugesā Velappā Mayuresā", "Vel Vel Sāi Nādā", "Sāi Murugaiyā Haro Harā", "Haro Harā Sāi Haro Harā"] },

  { id: "1408", content: ["Kārtikeyā Kaliyuga Varadā", "Kandā Murugā Subrahmania", "Om Gurunādā Parthipurishā", "Mohana Vallisha Subrahmania", "Mayileri Vā Vā Māyon Marugā", "Asura Samhārā Subrahmania"] },

  { id: "1409", content: ["Kārtikeyā Kandā Kumarā", "Mayil Vāganane Murugaiyā", "* Pazhaniyilvārum Parama Dayālā", "Vallideviyin Manavālā", "Devagar Talaivāsurasamhārā", "Parthi Vāsā Sāi Nāthā"] },

  { id: "1410", content: ["Karunā Sāgara Kārtikeyā", "Kāmita Phala Dāyaka Valli Nāthā", "* Skandā Kumarā Subrahmania", "Devādi Devā Deena Sharanyā", "Parama Niranjana Parthi Nāthā", "Parama Niranjana Sāi Nāthā"] },

  { id: "1411", content: ["Karunākara Shekhara Kārtikeyā", "Gaurishwara Tanayā Gananātha Sodarā", "* Kaliyuga Vandanā Kalimala Nāshanā", "Shri Vallikāntanā Shiva Gurunāthanā", "Haro Harā (2) Shanmukha Nāthā"] },

  { id: "1412", content: ["Karunāmayā Kārtikeyā", "Kaivalya Dātā Hey Swāmināthā", "Himagiri Nandini Priya Kumārā", "Ihapara Sukhadāyi Bhava Bhaya Hārā", "Shraranāgata Priya Shanmukha Nāthā", "Sharanam Sharanam Shambho Kumārā"] },

  { id: "1413", content: ["Murugā Māl Marugā Shanmugā", "Kumarā Guhané Kārtikeyā", "* Shankari Tanayā Saravana Nāthā", "Shambho Shankara Pārvati Bālā", "Parama Dayālā Pazhani Girishā", "Parthipurishā Sharanam Sharanam"] },

  { id: "1414", content: ["Murugā Mohana Tanga Mayil Vāhana", "Saravanabhavané Velāyudha", "Hey Shiva Bālā Asura Samhārā", "Parthipurishwara Velāyudha"] },

  { id: "1415", content: ["Murugā (2) Shakti Vel Murugā", "You Are My Shining Star", "Shakti Vel Murugā Vadivel Murugā", "Come To Me Lord Murugā", "Murugā Sāi Rām Murugā Sāi Rām", "When I Need You Murugā,", "You Are There Murugā", "To Take All My Troubles Away", "You Are My Sāi Murugā", "You Are My Light Murugā", "Vā Vā Vadivelavā", "Murugā Sāi Rām Murugā Sāi Rām"] },

  { id: "1416", content: ["Murugā Murugā Sharanam Sharanam", "Mayil Vāhanané Sharanam Sharanam", "Kandā Kadambā Sharanam Sharanam", "Kaliyuga Varadā Sharanam Sharanam"] },

  { id: "1417", content: ["Murugā Saravana Shanmugā", "Murugā Sāi Shanmugā", "* Shiva Shakti Bālā Mohanā", "Kārtikeya Bālā Sundarā", "Shakti Vadivelā Skandā", "Kaliyuga Varadā Sāishā"] },

  { id: "1418", content: ["Pacchai Mayil Yerivarum Vel Murugaiyā", "Vadivel Murugaiyā", "Parthipuri Nādané Ni Vel Murugaiyā", "Vadivel Murugaiyā", "Asoorané Samhārané Ni Vel Murugaiyā", "Vadivel Murugaiyā", "Sathya Sāi Kumarané Ni Vel Murugaiyā", "Vadivel Murugaiyā", "Vel Vel Murugā Vadivel Azhagā (x2)"] },

  { id: "1419", content: ["Pazhani Āndavā Pazhani Āndavā", "Parāshakti Bālagané Pazhani Āndavā", "Pazhani Āndavā Parthi Vihārā", "Neela Mayil Vel Murugā", "Kola Mayil Māl Marugā", "Saravanabhava Shanmugané Sathya Sāi Āndavā", "Parāshakti Bālagané Pazhani Āndavā", "Pazhani Āndavā Parthi Vihārā"] },

  { id: "1420", content: ["Pazhani Āndavā Yengal Pazhani Āndavā", "Tenpazhani Nāyagane Pazhani Āndavā", "Unpugarai Pārivandrum Pazhani Āndavā", "Yempiraigal Tiratiruvāi Pazhani Āndavā", "Anbānadaivam Neeyé Pazhani Āndavā", "Chinmaya Rupā Sāi Pazhani Āndavā"] },

  { id: "1421", content: ["Pazhani Malai Āndavā Shanmuga Kuga", "Pazhamudhir Solaiyil Vadivazhagā", "* Veeravel Murugā Om Saravanā", "Parthipuri Nāyakā Sāi Shanmugā", "Sathya Sāi Shanmugā"] },

  { id: "1422", content: ["Pazhani Malai Āndi Vela Vadivelavā", "Pannirugai Āndavā Sāi Velavā", "Pannirugai Āndavā Gnāna Velavā", "Pazhani Malai Āndi Swāmi Malai Āndi", "Solai Malai Āndi Vela Vadivelavā", "Pannirugai Āndavā Sāi Velavā", "Pannirugai Āndavā Gnāna Velavā", "Azhagiya Bālané Āramuga Nādané", "Ānanda Rubané Sāi Velavā", "Saravanabhava (2) Saravana Nādā"] },

  { id: "1423", content: ["Pazhani Murugā Vela Murugā", "Sharanam Sharanam Vela Murugā", "Ganapati Sodara Vela Murugā", "Kārtikeyā Vela Murugā", "Subrahmania Vela Murugā", "Hara Haro Harā Murugā Hara Haro Harā", "Haro Harā (2) Hara Haro Harā"] },

  { id: "1424", content: ["Pazhani Vāsā Gnāna Vela Murugā", "Kaliyuga Varadā Shiva Bālā", "* Saravanabhavané Haro Murugā", "Shiva Subrahmania Haro Murugā", "Hara Hara Murugā Shiva Shiva Murugā", "Shiva Shiva Murugā Sathya Sāi Murugā"] },

  { id: "1425", content: ["Sāi Nādā Subrahmania Pazhani Āndi Sundarā", "Nyāna Velā Muttu Kumarā Parthi Nādā Sundarā", "Tanga Vela Vettri Veera Vel", "Shiva Shakti Vela Sāi Anbu Vel", "Mayilum Neeyum Ādi Vā Vā", "Mayilum Neeyum Odi Vā Vā", "Nyāna Velā Muttu Kumarā Parthi Nādā Sundarā"] },

  { id: "1426", content: ["Saravana Hara Shiva Shanmukha Nāthā", "Pārvati Nandana Pranava Swarupā", "* Jyoti Swarupa Gnāna Pradātā", "Devaganārchita Jaya Kārtikeya", "Mayura Vāhana Pazhani Nivāsā", "Parthipurishwara Shri Sāi Devā", "Shri Sāi Devā Sathya Sāi Devā"] },

  { id: "1427", content: ["Saravanabhava Kuga Sāi Murugā", "Yengal Shiva Shakti Bālā Sāi Murugā", "Pranava Swarupā Sāi Murugā", "Parthipuri Sathya Sāi Murugā", "Purāna Purushā Sāi Murugā", "Pāvana Purushā Sāi Murugā", "Sharanam Sharanam Sāi Murugā", "Shanmuga Nāthā Sāi Murugā"] },

  { id: "1428", content: ["Saravanabhava Sathya Sāi Nāthā", "Satchidānandā Shiva Sāi Nāthā", "* Kārtikeyā Kandā Kumarā", "Karunānidhiyé Kaliyuga Devā", "Pranavākārā Parthipurishā"] },

  { id: "1429", content: ["Saravanabhava Subrahmania Sāishā", "Shanmugā Shanmugā Odi Vā", "* Kandappā Murugesā Vā Vā Vā", "Velappā Mayuresā Vā Vā Vā", "Muttu Kumaresā Vā Vā Vā", "Odi Vā Ādi Vā Vā Vā Vā"] },

  { id: "1430", content: ["Sathya Sāi (2) Bol, Sathya Sāi (2) Bol", "Sathya Sāi (2) Sāi Bābā Sathya Sāi", "Murugā Haro Harā Shirdi Sāi Bābā", "Murugā Haro Harā Parthi Sāi Bābā", "Vel Vel Murugā Shakti Vel Murugā (x2)", "Shirdishwarā Haro Harā", "Parthishwarā Haro Harā", "Vel Vel Murugā Vadivel Murugā (x2)"] },

  { id: "1431", content: ["Shanmuga Shanmuga Sāi Sundara", "Shiva Saravana Bhava Om", "Guru Saravana Bhava Om", "Mangala Gauri Shankara Nandana", "Shiva Saravana Bhava Om", "Guru Saravana Bhava Om", "Parthi Vihāri Pranavākāri", "Shiva Saravana Bhava Om (x2)", "Guru Saravana Bhava Om"] },

  { id: "1432", content: ["Shanmuga (2) Vadivelavā", "Shankari Shiva Bālā Sāishwarā", "Sāishwarā Sāishwarā", "Parthipurishwara Subrahmania", "Aum Shiva Subrahmania Om Sāi Subrahmania", "Hara Hara Murugā Sāishwarā"] },

  { id: "1433", content: ["Sharanam Kugāya Sharanam Kugāya", "Saravanabhava Kuga Haro Harā", "Gajamukha Sodara Kārtikeyā", "Sharanam Sharanam Haro Harā", "Sharanam Kugāya Sharanam Kugāya", "Saravanabhava Kuga Haro Harā", "Gajamukha Sodara Kārtikeyā", "Sharanam Sharanam Haro Harā"] },

  { id: "1434", content: ["Sharanam Pazhani Nāda Murugā", "Sāi Sharanam Shiva Kumāra Skandā", "Vela Murugan Subrahmaniam Parthi Nādā - Sāi", "Velāyudha Kārtikeya Shanmuga Nādā - Sāi", "* Mohana Rubā Devasenā Valli Nādā - Sāi", "Mohānaga Mayil Vāhanané Swāmi Nādā - Sāi"] },

  { id: "1435", content: ["Shiva Kumārane Shakti Bālane Vā Vā Vā", "Saravanabhava Kuga Shanmuga Velā Vā Vā Vā", "Omkāra Tattuvame Ni Vā Vā Vā", "Parthipurishā Sāi Nādā Vā Vā Vā", "Kandā Vā Vā Vā", "Velā Vā Vā Vā", "Sāi Vā Vā Vā"] },

  { id: "1436", content: ["Shiva Priya Nandana Bhava Bhaya Bhanjana", "Gauri Priya Suta Om Shadānana", "* Hey Mayurāsana Smita Vadanā", "Sindura Vadanā Shubha Charanā", "Shanmukha Nāthā Subrahmania Devā", "Shanmukha Nāthā Sathya Sāi Devā"] },

  { id: "1437", content: ["Shiva Saravanabhava Shirdipurishwara", "Parthipuri Nāyaka Pārvati Bālā", "Kandā Shanmugā Kuga Ānanda Velavā", "Parthipuri Nāyaka Pārvati Bālā"] },

  { id: "1438", content: ["Subrahmania Gurunādā", "Āramuga Saravanabhava Kuga Sāi Nādā", "Pannirugai Āndava Pacchai Mayil Vāgana", "Parthipuri Shiva Subrahmania", "Shakti Umai Bālā Sathya Sāi Nādā", "Swāmi Malai Kumaresā"] },

  { id: "1439", content: ["Subrahmania Nādā Āramuga Velā", "Asura Samhārā Deena Dayālā", "Sendil Vadivela Sundara Gana Bālā", "Solai Malai Azhagā Valli Manālā", "Asura Samhārā Deena Dayālā"] },

  { id: "1440", content: ["Subrahmania Shiva Shakti Velā", "Shiva Shiva Sāi Guru Nādā", "Parthipurishā Asura Samhārā", "Vettrivelāyudha Pāpa Vināshā", "Hara Hara Sāi Guru Nādā"] },

  { id: "1441", content: ["Subrahmaniam Subrahmaniam", "Shanmuga Nādā Subrahmaniam", "Subrahmaniam Subrahmaniam", "Sāi Nādā Subrahmaniam", "Shiva (4) Subrahmaniam,", "Hara (4) Subrahmaniam", "Shiva (2) Hara (2) Subrahmaniam,", "Hara (2) Shiva (2) Subrahmaniam", "Shiva Saravanabhava Subrahmaniam", "Guru Saravanabhava Subrahmaniam", "Shiva (2) Hara (2) Subrahmaniam,", "Hara (2) Shiva (2) Subrahmaniam", "Shiva (2) Hara (2) Subrahmaniam", "Sāi Nāthā Subrahmaniam"] },

  { id: "1442", content: ["Swāmināthā Sāi Karunā Sindhu Swāmi", "Pazhani Girivāsā Pārvati Nandanā", "Pranavākārā Shiva Subrahmania", "Skandā Kumara Valli Nāyaka", "Deenajanāvana Parthi Nāyaka"] },

  { id: "1443", content: ["Tenpazhani Nādanikku Hara Haro Harā", "Yerumayil Velanikku Hara Haro Harā", "Hara Haro Harā Murugā Hara Haro Harā", "Hara Haro Harā Shanmugā Hara Haro Harā", "Swāmimalai Nādanikku Hara Haro Harā", "Tiruchendur Velanikku Hara Haro Harā", "Parthipuri Nādanikku Hara Haro Harā", "Shakti Vadivelanikku Hara Haro Harā"] },

  { id: "1444", content: ["Umā Maheshwara Kumāra Gurubara", "Pazhani Subrahmania", "Bhaktajana Priya Pārvati Bālā Bāla Subrahmania", "Shiva (4) Shivāya Namah Om,", "Hara (4) Harāya Namah Om (x2)", "Shiva (6) Shanmugā", "Hara (6) Shanmugā"] },

  { id: "1445", content: ["Vadivela Azhagā Murugā", "Vimalā Amarā Shanmugā", "Saravanabhava Kuga Shakti Velā (x2)", "Sathya Sāi Āndavā Shakti Velā", "Sathya Sāi Āndavā Parthi Lolā"] },

  { id: "1446", content: ["Vadivela Kandappā Murugesané", "Sāi Kumaresa Parthisha Azhagesané", "Vadivela Kandappā Murugesané", "Vadivela Sundaresa Subrahmanyané", "Parthipuri Vāsané Nee Mayiloné", "Sāi Kumaresa Parthisha Azhagesané"] },

  { id: "1447", content: ["Valli Malai Nādā Asura Samhārā", "Vettrivelāyudha (Shiva Bālā (3))", "* Sendil Velava Arupadai Veerā", "Saravanabhava Kuga (Shiva Bālā (3))"] },

  { id: "1448", content: ["Valli Mohanā Sāi Mayil Vāhanā", "Āramuga Kandané Sundara Vadanā", "Kumarā Gurubara Sāishā Vadivelavā", "Murugā Hari Marugā Sathya Sāi Āndavā (x2)"] },

  { id: "1449", content: ["Vā Vā Murugaiyā Vadivela Azhagā", "Vā (3) Kumarā Tiru Kārtikeyā", "Sāi Sāi (x3)", "Singāra Velā Shiva Shakti Bālā", "Sangeeta Lolā Sathya Sāishā", "Sāi Sāi (x3)"] },

  { id: "1450", content: ["Vel Murugā Māl Marugā", "Saravanabhava Kuga Shakti Vadivelā", "Pazhani Girishā Vel Murugā", "Prashānti Nilaya Sāi Murugā"] },

  { id: "1451", content: ["Vel Murugā (2) Vel, Vel Murugā (2) Vel", "Vel Murugā Māl Pazhani Vel Murugā Vel Vel", "* Vel Vel Murugā – Vettrivel Murugā", "Vā Vā Vadivelā Vel Murugaiyā Vā Vā Vadivelā", "Vel Vel Murugā Āndavane", "Vel Vel Murugā – Vettrivel Murugā"] },

  { id: "1452", content: ["Vel Vel Murugā Vadivela Murugā", "Vadivela Murugā Vettrivela Murugā", "Vettrivel Murugā Veeravel Murugā", "Veeravel Murugā Shaktivel Murugā", "Hara Hara Murugā Shiva Shiva Murugā", "Hara Shiva Murugā Sathya Sāi Murugā"] },

  { id: "1453", content: ["Vel Vel Murugā Vadivela Murugā", "Vel Vel Murugā Gnānavela Murugā", "Vel Vel Murugā Kandavela Murugā", "Vel Vel Murugā Vadivela Azhagā", "Murugā (4)", "Murugā (2) Sathya Sāi Murugā (x2)", "Murugā (2) Vadivela Azhagā"] },

  { id: "1454", content: ["Velāyudha Sāi Velāyudha", "Velavane Sāi Velāyudha", "Vel Murugā Māl Marugā Velāyudha", "Vettrivadivelavané Velāyudha", "Kandanikku Vel Vel Muruganikku Vel Vel"] },

  { id: "1455", content: ["Vettrivelāyudha (3) Azhagā", "Vettrivelāyudha Sāi Shanmuga", "Shiva Subrahmania Azhagā", "Pazhani Girishā Kumāresā", "Tirumāl Marugā Sāi Murugesā", "Swāmi Malai Āndavā Azhagesā"] },

  { id: "1500", content: ["Come Come To Me You Children Of The World", "Sāi Is Father Mother To All", "Love All Serve All This Is The Way To God", "* Love Gives And Forgives One And All", "Self Gets And Forgets One And All (x2)"] },

  { id: "1501", content: ["Divine Father Soham You And I Are One", "Jesus Christ Soham You And I Are One", "Sāi Bābā Soham You And I Are One", "Soham Soham Soham You And I Are One"] },

  { id: "1502", content: ["Divine Mother (3) Sāi Mā,", "Divine Mother (3) Sāi Mā", "Mā Sāi Mā, Mā Sāi Mā", "You Are Loving Sāi Mā You Are Caring Sāi Mā", "Satya Dharma Shānti Prema Ānanda Rupini Mā", "Mā Sāi Mā, Mā Sāi Mā", "Light The Lamp Of Love In Our Heart Sāi Mā", "You Are Here You Are There", "You Are Everywhere", "Mā Sāi Mā, Mā Sāi Mā"] },

  { id: "1503", content: ["God Is Within You So Says Sāi Bābā", "Listen To The Voice Of Silence Within", "He Is In All Of Us", "The Light Is Within You So Says Sāi Bābā", "Open Your Heart To Your Fellowmen", "And Let His Love Flow Out", "God Is Love God Is Light", "God Is Light God Is Love"] },

  { id: "1504", content: ["He Was Born In The Village Of Puttaparthi", "In A Land Far Across The Sea", "On A Beautiful November Morn", "When Music Divine Played On", "Sathya Nārāyanā Sathya Nārāyanā", "Sathya Nārāyanā Shri Sathya Sāi Bābā", "A Saviour Born To Reedeem Us All", "Little Sathya Nārāyanā", "Our Lord Divine Come To Show Us The Way", "Shri Sathya Sāi Avatār"] },

  { id: "1505", content: ["I Bow To Thy Lotus Feet My Lord", "I Pray To Be Close To You Dear My Lord", "Sāi Rāmā Sāi Krishnā Sāi Allāh Sāi Jesus", "* You Are Truth You Are Peace", "You Are Love And Compassion", "You Are My Teacher You Are My Preacher", "You Are My Guide For Liberation"] },

  { id: "1506", content: ["I Keep Feeling Your Love In Me", "Over And Over Again", "And It’s Sweeter And Sweeter", "As The Days Go By", "Oh What A Love Between My Lord And I", "My Lord And I My Sāi And I (x2)"] },

  { id: "1507", content: ["I Love You Lord I Love You", "You And I Are One", "Shirdi Bābā Shri Sathya Sāi Nārāyana Sāi Bābā", "Let All Sing The Name Of Sāi", "Let Us Pray The Lord", "He Has Come On Earth For Us", "He Is Our Lord", "Let’s Rejoice And Follow Him", "Listen To His Words", "Do Not Look Outside For Him", "He Is In Our Hearts"] },

  { id: "1508", content: ["I Love You With All My Heart Sāi Lord", "I Love With All My Soul Sāi Lord", "Only You Only You", "And To Know That You Live In My Heart", "Sāi Lord", "Makes Me Love You More Than Ever Sāi Lord", "All I Want All I Want", "True To You In Every Way"] },

  { id: "1509", content: ["Listen To Sāi Bābā And What He Has To Say", "Sathya Sāi Bābā The God To Whom We Pray", "* Follow The Master Face The Devil", "Fight To The End And Finish The Game"] },

  { id: "1510", content: ["Love All Serve All", "Listen To The Call Of The Lord", "Love All Serve All", "This Is The Call Of The Lord", "If You Love The Lord Then You Must Love All", "If You Serve The Lord", "Then You Must Serve All", "Love All Serve All", "Listen To The Call Of The Lord", "Love All Serve All", "This Is The Call Of The Lord", "See No Evil Speak No Evil", "Hear No Evil Says The Lord", "Think No Evil Do No Evil", "Love All Serve All Says The Lord"] },

  { id: "1511", content: ["Love In My Heart Love In My Home", "Love In My Life Sāi Is Love", "Sāi In My Heart Sāi In My Home", "Sāi In My Life Sāi My Own", "Love Love Love Is God", "Live Live Live In Love"] },

  { id: "1512", content: ["Love Is God God Is Love", "Love All Serve All Says Our Lord (x2)", "Free Us From Ego Free Us From Lust", "Free Us From Anger Free Us From Hate", "Help Everyone Hurt No One", "Burn All The Evil Desires"] },

  { id: "1513", content: ["Love Is My Form Truth Is My Breath", "Bliss Is My Food", "My Life Is My Message Expansion Is My Life", "No Reason For Love No Season For Love", "No Birth No Death", "Prema Satya Ānanda Dharma Shānti Ahimsā", "Shirdi Sāi Sathya Sāi Prema Sāi Jai Jai", "Shirdi Bābā Sathya Bābā Prema Bābā Jai Jai"] },

  { id: "1514", content: ["Love Is Thy Name O Sāi Rām", "Truth Is Thy Breath O Sāi Rām", "You Are Our Lord And Only One", "Give Us The Strength To Follow You", "Give Us The Love To Forgive All", "You Are Our Lord And Only One"] },

  { id: "1515", content: ["Love Love Love God Is Love", "Live Live Live Live In Love", "Expand Your Heart To Encompass All", "Live Live In Love", "Your Master Is Your Heart", "Your Heart Where God Resides", "God Is In You With You Above You", "Around You And Behind You", "Love Love Is God", "Live Live In Love"] },

  { id: "1516", content: ["Mother Oh Mother Sāi Mā,", "You Mean The World To Me Sāi Mā", "Mother Oh Mother Sāi Mā,", "You Are The Light Of My Life Sāi Mā", "Mā Sāi Mā (2)", "In Times Of Trouble And Despair", "I Call Your Name, You’re Always There", "You Guide Me Forever Each Day,", "With All Your Love,", "You Show Me The Way", "How Can We Thank You Oh Dear Sāi Mā", "For All Your Patience And Love Sāi Mā", "Mā Sāi Mā (2)"] },

  { id: "1517", content: ["My Eyes They Thirst For You My Lord", "My Heart It Pines For You", "Teach Me How To Serve But You My Lord", "Show Me How To Love But You", "Lead Us All O Kindly Light", "Kindly Light O Kindly Light"] },

  { id: "1518", content: ["My Heart Is Pining My Eyes Are Searching", "My Ears Are Yearning My Lips Are Calling", "And My Whole Self Is Waiting", "For You My Lord", "End My Craving My Lord Come Come To Me"] },

  { id: "1519", content: ["Our Jesus Came And He Is Here Again", "Sāi Rāmā Sāi Krishnā Sāi Is His Name", "Mohammad Zorāshtra Yehovā Are The Same", "Jesus Christ Of Bethlehem", "And Sāi Are The Same", "Hāleluyāh (2) Glory To Thy Name", "Sathya Bābā Prema Bābā Blessed Be Thy Name"] },

  { id: "1520", content: ["Repeat His Name Sāi Rām Sāi Rām", "Say It With Love Sāi Rām Sāi Rām", "Picture His Form Sāi Rām Sāi Rām", "He’s Everywhere Feel Him Shining Within You", "Rām (4) Sāi, Rām Rām Rām Rām"] },

  { id: "1521", content: ["Sāi As Rāmā He Came To Teach Us", "Sāi As Krishnā He Came With Joy", "Sāi As Jesus He Came To Save Us", "And Now He Comes As Love (x2)"] },

  { id: "1522", content: ["Shālom Chāverim (2) Shālom Shālom", "Laihitrāòt (2) Shālom Shālom", "Glad Tidings We Bring Of Peace On Earth", "Goodwill Towards Man (x2)"] },

  { id: "1523", content: ["Shālom Ālleluiā", "Ālleluiā Ālā", "Shri Rām Jai Rām Jai Jai Rām", "Shri Rām Jai Rām Jai Sāi Rām"] },

  { id: "1524", content: ["Swāgatam (2) Shri Sathya Sāi Swāgatam", "You Are Our Lord You Are Our Swāmi", "You Are Our Bābā Antaryāmi", "Come O My Lord O Come To Me", "* Deep In My Heart A Light Is Burning", "Deep In My Soul I Feel A Yearning", "Come O My Lord O Come To Me"] },

  { id: "1525", content: ["Take My Hand Dear Sāi Sathya Sāi", "Take My Hand And Walk Me", "Through This Land", "Take My Hand Dear Sāi Sathya Sāi", "Take My Hand And Walk Me", "Through This Land", "Take My Heart My Lord Sathya Sāi", "Take My Life And Fill It With Your Love", "Let The Love In Me Be Love Divine", "Walk With Me My Lord Your Hand In Mine", "Sāi Rām Rām Sāi Rām (2)"] },

  { id: "1526", content: ["There Are Many Races In This Land", "In Different Homes We Pray", "We Call Him By Different Names", "The One Who Shows The Way", "The One Who Shows The Way My Lord", "By What Name Can We Pray", "Krishna Buddha Jesus Allāh", "Come And Show The Way", "Your Children Here Do Pray", "Please Come And Show The Way"] },

  { id: "1527", content: ["To Stand Alone You Give Me Strength", "Your Love Means More Than Any Wealth", "My Confused Mind You Made So Clear", "Wiped Every Tear Taught Me Not To Fear", "Oh Sāi Lord, I’m Grateful For The Love", "And Grace That You Bestow (x2)", "You Give Me Comfort When I Am Sad", "You Bring Me Hope When Things Seem Bad", "You Always Hear My Every Prayer", "Somehow I Know For Me You Care", "I’ll Face The World Afraid No More", "Oh Sāi Lord I Love You So (x2)"] },

  { id: "1528", content: ["We Are Blessed (3)", "Sāi Bābā Is Watching Over Us", "We Are Here To Sing Your Sweet Name", "Let The Light Of Your Love Shine On Us", "Bless Us All With Your Presence Gurudev", "We Are Blessed (3)", "No More Tears, No More Sorrows,", "No More Death", "Banish The Darkness With Your Love – Sāi", "We Are Born In The Golden Age Of Sāi", "We Are Blessed (3)", "We Are Born In The Golden Age Of Sāi", "We Receive The Love Divine", "We Are Born In The Golden Age Of Sāi", "We Are Blessed (3)"] },

  { id: "1529", content: ["We Are Brothers And Sisters All In One God", "Peace And Love Is What We Seek", "In The Good Lord", "We May Call And Worship God", "By Many Names", "But The God Of All Names Is Just The Same", "God Has Come In Life For Us To Purify", "Came As Rāmā, Krishnā, Buddhā,", "Jesus, Shirdi Sāi", "Hail To Rāmā Hail To Krishnā", "Hail To Buddhā And Hail To Jesus", "Hail To Shirdi And Sathya Sāi", "Hail To All These", "Loving Divine Teachers"] },

  { id: "1530", content: ["Chantons L’Amour Chantons La Joie", "Chantons La Paix Chantons Sāi", "Le Christ Est Avec Nous", "Venez Vous Rechauffer", "Sāi Est Avec Nous Venez Vous Consoler", "Venez Venez Il Est L’Ami,", "Venez Venez Il Est La Vie (x2)"] },

  { id: "1531", content: ["Mon Coeur T’appelle La Nuit Et Le Jour", "De Colline En Colline Mes Yeux Te Cherchent", "Pourquoi Ne M’apparais-Tu Pas Seigneur", "Dans Le Silence De La Nuit Seigneur", "Je T’aime Plus Que Jamais Seigneur", "O Viens Vers Moi Seigneur (x2)"] },

  { id: "1532", content: ["Seigneur Toi Qui Es Notre Sauveur", "Toi Qui Es Notre Lumiere", "Toi Qui Es Dans Notre Coeur", "Toi Donc La Bonté Inonde", "Toi Qui Aime Tout Le Monde", "Ecoutes Ma Prière Seigneur", "Ne Desertes Pas Mon Coeur", "Fais De Moi Ton Serviteur"] },

  { id: "1533", content: ["Viens Dans Mon Coeur Seigneur", "Ton Nom Y Est Inscrit", "Donnes Moi L’Amour Donnes Moi La Paix", "Viens Dans Mon Coeur Seigneur", "Chaque Jour Je Ne Prie Que Toi", "Chaque Jour Je Ne Pense Qu’à Toi", "Donnes Moi La Vie Donnes Moi L’espoir", "Viens Dans Mon Coeur Seigneur"] },

  { id: "1600", content: ["Allāh (3) Ishwara Rām", "Maulāh (3) Sāi Nām", "Allāh Yeshu Buddha Mahāveer", "Gautam Guru Govindaji Nānaka", "Prashānti Sāi Sab Kā Mālik", "Allāh Ho Sāi Maulāh Ho Sāi"] },

  { id: "1601", content: ["Allāh Allāh Karo Phukār", "Sathya Sāi Ki Jaijaikār", "Yeshu Pitā Ki Jaijaikār", "Mahāveer Ki Jaijaikār", "Zorāshtra Ki Jaijaikār", "Sarva Dharma Ki Jaijaikār"] },

  { id: "1602", content: ["Allāh Allāh Sāi Bābā", "Yeshu Masihā Sāi Bābā", "* Nānaka Shri Buddha Sāi Bābā", "Zorāshtra Mahāveer Sāi Bābā"] },

  { id: "1603", content: ["Allāh Bhajo Maulāh Bhajo", "Hey Allāh Sāi Bhagavān", "Sāi Rām Bhajo Sāi Krishna Bhajo", "Hey Rām Krishna Bhagavān", "Nānaka Bhajo Gautam Bhajo", "Hey Buddha Sāi Bhagavān", "Yeshu Bhajo Zorāshtra Bhajo", "Hey Mahāveer Bhagavān", "Sāi Bhajo Shirdi Sāi Bhajo", "Hey Shirdi Sāi Bhagavān", "Sathya Bhajo Sathya Sāi Bhajo", "Hey Sathya Sāi Bhagavān"] },

  { id: "1604", content: ["Allāh Ho Akhbar (2) Allāh Bhi Tum Ho", "Rām Rām Sāi Krishna Krishna Sāi", "Sāi Rām Tum Ho", "Rām Rahim Tum Ho Krishna Karim Tum Ho", "Buddha Zorāshtra Yeshu Prabhu", "Guru Nānak Bhi Tum Ho", "Sarva Dharma Priya Shānti Pradāyaka", "Sathya Sāi Tum Ho"] },

  { id: "1605", content: ["Allāh Ho Akhbar (3)", "Yeshu Pitā Prabhu Allāh Ho Akhbar", "Shirdi Sāi Parthi Sāi Tum Ho", "Guru Nānak Bhi Tum Ho", "Zorāshtra Mahāveer Tum Ho", "Yeshu Pitā Prabhu Tum Ho", "Sāi Allāh Ho Akhbar Tum Ho"] },

  { id: "1606", content: ["Allāh Ho Akhbar (2) Sāi Teré Nām", "Allāh Teré Nām Maulāh Teré Nām", "Buddha Zorāshtra Yeshu Mahāveer", "Sab Hein Sāi Bhagavān", "Allāh Ho (3) Akhbar", "Buddha Zorāshtra Yeshu Mahāveer", "Sab Hein Sāi Bhagavān", "Allāh Teré Nām Maulāh Teré Nām"] },

  { id: "1607", content: ["Allāh Ho (3) Akhbar, Salāmallaikum (3) Salām", "Buddha Zorāshtra Yeshu Mahāveera", "Nānakaji Ki Jai Jai Gāo", "Sāi Nātha Ki Jai Jai Gāo", "Salāmallaikum (3) Salām"] },

  { id: "1608", content: ["Allāh Is Compassionate, Love He Radiates", "Allāh He Is Merciful, He Is Full Of Grace", "Alham Dullilāh Alham Dullilāh", "Praise Be To God Alham Dullilāh", "Allāh Ho Akhbar Allāh Ho Akhbar", "God Is Great God Is Great", "Allāh Ho Akhbar"] },

  { id: "1609", content: ["Allāh Ishwara Ek Hi Nām", "Bhajoré Manwā Bābā Nām", "* Allāh Bolo Ishwara Bolo Bolo Sāi Rām", "Nānaka Bolo Yeshu Bolo Bolo Sāi Rām", "Gautam Buddha Mahāveera Bolo Bolo Sāi Rām", "Bolo Sāi Rām Bolo Bolo Sāi Rām"] },

  { id: "1610", content: ["Allāh Ishwara Ek Hi Nām", "Sab Mil Bolo Hari Kā Nāma", "Rām Rahim Yeshu Sāi Nām", "Buddha Zorāshtra Mahāveer Nām", "Ek Omkār Bolo Jai Satya Nām", "Vāhé Guru (2) Nānaka Nām"] },

  { id: "1611", content: ["Allāh Ishwara Sāi Bābā", "Sab Dharmon Ké Tum Ho Vidhātā", "Sāi Maheshā Sāi Nārāyana", "Nānaka Yeshu Buddhā Mahāveera", "Rām Rahim Krishna Karim", "Sarva Dharma Priya Sāi Shankara", "Yuga Avatārā Sāi Haré"] },

  { id: "1612", content: ["Allāh Kaho Yā Maulāh Kaho", "Sab Kā Mālik Ek Sab Kā Mālik Ek", "Rām Krishna Rahmān", "Yeshu Buddha Ghanashyām", "Zorāshtra Mahāveer Tu Jagannātha Prabhu Tu", "Sab Kā Mālik Ek Sab Kā Mālik Ek"] },

  { id: "1613", content: ["Allāh Nām Teré Nām", "Sāi Nām Eka Hi Nām", "Yeshu Nānak Bābā Nām", "Buddha Mahāveera Sāi Nām (x2)", "Sāi Nām Eka Hi Nām"] },

  { id: "1614", content: ["Allāh Sāi Bolo Sāishwara Bolo", "Mandira Mé Vo Masjida Mé Vo", "Sāi Nām Sab Bhakton Sukhadāyi", "Allāh Nām Sadā Bhajoré Bhāyi", "Sab Bhakton Ké Priya Avatār Tu", "Sab Prāniyon Ké Jeevan Sahārā Tu"] },

  { id: "1615", content: ["Allāh Sāi Maulāh Sāi", "Satguru Sāi Antaryāmi", "Nānak Sāi Prema Sāi", "Yeshu Sāi Karunā Sāgara", "Sarva Dharma Priya Sathya Sāi"] },

  { id: "1616", content: ["Allāh Sāi Sunlé Meri Phukār", "Sunlé Meri Phukār Sunlé Meri Phukār", "Sarva Dharma Priya Sāi Nātha", "* Koyi Bolé Allāh Khudā", "Koyi Bolé Yeshu Pitā (x2)", "Sarva Dharma Priya Sāi Nātha"] },

  { id: "1617", content: ["Allāh Teré Kitné Pyāré Nām", "Allāh Teré Kitné Pyāré Nām", "Kitné Pyāré Nām", "Koyi Kahé Allāh Koyi Kahé Khudā", "Allāh Sāi Ek Hi Hai Aneka Teré Nām", "* Koyi Phukāré Tum Ko Rahim", "Koyi Phukaré Tum Ko Karim", "Koyi Kahé Tujhé Noor Muhammad", "Koyi Kahé Tujhé Khudā", "Allāh Sāi Ek Hi Hai Aneka Teré Nām"] },

  { id: "1618", content: ["Allāh Tero Nām Sāi Ishwar Tero Nām", "Yeshu Pitā Guru Nānaka Tum Ho", "Sab Kā Mālika Ek Hai Sāi"] },

  { id: "1619", content: ["Allāh Tum Ho Ishwara Tum Ho", "Tum Hi Ho Rām Rahim", "Tum Hi Ho Krishna Karim", "Yeshu Tum Ho Nānak Tum Ho", "Zorāshtra Bhi Ho Mahāveera Tum Ho", "Gautam Buddha Karim", "Meré Rām (2) Rām Rahim (x3)", "Meré Rām (2) Sathya Sāi Rām"] },

  { id: "1620", content: ["Allāh Tum Ishwara Bhi Tum", "Mahāveer Nānak Rām", "Parthisha Sāi Shankarā", "Tum Hi Ho Meré Shyāma", "* Zorāshtra Yeshu Buddha Tum Ho", "Sab Ké Pālanhār", "Satchidānanda Sāi Terā", "Brindāvana Shubha Dhām"] },

  { id: "1621", content: ["Antaryāmi Sab Kā Ek", "Ātmā Ek Paramātmā Ek", "Hindu Ho Yā Musalmān Parsee Isāyi Chini", "Sab Mé Basā Hai Bhagavān", "Sab Dharmon Ké Sāi Rām"] },

  { id: "1622", content: ["Āo Āo Jaga Mangala Dātā", "Shirdipurishwara Rām", "Parthipurishwara Rām", "Allāh Yeshu Nānaka Mahāveer", "Buddha Zorāshtra Sab Tum Ho", "Sāi Antarjyoti Jalāo Rām", "Mana Mandira Mé Tu Antaryāmi", "Sab Dukha Bhanjana Rām Pāpa Mitāo Shyām"] },

  { id: "1623", content: ["Berā Pār Karo Meré Sāi", "Uddhār Karo Meré Bābā", "* Allāh Ishwar Sāi Bābā", "Shirdi Bābā Parthi Bābā", "Raham Nazar Karo Sāi Bābā", "Dayā Karo Sāi Kripā Karo"] },

  { id: "1624", content: ["Bhajoré Mānasa Sāi Rām", "Parthipuri Ké Sāi Bhagavān", "* Ishwar Allāh Teré Nām", "Yeshu Buddha Bhi Teré Nām", "Shirdipuri Ké Sāi Bhagavān", "Parthipuri Ké Sāi Bhagavān"] },

  { id: "1625", content: ["Bhavasāgara Se Pār Utāro", "Sāi Nātha Bhagavān", "Allāh Yeshu Buddha Mahāveera", "Sab Nāmon Ki Eka Hai Mahimā", "Sarva Dharma Ké Pālanahāré", "Sāi Nātha Bhagavān"] },

  { id: "1626", content: ["Bhuvana Bāndhava Sāi Bhagavān", "Mātā Pitā Bandhu Sakhā Tum Ho Bhagavān", "Ishwar Bhi Tum Ho Allāh Nānaka Tum Ho", "Prabhu Yeshu Tum Ho Mahāveer Tum Ho", "Buddha Deva Tum Ho", "Meré Prāna Nātha Tum Ho", "Sāi Rām Sāi Rām (x2)"] },

  { id: "1627", content: ["Deena Dukhiyon Ké Tārana Kārana", "Tu Hai Ishā Masihā O Sāi Bābā", "* Dharma Uddhārana Bhakta Parāyana", "Ādi Nārāyana Sāi", "Alaka Niranjana Bhava Bhaya Bhanjana", "Parthi Nārāyana Sāi"] },

  { id: "1628", content: ["Eeraivā (7) Nee Vā Eeraivā", "Bhagavān (7) Ā Bhi Jā Bhagavān", "Oh My Lord Sweet Lord Oh My Lord", "Dear Lord Oh My Lord Sweet Lord", "Oh My Lord Come To Me Dear God", "O Seigneur (7) Viens Vers Moi O Seigneur", "Woh Te Choo Chen Choo (3)", "Woh Te Choo Cheng Nee Lai", "Cheng Nee Lai"] },

  { id: "1629", content: ["Ek Mantra Japté Raho Sāi Rām Rām", "Allāh Yeshu Buddha Nānaka Sab Hai Sāi Rām", "Sāi Rām Nām Japo Sāi Rām Rām", "Zorāshtra Mahāveera Sāi Rām Rām", "Mātā Pitā Bandhu Sakhā Sab Hai Sāi Rām", "Sāi Rām Nām Japo Sāi Rām Rām"] },

  { id: "1630", content: ["Govinda Bolo Gopāla Bolo", "Rām Rām Bolo Hari Nām Bolo", "Allāh Mālik Ishā Nānaka", "Zorāshtra Mahāveera Buddha Nām Bolo", "* Yé Nām Sāré Hein Jeevan Sahāré", "Paramānanda Ké Kholté Hein Dwāré", "Jo Nām Chāho Vo Nām Bolo", "Prema Se Bolo Bhāva Se Bolo"] },

  { id: "1631", content: ["Guru Nānakaji Ki Jaijaikār", "Jo Bowé So Howé Nihāl", "Allāh Sāi Lelo Salām", "Maulāh Sāi Lelo Salām", "Salām Salām Lākhon Salām", "Yeshu Pitā Prabhu Sāi Rām", "Buddha Zorāshtra Mahāveera Rām", "Allāh Sāi Lelo Salām", "Maulāh Sāi Lelo Salām", "Salām Salām Lākhon Salām"] },

  { id: "1632", content: ["Guru Om (2) Jai Jai Jaya Guru Om", "Tu Hai Allāh Tu Hai Ishwar", "Sab Ké Rām Guru Om (2)", "* Tu Hai Krishnā Tu Hai Buddhā", "Parama Pitā Guru Om (3)"] },

  { id: "1633", content: ["Haré Murāri Sāi Rām Haré Murāri Rām", "Parama Sumangala Sāi Rām", "Parama Sumangala Rām", "Ishwar Allāh Teré Nām Sab Tum Ho Bhagavān", "Ishwar Allāh Ek Hai Sab Tum Ho Bhagavān", "Parama Sumangala Sāi Rām", "Parama Sumangala Rām"] },

  { id: "1634", content: ["Ishwar Allāh Buddha Yehovā God Is Only One", "Nānak Mahāveer Yeshu Mohammad", "So Said Everyone", "So Says Our Lord, Sathya Sāi Rām", "Love Is The Only Religion Of Man", "Love Is God, God Is Love", "Loving All Beings Is Loving God", "So Says Our Lord, Sathya Sāi Rām"] },

  { id: "1635", content: ["Ishwar Allāh Ek Tum Hi Ho", "Karunā Sindhu Rām", "Deenajanon Ké Jeevana Sahāré", "Bhaktajanon Ké Jeevana Sahāré", "Dayā Karo Bhagavān", "(Sab Par) Kripā Karo Bhagavān", "Karunā Sāgara Dayābhi Rām"] },

  { id: "1636", content: ["Ishwar Allāh Teré Nām Sāi Teré Nām", "Sarva Dharma Priya Sāi Rām Sathya Sāi Rām", "Allāh Sāi Maulāh Sāi", "Yeshu Buddha Sāi Hey Mahāveera Sāi", "Govinda Sāi Gopāla Sāi Nānaka Sāi", "Sarva Dharma Priya Sāi Rām Sathya Sāi Rām"] },

  { id: "1637", content: ["Jagadisha Haré Jaya Ho", "Jagadoddhārā Jaya Jaya Ho", "* Allāh Yeshu Nānaka Sāi", "Antaryāmi Buddha Mahāveera", "Zorāshtra Sarva Dharma Priya Devā", "Prashānti Nivāsā Sathya Sāi Devā", "Jaya Ho Jaya Ho (x2)"] },

  { id: "1638", content: ["Jaya Guru Omkārā", "Satguru Omkārā", "Allāh Tum Ho Ishwara Tum Ho", "Buddha Zorāshtra Mahāveera Tum Ho", "Sab Kā Mālika Bābā Tum Ho", "Parama Guru Sāi Pāvana Tum Ho"] },

  { id: "1639", content: ["Jaya Ho Sāi Rām (2)", "Karunā Sindhu Rām", "Puttaparthipurishwar Rām", "* Tretā Yuga Mé Rām", "Dwāpara Yuga Mé Shyāma", "Rām Tu Hi Rahmān Sāi", "Sab Kā Hai Bhagavān", "Kaliyuga Ké Avatar Puttaparthipurishwara Rām"] },

  { id: "1640", content: ["Karunā Sāgara Prema Swarupā", "Kshāpa Vimochana Rām", "Dukha Bhanjana Shri Rām", "Allāh Ishwara Teré Nām", "Nānaka Yeshu Teré Nām", "Parthipurishwara Deena Dayāgana", "Dukha Bhanjana Shri Rām"] },

  { id: "1641", content: ["Kāshi Mathurā Hai Parthi Mé", "Hai Shirdi Aur Kābā", "Rom Rom Mé Sāi Basé Hein", "Ghar Ghar Mé Sāi Rāmā", "Hindu Karé Pranām Tujhko", "Muslim Karé Salām – Sāi"] },

  { id: "1642", content: ["Koyi Bolé Hari Hari Koyi Bolé Rām Rām", "Koyi Bolé Durgā Kāli Koyi Bolé Sāi Mā", "* Koyi Bolé Nārāyana Allāh Bismillāh", "Koyi Bolé Nānaka Buddha Mahāveerā", "Sādhu Santa Phakira Jāné Sab Hein Tero Nām", "Bol Man Allāh Mālik Bol Man Sāi Rām"] },

  { id: "1643", content: ["Kis Bid Tumhein Phukāroun Bhagavan", "Pyāré Meré Sāi", "Rādhéshyām Ho Seetārām Ho", "Rahiman Ho Yā Rām", "Hindu Ho Yā Muslim Ho Sab Hein Ek Samān", "Meré Bābā Ké Liyé Musalmān Aur Hindu", "Do Nayana Samān", "Rādhéshyām Ho Seetārām Ho", "Rahiman Ho Yā Rām"] },

  { id: "1644", content: ["Mahādevā Maheshwarā Sāi Nārāyanā", "Natanāgarā Dukha Bhanjanā Sāi Nārāyanā", "Karunākarā Akhileshwarā Sāi Nārāyanā", "Allāh Ho Tum Mahāveera Yeshu Sāi Nārāyanā", "Hridayeshwarā Parthishwarā Sāi Nārāyanā"] },

  { id: "1645", content: ["Mānava Sevā Mādhava Sevā", "Sab Bhakton Kā Yehi Sandesh Hai", "* Vo Hi Allāh Vo Hi Ishwara", "Sab Dharmon Kā Pyārā Masihā", "Mandir Mé Bhi Hai Masjida Mé Bhi Hai", "Sab Janon Kā Pyārā Avatārā"] },

  { id: "1646", content: ["Mandir Masjid Aur Gurudwāré", "Sab Hein Teré Dhām", "Sāi Teré Dhām Prashānti Nilaya Dhām", "Rām Kaho Rahmān Kaho Sab Hein Teré Nām", "Ātma Nivāsi Rām Sāi Bhagavān", "Dwārkāmāyi Kābā Kāshi Sab Hein Teré Dhām"] },

  { id: "1647", content: ["Mandira Mé Shyām Vohi Hai", "Masjida Mé Allāh Ho Akhbar", "Ek Prabhu Aneka Nām", "Sab Kā Mālik Ek", "Prema Avatār Yeshu Tum Ho Sāi", "Dharmāvatār Tu Buddha Bhi Ho", "Nānaka Guru Mahāveer Tirthankarā", "Sab Kā Mālik Ek"] },

  { id: "1648", content: ["Mandir Mé Tum Rām Ho Sāi", "Masjida Mé Noor Mohammad", "Gurudwāré Mé Tum Guru Nānak", "Man Mandir Mé Sāi Sāi", "Bolo Rām Eka Hi Nām", "Bolo Rām Eka Hi Nām", "Sab Mil Bolo Sāi Rām"] },

  { id: "1649", content: ["Masjida Mé Tu Noor Mohammad", "Gurudwār Mé Tu Guru Nānak", "Girijāghara Mé Tu Yeshu Krishtu", "Mandira Mé Bhagavān – Mana", "Rām Rahim Tu Krishna Karim", "Zorāshtra Mahāveera Tirthankarā", "Sāi Rām Bhagavān (x2)", "Sāi Rām Rām Rām Bhagavān"] },

  { id: "1650", content: ["Mātā Pitā Guru Bandhu Sakhā Hari", "Nārāyanā Hari Nārāyanā (x2)", "Allāh Tum Ho Yeshu Tum Ho", "Buddha Zorāshtra Mahāveera Tum Ho", "Sab Kā Mālika Ek Hai Bhagavan", "Nārāyanā Hari Nārāyanā"] },

  { id: "1651", content: ["Mero Mana Sāi Binā Nahin Lāgé", "Sāi Binā Mero Mana Nahin Lāgé", "Prabhu Parameshwara Ishā Masihā", "Ishā Masihā Ishā Masihā", "Prabhu Parameshwara Ishā Masihā", "Guru Nānaka Ki Eka Hi Mahimā", "Allāh Nām Ki Eka Hi Mahimā", "Mahāveera Ki Eka Hi Mahimā", "Mero Mana Sāi Binā Nahin Lāgé", "Sab Santon Ki Eka Hi Mahimā – 3"] },

  { id: "1652", content: ["Mujh Pé Dayā Karo Sāi Bābā", "Hari Kripā Karo Bābā", "Rām Kaho Yā Allāh Kaho", "Krishna Kaho Yā Yeshu Kaho", "Zorāshtra Kaho Mahāveer Kaho", "Buddha Kaho Sathya Sāi Kaho"] },

  { id: "1653", content: ["Namo Bhagavaté Vāsudevāya", "Namo Bhagavaté Rām Rupāya", "Namo Bhagavaté Shyāma Rupāya", "* Rām Rahim Krishna Karim", "Yeshu Buddha Mahāveera", "Sarva Dharma Priya Sāi Devāya (x2)"] },

  { id: "1654", content: ["O Meré Rām Meré Rām Satguru Rām Sāi Rām", "Tu Hi Allāh Tu Hi Yeshu", "Tu Hi Nānaka Tu Zorāshtra", "Tu Hi Buddha Sab Kā Mālika", "Lelo Lelo Meré Pranām (x3)"] },

  { id: "1655", content: ["Pār Karo Uddhār Karo", "Prabhu Parthipuri Bhagavān", "Haré Rām Rām Rām", "Ghanashyām Shyām Shyām", "Hey Sāi Nātha Bhagavān", "Deena Dayākara Karunā Murti", "Kaliyuga Avatāra Sāi Bhagavān", "Allāh Sāi Buddha Zorāshtra", "Yeshu Krishtu Bhagavān"] },

  { id: "1657", content: ["Parthi Vihārā Pāpa Vidurā", "Pāvana Charanā Sāi Nārāyanā", "Allāh Tum Ho Yeshu Tum Ho", "Sab Kā Mālika Sāi Tum Ho", "Buddha Zorāshtra Nānaka Tum Ho", "Tum Ho Bābā Antaryāmi", "Sab Dharmon Ké Pālanhāré", "Kaliyuga Avatārā Sāi Nārāyana"] },

  { id: "1656", content: ["Parthishwara Shri Sāi Prabho", "Eeshwarāmbā Nandana Sāi Prabho", "* Ishwara Allāh Shri Sāi Rām Nām", "Buddha Zorāshtrā Sāi Krishna Nām", "Mādhava Mohana Sāi Nārāyana", "Premāvatārā Prabhu Sāi Rāmā"] },

  { id: "1658", content: ["Pranām Pranām Bābā", "Salām Salām Sāi", "Namo Namo Sāi", "* Ishwara Allāh Yeshu Pitā Prabhu", "Buddha Mahāveer Tum Hi Ho Sāi", "Sarva Dharmon Ké Mālik Sāi", "Bhaktajanon Ké Jeevana Sāi"] },

  { id: "1659", content: ["Pranām Swikāra Karo Sāi Mahādevā", "Sāi Mahādevā Sāi Mahādevā", "* Allāh Ishwara Yeshu Sāi", "Buddha Mahāveer Nānaka Sāi", "Natana Sutradhāri Jagannātha Sāi", "Sāi Mahādevā Sāi Mahādevā"] },

  { id: "1660", content: ["Prema Ishwara Hai Ishwara Prema Hai", "Ishwara Prema Hai, Prema Ishwara Hai", "Har Dharkan Mé Sāi Samā Hai", "Ishwara Prema Hai", "* Rām Rahim Buddha Karim", "Zorāshtra Yeshu Nānaka", "Koyi Bhi Nāma Japoré Manwā", "Ishwara Prema Hai"] },

  { id: "1661", content: ["Purna Brahma Avatārā Sāi", "Sakala Jagata Ādhārā Sāi", "* Allāh Yeshu Bābā Sāi", "Buddha Mahāveer Nānak Sāi", "Sab Bhakton Ké Bābā Sāi", "Sarva Dharma Avatārā Sāi"] },

  { id: "1662", content: ["Rahiman Rahiman Rām Rahim", "Rām Rahim Sāi Krishna Karim (x2)", "Buddha Zorāshtra Nānak Sāi", "Yeshu Pitā Prabhu Sāi Tum Ho", "Bhajoré Manwā Rām Rahim", "Sāi Rām Sāi Shyām Krishna Karim"] },

  { id: "1663", content: ["Rām Bolo Rahim Bolo", "Nānaka Bolo Buddha Sāi Bolo", "* Yeshu Bolo Zorāshtra Bolo", "Mahāveera Bolo Maheshwara Bolo", "Prema Se Bolo Bhāva Se Bolo"] },

  { id: "1664", content: ["Rām Haré Sāi Krishna Haré", "Sarva Dharma Priya Sāi Haré", "Allāh Ishwara Sāi Haré", "Nānaka Yeshu Buddha Haré", "Zorāshtra Mahāveer Sāi Haré", "Sarva Dharma Priya Sāi Haré"] },

  { id: "1665", content: ["Rām Haré Sāi Krishna Haré", "Sarva Dharma Priyé Sāi Haré (x2)", "* Ishwara Allāh Sāi Haré", "Nānaka Yeshu Buddha Haré", "Zorāshtra Mahāveer Sāi Haré", "Jai Sarva Dharma Priyé Sāi Haré"] },

  { id: "1666", content: ["Rām Hari Hari Nām Bolo", "Hari Nām Bolo Sāi Nām Bolo", "* Sāi Rāmā Parama Dayālā", "Parama Dayālā Parama Kripālā", "Mana Mandira Mé Kiyā Ujālā", "Allāh Sāi Bolo Maulāh Sāi Bolo (x3)"] },

  { id: "1667", content: ["Rām Kaho Krishna Kaho", "Ishwara Allāh Sāi Kaho", "Buddha Kaho Guru Nānak Kaho", "Zorāshtra Mahāveera Yeshu Kaho", "* Yugavatāra Tum Ho Sakala Vishwa Tum Ho", "Sarva Dharma Priya Sāi Maheshā", "Parabrahma Tum Ho"] },

  { id: "1668", content: ["Rām Kaho Sāi Rām Kaho", "Shyāma Kaho Ghanashyāma Kaho", "Yeshu Kaho Zorāshtra Kaho", "Jag Kā Vidhātā Sāi Kaho", "Mandir Mé Kabhi Masjida Mé", "Apnā Hridaya Mé Sāi Bhagavān"] },

  { id: "1669", content: ["Rām Krishna Prabhu Tu Hey Rām Hey Rām", "Sāi Krishna Prabhu Tu Sāi Rām Sāi Rām", "Yeshu Pitā Prabhu Tu Hey Rām Hey Rām", "Allāh Ishwara Tu Allāh Ho Akhbar", "Shirdi Sāi Prabhu Tu Sāi Rām Sāi Rām", "Sathya Sāi Prabhu Tu Sāi Rām Sāi Rām"] },

  { id: "1670", content: ["Rām Rahim Ko Bhajanéwālé Teré Poojāri Bābā", "Terā Nāma Ek Sahārā (x2)", "Sāi Nāma Ek Sahārā", "Tum Hi Ho Geetā Tum Hi Rāmāyana", "Tum Hi Ho Veda Purāna", "Terā Nāma Ek Sahārā (x2)", "Sāi Nāma Ek Sahārā", "Satya Dharma Ki Jyoti Jalāné Āyé Parthi Vihāri", "Terā Nāma Ek Sahārā (x2)", "Sāi Nāma Ek Sahārā"] },

  { id: "1671", content: ["Rām Rahim (2) Bhajoré Manwā Rām Rahim", "Dwārakamāyi Rām Rahim", "Sarva Dharma Priya Sāi Rahim", "Parthipuri Mé Janam Liyā", "Prabhu Paramātmā Sāi Rahim"] },

  { id: "1672", content: ["Rām (4) (x2)", "Rām Nām Sukha Ko Dhāma (x2)", "* Buddha Nām Shānti Dhāma", "Isā Nām Prema Dhāma (x2)", "* Mohammad Nām Dharma Dhāma", "Sāi Nām Satya Dhāma"] },

  { id: "1673", content: ["Rām (3) Sāi Rām Namo", "Krishna (3) Sāi Krishnā Namo", "Yeshu (3) Sāi Yeshu Namo", "Buddha (3) Sāi Buddha Namo", "* Allāh (3) Sāi Allāh Namo", "Zorāshtra (2) Sāi Namo", "Mahāveer (2) Sāi Namo", "Guru Nānak (2) Nānak Namo"] },

  { id: "1674", content: ["Sab Kā Mālika Sāi Haré", "Sab Dharmon Ké Sāi Haré", "* Ishwara Allāh Sāi Haré", "Yeshu Mahāveera Sāi Haré", "Buddha Zorāshtra Sāi Haré", "Satguru Nānaka Sāi Haré", "Satya Dharma Prema Sāi Haré", "Sarva Rupa Sathya Sāi Haré"] },

  { id: "1675", content: ["Sāi Bābā Pranām", "Shirdi Bābā Pranām", "O Meré Ātmā Rām", "Lelo Meré Pranām", "Allāh Ishwara Rām", "Sab Ké Ghar Sāi Rām", "Purana Karo Meré Kām", "Parama Shānti Priya Rām", "Sarva Dharma Priya Rām (x2)"] },

  { id: "1676", content: ["Sāi Bābā Sāi Bābā Japté Raho Sāi Nām", "Allāh Sāi Maulāh Sāi Leté Raho Sāi Nām", "Sab Hai Sāi Kā Nām", "* Yeshu Nānak Buddha Sāi Zorāshtra Mahāveer", "Sab Ké Hein Sāi Nām"] },

  { id: "1677", content: ["Sāi Bābā Terā Nām Sathya Sāi Bābā Terā Nām", "Tu Hi Brahmā Tu Hi Vishnu", "Tu Hi Nānaka Tu Hi Yeshu", "Tu Hi Buddhā Tu Zorāshtrā", "Tu Hi Allāh Tu Mahāveer", "Sab Hein Sāi Bhagavān (x2)", "Sāi Rām (2) Sāi Bābā Terā Nām", "Allāh Sāi Tero Nām Maulāh Sāi Tero Nām", "Nānak Sāi Terā Nām Yeshu Sāi Terā Nām", "Sāi Bābā Terā Nām (2)"] },

  { id: "1678", content: ["Sāi Brahmā Sāi Vishnu Sāi Pārvati Shankara", "Sāi Rām Sāi Shyām Sāi Lakshmi Nārāyan", "Tu Allāh Tu Maulāh Tu Buddhā Tu Mahāveer", "Tu Hi Mandir Tu Hi Masjid", "Tu Hi Girijā Tum Sab Ho"] },

  { id: "1679", content: ["Sāi Devā Satya Swarupā Tum Ho Meré Bābā", "O Meré Sāi Bābā", "Sab Dharmon Kā Nāthā", "Parthi Vāsā Sāi Devā", "Sharanam Sharanam Devā (x2)", "Ishwar Hi Tum Allāh Tum", "Mahaveera Nānak Tum Ho", "Sab Hi Tum Ho Devā Meré Sāi Bābā", "Parthi Vāsā Sāi Devā", "Sharanam Sharanam Devā (x2)"] },

  { id: "1680", content: ["Sāi Hamārā Ham Sāi Ké Aisā Prema Hamārā", "Sāi Rām Hamārā (2)", "Sathya Sāi Hai Nām Tumhārā Shirdi Sāi Avatārā", "Hindu Muslim Sikha Isāyi Sab Kā Pālanahārā", "Sāi Rām Hamārā (2)"] },

  { id: "1681", content: ["Sāi Japo (2) Japo Sāi Nām Ré", "Sāi Japo (2) Japo Sāi Rām Ré", "Sāi Japo (2) Japo Sāi Nām Ré", "Japoré Japo Sāi Japo Japo Sāi Rām Ré", "Rām Japo (2) Japo Seetārām Ré", "Shyāma Japo (2) Japo Rādhéshyāma Ré", "* Har Pal Subah Shām Japo Sāi Rām Ré", "Allāh Japo Maulāh Japo Japo Jhalārām Ré", "Yeshu Buddha Mahāveer Sab Hai Sāi Nām Ré"] },

  { id: "1682", content: ["Sāi Nām Bolo Govinda Nām Bolo", "Mahādeva Bolo Jai Pānduranga Bolo", "* Rām Krishna Bolo Jai Buddha Sāi Bolo", "Zorāshtra Mahāveera Yeshu Sāi Bolo", "Allāh Sāi Bolo Maulāh Sāi Bolo", "Prema Sāi Shāntidāyi Sathya Sāi Bolo"] },

  { id: "1683", content: ["Sāi Nām Bolo Sathya Sāi Nām Bolo", "Sāi Mādhavā Sāi Keshavā", "Shri Hari Nām Bolo", "Allāh Ishwar Ishā Masihā", "Buddha Mahāveer Nām", "Sāi Mādhavā Sāi Keshavā", "Shri Hari Nām Bolo"] },

  { id: "1684", content: ["Sāi Nātha Bhagavān (2)", "Satyam Shivam Sundaram", "Sāi Nātha Bhagavān", "* Buddham Sharanam Gachchāmi", "Dharmam Sharanam Gachchāmi", "Sangham Sharanam Gachchāmi", "Sāisha Sharanam Gachchāmi - Sathya"] },

  { id: "1685", content: ["Sāi Rām Rahim Rahim", "Sāi Krishna Karim Karim", "Bhaja Mana Rām Rahim Rahim", "Govinda Krishna Karim Karim", "Bhaja Mana Rām Rahim Rahim"] },

  { id: "1686", content: ["Sāi Rām (2)", "Sāi Rām Jaya Sāi Rām", "Parthipurishwara Sāi Rām", "* Raghupati Rāghava Rājā Rām", "Patita Pāvana Seetā Rām", "Ishwara Allāh Teré Nām", "Sab Ko Sanmati Do Bhagavān"] },

  { id: "1687", content: ["Salāmallaikum (2) Salām Sāi", "Salāmallaikum Salāmallaikum Salām", "Allāh Ho (2) Akhbar Sāi Allāh Ho", "Allāh Ho Akhbar", "Buddha Zorāshtra Yeshu Mahāveer", "Sāi Sarva Dharma Priya Sāi Devā", "Salāmallaikum (2) Salām Sāi", "Salāmallaikum Salāmallaikum Salām", "Salāmallaikum Salāmallaikum"] },

  { id: "1688", content: ["Sarva Dharma Priya Devā", "Sathya Sāi Devā", "Allāh Ishwara Buddha Aur Nānaka", "Zorāshtra Mahāveer Tum Ho", "Rām Hi Tum Ho Krishna Hi Tum Ho", "Vishwa Rupa Tum Ho (x2)"] },

  { id: "1689", content: ["Sarva Dharma Swarupa Sāi", "Parthi Ké Avatārā", "Meré Bābā Meré Sāi", "Sāi Rām (4)", "Hindu Muslim Isāyi Āté Hein Teré Dwāré", "Milté Hein Teré Dwāré", "Sāi Rām (4)"] },

  { id: "1690", content: ["Sarva Matha Priya Sāi", "Sarva Jana Priya Sāi", "Shāshthānga Namaskār Sāi", "Kshata Koti Namaskār Sāi", "Ishwar Allāh Sāi", "Yeshu Buddha Sathya Sāi", "Zorāshtra Mahāveera Sāi", "Shāshthānga Namaskār Sāi", "Kshata Koti Namaskār Sāi"] },

  { id: "1691", content: ["Satnām (3) Bol, Vāhé Guru (3) Bol", "Satnām Bol Man Vāhé Guru Bol", "Man Mé Sāi Kā Ras Bhardo", "* Satnām Bol Vāhé Guru Bol", "Satnām (3) Bol, Satnām (3) Bol", "Sāi Meré Man Ki Ānkhein Khol - Bābā", "Āj Jagādé Jeevan Ki Jyot"] },

  { id: "1692", content: ["Satya Dharma Shānti Prema Swarupā", "Prashānti Nilaya Devā", "Tum Rāmā Ho Krishnā Ho Sāi Rām Devā", "Shiva Shakti Swarupā Bābā", "Hey Deena Pālanā Bābā", "Hey Prashānti Nilaya Bābā", "Hey Purnāvatāra Bābā", "Tum Allāh Ho Maulāh Ho Sāi Rām Devā"] },

  { id: "1693", content: ["Shirdi Sāi Dwārakāmāyi", "Prashānti Vāsā Sāi Rām", "Sāi Rām (2) Eka Hi Nām Sundara Nām", "Allāh Ishwara Sāi Rām", "Parthipuri Ké Hey Bhagavān", "Dayānidhé Kripānidhé Satya Swarupa Sāi Rām", "Sāi Rām (2) Eka Hi Nām Sundara Nām"] },

  { id: "1694", content: ["Shri Guru Parthi Vāsā", "Sāi Brahma Vishnu Maheshā", "* Allāh Bhi Tum Ho Maulāh Bhi Tum Ho", "Zorāshtra Mahāveera Yeshu Bhi Tum Ho", "Rām Rahim Ho Krishna Karim Ho"] },

  { id: "1695", content: ["Tuhi Allāh Ho Akhbar Tuhi Yeshu Sāi Shankara", "Tuhi Rām Rahim Tuhi Krishna Karim", "Tuhi Buddhā Tuhi Vishnu", "Tuhi Chidānanda Hari", "Tuhi Rām - Raghupati Rāghava Rājā Rām", "Patita Pāvana Seetā Rām", "Tuhi Buddhā - Buddham Sharanam Gachchāmi", "Tuhi Allāh - Allāh O Akhbar Allāh O Akhbar"] },

  { id: "1696", content: ["Tu Hi Allāh Sāi Tu Hi Maulāh", "Sab Dharmon Ké Bhagavān", "Dhanya Ho Yeshu Sāi", "Dhanya Ho Hey Buddha Sāi", "Mahāveer Tum Ho Bābā Sāi", "Zorāshtra Sāi Kripā Karo", "Ishwar Sāi Rakshā Karo"] },

  { id: "1697", content: ["Tum Āyé Masihā Banké Kaliyuga Mé Sāi Rāmā", "Tum Rām Krishna Ho Yeshu Krishna Ho", "Tum Ho Yuga Avatārā", "Tum Sāi Bhakton Ki Masihā", "Tum Sāré Jagat Ki Masihā", "Tum Rām Krishna Tum Sāi Krishna Ho", "Tum Ho Yuga Avatārā"] },

  { id: "1698", content: ["Tum Bina Prāna Nahin O Sāi Meré", "Sab Bhakton Kā Tu Hai Sahārā", "Rahim Kaho Raghurām Kaho", "* Nānaka Yeshu Mahāveer Shri", "Shankara Premāvatāra Sāi Rām", "Tum Ho Meré Prān O Sāi Meré", "Tu Hai Sāi Bhagavān (x2)"] },

  { id: "1699", content: ["Tum Ho Shyām Rām Rahim", "Rām Rahim Shyām Rahim (x2)", "* Allāh Yeshu Buddha Mahāveera", "Nānaka Sāi Zorāshtra Bhi Ho", "Sarva Dharma Priya Sāi Nārāyana", "Sarva Dharma Priya Sāi Shankara"] },

  { id: "1700", content: ["Vāhé Guru (3) Ji Bolo", "Satya Nām (3) Ji Bolo", "Nitya Nitya Japiyé Teré Nām Ji Bolo", "Satya Nām (3) Ji Bolo", "Rām (6) Ji Bolo", "Nitya Nitya Japiyé Rām Nām Ji Bolo", "Krishna (6) Ji Bolo", "Nitya Nitya Japiyé Krishna Nām Ji Bolo", "Govinda Jai Jai Gopāla Jai Jai", "Rādhā Ramana Hari Govinda Jai Jai"] },

  { id: "1701", content: ["Yeshu Masihā Āyé Sarva Loka Jagannāthā", "Allāh Ho Akhbar Allāh Ho", "Sathya Sāi Mahādevā", "Sāi Jagannāthā Shirdi Sāi Jagannāthā", "Zorāshtra Buddha Mahāveer", "Guru Nānaka Jaya Sāi Rām"] },

  { id: "1702", content: ["Yuga Yuga Ké Avatārā Sāi Rāmā", "Sāi Krishnā Sāi Bābā", "Bābā Sāi Bābā, Bābā Sāi Bābā", "Allāh Ishwara Nānaka Sāi", "Buddha Zorāshtra Mahāveera Sāi", "Rām Rahim Jai (3) Rām (x2)"] },

  { id: "1703", content: ["Yuga Yuga Ké Avatārā Tum Hi Ho", "Meré Rām Meré Shyām Shirdi Sāi Parthi Rām", "Jag Ké Pālanhār Tum Hi Ho", "* Allāh Ishwara Teré Nām", "Sab Ko Sanmati Do Bhagavān", "Allāh Ishwar Teré Nām Shirdi Sāi Parthi Rām", "Jag Ké Pālanhār Tum Hi Ho"] },
];
export default bhajans;
