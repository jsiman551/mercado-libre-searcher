import { contextObjectType } from "./types"

/* API URL */
export const ApiUrl: String = "https://api.mercadolibre.com/sites/MLA/search"

/* Sort List Options */
export const SortOptions: object[] = [
    {
        id: 1,
        description: "Más relevantes",
        value: "relevance",
    },
    {
        id: 2,
        description: "Menor precio",
        value: "price_asc",
    },
    {
        id: 3,
        description: "Mayor precio",
        value: "price_desc",
    }
]

/* context mock data */
export const contextMockData: contextObjectType = {
    searchResultData: [
        {
            "id": "MLA1116628104",
            "title": "Marco Adaptador Jeep Grand Cherokee 04-07 Mrje028t",
            "condition": "new",
            "thumbnail_id": "905529-MLA53289954944_012023",
            "catalog_product_id": null,
            "listing_type_id": "gold_special",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1116628104-marco-adaptador-jeep-grand-cherokee-04-07-mrje028t-_JM",
            "buying_mode": "buy_it_now",
            "site_id": "MLA",
            "category_id": "MLA416860",
            "domain_id": "MLA-AUTOMOTIVE_STEREO_FRAME_ADAPTERS",
            "thumbnail": "http://http2.mlstatic.com/D_905529-MLA53289954944_012023-I.jpg",
            "currency_id": "ARS",
            "order_backend": 1,
            "price": 47579,
            "original_price": null,
            "sale_price": null,
            "sold_quantity": 5,
            "available_quantity": 1,
            "official_store_id": null,
            "use_thumbnail_id": true,
            "accepts_mercadopago": true,
            "tags": [
                "good_quality_picture",
                "loyalty_discount_eligible",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible",
                "shipping_guaranteed"
            ],
            "shipping": {
                "store_pick_up": false,
                "free_shipping": true,
                "logistic_type": "xd_drop_off",
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "benefits": null,
                "promise": null
            },
            "stop_time": "2041-12-15T04:00:00.000Z",
            "seller": {
                "id": 28112726,
                "nickname": "MR.INTERFACE2010",
                "car_dealer": false,
                "real_estate_agency": false,
                "_": false,
                "registration_date": "2010-05-13T17:32:17.000-04:00",
                "tags": [
                    "normal",
                    "credits_priority_4",
                    "eshop",
                    "credits_profile",
                    "mshops",
                    "messages_as_seller"
                ],
                "car_dealer_logo": "",
                "permalink": "http://perfil.mercadolibre.com.ar/MR.INTERFACE2010",
                "seller_reputation": {
                    "level_id": "5_green",
                    "power_seller_status": "platinum",
                    "transactions": {
                        "canceled": 499,
                        "completed": 3809,
                        "period": "historic",
                        "ratings": {
                            "negative": 0.03,
                            "neutral": 0.01,
                            "positive": 0.96
                        },
                        "total": 4308
                    },
                    "metrics": {
                        "sales": {
                            "period": "60 days",
                            "completed": 674
                        },
                        "claims": {
                            "period": "60 days",
                            "rate": 0.0039,
                            "value": 3
                        },
                        "delayed_handling_time": {
                            "period": "60 days",
                            "rate": 0.0014,
                            "value": 1
                        },
                        "cancellations": {
                            "period": "60 days",
                            "rate": 0.0013,
                            "value": 1
                        }
                    }
                },
                "eshop": {
                    "eshop_id": 78965,
                    "seller": 28112726,
                    "nick_name": "MR.INTERFACE2010",
                    "eshop_status_id": 1,
                    "site_id": "MLA",
                    "eshop_experience": 0,
                    "eshop_rubro": null,
                    "eshop_locations": [],
                    "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/28112726v66cd66.png"
                }
            },
            "seller_address": {
                "comment": "",
                "address_line": "",
                "id": null,
                "latitude": null,
                "longitude": null,
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQkJFTDcyNTJa",
                    "name": "Belgrano"
                }
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQkJFTDcyNTJa",
                "city_name": "Belgrano"
            },
            "attributes": [
                {
                    "id": "BRAND",
                    "name": "Marca",
                    "value_id": "2351717",
                    "value_name": "Metra",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2351717",
                            "name": "Metra",
                            "struct": null,
                            "source": 2860837171021627
                        }
                    ],
                    "source": 2860837171021627,
                    "value_type": "string"
                },
                {
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2230284",
                            "name": "Nuevo",
                            "struct": null,
                            "source": 2860837171021627
                        }
                    ],
                    "source": 2860837171021627,
                    "value_type": "list"
                },
                {
                    "id": "MODEL",
                    "name": "Modelo",
                    "value_id": null,
                    "value_name": "MRJE028T",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": null,
                            "name": "MRJE028T",
                            "struct": null,
                            "source": 2860837171021627
                        }
                    ],
                    "source": 2860837171021627,
                    "value_type": "string"
                }
            ],
            "installments": {
                "quantity": 12,
                "amount": 8944.85,
                "rate": 125.6,
                "currency_id": "ARS"
            },
            "winner_item_id": null,
            "catalog_listing": false,
            "discounts": null,
            "promotions": [],
            "inventory_id": null
        },
        {
            "id": "MLA1108342715",
            "title": "Marco Adaptador Stereo Jeep Cherokee 97-01 Frente 95-6554b",
            "condition": "new",
            "thumbnail_id": "680829-MLA47891769037_102021",
            "catalog_product_id": null,
            "listing_type_id": "gold_special",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1108342715-marco-adaptador-stereo-jeep-cherokee-97-01-frente-95-6554b-_JM",
            "buying_mode": "buy_it_now",
            "site_id": "MLA",
            "category_id": "MLA416860",
            "domain_id": "MLA-AUTOMOTIVE_STEREO_FRAME_ADAPTERS",
            "thumbnail": "http://http2.mlstatic.com/D_680829-MLA47891769037_102021-I.jpg",
            "currency_id": "ARS",
            "order_backend": 2,
            "price": 70759,
            "original_price": null,
            "sale_price": null,
            "sold_quantity": 5,
            "available_quantity": 1,
            "official_store_id": null,
            "use_thumbnail_id": true,
            "accepts_mercadopago": true,
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible",
                "shipping_guaranteed"
            ],
            "shipping": {
                "store_pick_up": false,
                "free_shipping": true,
                "logistic_type": "xd_drop_off",
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "benefits": null,
                "promise": null
            },
            "stop_time": "2041-10-10T04:00:00.000Z",
            "seller": {
                "id": 28112726,
                "nickname": "MR.INTERFACE2010",
                "car_dealer": false,
                "real_estate_agency": false,
                "_": false,
                "registration_date": "2010-05-13T17:32:17.000-04:00",
                "tags": [
                    "normal",
                    "credits_priority_4",
                    "eshop",
                    "credits_profile",
                    "mshops",
                    "messages_as_seller"
                ],
                "car_dealer_logo": "",
                "permalink": "http://perfil.mercadolibre.com.ar/MR.INTERFACE2010",
                "seller_reputation": {
                    "level_id": "5_green",
                    "power_seller_status": "platinum",
                    "transactions": {
                        "canceled": 499,
                        "completed": 3809,
                        "period": "historic",
                        "ratings": {
                            "negative": 0.03,
                            "neutral": 0.01,
                            "positive": 0.96
                        },
                        "total": 4308
                    },
                    "metrics": {
                        "sales": {
                            "period": "60 days",
                            "completed": 674
                        },
                        "claims": {
                            "period": "60 days",
                            "rate": 0.0039,
                            "value": 3
                        },
                        "delayed_handling_time": {
                            "period": "60 days",
                            "rate": 0.0014,
                            "value": 1
                        },
                        "cancellations": {
                            "period": "60 days",
                            "rate": 0.0013,
                            "value": 1
                        }
                    }
                },
                "eshop": {
                    "eshop_id": 78965,
                    "seller": 28112726,
                    "nick_name": "MR.INTERFACE2010",
                    "eshop_status_id": 1,
                    "site_id": "MLA",
                    "eshop_experience": 0,
                    "eshop_rubro": null,
                    "eshop_locations": [],
                    "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/28112726v66cd66.png"
                }
            },
            "seller_address": {
                "comment": "",
                "address_line": "",
                "id": null,
                "latitude": null,
                "longitude": null,
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQkJFTDcyNTJa",
                    "name": "Belgrano"
                }
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQkJFTDcyNTJa",
                "city_name": "Belgrano"
            },
            "attributes": [
                {
                    "id": "BRAND",
                    "name": "Marca",
                    "value_id": "2351717",
                    "value_name": "Metra",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2351717",
                            "name": "Metra",
                            "struct": null,
                            "source": 2860837171021627
                        }
                    ],
                    "source": 2860837171021627,
                    "value_type": "string"
                },
                {
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2230284",
                            "name": "Nuevo",
                            "struct": null,
                            "source": 2860837171021627
                        }
                    ],
                    "source": 2860837171021627,
                    "value_type": "list"
                },
                {
                    "id": "MODEL",
                    "name": "Modelo",
                    "value_id": null,
                    "value_name": "95-6554B",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": null,
                            "name": "95-6554B",
                            "struct": null,
                            "source": 2860837171021627
                        }
                    ],
                    "source": 2860837171021627,
                    "value_type": "string"
                }
            ],
            "installments": {
                "quantity": 12,
                "amount": 13302.69,
                "rate": 125.6,
                "currency_id": "ARS"
            },
            "winner_item_id": null,
            "catalog_listing": false,
            "discounts": null,
            "promotions": [],
            "inventory_id": null
        },
        {
            "id": "MLA618421379",
            "title": "Marco Adaptador Estereo Bmw Serie 3 Sin Nav. Frente 95-9306b",
            "condition": "new",
            "thumbnail_id": "989340-MLA31577359189_072019",
            "catalog_product_id": null,
            "listing_type_id": "gold_special",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-618421379-marco-adaptador-estereo-bmw-serie-3-sin-nav-frente-95-9306b-_JM",
            "buying_mode": "buy_it_now",
            "site_id": "MLA",
            "category_id": "MLA416860",
            "domain_id": "MLA-AUTOMOTIVE_STEREO_FRAME_ADAPTERS",
            "thumbnail": "http://http2.mlstatic.com/D_989340-MLA31577359189_072019-I.jpg",
            "currency_id": "ARS",
            "order_backend": 3,
            "price": 30499,
            "original_price": null,
            "sale_price": null,
            "sold_quantity": 3,
            "available_quantity": 1,
            "official_store_id": null,
            "use_thumbnail_id": true,
            "accepts_mercadopago": true,
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "brand_verified",
                "immediate_payment",
                "cart_eligible",
                "shipping_guaranteed"
            ],
            "shipping": {
                "store_pick_up": false,
                "free_shipping": true,
                "logistic_type": "xd_drop_off",
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "benefits": null,
                "promise": null
            },
            "stop_time": "2036-04-24T17:11:48.000Z",
            "seller": {
                "id": 28112726,
                "nickname": "MR.INTERFACE2010",
                "car_dealer": false,
                "real_estate_agency": false,
                "_": false,
                "registration_date": "2010-05-13T17:32:17.000-04:00",
                "tags": [
                    "normal",
                    "credits_priority_4",
                    "eshop",
                    "credits_profile",
                    "mshops",
                    "messages_as_seller"
                ],
                "car_dealer_logo": "",
                "permalink": "http://perfil.mercadolibre.com.ar/MR.INTERFACE2010",
                "seller_reputation": {
                    "level_id": "5_green",
                    "power_seller_status": "platinum",
                    "transactions": {
                        "canceled": 499,
                        "completed": 3809,
                        "period": "historic",
                        "ratings": {
                            "negative": 0.03,
                            "neutral": 0.01,
                            "positive": 0.96
                        },
                        "total": 4308
                    },
                    "metrics": {
                        "sales": {
                            "period": "60 days",
                            "completed": 674
                        },
                        "claims": {
                            "period": "60 days",
                            "rate": 0.0039,
                            "value": 3
                        },
                        "delayed_handling_time": {
                            "period": "60 days",
                            "rate": 0.0014,
                            "value": 1
                        },
                        "cancellations": {
                            "period": "60 days",
                            "rate": 0.0013,
                            "value": 1
                        }
                    }
                },
                "eshop": {
                    "eshop_id": 78965,
                    "seller": 28112726,
                    "nick_name": "MR.INTERFACE2010",
                    "eshop_status_id": 1,
                    "site_id": "MLA",
                    "eshop_experience": 0,
                    "eshop_rubro": null,
                    "eshop_locations": [],
                    "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/28112726v66cd66.png"
                }
            },
            "seller_address": {
                "comment": "",
                "address_line": "",
                "id": null,
                "latitude": null,
                "longitude": null,
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQkJFTDcyNTJa",
                    "name": "Belgrano"
                }
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQkJFTDcyNTJa",
                "city_name": "Belgrano"
            },
            "attributes": [
                {
                    "id": "BRAND",
                    "name": "Marca",
                    "value_id": "2351717",
                    "value_name": "Metra",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2351717",
                            "name": "Metra",
                            "struct": null,
                            "source": 1577
                        }
                    ],
                    "source": 1577,
                    "value_type": "string"
                },
                {
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2230284",
                            "name": "Nuevo",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "source": 1,
                    "value_type": "list"
                },
                {
                    "id": "MODEL",
                    "name": "Modelo",
                    "value_id": null,
                    "value_name": "95-9306B",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": null,
                            "name": "95-9306B",
                            "struct": null,
                            "source": 4060709329251625
                        }
                    ],
                    "source": 4060709329251625,
                    "value_type": "string"
                }
            ],
            "installments": {
                "quantity": 12,
                "amount": 5733.81,
                "rate": 125.6,
                "currency_id": "ARS"
            },
            "winner_item_id": null,
            "catalog_listing": false,
            "discounts": null,
            "promotions": [],
            "inventory_id": null
        },
    ],
    loadingState: false,
    sortOption: {
        id: 1,
        description: "Más relevantes",
        value: "relevance",
      },
    searchInputRef: {
        current: null
    },
    priceFilters: null,
    priceFilterRange: "",
    isSidebarOpen: false,
    setSortOption: () => {}, 
    setSearchResultData: () => {},
    setLoadingState: () => {},
    setPriceFilters: () => {},
    setPriceFilterRange: () => {},
    setIsSidebarOpen: () => {},
  }