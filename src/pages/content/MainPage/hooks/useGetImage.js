const imageUrl = [
  [
    "https://images.unsplash.com/photo-1620293087949-b026c58aa946?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkzNTB8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1694010216583-f5dd82c91758?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkzNjF8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1680215426340-cecf0cb11cdd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkzNjJ8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1556326059-12646fcadd35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkzNjN8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1680215350482-04bd380ceb65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkzNjN8&ixlib=rb-4.0.3&q=85",
  ],
  [
    "https://images.unsplash.com/photo-1640315852249-63951c12fccc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkwMzh8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1644191199586-789b1d75c8c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkwNDN8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1642753397167-a1e416f28673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkwNDR8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1639729513361-6c8305582e17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkwNDV8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1640592276475-56a1c277a38f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkwNjB8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1639305239869-8ef28a21b313?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkwNjN8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1639322537163-dd9e9a344a97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDkwNjR8&ixlib=rb-4.0.3&q=85",
  ],
  [
    "https://images.unsplash.com/photo-1621243772510-a42aa984b1a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDk1MzR8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1460407903781-7bb9b9cd2fb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDk1Mzl8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1646645733353-55c8bfb60a70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mzg0NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMwMDk1NDB8&ixlib=rb-4.0.3&q=85",
  ],
];

export const useGetImage = () => {
  const getImageUrl = (index) => {
    return imageUrl[index][Math.floor(Math.random() * imageUrl[index].length)];
  };

  let imageList = ["", "", ""];
  imageList[0] = getImageUrl(0);
  imageList[1] = getImageUrl(1);
  imageList[2] = getImageUrl(2);

  return imageList;
};
