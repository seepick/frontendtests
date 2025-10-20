# Feature -> Functionaliteit
# Background -> Achtergrond
# Rule -> Regel
# Scenario -> Voorbeeld, Scenario
# Scenario Outline -> Abstract Scenario
# Examples -> Voorbeelden
# Given -> * Gegeven, Stel
# When  -> * Als, Wanneer
# Then -> * Dan
# And -> * En
# But -> * Maar

# https://cucumber.io/docs/gherkin/languages/
# https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/localisation.md

# the following comment will switch the language to Dutch 
# TODO possible to set it globally?
# language: nl
Functionaliteit: zoeken
    Scenario: zoeken en resultaat tonen
        # Stel
        Gegeven ik ben op de thuis pagina
        # Als
        Wanneer ik naar "cypress" zoek
        Dan beinhoud de resultaat tekst "cyp"
