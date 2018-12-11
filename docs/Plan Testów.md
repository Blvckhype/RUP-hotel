# Plan testów

## RUP-Hotel

### Autor: Mateusz Lesiecki

### Korekta: Katarzyna Makohon

### Wersja: 002

### Data: 10.12.2018

### Kierownik Projektu: Michał Starski

---

## Spis treści:

1. **Wstęp**

2. **Testowane obiekty**

3. **Funkcjonalność do przetestowania**

4. **Funkcjonalność nietestowana**

5. **Zespół**

6. **Strategia testowania**

7. **Testy automatyczne**

8. **Środowisko testowe**

9. **Standardy/Bibliografia**

10. **Odnośniki**

---

## Wstęp:

#### Wprowadzenie

„System rezerwacji pokoi hotelowych dla RUP Hotel” jest to aplikacja internetowa pozwalajaca zarezerwować pokoje w hotelu X na określony czas pobytu oraz dokonać natychmiastowej zapłaty za pobyt w hotelu w niezależnym systemie płatnosci (nazwa) znajdujący się pod adresem (adres). W Systemie bedą dostępne 1, 2 i 3 osobowe pokoje z różną konfiguracją łóżek. Projekt jest tworzony w metodyce RUP.

#### Cel

Faza testowania w projekcie „System rezerwacji pokoi hotelowych dla RUP Hotel”, ma na celu znalezienie oraz usunięcie błędów powstałych podczas tworzenie Systemu, ma on rownież za zadanie zapewnienie jak najwyższej jakości produktu. Testy powinny zostać wykonywane od początku tworzenia Systemu w celu wczesnego wykrycia nieporządanych zachowań, ma to znaczenie na końcowy efekt całego projektu. Celem tego dokumentu jest ułatwienie pracy ludziom odpowiedzialnym za przeprowadzenie testów oraz całego procesu testowania.

---

## Opis testów

#### Obiekt: Aplikacja internetowa - Wyszukiwarka

Jest to pierwsza część aplikacja internetowa znajduja sie pod adresem (adres), składa sie ona z dwóch głównych sekcji, pierwsza z nich to sekcja wyboru daty pobytu w hotelu a druga to sekcja umożliwiająca nam wybór liczby przyjezdnych gości oraz wybrać pokoje z listy dostępnych pokoi. W skład tej cześci wchodzą:

1. Data pobytu:

   1.1. Data przyjazdu - pole typu kalendarz

   1.2. Data wyjazdu - pole typu kalendarz

2. Wybór pokoi:

   2.1. Liczba gości - lista rozwijana

   2.2. Lista składajaca się z dostepnych pokoi - custom client

   2.3. Łączna kwota - pole typu Label

   2.4. Przejdź dalej - button

#### Obiekt: Aplikacja internetowa - Formularz osobowy

Jest to druga część aplikacji internetowej znajdującej się pod adresem (adres), jej celem jest umożliwienie klientowi hotelu X wprowadzenia danych niezbędnych do ukończenia rezerwacji pokoju hotelowego oraz generuje kod niezbędny do potwierdzenia płatnośći tym samym całego procesu rezerwacji. W skład tej części wchodzi jedna głowna sekcja, której elementami są:

1. Formularz składajacy sie z 3 pól tekstowych (Imie, Nazwisko, Numer dowodu)
2. Generuj kod płatności – button
3. Twoje dane zostaly/niezostaly zaakceptowane – pole typu Label
4. Przejdź do płatnosci – button

Po naciśnieciu przycisku przejdź do płatności, zostajemy przekierowni do niezależnego systemu płatności (nazwa), gdzie finalizujemy naszą rezerwacje wpisując wygenerowany na stronie kod. Po zatwierdzeniu serwis (nazwa) przekierowuje nas na stronę początkową wraz z komunikatem o rezultacie rezerwacji.

---

## Funkcjonalność do przetestowania

System rezerwacji pokoi hotelowych dla hotelu X ma umożliwić użytkownikowi zarezerwowanie w wybranym przez niego terminie dowolnej ilośći pokoi w każdym z możliwych typów, na bieżąco aktualizowana jest kwota należna do zapłaty oraz generowany jest unikalny kod niezbędny do potwierdzenia płatności.

#### Pierwsza część aplikacji

3.1.1 Funkcjonalność wyszukiwarki

#### Druga część aplikacji

3.2.1 Pola tekstowe z formularza
3.2.2 Poprawność wyświetlania statusu wypełnionych danych
3.2.3 Poprawność generowania kodu do płatności
3.2.4 Funkcjonalność przycisku przejdz do płatności

#### Dodatkowo

- Poprawne załadowanie strony w przeglądarce
- Poprawność dodania rezerwacji do bazy danych
- Niedodanie rezerwacji do bazy w przypadku niepowodzenia płatności
- Generowanie poprawnego kodu płatnośći (zgodnego z wymaganiami)
- Przekierowanie na strone systemu płatności
- Sprawdzenie czy wejscie na (adres) doda do bazy rezerwacje
- Przekierowanie na storne poczatkową po udanej rezerwacji
- Przekierowanie na strone początkowo po nieudanej rezerwacji wraz z odpowiednim komunikatem
- Zgodność wyglądu strony razem z projektem GUI

---

## Funkcjonalność nietestowana

4.1 Wszystkie pola typu napisy tekstowe (Label)

---

## Zespół

#### Podział obowiązków

5.1.1 Michał Starski – Kierownik projektu, Programista
5.1.2 Maciej Więcek – Programista
5.1.3 Katarzyna Makohon – Analityk Systemowy
5.1.4 Mateusz Lesiecki – Menadżer testów
5.1.5 Bartłomiej Włodarczyk – Przegląd projektu
5.1.6 Jędrzej Nowak – Analityk Systemowy
5.1.7 Krystian Kabat – Integrator
5.1.8 Dominika Augustyniak – Inżynier procesu
5.1.9 Ada Andrzejczak – Projektant GUI
5.1.10 Adam Ćwikliński – Administrator Systemu
5.1.11 Patrycja Łaźna – Architekt Systemu
5.1.12 Konrad Pierzyński – Programista

#### Harmonogram

| Nazwa testów | Data rozpoczęcia | Data zakończenia | Wykonał |
| ------------ | ---------------- | ---------------- | ------- |
| Jednostkowe  |                  |                  |         |
| Integracyjne |                  |                  |         |

---

## Strategia testowanias

#### Testy jednostkowe

Projekt zakłada pokrycie testami jednostkowymi 100% kodu. Testy jedndostkowe pisane są przez zespół programistów.

#### Testy funkcjonalne

1.

**Nazwa przypadku testowego:** Poprawne wybranie terminów przyjazdu i wyjazdu z hotelu.

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) .

**Wymagania:** Wyświetlenie systemu rezerwacji pod adresem (adres)

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                        | Oczekiwany rezultat                                                                   |
|:--------------------------------------------:|:-------------------------------------------------------------------------------------:|
| 1. Wpisz w polu paska adres "(adres strony)" | Zostanie załadowana strona systemu rezerwacji pokoi hotelowych, zgoda z projektem GUI |

2.

**Nazwa przypadku testowego:** Poprawne wybranie terminów przyjazdu i wyjazdu z hotelu.

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji.    

**Wymagania:** Prawidłowe wybranie terminu przyjazdu i wyjazdu

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                              | Oczekiwany rezultat                                                                                     |
|:------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:|
| 1. Wybierz strzałkę w polu kalendarzowym "przyjazd" i ustaw datę poźniejszą od dzisiejszej o 2 dni                 | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                             |
| 2. Wybierz strzałkę w polu kalendarzowym "wyjazd" i ustaw datę poźniejszą od dzisiejszej o 5 dni od daty przyjazdu | Wartość pola kalendarzowego wskazuje wybrną przez nas datę oraz brak komunikatu informującego o błedzie |

 3.

**Nazwa przypadku testowego:** Wybranie daty przyjazdu która mineła

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji.    

**Wymagania:** Prawidłowe wybranie terminu przyjazdu i wyjazdu

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                | Oczekiwany rezultat                                                       |
|:----------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|
| 1. Wybierz strzałkę w polu kalendarzowym "przyjazd" i ustaw datę wcześniejszą od dzisiejszej o 3 dni | Wyświetlenie komunikatu informującego o wyborze daty która juz sie odbyła |

4.

**Nazwa przypadku testowego:** Wybranie daty przyjazdu poźniejszej niz wyjazdu

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wybranie terminu przyjazdu i wyjazdu

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                              | Oczekiwany rezultat                                                                   |
|:--------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|
| 1. Wybierz strzałkę w polu kalendarzowym "przyjazd" i ustaw date poźniejszą o 7 dni od dzisiejszej | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                           |
| 2. Wybierz strzałkęw polu kalendarzowym "wyjazd" i ustaw datę poźniejszą o 3 dni od dzisiejszej    | Wyświetlenie komunikatu informującym o wyborze późniejszej daty przyjazdu niz wyjazdu |

5.

**Nazwa przypadku testowego:** Poprawne wyświetlenie opcji pokojowych dla określonej liczby gośći (Istnieje możliwość pomieszczenia wszystkich gości)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wyświetlenie dostępnych pokoi

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                          | Oczekiwany rezultat                                               |
|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd" dowolną poprawną wartość            | Wartość pola kalendarzowego wskazuje wybraną przez nas datę       |
| 2. Wybierz w polu "wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1. | Wartość pola kalendarzowego wskazuje wybraną przez nas datę       |
| 3. Z listy rozwijanej wybierz listę wartość z przedzialu [1- 10] gości         | Ustawienie w polu listy rozwijanej wybranej wartości              |
| 4. Naciśnij przycisk "Szukaj"                                                  | Wyświetlenie wszystkich możliwych dostępnych w tym terminie pokoi |

6.

**Nazwa przypadku testowego:** Poprawne wyświetlenie opcji pokojowych dla określonej liczby gośći (Nie istnieje możliwość pomieszczenai wszystkich gości)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wyświetlenie dostępnych pokoi

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                 | Oczekiwany rezlutat                                                                                     |
|:-----------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd" dowolną poprawną wartość starszą lub równą dziejszej dacie | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                             |
| 2. Wybierz w polu "wyjazd"dowolną poprawną datę późniejszą od tej z punktu 1.                         | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                             |
| 3. Z listy rozwijanej wybierz listę wartość z przedzialu [1- 10] gości                                | Ustawienie w polu listy rozwijanej wybranej wartości                                                    |
| 4. Naciśnij przycisk "Szukaj"                                                                         | Wyświetlenie komunikatu informującego ze w danym okresie hotel nie może pomieścić wybranej liczby gości |

7.

**Nazwa przypadku testowego:** Poprawne wyświetlenie informacji o braku połączenia z bazą danych

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, brak połączenia z bazą danych.

**Wymagania:** Prawidłowe wyświetlenie dostępnych pokoi

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                | Oczekiwany rezultat                                                                          |
|:----------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd"dowolną poprawną wartość starszą lub równą dziejszej dacie | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                  |
| 2. Wybierz w polu "wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1.                       | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                  |
| 3. Z listy rozwijanej wybierz listę wartość z przedzialu [1- 10] gości                               | Ustawienie w polu listy rozwijanej wybranej wartości                                         |
| 4. Naciśnij przycisk "Szukaj"                                                                        | Wyświetlenie komunikatu informującego o niemożliwości w danej chwilii załadowaniu propozycji |

8.

**Nazwa przypadku testowego:** Poprawne wyświetlenie kwoty należnej do zapłaty

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wyświetlenie kwoty należnej do zapłaty

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                                | Oczekiwany rezultat                                                                                                      |
|:------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd" dowolną poprawną wartość                                                                  | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                                              |
| 2. Wybierz w polu "wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1.                                                       | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                                              |
| 3. Z listy rozwijanej wybierz ilość gości z przedziału [1-10]                                                                        | Ustawienie w polu listy rozwijanej wybranej wartości                                                                     |
| 4. Naciśnij przycisk "Szukaj"                                                                                                        | Wyświetlenie wszystkich możliwych dostępnych w tym terminie pokoi                                                        |
| 5. Z listy dostępnych pokoi wybierz dwa pokoje tak żeby ilość gości wybrana w kroku 3 była rowna liczbie miejsc w wybranych pokojach | Podświetlenie wybranych pokoi oraz ustawienie wartosci Labela "Łączna kwota: " na "Łączna kwota: (suma wybranych pokoi)" |

9.

**Nazwa przypadku testowego:** Poprawne wyświetlenie formularza wyszukiwarki

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wypełnienie danych związanych z formularzem wyszukiwarki

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                               | Oczekiwany rezultat                                                                                                                  |
|:-----------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd" dowolną poprawną wartość                                                                 | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                                                          |
| 2. Wybierz w polu ""wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1.                                                     | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                                                          |
| 3. Z listy rozwijanej wybierz dowolną liczbe gości z przedziału [1-10]                                                              | Ustawienie w polu listy rozwijanej wybranej wartości                                                                                 |
| 4. Naciśnij przycisk "Szukaj"                                                                                                       | Wyświetlenie wszystkich możliwych dostępnych w tym terminie pokoi                                                                    |
| 5. Z listy dostępnych pokoi wybierz pozycje tak żeby liczba miejsc w wybranych pokojach byla równa liczbie osob wybranych w kroku 3 | Zaktualizowanie Labelu "Łączna kowata: (suma wybranych pokoi)", przejście przycisku "Przejdź dalej" w stan umożliwiający naciśnięcie |
| 6. Naciśnij przycisk "Przejdz dalej"                                                                                                | Przekierowanie na (adres) oraz zostaje załadowana strona zgodna z projektem GUI dla formularza osobowego                             |

10.

**Nazwa przypadku testowego:** Poprawne wypełnienie formularza osobowego

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienia formularza osobowego

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                                                 | Oczekiwany rezultat                                                                                                                                                                                                    |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Imię" dowolony ciąg składający sie z liter o długosci minimum 2                                                           | W polu tekstowym "Imię" pojawi sie wpisany tekst                                                                                                                                                                       |
| 2.  Wpisz w polu tekstowym "Nazwisko" dowolony ciąg składający sie z liter o długosci minimum 2                                                       | W polu tekstowym "Nazwisko" pojawi sie wpisany tekst                                                                                                                                                                   |
| 3. Wpisz w polu tekstowym "Numer dowodu osobistego" dowolony poprawny (poprawność sumy kontrolnej) ciąg składający sie z 3 liter alfabetu oraz 6 cyfr | W polu tekstowym "Numer dowodu osobistego" pojawi sie wpisany tekst, zostanie wyświetlony komunikat "Twoje dane zostaly zaakceptowane" oraz przycisk "Generuj kod płatności" przejdzie w stan umożliwiający kliknięcie |

11.

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Imię" (Podanie niedozwolonych znaków)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienia formularza osobowego

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                           | Oczekiwany rezultat                                                                                   |
|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Imię" dowolony ciąg zawierający znak lub cyfre o długosci minimum 2 | Wyświetlenie w momencie wybrania znaku cyfry lub znaku komunikatu informującego o niedozwolonym znaku |

12.

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Imię" (Podanie za krótkiego ciągu)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienia formularza osobowego

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                         | Oczekiwany rezultat                                                              |
|:-------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Imię" dowolony ciąg składający sie z samych liter o długosci krótszej niz 2 znaki | Wyświetlenie komunikatu o zbyt krótkiej wartosci wpisanej w pole tekstowe "Imię" |

13.

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Nazwisko" (Podanie niedozwolonych znaków)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienia formularza osobowego

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                               | Oczekiwany rezultat                                                                                   |
|:---------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Nazwisko" dowolony ciąg zawierający znak lub cyfre o długosci minimum 2 | Wyświetlenie w momencie wybrania znaku cyfry lub znaku komunikatu informującego o niedozwolonym znaku |

14.

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Nazwisko" (Podanie za krótkiego ciągu)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienia formularza osobowego

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                             | Oczekiwany rezultat                                                                  |
|:-----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Nazwisko" dowolony ciąg składający sie z samych liter o długosci krótszej niz 2 znaki | Wyświetlenie komunikatu o zbyt krótkiej wartosci wpisanej w pole tekstowe "Nazwisko" |

15.

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Numer dowodu osobistego" (Podanie za krótkiego ciągu)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienia formularza osobowego

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                         | Oczekiwany rezultat                                                                                 |
|:---------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------:|
| 1. Wpisz w polu tekstowym "Numer dowodu osobistego" dowolony ciąg znaków krótszy niz 9 znaków | Wyświetlenie komunikatu o zbyt krótkiej wartości wpisanej w pole tekstowe "Numer dowodu osobistego" |

16.

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Numer dowodu osobistego" (Podanie ciagu którego suma kontrola sie nie zgadza)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienia formularza osobowego

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                                                    | Oczekiwany rezultat                                                                                               |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------:|
| 1. Wpisz w polu tekstowym "Numer dowodu osobistego" dowolony ciąg znaków składający się z 3 liter i 6 znaków, których suma kontrolna nie bedzie poprawna | Wyświetlenie komunikatu o zbyt nieprawidłowej sumie kontrolnej wpisanej w pole tekstowe "Numer dowodu osobistego" |

17.

**Nazwa przypadku testowego:** Poprawne generowanie kodu płatności

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty, pokoje oraz formularz osobowy został wypełniony zaakceptowany.

**Wymagania:** Poprawny kod potwierdzający płatność

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                        | Oczekiwany rezultat                                                                                                                                                                                         |
|:--------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1. Naciśnij przycisk "Generuj kod płatności" | Zostaje wygenerowany zgodnie z przyjętymi założeniami i wyswietlony w szarym prostokącie unikatowy kod potwierdzający płatność, przycisk "Przejdź do płatności" przechodzi w stan umożliwiający nacisnięcie |

18.

**Nazwa przypadku testowego:** Przejście do niezależnego systemu płatności

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty, pokoje oraz formularz osobowy został wypełniony zaakceptowany, wygenerowano kod potwierdzająćy płatność.

**Wymagania:** Płatności

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

|                                                                   | Oczekiwany rezultat       |
|:-----------------------------------------------------------------:|:-------------------------:|
| 1. Naciśnij przycisk "Przejdz dalej" w częsci "Formularz osobowy" | Przekierowanie na (adres) |

19.

**Nazwa przypadku testowego:** Udało się opłacić

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres systemu platnosci), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty, pokoje oraz formularz osobowy został wypełniony zaakceptowany, wygenerowano kod potwierdzający płatność.

**Wymagania:** Płatność

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                | Oczekiwany rezulat                                                                                                                  |
|:--------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------:|
| 1. Wpisz wygenerowany kod płatnośći w polu tekstowym "Kod płatności" | Przekierowanie na (adres) oraz wyswietlenie komunikatu powtierdzającego rezerwację, zostaje dodany wpis o rezerwacji do bazy danych |

20.

**Nazwa przypadku testowego:** Nie udało sie opłacić

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) pod adresem (adres systemu platnosci), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty, pokoje oraz formularz osobowy został wypełniony zaakceptowany, wygenerowano kod potwierdzający płatność.

**Wymagania:** Płatność

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                               | Oczekiwany rezultat                                                                                                                |
|:-------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------:|
| 1. Wpisz kod płatnośći różny od wygenerowanego ale zgodny z przyjętymi założeniami w polu tekstowym "Kod płatności" | Przekierowanie na (adres) oraz wyswietlenie komunikatu informującego o niepowodzeniu rezerwacji, brak dodania wpisu do bazy danych |
