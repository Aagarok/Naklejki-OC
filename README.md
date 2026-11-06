# Naklejki-OC

Generator etykiet do rozdzielnic typu Opal Compact — wersja **v2.4**.

Aplikacja online: [aagarok.github.io/Naklejki-OC](https://aagarok.github.io/Naklejki-OC/).

## Funkcje

### Przygotowanie etykiet

- **Pojedynczo** — wpisanie numeru, np. `4768`, `K4768` lub `RK4768`, albo wklejenie całego opisu, np. `K4768 PP2 PR+HE`. Aplikacja rozpoznaje numer i pokazuje go przed przejściem do podglądu. Kilka różnych numerów wymaga opcji „Wielokrotnie”. Przycisk „Wyczyść” usuwa wpisany numer lub opis oraz wybór napięcia i ustawia kursor w polu numeru.
- **Wielokrotnie** — wklejanie danych z Excela lub Numbers, także z wielu wierszy i kolumn. Numery można podać bez „K”, np. `4768`, w osobnych wierszach lub komórkach. Komórkę zawierającą wyłącznie listę numerów można też rozdzielić spacjami, przecinkami lub średnikami, np. `4768, 4769; 4770`. W opisach tekstowych aplikacja rozpoznaje numery z „K” lub „RK” (np. `K4768 PP2 PR+HE`); nie wyciąga samych liczb z opisów typu `230 VAC` ani dat. Każda komórka zawierająca wyłącznie liczby jest traktowana jako numer lub lista numerów urządzeń. Aplikacja usuwa duplikaty i pokazuje rozpoznane numery, powtórzenia oraz pominięte fragmenty. Liczba pominiętych fragmentów jest orientacyjna i nie oznacza liczby urządzeń. Przycisk „Wyczyść” usuwa wklejoną listę i wybór napięć.
- Wybór **230 VAC** lub **3X400 VAC** dla pojedynczej etykiety; przyciski mają ikony SVG wtyczki i błyskawicy.
- W partii wskazanie poszczególnych numerów 230 VAC albo zaznaczenie/odznaczenie wszystkich. Pozostałe numery otrzymują 3X400 VAC.
- Sortowanie numerów rosnąco lub zachowanie kolejności z wklejonych danych.
- Wybór języka **etykiet PL/ENG** suwakiem pomiędzy flagami Polski i Wielkiej Brytanii; aktywny język ma wyróżnioną flagę. Interfejs aplikacji pozostaje po polsku.
- Zmiana **roku produkcji** w ustawieniach. Rok musi mieć cztery cyfry (1000–9999), np. `2026`. Pusty lub błędny rok blokuje zapis ustawień, przejście do podglądu i drukowanie; aplikacja kieruje wtedy do pola roku.
- Podsumowanie liczby etykiet, napięć, języka, roku, skali, przesunięcia i obrotu przed drukiem.
- Podgląd każdej etykiety wykorzystujący ten sam układ i czcionki co wydruk, również po zmianie skali, przesunięcia i obrotu.
- Z podglądu można wrócić do edycji numerów, przejść do menu lub rozpocząć kolejną partię przyciskiem „Kolejne naklejki”.
- **Zmiana napięcia w podglądzie** — przy każdej etykiecie jest wybór 230 VAC / 3X400 VAC. Zmiana od razu aktualizuje etykietę, podsumowanie i zapis pracy.
- **Enter w polu pojedynczego numeru** przechodzi do podglądu, tak jak przycisk „Podgląd i drukowanie”. W polu partii Enter nadal dodaje kolejny wiersz.
- **Cofnij wyczyszczenie** — po użyciu „Wyczyść” można odzyskać ostatnio wyczyszczony formularz wraz z napięciami i kolejnością numerów. Opcja jest dostępna w bieżącej sesji do wpisania nowych danych; przeładowanie strony usuwa możliwość cofnięcia.

### Wygląd i zapisywanie pracy

- Motyw **jasny i ciemny** przełączany suwakiem oraz układ dostosowany do komputerów i telefonów.
- Logo Clima Gold w nagłówku, pobierane bezpośrednio z [oficjalnego pliku SVG na climagold.com](https://climagold.com/wp-content/uploads/2024/04/Logo_gray.svg). Załadowanie logo wymaga dostępu do tej strony. Logo w nagłówku nie jest drukowane na etykietach.
- Automatyczne zachowywanie rozpoczętej pracy po odświeżeniu lub zamknięciu strony: numerów, wybranych napięć, kolejności i etapu przygotowania, także podglądu.
- Zapamiętywanie motywu, języka etykiet, roku i ustawień wydruku.
- Historia ostatnich **20 partii** z datą, liczbą etykiet, językiem, rokiem i skróconą listą numerów. Można ponownie przygotować partię z jej ustawieniami albo usunąć wpis.

Rozpoczęta praca, historia i ustawienia są zapisywane lokalnie w danej przeglądarce, bez wysyłania na serwer. Wyczyszczenie danych witryny usuwa ten zapis; dane nie synchronizują się między urządzeniami. Jeśli przeglądarka blokuje zapis, aplikacja wyświetla komunikat.

Historia obejmuje partie przekazane przyciskiem „Drukuj naklejki” oraz pojedyncze próby z przycisku „Drukuj jedną próbną”. Próba jest oznaczona jako „Wydruk próbny” i zawiera tylko pierwszą etykietę z jej ustawieniami. Historia nie potwierdza fizycznego wykonania wydruku; wpis pozostaje również po anulowaniu drukowania.

## Drukowanie

W ustawieniach drukarki wybierz papier **96,2 × 70,8 mm**. W oknie drukowania przeglądarki ustaw skalę **100%**, brak marginesów oraz wyłącz nagłówki i stopki. Przed drukiem seryjnym wydrukuj jedną etykietę próbną i sprawdź jej położenie.

Przycisk **„Drukuj jedną próbną”** przekazuje do okna drukowania tylko pierwszą etykietę, zgodnie z wybraną kolejnością i aktualnymi ustawieniami. Nie zmienia przygotowanej partii. Przycisk **„Drukuj naklejki”** nadal drukuje całą partię.

Instrukcje i regulacja są dostępne w podglądzie, w domyślnie zwiniętej sekcji **„Wydruk próbny”**. Po rozwinięciu można ustawić:

- **Przesunięcie góra / dół:** od −10 do +10 mm, krok 0,5 mm, domyślnie 0 mm. Wartość ujemna przesuwa wydruk w górę, dodatnia w dół, również przy obrocie 180°.
- **Rozmiar zawartości:** 70–120%, domyślnie 100%. Napisy i grafiki są skalowane razem, a papier zachowuje rozmiar 96,2 × 70,8 mm. Oba języki mają jednakową wielkość etykiety. Układ jest wyśrodkowany poziomo i ma bazową korektę położenia w pionie zgodną z wydrukiem wzorcowym.
- **Obrót:** bez obrotu (domyślnie) lub o 180°.

Przycisk **„Przywróć ustawienia wydruku”** ustawia rozmiar 100%, przesunięcie 0 mm i brak obrotu. Aktualizuje też podgląd i zapamiętane ustawienia.

Ustawienia są zapamiętywane w przeglądarce i uwzględniane w podglądzie. Po każdej korekcie wykonaj wydruk próbny; skala w oknie drukowania przeglądarki powinna nadal wynosić 100%. Elementy interfejsu i panel ustawień nie są drukowane.

**Kod QR jest statyczną grafiką z oryginalnego szablonu Excel** — nie jest generowany osobno dla każdego numeru urządzenia. Sprawdź jego przeznaczenie przed użyciem produkcyjnym.

## Uruchomienie lokalne

Z katalogu repozytorium:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Następnie otwórz `http://127.0.0.1:8000` w przeglądarce.

Aplikacja nie wymaga instalowania pakietów, budowania ani backendu. Kod znajduje się w `app.js`, a układ etykiet i wygląd strony w `index.html`. Czcionki Carlito są dołączone w `assets/fonts/` wraz z licencją.
