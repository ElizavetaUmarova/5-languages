const userLanguage = prompt('Какой у тебя язык ?');


switch (true) {
    case userLanguage === 'en':
      console.log('Good afternoon!');
      break;
    case userLanguage === 'ru':
       console.log('Добрый день!');
    break;
    case userLanguage === 'de':
       console.log('Gutten tag!');
    break;
    case userLanguage === 'el':
       console.log('Καλησπέρα!');
    break;
    case userLanguage === 'pt':
       console.log('Boa tarde!');
    break;
    default:
    console.log('Ошибка');
}
