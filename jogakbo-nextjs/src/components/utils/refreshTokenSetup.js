// 1시간 후에는 tokenId가 만료되므로 데이터에 액세스하거나 사용자를 인증하는 데 사용할 수 없음
// 새로운 tokenId를 생성해야함

export const refreshTokenSetup = res => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  //res.tokenObj.expires_in = 3600

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponese();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthRes:", newAuthRes);
    console.log("new auth Token", newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };
  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};
