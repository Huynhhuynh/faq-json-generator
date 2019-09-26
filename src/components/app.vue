<template>
    <div id="page">
        <section class="section">

            <div class="container">

                <div class="columns">
                    <div class="column">

                        <h2 class="title">FAQ Page</h2>

                        <div class="form-container">
                            <div class="repeat-control" v-for="(item_data, index) in form_data" :key="item_data">
                                <button v-if="index > 0" type="button" class="remove" title="remove" @click="remove(item_data)">
                                    <svg x="0px" y="0px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve"> <g> <g> <path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M307.105,271.629 c9.797,9.797,9.797,25.68,0,35.477c-4.898,4.898-11.318,7.347-17.738,7.347c-6.42,0-12.84-2.449-17.738-7.347L229.5,264.977 l-42.128,42.129c-4.898,4.898-11.318,7.347-17.738,7.347c-6.42,0-12.84-2.449-17.738-7.347c-9.797-9.796-9.797-25.68,0-35.477 l42.129-42.129l-42.129-42.129c-9.797-9.797-9.797-25.68,0-35.477s25.68-9.797,35.477,0l42.128,42.129l42.128-42.129 c9.797-9.797,25.68-9.797,35.477,0c9.797,9.796,9.797,25.68,0,35.477l-42.13,42.129L307.105,271.629z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                                </button>

                                <div class="field" v-for="field in form" :key="field">
                                    <label class="label">{{ field.label }}</label>
                                    <div class="control">
                                        <input class="input" type="text" v-model="item_data[field.name]">
                                    </div>
                                </div>
                            </div>
                            <button type="button" name="button" class="button is-primary btn-add-question" @click="add_more">Add Question</button>
                        </div> <!-- .form-container -->

                    </div>

                    <div class="column">
                        <div class="tools">
                            <p class="buttons">
                                <a class="button is-primary" @click="copy()">
                                    <span class="icon"><i class="ion-ios-copy"></i></span>
                                    <span>Copy</span>
                                </a>
                                <a class="Disabled button is-success" disabled>
                                    <span class="icon is-small"><i class="ion-social-codepen"></i></span>
                                    <span>Test</span>
                                </a>
                                <a class="button is-danger is-outlined" @click="reset()">
                                    <span>Reset</span>
                                    <span class="icon is-small"><i class="ion-ios-refresh"></i></span>
                                </a>
                            </p>
                        </div>
<pre id="mockup">
&lt;script type="application/ld+json"&gt;<div v-html="mockup_html"></div>&lt;/script&gt;
</pre>
                    </div>

                </div>

            </div> <!-- .container -->

        </section> <!-- section -->
    </div> <!-- #page -->
</template>

<script type="text/javascript">
    export default {
        data: function() {
            return {
                form: [
                    {
                        name: 'question',
                        label: 'Question',
                        type: 'input',
                    },
                    {
                        name: 'answer',
                        label: 'Answer',
                        type: 'textarea',
                    },
                ],
                form_data: [
                    {
                        'question': '',
                        'answer': '',
                    }
                ],
            }
        },
        computed: {
            mockup_html () {
                var output = [];

                this.form_data.forEach( function( item, index ) {
                    output.push( {
                        "@type": "Question",
                        "name": `<span class='hight-line'>${item.question}</span>`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `<span class='hight-line'>${item.answer}</span>`
                        }
                    } );
                } )

                return {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": output,
                };
            }
        },
        methods: {
            add_more: function() {
                this.form_data.push( {
                    'question': '',
                    'answer': '',
                } )
            },
            remove: function( item ) {

                var new_data = this.form_data.filter( function( _item ) {
                    return (item !== _item);
                } );

                this.form_data = new_data;
            },
            copy: function() {
                var dummy = document.createElement('textarea');
                document.body.appendChild(dummy);
                dummy.value = document.getElementById('mockup').innerHTML.replaceArray(
                    ["&lt;", "&gt;", "<span class=\"hight-line\">", "<span class='hight-line'>", "</span>", "<div>", "</div>"],
                    ["<", ">", "", "", "", "", ""]
                );

                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
            },
            reset: function() {
                this.form_data = [
                    {
                        'question': '',
                        'answer': '',
                    }
                ];
            }
        },
    }
</script>
