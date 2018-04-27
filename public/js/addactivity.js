$(document).ready(function () {
    $('#activityType').change( () => {
        if($('#activityType option:selected').val() == 0){
            $('#activityName').text("");
            $('#activityDescription').text("");
            $('#addActivityFormFields').html("");
        }else {
            $.get('/api/activitytype/' + $('#activityType option:selected').val(), function (data) {
                $('#activityName').text(data.name);
                $('#activityDescription').text(data.description);
                $('#addActivityFormFields').html("");
                $.each(data.fields, function (i) {
                        const name = data.fields[i].name.replace(/ /g,'-').toLowerCase();
                    if (data.fields[i].type.toLowerCase() === "string") {
                        const html = '<div class="form-group"><label for="'+name+'">'
                            + data.fields[i].name + '</label><input type="text" class="form-control"' +
                            ' id="' +name+'" name="'+name+'" placeholder="' + data.fields[i].description +'"></div>';
                        $(html).appendTo('#addActivityFormFields');
                    }

                    if (data.fields[i].type.toLowerCase() === "number") {
                        const html = '<div class="form-group"><label for="'+name+'">'
                            + data.fields[i].name + '</label><input type="text" class="form-control"' +
                            ' id="' +name+'" name="'+name+'" placeholder="' + data.fields[i].description +'"></div>';
                        $(html).appendTo('#addActivityFormFields');

                    }

                    if (data.fields[i].type.toLowerCase() === "currency") {
                        const html = '<div class="form-group"><label for="'+name+'">'
                            + data.fields[i].name + '</label><input type="text" class="form-control"' +
                            ' id="' +name+'" name="'+name+'" placeholder="' + data.fields[i].description +'"></div>';
                        $(html).appendTo('#addActivityFormFields');
                    }

                    if (data.fields[i].type.toLowerCase() === "boolean") {
                        const html = '<div class="form-check form-check-inline">'+
                            '<input class="form-check-input" type="checkbox" id="' + name + '" name="'+name+'" value="true">'+
                            '<label class="form-check-label" for="' + name + '">' + data.fields[i].name +
                            ' - ' +data.fields[i].description +'</label></div>';
                        $(html).appendTo('#addActivityFormFields');

                    }

                });

                $("#submitBtn").prop( "disabled", false );
            });
        }
    });
});