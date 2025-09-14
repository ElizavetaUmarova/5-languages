const userLanguage = prompt('Какой у тебя язык ?');


switch (true) {
    case userLanguage === 'EN':
      console.log('Good afternoon!');
      break;
    case userLanguage === 'RU':
       console.log('Добрый день!');
    break;
    case userLanguage === 'DE':
       console.log('Guten Tag!');
    break;
    case userLanguage === 'El':
       console.log('Καλησπέρα!');
    break;
    case userLanguage === 'PT':
       console.log('Boa tarde!');
    break;
    default:
    console.log('Ошибка');
}
