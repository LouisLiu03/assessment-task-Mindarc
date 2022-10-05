<template>
    <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="700" data-aos-duration="1000">
        <b-container class="bv-example-row mt-5 mb-5 text-center my-card w-100">
            <b-row>
                <b-col md=6 lg="4">
                    <b-card-group deck>
                        <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article"
                            class="mb-2 p-4 p-sm-2 p-lg-4">
                            <b-card-text class="mt-3 mb-3 card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique accusantium iusto,
                                unde a quos consequatur fugiat! Sapiente nulla totam sit earum numquam explicabo consequatur,
                                perspiciatis eveniet, quod placeat suscipit?
                            </b-card-text>

                            <template #footer>
                                <b-button class="card-btn" pill @click="showAlert">READ MORE</b-button>
                            </template>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col md=6 lg="4">
                    <b-card-group deck>
                        <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article"
                            class="mb-2 p-4 p-sm-2 p-lg-4">
                            <b-card-text class="mt-3 mb-3 card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique accusantium iusto,
                                unde a quos consequatur fugiat!
                            </b-card-text>

                            <template #footer>
                                <b-button class="card-btn" pill @click="showAlert">READ MORE</b-button>
                            </template>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col md=6 lg="4">
                    <b-card-group deck>
                        <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article"
                            class="mb-2 p-4 p-sm-2 p-lg-4">
                            <b-card-text class="mt-3 mb-3 card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique accusantium iusto,
                                unde a quos consequatur fugiat! Sapiente nulla totam sit earum numquam explicabo consequatur,
                            </b-card-text>

                            <template #footer>
                                <b-button class="card-btn" pill @click="showAlert">READ MORE</b-button>
                            </template>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>
export default {
    name: 'MyCard',
    props: {
    },
    methods: {
        showAlert() {
            // Use sweetalert2
            this.$swal.fire({
                // position: 'top',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: true,
                // timer: 1500
            });
        },
        showAlert2() {
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#02a687',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.$swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        },
        showAlert3() {
            this.$swal.fire({
                title: 'Submit your Github username',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Look up',
                showLoaderOnConfirm: true,
                preConfirm: (login) => {
                    return fetch(`//api.github.com/users/${login}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(response.statusText)
                            }
                            return response.json()
                        })
                        .catch(error => {
                            this.$swal.showValidationMessage(
                                `Request failed: ${error}`
                            )
                        })
                },
                allowOutsideClick: () => !this.$swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire({
                        title: `${result.value.login}'s avatar`,
                        imageUrl: result.value.avatar_url
                    })
                }
            })
        }
    },
}
</script>
    
    
<style>
.my-card .card {
    box-shadow: 0 0 10px 0px #ddd;
    min-height: 655px;
    border: 1px solid #eee;
}

.my-card .card-deck,
.my-card {
    gap: 2.5rem;
}

.my-card .card-body {
    padding: 0;
    color: #383838;
}

.my-card .card-btn {
    background-color: transparent;
    border: 4px solid #333333;
    color: #333333;
    font-weight: 800;
    letter-spacing: 2px;
    padding: 0.7rem 1.5rem;
    /* max-width: 80%; */
}

@media (min-width: 992px) and (max-width: 1200px) {
    .my-card .card {
        min-height: 696px;
        
    }
}

@media (max-width: 576px) {
    .my-card {
        padding: 0 1.5rem;
    }

    .my-card .card {
        min-height: auto;
    
    }
    .my-card .card-btn {
        font-size: 1.2rem;
        padding: 0.5rem 1.5rem;
    }
}
</style>
  