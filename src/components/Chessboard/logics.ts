import images from "../../assets/images/images";

export const constant = {
    zero: 0,
    one: 1,
    two: 2,
    seven: 7,
    eight: 8
}

export const setPieces = (value: any) => {
    let imgSrc;

    if(value[constant.zero] === constant.two) imgSrc = images.pawnB
    if(value[constant.zero] === constant.seven) imgSrc = images.pawnW

    if(value[constant.zero] === constant.one){
        for(let i=constant.zero; i<images.black.length; i++){
            if(value[constant.zero] === constant.one && value[constant.one] === i+constant.one) imgSrc = images.black[i]
        }
    }

    if(value[constant.zero] === constant.eight){
        for(let i=constant.zero; i<images.white.length; i++){
            if(value[constant.zero] === constant.eight && value[constant.one] === i+constant.one) imgSrc = images.white[i]
        }
    }

    return imgSrc;
}