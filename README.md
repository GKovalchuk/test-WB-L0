# Wildberries

### 1. Верстка по макету

#### Решение задачи

GH Pages: https://gkovalchuk.github.io/test-WB-L0/
GH Repository: https://github.com/GKovalchuk/test-WB-L0

#### Примечания

Данные на странице меняются по вводу пользователя. Сабмит формы вызывает алерт с собранными данными. Склонения слов, изменение размеров шрифтов соблюдаются.
Карточки создаются динамически по "приходящему JSON" =) .

#### Трудности

О возможности использования препроцессоров узнал в последний момент. Ранее не верстал сложные страницы без, хотя бы, SCSS и Gulp. Поэтому структура проекта получилась ужасной. Отказался от нормальной маски в полях ввода из-за нехватки времени.

### 2. Исправления

#### Типографика

1. Нет начертания Semi-bold.
2. Счетчики не адаптированы на мобиле.

#### Цвет, картинки, символы

1. Неправильный цвет плашек в саммери на десктопе. Исправлено.
2. Неправильный цвет caption в способах оплаты. Исправлено.

#### Расстояния и размеры.

1. Обрезка при прокрутке не нужна. https://disk.yandex.ru/d/27ucCMA_bYfDwg
2. Неточности с отступами. https://disk.yandex.ru/i/E-CasrbvO0ri2Q Исправлено.

#### Адаптивность.

1. Промежуточные состояния с багами. https://disk.yandex.ru/d/p7LtK_rRRHwMvw Исправлено.
2. Промежуточные состояния с багами. https://disk.yandex.ru/d/P0SlX5vRKq_d-w Исправлено.

#### Интерактивность.

1. Счётчик в корзине статичен. Исправлено.
2. Группы товаров не схлопываются.
3. Товары в избранное не добавляются. Исправлено.
4. Товары в блоке «Способ доставки» статичны.
5. Кнопка «Заказать» не меняется на «Оплатить» с суммой.
6. В попапах после выбора окна не закрываются. Адреса не удаляются.
7. Поля ввода работают некорректно.

#### HTML/CSS/JS.

1. По коду все ок, но структура проекта необоснованно утяжелена. Это будет работать без gulp? Если нет то получается это не vanila javascript. Сделано интересно, но не совсем так как нужно было по тз

#### От себя.

1. Плейсхолдеры инпутов формы Получателя сдвинуты.
