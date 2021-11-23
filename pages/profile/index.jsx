import React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import ProfileCollection from "../../src/components/profile/ProfileCollection";

export default function Profile() {

    return (
        <div>
            <Header />            
            <ProfileCollection
                user={{
                    name: "StoyankataMnogoBesen",
                    info: "Gotov sym da umra no ne i da spra",
                    avatar: "https://nft-auction.herokuapp.com/uploads/0x97c2d00637d45ab7bc6094a5ac78d6bca8f3bd5d_c425edc659.jpg",
                    verified: true,
                    
                }}

                filters={{ "sort": [{ "label": "Name (Ascending)", "value": 1 }, { "label": "Name (Descending)", "value": 2 }, { "label": "Price (Ascending)", "value": 4 }, { "label": "Price (Descending)", "value": 5 }], "price": [{ "label": "0.3 - 0.5 ETH", "value": 6 }, { "label": "0.5 - 2 ETH", "value": 7 }, { "label": "2- 3 ETH", "value": 8 }] }} 
                items={[
                    {
                      "id": 398,
                      "name": "Refined Metal Chips",
                      "price": 0.103,
                      "owner": 417,
                      "likes": 372,
                      "token_id": "0xd54d4feee7af1ec2f6e2baac1cf284ed2f5d03ad.jpg",
                      "currency": "ETH",
                      "featured": false,
                      "auction_end": "2021-11-30T02:56:49.930Z",
                      "published_at": "2021-10-22T08:29:07.092Z",
                      "created_at": "2021-10-22T08:29:10.252Z",
                      "updated_at": "2021-10-22T08:29:21.283Z",
                      "source": {
                        "id": 779,
                        "name": "0xd54d4feee7af1ec2f6e2baac1cf284ed2f5d03ad.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 400,
                        "height": 267,
                        "formats": {
                          "thumbnail": {
                            "name": "thumbnail_0xd54d4feee7af1ec2f6e2baac1cf284ed2f5d03ad.jpg",
                            "hash": "thumbnail_0xd54d4feee7af1ec2f6e2baac1cf284ed2f5d03ad_22211eb07f",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "width": 234,
                            "height": 156,
                            "size": 7.96,
                            "path": null,
                            "url": "https://nft-auction.herokuapp.com/uploads/thumbnail_0xd54d4feee7af1ec2f6e2baac1cf284ed2f5d03ad_22211eb07f.jpg"
                          }
                        },
                        "hash": "0xd54d4feee7af1ec2f6e2baac1cf284ed2f5d03ad_22211eb07f",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "size": 19.69,
                        "url": "https://nft-auction.herokuapp.com/uploads/0xd54d4feee7af1ec2f6e2baac1cf284ed2f5d03ad_22211eb07f.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "created_at": "2021-10-22T08:29:05.761Z",
                        "updated_at": "2021-10-22T08:29:05.761Z"
                      }
                    },
                    {
                      "id": 399,
                      "name": "Refined Plastic Sausages",
                      "price": 1.107,
                      "owner": 417,
                      "likes": 2968,
                      "token_id": "0x9dfe9fecf58da52cfa3a476c6ad1a7abaaac83a2.jpg",
                      "currency": "ETH",
                      "featured": false,
                      "auction_end": "2021-11-24T08:36:07.600Z",
                      "published_at": "2021-10-22T08:29:07.092Z",
                      "created_at": "2021-10-22T08:29:10.359Z",
                      "updated_at": "2021-10-22T08:29:21.283Z",
                      "source": {
                        "id": 655,
                        "name": "0x9dfe9fecf58da52cfa3a476c6ad1a7abaaac83a2.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 400,
                        "height": 225,
                        "formats": {
                          "thumbnail": {
                            "name": "thumbnail_0x9dfe9fecf58da52cfa3a476c6ad1a7abaaac83a2.jpg",
                            "hash": "thumbnail_0x9dfe9fecf58da52cfa3a476c6ad1a7abaaac83a2_caea8ac421",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "width": 245,
                            "height": 138,
                            "size": 2.68,
                            "path": null,
                            "url": "https://nft-auction.herokuapp.com/uploads/thumbnail_0x9dfe9fecf58da52cfa3a476c6ad1a7abaaac83a2_caea8ac421.jpg"
                          }
                        },
                        "hash": "0x9dfe9fecf58da52cfa3a476c6ad1a7abaaac83a2_caea8ac421",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "size": 5.15,
                        "url": "https://nft-auction.herokuapp.com/uploads/0x9dfe9fecf58da52cfa3a476c6ad1a7abaaac83a2_caea8ac421.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "created_at": "2021-10-22T08:29:01.462Z",
                        "updated_at": "2021-10-22T08:29:01.462Z"
                      }
                    },
                    {
                      "id": 429,
                      "name": "Awesome Plastic Shirt",
                      "price": 1.827,
                      "owner": 417,
                      "likes": 5112,
                      "token_id": "0xa2b0f4e3628cdcc97c184e8ba39521a1ecba9c16.jpg",
                      "currency": "ETH",
                      "featured": false,
                      "auction_end": null,
                      "published_at": "2021-10-22T08:29:07.092Z",
                      "created_at": "2021-10-22T08:29:12.711Z",
                      "updated_at": "2021-10-22T08:29:21.283Z",
                      "source": {
                        "id": 736,
                        "name": "0xa2b0f4e3628cdcc97c184e8ba39521a1ecba9c16.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 400,
                        "height": 367,
                        "formats": {
                          "thumbnail": {
                            "name": "thumbnail_0xa2b0f4e3628cdcc97c184e8ba39521a1ecba9c16.jpg",
                            "hash": "thumbnail_0xa2b0f4e3628cdcc97c184e8ba39521a1ecba9c16_b14ed7077d",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "width": 170,
                            "height": 156,
                            "size": 14.04,
                            "path": null,
                            "url": "https://nft-auction.herokuapp.com/uploads/thumbnail_0xa2b0f4e3628cdcc97c184e8ba39521a1ecba9c16_b14ed7077d.jpg"
                          }
                        },
                        "hash": "0xa2b0f4e3628cdcc97c184e8ba39521a1ecba9c16_b14ed7077d",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "size": 57.29,
                        "url": "https://nft-auction.herokuapp.com/uploads/0xa2b0f4e3628cdcc97c184e8ba39521a1ecba9c16_b14ed7077d.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "created_at": "2021-10-22T08:29:04.303Z",
                        "updated_at": "2021-10-22T08:29:04.303Z"
                      }
                    },
                    {
                      "id": 435,
                      "name": "Generic Frozen Shirt",
                      "price": 1.397,
                      "owner": 417,
                      "likes": 1236,
                      "token_id": "0x2acacbb628e054110bba5ccf20bdbfdff74a845b.jpg",
                      "currency": "ETH",
                      "featured": false,
                      "auction_end": null,
                      "published_at": "2021-10-22T08:29:07.092Z",
                      "created_at": "2021-10-22T08:29:13.170Z",
                      "updated_at": "2021-10-22T08:29:21.283Z",
                      "source": {
                        "id": 695,
                        "name": "0x2acacbb628e054110bba5ccf20bdbfdff74a845b.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 400,
                        "height": 225,
                        "formats": {
                          "thumbnail": {
                            "name": "thumbnail_0x2acacbb628e054110bba5ccf20bdbfdff74a845b.jpg",
                            "hash": "thumbnail_0x2acacbb628e054110bba5ccf20bdbfdff74a845b_61cfc0d2c2",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "width": 245,
                            "height": 138,
                            "size": 11.42,
                            "path": null,
                            "url": "https://nft-auction.herokuapp.com/uploads/thumbnail_0x2acacbb628e054110bba5ccf20bdbfdff74a845b_61cfc0d2c2.jpg"
                          }
                        },
                        "hash": "0x2acacbb628e054110bba5ccf20bdbfdff74a845b_61cfc0d2c2",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "size": 27.75,
                        "url": "https://nft-auction.herokuapp.com/uploads/0x2acacbb628e054110bba5ccf20bdbfdff74a845b_61cfc0d2c2.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "created_at": "2021-10-22T08:29:03.121Z",
                        "updated_at": "2021-10-22T08:29:03.121Z"
                      }
                    }
                  ]}
                />

            <Footer />
        </div>
    )
}