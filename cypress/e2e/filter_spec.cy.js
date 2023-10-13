describe('filter item',()=>{
  it('勾選"買菜的選項後"，應該要正確出現勾選並在completed出現',()=>{
    // 準備情境: 做出三個選項後，買菜打勾
    cy.visit('/');
    cy.get('.new-todo').type('洗衣服{enter}').type("買菜{enter}").type("運動{enter}");
    cy.get('.todo-list li').eq(1).find('.toggle').check();

    // 執行: 切到篩選的 Completed Tab
    cy.get('.filters li').eq(2).as('completedTab').contains('Completed').click();

    // 檢查:
    // 1. 確認切換到 [完成] 是否只有一個項目
    cy.get('.todo-list li').as('shopping').should('have.length',1);
    // 2. 確認前方的 checkbox 是否有被勾起
    cy.get('@shopping').get('.toggle').should('be.checked');
    // 3. 確認該 li 是否有加上 completed 的 class
    cy.get('@shopping').should('have.class','completed');
    // 4. 剩下的項目應該剩餘兩項
    cy.get('.todo-count').contains('2 items left');
    // 5. 確認 [完成] 的 tab 應該要有 selected 的 class
    cy.get('@completedTab').get('a').should('have.class','selected');
  })
})
