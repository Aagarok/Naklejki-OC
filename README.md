# Naklejki-OC

Generator etykiet do rozdzielnic typu Opal Compact — wersja **v2**.

Aplikacja online: [aagarok.github.io/Naklejki-OC](https://aagarok.github.io/Naklejki-OC/).

## Windows — wersja przenośna

`Naklejki-OC-2.0.0-Windows-x64.exe` to samodzielna aplikacja dla Windows 10/11 w wersji 64-bitowej. Nie wymaga instalatora, Node.js ani dostępu do internetu. Skopiuj plik na komputer i uruchom go dwukrotnym kliknięciem. Po otwarciu aplikacji można przygotowywać i drukować etykiety tak jak na stronie WWW; przycisk „Drukuj naklejki” otwiera systemowe okno drukowania z papierem 96,2 × 70,8 mm. Sterownik drukarki musi być dostępny na komputerze.

Historia i ustawienia są przechowywane w profilu użytkownika Windows (`%APPDATA%/Naklejki OC`), osobno od przeglądarki i osobno na każdym komputerze. Samo przeniesienie pliku `.exe` nie przenosi zapisanej pracy. Program nie wymaga podwyższonych uprawnień, ale firmowe zasady mogą blokować pobrane aplikacje. Plik nie ma podpisu cyfrowego wydawcy; w razie blokady skontaktuj się z firmowym IT.

Kolejne pliki `.exe` buduje zadanie [Windows portable w GitHub Actions](https://github.com/Aagarok/Naklejki-OC/actions/workflows/windows.yml). Po pomyślnym zakończeniu zadania pobierz archiwum `Naklejki-OC-Windows-x64` z sekcji **Artifacts**, rozpakuj je i uruchom znajdujący się w nim plik `.exe`. Pobieranie artefaktów może wymagać zalogowania do GitHub. Artefakty są przechowywane przez 30 dni; zadanie można uruchomić ponownie przyciskiem **Run workflow**.

## Funkcje

### Przygotowanie etykiet

- **Pojedynczo** — wpisanie numeru, np. `4768`, `K4768` lub `RK4768`, albo wklejenie całego opisu, np. `K4768 PP2 PR+HE`. Aplikacja rozpoznaje numer i pokazuje go przed przejściem do podglądu. Kilka różnych numerów wymaga opcji „Wielokrotnie”.
- **Wielokrotnie** — wklejanie danych z Excela lub Numbers, także z wielu wierszy i kolumn. Aplikacja wyodrębnia numery K z opisów, usuwa duplikaty i pokazuje rozpoznane numery, powtórzenia oraz pominięte fragmenty. Liczba pominiętych fragmentów jest orientacyjna i nie oznacza liczby urządzeń. Przycisk „Wyczyść” usuwa wklejoną listę i wybór napięć.
- Wybór **230 VAC** lub **3X400 VAC** dla pojedynczej etykiety; przyciski mają ikony SVG wtyczki i błyskawicy.
- W partii wskazanie poszczególnych numerów 230 VAC albo zaznaczenie/odznaczenie wszystkich. Pozostałe numery otrzymują 3X400 VAC.
- Sortowanie numerów rosnąco lub zachowanie kolejności z wklejonych danych.
- Wybór języka **etykiet PL/ENG** suwakiem pomiędzy flagami Polski i Wielkiej Brytanii; aktywny język ma wyróżnioną flagę. Interfejs aplikacji pozostaje po polsku.
- Zmiana **roku produkcji** w ustawieniach.
- Podsumowanie liczby etykiet, napięć, języka, roku, skali, przesunięcia i obrotu przed drukiem.
- Podgląd każdej etykiety wykorzystujący ten sam układ i czcionki co wydruk, również po zmianie skali, przesunięcia i obrotu.
- Z podglądu można wrócić do edycji numerów, przejść do menu lub rozpocząć kolejną partię przyciskiem „Kolejne naklejki”.

### Wygląd i zapisywanie pracy

- Motyw **jasny i ciemny** przełączany suwakiem oraz układ dostosowany do komputerów i telefonów.
- Automatyczne zachowywanie rozpoczętej pracy po odświeżeniu lub zamknięciu strony: numerów, wybranych napięć, kolejności i etapu przygotowania, także podglądu.
- Zapamiętywanie motywu, języka etykiet, roku i ustawień wydruku.
- Historia ostatnich **20 partii** z datą, liczbą etykiet, językiem, rokiem i skróconą listą numerów. Można ponownie przygotować partię z jej ustawieniami albo usunąć wpis.

Rozpoczęta praca, historia i ustawienia są zapisywane lokalnie w danej przeglądarce, bez wysyłania na serwer. Wyczyszczenie danych witryny usuwa ten zapis; dane nie synchronizują się między urządzeniami. Jeśli przeglądarka blokuje zapis, aplikacja wyświetla komunikat.

Historia obejmuje partie przekazane przyciskiem „Drukuj naklejki” do okna drukowania — nie potwierdza fizycznego wykonania wydruku. Wpis pozostaje w historii również po anulowaniu drukowania.

## Drukowanie

W ustawieniach drukarki wybierz papier **96,2 × 70,8 mm**. W oknie drukowania przeglądarki ustaw skalę **100%**, brak marginesów oraz wyłącz nagłówki i stopki. Przed drukiem seryjnym wydrukuj jedną etykietę próbną i sprawdź jej położenie.

Instrukcje i regulacja są dostępne w podglądzie, w domyślnie zwiniętej sekcji **„Wydruk próbny”**. Po rozwinięciu można ustawić:

- **Przesunięcie góra / dół:** od −10 do +10 mm, krok 0,5 mm, domyślnie 0 mm. Wartość ujemna przesuwa wydruk w górę, dodatnia w dół, również przy obrocie 180°.
- **Rozmiar zawartości:** 70–120%, domyślnie 100%. Napisy i grafiki są skalowane razem, a papier zachowuje rozmiar 96,2 × 70,8 mm. Oba języki mają jednakową wielkość etykiety. Układ jest wyśrodkowany poziomo i ma bazową korektę położenia w pionie zgodną z wydrukiem wzorcowym.
- **Obrót:** bez obrotu (domyślnie) lub o 180°.

Ustawienia są zapamiętywane w przeglądarce i uwzględniane w podglądzie. Po każdej korekcie wykonaj wydruk próbny; skala w oknie drukowania przeglądarki powinna nadal wynosić 100%. Elementy interfejsu i panel ustawień nie są drukowane.

**Kod QR jest statyczną grafiką z oryginalnego szablonu Excel** — nie jest generowany osobno dla każdego numeru urządzenia. Sprawdź jego przeznaczenie przed użyciem produkcyjnym.

## Uruchomienie lokalne

Z katalogu repozytorium:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Następnie otwórz `http://127.0.0.1:8000` w przeglądarce.

Aplikacja nie wymaga instalowania pakietów, budowania ani backendu. Kod znajduje się w `app.js`, a układ etykiet i wygląd strony w `index.html`. Czcionki Carlito są dołączone w `assets/fonts/` wraz z licencją.

### Rozwijanie aplikacji Windows

Wariant desktopowy używa Electron i tych samych plików HTML/JavaScript co strona. Do pracy nad nim potrzebny jest Node.js 24 oraz npm. W katalogu repozytorium:

```sh
npm ci
npm start
```

Aby zbudować przenośny plik Windows x64:

```sh
npm run dist:win
```

Gotowy plik pojawi się w `dist/`. Zależności i pliki wynikowe nie są zapisywane w Git. Kod okna aplikacji i obsługi systemowego drukowania znajduje się w `desktop/`. Wariant WWW nadal działa bez instalowania pakietów.
