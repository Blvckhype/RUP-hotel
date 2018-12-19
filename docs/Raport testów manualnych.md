# Raport testów manualnych

## RUP-Hotel

### Autor: Mateusz Lesiecki

### Wersja: 001

### Data: 18.12.2018

### Kierownik Projektu: Michał Starski

---

| Nazwa przypadku testowego                                                                                                   | Rezultat    |
|:---------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| Załadowanie strony zgodnej z projetkem GUI                                                                                  | Pozytywny   |
| Poprawne wybranie terminów przyjazdu i wyjazdu z hotelu                                                                     | Pozytywny   |
| Wybranie daty przyjazdu która minęła                                                                                        | Pozytywny   |
| Wybranie daty przyjazdu poźniejszej niz wyjazdu                                                                             | Pozytywny   |
| Poprawne wyświetlenie komunikatu o braku miejsc w wybranym terminie (Nie istnieje możliwość pomieszczenia wszystkich gości) | Pozytywny   |
| Poprawne wyświetlenie informacji o braku połączenia z bazą danych                                                           | Pozytywny   |
| Poprawne wyświetlenie kwoty należnej do zapłaty                                                                             | Pozytywny   |
| Poprawne wypełnienie formularza wyszukiwarki                                                                                | Pozytywny   |
| Poprawne wypełnienie formularza osobowego                                                                                   | Pozytywny   |
| Błędne wypełnienie pola tekstowego "Imię" (Podanie niedozwolonych znaków)                                                   | Niewykonany |
| Błędne wypełnienie pola tekstowego "Imię" (Podanie za krótkiego ciągu)                                                      | Niewykonany |
| Błędne wypełnienie pola tekstowego "Nazwisko" (Podanie za krótkiego ciągu)                                                  | Niewykonany |
| Błędne wypełnienie pola tekstowego "Numer dowodu osobistego" (Podanie za krótkiego ciągu)                                   | Niewykonany |
| Błędne wypełnienie pola tekstowego "Numer dowodu osobistego" (Podanie ciągu którego suma kontrola sie nie zgadza)           | Niewykonany |
| Poprawne generowanie kodu płatności                                                                                         | Pozytywny   |
| Przejście do niezależnego systemu płatności                                                                                 | Pozytywny   |
| Udało się zapłacić                                                                                                          | Pozytywny   |
| Nie udało sie zapłacić                                                                                                      | Pozytywny   |
| Ominięcie wprowadzenia danych, wejście bezpośrednio na adres wygenerowany po zatwierdzonej płatności                        | Pozytywny   |
| Ominięcie wprowadzenia danych, wejście bezpośrednio na adres wygenerowany po niezatwierdzonej płatności                     | Pozytywny   |
| Ominięcie wprowadzenia danych, wejście bezpośrednio na adres drugiego widoku                                                | Pozytwyny   |
