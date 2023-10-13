// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// 創建測試資料
Cypress.Commands.add('createDefaultTodos',()=>{
    cy.get('.new-todo',{log:false})
    .type('洗衣服{enter}',{log:false})
    .type("買菜{enter}",{log:false})
    .type("運動{enter}",{log:false});

    Cypress.log({
        name:'createDefaultTodos',
        displayName:'建立測試資料',
        message:'建立三筆資料',
        consoleProps:()=>{
            return {
                msg:"簡化好方便！"
            }
            
        }
    })
})

