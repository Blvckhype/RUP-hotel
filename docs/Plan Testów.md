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

9. **Standardy**

10. **Odnośniki**

---

## Wstęp:

#### Wprowadzenie

„System rezerwacji pokoi hotelowych dla RUP Hotel” jest to aplikacja internetowa pozwalajaca zarezerwować pokoje w "RUP Hotel" na określony czas pobytu oraz dokonać natychmiastowej zapłaty za pobyt w hotelu w niezależnym systemie płatnosci "RUPłatności" znajdujący się pod adresem [s442333.students.wmi.amu.edu.pl](https://s442333.students.wmi.amu.edu.pl/). W Systemie będą dostępne 1, 2 i 3 osobowe pokoje z różną konfiguracją łóżek. Projekt jest tworzony w metodyce RUP.

#### Cel

Faza testowania w projekcie „System rezerwacji pokoi hotelowych dla RUP Hotel”, ma na celu znalezienie oraz usunięcie błędów powstałych podczas tworzenie Systemu, ma on rownież za zadanie zapewnienie jak najwyższej jakości produktu. Testy powinny zostać wykonywane od początku tworzenia Systemu w celu wczesnego wykrycia nieporządanych zachowań, ma to znaczenie na końcowy efekt całego projektu. Celem tego dokumentu jest ułatwienie pracy ludziom odpowiedzialnym za przeprowadzenie testów oraz całego procesu testowania.

---

## Opis testów

#### Obiekt: Aplikacja internetowa - Wyszukiwarka

Jest to pierwsza część aplikacji internetowej znajdująca się pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/), składa sie ona z dwóch głównych sekcji, pierwsza z nich to sekcja wyboru daty pobytu w hotelu a druga to sekcja umożliwiająca nam wybór liczby przyjezdnych gości oraz wybrać pokoje z listy dostępnych pokoi. W skład tej części wchodzą:

**Data pobytu:**

- Data przyjazdu - pole typu kalendarz

- Data wyjazdu - pole typu kalendarz

**Wybór pokoi:**

- Łączna kwota - pole typu Label

- Przejdź dalej - button

- Liczba gości - lista rozwijana

- Lista składająca się z dostępnych pokoi - custom client

#### Obiekt: Aplikacja internetowa - Formularz osobowy

Jest to drugi widok aplikacji internetowej znajdującej się pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), jej celem jest umożliwienie klientowi "RUP Hotel" wprowadzenia danych niezbędnych do ukończenia rezerwacji pokoju hotelowego oraz generuje kod niezbędny do potwierdzenia płatności tym samym całego procesu rezerwacji. W skład tej części wchodzi jedna głowna sekcja, której elementami są:

- Formularz składający się z 3 pól tekstowych (Imie, Nazwisko, Numer dowodu)

- Generuj kod płatności – button

- Twoje dane zostały/niezostały zaakceptowane – pole typu Label

- Przejdź do płatności – button

Po naciśnięciu przycisku przejdź do płatności, zostajemy przekierowni do niezależnego systemu płatności "RUPłatności", gdzie finalizujemy naszą rezerwację wpisując wygenerowany na stronie kod. Po zatwierdzeniu serwis "RUPłatności" przekierowuje nas na stronę początkową wraz z komunikatem o rezultacie rezerwacji.

---

## Funkcjonalność do przetestowania

System rezerwacji pokoi hotelowych dla "RUP Hotel" ma umożliwić użytkownikowi zarezerwowanie w wybranym przez niego terminie dowolnej ilośći pokoi w każdym z możliwych typów. Na bieżąco aktualizowana jest kwota należna do zapłaty, a na koniec generowany jest unikalny kod niezbędny do potwierdzenia płatności.

#### Pierwsza część aplikacji

- Funkcjonalność wyszukiwarki

#### Druga część aplikacji

- Pola tekstowe z formularza

- Poprawność wyświetlania statusu wypełnionych danych

- Poprawność generowania kodu do płatności 

- Funkcjonalność przycisku przejdz do płatności

#### Dodatkowo

- Poprawne załadowanie strony w przeglądarce

- Poprawność dodania rezerwacji do bazy danych

- Niedodanie rezerwacji do bazy w przypadku niepowodzenia płatności

- Generowanie poprawnego kodu płatności (zgodnego z wymaganiami)

- Przekierowanie na stronę systemu płatności

- Sprawdzenie czy wejście na "[s434786.students.wmi.amu.edu.pl/result?success=true](https://s434786.students.wmi.amu.edu.pl/result?success=true)" doda do bazy rezerwacje

- Przekierowanie na stornę poczatkową po udanej rezerwacji

- Przekierowanie na stronę początkową po nieudanej rezerwacji wraz z odpowiednim komunikatem

- Zgodność wyglądu strony razem z projektem GUI

---

## Funkcjonalność nietestowana

- Wszystkie napisy tekstowe (Label)

---

## Zespół

#### Podział obowiązków

| Osoba                 | Rola                            |
|:---------------------:|:-------------------------------:|
| Michał Starski        | Kierownik projektu, Programista |
| Maciej Więcek         | Programista                     |
| Katarzyna Makohon     | Analityk Systemowy              |
| Mateusz Lesiecki      | Menadżer testów                 |
| Bartłomiej Włodarczyk | Przegląd projektu               |
| Jędrzej Nowak         | Analityk Systemowy              |
| Krystian Kabat        | Integrator                      |
| Dominika Augustyniak  | Inżynier procesu                |
| Ada Andrzejczak       | Projektant GUI                  |
| Adam Ćwikliński       | Administrator Systemu           |
| Patrycja Łaźna        | Architekt Systemu               |
| Konrad Pierzyński     | Programista                     |

#### Harmonogram

| Nazwa testów | Data rozpoczęcia | Data zakończenia | Wykonał |
| ------------ | ---------------- | ---------------- | ------- |
| Jednostkowe  |                  |                  |         |
| Integracyjne |                  |                  |         |

---

## Strategia testowania

#### Testy jednostkowe

Projekt zakłada pokrycie testami jednostkowymi ~90% kodu. Testy jedndostkowe pisane są przez zespół programistów.

#### Testy funkcjonalne

**Nazwa przypadku testowego:** Poprawne wybranie terminów przyjazdu i wyjazdu z hotelu.

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) .

**Wymagania:** Wyświetlenie systemu rezerwacji pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/) .

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                    | Oczekiwany rezultat                                                                   |
|:--------------------------------------------------------:|:-------------------------------------------------------------------------------------:|
| 1. Wpisz w polu adresu "s434786.students.wmi.amu.edu.pl" | Zostanie załadowana strona systemu rezerwacji pokoi hotelowych, zgoda z projektem GUI |

**Nazwa przypadku testowego:** Poprawne wybranie terminów przyjazdu i wyjazdu z hotelu.

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl), formularz został załadowany poprawnie oraz wszyskie pola są widoczne i dostępne do edycji.    

**Wymagania:** Prawidłowe wybranie terminu przyjazdu i wyjazdu.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                              | Oczekiwany rezultat                                                                                     |
|:------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:|
| 1. Wybierz strzałkę w polu kalendarzowym "przyjazd" i ustaw datę poźniejszą od dzisiejszej o 2 dni                 | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                             |
| 2. Wybierz strzałkę w polu kalendarzowym "wyjazd" i ustaw datę poźniejszą od dzisiejszej o 5 dni od daty przyjazdu | Wartość pola kalendarzowego wskazuje wybrną przez nas datę oraz brak komunikatu informującego o błędzie |

**Nazwa przypadku testowego:** Wybranie daty przyjazdu która minęła

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji.    

**Wymagania:** Prawidłowe wybranie terminu przyjazdu i wyjazdu.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                | Oczekiwany rezultat                                                       |
|:----------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|
| 1. Wybierz strzałkę w polu kalendarzowym "przyjazd" i ustaw datę wcześniejszą od dzisiejszej o 3 dni | Wyświetlenie komunikatu informującego o wyborze daty która juz sie odbyła |

**Nazwa przypadku testowego:** Wybranie daty przyjazdu poźniejszej niz wyjazdu

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/) formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wybranie terminu przyjazdu i wyjazdu.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                              | Oczekiwany rezultat                                                                    |
|:--------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------:|
| 1. Wybierz strzałkę w polu kalendarzowym "przyjazd" i ustaw date poźniejszą o 7 dni od dzisiejszej | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                            |
| 2. Wybierz strzałkęw polu kalendarzowym "wyjazd" i ustaw datę poźniejszą o 3 dni od dzisiejszej    | Wyświetlenie komunikatu informującego o wyborze późniejszej daty przyjazdu niż wyjazdu |

**Nazwa przypadku testowego:** Poprawne wyświetlenie opcji pokojowych dla określonej liczby gośći (Istnieje możliwość pomieszczenia wszystkich gości)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wyświetlenie dostępnych pokoi.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                          | Oczekiwany rezultat                                                |
|:------------------------------------------------------------------------------:|:------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd" z dowolną poprawną wartość          | Wartość pola kalendarzowego wskazuje wybraną przez nas datę        |
| 2. Wybierz w polu "wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1. | Wartość pola kalendarzowego wskazuje wybraną przez nas datę        |
| 3. Z listy rozwijanej wybierz wartość z przedziału [1- 10] gości               | Ustawienie w polu listy rozwijanej wybranej wartości               |
| 4. Naciśnij przycisk "Szukaj"                                                  | Wyświetlenie wszystkich możliwych dostępnych w etym terminie pokoi |

**Nazwa przypadku testowego:** Poprawne wyświetlenie komunikatu o braku miejsc w wybranym terminie (Nie istnieje możliwość pomieszczenia wszystkich gości)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wyświetlenie dostępnych pokoi.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                 | Oczekiwany rezlutat                                                                                     |
|:-----------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd" dowolną poprawną wartość starszą lub równą dziejszej dacie | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                             |
| 2. Wybierz w polu "wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1.                        | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                             |
| 3. Z listy rozwijanej wybierz wartość z przedzialu [1- 10] gości                                      | Ustawienie w polu listy rozwijanej wybranej wartości                                                    |
| 4. Naciśnij przycisk "Szukaj"                                                                         | Wyświetlenie komunikatu informującego ze w danym okresie hotel nie może pomieścić wybranej liczby gości |

**Nazwa przypadku testowego:** Poprawne wyświetlenie informacji o braku połączenia z bazą danych

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, brak połączenia z bazą danych.

**Wymagania:** Prawidłowe wyświetlenie dostępnych pokoi.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                | Oczekiwany rezultat                                                                          |
|:----------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd"dowolną poprawną wartość starszą lub równą dziejszej dacie | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                  |
| 2. Wybierz w polu "wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1.                       | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                  |
| 3. Z listy rozwijanej wybierz wartość z przedzialu [1- 10] gości                                     | Ustawienie w polu listy rozwijanej wybranej wartości                                         |
| 4. Naciśnij przycisk "Szukaj"                                                                        | Wyświetlenie komunikatu informującego o niemożliwości w danej chwilii załadowaniu propozycji |

**Nazwa przypadku testowego:** Poprawne wyświetlenie kwoty należnej do zapłaty

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/),  formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wyświetlenie kwoty należnej do zapłaty.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                            | Oczekiwany rezultat                                                                                                      |
|:--------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd" dowolną poprawną wartość                                                              | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                                              |
| 2. Wybierz w polu "wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1.                                                   | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                                              |
| 3. Z listy rozwijanej wybierz ilość gości z przedziału [1-10]                                                                    | Ustawienie w polu listy rozwijanej wybranej wartości                                                                     |
| 4. Naciśnij przycisk "Szukaj"                                                                                                    | Wyświetlenie wszystkich możliwych dostępnych w tym terminie pokoi                                                        |
| 5. Z listy dostępnych pokoi wybierz pokoje tak żeby ilość gości wybrana w kroku 3 była rowna liczbie miejsc w wybranych pokojach | Podświetlenie wybranych pokoi oraz ustawienie wartosci Labela "Łączna kwota: " na "Łączna kwota: (suma wybranych pokoi)" |

**Nazwa przypadku testowego:** Poprawne wyświetlenie formularza wyszukiwarki

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl/), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji.

**Wymagania:** Prawidłowe wypełnienie danych związanych z formularzem wyszukiwarki.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                               | Oczekiwany rezultat                                                                                                                                                                                     |
|:-----------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1. Wybierz w polu kalendarzowym "przyjazd" dowolną poprawną wartość                                                                 | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                                                                                                                             |
| 2. Wybierz w polu ""wyjazd" dowolną poprawną datę późniejszą od tej z punktu 1.                                                     | Wartość pola kalendarzowego wskazuje wybraną przez nas datę                                                                                                                                             |
| 3. Z listy rozwijanej wybierz dowolną liczbe gości z przedziału [1-10]                                                              | Ustawienie w polu listy rozwijanej wybranej wartości                                                                                                                                                    |
| 4. Naciśnij przycisk "Szukaj"                                                                                                       | Wyświetlenie wszystkich możliwych dostępnych w tym terminie pokoi                                                                                                                                       |
| 5. Z listy dostępnych pokoi wybierz pozycje tak żeby liczba miejsc w wybranych pokojach byla równa liczbie osob wybranych w kroku 3 | Zaktualizowanie Labelu "Łączna kowata: (suma wybranych pokoi)", przejście przycisku "Przejdź dalej" w stan umożliwiający naciśnięcie                                                                    |
| 6. Naciśnij przycisk "Przejdź dalej"                                                                                                | Przekierowanie na adres[s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data) oraz zostaje załadowana strona zgodna z projektem GUI dla dla drugiego widoku |

**Nazwa przypadku testowego:** Poprawne wypełnienie formularza osobowego

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienie formularza osobowego.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                                                 | Oczekiwany rezultat                                                                                                                                                                                                    |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Imię" dowolony ciąg składający sie z liter o długości minimum 2                                                           | W polu tekstowym "Imię" pojawi sie wpisany tekst                                                                                                                                                                       |
| 2.  Wpisz w polu tekstowym "Nazwisko" dowolony ciąg składający sie z liter o długości minimum 2                                                       | W polu tekstowym "Nazwisko" pojawi sie wpisany tekst                                                                                                                                                                   |
| 3. Wpisz w polu tekstowym "Numer dowodu osobistego" dowolony poprawny (poprawność sumy kontrolnej) ciąg składający sie z 3 liter alfabetu oraz 6 cyfr | W polu tekstowym "Numer dowodu osobistego" pojawi sie wpisany tekst, zostanie wyświetlony komunikat "Twoje dane zostaly zaakceptowane" oraz przycisk "Generuj kod płatności" przejdzie w stan umożliwiający kliknięcie |

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Imię" (Podanie niedozwolonych znaków)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienie formularza osobowego.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                           | Oczekiwany rezultat                                                                                   |
|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Imię" dowolony ciąg zawierający znak lub cyfre o długości minimum 2 | Wyświetlenie w momencie wybrania znaku cyfry lub znaku komunikatu informującego o niedozwolonym znaku |

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Imię" (Podanie za krótkiego ciągu)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienie formularza osobowego.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                         | Oczekiwany rezultat                                                              |
|:-------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Imię" dowolony ciąg składający sie z samych liter o długosci krótszej niz 2 znaki | Wyświetlenie komunikatu o zbyt krótkiej wartości wpisanej w pole tekstowe "Imię" |

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Nazwisko" (Podanie niedozwolonych znaków)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienie formularza osobowego.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                               | Oczekiwany rezultat                                                                                   |
|:---------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Nazwisko" dowolony ciąg zawierający znak lub cyfre o długości minimum 2 | Wyświetlenie w momencie wybrania znaku cyfry lub znaku komunikatu informującego o niedozwolonym znaku |

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Nazwisko" (Podanie za krótkiego ciągu)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienie formularza osobowego.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                             | Oczekiwany rezultat                                                                  |
|:-----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|
| 1.  Wpisz w polu tekstowym "Nazwisko" dowolony ciąg składający sie z samych liter o długości krótszej niz 2 znaki | Wyświetlenie komunikatu o zbyt krótkiej wartości wpisanej w pole tekstowe "Nazwisko" |

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Numer dowodu osobistego" (Podanie za krótkiego ciągu)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienie formularza osobowego.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                         | Oczekiwany rezultat                                                                                 |
|:---------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------:|
| 1. Wpisz w polu tekstowym "Numer dowodu osobistego" dowolony ciąg znaków krótszy niż 9 znaków | Wyświetlenie komunikatu o zbyt krótkiej wartości wpisanej w pole tekstowe "Numer dowodu osobistego" |

**Nazwa przypadku testowego:** Błędne wypełnienie pola tekstowego "Numer dowodu osobistego" (Podanie ciągu którego suma kontrola sie nie zgadza)

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty oraz pokoje.

**Wymagania:** Prawidłowe wypełnienie formularza osobowego.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                                                    | Oczekiwany rezultat                                                                                          |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------:|
| 1. Wpisz w polu tekstowym "Numer dowodu osobistego" dowolony ciąg znaków składający się z 3 liter i 6 znaków, których suma kontrolna nie będzie poprawna | Wyświetlenie komunikatu o nieprawidłowej sumie kontrolnej wpisanej w pole tekstowe "Numer dowodu osobistego" |

**Nazwa przypadku testowego:** Poprawne generowanie kodu płatności

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty, pokoje oraz formularz osobowy został wypełniony i zaakceptowany.

**Wymagania:** Poprawny kod potwierdzający płatność.

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                        | Oczekiwany rezultat                                                                                                                                                                                         |
|:--------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1. Naciśnij przycisk "Generuj kod płatności" | Zostaje wygenerowany zgodnie z przyjętymi założeniami i wyswietlony w szarym prostokącie unikatowy kod potwierdzający płatność, przycisk "Przejdź do płatności" przechodzi w stan umożliwiający nacisnięcie |

**Nazwa przypadku testowego:** Przejście do niezależnego systemu płatności

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty, pokoje oraz formularz osobowy został wypełniony i zaakceptowany, wygenerowano kod potwierdzająćy płatność.

**Wymagania:** Płatności

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

|                                                                   | Oczekiwany rezultat                                                                          |
|:-----------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|
| 1. Naciśnij przycisk "Przejdź dalej" w częsci "Formularz osobowy" | Przekierowanie na [s442333.students.wmi.amu.edu.pl](https://s442333.students.wmi.amu.edu.pl) |

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s442333.students.wmi.amu.edu.pl](https://s442333.students.wmi.amu.edu.pl), formularz został załadowany poprawnie oraz wszystkie pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty, pokoje oraz formularz osobowy został wypełniony zaakceptowany, wygenerowano kod potwierdzający płatność.

**Wymagania:** Płatność

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                | Oczekiwany rezulat                                                                                                                                                                                     |
|:--------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1. Wpisz wygenerowany kod płatności w polu tekstowym "Kod płatności" | Przekierowanie na [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl) oraz wyświetlenie komunikatu potwierdzającego rezerwację, zostaje dodany wpis o rezerwacji do bazy danych |

**Nazwa przypadku testowego:** Nie udało sie opłacić

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) pod adresem [s442333.students.wmi.amu.edu.pl](https://s442333.students.wmi.amu.edu.pl), formularz został załadowany poprawnie oraz wszystkei pola są widoczne i dostępne do edycji, zostały wybrane prawidłowe daty, pokoje oraz formularz osobowy został wypełniony i zaakceptowany, wygenerowano kod potwierdzający płatność.

**Wymagania:** Płatność

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                               | Oczekiwany rezultat                                                                                                                                                                                   |
|:-------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1. Wpisz kod płatności różny od wygenerowanego ale zgodny z przyjętymi założeniami w polu tekstowym "Kod płatności" | Przekierowanie na [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl) oraz wyswietlenie komunikatu informującego o niepowodzeniu rezerwacji, brak dodania wpisu do bazy danych |

**Nazwa przypadku testowego:** Ominięcie wprowadzenia danych, wejście bezpośrednio na adres wygenerowany po  zatwierdzonej płatności

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyższa)) na pustej karcie.

**Wymagania:** Bezpieczeństwo

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                                            | Oczekiwany rezultat                                                                                                         |
|:------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
| 1. W polu adresu wpisać adres [s434786.students.wmi.amu.edu.pl/result?success=true](https://s434786.students.wmi.amu.edu.pl/result?success=true) | Przekierowanie na [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl) oraz nie dodanie wpisu w bazie |

**Nazwa przypadku testowego:** Ominięcie wprowadzenia danych, wejście bezpośrednio na adres wygenerowany po niezatwierdzonej płatności

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 (lub wyższa) albo Mozilla Firefox wersja 62.0.3 (lub wyżśza)) na pustej karcie.

**Wymagania:** Bezpieczeństwo

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                                       | Oczekiwany rezultat                                                                                                         |
|:-------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
| 1. W polu adresu wpisać [s434786.students.wmi.amu.edu.pl/result?success=true](https://s434786.students.wmi.amu.edu.pl/result?success=false) | Przekierowanie na [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl) oraz nie dodanie wpisu w bazie |

**Nazwa przypadku testowego:** Ominięcie wprowadzenia danych, wejście bezpośrednio na adres drugiego widoku

**Warunki wstępne:** Użytkownik ma otwarta przeglądarke (Chrome wersja Wersja 70.0.3538.110 lub Mozilla Firefox wersja 62.0.3) na pustej karcie.

**Wymagania:** Bezpieczeństwo

**Autor:** Mateusz Lesiecki

**Data aktualizacji:** 10.12.2018

| Kroki                                                                                                                            | Oczekiwany rezultat                                                                          |
|:--------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|
| 1. W polu adresu wpisać adres [s434786.students.wmi.amu.edu.pl/client-data](https://s434786.students.wmi.amu.edu.pl/client-data) | Przekierowanie na [s434786.students.wmi.amu.edu.pl](https://s434786.students.wmi.amu.edu.pl) |

---

## Testy automatyczne

- Poprawne wypełnienie formularza osobowego (Imie : "Jan", Nazwisko: "Nowak", Numer dowodu osobistego : "ABA300000")
- Poprawne wyświetlenie formularza wyszukiwarki (Data przyjadzu : 09.01.2019, Data wyjazdu: 15.01.2019, Liczba osob: 5, Kwota: 350)

---

## Środowisko testowe

- Łącze min. 1 MBit/s

- Przeglądarka Firefox wersja 62.0.3 lub Chrome 70.0.3538.110 (lub wyższe)

- Windows 10 

- Włączona obsługa Javy

- Język polski

- Rozdzielczość min. 1280 x 720

---

## Standardy

- IEEE Standard for Software Test Documentation (ANSI/IEEE std 829)

---

## Odnośniki

- [Dokumentacja REST API](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Dokumentacja%20REST%20API.md)

- [Model bazy danych](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Model_Bazy_Danych.md)

- [Ogólny model informacyjny](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Model_Bazy_Danych.md)

- [Specyfikacja architektury systemu](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Specyfikacja%20architektury%20systemu.md)

- [Specyfikacja wykorzystywanych procesów](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Specyfikacja%20wykorzystywanych%20proces%C3%B3w.md)

- [Specyfikacja wymagań systemowych](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Specyfikacja%20wymaga%C5%84%20systemowych.md)

- [Diagram przypadków użycia](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Diagram%20przypadk%C3%B3w%20u%C5%BCycia.pdf)

- [Diagram przypadków użycia 2](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Diagram%20przypadk%C3%B3w%20u%C5%BCycia-2.png)

- [Diagram przypadków użycia 3](https://github.com/michalStarski/RUP-hotel/blob/master/docs/Diagram%20przypadk%C3%B3w%20u%C5%BCycia-3.png)
