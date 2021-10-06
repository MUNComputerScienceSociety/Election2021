export const candidateData = [
    { image: 'hamzah', discord: 'Hking', fullName: 'Hamzah Punjabi' },
    { image: 'dewan', discord: 'Mukto', fullName: 'DEWAN MAKSUDUL ISLAM MUKTO' },
    { image: 'mohammed-balfaqih', discord: null, fullName: 'Mohammed Balfaqih' },
    { image: 'gizem', discord: null, fullName: 'Gizem Ensari' },
    { image: 'ripu', discord: null, fullName: 'Ripudaman Singh' },
    { image: 'abdullah', discord: null, fullName: 'Abdullah Aqeel' },
    { image: 'abdulrahman', discord: 'PunkBat', fullName: 'Abdulrahman Marwan Mahmood' },
    { image: 'girish', discord: 'vvvv', fullName: 'Girish Verma,First Year' },
    { image: 'mohammad-tanvir', discord: 'BearThumb', fullName: 'Mohammad Tanvir Azam Rizvie' },
    { image: 'anas', discord: 'pingoos', fullName: 'Anas Mohammad Rashid' },
    { image: 'zachary', discord: null, fullName: 'Zach Vaters' },
    { image: 'trishir', discord: null, fullName: 'Trishir Kumar Singh' },
    { image: 'colton', discord: null, fullName: 'Colton Fridgen' },
    { image: 'somaditya', discord: 'som-sinha', fullName: 'Somaditya Sinha' },
    { image: 'abhinav', discord: null, fullName: 'Abhinav Salgania' },
    { image: 'kanika', discord: null, fullName: 'Kanika Mathur' },
    { image: 'leah', discord: null, fullName: 'Leah Murphy' },
];

export const candidateByFullName = (fullName) => candidateData.find((candidate) => candidate.fullName === fullName);
