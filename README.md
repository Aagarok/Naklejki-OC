# Naklejki-OC

Program do tworzenia etykiet (naklejek) do rozdzielnic typu Opal Compact.

## Funkcje

- Etykiety pojedyncze i partie numerów wklejanych z Excela; PL/ENG.
- Automatyczne zachowywanie rozpoczętej pracy po odświeżeniu lub zamknięciu strony.
- Historia ostatnich 20 partii z możliwością ponownego przygotowania oraz usunięcia wpisu.
- Zaznaczanie i odznaczanie wszystkich numerów 230 VAC; pozostałe mają 3X400 VAC.
- Sortowanie numerów rosnąco lub zachowanie kolejności z Excela.
- Podsumowanie liczby etykiet, napięć, języka, roku i ustawień przed drukiem.
- Podgląd wykorzystujący ten sam układ i czcionki co wydruk, również po zmianie skali i obrotu.

Rozpoczęta praca i historia są zapisywane lokalnie w danej przeglądarce, bez wysyłania na serwer. Wyczyszczenie danych witryny usuwa ten zapis; dane nie synchronizują się między urządzeniami. Historia obejmuje partie przekazane przyciskiem „Drukuj naklejki” do okna drukowania — nie potwierdza fizycznego wykonania wydruku.

## Drukowanie

Papier: **96,2 × 70,8 mm**. W przeglądarce ustaw skalę **100%**, brak marginesów oraz wyłącz nagłówki i stopki. Rozmiar zawartości, przesunięcie i obrót można dostosować na stronie. QR jest stałym kodem z oryginalnego szablonu Excel.

## Uruchomienie lokalne

Z katalogu repozytorium:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Aplikacja nie wymaga instalowania pakietów. Kod znajduje się w `app.js`, a układ etykiet i wygląd strony w `index.html`.
