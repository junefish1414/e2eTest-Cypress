describe('add todo',()=>{
  it('在輸入區新增一個“洗衣服”項目後，列表可以看到“洗衣服”的項目',()=>{
    // 準備情境
    // 拜訪根目錄的網址，baseUrl 可在 cypress.config.js 裡面查看
    cy.visit('/');
    cy.get('.new-todo').type('洗衣服').type("{enter}");

    // 檢查
    // 有沒有洗衣服的項目
    cy.get('.todo-list li').eq(0).should('contain', '洗衣服');
    // 確認側邊item數目
    cy.get('.todo-count').contains('1 item left');
    // 確認input欄是否有正確清空
    cy.get('.new-todo').should('have.text','');
  })
})
