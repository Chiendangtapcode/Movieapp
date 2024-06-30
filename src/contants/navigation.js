export const navigation = [
    {
        label: "TV Show",
        href: 'tv',
        icon: <i className="fa-solid fa-tv"></i>
    },
    {
        label: "Movies",
        href: 'movie',
        icon: <i className="fa-solid fa-film"></i>
    },
    {
        label: "Recently Added",
        href: 'recently',
        icon: <i className="fa-solid fa-signal"></i>
    },
    {
        label: "My List",
        href: 'myList',
        icon: <i className="fa-solid fa-heart"></i>
    },
]

export const mobieNavigation = [
    {
        label: "Home",
        href: '/',
        icon: <i className="fa-solid fa-house"></i>
    },
    ...navigation,
    {
        label: "Search",
        href: '/search',
        icon: <i className="fa-solid fa-search"></i>
    }
]