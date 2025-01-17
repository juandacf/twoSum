
var twoSum = function(nums, target) {
    
    for(var i = 0; i <= nums.length-2; i++ ){
        for(var b=i+1; b<=nums.length -1; b++){
            if(nums[i]+nums[b]=== target){
                var answerArray = []
                answerArray.push(i);
                answerArray.push(b);
                return answerArray
            }
        }
    }
};



