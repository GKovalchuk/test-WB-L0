# Wildberries

### 1. Верстка по макету

#### Решение задачи

GH Pages: https://gkovalchuk.github.io/test-WB-L0/
GH Repository: https://github.com/GKovalchuk/test-WB-L0

#### Примечания

Данные на странице меняются по вводу пользователя. Сабмит формы вызывает алерт с собранными данными. Склонения слов, изменение размеров шрифтов соблюдаются.
Карточки создаются динамически по "приходящему JSON" =) .

#### Трудности

О возможности использования препроцессоров узнал в последний момент. Отказался от нормальной маски в полях ввода из-за нехватки времени.

### 2. Исправления

#### Типографика

1. Нет начертания Semi-bold.
2. Счетчики не адаптированы на мобиле.

#### Цвет, картинки, символы

1. Неправильный цвет плашек в саммери на десктопе. Исправлено.
2. Неправильный цвет caption в способах оплаты. Исправлено.

#### Расстояния и размеры.

1. Обрезка при прокрутке не нужна. https://disk.yandex.ru/d/27ucCMA_bYfDwg.
2. Неточности с отступами. https://disk.yandex.ru/i/E-CasrbvO0ri2Q. Исправлено.

#### Адаптивность.

1. Промежуточные состояния с багами. https://disk.yandex.ru/d/p7LtK_rRRHwMvw. Исправлено.
2. Промежуточные состояния с багами. https://disk.yandex.ru/d/P0SlX5vRKq_d-w. Исправлено.

#### Интерактивность.

1. Счётчик в корзине статичен. Исправлено.
2. Группы товаров не схлопываются. Исправлено.
3. Товары в избранное не добавляются. Исправлено.
4. Товары в блоке «Способ доставки» статичны.
5. Кнопка «Заказать» не меняется на «Оплатить» с суммой. Исправлено.
6. В попапах после выбора окна не закрываются. Адреса не удаляются. Исправлено.
7. Поля ввода работают некорректно. Исправлен цвет ввода, добавлена возможность перехода между полями по Tab. Исправлено количество товаров. Добавление к цене реализовано через чекбоксы.

#### HTML/CSS/JS.

1. По коду все ок, но структура проекта необоснованно утяжелена. Это будет работать без gulp? Если нет то получается это не vanila javascript. Сделано интересно, но не совсем так как нужно было по тз

##### Комментарий:
Структуру проекта немного облегчил. Вырезал из gulp весь мусор, для понимания, что задействовано в проекте (это сборщик, автопрефиксер и уведомления об ошибках). Единственное, что не будет работать без gulp после небольшой корректировки путей - сборка .html файлов. Нам объявляли, что gulp здесь разрешен, это сообщение есть в чате.
