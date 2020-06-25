<html>

<head>
    <title>Javascript ile Çarpım Tablosu Örneği</title>
    <script type="text/javascript">
        document.write("<table border='2'><tr>");
        for (var j = 1; j <= 10; j++) {
            document.write("<td>");
            for (var i = 1; i <= 10; i++) {
                document.write(j + "x" + i + "=" + j * i + "<br/>");
            }
            if (j == 5) {
                document.write("</tr><tr>");
            }
            document.write("</td>");
        }
        document.write("</tr><table>");
    </script>
</head>

<body>
</body>

</html>
