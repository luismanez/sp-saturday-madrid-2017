Connect-SPOService -Url https://<TENANT>-admin.sharepoint.com -Credential (Get-Credential)

Set-SPOTenantCdnEnabled -CdnType Public

Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl "sites/<SITE>/<CDN_Library>"

Get-SPOTenantCdnOrigins -CdnType Public