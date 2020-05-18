# Williams Intellectual Property
- Автор: Антон Стрижов.
- Описание: 
## Разработка
---
- Вёрстка на флексах и гридах.
- Резиновость: да.
- Использованы: git, pug, scss, js, jquery, gulp.
- Методология и частичная структура директрии: БЭМ. 
- Принцип: desktope first.
- Используемые модули указаны в package.json.
### Команды консоли:
```
npm run build - оптимизирует картинки, полностью собирает минифицированный проект в папку build и поднимает сервер
gulp dev      - собирает в проект в папку build только файлы html, css и js (без картинок)
gulp          - собирает в проект в папку build только файлы html, css и js (без картинок) и следит за изменениями
gulp optimg   - оптимизирует картинки в папку build
```
## Особенности проекта
---
- На странице contact.html есть стилизованная карта google. Для нее необходим api key. Пример скрипта присутствует в виде комментария.
### Картинки:
- Поддержка формата webp.
- Уменьшенные и кропированные для телефонов.
- Адаптивность к размеру экрана и поддержки формата
- svg4everybody и полифилы.

Брейкпоинты:
```css
  mobile: 768px;
  tablet: 1024px;
  desktope: 1200px;
  wide: 1400px;
```
### Фоллбэки и поддержка браузеров:
- babel