export enum ToastType {
    Default = 1,
    Success,
    Info,
    Warning,
    Error,
  }


export function displayToast(message: string, iconPath: string = "", toastType: ToastType = ToastType.Default){

    let cssClasses = ''
    switch(toastType) { 
        case ToastType.Success: { 
            cssClasses = "green lighten-4 grey-text text-darken-3"
            break; 
        } 
        case ToastType.Info: { 
            cssClasses = "light-blue lighten-4 grey-text text-darken-3"
            break; 
        } 
        case ToastType.Warning: { 
            cssClasses = "orange lighten-4 grey-text text-darken-3"
            break; 
        } 
        case ToastType.Error: { 
            cssClasses = "red lighten-4 grey-text text-darken-3"
            break; 
        } 
            default: { 
            break; 
        } 
    } 

    let imgStr = (iconPath == '') ? '' : '<img src="' + iconPath + '" width="20" height="20">&nbsp;'
    
    let resHtml = '<span'
        + '>' 
        + imgStr
        + message
        + '</span>'

    M.toast({html: resHtml, classes: cssClasses})
}