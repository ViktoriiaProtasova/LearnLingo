import levels from '../data/levels';
import languages from '../data/languages';
import themes from '../data/themes';

export const getFilterOptions = $type => {
  let options = [];

  if ($type === 'languages') {
    options = languages.map((language, index) => (
      <option key={index} value={language}>
        {language}
      </option>
    ));
  } else if ($type === 'levels') {
    options = levels.map((level, index) => (
      <option key={index} value={level}>
        {level}
      </option>
    ));
  } else if ($type === 'price') {
    for (let i = 0; i <= 100; i += 10) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
  } else if ($type === 'theme') {
    options = themes.map((theme, index) => (
      <option key={index} value={theme}>
        {theme}
      </option>
    ));
  }
  return options;
};
