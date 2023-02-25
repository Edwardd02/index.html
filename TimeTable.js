const timetableData = {
    'ACCT 2101 (811)': {
        subject: 'Accounting',
        courseCode: 'ACCT 2101 (811)',
        courseName: 'Financial Accounting',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Sigaty, D.',
        crn: '12913',
        gened: '',
        prior: '1',
        specialInfo: ''
    },
    'ACCT 2101 (812)': {
        subject: 'Accounting',
        courseCode: 'ACCT 2101 (812)',
        courseName: 'Financial Accounting',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Ho, M.',
        crn: '12914',
        gened: '',
        prior: '1',
        specialInfo: ''
    },
    'ACCT 2102 (811)': {
        subject: 'Accounting',
        courseCode: 'ACCT 2102 (811)',
        courseName: 'Managerial Accounting',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Sigaty, D.',
        crn: '12915',
        gened: '',
        prior: '2',
        specialInfo: ''
    },
    'ADV 0853 (811)': {
        subject: 'Advertising',
        courseCode: 'ADV 0853 (811)',
        courseName: 'Advertising and Globalization',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Foster, J.',
        crn: '12894',
        gened: 'GG',
        prior: '',
        specialInfo: ''
    },
    'AMST 2217 (811)': {
        subject: 'American Studies',
        courseCode: 'AMST 2217 (811)',
        courseName: 'Vietnam War',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Karsner, D.',
        crn: '13202',
        gened: '',
        prior: '',
        specialInfo: 'CL: HIST 2217 (811), ASST 2217 (811)'
    },
    'ANTH 0817 (811)': {
        subject: 'Anthropology',
        courseCode: 'ANTH 0817 (811)',
        courseName: 'Youth Cultures',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Horiguchi, S.',
        crn: '12833',
        gened: 'GB',
        prior: '1021',
        specialInfo: ''
    },
    'ANTH 2238 (811)': {
        subject: 'Anthropology',
        courseCode: 'ANTH 2238 (811)',
        courseName: 'The Visual Anthropology of Modern Japan',
        credits: '3',
        time: 'MWF 13:40-14:40',
        professor: 'Horiguchi, S.',
        crn: '12834',
        gened: '',
        prior: '238',
        specialInfo: 'CL: ASST 2238 (811).'
    },
    'ANTH 2310 (811)': {
        subject: 'Anthropology',
        courseCode: 'ANTH 2310 (811)',
        courseName: 'Topics in Cultural Anthropology: Diversity in Japan',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Horiguchi, S.',
        crn: '12836',
        gened: '',
        prior: '',
        specialInfo: 'CL: ASST 2000 (811).'
    },
    'ANTH 2373 (750)': {
        subject: 'Anthropology',
        courseCode: 'ANTH 2373 (750)',
        courseName: 'Japanese Culture',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Mock, J.',
        crn: '12744',
        gened: '',
        prior: '253',
        specialInfo: 'CL: ASST 2373 (750).'
    },
    'ANTH 2374 (750)': {
        subject: 'Anthropology',
        courseCode: 'ANTH 2374 (750)',
        courseName: 'The Anthropology of Modern China',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Yamada, N.',
        crn: '13170',
        gened: '',
        prior: '',
        specialInfo: 'CL: ASST 2374 (750)'
    },
    'ARTU 1101 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 1101 (811)',
        courseName: 'Painting for Non-Majors',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Sakurai, K.',
        crn: '12993',
        gened: '',
        prior: 'C079',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 1201 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 1201 (811)',
        courseName: '3-D Design',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Hishiyama, Y.',
        crn: '12963',
        gened: '',
        prior: 'C089',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 1201 (812)': {
        subject: 'Art',
        courseCode: 'ARTU 1201 (812)',
        courseName: '3-D Design',
        credits: '3',
        time: 'TTh 14:20-18:00',
        professor: 'Staff, T.',
        crn: '12964',
        gened: '',
        prior: 'C089',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 1401 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 1401 (811)',
        courseName: 'Drawing I',
        credits: '3',
        time: 'TTh 9:20-13:00',
        professor: 'Rodriguez, A.',
        crn: '12965',
        gened: '',
        prior: 'C069',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 1401 (812)': {
        subject: 'Art',
        courseCode: 'ARTU 1401 (812)',
        courseName: 'Drawing I',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Hishiyama, Y.',
        crn: '12966',
        gened: '',
        prior: 'C069',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 1402 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 1402 (811)',
        courseName: 'Drawing II',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Wilds, K.',
        crn: '12975',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 1402 (812)': {
        subject: 'Art',
        courseCode: 'ARTU 1402 (812)',
        courseName: 'Drawing II',
        credits: '3',
        time: 'TTh 9:20-13:00',
        professor: 'Sakurai, K.',
        crn: '12976',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 1501 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 1501 (811)',
        courseName: '2D Design',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Kubota, T.',
        crn: '12960',
        gened: '',
        prior: 'C059',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 1501 (812)': {
        subject: 'Art',
        courseCode: 'ARTU 1501 (812)',
        courseName: '2D Design',
        credits: '3',
        time: 'TTh 9:20-13:00',
        professor: 'Watanabe, S.',
        crn: '12961',
        gened: '',
        prior: 'C059',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 1501 (813)': {
        subject: 'Art',
        courseCode: 'ARTU 1501 (813)',
        courseName: '2D Design',
        credits: '3',
        time: 'TTh 14:20-18:00',
        professor: 'Staff, T.',
        crn: '12962',
        gened: '',
        prior: 'C059',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2102 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2102 (811)',
        courseName: 'Painting',
        credits: '3',
        time: 'TTh 14:20-18:00',
        professor: 'Kirkham, J.',
        crn: '12977',
        gened: '',
        prior: '118',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2102 (812)': {
        subject: 'Art',
        courseCode: 'ARTU 2102 (812)',
        courseName: 'Painting',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Sakurai, K.',
        crn: '12978',
        gened: '',
        prior: '118',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2102 (813)': {
        subject: 'Art',
        courseCode: 'ARTU 2102 (813)',
        courseName: 'Painting',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Sakurai, K.',
        crn: '12994',
        gened: '',
        prior: '118',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2202 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2202 (811)',
        courseName: 'Intermediate 3-D',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Hishiyama, Y.',
        crn: '13000',
        gened: '',
        prior: '122',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 2301 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2301 (811)',
        courseName: 'Relief Printmaking',
        credits: '3',
        time: 'TTh 18:10-21:50',
        professor: 'Rouse, L.',
        crn: '12972',
        gened: '',
        prior: '131',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2302 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2302 (811)',
        courseName: 'Intermediate Printmaking: Relief',
        credits: '3',
        time: 'TTh 14:20-18:00',
        professor: 'Rouse, L.',
        crn: '12988',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 2341 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2341 (811)',
        courseName: 'Screenprinting',
        credits: '3',
        time: 'TTh 14:20-18:00',
        professor: 'Rouse, L.',
        crn: '12989',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 2351 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2351 (811)',
        courseName: 'Artist Books, Zines and Independent Publishing',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Wilds, K.',
        crn: '12973',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2402 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2402 (811)',
        courseName: 'Intermediate Drawing',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Kubota, T.',
        crn: '13004',
        gened: '',
        prior: '140',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 2601 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2601 (811)',
        courseName: 'Computer Imaging',
        credits: '3',
        time: 'TTh 9:20-13:00',
        professor: 'Staff, T.',
        crn: '12959',
        gened: '',
        prior: '160',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2602 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2602 (811)',
        courseName: 'Intermediate Computer Imaging',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Lynam, I.',
        crn: '12985',
        gened: '',
        prior: '161',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2811 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2811 (811)',
        courseName: 'Art Photography: Digital',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Tsai, P.',
        crn: '12979',
        gened: '',
        prior: '188',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2811 (812)': {
        subject: 'Art',
        courseCode: 'ARTU 2811 (812)',
        courseName: 'Art Photography: Digital',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Watanabe, S.',
        crn: '12980',
        gened: '',
        prior: '188',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 2811 (813)': {
        subject: 'Art',
        courseCode: 'ARTU 2811 (813)',
        courseName: 'Art Photography: Digital',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Watanabe, S.',
        crn: '12981',
        gened: '',
        prior: '188',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 2812 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2812 (811)',
        courseName: 'Intermediate Art Photography: Digital',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Tsai, P.',
        crn: '12983',
        gened: '',
        prior: '189',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 2835 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 2835 (811)',
        courseName: 'Art Photo: Moving Image',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Lynam, I.',
        crn: '12971',
        gened: '',
        prior: '190',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 3000 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 3000 (811)',
        courseName: 'Special Topics: Advanced Artist Books',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Wilds, K.',
        crn: '12974',
        gened: '',
        prior: '',
        specialInfo: 'PR (Minimum grade C-): ARTU 2351 Artist Books, Zines and Independent Publishing. Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 3103 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 3103 (811)',
        courseName: 'Advanced Painting',
        credits: '3',
        time: 'TTh 9:20-13:00',
        professor: 'Kirkham, J.',
        crn: '12995',
        gened: '',
        prior: '119',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 3203 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 3203 (811)',
        courseName: 'Advanced 3-D',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Hishiyama, Y.',
        crn: '13001',
        gened: '',
        prior: '325',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 3303 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 3303 (811)',
        courseName: 'Advanced Printmaking',
        credits: '3',
        time: 'TTh 14:20-18:00',
        professor: 'Rouse, L.',
        crn: '12991',
        gened: '',
        prior: '321',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 3403 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 3403 (811)',
        courseName: 'Advanced Drawing',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Kubota, T.',
        crn: '13005',
        gened: '',
        prior: '143',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 3603 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 3603 (811)',
        courseName: 'Advanced Computer Imaging',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Lynam, I.',
        crn: '12986',
        gened: '',
        prior: '362',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 3813 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 3813 (811)',
        courseName: 'Advanced Art Photography: Digital',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Tsai, P.',
        crn: '12997',
        gened: '',
        prior: '390',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class.'
    },
    'ARTU 4148 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4148 (811)',
        courseName: 'Painting Workshop',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Kubota, T.',
        crn: '13007',
        gened: '',
        prior: '3104',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4149 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4149 (811)',
        courseName: 'Painting Portfolio',
        credits: '3',
        time: 'TTh 9:20-13:00',
        professor: 'Kirkham, J.',
        crn: '12996',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4248 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4248 (811)',
        courseName: '3-D Workshop',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Kubota, T.',
        crn: '13008',
        gened: '',
        prior: '3204',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4249 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4249 (811)',
        courseName: '3-D Portfolio',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Hishiyama, Y.',
        crn: '13002',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4348 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4348 (811)',
        courseName: 'Printmaking Workshop',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Kubota, T.',
        crn: '13009',
        gened: '',
        prior: '323',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4349 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4349 (811)',
        courseName: 'Printmaking Portfolio',
        credits: '3',
        time: 'TTh 14:20-18:00',
        professor: 'Rouse, L.',
        crn: '12992',
        gened: '',
        prior: '324',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4448 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4448 (811)',
        courseName: 'Drawing Workshop',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Kubota, T.',
        crn: '13010',
        gened: '',
        prior: '4405',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4449 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4449 (811)',
        courseName: 'Drawing Portfolio',
        credits: '3',
        time: 'MWF 13:10-15:40',
        professor: 'Kubota, T.',
        crn: '13006',
        gened: '',
        prior: '4406',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4648 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4648 (811)',
        courseName: 'Computer Imaging Workshop',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Kubota, T.',
        crn: '13011',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4649 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4649 (811)',
        courseName: 'Computer Imaging Portfolio',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Lynam, I.',
        crn: '12987',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4796 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4796 (811)',
        courseName: 'Art Seminar',
        credits: '3',
        time: 'MWF 9:20-11:50',
        professor: 'Watanabe, S.',
        crn: '12984',
        gened: 'WI',
        prior: 'W192',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. A proportion of seats in this section are reserved for declared TUJ Art majors. Extra studio time is mandatory in this class. Permission of major coordinator also required.'
    },
    'ARTU 4848 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4848 (811)',
        courseName: 'Art Photography Workshop',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Kubota, T.',
        crn: '13012',
        gened: '',
        prior: '381',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTU 4849 (811)': {
        subject: 'Art',
        courseCode: 'ARTU 4849 (811)',
        courseName: 'Art Photography Portfolio',
        credits: '3',
        time: 'MWF 15:50-18:20',
        professor: 'Tsai, P.',
        crn: '12998',
        gened: '',
        prior: '382',
        specialInfo: 'Notes: An extra program fee of 18,000 yen is required. Extra studio time is mandatory in this class.'
    },
    'ARTH 1103 (811)': {
        subject: 'Art History',
        courseCode: 'ARTH 1103 (811)',
        courseName: 'Introduction to Methods and Theories',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Nettleton, T.',
        crn: '12718',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ARTH 1155 (811)': {
        subject: 'Art History',
        courseCode: 'ARTH 1155 (811)',
        courseName: 'Arts of the World I: Prehistoric to 1300',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Tsuruya, M.',
        crn: '12729',
        gened: '',
        prior: 'C055',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ARTH 2002 (750)': {
        subject: 'Art History',
        courseCode: 'ARTH 2002 (750)',
        courseName: 'History of Modern Crafts',
        credits: '4',
        time: 'Arr',
        professor: 'Morais, L.',
        crn: '12719',
        gened: '',
        prior: '307',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ARTH 2096 (811)': {
        subject: 'Art History',
        courseCode: 'ARTH 2096 (811)',
        courseName: 'Art History Writing Intensive: Eurasia: Connecting European and Asian Art and Culture',
        credits: '4',
        time: 'TTh 16:45-19:45',
        professor: 'Watanabe, S.',
        crn: '12723',
        gened: 'WI',
        prior: '2296',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ARTH 2660 (811)': {
        subject: 'Art History',
        courseCode: 'ARTH 2660 (811)',
        courseName: 'Topics in International Cinema: The Family in Japanese Film from Melodrama to Anime',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Nettleton, T.',
        crn: '12717',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ARTH 2800 (811)': {
        subject: 'Art History',
        courseCode: 'ARTH 2800 (811)',
        courseName: 'Topics in Non-Western Art: Japanese Art Before and After WWII: National Identities in Modernization',
        credits: '4',
        time: 'TTh 11:10-14:10',
        professor: 'Watanabe, S.',
        crn: '12724',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Prior to Summer 2020, this course was titled, “Japanese Art Before and After WWII: From Manga to Performance Art”. The topical content remains the same and is thus not repeatable for credit. Field trips are mandatory in this class.'
    },
    'ARTH 2800 (812)': {
        subject: 'Art History',
        courseCode: 'ARTH 2800 (812)',
        courseName: 'Topics in Non-Western Art: Japanese Graphic Design History',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Lynam, I.',
        crn: '12726',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ARTH 2807 (750)': {
        subject: 'Art History',
        courseCode: 'ARTH 2807 (750)',
        courseName: 'East Meets West',
        credits: '4',
        time: 'TTh 16:45-19:00',
        professor: 'MacDonald, D.',
        crn: '12720',
        gened: '',
        prior: '307',
        specialInfo: 'CL: ASST 2807 (750). Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ARTH 2815 (811)': {
        subject: 'Art History',
        courseCode: 'ARTH 2815 (811)',
        courseName: 'Pre-Modern Japanese Art up to the Edo Period',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Tsuruya, M.',
        crn: '12727',
        gened: '',
        prior: '215',
        specialInfo: 'CL: ASST 2815 (811). Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class. Prior to spring 2017, the course title was “Japanese Art”.'
    },
    'ARTH 3302 (750)': {
        subject: 'Art History',
        courseCode: 'ARTH 3302 (750)',
        courseName: 'Women and Art',
        credits: '3',
        time: 'MWF 17:30-19:00',
        professor: 'MacDonald, D.',
        crn: '12722',
        gened: '',
        prior: '302',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ASST 0811 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 0811 (750)',
        courseName: 'Asian Behavior & Thought',
        credits: '3',
        time: 'MWF 18:00-19:30',
        professor: 'Fujii, S.',
        crn: '12756',
        gened: 'GB',
        prior: '',
        specialInfo: ''
    },
    'ASST 2000 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2000 (811)',
        courseName: 'Special Topics in Asian Studies I: Diversity in Japan',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Horiguchi, S.',
        crn: '12837',
        gened: '',
        prior: '',
        specialInfo: 'CL: ANTH 2310 (811).'
    },
    'ASST 2000 (812)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2000 (812)',
        courseName: 'Special Topics in Asian Studies I: Risk Culture',
        credits: '3',
        time: 'TTh 11:55-14:10',
        professor: 'Cleveland, K.',
        crn: '13223',
        gened: '',
        prior: '',
        specialInfo: 'CL: SOC 2130'
    },
    'ASST 2030 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2030 (750)',
        courseName: 'Special Topics I: Japanese Civil Society: Development & Approaches to Current Issues',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Rossitto, S.',
        crn: '12742',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'ASST 2074 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2074 (750)',
        courseName: 'Geography of East and South Asia',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Mock, J.',
        crn: '12746',
        gened: '',
        prior: '',
        specialInfo: 'CL: GUS 2074 (750).'
    },
    'ASST 2098 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2098 (750)',
        courseName: 'Japanese Popular Culture and Its Literature',
        credits: '3',
        time: 'Arr',
        professor: 'Chozick, M.',
        crn: '12733',
        gened: 'WI',
        prior: 'W224',
        specialInfo: 'Notes: No knowledge of Japanese language expected.'
    },
    'ASST 2098 (751)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2098 (751)',
        courseName: 'Japanese Popular Culture and Its Literature',
        credits: '3',
        time: 'Arr',
        professor: 'Chozick, M.',
        crn: '12734',
        gened: 'WI',
        prior: 'W224',
        specialInfo: 'Notes: No knowledge of Japanese language expected.'
    },
    'ASST 2196 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2196 (750)',
        courseName: 'Writing in the City',
        credits: '3',
        time: 'Arr',
        professor: 'Chozick, M.',
        crn: '12735',
        gened: 'WI',
        prior: '',
        specialInfo: ''
    },
    'ASST 2217 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2217 (811)',
        courseName: 'Vietnam War',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Karsner, D.',
        crn: '13203',
        gened: '',
        prior: '',
        specialInfo: 'CL: HIST 2217 (811), AMST 2217 (811)'
    },
    'ASST 2238 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2238 (811)',
        courseName: 'The Visual Anthropology of Modern Japan',
        credits: '3',
        time: 'MWF 13:40-14:40',
        professor: 'Horiguchi, S.',
        crn: '12835',
        gened: '',
        prior: '338',
        specialInfo: 'CL: ANTH 2238 (811).'
    },
    'ASST 2351 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2351 (811)',
        courseName: 'Japan in a Changing World Order',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Cucek, M.',
        crn: '12827',
        gened: '',
        prior: '244',
        specialInfo: 'CL: POLS 2351 (811).'
    },
    'ASST 2373 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2373 (750)',
        courseName: 'Japanese Culture',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Mock, J.',
        crn: '12745',
        gened: '',
        prior: '253',
        specialInfo: 'CL: ANTH 2373 (750).'
    },
    'ASST 2374 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2374 (750)',
        courseName: 'The Anthropology of Modern China',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Yamada, N.',
        crn: '13172',
        gened: '',
        prior: '',
        specialInfo: 'CL: ANTH 2374 (750)'
    },
    'ASST 2502 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2502 (811)',
        courseName: 'Introduction to East Asia: Japan',
        credits: '3',
        time: 'MWF 13:40-15:10',
        professor: 'Cucek, M.',
        crn: '12823',
        gened: '',
        prior: '116',
        specialInfo: 'CL: HIST 2502 (811).'
    },
    'ASST 2511 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2511 (750)',
        courseName: 'Introduction to Asian Business',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Satterwhite, D.',
        crn: '12907',
        gened: '',
        prior: '104',
        specialInfo: ''
    },
    'ASST 2511 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2511 (811)',
        courseName: 'Introduction to Asian Business',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Zeng, Z.',
        crn: '12906',
        gened: '',
        prior: '104',
        specialInfo: ''
    },
    'ASST 2807 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2807 (750)',
        courseName: 'Art History East & West',
        credits: '4',
        time: 'TTh 16:45-19:00',
        professor: 'MacDonald, D.',
        crn: '12721',
        gened: '',
        prior: '370',
        specialInfo: 'CL: ARTH 2807 (750). Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ASST 2815 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 2815 (811)',
        courseName: 'Japanese Art',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Tsuruya, M.',
        crn: '12728',
        gened: '',
        prior: '270',
        specialInfo: 'CL: ARTH 2815 (811). Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'ASST 3000 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 3000 (811)',
        courseName: 'Special Topics in Asian Studies II: Korean Politics',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Cho, S.',
        crn: '12849',
        gened: '',
        prior: '304',
        specialInfo: 'CL: POLS 3520 (811).'
    },
    'ASST 3030 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 3030 (811)',
        courseName: 'Special Topics III: Chinese Foreign Policy',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Cho, S.',
        crn: '12845',
        gened: '',
        prior: '',
        specialInfo: 'CL: POLS 4310 (811).'
    },
    'ASST 3076 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 3076 (811)',
        courseName: 'Metropolitan Tokyo',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Williams, M.',
        crn: '12826',
        gened: '',
        prior: '230',
        specialInfo: ''
    },
    'ASST 3252 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 3252 (811)',
        courseName: 'East Asia and the United States',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Cucek, M.',
        crn: '12829',
        gened: '',
        prior: '241',
        specialInfo: 'CL: POLS 3252 (811).'
    },
    'ASST 3541 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 3541 (750)',
        courseName: 'Japan Today',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Kingston, J.',
        crn: '12737',
        gened: '',
        prior: '314',
        specialInfo: 'CL: HIST 3541 (750).'
    },
    'ASST 4096 (811)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 4096 (811)',
        courseName: 'Writing Seminar in Asian Studies: Environmental History of Modern East Asia',
        credits: '3',
        time: 'TTh 16:45-19:00',
        professor: 'Tyner, C.',
        crn: '12770',
        gened: 'WI',
        prior: 'W300',
        specialInfo: ''
    },
    'ASST 4696 (750)': {
        subject: 'Asian Studies',
        courseCode: 'ASST 4696 (750)',
        courseName: 'Modern Japan: Empire, War, Society',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Kingston, J.',
        crn: '12740',
        gened: 'WI',
        prior: 'W311',
        specialInfo: 'CL: HIST 4697 (750).'
    },
    'BIOL 0848 (811)': {
        subject: 'Biology',
        courseCode: 'BIOL 0848 (811)',
        courseName: 'DNA: Friend or Foe',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Cueno, M.',
        crn: '12900',
        gened: 'GS',
        prior: '',
        specialInfo: ''
    },
    'CHEM 0838 (811)': {
        subject: 'Chemistry',
        courseCode: 'CHEM 0838 (811)',
        courseName: 'Nature Has No Reverse',
        credits: '3',
        time: 'TTh 11:55-14:10',
        professor: 'Cueno, M.',
        crn: '12899',
        gened: 'GS',
        prior: 'C065',
        specialInfo: ''
    },
    'CHI 1001 (811)': {
        subject: 'Chinese',
        courseCode: 'CHI 1001 (811)',
        courseName: 'Chinese Elements I',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Sun, S.',
        crn: '12692',
        gened: '',
        prior: 'C066',
        specialInfo: ''
    },
    'CMST 1111 (811)': {
        subject: 'Communication Studies',
        courseCode: 'CMST 1111 (811)',
        courseName: 'Communication and Public Life',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Carr, R.',
        crn: '12937',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'CMST 1111 (812)': {
        subject: 'Communication Studies',
        courseCode: 'CMST 1111 (812)',
        courseName: 'Communication and Public Life',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Staff, T.',
        crn: '12942',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Field trips are mandatory in this class.'
    },
    'CMST 2111 (811)': {
        subject: 'Communication Studies',
        courseCode: 'CMST 2111 (811)',
        courseName: 'Communications Seminar',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Carr, R.',
        crn: '12938',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. No credit for students who have successfully completed Comm 4111.'
    },
    'CSI 0801 (750)': {
        subject: 'Communication and Social Influence',
        courseCode: 'CSI 0801 (750)',
        courseName: 'Contemporary American Social Movements',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Rossitto, S.',
        crn: '12743',
        gened: 'GU',
        prior: '',
        specialInfo: ''
    },
    'CSI 3701 (750)': {
        subject: 'Communication and Social Influence',
        courseCode: 'CSI 3701 (750)',
        courseName: 'Intercultural Communication',
        credits: '3',
        time: 'MW 17:30-19:45',
        professor: 'Hawkins, B.',
        crn: '12790',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required. Students cannot receive credit for this course if they have successfully completed STRC 3801.'
    },
    'CIS 0835 (750)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 0835 (750)',
        courseName: 'Cyberspace & Society ',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Karam, H.',
        crn: '12765',
        gened: 'GS',
        prior: '60',
        specialInfo: ''
    },
    'CIS 0835 (811)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 0835 (811)',
        courseName: 'Cyberspace & Society ',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Staff, T.',
        crn: '12801',
        gened: 'GS',
        prior: '60',
        specialInfo: ''
    },
    'CIS 1051 (811)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 1051 (811)',
        courseName: 'Introduction to Problem Solving and Programming in Python',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Tserolas, V.',
        crn: '12799',
        gened: '',
        prior: '',
        specialInfo: 'Notes: Schedule includes a laboratory component.'
    },
    'CIS 1051 (812)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 1051 (812)',
        courseName: 'Introduction to Problem Solving and Programming in Python',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Staff, T.',
        crn: '12800',
        gened: '',
        prior: '',
        specialInfo: 'Notes: Schedule includes a laboratory component.'
    },
    'CIS 1057 (811)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 1057 (811)',
        courseName: 'Computer Programming in C',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Karam, H.',
        crn: '12796',
        gened: '',
        prior: '',
        specialInfo: 'Notes: Schedule includes a laboratory component.'
    },
    'CIS 1068 (811)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 1068 (811)',
        courseName: 'Program Design and Abstraction',
        credits: '4',
        time: 'MWF 12:00-13:30 & W 20:00-22:00',
        professor: 'Karam, H.',
        crn: '12798',
        gened: '',
        prior: '',
        specialInfo: 'Notes: The evening laboratory component for this class will be held online.'
    },
    'CIS 1166 (811)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 1166 (811)',
        courseName: 'Mathematical Concepts in Computing I',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Tserolas, V.',
        crn: '12803',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'CIS 2109 (811)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 2109 (811)',
        courseName: 'Database Management Systems',
        credits: '4',
        time: 'MWF 10:20-11:50 & M 20:00-22:00',
        professor: 'Karam, H.',
        crn: '12797',
        gened: '',
        prior: '',
        specialInfo: 'Notes: The evening laboratory component for this class will be held online.'
    },
    'CIS 2168 (811)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 2168 (811)',
        courseName: 'Data Structures',
        credits: '4',
        time: 'TTh 8:00-11:00',
        professor: 'Rosen, A.',
        crn: '12805',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'CIS 3223 (811)': {
        subject: 'Computer and Information Sciences',
        courseCode: 'CIS 3223 (811)',
        courseName: 'Data Structures and Algorithms',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Rosen, A.',
        crn: '12806',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'ECON 0858 (750)': {
        subject: 'Economics',
        courseCode: 'ECON 0858 (750)',
        courseName: 'The American Economy',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Ofori, S.',
        crn: '12883',
        gened: 'GU',
        prior: '',
        specialInfo: 'CL: ECON 0858 (811).'
    },
    'ECON 0858 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 0858 (811)',
        courseName: 'The American Economy',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Ofori, S.',
        crn: '12882',
        gened: 'GU',
        prior: '',
        specialInfo: 'CL: ECON 0858 (750).'
    },
    'ECON 1001 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 1001 (811)',
        courseName: 'Introduction to the Economy',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Boudier, L.',
        crn: '12866',
        gened: '',
        prior: '',
        specialInfo: 'Notes: The Friday meetings for this class will be held online.'
    },
    'ECON 1101 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 1101 (811)',
        courseName: 'Macroeconomic Principles',
        credits: '3',
        time: 'MWF 13:40-15:10',
        professor: 'Tanaka, M.',
        crn: '12874',
        gened: '',
        prior: 'C051',
        specialInfo: ''
    },
    'ECON 1101 (812)': {
        subject: 'Economics',
        courseCode: 'ECON 1101 (812)',
        courseName: 'Macroeconomic Principles',
        credits: '3',
        time: 'TTh 16:45-19:00',
        professor: 'Iniguez, A.',
        crn: '12871',
        gened: '',
        prior: 'C051',
        specialInfo: 'Notes: The Tuesday meetings for this class will be held online.'
    },
    'ECON 1102 (750)': {
        subject: 'Economics',
        courseCode: 'ECON 1102 (750)',
        courseName: 'Microeconomic Principles',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Kahy, H.',
        crn: '12878',
        gened: '',
        prior: 'C052',
        specialInfo: 'CL: ECON 1102 (811).'
    },
    'ECON 1102 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 1102 (811)',
        courseName: 'Microeconomic Principles',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Kahy, H.',
        crn: '12877',
        gened: '',
        prior: 'C052',
        specialInfo: 'CL: ECON 1102 (750).'
    },
    'ECON 1102 (812)': {
        subject: 'Economics',
        courseCode: 'ECON 1102 (812)',
        courseName: 'Microeconomic Principles',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Iniguez, A.',
        crn: '12870',
        gened: '',
        prior: 'C052',
        specialInfo: 'Notes: The Tuesday meetings for this class will be held online.'
    },
    'ECON 1103 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 1103 (811)',
        courseName: 'Global Economics',
        credits: '3',
        time: 'MWF 13:40-15:10',
        professor: 'Mino Avila, S.',
        crn: '12867',
        gened: '',
        prior: 'C055',
        specialInfo: 'Notes: The Monday and Friday meetings for this class will be held online.'
    },
    'ECON 3408 (750)': {
        subject: 'Economics',
        courseCode: 'ECON 3408 (750)',
        courseName: 'Economics for Life',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Ofori, S.',
        crn: '12887',
        gened: '',
        prior: '',
        specialInfo: 'CL: ECON 3408 (811).'
    },
    'ECON 3408 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3408 (811)',
        courseName: 'Economics for Life',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Ofori, S.',
        crn: '12886',
        gened: '',
        prior: '',
        specialInfo: 'CL: ECON 3408 (750).'
    },
    'ECON 3501 (750)': {
        subject: 'Economics',
        courseCode: 'ECON 3501 (750)',
        courseName: 'Intermediate Microeconomic Analysis',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Kahy, H.',
        crn: '12881',
        gened: '',
        prior: '201',
        specialInfo: 'CL: ECON 3501 (811).'
    },
    'ECON 3501 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3501 (811)',
        courseName: 'Intermediate Microeconomic Analysis',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Kahy, H.',
        crn: '12880',
        gened: '',
        prior: '201',
        specialInfo: 'CL: ECON 3501 (750).'
    },
    'ECON 3502 (750)': {
        subject: 'Economics',
        courseCode: 'ECON 3502 (750)',
        courseName: 'Intermediate Macroeconomic Analysis',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Kahy, H.',
        crn: '12876',
        gened: '',
        prior: '202',
        specialInfo: 'CL: ECON 3502 (811).'
    },
    'ECON 3502 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3502 (811)',
        courseName: 'Intermediate Macroeconomic Analysis',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Kahy, H.',
        crn: '12875',
        gened: '',
        prior: '202',
        specialInfo: 'CL: ECON 3502 (750).'
    },
    'ECON 3512 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3512 (811)',
        courseName: 'Public Finance',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Tanaka, M.',
        crn: '12872',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'ECON 3537 (750)': {
        subject: 'Economics',
        courseCode: 'ECON 3537 (750)',
        courseName: 'Comparative Economic Systems',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Ofori, S.',
        crn: '12885',
        gened: '',
        prior: '',
        specialInfo: 'CL: ECON 3537 (811).'
    },
    'ECON 3537 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3537 (811)',
        courseName: 'Comparative Economic Systems',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Ofori, S.',
        crn: '12884',
        gened: '',
        prior: '',
        specialInfo: 'CL: ECON 3537 (750).'
    },
    'ECON 3538 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3538 (811)',
        courseName: 'Managerial Economics',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Bedard, B.',
        crn: '12925',
        gened: '',
        prior: '287',
        specialInfo: ''
    },
    'ECON 3564 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3564 (811)',
        courseName: 'International Monetary Economics',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Tanaka, M.',
        crn: '12873',
        gened: '',
        prior: '251',
        specialInfo: ''
    },
    'ECON 3596 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3596 (811)',
        courseName: 'Energy, Ecology, and Economy',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Gonzales, H.',
        crn: '12869',
        gened: 'WI',
        prior: 'W255',
        specialInfo: 'Notes: The Wednesday meetings for this class will be held online.'
    },
    'ECON 3597 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3597 (811)',
        courseName: 'Health Economics',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Mino Avila, S.',
        crn: '12868',
        gened: 'WI',
        prior: 'W262',
        specialInfo: 'Notes: The Wednesday and Friday meetings for this class will be held online.'
    },
    'ECON 3598 (750)': {
        subject: 'Economics',
        courseCode: 'ECON 3598 (750)',
        courseName: 'Economics Writing Seminar',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Kahy, H.',
        crn: '12774',
        gened: 'WI',
        prior: 'W302',
        specialInfo: 'CL: ECON 3598 (811). Notes: Permission of major coordinator required.'
    },
    'ECON 3598 (811)': {
        subject: 'Economics',
        courseCode: 'ECON 3598 (811)',
        courseName: 'Economics Writing Seminar',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Kahy, H.',
        crn: '12772',
        gened: 'WI',
        prior: 'W302',
        specialInfo: 'CL: ECON 3598 (750). Notes: Permission of major coordinator required.'
    },
    'EDUC 0806 (811)': {
        subject: 'Education',
        courseCode: 'EDUC 0806 (811)',
        courseName: 'It’s Bigger Than Hip-hop: Exploring the Evolution of Race and Identity through Hip-hop',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Williams, M.',
        crn: '12890',
        gened: 'GD',
        prior: '',
        specialInfo: 'Notes: The Monday and Friday meetings for this class will be held online.'
    },
    'ENG 0701 (750)': {
        subject: 'English',
        courseCode: 'ENG 0701 (750)',
        courseName: 'Introduction to Academic Discourse',
        credits: '4',
        time: 'TTh 11:10-14:10',
        professor: 'Yamada, N.',
        crn: '13164',
        gened: '',
        prior: '40',
        specialInfo: ''
    },
    'ENG 0701 (811)': {
        subject: 'English',
        courseCode: 'ENG 0701 (811)',
        courseName: 'Introduction to Academic Discourse',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Rashotte, R.',
        crn: '12673',
        gened: '',
        prior: '40',
        specialInfo: 'Notes: The Monday and Friday meetings for this class will be held in person; on Wednesdays, the class will be conducted asynchronously on Canvas.'
    },
    'ENG 0711 (750)': {
        subject: 'English',
        courseCode: 'ENG 0711 (750)',
        courseName: 'Introduction to Academic Discourse ESL',
        credits: '4',
        time: 'TTh 16:45-19:45',
        professor: 'Brown, A.',
        crn: '12677',
        gened: '',
        prior: '41',
        specialInfo: ''
    },
    'ENG 0711 (751)': {
        subject: 'English',
        courseCode: 'ENG 0711 (751)',
        courseName: 'Introduction to Academic Discourse ESL',
        credits: '4',
        time: 'TTh 11:10-14:10',
        professor: 'Curtley, H.',
        crn: '12678',
        gened: '',
        prior: '41',
        specialInfo: ''
    },
    'ENG 0711 (811)': {
        subject: 'English',
        courseCode: 'ENG 0711 (811)',
        courseName: 'Introduction to Academic Discourse ESL',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Ahn, S.',
        crn: '12675',
        gened: '',
        prior: '41',
        specialInfo: ''
    },
    'ENG 0711 (812)': {
        subject: 'English',
        courseCode: 'ENG 0711 (812)',
        courseName: 'Introduction to Academic Discourse ESL',
        credits: '4',
        time: 'TTh 11:10-14:10',
        professor: 'Ahn, S.',
        crn: '12676',
        gened: '',
        prior: '41',
        specialInfo: ''
    },
    'ENG 0802 (750)': {
        subject: 'English',
        courseCode: 'ENG 0802 (750)',
        courseName: 'Analytical Reading and Writing',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Chambers, J.',
        crn: '12682',
        gened: 'GW',
        prior: '1002',
        specialInfo: ''
    },
    'ENG 0802 (811)': {
        subject: 'English',
        courseCode: 'ENG 0802 (811)',
        courseName: 'Analytical Reading and Writing',
        credits: '4',
        time: 'TTh 8:00-11:00',
        professor: 'Arnold, S.',
        crn: '12679',
        gened: 'GW',
        prior: '1002',
        specialInfo: ''
    },
    'ENG 0802 (812)': {
        subject: 'English',
        courseCode: 'ENG 0802 (812)',
        courseName: 'Analytical Reading and Writing',
        credits: '4',
        time: 'TTh 11:10-14:10',
        professor: 'Arnold, S.',
        crn: '12680',
        gened: 'GW',
        prior: '1002',
        specialInfo: ''
    },
    'ENG 0802 (813)': {
        subject: 'English',
        courseCode: 'ENG 0802 (813)',
        courseName: 'Analytical Reading and Writing',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Derr, J.',
        crn: '12681',
        gened: 'GW',
        prior: '1002',
        specialInfo: ''
    },
    'ENG 0812 (750)': {
        subject: 'English',
        courseCode: 'ENG 0812 (750)',
        courseName: 'Analytical Reading and Writing: ESL',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Curtley, H.',
        crn: '12688',
        gened: 'GW',
        prior: '1012',
        specialInfo: ''
    },
    'ENG 0812 (751)': {
        subject: 'English',
        courseCode: 'ENG 0812 (751)',
        courseName: 'Analytical Reading and Writing: ESL',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Broekema, D.',
        crn: '13165',
        gened: 'GW',
        prior: '1012',
        specialInfo: ''
    },
    'ENG 0812 (811)': {
        subject: 'English',
        courseCode: 'ENG 0812 (811)',
        courseName: 'Analytical Reading and Writing: ESL',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Chambers, J.',
        crn: '12683',
        gened: 'GW',
        prior: '1012',
        specialInfo: ''
    },
    'ENG 0812 (812)': {
        subject: 'English',
        courseCode: 'ENG 0812 (812)',
        courseName: 'Analytical Reading and Writing: ESL',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Keefe, K.',
        crn: '12684',
        gened: 'GW',
        prior: '1012',
        specialInfo: 'Notes: W class meetings will be held online.'
    },
    'ENG 0812 (813)': {
        subject: 'English',
        courseCode: 'ENG 0812 (813)',
        courseName: 'Analytical Reading and Writing: ESL',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Keefe, K.',
        crn: '12685',
        gened: 'GW',
        prior: '1012',
        specialInfo: 'Notes: W class meetings will be held online.'
    },
    'ENG 0812 (814)': {
        subject: 'English',
        courseCode: 'ENG 0812 (814)',
        courseName: 'Analytical Reading and Writing: ESL',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Mc Gehee, M.',
        crn: '12686',
        gened: 'GW',
        prior: '1012',
        specialInfo: ''
    },
    'ENG 0812 (815)': {
        subject: 'English',
        courseCode: 'ENG 0812 (815)',
        courseName: 'Analytical Reading and Writing: ESL',
        credits: '4',
        time: 'TTh 11:10-14:10',
        professor: 'Medrano, E.',
        crn: '12689',
        gened: 'GW',
        prior: '1012',
        specialInfo: 'Notes: The Thursday meetings for this class will be held online. '
    },
    'ENG 0826 (811)': {
        subject: 'English',
        courseCode: 'ENG 0826 (811)',
        courseName: 'Creative Acts',
        credits: '4',
        time: 'MWF 10:20-11:50',
        professor: 'Schulz, M.',
        crn: '12775',
        gened: 'GA',
        prior: '',
        specialInfo: ''
    },
    'ENG 0834 (811)': {
        subject: 'English',
        courseCode: 'ENG 0834 (811)',
        courseName: 'Representing Race',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Mackin, Z.',
        crn: '12778',
        gened: 'GD',
        prior: '1063',
        specialInfo: ''
    },
    'ENG 0837 (811)': {
        subject: 'English',
        courseCode: 'ENG 0837 (811)',
        courseName: 'Eating Cultures',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Higgins, S.',
        crn: '12854',
        gened: 'GB',
        prior: 'C065',
        specialInfo: ''
    },
    'ENG 0855 (750)': {
        subject: 'English',
        courseCode: 'ENG 0855 (750)',
        courseName: 'Why Care about College: Higher Education in American Life',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Koshino, K.',
        crn: '12758',
        gened: 'GU',
        prior: '',
        specialInfo: ''
    },
    'ENG 2007 (811)': {
        subject: 'English',
        courseCode: 'ENG 2007 (811)',
        courseName: 'Writing for Business and Industry',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Miyagawa, S.',
        crn: '12916',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'ENG 2007 (812)': {
        subject: 'English',
        courseCode: 'ENG 2007 (812)',
        courseName: 'Writing for Business and Industry',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Narducci, M.',
        crn: '12917',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'ENST 0842 (750)': {
        subject: 'Environmental Studies',
        courseCode: 'ENST 0842 (750)',
        courseName: 'Sustainable Environments',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Sussman, D.',
        crn: '13204',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'FREN 1001 (811)': {
        subject: 'French',
        courseCode: 'FREN 1001 (811)',
        courseName: 'Introduction to French',
        credits: '3',
        time: 'MWF 8:10-10:10',
        professor: 'Staff, T.',
        crn: '13207',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'GUS 0821 (811)': {
        subject: 'Geography and Urban Studies',
        courseCode: 'GUS 0821 (811)',
        courseName: 'Digital Mapping: From Mercator to Mashups',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Tserolas, V.',
        crn: '12802',
        gened: 'GQ',
        prior: '',
        specialInfo: ''
    },
    'GUS 0821 (812)': {
        subject: 'Geography and Urban Studies',
        courseCode: 'GUS 0821 (812)',
        courseName: 'Digital Mapping: From Mercator to Mashups',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Ono, K.',
        crn: '12897',
        gened: 'GQ',
        prior: '',
        specialInfo: ''
    },
    'GUS 0831 (811)': {
        subject: 'Geography and Urban Studies',
        courseCode: 'GUS 0831 (811)',
        courseName: 'Global Cities',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Williams, M.',
        crn: '12825',
        gened: 'GG',
        prior: '',
        specialInfo: ''
    },
    'GUS 1022 (811)': {
        subject: 'Geography and Urban Studies',
        courseCode: 'GUS 1022 (811)',
        courseName: 'Urban Society',
        credits: '1',
        time: 'M 12:00-13:30',
        professor: 'Okamoto, J.',
        crn: '12943',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'GUS 2074 (750)': {
        subject: 'Geography and Urban Studies',
        courseCode: 'GUS 2074 (750)',
        courseName: 'East and South Asia',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Mock, J.',
        crn: '12747',
        gened: '',
        prior: '',
        specialInfo: 'CL: ASST 2074 (750).'
    },
    'HIST 0832 (750)': {
        subject: 'History',
        courseCode: 'HIST 0832 (750)',
        courseName: 'Politics of Identity in America',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Williams, M.',
        crn: '12891',
        gened: 'GD',
        prior: '',
        specialInfo: ''
    },
    'HIST 0832 (812)': {
        subject: 'History',
        courseCode: 'HIST 0832 (812)',
        courseName: 'Politics of Identity in America',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Williams, M.',
        crn: '12892',
        gened: 'GD',
        prior: '',
        specialInfo: 'Notes: The Monday and Friday meetings for this class will be held online.'
    },
    'HIST 0865 (811)': {
        subject: 'History',
        courseCode: 'HIST 0865 (811)',
        courseName: 'The Global Crisis: Power, Politics and the Making of Our Times',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Foster, J.',
        crn: '12896',
        gened: 'GG',
        prior: '',
        specialInfo: ''
    },
    'HIST 2217 (811)': {
        subject: 'History',
        courseCode: 'HIST 2217 (811)',
        courseName: 'Vietnam War',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Karsner, D.',
        crn: '13201',
        gened: '',
        prior: '',
        specialInfo: 'CL: AMST 2217 (811), ASST 2217 (811)'
    },
    'HIST 2502 (811)': {
        subject: 'History',
        courseCode: 'HIST 2502 (811)',
        courseName: 'Introduction to East Asia: Japan',
        credits: '3',
        time: 'MWF 13:40-15:10',
        professor: 'Cucek, M.',
        crn: '12824',
        gened: '',
        prior: '116',
        specialInfo: 'CL: ASST 2502 (811).'
    },
    'HIST 3229 (750)': {
        subject: 'History',
        courseCode: 'HIST 3229 (750)',
        courseName: 'Superpower America',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Kingston, J.',
        crn: '12736',
        gened: '',
        prior: '291',
        specialInfo: ''
    },
    'HIST 3541 (750)': {
        subject: 'History',
        courseCode: 'HIST 3541 (750)',
        courseName: 'Japan Today',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Kingston, J.',
        crn: '12738',
        gened: '',
        prior: '220',
        specialInfo: 'CL: ASST 3541 (750).'
    },
    'HIST 4697 (750)': {
        subject: 'History',
        courseCode: 'HIST 4697 (750)',
        courseName: 'Modern Japan: Empire, War, Society',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Kingston, J.',
        crn: '12739',
        gened: 'WI',
        prior: 'W340',
        specialInfo: 'CL: ASST 4696 (750).'
    },
    'HRM 1101 (811)': {
        subject: 'Human Resource Management',
        courseCode: 'HRM 1101 (811)',
        courseName: 'Leadership and Organizational Management',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Miyagawa, S.',
        crn: '12924',
        gened: '',
        prior: '83',
        specialInfo: ''
    },
    'IH 0851 (750)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0851 (750)',
        courseName: 'IH I: The Good Life',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Azzopardi, M.',
        crn: '12759',
        gened: 'GY',
        prior: '',
        specialInfo: ''
    },
    'IH 0851 (751)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0851 (751)',
        courseName: 'IH I: The Good Life',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Azzopardi, M.',
        crn: '12760',
        gened: 'GY',
        prior: '',
        specialInfo: ''
    },
    'IH 0851 (811)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0851 (811)',
        courseName: 'IH I: The Good Life',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Roser, L.',
        crn: '12779',
        gened: 'GY',
        prior: '',
        specialInfo: ''
    },
    'IH 0851 (812)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0851 (812)',
        courseName: 'IH I: The Good Life',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Schulz, M.',
        crn: '12780',
        gened: 'GY',
        prior: '',
        specialInfo: ''
    },
    'IH 0851 (813)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0851 (813)',
        courseName: 'IH I: The Good Life',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Schulz, M.',
        crn: '12781',
        gened: 'GY',
        prior: '',
        specialInfo: ''
    },
    'IH 0851 (814)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0851 (814)',
        courseName: 'IH I: The Good Life',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Mackin, Z.',
        crn: '12782',
        gened: 'GY',
        prior: '',
        specialInfo: ''
    },
    'IH 0851 (815)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0851 (815)',
        courseName: 'IH I: The Good Life',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Staff, T.',
        crn: '12783',
        gened: 'GY',
        prior: '',
        specialInfo: ''
    },
    'IH 0851 (816)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0851 (816)',
        courseName: 'IH I: The Good Life',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Staff, T.',
        crn: '12784',
        gened: 'GY',
        prior: '',
        specialInfo: ''
    },
    'IH 0852 (750)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0852 (750)',
        courseName: 'IH II: The Common Good',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Rosenkjar, P.',
        crn: '12763',
        gened: 'GZ',
        prior: '',
        specialInfo: ''
    },
    'IH 0852 (751)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0852 (751)',
        courseName: 'IH II: The Common Good',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Rosenkjar, P.',
        crn: '12764',
        gened: 'GZ',
        prior: '',
        specialInfo: ''
    },
    'IH 0852 (811)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0852 (811)',
        courseName: 'IH II: The Common Good',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Sekulovski, J.',
        crn: '12785',
        gened: 'GZ',
        prior: '',
        specialInfo: ''
    },
    'IH 0852 (813)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0852 (813)',
        courseName: 'IH II: The Common Good',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Staff, T.',
        crn: '12787',
        gened: 'GZ',
        prior: '',
        specialInfo: ''
    },
    'IH 0852 (814)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0852 (814)',
        courseName: 'IH II: The Common Good',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Staff, T.',
        crn: '12788',
        gened: 'GZ',
        prior: '',
        specialInfo: ''
    },
    'IH 0852 (815)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0852 (815)',
        courseName: 'IH II: The Common Good',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Staff, T.',
        crn: '12789',
        gened: 'GZ',
        prior: '',
        specialInfo: ''
    },
    'IH 0852 (816)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0852 (816)',
        courseName: 'IH II: The Common Good',
        credits: '3',
        time: 'MWF 13:40-15:10',
        professor: 'Miller, S.',
        crn: '13162',
        gened: 'GZ',
        prior: '',
        specialInfo: ''
    },
    'IH 0852 (817)': {
        subject: 'Intellectual Heritage',
        courseCode: 'IH 0852 (817)',
        courseName: 'IH II: The Common Good',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Miller, S.',
        crn: '13163',
        gened: 'GZ',
        prior: '',
        specialInfo: ''
    },
    'IBS 3101 (811)': {
        subject: 'International Business Studies',
        courseCode: 'IBS 3101 (811)',
        courseName: 'Introduction to Global Finance',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Hongo, A.',
        crn: '12918',
        gened: '',
        prior: '',
        specialInfo: 'Notes: Economics 3563 or Economics 3564 is recommended.'
    },
    'IBS 3101 (812)': {
        subject: 'International Business Studies',
        courseCode: 'IBS 3101 (812)',
        courseName: 'Introduction to Global Finance',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Ho, M.',
        crn: '12919',
        gened: '',
        prior: '',
        specialInfo: 'Notes: Economics 3563 or Economics 3564 is recommended.'
    },
    'IBS 3501 (811)': {
        subject: 'International Business Studies',
        courseCode: 'IBS 3501 (811)',
        courseName: 'Marketing in a Global Environment',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Schweiger, B.',
        crn: '12922',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'IBS 4197 (811)': {
        subject: 'International Business Studies',
        courseCode: 'IBS 4197 (811)',
        courseName: 'Global Business Overview',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Hongo, A.',
        crn: '12923',
        gened: 'WI',
        prior: '',
        specialInfo: 'Notes: Permission of major coordinator required.'
    },
    'IBS 4596 (811)': {
        subject: 'International Business Studies',
        courseCode: 'IBS 4596 (811)',
        courseName: 'International Business Capstone',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Bedard, B.',
        crn: '12921',
        gened: 'WI',
        prior: '',
        specialInfo: 'Notes: Permission of major coordinator required. JIBS 3101|Minimum Grade of C-|May be taken concurrently) additionally allowed as upper-level-prerequisite.'
    },
    'JPNS 1001 (750)': {
        subject: 'Japanese',
        courseCode: 'JPNS 1001 (750)',
        courseName: 'Japanese Elements I',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Matsuhashi, Y.',
        crn: '12695',
        gened: '',
        prior: 'C070',
        specialInfo: ''
    },
    'JPNS 1001 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 1001 (811)',
        courseName: 'Japanese Elements I',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Namba, F.',
        crn: '12696',
        gened: '',
        prior: 'C070',
        specialInfo: ''
    },
    'JPNS 1001 (812)': {
        subject: 'Japanese',
        courseCode: 'JPNS 1001 (812)',
        courseName: 'Japanese Elements I',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Toyoizumi, N.',
        crn: '12697',
        gened: '',
        prior: 'C070',
        specialInfo: ''
    },
    'JPNS 1002 (750)': {
        subject: 'Japanese',
        courseCode: 'JPNS 1002 (750)',
        courseName: 'Japanese Elements II',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Valentine, Y.',
        crn: '12698',
        gened: '',
        prior: 'C071',
        specialInfo: ''
    },
    'JPNS 1002 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 1002 (811)',
        courseName: 'Japanese Elements II',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Machida, Y.',
        crn: '12699',
        gened: '',
        prior: 'C071',
        specialInfo: ''
    },
    'JPNS 1002 (812)': {
        subject: 'Japanese',
        courseCode: 'JPNS 1002 (812)',
        courseName: 'Japanese Elements II',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Namba, F.',
        crn: '12700',
        gened: '',
        prior: 'C071',
        specialInfo: ''
    },
    'JPNS 1003 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 1003 (811)',
        courseName: 'Oral Intensive Japanese I',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Ichimura, Y.',
        crn: '12701',
        gened: '',
        prior: '140',
        specialInfo: ''
    },
    'JPNS 1301 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 1301 (811)',
        courseName: 'Kanji I',
        credits: '3',
        time: 'MWF 13:40-15:10',
        professor: 'Yamaguchi, A.',
        crn: '12702',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 2000 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2000 (811)',
        courseName: 'Special Topics I: Practical Japanese for Study Abroad Students',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Matsuhashi, Y.',
        crn: '12703',
        gened: '',
        prior: '',
        specialInfo: 'CR: Temple Study Abroad Program enrollment. Notes: An extra program fee of 9,000 yen is required. Field trips are mandatory in this class. Does not count toward the Japanese major.'
    },
    'JPNS 2003 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2003 (811)',
        courseName: 'Oral Intensive Japanese II',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Okada, C.',
        crn: '12711',
        gened: '',
        prior: '200',
        specialInfo: ''
    },
    'JPNS 2050 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2050 (811)',
        courseName: 'The Japanese Writer in Focus',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Holca, I.',
        crn: '12832',
        gened: '',
        prior: '',
        specialInfo: 'CL: ASST 2050 (811).'
    },
    'JPNS 2301 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2301 (811)',
        courseName: 'Kanji II',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Toyoizumi, N.',
        crn: '12704',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 2701 (750)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2701 (750)',
        courseName: 'TUJ - Japanese Intermediate I',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Osada, R.',
        crn: '12707',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 2701 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2701 (811)',
        courseName: 'TUJ - Japanese Intermediate I',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Negishi, M.',
        crn: '12705',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 2701 (812)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2701 (812)',
        courseName: 'TUJ - Japanese Intermediate I',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Van Orman, Y.',
        crn: '12706',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 2702 (750)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2702 (750)',
        courseName: 'TUJ - Japanese Intermediate II',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Osada, R.',
        crn: '12710',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 2702 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2702 (811)',
        courseName: 'TUJ - Japanese Intermediate II',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Machida, Y.',
        crn: '12708',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 2702 (812)': {
        subject: 'Japanese',
        courseCode: 'JPNS 2702 (812)',
        courseName: 'TUJ - Japanese Intermediate II',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Okada, C.',
        crn: '12709',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 3000 (750)': {
        subject: 'Japanese',
        courseCode: 'JPNS 3000 (750)',
        courseName: 'Special Topics in Japanese I: Introduction to Translating Japanese to/from English for Non-Native Speakers of Japanese',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Kabe, Y.',
        crn: '12712',
        gened: '',
        prior: '222',
        specialInfo: 'Notes: PR (Minimum grade C-): Japanese 2702.'
    },
    'JPNS 3001 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 3001 (811)',
        courseName: 'Advanced Japanese I',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Shimizu, M.',
        crn: '12713',
        gened: '',
        prior: '270',
        specialInfo: ''
    },
    'JPNS 3002 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 3002 (811)',
        courseName: 'Advanced Japanese II',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Namba, F.',
        crn: '12714',
        gened: '',
        prior: '271',
        specialInfo: ''
    },
    'JPNS 3003 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 3003 (811)',
        courseName: 'Advanced Japanese Writing',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Okumura, Y.',
        crn: '12715',
        gened: '',
        prior: '290',
        specialInfo: 'Notes: This course is primarily for native speakers or very advanced learners of Japanese.  Permission of major coordinator required.'
    },
    'JPNS 3010 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 3010 (811)',
        courseName: 'Special Topics in Japanese II: Kanji III',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Yamaguchi, A.',
        crn: '12716',
        gened: '',
        prior: '',
        specialInfo: 'Notes: Prerequisite: Japanese 2301 (minimum grade of C-) and Japanese 3002 (minimum grade of C-); or permission of the major coordinator. Students must be familiar with at least 500 Kanji before registering for this course.'
    },
    'JPNS 4001 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 4001 (811)',
        courseName: 'Japanese Advanced III',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Saito, J.',
        crn: '12694',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JPNS 4002 (811)': {
        subject: 'Japanese',
        courseCode: 'JPNS 4002 (811)',
        courseName: 'Japanese Advanced IV',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Ichimura, Y.',
        crn: '12693',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JRN 1111 (750)': {
        subject: 'Journalism',
        courseCode: 'JRN 1111 (750)',
        courseName: 'Journalism and Society',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Hawkins, B.',
        crn: '12791',
        gened: '',
        prior: '55',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required.'
    },
    'JRN 2101 (811)': {
        subject: 'Journalism',
        courseCode: 'JRN 2101 (811)',
        courseName: 'Journalism Research',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Carr, R.',
        crn: '12939',
        gened: '',
        prior: '260',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required.'
    },
    'JRN 2396 (811)': {
        subject: 'Journalism',
        courseCode: 'JRN 2396 (811)',
        courseName: 'Magazine Article Writing',
        credits: '3',
        time: 'TTh 16:45-19:00',
        professor: 'Fujiwara, C.',
        crn: '12934',
        gened: 'WI',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 9,000 yen is required.'
    },
    'JRN 2396 (812)': {
        subject: 'Journalism',
        courseCode: 'JRN 2396 (812)',
        courseName: 'Magazine Article Writing',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Fujiwara, C.',
        crn: '12935',
        gened: 'WI',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 9,000 yen is required.'
    },
    'JRN 3403 (811)': {
        subject: 'Journalism',
        courseCode: 'JRN 3403 (811)',
        courseName: 'Documentary Photography',
        credits: '3',
        time: 'TTh 16:45-19:45',
        professor: 'Christodoulou, A.',
        crn: '13225',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JRN 3505 (811)': {
        subject: 'Journalism',
        courseCode: 'JRN 3505 (811)',
        courseName: 'Experimental Journalism',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Bloomberg, M.',
        crn: '13226',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'JRN 3705 (811)': {
        subject: 'Journalism',
        courseCode: 'JRN 3705 (811)',
        courseName: 'Gender and American Mass Media',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Staff, T.',
        crn: '13166',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required.'
    },
    'JRN 3708 (811)': {
        subject: 'Journalism',
        courseCode: 'JRN 3708 (811)',
        courseName: 'Newsroom Management',
        credits: '3',
        time: 'MWF 13:40-15:10',
        professor: 'Lipartito, J.',
        crn: '12932',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 13,500 yen is required.'
    },
    'KINS 1001 (811)': {
        subject: 'Kinesiology',
        courseCode: 'KINS 1001 (811)',
        courseName: 'Special Topics in Fitness: Cardiovascular Fitness for a Healthy Lifestyle',
        credits: '2',
        time: 'MW 17:30-19:00',
        professor: 'Tomaszynska, K.',
        crn: '12944',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'KINS 1064 (811)': {
        subject: 'Kinesiology',
        courseCode: 'KINS 1064 (811)',
        courseName: 'Yoga I',
        credits: '2',
        time: 'WF 12:00-13:30',
        professor: 'Woolbright, H.',
        crn: '12945',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'KLN 1001 (750)': {
        subject: 'Klein',
        courseCode: 'KLN 1001 (750)',
        courseName: 'Klein First-Year Seminar',
        credits: '1',
        time: 'T 17:30-19:00',
        professor: 'Hawkins, B.',
        crn: '12792',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required.'
    },
    'KRN 1001 (811)': {
        subject: 'Korean',
        courseCode: 'KRN 1001 (811)',
        courseName: 'Korean Elements I',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Park, K.',
        crn: '12690',
        gened: '',
        prior: 'C072',
        specialInfo: ''
    },
    'LAWU 0854 (811)': {
        subject: 'Law (Undergraduate)',
        courseCode: 'LAWU 0854 (811)',
        courseName: 'Education in the Global City',
        credits: '3',
        time: 'TTh 16:45-19:00',
        professor: 'Meyer, T.',
        crn: '12902',
        gened: 'GU',
        prior: '',
        specialInfo: ''
    },
    'LGLS 0803 (811)': {
        subject: 'Legal Studies',
        courseCode: 'LGLS 0803 (811)',
        courseName: 'African Americans, Equality and the Law: Weapon or Tool?',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'McCaskill, J.',
        crn: '12855',
        gened: 'GD',
        prior: '',
        specialInfo: ''
    },
    'LGLS 0856 (811)': {
        subject: 'Legal Studies',
        courseCode: 'LGLS 0856 (811)',
        courseName: 'Law and American Society',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Hester, M.',
        crn: '12903',
        gened: 'GU',
        prior: '',
        specialInfo: ''
    },
    'CLA 1002 (811)': {
        subject: 'Liberal Arts',
        courseCode: 'CLA 1002 (811)',
        courseName: 'Professional Development for Liberal Arts Majors',
        credits: '1',
        time: 'T 9:30-11:00',
        professor: 'Staff, T.',
        crn: '12926',
        gened: '',
        prior: '',
        specialInfo: 'Notes: This course covers the same content as Liberal Arts 2020. It is not recommended students enroll in this course if they have taken or will take Liberal Arts 2020.'
    },
    'CLA 1010 (750)': {
        subject: 'Liberal Arts',
        courseCode: 'CLA 1010 (750)',
        courseName: 'Special Topics in Liberal Arts: Entrepreneurship & Creativity',
        credits: '1',
        time: 'M 13:40-15:10',
        professor: 'Boudier, L.',
        crn: '12748',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'CLA 2020 (811)': {
        subject: 'Liberal Arts',
        courseCode: 'CLA 2020 (811)',
        courseName: 'Special Topics in Liberal Arts II: International Career Strategies',
        credits: '2',
        time: 'T 8:00-11:00',
        professor: 'Kieffer, L.',
        crn: '12927',
        gened: '',
        prior: '',
        specialInfo: 'Notes: This course covers the same content as Liberal Arts 1002. It is not recommended students enroll in this course if they have taken or will take Liberal Arts 1002.'
    },
    'CLA 2030 (811)': {
        subject: 'Liberal Arts',
        courseCode: 'CLA 2030 (811)',
        courseName: 'Special Topics in Liberal Arts III: Technology in International Business',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Staff, T.',
        crn: '12928',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'MIS 0855 (811)': {
        subject: 'Management Information Systems',
        courseCode: 'MIS 0855 (811)',
        courseName: 'Data Science',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Ono, K.',
        crn: '12898',
        gened: 'GS',
        prior: '',
        specialInfo: ''
    },
    'MKTG 2101 (811)': {
        subject: 'Marketing',
        courseCode: 'MKTG 2101 (811)',
        courseName: 'Marketing Management',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Zeng, Z.',
        crn: '12908',
        gened: '',
        prior: '81',
        specialInfo: ''
    },
    'MKTG 2101 (812)': {
        subject: 'Marketing',
        courseCode: 'MKTG 2101 (812)',
        courseName: 'Marketing Management',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Narducci, M.',
        crn: '12909',
        gened: '',
        prior: '81',
        specialInfo: ''
    },
    'MATH 0701 (811)': {
        subject: 'Mathematics',
        courseCode: 'MATH 0701 (811)',
        courseName: "Basic Mathematics for Today's World",
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Mino Avila, S.',
        crn: '12856',
        gened: '',
        prior: '45',
        specialInfo: 'Notes: The Friday meetings for this class will be held online.'
    },
    'MATH 0702 (750)': {
        subject: 'Mathematics',
        courseCode: 'MATH 0702 (750)',
        courseName: 'Intermediate Algebra',
        credits: '4',
        time: 'TTh 8:00-11:00',
        professor: 'Bacani, D.',
        crn: '12766',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'MATH 0702 (811)': {
        subject: 'Mathematics',
        courseCode: 'MATH 0702 (811)',
        courseName: 'Intermediate Algebra',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Wu, J.',
        crn: '12666',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'MATH 0823 (750)': {
        subject: 'Mathematics',
        courseCode: 'MATH 0823 (750)',
        courseName: 'Math for a Digital World',
        credits: '4',
        time: 'TTh 16:45-19:45',
        professor: 'Bedard, B.',
        crn: '12865',
        gened: 'GQ',
        prior: '1051',
        specialInfo: 'CL: MATH 0823 (811).'
    },
    'MATH 0823 (811)': {
        subject: 'Mathematics',
        courseCode: 'MATH 0823 (811)',
        courseName: 'Math for a Digital World',
        credits: '4',
        time: 'TTh 16:45-19:45',
        professor: 'Bedard, B.',
        crn: '12864',
        gened: 'GQ',
        prior: '1051',
        specialInfo: 'CL: MATH 0823 (750).'
    },
    'MATH 0824 (811)': {
        subject: 'Mathematics',
        courseCode: 'MATH 0824 (811)',
        courseName: 'Mathematical Patterns',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Haciomeroglu, E.',
        crn: '12857',
        gened: 'GQ',
        prior: '1052',
        specialInfo: 'Notes: The Friday meetings for this class will be held online.'
    },
    'MATH 1021 (811)': {
        subject: 'Mathematics',
        courseCode: 'MATH 1021 (811)',
        courseName: 'College Algebra',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Mino Avila, E.',
        crn: '12858',
        gened: '',
        prior: 'C073',
        specialInfo: 'Notes: The Friday meetings for this class will be held online.'
    },
    'MATH 1021 (812)': {
        subject: 'Mathematics',
        courseCode: 'MATH 1021 (812)',
        courseName: 'College Algebra',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Bacani, D.',
        crn: '12859',
        gened: '',
        prior: 'C073',
        specialInfo: 'Notes: The Friday meetings for this class will be held online.'
    },
    'MATH 1022 (811)': {
        subject: 'Mathematics',
        courseCode: 'MATH 1022 (811)',
        courseName: 'Precalculus',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Haciomeroglu, E.',
        crn: '12860',
        gened: '',
        prior: '',
        specialInfo: 'Notes: The Friday meetings for this class will be held online.'
    },
    'MATH 1031 (750)': {
        subject: 'Mathematics',
        courseCode: 'MATH 1031 (750)',
        courseName: 'Differential and Integral Calculus',
        credits: '4',
        time: 'MWF 8:10-10:10',
        professor: 'Bacani, D.',
        crn: '12767',
        gened: '',
        prior: '77',
        specialInfo: ''
    },
    'MATH 1031 (811)': {
        subject: 'Mathematics',
        courseCode: 'MATH 1031 (811)',
        courseName: 'Differential and Integral Calculus',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Fonseca, J.',
        crn: '12863',
        gened: '',
        prior: '77',
        specialInfo: ''
    },
    'MATH 1041 (811)': {
        subject: 'Mathematics',
        courseCode: 'MATH 1041 (811)',
        courseName: 'Calculus I',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Bacani, D.',
        crn: '12861',
        gened: '',
        prior: '',
        specialInfo: 'Notes: The Friday meetings for this class will be held online.'
    },
    'MSP 0821 (750)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 0821 (750)',
        courseName: 'The Future of Your TV',
        credits: '3',
        time: 'MWF 14:10-15:40',
        professor: 'Hawkins, B.',
        crn: '12755',
        gened: 'GA',
        prior: '',
        specialInfo: ''
    },
    'MSP 1021 (750)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 1021 (750)',
        courseName: 'Introduction to Media Analysis',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Neubert, K.',
        crn: '12793',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 4,500 yen is required.'
    },
    'MSP 1701 (811)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 1701 (811)',
        courseName: 'Introduction to Media Production',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Lipartito, J.',
        crn: '12933',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 13,500 yen is required.'
    },
    'MSP 1701 (812)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 1701 (812)',
        courseName: 'Introduction to Media Production',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Hadjis Labarca, A.',
        crn: '12931',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 13,500 yen is required.'
    },
    'MSP 2751 (811)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 2751 (811)',
        courseName: 'Audio for Media',
        credits: '4',
        time: 'TTh 11:10-14:10',
        professor: 'Spinetto, A.',
        crn: '12929',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 13,500 yen is required.'
    },
    'MSP 3196 (811)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 3196 (811)',
        courseName: 'Writing Workshop',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Fujiwara, C.',
        crn: '12936',
        gened: 'WI',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 9,000 yen is required.'
    },
    'MSP 3701 (811)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 3701 (811)',
        courseName: 'Genres of Media Production',
        credits: '4',
        time: 'TTh 16:45-19:45',
        professor: 'Hadjis Labarca, A.',
        crn: '12930',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 13,500 yen is required.'
    },
    'MSP 4701 (750)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 4701 (750)',
        courseName: 'Producing and Directing',
        credits: '4',
        time: 'TTh 16:45-19:45',
        professor: 'Neubert, K.',
        crn: '12794',
        gened: '',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 13,500 yen is required.'
    },
    'MSP 4796 (811)': {
        subject: 'Media Studies and Production (BTMM)',
        courseCode: 'MSP 4796 (811)',
        courseName: 'Creative Scriptwriting',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Carr, R.',
        crn: '12940',
        gened: 'WI',
        prior: 'W011',
        specialInfo: 'Notes: An extra program fee of 9,000 yen is required.'
    },
    'MUST 0809 (750)': {
        subject: 'Music Studies',
        courseCode: 'MUST 0809 (750)',
        courseName: 'World Musics & Cultures',
        credits: '3',
        time: 'TTh 16:45-19:00',
        professor: 'Duran, S.',
        crn: '13173',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'MUST 1763 (750)': {
        subject: 'Music Studies',
        courseCode: 'MUST 1763 (750)',
        courseName: 'American Popular Music',
        credits: '2',
        time: 'WF 13:40-15:10',
        professor: 'Giarratani, N.',
        crn: '13209',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'MUST 1763 (811)': {
        subject: 'Music Studies',
        courseCode: 'MUST 1763 (811)',
        courseName: 'American Popular Music',
        credits: '2',
        time: 'TTh 15:05-16:35',
        professor: 'Giarratani, N.',
        crn: '13211',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'PHIL 0839 (811)': {
        subject: 'Philosophy',
        courseCode: 'PHIL 0839 (811)',
        courseName: 'Philosophy of the Human',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Sekulovski, J.',
        crn: '12776',
        gened: 'GB',
        prior: '',
        specialInfo: ''
    },
    'PHYS 0834 (750)': {
        subject: 'Physics',
        courseCode: 'PHYS 0834 (750)',
        courseName: 'Exploring the Cosmos',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Matsui, T.',
        crn: '12757',
        gened: 'GS',
        prior: '',
        specialInfo: ''
    },
    'PHYS 0834 (811)': {
        subject: 'Physics',
        courseCode: 'PHYS 0834 (811)',
        courseName: 'Exploring the Cosmos',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Matsui, T.',
        crn: '12901',
        gened: 'GS',
        prior: '',
        specialInfo: ''
    },
    'POLS 0829 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 0829 (811)',
        courseName: 'The History & Significance of Race in America',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Numata, C.',
        crn: '12840',
        gened: 'GD',
        prior: '1376',
        specialInfo: ''
    },
    'POLS 0859 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 0859 (811)',
        courseName: 'The Making of American Society: Melting Pot or Culture Wars?',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Numata, C.',
        crn: '12843',
        gened: 'GU',
        prior: '1079',
        specialInfo: ''
    },
    'POLS 0862 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 0862 (811)',
        courseName: 'Development & Globalization',
        credits: '3',
        time: 'MWF 13:40-15:10',
        professor: 'Nadeau, P.',
        crn: '12844',
        gened: 'GG',
        prior: '',
        specialInfo: ''
    },
    'POLS 0864 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 0864 (811)',
        courseName: 'War and Peace',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Cho, S.',
        crn: '12841',
        gened: 'GG',
        prior: '',
        specialInfo: ''
    },
    'POLS 1201 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 1201 (811)',
        courseName: 'Foreign Governments and Politics',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Kakizaki, M.',
        crn: '12838',
        gened: '',
        prior: 'C052',
        specialInfo: ''
    },
    'POLS 1301 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 1301 (811)',
        courseName: 'International Politics',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Hardy-Chartrand, B.',
        crn: '12842',
        gened: '',
        prior: 'C053',
        specialInfo: ''
    },
    'POLS 2231 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 2231 (811)',
        courseName: 'Comparative Political Systems in Latin America',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Karsner, D.',
        crn: '13200',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'POLS 2321 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 2321 (811)',
        courseName: 'Politics of the Global Economy',
        credits: '3',
        time: 'MWF 13:40-14:40',
        professor: 'Singh, A.',
        crn: '12904',
        gened: '',
        prior: '261',
        specialInfo: ''
    },
    'POLS 2351 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 2351 (811)',
        courseName: 'Japan in a Changing World Order',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Cucek, M.',
        crn: '12828',
        gened: '',
        prior: '254',
        specialInfo: 'CL: ASST 2351 (811).'
    },
    'POLS 2496 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 2496 (811)',
        courseName: 'Introduction to Political Philosophy',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Hardy-Chartrand, B.',
        crn: '12771',
        gened: 'WI',
        prior: 'W101',
        specialInfo: ''
    },
    'POLS 3241 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 3241 (811)',
        courseName: 'Mideast Politics',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Kakizaki, M.',
        crn: '12839',
        gened: '',
        prior: '225',
        specialInfo: ''
    },
    'POLS 3252 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 3252 (811)',
        courseName: 'East Asia and the United States',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Cucek, M.',
        crn: '12830',
        gened: '',
        prior: '238',
        specialInfo: 'CL: ASST 3252 (811).'
    },
    'POLS 3520 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 3520 (811)',
        courseName: 'Special Topics: Research Preparation Seminar: Korean Politics',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Cho, S.',
        crn: '12850',
        gened: '',
        prior: '',
        specialInfo: 'CL: ASST 3000 (811).'
    },
    'POLS 4310 (811)': {
        subject: 'Political Science',
        courseCode: 'POLS 4310 (811)',
        courseName: 'Seminar in International Politics: Chinese Foreign Policy',
        credits: '3',
        time: 'MWF 15:50-17:20',
        professor: 'Cho, S.',
        crn: '12846',
        gened: '',
        prior: '316',
        specialInfo: 'CL: ASST 3030 (811).'
    },
    'PSY 0816 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 0816 (811)',
        courseName: 'Workings of the Mind',
        credits: '3',
        time: 'TTh 11:55-14:10',
        professor: 'Yamamiya, Y.',
        crn: '12807',
        gened: 'GB',
        prior: '',
        specialInfo: ''
    },
    'PSY 0817 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 0817 (811)',
        courseName: 'Brain Matters',
        credits: '3',
        time: 'TTh 16:45-19:00',
        professor: 'Cueno, M.',
        crn: '12809',
        gened: 'GS',
        prior: '',
        specialInfo: ''
    },
    'PSY 0818 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 0818 (811)',
        courseName: 'Human Sexuality',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Skowronski, D.',
        crn: '12810',
        gened: 'GB',
        prior: '',
        specialInfo: ''
    },
    'PSY 1001 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 1001 (811)',
        courseName: 'Introduction to Psychology',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Angel, A.',
        crn: '12811',
        gened: '',
        prior: '1061',
        specialInfo: ''
    },
    'PSY 1001 (812)': {
        subject: 'Psychology',
        courseCode: 'PSY 1001 (812)',
        courseName: 'Introduction to Psychology',
        credits: '3',
        time: 'TTh 11:10-13:25',
        professor: 'Saito, M.',
        crn: '12812',
        gened: '',
        prior: '1061',
        specialInfo: ''
    },
    'PSY 1002 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 1002 (811)',
        courseName: 'Careers in Psychology',
        credits: '1',
        time: 'F 8:40-10:10',
        professor: 'Zimmerman, S.',
        crn: '12813',
        gened: '',
        prior: '',
        specialInfo: 'Notes: To be taken by students in their first year as a Psychological Studies major.'
    },
    'PSY 1003 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 1003 (811)',
        courseName: 'Statistics for Psychology',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Angel, A.',
        crn: '12814',
        gened: '',
        prior: '1167',
        specialInfo: 'Notes: An extra program fee of 9,000 yen is required. Credit will not be given for this course and Psychology 2168.'
    },
    'PSY 1004 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 1004 (811)',
        courseName: 'Critical Thinking in Psychology',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Zimmerman, S.',
        crn: '12815',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'PSY 1110 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 1110 (811)',
        courseName: "Topics in Psychology I: What's Happening in Japan - From Foundation of Mental health to Career",
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Saito, M.',
        crn: '12816',
        gened: '',
        prior: '',
        specialInfo: 'Notes: This course does not satisfy the requirements of the Psychological Studies major but may count toward graduation credits.'
    },
    'PSY 2101 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 2101 (811)',
        courseName: 'Foundations of Cognitive Psychology',
        credits: '3',
        time: 'TTh 8:45-11:00',
        professor: 'Joyce, T.',
        crn: '12817',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'PSY 2301 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 2301 (811)',
        courseName: 'Foundations of Developmental Psychology',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Yamamiya, Y.',
        crn: '12808',
        gened: '',
        prior: '200',
        specialInfo: ''
    },
    'PSY 2501 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 2501 (811)',
        courseName: 'Foundations of Behavioral Neuroscience',
        credits: '3',
        time: 'MWF 17:30-19:00',
        professor: 'Cueno, M.',
        crn: '12818',
        gened: '',
        prior: '260',
        specialInfo: ''
    },
    'PSY 3096 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 3096 (811)',
        courseName: 'Conducting Psychological Research',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Staff, T.',
        crn: '12819',
        gened: 'WI',
        prior: '',
        specialInfo: 'Notes: An extra program fee of 9,000 yen is required.'
    },
    'PSY 3620 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 3620 (811)',
        courseName: 'Topics in Psychology: Gender Studies in Psychology',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Skowronski, D.',
        crn: '12820',
        gened: '',
        prior: '326',
        specialInfo: 'Notes: For the required 2000-level course prerequisite, the instructor recommends that you complete Psych 2401 Foundations of Social Psychology before taking this course.'
    },
    'PSY 3620 (812)': {
        subject: 'Psychology',
        courseCode: 'PSY 3620 (812)',
        courseName: 'Topics in Psychology: ADHD in the Cross-Cultural Context',
        credits: '3',
        time: 'TTh 16:45-19:00',
        professor: 'Watabe, Y.',
        crn: '12821',
        gened: '',
        prior: '326',
        specialInfo: 'Notes: For the required course prerequisite, the instructor recommends that you complete Psych 2201 Foundations of Psychopathology before taking this seminar.'
    },
    'PSY 4696 (811)': {
        subject: 'Psychology',
        courseCode: 'PSY 4696 (811)',
        courseName: 'Capstone in Psychology: The Power of Belief',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Zimmerman, S.',
        crn: '12822',
        gened: 'WI',
        prior: '',
        specialInfo: ''
    },
    'RMI 2501 (750)': {
        subject: 'Risk Management and Insurance',
        courseCode: 'RMI 2501 (750)',
        courseName: 'Fundamentals of Personal Financial Planning',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Uehara, M.',
        crn: '12905',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'SOC 2130 (811)': {
        subject: 'Sociology',
        courseCode: 'SOC 2130 (811)',
        courseName: 'Selected Topics in Sociology: Risk Culture',
        credits: '3',
        time: 'TTh 11:55-14:10',
        professor: 'Cleveland, K.',
        crn: '13224',
        gened: '',
        prior: '',
        specialInfo: 'CL: ASST 2000'
    },
    'SPAN 0826 (811)': {
        subject: 'Spanish',
        courseCode: 'SPAN 0826 (811)',
        courseName: 'Bilingual Communities',
        credits: '3',
        time: 'MWF 8:40-10:10',
        professor: 'Faye, S.',
        crn: '12893',
        gened: 'GB',
        prior: '',
        specialInfo: ''
    },
    'SPAN 1001 (811)': {
        subject: 'Spanish',
        courseCode: 'SPAN 1001 (811)',
        courseName: 'Basic I',
        credits: '4',
        time: 'MWF 17:30-19:30',
        professor: 'Oviedo Ceron, A.',
        crn: '12691',
        gened: '',
        prior: 'C072',
        specialInfo: ''
    },
    'STAT 0826 (750)': {
        subject: 'Statistics',
        courseCode: 'STAT 0826 (750)',
        courseName: 'Statistics in the News',
        credits: '4',
        time: 'MWF 18:00-20:00',
        professor: 'Kansal, P.',
        crn: '12769',
        gened: 'GQ',
        prior: '',
        specialInfo: ''
    },
    'STAT 2103 (750)': {
        subject: 'Statistics',
        courseCode: 'STAT 2103 (750)',
        courseName: 'Statistical Business Analytics',
        credits: '4',
        time: 'TTh 8:00-11:00',
        professor: 'Mino Avila, E.',
        crn: '12768',
        gened: '',
        prior: '',
        specialInfo: ''
    },
    'STAT 2103 (811)': {
        subject: 'Statistics',
        courseCode: 'STAT 2103 (811)',
        courseName: 'Statistical Business Analytics',
        credits: '4',
        time: 'MWF 13:40-15:40',
        professor: 'Haciomeroglu, E.',
        crn: '12862',
        gened: '',
        prior: '',
        specialInfo: 'Notes: The Friday meetings for this class will be held online.'
    },
    'TUJ 1001 (750)': {
        subject: 'Temple University, Japan Campus',
        courseCode: 'TUJ 1001 (750)',
        courseName: 'TUJ Bridge Seminar 1',
        credits: '1',
        time: 'Th 17:30-19:00',
        professor: 'Fujii, S.',
        crn: '12750',
        gened: '',
        prior: '',
        specialInfo: 'CR: Enrollment in Undergraduate Bridge Program I. Notes: Not open to general enrollment. Please consult with the Academic English Program for details.'
    },
    'TUJ 1001 (751)': {
        subject: 'Temple University, Japan Campus',
        courseCode: 'TUJ 1001 (751)',
        courseName: 'TUJ Bridge Seminar 1',
        credits: '1',
        time: 'T 9:30-11:00',
        professor: 'Ito, S.',
        crn: '12751',
        gened: '',
        prior: '',
        specialInfo: 'CR: Enrollment in Undergraduate Bridge Program I. Notes: Not open to general enrollment. Please consult with the Academic English Program for details.'
    },
    'TUJ 1002 (750)': {
        subject: 'Temple University, Japan Campus',
        courseCode: 'TUJ 1002 (750)',
        courseName: 'Bridge Seminar 2: Academic Research',
        credits: '2',
        time: 'MW 14:10-15:40',
        professor: 'Hueston, C.',
        crn: '12752',
        gened: '',
        prior: '',
        specialInfo: 'CR: Enrollment in Undergraduate Bridge Program II. Notes: Not open to general enrollment. Please consult with the Academic English Program for details.'
    },
    'TUJ 1002 (811)': {
        subject: 'Temple University, Japan Campus',
        courseCode: 'TUJ 1002 (811)',
        courseName: 'Bridge Seminar 2: Academic Research',
        credits: '2',
        time: 'MW 15:50-17:20',
        professor: 'Meyer, T.',
        crn: '12947',
        gened: '',
        prior: '',
        specialInfo: 'CR: Enrollment in Undergraduate Bridge Program II. Notes: Not open to general enrollment. Please consult with the Academic English Program for details.'
    },
    'TUJ 1002 (812)': {
        subject: 'Temple University, Japan Campus',
        courseCode: 'TUJ 1002 (812)',
        courseName: 'Bridge Seminar 2: Academic Research',
        credits: '2',
        time: 'MW 17:30-19:00',
        professor: 'Meyer, T.',
        crn: '12948',
        gened: '',
        prior: '',
        specialInfo: 'CR: Enrollment in Undergraduate Bridge Program II. Notes: Not open to general enrollment. Please consult with the Academic English Program for details.'
    },
    'THTR 0825 (811)': {
        subject: 'Theater',
        courseCode: 'THTR 0825 (811)',
        courseName: 'The Art of Acting',
        credits: '3',
        time: 'TTh 14:20-16:35',
        professor: 'Roberts, W.',
        crn: '12851',
        gened: 'GA',
        prior: '1201',
        specialInfo: 'Notes: An extra program fee of 13,500 yen is required.'
    },
    'THTR 0825 (812)': {
        subject: 'Theater',
        courseCode: 'THTR 0825 (812)',
        courseName: 'The Art of Acting',
        credits: '3',
        time: 'TTh 16:45-19:00',
        professor: 'Roberts, W.',
        crn: '12852',
        gened: 'GA',
        prior: '1201',
        specialInfo: 'Notes: An extra program fee of 13,500 yen is required.'
    },
    'UNVS 1003 (750)': {
        subject: 'University Seminar',
        courseCode: 'UNVS 1003 (750)',
        courseName: 'Academic Bridge for International Students',
        credits: '3',
        time: 'MWF 10:20-11:50',
        professor: 'Firestone, E.',
        crn: '12753',
        gened: '',
        prior: '',
        specialInfo: 'Notes: There are no prerequisites or co-requisites for this course. To take this course you must be an international student whose native language is not English. Contact Dr. Shawn Higgins (shawn.higgins@tuj.temple.edu) for permission to add.'
    },
    'UNVS 1003 (811)': {
        subject: 'University Seminar',
        courseCode: 'UNVS 1003 (811)',
        courseName: 'Academic Bridge for International Students',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Sudo, C.',
        crn: '12949',
        gened: '',
        prior: '',
        specialInfo: 'Notes: There are no prerequisites or co-requisites for this course. To take this course you must be an international student whose native language is not English. Contact Dr. Shawn Higgins (shawn.higgins@tuj.temple.edu) for permission to add.'
    },
    'UNVS 1003 (812)': {
        subject: 'University Seminar',
        courseCode: 'UNVS 1003 (812)',
        courseName: 'Academic Bridge for International Students',
        credits: '3',
        time: 'MWF 12:00-13:30',
        professor: 'Staff, T.',
        crn: '13212',
        gened: '',
        prior: '',
        specialInfo: 'Notes: There are no prerequisites or co-requisites for this course. To take this course you must be an international student whose native language is not English. Contact Dr. Shawn Higgins (shawn.higgins@tuj.temple.edu) for permission to add.'
    }
}//811-818, 750

const times = [];//this is for all the time we have so far, to avoid time conflict, we need it to be here
function generateTimetable() {
    if (document.getElementById("rightClickDelete") !== null){
        document.getElementById("rightClickDelete").remove();
    }
    hasMenu = false;
    const timetable = document.getElementById('options');
    timetable.innerHTML = '';
    //options are for when there are some courses has the same course number, need to make it empty before generation
    document.getElementById("timeqoute").innerHTML = "";
    const userInput = document.getElementById("courseNumber").value;
    const courseNumber = userInput.replace(/\D/g, '');
    //get the user Input then ignore all space or alpha
    //TODO: search by course name
    console.log("Course number entered:", courseNumber);//print user input


    let department = ['ACCT', 'ADV', 'AMST', 'ANTH', 'ARTU', 'ARTH', 'ASST', 'BIOL', 'CHEM', 'CHI', 'CMST', 'CSI', 'CIS', 'ECON', 'EDUC', 'ENG', 'ENVS', 'EURO', 'FREN', 'GEOG', 'GEOL', 'GERM', 'GREK', 'HIST', 'HUMA', 'IDIS', 'ITAL', 'JAPN', 'LATN', 'LGBT', 'LING', 'MATH', 'MUSC', 'PHIL', 'PHYS', 'POLS', 'PORT', 'PSYC', 'RELG', 'RUSS', 'SOCI', 'SPAN', 'SUST', 'THEA', 'WGST'];
    let onlineOrIn = ["(811)", "(812)", "(813)", "(814)", "(815)", "(816)", "(817)", "(818)", "(819)", "(750)", "(751)"];
    let allInfoArray = []
    for (let i = 0; i < department.length; i++)
        for (let j = 0; j < onlineOrIn.length; j++) {
            const allInfo = department[i] + " " + courseNumber + " " + onlineOrIn[j];

            const timetableInfo = timetableData[allInfo];
            if (timetableInfo) {
                allInfoArray.push(allInfo)

            }
        }
    //Try to find the course with the course number

    console.log("allInfoArray is: " + allInfoArray.length);
    if (allInfoArray.length === 0) {
        const timetableDiv = document.getElementById("notfound");
        timetableDiv.innerHTML = "<p>Timetable not found. Please enter a valid course number.</p>";
        // If the timetable data is not found, display an error message
    } else if (allInfoArray.length === 1) {
        const timetableDiv = document.getElementById("notfound");
        timetableDiv.innerHTML = "";
        printAllInfo(timetableData, allInfoArray[0]);
        //if There is only one course, print it
    } else {
        for (let i = 0; i < allInfoArray.length; i++) {
            const timetableDiv = document.getElementById("notfound");
            timetableDiv.innerHTML = "";
            selectAllInfo(timetableData, allInfoArray[i]);
        }
        //Let user select when there is more course
    }
}

//this is for print the course info on the timetable
function printAllInfo(timetableData, timetableInfo) {

    timetableInfo = timetableData[timetableInfo];
    times.push(timetableInfo.time)
    const result = sortAndCheckTimeConflicts(times);
    const conflict = document.getElementById('error');
    console.log("Time Table sorter: :" + result.sortedTimes);
    console.log("time conflict: " + result.hasConflict);
    if (result.hasConflict) {
        conflict.innerHTML = "<p>There is a time conflict</p>";
    } else {
        conflict.innerHTML = '';
    }
    const newCourse = document.createElement('tr');
    newCourse.className = "course";
    document.getElementById('timetable').appendChild(newCourse);

    const timeTd = document.createElement('td');
    const timeTdM = document.createElement('td');
    const timeTdT = document.createElement('td');
    const timeTdW = document.createElement('td');
    const timeTdTh = document.createElement('td');
    const timeTdF = document.createElement('td');
    timeTdM.className = "M";
    timeTdT.className = "T";
    timeTdW.className = "W";
    timeTdTh.className = "Th";
    timeTdF.className = "F";
    const date = timetableInfo.time.split(" ")[0];
    timeTd.innerHTML = `<p> ${timetableInfo.time.split(" ")[1]}</p>`
    newCourse.appendChild(timeTd);
    for (let i = 0; i < date.length; i++) {
        if (date[i] === 'M') {
            addInto(timeTdM, timetableData, timetableInfo);
        } else if (date[i] === 'W') {
            addInto(timeTdW, timetableData, timetableInfo);
        } else if (date[i] === 'F') {
            addInto(timeTdF, timetableData, timetableInfo);
        } else if (date[i] === 'T') {
            if (date[i + 1] === 'h') {
                addInto(timeTdTh, timetableData, timetableInfo);
            } else {
                addInto(timeTdT, timetableData, timetableInfo);
            }
        }
    }
    newCourse.appendChild(timeTdM);
    newCourse.appendChild(timeTdT);
    newCourse.appendChild(timeTdW);
    newCourse.appendChild(timeTdTh);
    newCourse.appendChild(timeTdF);
    for (let i = 0; i < result.sortedTimes.length; i++) {
        if (timetableInfo.time === result.sortedTimes[i].toString()) {
            let row1 = document.getElementById("timetable").rows[result.sortedTimes.length];

            let row2 = document.getElementById("timetable").rows[i + 1];
            // Insert row1 before row2
            row2.parentNode.insertBefore(row1, row2);
            return;
        }
    }
    //setCookie("newCourse", newCourse.innerHTML, 7);Cookie problem


}
//this is for function printAllInfo, it adds the necessary info to the child of timetable
function addInto(timeTd, timetableData, timetableInfo) {

    if (timetableInfo.gened === '') {
        timeTd.innerHTML = `<p> ${timetableInfo.courseName}</p>
                            <p> ${timetableInfo.courseCode}</p>
                                <p> ${timetableInfo.professor}</p>
                              <p> ${timetableInfo.location}</p>
                               <p> ${timetableInfo.credits}</p>`;
    } else {
        timeTd.innerHTML = `<p> ${timetableInfo.courseName}</p>
                            <p> ${timetableInfo.courseCode}</p>
                                <p> ${timetableInfo.professor}</p>
                              <p> ${timetableInfo.location}</p>
                               <p> ${timetableInfo.credits}</p>
                            <p> ${timetableInfo.gened}</p>`;
    }
}


//this is for select when there are more than one course have the same courseNum
function selectAllInfo(timetableData, timetableInfo) {
    const newButton = document.createElement('button');
    newButton.innerHTML = `<p> ${timetableData[timetableInfo].courseName}</p>
                           <p> ${timetableData[timetableInfo].time}</p>
                         <p>${timetableInfo}</p>`;
    newButton.className = timetableInfo;
    newButton.addEventListener('click', selection.bind(newButton));
    const timetable = document.getElementById('options');
    timetable.appendChild(newButton);
}
//for select clickListener
function selection() {
    const courseInfo = this.className;
    const courseInfoString = courseInfo.toString();
    const options = document.getElementById('options');
    options.innerHTML = '';
    console.log("You selected: " + courseInfoString);
    printAllInfo(timetableData, courseInfoString);


}
//this is for sort time
function sortAndCheckTimeConflicts(times) {

    // Convert input times to objects with day and time properties
    const dayAbbrevs = {"M": 0, "T": 1, "W": 2, "h": 3, "F": 4};
    const timeObjects = times.map(time => {
        const [days, timespan] = time.split(" ");
        const [startTime, endTime] = timespan.split("-");
        const [startHour, startMin] = startTime.split(":").map(num => parseInt(num));
        const [endHour, endMin] = endTime.split(":").map(num => parseInt(num));
        return {
            days: days.split("").map(day => day === "h" ? 3 : dayAbbrevs[day]),
            start: startHour * 60 + startMin,
            end: endHour * 60 + endMin
        };
    });
    console.log(timeObjects[0].days);
    // Sort time objects by start time and then by day
    timeObjects.sort((a, b) => a.start - b.start);

    // Check for conflicts
    let hasConflict = false;
        for (let i = 0; i < timeObjects.length - 1; i++) {
            const curr = timeObjects[i];
            const next = timeObjects[i + 1];
            if (curr.days[0] === next.days[0] && curr.end >= next.start){
                        hasConflict = true;
                        break;
                        //TODO: a bug will happen if the first one are not the same date
        }
    }
    return {
        sortedTimes: timeObjects.map(time => `${time.days.map(day => Object.keys(dayAbbrevs).find(key => dayAbbrevs[key] === day)).join("")} ${Math.floor(time.start / 60).toString().padStart(1, "")}:${(time.start % 60).toString().padStart(2, "0")}-${Math.floor(time.end / 60).toString().padStart(2, "0")}:${(time.end % 60).toString().padStart(2, "0")}`),
        hasConflict
    };
}
let hasMenu = false;
window.addEventListener("contextmenu", e => e.preventDefault());
let table = document.getElementById("timetable");//it was working in html file, but now it's null

// 监听鼠标右键按下事件
table.addEventListener("mousedown", function (e) {
    // 如果是鼠标右键按下
    const target = e.target;


    if ((target.innerHTML.trim() !== "")) {
        // 创建一个 div 元素作为右键菜单
        const contextMenu = document.createElement("div");
        contextMenu.className = "context-menu";
        contextMenu.id = "rightClickDelete";

        // 创建菜单项
        const menuItem = document.createElement("div");
        menuItem.innerHTML = `<p id = "deleteAll">Delete All</p><p id = "deleteAll">Delete This</p>`;
        menuItem.children.item(0).addEventListener("click", function () {
            if (document.getElementById("rightClickDelete") !== null){
                document.getElementById("rightClickDelete").remove();
            }
            hasMenu = false;
            var parentElement = target.parentElement;
            while (parentElement && parentElement.tagName !== "TR") {//whatever target is, find the parent of is which is tr so the whole line whould be deleted
                parentElement = parentElement.parentElement;
            }
            if (parentElement && parentElement.tagName === "TR") {
                if(parentElement.id === "doNotRemove")//the first row is day&time, should not be removed
                {
                    const conflict = document.getElementById('timeqoute');
                    conflict.innerHTML = "“Time will not slow down when you were trying to delete it” – Developer";
                }
                else{
                    parentElement.remove();
                }

            }
        });
        menuItem.children.item(1).addEventListener("click", function () {
            if (document.getElementById("rightClickDelete") !== null){
                document.getElementById("rightClickDelete").remove();
            }
            hasMenu = false;
            var parentElement = target;
            while (parentElement && parentElement.tagName !== "TH") {//whatever target is, find the parent of is which is tr so the whole line whould be deleted
                parentElement = parentElement.parentElement;
            }
            if (parentElement && parentElement.tagName === "TH") {
                if(parentElement.className === "time")//the first row is day&time, should not be removed
                {
                    const conflict = document.getElementById('timeqoute');
                    conflict.innerHTML = "“Time will not slow down when you were trying to delete it” – Developer";
                }
                else{
                    parentElement.innerHTML = "";
                }

            }
        });
        if (hasMenu) {
            if (document.getElementById("rightClickDelete") !== null){
                document.getElementById("rightClickDelete").remove();
            }
            // 为了避免多次创建菜单，还需要在隐藏菜单时将菜单从 body 中移除
            hasMenu = false;
        } else {
            if (e.button === 2) {
                // 获取鼠标右键按下的元素


                // 将菜单项添加到菜单中
                contextMenu.appendChild(menuItem);

                // 将菜单添加到 body 中
                document.body.appendChild(contextMenu);

                // 设置菜单的位置
                contextMenu.style.left = e.clientX + "px";
                contextMenu.style.top = e.clientY + "px";

                // 阻止默认的右键菜单弹出
                hasMenu = true;
                // 监听鼠标右键抬起事件，当抬起时隐藏菜单
            }
        }

    }



});
document.addEventListener("click", function () {
    if (document.getElementById("rightClickDelete") !== null){
        document.getElementById("rightClickDelete").remove();
    }
    hasMenu = false;
}, )
document.getElementById("saveAsPDF").addEventListener("click", saveAsPDF);
const specialElementHandlers = {
    '.no-saveAsPDF': function (element, renderer) {
        return true
    }
}

function saveAsPDF() {
    if (document.getElementById("rightClickDelete") !== null){
        document.getElementById("rightClickDelete").remove();
    }
    hasMenu = false;
    const doc = new jsPDF('p', 'px', 'a4');//create doc 'portrait', 'px', 'a4'

    const source = document.getElementById("timetableDiv").innerHTML;
    const margins = {
        top: 10,
        bottom: 10,
        left: 0,
        width: 793.706
    }//set source and margins

    doc.fromHTML(
        source,
        margins.left,
        margins.top, {
            "width": margins.width,
            "elementHandlers": specialElementHandlers
        },
        function (dispose) {
            doc.save("Timetable.pdf");
        }, margins);
//TODO:Styling

}


