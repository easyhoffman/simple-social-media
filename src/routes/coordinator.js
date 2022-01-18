

export const goToFeedPage = (history) => {
    history.push("/feed")
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToLoginPage = (history) => {
    history.push("/")
}

export const goToSignUpPage = (history) => {
    history.push("/signup")
}

