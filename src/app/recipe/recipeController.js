const recipeProvider = require("../../app/recipe/recipeProvider");
const recipeService = require("../../app/recipe/recipeService");
const baseResponse = require("../../../config/baseResponse");
const { response, errResponse } = require("../../../config/response");


/**
 * API No. 15
 * API Name : 레시피의 리뷰(후기) 등록
 * [POST] /recipe/:recipe_id/review/:userid
 */
exports.PostRegisterReview = async function (req, res) {
    const recipe_id = req.params.recipe_id;
    const userid = req.params.userid;
    const star = req.body.star;
    const content = req.body.content;

    console.log(recipe_id,userid,star);

    const Info = [recipe_id, userid, star, content];

    // 빈 값 체크
    if(!content){
        return res.send(errResponse(baseResponse.CONTENT_EMPTY));
    }

    //최소 별점 값 체크
    if(star<0.5){
        return res.send(errResponse(baseResponse.STAR_CHECK1));
    }
    else{ // 0.5 단위 체크
        if(star % 0.5 != 0){
            return res.send(errResponse(baseResponse.STAR_CHECK2));
        }
    }
    const ReviewInfoResult = await recipeService.registerReview(Info);
    return res.send(ReviewInfoResult);

};



/**
 * API No. 34
 * API Name : 레시피 전체조회
 * [GET] /recipe/all
 */
exports.GetallRecipe = async function (req, res) {

    var RecipeType = req.param('type');

    
    if(!RecipeType){
        const allTypeResult = await recipeProvider.allRecipe(RecipeType);
        return res.send(allTypeResult);
    }

    else{
        const RecipeTypeResult = await recipeProvider.TypeRecipe(RecipeType);
        return res.send(RecipeTypeResult);
    }

}


/**
 * API No. 39
 * API Name : 음식 이름으로 레시피조회
 * [GET] /recipe/:recipe_name
 */
/*
exports.GetFoodNameRecipe = async function (req, res) {
    const recipe_name = req.params.recipe_name;
    const Info = recipe_name;

    const FoodNameRecipeResult = await recipeProvider.FoodNameRecipe(Info);
    return res.send(FoodNameRecipeResult);
}

*/