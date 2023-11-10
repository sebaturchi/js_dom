const guitarras = [
    {
        id : 1,
        marca : 'Jackson',
        modelo : 'Flying V',
        precio : 500000,
        foto: 'data:image/jpeg;base64,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'
    },

    {
        id : 2,
        marca : 'Gibson',
        modelo : 'Les Paul LP-100',
        precio : 515000,
        foto: 'data:image/jpeg;base64,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'
    },

    {
        id : 3,
        marca : 'Fender',
        modelo : 'Stratocaster',
        precio : 630000,
        foto: 'data:image/jpeg;base64,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t2rUvWepNY2K/TI+h9J9Bg+oYsuSMdfWPPv+mNl08mOk3n0ZYz+W86/ieuGh0l+pZS3slsdULczOzMfZ1gk/mLKMes5umIK536437+sxbxUS1vD+Hgh2t1D624BeUGug89YI9b7KB68pmnChw73wfww6egM55rbCzW2d3sJzY/1fmPyCjtO/m3RUEVUHRVCj6DE3J6QREkCyRLAREkCxJECxEQESRAsSRAsREDz37Vvs6TjNX3jTBU19K4rY4Vb0G/snPn5Ht8unznVZbpLWqtVq7K2KWVuCrKwO4In2dPLvHX2R1cQGp1VF9n3+yw2o97ZrZcAChvIDGA3UbA5Anm1YtHEvVbTWeYeZ8G46CACZlml14IG88g1FF+huejUI9NtTctlbjDKf9x69DO84VxsqACZh7n02J71bGtu+kvYuGa6iuoG33nZrCFCliQOVfl0YdfOcfhOsWriOnCHKWFuXzKPSzL/VZifDdUNYgqQ5tqcWoobHMjDksH09w/SbfF+K/wCV6zQhxvpE0zWoCCeUE5XPTPJO1MPNMc8d6zH/AFxtk4vkj0mJe80nmGRj6dpivhQf5hxDWcT60qw0mjPUGmgsGYej3Gw5/wDqWdVqvGdGvr/y/gtps1Gq91rUqsT7ppjszsWHxgEgDzImf8B4XXotPVp6lCrWqqAOwAAA9dgN+/XvNaGZLsIiJ6QsksQESSwESSwERJAsREBJLEBERAREQERJAxPx94B0nHKvxfwtSgIo1SKC6/tcfnT0/gRPnrxX9n/E+DszXUtZQMkarTg2Ucvm2N0/1AfWfWMRwmJ4fF2j4pdQ6W02FLKzzI4O4P8Av8u87TRcO4jxzUM1FNuptcqHdEC1JgAAM2yoAAOpE+rrOCaN2520umZuvM1FRb+OJzaqlQBUVVUdFUBQPoJ56YTN5liH2deB6uDacAhW1L4a6wHm97yzgZx8hjPzJzGInp5WJIgWIiAiJDAsSSwESRAsREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k='
    },

    {
        id : 4,
        marca : 'LTD',
        modelo : 'MH-17',
        precio : 420000,
        foto: 'data:image/jpeg;base64,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'
    },

    {
        id : 5,
        marca : 'Gibson',
        modelo : 'Explorer',
        precio : 850000,
        foto: 'https://http2.mlstatic.com/D_NQ_NP_792509-MLA52092147404_102022-O.webp'
    },

    {
        id : 6,
        marca : 'Gibson',
        modelo : 'Flying V',
        precio : 1050000,
        foto: 'https://http2.mlstatic.com/D_NQ_NP_873186-MLA44333443023_122020-O.webp'
    },

    {
        id : 7,
        marca : 'Fender',
        modelo : 'Flying Telecaster',
        precio : 1230000,
        foto: 'https://101db.com.ar/12087-Productos/guitarra-electrica-fender-squier-fsr-bullet-telecaster-bpg-olympic-white.jpg'
    }

]