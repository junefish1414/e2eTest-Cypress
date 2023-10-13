describe('delete item',()=>{
  it('刪除「運動」項目，列表的「運動」會消失。',()=>{
    // 準備情境: 做出三個選項後，刪掉「運動」此項目 (這邊使用 createDefaultTodos 來建立測試資料，可在 `support/commands.js` 內查看)
    cy.visit('/');
    cy.createDefaultTodos();

    // 執行： 找到「運動」選項的叉叉，然後點擊叉叉進行刪除
    cy.get('.todo-list li button').eq(2).invoke('show').click(); //因為 hover 才會顯示叉叉，所以這邊可以選擇先讓他 show 再點擊
    // cy.get('.todo-list li button').eq(2).click({force:true}); // 或是強制點擊

    // 檢查：
    // 1. 確認列表內沒有「運動」的項目了
    cy.get('.todo-list li').contains('運動').should('have.length',0);
    // 2. 確認左下角的項目計數剩下兩個 
    cy.get('.todo-count').contains('2 items left');
  })
})
