<div>
    <% if $Message %><span class="message $MessageType">$Message</span><% end_if %>
    <div $AttributesHTML data-schema="$SchemaData.JSON">
        <%-- Field is rendered by React components --%>
    </div>
</div>

