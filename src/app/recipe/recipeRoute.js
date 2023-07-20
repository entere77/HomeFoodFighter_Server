module.exports = function (app) {
    const recipe = require("./recipeController");
  
    //15. 레시피의 리뷰(후기) 등록하기
    app.post("/recipe/:recipe_id/review/:userid", recipe.PostRegisterReview);

    //20. 레시피 상세 페이지 조회
    app.get("/recipe/detail", recipe.GetDetail);
    
    //34. 전체 레시피 조회
    app.get("/recipe", recipe.GetallRecipe);

    //39. 음식이름으로 레시피 조회
    app.get("/recipe/name", recipe.GetFoodNameRecipe);  
};