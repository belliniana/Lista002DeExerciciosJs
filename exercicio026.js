const formatarDatas = datas =>
    datas.map(d => {
        const [dia, mes, ano] = d.split("/");
        return { dia, mes, ano };
    });