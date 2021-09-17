'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "edd1118c6d312cd2f85b7ef9bb0f787d",
"assets/assets/images/coin.png": "43cb263831c97186c37c37140734f237",
"assets/assets/images/diagnostico/areasLingua.png": "b1743ceaea66dfbc790278aeb46c7be6",
"assets/assets/images/diagnostico/blood_pressure_512px.png": "64c2d3e4d4b87fb04591244d46689401",
"assets/assets/images/diagnostico/checklist_512px.png": "71e60227f7acd386e1a235f1b6986927",
"assets/assets/images/diagnostico/ear_512px.png": "1c4abbbb6535096c91e3b1de75d24b9b",
"assets/assets/images/diagnostico/observation_512px.png": "84dd363f7f0e3f41394d2773fba6aad6",
"assets/assets/images/diagnostico/tongue_512px.png": "84106411695253ade0e2d4ed9942c810",
"assets/assets/images/favicon.ico": "32b3c45f438acbf7d572485668a90eb6",
"assets/assets/images/favicon.png": "41b413c536eef2300eeafdd34bffe1e3",
"assets/assets/images/fitoterapia/categoriaPlantas.png": "3373a5b3b53389d35a550119d8007105",
"assets/assets/images/fitoterapia/fitoTeoria.png": "6bda25fcf605986e0cd24f6c81ac9e28",
"assets/assets/images/fitoterapia/glossario.png": "b1a017bc47c423e3114dcfa2f14b0d4e",
"assets/assets/images/fitoterapia/listaPlantas.png": "1ae4b7ac22cae5f7794998a8347cfca0",
"assets/assets/images/fitoterapia/plantas/Abacateiro.jpg": "a57fc853a5e8cdd486a7c41e2b6fbb5e",
"assets/assets/images/fitoterapia/plantas/abobora.jpg": "46fb2395df3d05689ddcb7678f416831",
"assets/assets/images/fitoterapia/plantas/agriao.jpg": "cc37d360c1964ee04448c7736f4ecb20",
"assets/assets/images/fitoterapia/plantas/Alca%25C3%25A7uz.JPG": "4c83016478031b200a20b4dcb849a8fe",
"assets/assets/images/fitoterapia/plantas/Alcachofra.jpg": "664e6d6833010a3aad291e7d4b6c1494",
"assets/assets/images/fitoterapia/plantas/Alecrim.jpg": "9c3ce5411cca63707008ad8a277f0ca6",
"assets/assets/images/fitoterapia/plantas/alecrimb.JPG": "c88f6c6ef35740600287b85c6775aad4",
"assets/assets/images/fitoterapia/plantas/Alfafa.jpg": "4ddb2bb53545585875a35b337b05b466",
"assets/assets/images/fitoterapia/plantas/Alfazema.jpg": "a9ce1ec38f59b96f55d2ddca41716f7a",
"assets/assets/images/fitoterapia/plantas/Alho.jpg": "b280eaee17ae99853fe031319f72b309",
"assets/assets/images/fitoterapia/plantas/Amoreira.jpg": "333e91cdfada22d10a367a11ea758005",
"assets/assets/images/fitoterapia/plantas/Angelica%2520%2520archangelica.jpg": "f5f8295c87846ae65df3a4fda81e2acd",
"assets/assets/images/fitoterapia/plantas/angelica_archangelica.jpg": "caed8cc10446fe44e841a0a0c42cf94f",
"assets/assets/images/fitoterapia/plantas/anis-estrelado.jpg": "d0ea99a40c5dd235a5d095353ee7a13a",
"assets/assets/images/fitoterapia/plantas/arnica%2520montana.jpg": "c3957d924845d4fd41adf237d66b447a",
"assets/assets/images/fitoterapia/plantas/Arroz.jpeg": "c3a037cb76bd081b66fc3384727619ee",
"assets/assets/images/fitoterapia/plantas/artemisia_vulgaris.jpg": "de6e67481125b14a3342c8b383feb080",
"assets/assets/images/fitoterapia/plantas/Assapeixe.jpg": "9585e4a01505e2807bb66bfd09472e16",
"assets/assets/images/fitoterapia/plantas/Astragalo.jpg": "df479c9aac3149ab925c7556a384f3ee",
"assets/assets/images/fitoterapia/plantas/Aveia.JPG": "320f3da3ce9fba7650bf933f585d7cb6",
"assets/assets/images/fitoterapia/plantas/babosa.png": "d1544c12203d92500fab015025448ca3",
"assets/assets/images/fitoterapia/plantas/barbatim%25C3%25A3o.jpg": "f7353340af9ab287652077033f8e1df9",
"assets/assets/images/fitoterapia/plantas/bardana.jpg": "91b47a3b85d2e2f3848f5f4156c2527a",
"assets/assets/images/fitoterapia/plantas/batata%2520Yacon.png": "c756ae68b3fa3646ff14e3dd50743f4d",
"assets/assets/images/fitoterapia/plantas/Beldroega.jpg": "344f0f9a8f2daf217f9db9028feee74c",
"assets/assets/images/fitoterapia/plantas/berinjela.jpg": "7a1e958b998a14aa530d8eac49ba19ec",
"assets/assets/images/fitoterapia/plantas/boldo.jpg": "039662938dd3d133ed03460c9973c85d",
"assets/assets/images/fitoterapia/plantas/cacto%2520flor%2520da%2520noite.jpg": "8f112567a27b1fe40fd07fe5be330ca8",
"assets/assets/images/fitoterapia/plantas/calendula.jpg": "ad34933a67239851ecc9ff6c7561f3dd",
"assets/assets/images/fitoterapia/plantas/camomila.jpg": "374a48c1e63f3b561cbeee3b75148740",
"assets/assets/images/fitoterapia/plantas/cana%2520de%2520a%25C3%25A7ucar.jpg": "2db889804732b0c9444e0f2425791c85",
"assets/assets/images/fitoterapia/plantas/cana%2520do%2520brejo.jpg": "91f718eebac6da96526eb1fbbad5ccec",
"assets/assets/images/fitoterapia/plantas/canela%2520cinnamomum-cassia.jpg": "096f4407118cf76e4a69a8acb78648e4",
"assets/assets/images/fitoterapia/plantas/canela%2520de%2520velho.jpg": "1b6aa9a3f782329426b43186cfd053ea",
"assets/assets/images/fitoterapia/plantas/Canela%2520do%2520ceilao.jpg": "11053add071767c2c060974b4355307c",
"assets/assets/images/fitoterapia/plantas/canfora.jpg": "59c582e0d15374c45e6f406805ce1e2e",
"assets/assets/images/fitoterapia/plantas/capim%2520limao.jpeg": "8ac09e835c277bac024ac05a70d8c582",
"assets/assets/images/fitoterapia/plantas/caqui.jpg": "86ca11dfba74bbd784b41053f5a5fad4",
"assets/assets/images/fitoterapia/plantas/cardamomo.jpg": "5789c89a86b91329b897249154e18cc9",
"assets/assets/images/fitoterapia/plantas/cardo%2520mariano.jpg": "14c5a194141cf848c59471e1bb33df42",
"assets/assets/images/fitoterapia/plantas/carqueja.jpg": "5b5f2967e9218d16c272b04b7f4c9dad",
"assets/assets/images/fitoterapia/plantas/cartamo.jpg": "1c0482c798ab852410af918d9803bc72",
"assets/assets/images/fitoterapia/plantas/cascara_sagrada.jpg": "f05727fd80d04f0c17bc09161716c192",
"assets/assets/images/fitoterapia/plantas/castanha%2520da%2520india.png": "82fbec55e6efeb611abfd340f4242084",
"assets/assets/images/fitoterapia/plantas/catinga%2520de%2520mulata.jpg": "f32a429ef6e79ab4eba64b1c8c702731",
"assets/assets/images/fitoterapia/plantas/catuaba.jpg": "2407aa6bceab41e1b61a5a38466ad913",
"assets/assets/images/fitoterapia/plantas/cavalinha.jpg": "919da945703b556e77aaa240a8cd0592",
"assets/assets/images/fitoterapia/plantas/cebolinha.jpg": "c49e2227a9dd28afe8ede6ef76929060",
"assets/assets/images/fitoterapia/plantas/centelha%2520asiatica.jpg": "6d32bc814f8a04e93ca704c760153589",
"assets/assets/images/fitoterapia/plantas/Cerejeira.jpg": "86776b28c344051a1695a2628e20e85f",
"assets/assets/images/fitoterapia/plantas/cha%2520verde.jpg": "f0b349595250669c65785ed1566e0ae3",
"assets/assets/images/fitoterapia/plantas/chapeu%2520de%2520couro.JPG": "563e1dc3ea63dc87a835dbc4b1c06bca",
"assets/assets/images/fitoterapia/plantas/chicoria.jpg": "f6459340b00260e21842e942b65793ea",
"assets/assets/images/fitoterapia/plantas/chlorella.jpg": "c23b9bbe1adb056bd374b4187e21dc3a",
"assets/assets/images/fitoterapia/plantas/cimic%25C3%25ADfuga.jpg": "86391a02e58f7bad897dd5f645b78d7f",
"assets/assets/images/fitoterapia/plantas/coentro.jpg": "4b5728b505067381f8b635f4c160dcb2",
"assets/assets/images/fitoterapia/plantas/copaiba.jpg": "40e14f64f355dbfe505a15bbf0ad5167",
"assets/assets/images/fitoterapia/plantas/copaiba.png": "ee92c823c8c40858562bcb7de19da53c",
"assets/assets/images/fitoterapia/plantas/cranberry.jpg": "72950acfbcac0afd3739d613092c3b14",
"assets/assets/images/fitoterapia/plantas/Crataegus.png": "72cb8368ac84ca7d7818055d9e7e2592",
"assets/assets/images/fitoterapia/plantas/cravo%2520da%2520india.jpg": "82e5639045bd75cf552ea3666232511e",
"assets/assets/images/fitoterapia/plantas/Curcuma_longa.jpg": "37465c73895bf6aa6c572d3b2ab4bccf",
"assets/assets/images/fitoterapia/plantas/Damasco.jpg": "d86b4bb8d73f4997c4f6aa616872754c",
"assets/assets/images/fitoterapia/plantas/damiana.jpg": "fa475c5517efd64d69f223f6f4c6fae8",
"assets/assets/images/fitoterapia/plantas/Dente%2520de%2520le%25C3%25A3o.jpg": "bcaeca86ba179fb090d81ba8708e5648",
"assets/assets/images/fitoterapia/plantas/DHA.jpg": "b3000b5122ccd73d5e0281dba8abdd01",
"assets/assets/images/fitoterapia/plantas/Dong-Quai-Angelica-sinensis.jpg": "e75360273719931ce62121fcafb19a2d",
"assets/assets/images/fitoterapia/plantas/Eclipta.jpg": "7d98d47aa43b8375319bbb84ef4bde34",
"assets/assets/images/fitoterapia/plantas/efedra.jpg": "06914eeb4eb522f7084961af8d4b68c5",
"assets/assets/images/fitoterapia/plantas/Efedrab.jpg": "30d1c0ed21b80bf0061b8d648369db56",
"assets/assets/images/fitoterapia/plantas/Embauba.jpg": "c69ad4a687db6a698ff252bc2b675292",
"assets/assets/images/fitoterapia/plantas/epimediun.jpg": "25b8f48d91abdc45bc081be0917801c4",
"assets/assets/images/fitoterapia/plantas/equinacea.jpg": "7b0e6f34270e2939897d5c792aab252c",
"assets/assets/images/fitoterapia/plantas/erva%2520baleeira.JPG": "c3f0781720082f8e6558d1c0b0d1733c",
"assets/assets/images/fitoterapia/plantas/Erva%2520bot%25C3%25A3o.jpg": "9eebab0b2b61154c5c6904e6fde5d7ec",
"assets/assets/images/fitoterapia/plantas/Erva%2520de%2520Bicho.jpg": "da0d125f82838bc0046ddd7f95d07f4d",
"assets/assets/images/fitoterapia/plantas/Erva%2520de%2520Santa%2520Maria.jpg": "8e215fd55a805cf7bb064339bf274745",
"assets/assets/images/fitoterapia/plantas/Erva%2520Mate.jpg": "b1cd924f724981d3e4f05ac9989faa9d",
"assets/assets/images/fitoterapia/plantas/Erva%2520moura.jpg": "4b5975aece169743b3ebdd7cf7237f95",
"assets/assets/images/fitoterapia/plantas/Espinheira%2520Santa.jpg": "e56b3943b7713e23bf0eae3c1b5d8d6f",
"assets/assets/images/fitoterapia/plantas/Eucalipto.jpg": "02555884825b23da90526718e588e67f",
"assets/assets/images/fitoterapia/plantas/F%25C3%25A1fia.jpg": "59cffbc56342f0670842dba234c2de1d",
"assets/assets/images/fitoterapia/plantas/Feij%25C3%25A3o%2520azuki.jpg": "81b97cd0bddd9821acaeb19b51715327",
"assets/assets/images/fitoterapia/plantas/feno%2520grego.jpg": "4ebbd208457ba996d1726f6cce4ad99c",
"assets/assets/images/fitoterapia/plantas/Fitolaca.JPG": "74dbb0fb334d5b032a235a37746153ba",
"assets/assets/images/fitoterapia/plantas/Flor%2520de%2520S%25C3%25A3o%2520Jo%25C3%25A3o.jpg": "cf20783b8e4e031d6a7dbe7ddb040bdc",
"assets/assets/images/fitoterapia/plantas/Fucus.jpg": "9c17c3e0eae5e0a856e51862e7bd1032",
"assets/assets/images/fitoterapia/plantas/Funcho.jpg": "8ac7e28819a1935d5b5c56797744bd3f",
"assets/assets/images/fitoterapia/plantas/Ganoderma.jpg": "179f9d15ea8d10e9e0fa9eeac64d4efe",
"assets/assets/images/fitoterapia/plantas/garcinia.jpg": "d10425a108c14f76c078311c80cb7477",
"assets/assets/images/fitoterapia/plantas/Gardenia.jpg": "c0a17dba73effac7c08540d3c59fd59a",
"assets/assets/images/fitoterapia/plantas/Garra%2520do%2520diabo.jpg": "cb20eba97be64c09b8608910c7dabbca",
"assets/assets/images/fitoterapia/plantas/Gel%25C3%25A9ia%2520Real.jpg": "b74fc3e25eb6b81f05137b5239cb6487",
"assets/assets/images/fitoterapia/plantas/gengibre.jpg": "2181f48c88b2838ad0597950456a32da",
"assets/assets/images/fitoterapia/plantas/Gergelim.jpg": "c89bdad87266f2f63d93fdc645d5a52b",
"assets/assets/images/fitoterapia/plantas/Gingko%2520biloba.jpg": "32d04c07c881a64b817cd009d8faa442",
"assets/assets/images/fitoterapia/plantas/ginseng%2520americanos.jpg": "f16f075e6e576ecb28ca461bb36c019f",
"assets/assets/images/fitoterapia/plantas/Ginseng%2520Coreano.jpg": "eeee8f8884d75bbd8675bbac9aabff83",
"assets/assets/images/fitoterapia/plantas/Goji%2520Berry.jpg": "0fbf9d59dfcc0e442f7e3c53a3180a96",
"assets/assets/images/fitoterapia/plantas/Graviola.jpg": "96f6e9e8c9346e10382802b7da564b9e",
"assets/assets/images/fitoterapia/plantas/Gua%25C3%25A7atonga.jpg": "84cbe23ef256e6703f84dad28afae5c7",
"assets/assets/images/fitoterapia/plantas/Guaco.jpg": "dd27b4e13c8d9453ffe49b1cebbb8dfd",
"assets/assets/images/fitoterapia/plantas/Guarana.jpg": "b66641f7e60e54a46410f038747d83a0",
"assets/assets/images/fitoterapia/plantas/Hamamelis.jpg": "1401caf514c0ca02a8b3a15c8ade4424",
"assets/assets/images/fitoterapia/plantas/Hibiscus.jpg": "45374c7c94f6318568f1ee2e6788303d",
"assets/assets/images/fitoterapia/plantas/Hip%25C3%25A9rico.jpg": "b6de13f670f9229bf784da2f561ed1fa",
"assets/assets/images/fitoterapia/plantas/Hydrastis.jpg": "6c5113b2f3c2f2a5c322c970b88a910d",
"assets/assets/images/fitoterapia/plantas/inhame%2520mexicano.jpg": "6e7c5a1be7703da519e6720f40cafba0",
"assets/assets/images/fitoterapia/plantas/inhame.jpg": "4c63a938ccb4c69a2657c9a983989d49",
"assets/assets/images/fitoterapia/plantas/Ipe%2520Roxo.jpg": "9719f68eb695ab5b53f1d986db572f8f",
"assets/assets/images/fitoterapia/plantas/Jarrinha.jpg": "dbcd56045dc3b3184e7af6b97f72d0ab",
"assets/assets/images/fitoterapia/plantas/Jujuba.jpg": "8de0d92acfbea2123c121be383836eaf",
"assets/assets/images/fitoterapia/plantas/jurubeba.jpg": "91dc2d1712b81c8278c3c158908a6098",
"assets/assets/images/fitoterapia/plantas/Kava-Kava.jpg": "ffa9563e7970032c3b4672e20ec87b31",
"assets/assets/images/fitoterapia/plantas/Lagrima%2520de%2520nossa%2520senhora.JPG": "9b0fd6d8d6651824ac29ae117d9b9528",
"assets/assets/images/fitoterapia/plantas/Laranja%2520Amarga.jpg": "7caba31dce78c940a988fe7ac729a7f6",
"assets/assets/images/fitoterapia/plantas/Lim%25C3%25A3o.jpg": "97d92d207f21098c0d2115f575726a2c",
"assets/assets/images/fitoterapia/plantas/Linha%25C3%25A7a.jpg": "e93a7bd90fb31d5289982981b3e7faf6",
"assets/assets/images/fitoterapia/plantas/Lipia.jpg": "bbd906001bc2e38c8dea6cc05004cfe8",
"assets/assets/images/fitoterapia/plantas/lupulo.jpg": "46406f0d007ac323ef378b106be505bd",
"assets/assets/images/fitoterapia/plantas/Maca%2520peruana.jpg": "4fda038c28430d8c3763ef99aafbec55",
"assets/assets/images/fitoterapia/plantas/Malva.jpg": "275df84a34ac7a575e05e62eeae256f6",
"assets/assets/images/fitoterapia/plantas/Manjericao.jpeg": "5d618cf0b10f1f6acbdd6b535011b3bc",
"assets/assets/images/fitoterapia/plantas/Maracuj%25C3%25A1.jpg": "375d74386b43d22c0decc325e4b65a33",
"assets/assets/images/fitoterapia/plantas/marapuama.jpg": "96e764d8e58449632dcd5c6fc8bc8126",
"assets/assets/images/fitoterapia/plantas/Mel.jpg": "6cc22026880b5e4d77e56b00cdf93c19",
"assets/assets/images/fitoterapia/plantas/melancia.jpg": "701b4d0565738b6e62be041133d21d18",
"assets/assets/images/fitoterapia/plantas/Melissa.jpg": "e5fba0f3eca64219162d8cbae353d396",
"assets/assets/images/fitoterapia/plantas/Menta.jpg": "0377a9a4943ceb6c5aae9cf15e3180fc",
"assets/assets/images/fitoterapia/plantas/Mexerica.jpg": "48ba50a9edb702b61b8885a8573dcbdc",
"assets/assets/images/fitoterapia/plantas/mil%2520folhas.jpg": "d2fe80fab94d955a729effe70a355f9b",
"assets/assets/images/fitoterapia/plantas/Milho.jpg": "699873166e7ebd9d867489f31550b1a0",
"assets/assets/images/fitoterapia/plantas/Mirra.jpg": "d4fbf33b412ae41b9934037ad7d9e4ca",
"assets/assets/images/fitoterapia/plantas/mostarda.jpg": "e5021e8fe293565608f6846a2724e97b",
"assets/assets/images/fitoterapia/plantas/mulungu.jpg": "1432daca453a6d00636f52b3212a3866",
"assets/assets/images/fitoterapia/plantas/nespeira.jpg": "badcb036d5ce883e20db85230206cc0c",
"assets/assets/images/fitoterapia/plantas/Nogueira.jpg": "11ba6074ad2dd811f4765e9dc12c90f3",
"assets/assets/images/fitoterapia/plantas/Noz%2520de%2520Cola.jpg": "02ea90fe660adc82c899b77e60df98ff",
"assets/assets/images/fitoterapia/plantas/Noz%2520moscada.jpg": "b755d6a2441111d0a22d22adb29786ed",
"assets/assets/images/fitoterapia/plantas/Olguinha.jpg": "49d3bf3107a2be91bc3fc707f279b6f1",
"assets/assets/images/fitoterapia/plantas/Oregano.jpg": "a6121730920de0f01a3d4be9b5c92781",
"assets/assets/images/fitoterapia/plantas/Orquidea.jpg": "55f0fd6e9035be095f2e3e35851edd33",
"assets/assets/images/fitoterapia/plantas/ostra.jpg": "8029678759acc4178dec77c5d01f3229",
"assets/assets/images/fitoterapia/plantas/Pata%2520de%2520Vaca.jpg": "971e4db0fa0d1a258609980a534f5bb7",
"assets/assets/images/fitoterapia/plantas/Perilla.jpg": "2b01b296af9ad8f0b6df79027bbe2a47",
"assets/assets/images/fitoterapia/plantas/Pessego.jpg": "649e34b528b6094701d27fd5d25054d4",
"assets/assets/images/fitoterapia/plantas/Picao%2520preto.jpg": "e1dc475276cb951efacb5c249f7ae443",
"assets/assets/images/fitoterapia/plantas/Piment%25C3%25A3o.jpg": "bff3685c6eed0a94b43a484d3a89c9cd",
"assets/assets/images/fitoterapia/plantas/Pimenta%2520do%2520reino.jpg": "9b104e9983bffbcf17cccb73d205eb81",
"assets/assets/images/fitoterapia/plantas/Poejo.jpg": "bc03595b72be196533731388d8d3e0c2",
"assets/assets/images/fitoterapia/plantas/Primula.jpg": "bf9c5054c534661d16cbd03fbe47b841",
"assets/assets/images/fitoterapia/plantas/propolis.jpg": "e9b06b997f0f9844b5741c8da719ff79",
"assets/assets/images/fitoterapia/plantas/Quebra%2520Pedra.jpg": "bc9faedf62f9932123f15a74fd775c6c",
"assets/assets/images/fitoterapia/plantas/Rabanete.jpg": "db1719113745355a60818cbbbcd3f12b",
"assets/assets/images/fitoterapia/plantas/Rhodiola.jpg": "30d71c86d2b8e99618efc8f646dd6e9e",
"assets/assets/images/fitoterapia/plantas/Roma.jpg": "5850f850f905d5bf1d95db34173e741a",
"assets/assets/images/fitoterapia/plantas/Rosa%2520mosqueta.jpg": "cd6ced400443d8fc712783d75d7f9e36",
"assets/assets/images/fitoterapia/plantas/Ruibarbo.jpg": "c8d61b1277a71e42890c5552d014268c",
"assets/assets/images/fitoterapia/plantas/Sabugueiro.jpg": "7729c0f638839616bdacceb8a50412fe",
"assets/assets/images/fitoterapia/plantas/Salgueiro.JPG": "3f00cb20783a3a2744328ea22d400848",
"assets/assets/images/fitoterapia/plantas/Salsaparrilha.jpg": "2aeb0e0815ef1529be1b556b9e975168",
"assets/assets/images/fitoterapia/plantas/Salvia.Jpg": "f4be07e7b80fcb950b01cad8617da6cd",
"assets/assets/images/fitoterapia/plantas/Saw%2520Palmeto.jpg": "9f4547037853805304523511f2306afd",
"assets/assets/images/fitoterapia/plantas/Sene.jpg": "7613f243acccabd37b917d5158202bb6",
"assets/assets/images/fitoterapia/plantas/Sete%2520sangrias.jpg": "7b61365ed2ffd73fa4eb9eba2797d4e2",
"assets/assets/images/fitoterapia/plantas/soja%2520germinada.jpg": "7c4719587a706459b68b2b4f058bf046",
"assets/assets/images/fitoterapia/plantas/soja.jpg": "3d032973f77182fe1c64c11fe4045a60",
"assets/assets/images/fitoterapia/plantas/Sucupira%2520branca.jpg": "7865ca854c84d0fe809a9943ba544227",
"assets/assets/images/fitoterapia/plantas/Taboa.jpg": "bff04b65355e920ff0b27440c1c0ed90",
"assets/assets/images/fitoterapia/plantas/tamara%2520chinesa.jpg": "5f325b81e3dcc971dfaa834bece10532",
"assets/assets/images/fitoterapia/plantas/Tanchagem.jpg": "1fa31be07b611eecbb4fdcf5f107e0df",
"assets/assets/images/fitoterapia/plantas/Tiririca.jpg": "2457064171831450509ae6a94d5c43af",
"assets/assets/images/fitoterapia/plantas/Tomilho.jpeg": "73e35247f80318aa4025969060e4b2b5",
"assets/assets/images/fitoterapia/plantas/Tribulus.jpg": "ab3159cecc4177a67c2ff46618cb4b67",
"assets/assets/images/fitoterapia/plantas/Trigo.jpg": "6591ab3ce3ee5378c40146beca591d71",
"assets/assets/images/fitoterapia/plantas/Tuia%2520Ocidental.JPG": "8ef185a63203ae67cd92e11703c8fd5b",
"assets/assets/images/fitoterapia/plantas/Unha%2520de%2520Gato.png": "43b78f58df3e19f81245da6fe5781a80",
"assets/assets/images/fitoterapia/plantas/Urtiga.jpg": "4772bb252b6da2e056ebfa37a4ab8aaa",
"assets/assets/images/fitoterapia/plantas/Uva%2520Ursi.jpg": "44e9552dff1dadcef8bcf64ea7131169",
"assets/assets/images/fitoterapia/plantas/Uxi%2520Amarelo.jpg": "a3aa4a3f4cce9bb21a14bdd88f06aa3c",
"assets/assets/images/fitoterapia/plantas/valeriana.jpg": "c06477784647fdfc1952b8ea1d943fcd",
"assets/assets/images/fitoterapia/plantas/Videira.jpg": "455ccd388ecbcc3aef8cbc886057464a",
"assets/assets/images/fitoterapia/plantas/Vitex.JPG": "1d134648048d17da596618dd871168cf",
"assets/assets/images/fitoterapia/plantas/Zedoaria.jpg": "62df22af70fcfcf1f635dbeafcfa6ed3",
"assets/assets/images/fitoterapia/plantas/zimbro.jpg": "113390451ba00ebaa34b94e652785d78",
"assets/assets/images/icon.png": "8b229ca3c38b127ad972efeeae802ed9",
"assets/assets/images/identification/bexiga.png": "aa2cbd3e5d2fd3ab3f0abb7ac3f39faa",
"assets/assets/images/identification/estomago.png": "4e2eeae4a1d6ed6c0ce116de0b341aa1",
"assets/assets/images/identification/heart.png": "30fe9c92a51f44b9dc7b4f9cc157b2bc",
"assets/assets/images/identification/Intestino%2520delgado.png": "88d95b6757cbc0c587429b453d8f291f",
"assets/assets/images/identification/intestino%2520grosso.png": "7313061248d24fd1df56880133779055",
"assets/assets/images/identification/Lingua.gif": "b8f7256f4a9682f73e1cee9366fa6d1c",
"assets/assets/images/identification/liver.png": "2bd54f6e5f291e24e2a654d360a2ff0d",
"assets/assets/images/identification/lungs.png": "f1737829c37f9d08db95f7a46f4c6290",
"assets/assets/images/identification/small-intestine.png": "db2bc093f086453f3a53bbe7782c4b74",
"assets/assets/images/identification/spleen.png": "ce86ddb92295a8c529605ea04fe09b45",
"assets/assets/images/identification/stomach.png": "3017c1c0a5b8b736734f006223859847",
"assets/assets/images/identification/TA.png": "edebe079004a644faf43e57976c99de0",
"assets/assets/images/identification/two-kidneys.png": "667d0d8533df5b09d5c38df39d3bb611",
"assets/assets/images/identification/vesicula.png": "8d79a2490e0c8e4f53bfac414a6aee89",
"assets/assets/images/identification/yin-yang-ios-7-simbolo_318-34386.jpg": "efa21062dd333a8e490933e3b9e57beb",
"assets/assets/images/infoIcon.png": "386a6db491c79ee6ea91b4eb96b96c01",
"assets/assets/images/menu_principal/menuDiagnosticoIcon.png": "ed3d11d6a042c0f93736f7abfa0fa99b",
"assets/assets/images/menu_principal/menuFitoterapiaIcon.png": "1d6fd8b69a2d9d04debab5834774cb6f",
"assets/assets/images/menu_principal/menuIdentificacaoIcon.png": "a3eb8ae623fcb7fcdffd456d3ab526df",
"assets/assets/images/menu_principal/menuInfoIcon.png": "1f75e3fa06f5d737dae7961f4e739e19",
"assets/assets/images/menu_principal/menuPreparacaoIcon.png": "6dac52fb6be4f4c5fbdd0a8258610b27",
"assets/assets/images/menu_principal/menuTeoriaIcon.png": "76e3984e921584c897c4b129a2676181",
"assets/assets/images/menu_principal/menuTratamentosIcon.png": "da8881d87a1eba72b08e39fb01aee561",
"assets/assets/images/Splash.png": "e95ee07e0c9cf47d9e80f2d266de0956",
"assets/assets/images/teoria/cinco500.png": "2ba5efacffa54072898627344c509567",
"assets/assets/images/teoria/imagemContraDominancia.png": "7ab8caa9b7374c010b56c18bba4c5e54",
"assets/assets/images/teoria/imagemDominancia.png": "62054669a2f6012850d626f81059b859",
"assets/assets/images/teoria/meridianos500.png": "e3febc815d17e55714525a2b2c57904b",
"assets/assets/images/teoria/meridianosVisaoAnterior.png": "cd51bb17c130b24afceb283169fa9aca",
"assets/assets/images/teoria/meridianosVisaoLateral.png": "9dc6d552e15d13db8d435f16c93010c4",
"assets/assets/images/teoria/meridianosVisaoPosterior.png": "827a868abdb577c05da9e9fdb48c2381",
"assets/assets/images/teoria/qiXueJinYe500.png": "effe579aee2ddbde1cfddcf9f9516062",
"assets/assets/images/teoria/tabela5elementos.png": "6ca3ae3082b969fd5a0ebdbbd4539836",
"assets/assets/images/teoria/teoriaCincoIcon.png": "195612297a2c1330752c08b3898115d2",
"assets/assets/images/teoria/teoriaMeridianosIcon.png": "9ba49cd302afc0149052d18d0528206e",
"assets/assets/images/teoria/teoriaQiIcon.png": "dc223b4b8b6671076f1d14010888f8fd",
"assets/assets/images/teoria/teoriaYinYangIcon.png": "27c2c9fa6495565f4d1faceb3477d51d",
"assets/assets/images/teoria/teoriaZangIcon.png": "abe718aa52c9cd012ca918b495397018",
"assets/assets/images/teoria/yinYang500.png": "6e5a6cca5d6f926542d0768d757eb284",
"assets/assets/images/teoria/zangFu500.png": "f360af0c662c26fe8c92f28ca7b7ca96",
"assets/assets/images/tratamentos/circulatory_512px.png": "d1387e63d1a86e00ed16a68ac0bc7d66",
"assets/assets/images/tratamentos/digestive_512px.png": "4108911b532b5a5a823558fdd66dd9d3",
"assets/assets/images/tratamentos/endocrine_512px.png": "bd3a27ff2ec04a5281f943add59a7d3d",
"assets/assets/images/tratamentos/excretion_512px.png": "bc88cfae6844e2835477f21a768748d6",
"assets/assets/images/tratamentos/female_512px.png": "fe44ae364073bf11b9128d053b37ef85",
"assets/assets/images/tratamentos/immune_512px.png": "c07912f1ce1bb5a6d4b6235d6ecc9c69",
"assets/assets/images/tratamentos/integumentary_512px.png": "aabd16138b1444c35d331e15b8e67166",
"assets/assets/images/tratamentos/male_512px.png": "609298191217a85dec1a906bd2615673",
"assets/assets/images/tratamentos/muscleSkeletal_512px.png": "430db5a0bbfeaedfac27d4fe8f09cfd1",
"assets/assets/images/tratamentos/nervous_512px.png": "c7283888d5485ea6ae85487e19276f52",
"assets/assets/images/tratamentos/respiratory_512px.png": "2386d6fd4738ad3c174519af8e51b2e0",
"assets/assets/images/yin_yang.png": "ed6f8fa815cb2b9146606feb0a2d7e5f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6b668f26748aa540778fff8e1c4936da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9c0a8193bb2520c44fb6c1e35a1eb3fb",
"/": "9c0a8193bb2520c44fb6c1e35a1eb3fb",
"main.dart.js": "878c2cc1cf9010a42cb5d766f5b53b32",
"manifest.json": "12257a1b3fbb7166651cde3a4a769776",
"version.json": "c212a2c1daf5abaf5b902fb5974095a0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
